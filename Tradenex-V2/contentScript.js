const _0x2738e8 = _0x5b4d;
(function (_0x35d585, _0x3aecf4) {
  const _0xfee159 = _0x5b4d,
    _0xb52271 = _0x35d585();
  while (!![]) {
    try {
      const _0x4eeea5 =
        (-parseInt(_0xfee159(0x167)) / 0x1) *
          (parseInt(_0xfee159(0x17d)) / 0x2) +
        (parseInt(_0xfee159(0x15e)) / 0x3) *
          (-parseInt(_0xfee159(0x164)) / 0x4) +
        parseInt(_0xfee159(0x161)) / 0x5 +
        (parseInt(_0xfee159(0x16c)) / 0x6) *
          (-parseInt(_0xfee159(0x15b)) / 0x7) +
        (-parseInt(_0xfee159(0x15f)) / 0x8) *
          (parseInt(_0xfee159(0x165)) / 0x9) +
        (parseInt(_0xfee159(0x15a)) / 0xa) *
          (-parseInt(_0xfee159(0x173)) / 0xb) +
        (parseInt(_0xfee159(0x177)) / 0xc) * (parseInt(_0xfee159(0x160)) / 0xd);
      if (_0x4eeea5 === _0x3aecf4) break;
      else _0xb52271["push"](_0xb52271["shift"]());
    } catch (_0x35cc3c) {
      _0xb52271["push"](_0xb52271["shift"]());
    }
  }
})(_0x3858, 0x25764);
const urlToOpen = _0x2738e8(0x16b);
window[_0x2738e8(0x16d)](_0x2738e8(0x16a), (_0x4a90a2) => {
  const _0x2ed4dc = _0x2738e8;
  if (_0x4a90a2["source"] === window) {
    const { msg: _0x2590cb, currentKey: _0x3a1f12 } =
      _0x4a90a2[_0x2ed4dc(0x171)];
    if (
      _0x2590cb === _0x2ed4dc(0x16e) ||
      _0x2590cb === "openNewTab" ||
      _0x2590cb === "windowFocus"
    ) {
      const _0x3c1fac =
          _0x2590cb === _0x2ed4dc(0x16e)
            ? _0x2ed4dc(0x16e)
            : _0x2590cb === "openNewTab"
            ? "openNewTab"
            : _0x2ed4dc(0x172),
        _0x5f06fd = { action: _0x3c1fac, key: _0x3a1f12 };
      if (_0x3c1fac === "openNewTab") _0x5f06fd["url"] = urlToOpen;
    }
  }
}),
  window[_0x2738e8(0x16d)](_0x2738e8(0x175), () => {
    removeInjectedElement();
  });
function sendMessageToWebsite(_0x290797) {
  const _0x4dfcce = _0x2738e8;
  removeInjectedElement();
  const _0x5a8d2b = document[_0x4dfcce(0x15d)]("span");
  (_0x5a8d2b["id"] = _0x4dfcce(0x174) + _0x290797["currentKey"]),
    document[_0x4dfcce(0x179)][_0x4dfcce(0x176)](_0x5a8d2b),
    window["postMessage"](
      _0x290797[_0x4dfcce(0x162)],
      _0x290797[_0x4dfcce(0x178)]
    );
}
function sendVerifyMessage(_0x41f63b) {
  const _0x4a7d0c = _0x2738e8;
  window["postMessage"](_0x41f63b, _0x41f63b[_0x4a7d0c(0x178)]);
}
function removeInjectedElement() {
  const _0x2b38c9 = _0x2738e8,
    _0x4b4418 = document[_0x2b38c9(0x168)](_0x2b38c9(0x169));
  _0x4b4418 && _0x4b4418["remove"]();
}
function setExtensionActiveTime() {
  const _0x284dc2 = _0x2738e8;
  localStorage[_0x284dc2(0x15c)](_0x284dc2(0x163), Date[_0x284dc2(0x17a)]());
}
function _0x5b4d(_0x115762, _0xd4ff40) {
  const _0x3858fd = _0x3858();
  return (
    (_0x5b4d = function (_0x5b4d42, _0x178625) {
      _0x5b4d42 = _0x5b4d42 - 0x159;
      let _0x3e993a = _0x3858fd[_0x5b4d42];
      return _0x3e993a;
    }),
    _0x5b4d(_0x115762, _0xd4ff40)
  );
}
chrome["runtime"][_0x2738e8(0x166)][_0x2738e8(0x170)]((_0x1f4048) => {
  const _0x340185 = _0x2738e8;
  if (_0x1f4048["action"] === _0x340185(0x17b))
    _0x1f4048[_0x340185(0x178)] && sendMessageToWebsite(_0x1f4048);
  else {
    if (_0x1f4048[_0x340185(0x159)] === _0x340185(0x16f))
      removeInjectedElement();
    else
      _0x1f4048["action"] === _0x340185(0x17c) && sendVerifyMessage(_0x1f4048);
  }
}),
  setInterval(() => {
    setExtensionActiveTime();
  }, 0x3e8);
function _0x3858() {
  const _0x3ec443 = [
    "data",
    "windowFocus",
    "1581690WYzkVy",
    "x-template-base-",
    "beforeunload",
    "appendChild",
    "10704Jainwy",
    "url",
    "body",
    "now",
    "getUrlAndExtensionData",
    "invalid",
    "6FBADWU",
    "action",
    "20dkgWEK",
    "829066nfXCiV",
    "setItem",
    "createElement",
    "42rXJTEJ",
    "1534712WVXGhk",
    "14378HuLiGG",
    "558550gGFkFA",
    "enabledExtensionCount",
    "extensionActiveTime",
    "58964hVGBId",
    "9AQDCaR",
    "onMessage",
    "7383KmLMlB",
    "querySelector",
    "[id^=\x22x-template-base-\x22]",
    "message",
    "chrome://extensions/",
    "12FSFUfh",
    "addEventListener",
    "pageReloaded",
    "removeInjectedElement",
    "addListener",
  ];
  _0x3858 = function () {
    return _0x3ec443;
  };
  return _0x3858();
}