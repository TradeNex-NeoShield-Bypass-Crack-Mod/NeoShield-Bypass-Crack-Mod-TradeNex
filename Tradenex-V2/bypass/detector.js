const _0x56e1c6 = _0x1362;
function _0x1362(_0x31bbfa, _0x18beb2) {
  const _0xe3ae1c = _0xe3ae();
  return (
    (_0x1362 = function (_0x1362aa, _0x41941b) {
      _0x1362aa = _0x1362aa - 0x1d2;
      let _0x21baac = _0xe3ae1c[_0x1362aa];
      return _0x21baac;
    }),
    _0x1362(_0x31bbfa, _0x18beb2)
  );
}
(function (_0x481dfc, _0x1b3464) {
  const _0x2fa50d = _0x1362,
    _0x4d0f49 = _0x481dfc();
  while (!![]) {
    try {
      const _0x2b66b3 =
        (-parseInt(_0x2fa50d(0x1e3)) / 0x1) *
          (-parseInt(_0x2fa50d(0x1d4)) / 0x2) +
        (parseInt(_0x2fa50d(0x1f9)) / 0x3) *
          (parseInt(_0x2fa50d(0x1d8)) / 0x4) +
        (-parseInt(_0x2fa50d(0x1fa)) / 0x5) *
          (parseInt(_0x2fa50d(0x20f)) / 0x6) +
        (-parseInt(_0x2fa50d(0x1e0)) / 0x7) *
          (-parseInt(_0x2fa50d(0x1de)) / 0x8) +
        parseInt(_0x2fa50d(0x1e1)) / 0x9 +
        parseInt(_0x2fa50d(0x216)) / 0xa +
        -parseInt(_0x2fa50d(0x1fd)) / 0xb;
      if (_0x2b66b3 === _0x1b3464) break;
      else _0x4d0f49["push"](_0x4d0f49["shift"]());
    } catch (_0x27a958) {
      _0x4d0f49["push"](_0x4d0f49["shift"]());
    }
  }
})(_0xe3ae, 0x52ed4);
const ENC_SALT = atob(_0x56e1c6(0x1fe)),
  ENC_ALGO = atob("U0hBLTI1Ng==");
async function login() {
  const _0x4bcfa4 = _0x56e1c6;
  var _0x5ddf6a = JSON["parse"](
    window["localStorage"][_0x4bcfa4(0x1f6)]("FkNeo")
  )[_0x4bcfa4(0x1f7)];
  _0x5ddf6a[_0x4bcfa4(0x20c)](_0x4bcfa4(0x1fc)) &&
    ((MESSAGES[_0x4bcfa4(0x208)] = atob(_0x4bcfa4(0x204))),
    (MESSAGES[_0x4bcfa4(0x1fb)] = atob(_0x4bcfa4(0x1e4))));
  var _0x2af7ad = await fetchList(_0x4bcfa4(0x1ee)),
    _0x228d97 = await fetchList(_0x4bcfa4(0x20d));
  _0x2af7ad["includes"](btoa(_0x5ddf6a)) &&
    (window[_0x4bcfa4(0x1f8)](MESSAGES["blockedMsg"]),
    chrome[_0x4bcfa4(0x211)][_0x4bcfa4(0x1e9)]({ action: _0x4bcfa4(0x1d7) }));
  const _0x169cc9 = async (_0x44f3c2, _0x5a3558) => {
      const _0x23762c = _0x4bcfa4,
        _0x5d7bd = await crypto["subtle"][_0x23762c(0x20e)](
          ENC_ALGO,
          new TextEncoder()[_0x23762c(0x202)](_0x44f3c2 + ENC_SALT)
        ),
        _0x16286a = Array[_0x23762c(0x206)](new Uint8Array(_0x5d7bd)),
        _0x57190f = _0x16286a[_0x23762c(0x1f0)]((_0x1aaddc) =>
          _0x1aaddc["toString"](0x10)["padStart"](0x2, "0")
        )[_0x23762c(0x1ff)]("");
      return _0x57190f[_0x23762c(0x200)](0x0, _0x5a3558);
    },
    _0x5e1d62 = await _0x169cc9(_0x5ddf6a, 0x14);
  if (_0x228d97[_0x4bcfa4(0x1f3)](btoa(_0x5ddf6a)))
    window[_0x4bcfa4(0x1f8)](MESSAGES[_0x4bcfa4(0x213)]);
  else {
    var _0xe8a6a8 = window[_0x4bcfa4(0x1d3)](MESSAGES[_0x4bcfa4(0x208)]);
    if (
      (_0xe8a6a8 && _0xe8a6a8 === _0x5e1d62) ||
      MESSAGES[_0x4bcfa4(0x1dd)][_0x4bcfa4(0x1d6)](_0xe8a6a8) != -0x1
    ) {
      window[_0x4bcfa4(0x1f8)](MESSAGES["bypassMsg"]),
        console[_0x4bcfa4(0x1d5)]("BYPASSED!");
      const _0x3c0625 = {
        isLogin: !![],
        isDemo: ![],
        email: _0x5ddf6a,
        expiry:
          new Date()[_0x4bcfa4(0x203)]() + 0x3e8 * 0x3c * 0x3c * 0x18 * 0x5a,
      };
      window[_0x4bcfa4(0x1e8)][_0x4bcfa4(0x1ea)](
        "FkNeo",
        JSON[_0x4bcfa4(0x207)](_0x3c0625)
      );
    } else
      _0xe8a6a8 == null || _0xe8a6a8 === ""
        ? chrome[_0x4bcfa4(0x211)][_0x4bcfa4(0x1e9)]({
            action: _0x4bcfa4(0x1ed),
          })
        : (window[_0x4bcfa4(0x1f8)](MESSAGES[_0x4bcfa4(0x1fb)]),
          chrome["runtime"][_0x4bcfa4(0x1e9)]({ action: _0x4bcfa4(0x1d7) }));
  }
}
function onStartTest() {
  const _0x1c3b88 = _0x56e1c6;
  var _0x5d330e = window["localStorage"][_0x1c3b88(0x1f6)](_0x1c3b88(0x219));
  chrome[_0x1c3b88(0x1df)]["local"][_0x1c3b88(0x1d9)](
    [_0x1c3b88(0x1e6)],
    (_0x419b8c) => {
      const _0x5d6add = _0x1c3b88;
      var _0x15e526 = _0x419b8c[_0x5d6add(0x1e6)];
      if (_0x5d330e == null) {
        const _0x235dcb = {
          isLogin: ![],
          isDemo: _0x15e526[_0x5d6add(0x217)],
          email: JSON[_0x5d6add(0x1ec)](
            window[_0x5d6add(0x1e8)][_0x5d6add(0x1f6)]("token")
          )[_0x5d6add(0x1f7)],
          expiry:
            new Date()[_0x5d6add(0x203)]() + 0x3e8 * 0x3c * 0x3c * 0x18 * 0x5a,
        };
        window[_0x5d6add(0x1e8)][_0x5d6add(0x1ea)](
          _0x5d6add(0x219),
          JSON[_0x5d6add(0x207)](_0x235dcb)
        ),
          _0x15e526[_0x5d6add(0x217)] == !![]
            ? window[_0x5d6add(0x1f8)](MESSAGES[_0x5d6add(0x210)])
            : onStartTest();
      } else {
        var _0x57b9af = JSON["parse"](_0x5d330e);
        if (_0x57b9af["isLogin"] == !![])
          _0x57b9af["expiry"] < new Date()["getTime"]()
            ? (window[_0x5d6add(0x1e8)][_0x5d6add(0x205)](_0x5d6add(0x219)),
              window[_0x5d6add(0x1f8)](MESSAGES[_0x5d6add(0x1da)]),
              chrome[_0x5d6add(0x211)][_0x5d6add(0x1e9)]({ action: "reload" }))
            : (window[_0x5d6add(0x1f8)](MESSAGES[_0x5d6add(0x1e2)]),
              console[_0x5d6add(0x1d5)](_0x5d6add(0x1eb)));
        else
          _0x57b9af[_0x5d6add(0x20a)] == ![] &&
          _0x15e526[_0x5d6add(0x217)] == !![]
            ? ((_0x57b9af[_0x5d6add(0x20a)] = !![]),
              window[_0x5d6add(0x1f8)](MESSAGES[_0x5d6add(0x210)]),
              window[_0x5d6add(0x1e8)][_0x5d6add(0x1ea)](
                "FkNeo",
                JSON[_0x5d6add(0x207)](_0x57b9af)
              ))
            : login();
      }
    }
  );
}
async function fetchList(_0x553ec4) {
  const _0x4781d0 = _0x56e1c6;
  try {
    const _0x359bc6 = await fetch(_0x553ec4),
      _0x3e9237 = await _0x359bc6[_0x4781d0(0x1d2)]();
    return _0x3e9237[_0x4781d0(0x214)]("\x0a");
  } catch (_0x376697) {
    return console["log"](_0x4781d0(0x201), _0x376697), [];
  }
}
const observer = new MutationObserver((_0x8286f1) => {
  const _0x5421bf = _0x56e1c6;
  for (const _0x55d819 of _0x8286f1) {
    if (_0x55d819[_0x5421bf(0x1f5)] === _0x5421bf(0x20b)) {
      const _0x2778fa = document[_0x5421bf(0x1f1)](_0x5421bf(0x1dc)),
        _0x268c94 = document[_0x5421bf(0x1f1)](_0x5421bf(0x1e7));
      _0x268c94 && _0x268c94[_0x5421bf(0x21a)](),
        _0x2778fa &&
          _0x2778fa[_0x5421bf(0x1ef)] === "Agree\x20&\x20Proceed" &&
          (_0x2778fa[_0x5421bf(0x209)]("click", () => {
            onStartTest();
          }),
          _0x2778fa[_0x5421bf(0x21b)]());
    }
  }
});
function _0xe3ae() {
  const _0x3f672c = [
    "14537600pvCESV",
    "eDAucmFoaWw=",
    "join",
    "slice",
    "Error\x20fetching\x20text\x20file:",
    "encode",
    "getTime",
    "RW50ZXIgYWNjZXNzIGtleSAoR2V0IGl0IGZyb20gdGhlIEB0cmFkZW5leDgwNTUgb24gdGVsZWdyYW0p",
    "removeItem",
    "from",
    "stringify",
    "keyPrompt",
    "addEventListener",
    "isDemo",
    "childList",
    "endsWith",
    "https://raw.githubusercontent.com/ErrorxCode/FkNeo/main/db/vips.list",
    "digest",
    "6132fbOEdr",
    "demoMsg",
    "runtime",
    "RW50ZXIgYWNjZXNzIGtleSAoR2V0IGl0IGZyb20gdGhlIEBFcnJvcnhDb2RlIG9uIHRlbGVncmFtIG9yIEBpbmZyYXJlZC54IG9uIGluc3RhZ3JhbQ==",
    "vipMsg",
    "split",
    "QWNjZXNzIGtleSBleHBpcmVkLCBQbGVhc2UgZW50ZXIgdGhlIGtleSBhZ2FpbiBvciBnZXQgaXQgZnJvbSBARXJyb3J4Q29kZSBvbiB0ZWxlZ3JhbSBvciBASW5mcmFyZWQueCBvbiBpbnN0YWdyYW0=",
    "6548730NFqnpS",
    "isDemoAllowed",
    "V3Jvbmcga2V5LCBkaXNhYmxpbmcgZXh0ZW50aW9uISEhIFBsZWFzZSBnZXQgdGhlIGtleSBmcm9tIEVycm9yeENvZGUgb3IgQGluZnJhcmVkLngoIG9uIGluc3RhZ3JhbQ==",
    "FkNeo",
    "remove",
    "click",
    "text",
    "prompt",
    "601004oWwmFX",
    "log",
    "indexOf",
    "disable-bypass",
    "675064cDjxHS",
    "get",
    "expiredMsg",
    "U2VjdXJpdHkgYnlwYXNzZWQhIE5vdyB5b3UgY2FuIGNvcHkvcGFzdGUvc3dpdGNoIGJldHdlZW4gdGFicy93aW5kb2VzIGVhc2lseQ0KDQpQcm8gdGlwIDogQ2hvb3NlICd3aW5kb3cnIG9wdGlvbiBpbiBzY3JlZW4gY2FwdHVyZSBkaWFsb2c=",
    "#tt-start-accept\x20>\x20div\x20>\x20div\x20>\x20span",
    "keys",
    "72BuELTz",
    "storage",
    "115612QbViEf",
    "2216601gNOhqR",
    "bypassMsg",
    "1HxbdMH",
    "V3Jvbmcga2V5LCBkaXNhYmxpbmcgZXh0ZW50aW9uISEhIFBsZWFzZSBnZXQgdGhlIGtleSBmcm9tIEB0cmFkZW5leDgwNTUgb24gdGVsZWdyYW0=",
    "observe",
    "configs",
    "body\x20>\x20app-root\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20test-taking\x20>\x20app-dialog-sidebar\x20>\x20div",
    "localStorage",
    "sendMessage",
    "setItem",
    "BYPASSED!",
    "parse",
    "reload",
    "https://raw.githubusercontent.com/ErrorxCode/FkNeo/main/db/blocked.list",
    "textContent",
    "map",
    "querySelector",
    "WU9VIEhBVkUgQkVFTiBCTE9DS0VEIFJPTSBVU0lORyBUSEUgRVhURU5USU9OLiBQbGVhc2UgY29udGFjdCB0aGUgYWRtaW5pc3RyYXRvciBvciBrZXktZGVhbGVy",
    "includes",
    "WU9VIEFSRSBBIFZJUCBNRU1CRVIuIFlvdSBjYW4gdXNlIHRoaXMgZXh0ZW50aW9uIGFueXRpbWUgd2l0aG91dCBlbnRlcmluZyBhY2Nlc3Mga2V5cy4gRW5qb3kgOik=",
    "type",
    "getItem",
    "email",
    "alert",
    "6kLxmAZ",
    "130adOiws",
    "wrongKeyMsg",
    "@vitstudent.ac.in",
  ];
  _0xe3ae = function () {
    return _0x3f672c;
  };
  return _0xe3ae();
}
observer[_0x56e1c6(0x1e5)](document["body"], {
  childList: !![],
  subtree: !![],
});
const MESSAGES = {
  keys: [],
  keyPrompt: atob(_0x56e1c6(0x212)),
  demoMsg: atob(
    "VEhJUyBJUyBERVJNTyBVU0UuIElmIHlvdSBkb24ndCBoYXZlIGFjY2VzcyBrZXkgdGhlbiBwbGVhc2UgYnV5IG9uZSBvciBlbHNlIHlvdSB3aWxsIG5vdCBiZSBhYmxlIHRvIHVzZSB0aGUgZXh0ZW50aW9u"
  ),
  bypassMsg: atob(_0x56e1c6(0x1db)),
  blockedMsg: atob(_0x56e1c6(0x1f2)),
  wrongKeyMsg: atob(_0x56e1c6(0x218)),
  vipMsg: atob(_0x56e1c6(0x1f4)),
  expiredMsg: atob(_0x56e1c6(0x215)),
};
