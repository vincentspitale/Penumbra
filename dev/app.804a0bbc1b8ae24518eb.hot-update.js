webpackHotUpdate("app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/toggle/toggle.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/toggle/toggle.css ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".toggler {\n   background: rgb(53, 53, 53);\n   color: white;\n   padding: 10px;\n   font-weight: 700;\n   border-radius: 10px;\n   text-align: center;\n   transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n}\n\n.toggler:hover {\n    transform: scale(1.05);\n}\n\n.toggled {\n    background: var(--holo);\n    color: black;\n}\n\nbutton {\n    background: none;\n    border: none;\n    outline: none;\n}", "",{"version":3,"sources":["webpack://src/components/toggle/toggle.css"],"names":[],"mappings":"AAAA;GACG,2BAA2B;GAC3B,YAAY;GACZ,aAAa;GACb,gBAAgB;GAChB,mBAAmB;GACnB,kBAAkB;GAClB,+CAA+C;AAClD;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,aAAa;AACjB","sourcesContent":[".toggler {\n   background: rgb(53, 53, 53);\n   color: white;\n   padding: 10px;\n   font-weight: 700;\n   border-radius: 10px;\n   text-align: center;\n   transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n}\n\n.toggler:hover {\n    transform: scale(1.05);\n}\n\n.toggled {\n    background: var(--holo);\n    color: black;\n}\n\nbutton {\n    background: none;\n    border: none;\n    outline: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/toggle/toggle.css":
/*!******************************************!*\
  !*** ./src/components/toggle/toggle.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./toggle.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/toggle/toggle.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./toggle.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/toggle/toggle.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./toggle.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/toggle/toggle.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

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
  insertCode(tabId, localStorage.getItem('isDark')); //  else if (info.url && info.url.slice(0,4) == "http") 
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
      isDark: localStorage.getItem('isDark')
    };
  }

  toggle() {
    this.setState({
      isDark: !this.state.isDark
    });
    localStorage.setItem('isDark', this.state.isDark);
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
//# sourceMappingURL=app.804a0bbc1b8ae24518eb.hot-update.js.map