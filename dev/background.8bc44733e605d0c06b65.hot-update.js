webpackHotUpdate("background",{

/***/ "./src/background/index.js":
/*!*********************************!*\
  !*** ./src/background/index.js ***!
  \*********************************/
/*! exports provided: messageInBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageInBackground", function() { return messageInBackground; });
/*global chrome*/
// If your extension doesn't need a background script, just leave this file empty
messageInBackground();

function insertCode(tabId, isDark) {
  chrome.tabs.insertCSS(tabId, {
    code: isDark ? "video, embed {  -webkit-filter: invert(100%) hue-rotate(180deg); } " : "video, embed {  -webkit-filter: none; } ",
    allFrames: true,
    runAt: "document_start"
  });
}

chrome.tabs.onUpdated.addListener(function (tabId, info) {
  //  if (info.status && info.status == "complete")
  const stickyValue = window.localStorage.getItem('isDark');
  insertCode(tabId, JSON.parse(stickyValue)); //  else if (info.url && info.url.slice(0,4) == "http") 
  //      insertCSS(tabId);
}); // This needs to be an export due to typescript implementation limitation of needing '--isolatedModules' tsconfig

function messageInBackground() {
  console.log('I can run your javascript like any other code in your project');
  console.log('just do not forget, I cannot render anything !');
}

/***/ })

})
//# sourceMappingURL=background.8bc44733e605d0c06b65.hot-update.js.map