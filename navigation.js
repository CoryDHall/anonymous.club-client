(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["navigation"],{

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js!./app/navigation/Navigation.module.scss":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!/Users/coryhall/Code/FL/anonymous.club/node_modules/sass-loader/dist/cjs.js!./app/navigation/Navigation.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Navigation_navigation__3Jak3 {\n  position: fixed;\n  top: 0;\n  inset-inline: 0;\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  list-style-type: none;\n  color: #b8b8b8;\n}\n.Navigation_navigation__3Jak3 li {\n  margin: 2px 1.4rem;\n}\n.Navigation_navigation__3Jak3 li a {\n  mix-blend-mode: difference;\n  display: block;\n  padding: 8px 1rem;\n  color: inherit;\n  font-size: 1rem;\n  text-decoration: none;\n}", ""]);
// Exports
exports.locals = {
	"navigation": "Navigation_navigation__3Jak3"
};
module.exports = exports;


/***/ }),

/***/ "./app/navigation/Navigation.module.scss":
/*!***********************************************!*\
  !*** ./app/navigation/Navigation.module.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../../../node_modules/sass-loader/dist/cjs.js!./Navigation.module.scss */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js!./app/navigation/Navigation.module.scss");

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

/***/ "./app/navigation/Navigation.tsx":
/*!***************************************!*\
  !*** ./app/navigation/Navigation.tsx ***!
  \***************************************/
/*! exports provided: Navigation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony import */ var _Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Navigation_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation.module.scss */ "./app/navigation/Navigation.module.scss");
/* harmony import */ var _Navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/coryhall/Code/FL/anonymous.club/apps/client/src/app/navigation/Navigation.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* eslint-disable-next-line */




function NavLink(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("li", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: props.href,
      children: props.copy
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

function Navigation(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("nav", {
    className: _Navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.navigation,
    children: props.links.map((link, i) => /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["createElement"])(NavLink, _objectSpread(_objectSpread({}, link), {}, {
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    })))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ })

}]);
//# sourceMappingURL=navigation.js.map