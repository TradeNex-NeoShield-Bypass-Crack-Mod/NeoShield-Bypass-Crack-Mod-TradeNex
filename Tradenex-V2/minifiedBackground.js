let tabDetails;
const domain_ip_addresses = [
  "142.250.193.147",
  "34.233.30.196",
  "35.212.92.221",
];
let currentKey = null,
  reloadTabOnNextUrlChange = !1;
const urlPatterns = [
  "mycourses/details?id=",
  "test?id=",
  "mycdetails?c_id=",
  "/test-compatibility",
];
let isReloading = !1,
  isValidExtension = !0;
function fetchExtensionDetails(e) {
  chrome.management.getAll((t) => {
    const n = t.filter(
      (e) => e.enabled && "NeoExamShield" !== e.name && "extension" === e.type
    ).length;
    e(t, n);
  });
}
const fetchDomainIp = (e) =>
  new Promise((t) => {
    const n = new URL(e).hostname;
    fetch(`https://dns.google/resolve?name=${n}`)
      .then((e) => e.json())
      .then((e) => {
        const n = e.Answer.find((e) => 1 === e.type)?.data || null;
        t(n);
      })
      .catch(() => {
        t(null);
      });
  });
async function handleUrlChange() {
  if (urlPatterns.some((e) => tabDetails.url.includes(e))) {
    let e = await fetchDomainIp(tabDetails.url);
    (e && domain_ip_addresses.includes(e)) ||
    tabDetails.url.includes("examly.net") ||
    tabDetails.url.includes("examly.test") ||
    tabDetails.url.includes("examly.io") ||
    tabDetails.url.includes("iamneo.ai")
      ? fetchExtensionDetails((e, t) => {
          let n = {
            action: "getUrlAndExtensionData",
            url: tabDetails.url,
            enabledExtensionCount: t,
            extensions: e,
            id: tabDetails.id,
            currentKey: currentKey,
          };
          chrome.tabs.sendMessage(tabDetails.id, n, (e) => {
            chrome.runtime.lastError &&
              "Could not establish connection. Receiving end does not exist." ===
                chrome.runtime.lastError.message &&
              chrome.tabs.update(tabDetails.id, { url: tabDetails.url });
          });
        })
      : console.log("Failed to fetch IP address");
  }
}
function openNewMinimizedWindowWithUrl(e) {
  chrome.tabs.create({ url: e }, (e) => {});
}
function reloadMatchingTabs() {
  isReloading ||
    ((isReloading = !0),
    chrome.tabs.query({}, (e) => {
      e.forEach((e) => {
        urlPatterns.some((t) => e.url.includes(t)) &&
          chrome.tabs.reload(e.id, () => {
            console.log(`Reloaded tab ${e.id} with URL: ${e.url}`);
          });
      }),
        setTimeout(() => {
          isReloading = !1;
        }, 1e3);
    }));
}
async function verifyFileIntegrity() {
  const e = await Promise.all([
      getFileContent("./minifiedBackground.js"),
      getFileContent("./minifiedContentScript.js"),
    ]),
    t = await checkIfDeveloperMode(),
    n = await fetch(
      "https://us-central1-examly-events.cloudfunctions.net/extension-validator",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          backgroundScript: e[0],
          contentScript: e[1],
          developerMode: t,
        }),
      }
    );
  (await n.json()).license ||
    (sendVerifyMessage(),
    (isValidExtension = !1),
    chrome.management.setEnabled(chrome.runtime.id, !1));
}
async function getFileContent(e) {
  const t = await fetch(chrome.runtime.getURL(e));
  return await t.text();
}
async function checkIfDeveloperMode() {
  return new Promise((e) => {
    chrome.management.getSelf((t) => {
      const n = "development" === t.installType;
      e(n);
    });
  });
}
function sendVerifyMessage() {
  if (urlPatterns.some((e) => tabDetails.url.includes(e))) {
    let e = { action: "invalid", license: isValidExtension };
    chrome.tabs.sendMessage(tabDetails.id, e);
  }
}
function closeBlockedTabs() {
  const e = [
    "google.com",
    "chatgpt.com",
    "claude.ai",
    "gemini.google.com",
    "geeksforgeeks.org",
    "leetcode.com",
    "codechef.com",
    "hackerearth.com",
    "hackerrank.com",
    "stackoverflow.com",
    "springboard.com",
    "coderpad.io",
    "bing.com",
  ];
  chrome.tabs.query({}, (t) => {
    let n = !1;
    t.forEach((e) => {
      urlPatterns.some((t) => e.url.includes(t)) && (n = !0);
    }),
      n &&
        t.forEach((t) => {
          e.some((e) => t.url.includes(e)) &&
            chrome.tabs.remove(t.id, () => {
              chrome.runtime.lastError &&
                console.error(
                  `Error closing tab: ${chrome.runtime.lastError.message}`
                );
            });
        });
  });
}
chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.query({ active: !0, currentWindow: !0 }, (e) => {
    chrome.tabs.update(e[0].id, { url: e[0].url });
  });
}),
  chrome.tabs.onActivated.addListener((e) => {
    chrome.tabs.get(e.tabId, (e) => {
      (tabDetails = e), handleUrlChange();
    });
  }),
  chrome.tabs.onUpdated.addListener((e, t, n) => {
    "complete" === t.status && ((tabDetails = n), handleUrlChange());
  }),
  chrome.windows.onFocusChanged.addListener((e) => {
    e !== chrome.windows.WINDOW_ID_NONE &&
      chrome.tabs.query({ active: !0, windowId: e }, (e) => {
        e.length > 0 && ((tabDetails = e[0]), handleUrlChange());
      });
  }),
  chrome.management.onEnabled.addListener((e) => {
    reloadMatchingTabs();
  }),
  chrome.management.onDisabled.addListener((e) => {
    reloadMatchingTabs();
  }),
  chrome.runtime.onMessage.addListener((e, t, n) => {
    (currentKey = e.key),
      "pageReloaded" === e.action || "windowFocus" === e.action
        ? handleUrlChange()
        : "openNewTab" === e.action && openNewMinimizedWindowWithUrl(e.url);
  }),
  verifyFileIntegrity(),
  setInterval(closeBlockedTabs, 2500),
  setInterval(sendVerifyMessage, 5e3),
  setInterval(verifyFileIntegrity, 3e4);