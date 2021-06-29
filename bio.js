(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bio"],{

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js!./app/bio-text/BioText.module.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!/Users/coryhall/Code/FL/anonymous.club/node_modules/sass-loader/dist/cjs.js!./app/bio-text/BioText.module.scss ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".BioText_bio-text__11Ag1 {\n  text-align: center;\n}\n.BioText_bio-text__child__UFdZw {\n  position: absolute;\n  bottom: 0;\n  inset-inline: 0;\n  z-index: 9;\n}\n.BioText_bio-text__child__UFdZw.BioText_open__oSwLT {\n  min-height: fit-content;\n}\n.BioText_bio-text__child__UFdZw figcaption {\n  color: white;\n  position: relative;\n  max-width: 1024px;\n  width: 90%;\n  padding: 32px;\n  margin: 4px auto;\n  mix-blend-mode: difference;\n  font-size: 1rem;\n}\n.BioText_bio-text__child__UFdZw::before {\n  content: \"\";\n  position: fixed;\n  inset: 0;\n  display: block;\n  transition: top 200ms;\n  background: radial-gradient(ellipse 90vh 100vh at top center, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0) 60vh, rgba(0, 0, 0, 0.75) 85vh);\n}\n.BioText_bio-text__child__UFdZw.BioText_closed__2Dnga::before {\n  top: 100%;\n}", ""]);
// Exports
exports.locals = {
	"bio-text": "BioText_bio-text__11Ag1",
	"bio-text__child": "BioText_bio-text__child__UFdZw",
	"open": "BioText_open__oSwLT",
	"closed": "BioText_closed__2Dnga"
};
module.exports = exports;


/***/ }),

/***/ "./app/bio-text/BioText.module.scss":
/*!******************************************!*\
  !*** ./app/bio-text/BioText.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../../../node_modules/sass-loader/dist/cjs.js!./BioText.module.scss */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js!./app/bio-text/BioText.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/bio-text/BioText.tsx":
/*!**********************************!*\
  !*** ./app/bio-text/BioText.tsx ***!
  \**********************************/
/*! exports provided: BioText, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioText", function() { return BioText; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _BioText_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BioText.module.scss */ "./app/bio-text/BioText.module.scss");
/* harmony import */ var _BioText_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_BioText_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/coryhall/Code/FL/anonymous.club/apps/client/src/app/bio-text/BioText.tsx";

 // import  './BioText.module.scss';


/* eslint-disable-next-line */


const BIO_TEXT = `Anonymous Club is a creative studio led by Shayne Oliver, working in the idioms of fine art,
installation, performance, music and product. Anonymous Club creates radical art and artifacts
designed to upend tradition, infiltrate the mainstream and remake pop culture in its image.`;
function BioText(props) {
  const match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useRouteMatch"])('/bio');
  const setOpen = props.useWorldStore(state => state.setBottomOpen);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log(_BioText_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);
    setOpen(!!match);
  }, [match, setOpen]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: _BioText_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['bio-text'],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: _BioText_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['bio-text__child'] + ' ' + _BioText_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[match ? 'open' : 'closed'],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/bio" // render={() => <div>This is the BioText root route.</div>}
        ,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("figcaption", {
          children: BIO_TEXT
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (BioText);

/***/ })

}]);
//# sourceMappingURL=bio.js.map