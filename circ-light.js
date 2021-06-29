(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["circ-light"],{

/***/ "../../../libs/ui/src/lib/world-environment/CirculatingLight.tsx":
/*!*****************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/world-environment/CirculatingLight.tsx ***!
  \*****************************************************************************************************/
/*! exports provided: CirculatingLight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CirculatingLight", function() { return CirculatingLight; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/fiber */ "../../../node_modules/@react-three/fiber/dist/react-three-fiber.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-spring/three */ "../../../node_modules/@react-spring/three/dist/react-spring-three.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);




const _excluded = ["shouldStop", "center", "axis", "radius", "period", "freq", "offset"];
var _jsxFileName = "/Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/world-environment/CirculatingLight.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





const TICK_FORWARD = 1 / 30;
const TICK_BACKWARD = -(1 / 180);
function CirculatingLight(_ref) {
  let {
    shouldStop = false,
    center: [cX, cY, cZ] = [0, 0, 0],
    axis: [aX, aY, aZ] = [1, 0, 1],
    radius = 100,
    period = 30,
    freq = 1 / period,
    offset = 0
  } = _ref,
      props = Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, _excluded);

  const ref = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  const {
    sR,
    time
  } = Object(_react_spring_three__WEBPACK_IMPORTED_MODULE_6__["useSpring"])({
    sR: radius,
    time: offset,
    config: {
      tension: 20,
      friction: 190
    }
  });
  const [position, api] = Object(_react_spring_three__WEBPACK_IMPORTED_MODULE_6__["useSpring"])(() => ({
    x: cX + radius * aX,
    y: cY + radius * aY,
    z: cZ + radius * aZ
  }));
  Object(_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__["useFrame"])(({
    clock
  }) => {
    const tD = time.get();

    if (shouldStop) {
      // sR.start(radius * 2);
      time.start(tD + TICK_BACKWARD, {
        immediate: true
      });
    } else {
      time.set(tD + TICK_FORWARD);
    }

    const r = sR.get();
    const t = offset + tD * freq;
    api.set({
      z: cZ + Math.sin(t) * r * aZ,
      x: cX + Math.cos(t) * r * aX,
      y: cY + Math.sin(t) * r * aY
    });
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_react_spring_three__WEBPACK_IMPORTED_MODULE_6__["animated"].pointLight, _objectSpread(_objectSpread({
    castShadow: true,
    intensity: 4,
    "shadow-bias": -0.00002,
    "shadow-mapSize-height": 2048,
    "shadow-mapSize-width": 2048
  }, props), {}, {
    "position-x": position.x,
    "position-y": position.y,
    "position-z": position.z,
    ref: ref
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

/***/ })

}]);
//# sourceMappingURL=circ-light.js.map