webpackHotUpdate("app",{

/***/ "./src/components/toggle/toggle.js":
/*!*****************************************!*\
  !*** ./src/components/toggle/toggle.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toggle_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggle.css */ "./src/components/toggle/toggle.css");
/* harmony import */ var _toggle_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_toggle_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/vincentspitale/Developer/Web/dark-learning/src/components/toggle/toggle.js";

/*global chrome*/



function insertCode(tabId, isDark) {
  chrome.tabs.insertCSS(tabId, {
    code: isDark ? "video, embed {  -webkit-filter: invert(100%) hue-rotate(180deg); } " : "video, embed {  -webkit-filter: none; } ",
    allFrames: true,
    runAt: "document_start"
  });
}

chrome.tabs.onUpdated.addListener(function (tabId, info) {
  //  if (info.status && info.status == "complete")
  insertCode(tabId, window.localStorage.getItem('isDark')); //  else if (info.url && info.url.slice(0,4) == "http") 
  //      insertCSS(tabId);
});

function updateTabs(isDark) {
  chrome.tabs.query({}, function (tabs) {
    for (var i = 0; i < tabs.length; ++i) {
      var tab = tabs[i];
      if (tab.url && tab.url.slice(0, 4) == "http") insertCode(tab.id, isDark);
    }
  });
}

class Toggle extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isDark: window.localStorage.getItem('isDark')
    };
  }

  toggle() {
    window.localStorage.setItem('isDark', !this.state.isDark); //this.setState({isDark: !this.state.isDark})
  }

  render() {
    updateTabs(this.state.isDark);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: this.state.isDark ? "toggler toggled" : "toggler",
      onClick: () => this.toggle(),
      children: this.state.isDark ? "Disable Invert" : "Enable Invert"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 16
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Toggle);

/***/ })

})
//# sourceMappingURL=app.ba47918f12b6b6e0c3ef.hot-update.js.map