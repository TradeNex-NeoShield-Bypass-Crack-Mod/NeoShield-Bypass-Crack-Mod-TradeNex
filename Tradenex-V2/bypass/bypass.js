function _0x4640() {
  const _0x29fa11 = [
    "webkitVisibilityState",
    "getVideoTracks",
    "altKey",
    "3332660KrvabO",
    "blur",
    "lostpointercapture",
    "getSettings",
    "bind",
    "3468059RWyjqD",
    "contextmenu",
    "defineProperty",
    "107216SMELlh",
    "pagehide",
    "exclude",
    "monitor",
    "window",
    "117125eGOdhH",
    "mediaDevices",
    "24pDnEtm",
    "cloneNode",
    "paste",
    "popstate",
    "getOwnPropertyDescriptor",
    "visibilityState",
    "removeEventListener",
    "270sAefYn",
    "documentElement",
    "webkitvisibilitychange",
    "KeyR",
    "code",
    "keydown",
    "hidden",
    "getDisplayMedia",
    "displaySurface",
    "150174jwRRjq",
    "fullscreenchange",
    "stopPropagation",
    "focus",
    "addEventListener",
    "resize",
    "reload",
    "1128ANCRFV",
    "visibilitychange",
    "stopImmediatePropagation",
    "forEach",
    "3684kIsdTw",
    "mouseleave",
    "body",
    "replaceChild",
    "188310PUveeO",
    "visible",
    "include",
  ];
  _0x4640 = function () {
    return _0x29fa11;
  };
  return _0x4640();
}
function _0x3478(_0x1a4441, _0x1a534a) {
  const _0x46407b = _0x4640();
  return (
    (_0x3478 = function (_0x3478ae, _0x33a0c4) {
      _0x3478ae = _0x3478ae - 0x1a6;
      let _0x4cc37f = _0x46407b[_0x3478ae];
      return _0x4cc37f;
    }),
    _0x3478(_0x1a4441, _0x1a534a)
  );
}
const _0x1d1be5 = _0x3478;
(function (_0x236b50, _0x44b658) {
  const _0xf84696 = _0x3478,
    _0x503c23 = _0x236b50();
  while (!![]) {
    try {
      const _0x5aa69f =
        parseInt(_0xf84696(0x1b0)) / 0x1 +
        (-parseInt(_0xf84696(0x1cd)) / 0x2) *
          (-parseInt(_0xf84696(0x1c9)) / 0x3) +
        (parseInt(_0xf84696(0x1b2)) / 0x4) *
          (-parseInt(_0xf84696(0x1d1)) / 0x5) +
        parseInt(_0xf84696(0x1c2)) / 0x6 +
        parseInt(_0xf84696(0x1a8)) / 0x7 +
        (-parseInt(_0xf84696(0x1ab)) / 0x8) *
          (parseInt(_0xf84696(0x1b9)) / 0x9) +
        -parseInt(_0xf84696(0x1d7)) / 0xa;
      if (_0x5aa69f === _0x44b658) break;
      else _0x503c23["push"](_0x503c23["shift"]());
    } catch (_0x200e6c) {
      _0x503c23["push"](_0x503c23["shift"]());
    }
  }
})(_0x4640, 0x5a0f5);
const windowEvents = [
    _0x1d1be5(0x1d8),
    _0x1d1be5(0x1c5),
    "beforeunload",
    _0x1d1be5(0x1ac),
    "unload",
    _0x1d1be5(0x1ce),
    _0x1d1be5(0x1b5),
    _0x1d1be5(0x1c7),
    _0x1d1be5(0x1ac),
    _0x1d1be5(0x1d9),
    _0x1d1be5(0x1c3),
    "visibilitychange",
  ],
  documentEvents = [
    _0x1d1be5(0x1b4),
    "onpaste",
    _0x1d1be5(0x1a9),
    _0x1d1be5(0x1ca),
    _0x1d1be5(0x1bb),
  ],
  eventHandler = (_0x279c08) => {
    const _0x46708d = _0x1d1be5;
    _0x279c08[_0x46708d(0x1c4)](), _0x279c08[_0x46708d(0x1cb)]();
  },
  originalVisibilityState = Object["getOwnPropertyDescriptor"](
    document,
    _0x1d1be5(0x1b7)
  ),
  originalWebkitVisibilityState = Object[_0x1d1be5(0x1b6)](
    document,
    _0x1d1be5(0x1d4)
  ),
  originalHidden = Object["getOwnPropertyDescriptor"](
    document,
    _0x1d1be5(0x1bf)
  );
document[_0x1d1be5(0x1c6)](_0x1d1be5(0x1be), function (_0x532a88) {
  const _0x596538 = _0x1d1be5;
  if (_0x532a88[_0x596538(0x1d6)] && _0x532a88[_0x596538(0x1bd)] === "KeyD")
    setTimeout(() => {
      restoreOrignality();
    }, 0x7d0);
  else {
    if (
      _0x532a88["altKey"] &&
      _0x532a88[_0x596538(0x1bd)] === _0x596538(0x1bc)
    ) {
      const _0x2102fc = document[_0x596538(0x1cf)][_0x596538(0x1b3)](!![]);
      document[_0x596538(0x1ba)][_0x596538(0x1d0)](
        _0x2102fc,
        document[_0x596538(0x1cf)]
      ),
        window["location"][_0x596538(0x1c8)]();
    }
  }
});
function bypassRestrictions() {
  const _0x15e8f4 = _0x1d1be5;
  windowEvents[_0x15e8f4(0x1cc)]((_0xdbbcc) => {
    window["addEventListener"](_0xdbbcc, eventHandler, !![]);
  }),
    documentEvents["forEach"]((_0x1dbd82) => {
      const _0x1b6768 = _0x15e8f4;
      document[_0x1b6768(0x1c6)](_0x1dbd82, eventHandler, !![]);
    }),
    Object["defineProperty"](document, _0x15e8f4(0x1b7), {
      get: () => _0x15e8f4(0x1d2),
      configurable: !![],
    }),
    Object[_0x15e8f4(0x1aa)](document, _0x15e8f4(0x1d4), {
      get: () => "visible",
      configurable: !![],
    }),
    Object[_0x15e8f4(0x1aa)](document, _0x15e8f4(0x1bf), {
      get: () => ![],
      configurable: !![],
    });
}
function spoofScreenRecording() {
  const _0x389fc1 = _0x1d1be5,
    _0x49dab5 = navigator[_0x389fc1(0x1b1)][_0x389fc1(0x1c0)];
  navigator[_0x389fc1(0x1b1)][_0x389fc1(0x1c0)] = async function (_0x49e961) {
    const _0x4faa61 = _0x389fc1;
    _0x49e961 = {
      selfBrowserSurface: _0x4faa61(0x1d3),
      monitorTypeSurfaces: _0x4faa61(0x1ad),
      video: { displaySurface: _0x4faa61(0x1af) },
    };
    const _0x184ade = (_0x96565, _0xbe0f6b) => {
        const _0x4d3dc9 = _0x4faa61;
        let _0x18ad75 = _0x96565[_0x4d3dc9(0x1d5)]()[0x0];
        const _0x3058b7 =
          _0x18ad75[_0x4d3dc9(0x1a6)][_0x4d3dc9(0x1a7)](_0x18ad75);
        _0x18ad75[_0x4d3dc9(0x1a6)] = function () {
          const _0x5d7cc8 = _0x4d3dc9,
            _0x8c39a6 = _0x3058b7();
          return (_0x8c39a6[_0x5d7cc8(0x1c1)] = _0xbe0f6b), _0x8c39a6;
        };
      },
      _0x49512a = await _0x49dab5["call"](
        navigator[_0x4faa61(0x1b1)],
        _0x49e961
      );
    return _0x184ade(_0x49512a, _0x4faa61(0x1ae)), _0x49512a;
  };
}
function restoreOrignality() {
  const _0x58e675 = _0x1d1be5;
  windowEvents[_0x58e675(0x1cc)]((_0x5424e1) => {
    const _0x1c7175 = _0x58e675;
    window[_0x1c7175(0x1b8)](_0x5424e1, eventHandler, !![]);
  }),
    documentEvents[_0x58e675(0x1cc)]((_0x566265) => {
      const _0x516a35 = _0x58e675;
      document[_0x516a35(0x1c6)](_0x566265, eventHandler, !![]);
    }),
    originalVisibilityState &&
      Object[_0x58e675(0x1aa)](
        document,
        _0x58e675(0x1b7),
        originalVisibilityState
      ),
    originalWebkitVisibilityState &&
      Object[_0x58e675(0x1aa)](
        document,
        _0x58e675(0x1d4),
        originalWebkitVisibilityState
      ),
    originalHidden &&
      Object["defineProperty"](document, "hidden", originalHidden);
}
bypassRestrictions(), spoofScreenRecording();