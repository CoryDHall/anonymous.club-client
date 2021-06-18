(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../libs/ui/src/index.ts":
/*!*******************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/index.ts ***!
  \*******************************************************************/
/*! exports provided: Globe, HeroFigurine, asHeroFigurine, WorldEnvironment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_globe_Globe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/globe/Globe */ "../../../libs/ui/src/lib/globe/Globe.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Globe", function() { return _lib_globe_Globe__WEBPACK_IMPORTED_MODULE_0__["Globe"]; });

/* harmony import */ var _lib_hero_figurine_HeroFigurine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/hero-figurine/HeroFigurine */ "../../../libs/ui/src/lib/hero-figurine/HeroFigurine.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeroFigurine", function() { return _lib_hero_figurine_HeroFigurine__WEBPACK_IMPORTED_MODULE_1__["HeroFigurine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asHeroFigurine", function() { return _lib_hero_figurine_HeroFigurine__WEBPACK_IMPORTED_MODULE_1__["asHeroFigurine"]; });

/* harmony import */ var _lib_world_environment_WorldEnvironment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/world-environment/WorldEnvironment */ "../../../libs/ui/src/lib/world-environment/WorldEnvironment.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorldEnvironment", function() { return _lib_world_environment_WorldEnvironment__WEBPACK_IMPORTED_MODULE_2__["WorldEnvironment"]; });





/***/ }),

/***/ "../../../libs/ui/src/lib/globe/Globe.tsx":
/*!******************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/globe/Globe.tsx ***!
  \******************************************************************************/
/*! exports provided: Globe, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globe", function() { return Globe; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _world_environment_jsx_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../world-environment/jsx-extensions */ "../../../libs/ui/src/lib/world-environment/jsx-extensions.tsx");
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/fiber */ "../../../node_modules/@react-three/fiber/dist/react-three-fiber.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var three_src_loaders_ImageBitmapLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/src/loaders/ImageBitmapLoader */ "../../../node_modules/three/src/loaders/ImageBitmapLoader.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three */ "../../../node_modules/three/build/three.module.js");
/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-spring/three */ "../../../node_modules/@react-spring/three/dist/react-spring-three.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "/Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/globe/Globe.tsx";





 // import {use} from '@react-three/drei'

/* eslint-disable-next-line */



function Globe(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: props.imgs.map(src => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_4__["Suspense"], {
      fallback: null,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(GlobeItem, {
        src
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, this)
    }, src, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, this))
  }, void 0, false);
}
/* harmony default export */ __webpack_exports__["default"] = (Globe);

function GlobeItem({
  src,
  size = 250
}) {
  const NUM_ITEM_POINTS = 16;
  const halfDim = size / 2;
  const [img] = Object(_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__["useLoader"])(three_src_loaders_ImageBitmapLoader__WEBPACK_IMPORTED_MODULE_5__["ImageBitmapLoader"], [src], loader => {
    loader.setOptions({
      imageOrientation: 'flipY'
    });
  });
  const [{
    pW,
    pH
  }] = Object(_react_spring_three__WEBPACK_IMPORTED_MODULE_7__["useSpring"])(() => ({
    pW: img.width || 0,
    pH: 0,
    config: {
      tension: 210,
      friction: 40
    }
  }));
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  const tRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  const imgR = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(document.createElement('canvas'));
  const gl = Object(_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__["useThree"])(state => state.gl);
  const {
    drawingBufferHeight,
    drawingBufferWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(() => gl.getContext(), [gl]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useLayoutEffect"])(() => {
    const imgEl = imgR.current;
    const context = imgEl.getContext('2d');
    console.log(context, img, imgEl);
    if (!context) return;
    imgEl.width = img.width;
    imgEl.height = img.height;
    pH.start(img.height);
    context.fillStyle = 'black';
    context.fill();
    context.drawImage(img, 0, 0, imgEl.width, imgEl.height);
    if (tRef.current) tRef.current.needsUpdate = true;
    if (ref.current) ref.current.layers.set(0);
  }, [img, imgR, pH]);
  const points = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(() => {
    const bigR = Math.max(drawingBufferHeight, drawingBufferWidth);
    return new three__WEBPACK_IMPORTED_MODULE_6__["EllipseCurve"](0, 0, bigR - 5, bigR - 5, 0.75 * Math.PI, 1.25 * Math.PI, false, 0).getSpacedPoints(NUM_ITEM_POINTS); // const curve = new EllipseCurve(halfDim / 10, 0, halfDim * 1.0, halfDim * 1.5, -0.0625 * Math.PI, .0625 * Math.PI, false, 0);
    // return curve.getPoints(4);
    // return curve.getSpacedPoints(32);
    // return [[halfDim, halfDim, 20], [-halfDim, halfDim, 20], [-halfDim, -halfDim, 20], [halfDim, -halfDim, 20], [0, 0, 25]].map(p => new Vector3(...p));
  }, [drawingBufferHeight, drawingBufferWidth]);
  Object(_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__["useFrame"])(() => {
    if (!ref.current) return;
    ref.current.scale.y = pH.get() / img.height;
  });
  const tMap = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(() => new three__WEBPACK_IMPORTED_MODULE_6__["CanvasTexture"](img), [img]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("mesh", {
    castShadow: true,
    receiveShadow: true // args={[null, null, 4]}
    ,
    layers: 0,
    ref: ref,
    rotation: [0, 0.75 * Math.PI, Math.PI],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_react_spring_three__WEBPACK_IMPORTED_MODULE_7__["animated"].latheGeometry, {
      args: [points, NUM_ITEM_POINTS, Math.PI * 0.5, Math.PI * 0.5] // scale={new Vector3(1,1,1)}

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("meshPhongMaterial", {
      // color="red"
      // flatShading
      // colorWrite={false}
      fog: false // bumpScale={1}
      ,
      map: tMap,
      normalMap: tMap,
      shininess: 0,
      side: three__WEBPACK_IMPORTED_MODULE_6__["DoubleSide"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("canvasTexture", {
        attachObject: ["attributes", "map"],
        image: img // mapping={}
        ,
        ref: tRef // wrapS={RepeatWrapping}
        // wrapT={RepeatWrapping}
        // onUpdate={self => {
        //   // eslint-disable-next-line no-debugger
        //   debugger;
        //   // console.log(self, ref, img);
        //   (self.needsUpdate = true);
        // }}
        // format={RGBFormat}

      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "../../../libs/ui/src/lib/hero-figurine/HeroFigurine.module.scss":
/*!*****************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/hero-figurine/HeroFigurine.module.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../../node_modules/sass-loader/dist/cjs.js!./HeroFigurine.module.scss */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js!../../../libs/ui/src/lib/hero-figurine/HeroFigurine.module.scss");

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

/***/ "../../../libs/ui/src/lib/hero-figurine/HeroFigurine.tsx":
/*!*********************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/hero-figurine/HeroFigurine.tsx ***!
  \*********************************************************************************************/
/*! exports provided: HeroFigurine, asHeroFigurine, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroFigurine", function() { return HeroFigurine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asHeroFigurine", function() { return asHeroFigurine; });
/* harmony import */ var _Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ "../../../node_modules/@react-three/fiber/dist/react-three-fiber.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _HeroFigurine_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroFigurine.module.scss */ "../../../libs/ui/src/lib/hero-figurine/HeroFigurine.module.scss");
/* harmony import */ var _HeroFigurine_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_HeroFigurine_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _use_gesture_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @use-gesture/react */ "../../../node_modules/@use-gesture/react/dist/use-gesture-react.esm.js");
/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-spring/three */ "../../../node_modules/@react-spring/three/dist/react-spring-three.esm.js");
/* harmony import */ var _world_environment_INITIAL_CAMERA_POSITION__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../world-environment/INITIAL_CAMERA_POSITION */ "../../../libs/ui/src/lib/world-environment/INITIAL_CAMERA_POSITION.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);


const _excluded = ["Model", "useWorldStore"];
var _jsxFileName = "/Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/hero-figurine/HeroFigurine.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







/* eslint-disable-next-line */


function HeroFigurine(_ref) {
  let {
    Model,
    useWorldStore
  } = _ref,
      props = Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  // const onHeroHover = useCallback(useWorldStore(state => state.onHeroHover), [useWorldStore]);
  // const bind = useHover(onHeroHover);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Model, _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
const asHeroFigurine = (Component, useStore) => {
  return props => {
    const onHeroHover = useStore(state => state.onHeroHover);
    const onLoad = useStore(state => state.setHeroCenter);
    const bind = Object(_use_gesture_react__WEBPACK_IMPORTED_MODULE_5__["useDrag"])(onHeroHover);
    const groupRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
    const modelRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
    const {
      rY
    } = Object(_react_spring_three__WEBPACK_IMPORTED_MODULE_6__["useSpring"])({
      rY: 0
    });
    Object(_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["useFrame"])(({
      clock,
      camera
    }) => {
      rY.start(Math.atan(clock.getElapsedTime() * 0.1) * 0.0025); // rY.set(Math.cos(Math.atan(clock.getElapsedTime())));

      if (typeof groupRef.current !== 'undefined') {
        groupRef.current.rotation.y += rY.get();
      }

      if (typeof modelRef.current !== 'undefined') {
        modelRef.current.scale.setScalar((_world_environment_INITIAL_CAMERA_POSITION__WEBPACK_IMPORTED_MODULE_7__["INITIAL_CAMERA_POSITION_LENGTH"] / camera.position.length()) ** -1); // modelRef.current.rotation.copy(camera.rotation);
      }
    });
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("group", {
      ref: modelRef,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Suspense"], {
        fallback: null,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_react_spring_three__WEBPACK_IMPORTED_MODULE_6__["animated"].group, {
          ref: groupRef,
          rotation: [0, 0, 0] // rotation-y={rY.get()}
          ,
          onPointerOver: () => onHeroHover({
            down: true
          }),
          onPointerOut: () => onHeroHover({
            down: false
          }),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Component, _objectSpread(_objectSpread({}, props), {}, {
            onLoad
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined);
  };
};
/* harmony default export */ __webpack_exports__["default"] = (HeroFigurine);

/***/ }),

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
    api.start({
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

/***/ }),

/***/ "../../../libs/ui/src/lib/world-environment/EnvironmentEffects.tsx":
/*!*******************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/world-environment/EnvironmentEffects.tsx ***!
  \*******************************************************************************************************/
/*! exports provided: EnvironmentEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentEffects", function() { return EnvironmentEffects; });
/* harmony import */ var _react_three_postprocessing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-three/postprocessing */ "../../../node_modules/@react-three/postprocessing/dist/index.js");
/* harmony import */ var postprocessing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! postprocessing */ "../../../node_modules/postprocessing/build/postprocessing.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/world-environment/EnvironmentEffects.tsx";



function EnvironmentEffects() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_three_postprocessing__WEBPACK_IMPORTED_MODULE_0__["EffectComposer"], {
    multisampling: 0,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_three_postprocessing__WEBPACK_IMPORTED_MODULE_0__["ChromaticAberration"], {
      blendFunction: postprocessing__WEBPACK_IMPORTED_MODULE_1__["BlendFunction"].NORMAL
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_three_postprocessing__WEBPACK_IMPORTED_MODULE_0__["DepthOfField"], {
      blendFunction: postprocessing__WEBPACK_IMPORTED_MODULE_1__["BlendFunction"].NORMAL,
      bokehScale: 0.95,
      focalLength: 0.8
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_three_postprocessing__WEBPACK_IMPORTED_MODULE_0__["Bloom"], {
      blendFunction: postprocessing__WEBPACK_IMPORTED_MODULE_1__["BlendFunction"].REFLECT // height={32}
      ,
      luminanceSmoothing: 0.1,
      luminanceThreshold: 0.85,
      opacity: 0.5
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_three_postprocessing__WEBPACK_IMPORTED_MODULE_0__["Vignette"], {
      darkness: 0.95,
      eskil: false,
      offset: 0.2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_three_postprocessing__WEBPACK_IMPORTED_MODULE_0__["Noise"], {
      premultiply: true,
      blendFunction: postprocessing__WEBPACK_IMPORTED_MODULE_1__["BlendFunction"].OVERLAY,
      opacity: 0.25
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "../../../libs/ui/src/lib/world-environment/INITIAL_CAMERA_POSITION.tsx":
/*!************************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/world-environment/INITIAL_CAMERA_POSITION.tsx ***!
  \************************************************************************************************************/
/*! exports provided: INITIAL_CAMERA_POSITION, INITIAL_CAMERA_POSITION_LENGTH_SQ, INITIAL_CAMERA_POSITION_LENGTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_CAMERA_POSITION", function() { return INITIAL_CAMERA_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_CAMERA_POSITION_LENGTH_SQ", function() { return INITIAL_CAMERA_POSITION_LENGTH_SQ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_CAMERA_POSITION_LENGTH", function() { return INITIAL_CAMERA_POSITION_LENGTH; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "../../../node_modules/three/build/three.module.js");

const INITIAL_CAMERA_POSITION = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 100, 500);
const INITIAL_CAMERA_POSITION_LENGTH_SQ = INITIAL_CAMERA_POSITION.lengthSq();
const INITIAL_CAMERA_POSITION_LENGTH = INITIAL_CAMERA_POSITION.length();

/***/ }),

/***/ "../../../libs/ui/src/lib/world-environment/InternalCamera.tsx":
/*!***************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/world-environment/InternalCamera.tsx ***!
  \***************************************************************************************************/
/*! exports provided: InternalCamera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalCamera", function() { return InternalCamera; });
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-three/fiber */ "../../../node_modules/@react-three/fiber/dist/react-three-fiber.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _INITIAL_CAMERA_POSITION__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./INITIAL_CAMERA_POSITION */ "../../../libs/ui/src/lib/world-environment/INITIAL_CAMERA_POSITION.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/world-environment/InternalCamera.tsx";
// import { PointerLockControls } from '@react-three/drei';




function InternalCamera() {
  const controls = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(); // const camera = useThree(state => state.camera);
  // const domElement = useThree(state => state.gl.domElement);

  const camera = Object(_react_three_fiber__WEBPACK_IMPORTED_MODULE_0__["useThree"])(state => state.camera);
  const {
    domElement
  } = Object(_react_three_fiber__WEBPACK_IMPORTED_MODULE_0__["useThree"])(state => state.gl);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    console.log(camera);
    camera.position.copy(_INITIAL_CAMERA_POSITION__WEBPACK_IMPORTED_MODULE_2__["INITIAL_CAMERA_POSITION"]); // camera.rotation.set(0, -10, 0);

    if (!controls.current) return;
    controls.current.target.set(0, 0, 0);
    controls.current.maxDistance = 1200;
    controls.current.enablePan = false;
    controls.current.maxAzimuthAngle = 0.125 * Math.PI;
    controls.current.minAzimuthAngle = -0.125 * Math.PI;
    controls.current.minPolarAngle = 0.375 * Math.PI;
    controls.current.maxPolarAngle = 0.625 * Math.PI;
    controls.current.update();
    console.log(controls);
  }, [controls, camera]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("orbitControls", {
    args: [camera, domElement],
    ref: controls
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "../../../libs/ui/src/lib/world-environment/SHADOW_SCALE.ts":
/*!************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/world-environment/SHADOW_SCALE.ts ***!
  \************************************************************************************************/
/*! exports provided: SHADOW_SCALE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHADOW_SCALE", function() { return SHADOW_SCALE; });
const SHADOW_SCALE = 128;

/***/ }),

/***/ "../../../libs/ui/src/lib/world-environment/WorldEnvironment.module.scss":
/*!*************************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/world-environment/WorldEnvironment.module.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../../node_modules/sass-loader/dist/cjs.js!./WorldEnvironment.module.scss */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js!../../../libs/ui/src/lib/world-environment/WorldEnvironment.module.scss");

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

/***/ "../../../libs/ui/src/lib/world-environment/WorldEnvironment.tsx":
/*!*****************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/world-environment/WorldEnvironment.tsx ***!
  \*****************************************************************************************************/
/*! exports provided: WorldEnvironment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldEnvironment", function() { return WorldEnvironment; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _react_three_cannon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/cannon */ "../../../node_modules/@react-three/cannon/dist/index.js");
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/fiber */ "../../../node_modules/@react-three/fiber/dist/react-three-fiber.esm.js");
/* harmony import */ var _jsx_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jsx-extensions */ "../../../libs/ui/src/lib/world-environment/jsx-extensions.tsx");
/* harmony import */ var _WorldEnvironment_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WorldEnvironment.module.scss */ "../../../libs/ui/src/lib/world-environment/WorldEnvironment.module.scss");
/* harmony import */ var _WorldEnvironment_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_WorldEnvironment_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three */ "../../../node_modules/three/build/three.module.js");
/* harmony import */ var _EnvironmentEffects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EnvironmentEffects */ "../../../libs/ui/src/lib/world-environment/EnvironmentEffects.tsx");
/* harmony import */ var _WorldLights__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WorldLights */ "../../../libs/ui/src/lib/world-environment/WorldLights.tsx");
/* harmony import */ var _InternalCamera__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./InternalCamera */ "../../../libs/ui/src/lib/world-environment/InternalCamera.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);



var _jsxFileName = "/Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/world-environment/WorldEnvironment.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









/* eslint-disable-next-line */



function Plane(props) {
  const [ref] = Object(_react_three_cannon__WEBPACK_IMPORTED_MODULE_3__["usePlane"])(() => _objectSpread({
    material: {
      restitution: 0.994
    }
  }, props)); // useFrame(({clock}) => {
  //   // ref.current.rotation.x++
  // });

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("mesh", {
    receiveShadow: true,
    ref: ref,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("planeBufferGeometry", {
      args: props.args,
      attach: "Geometry "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("shadowMaterial", {
      attach: "material",
      color: "black",
      opacity: 0.82
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

function Box(props) {
  const [ref] = Object(_react_three_cannon__WEBPACK_IMPORTED_MODULE_3__["useBox"])(() => _objectSpread({
    material: {
      restitution: 0.94
    }
  }, props));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("mesh", {
    castShadow: true,
    receiveShadow: true,
    ref: ref,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("boxBufferGeometry", {
      args: props.args,
      attach: "geometry"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("meshLambertMaterial", {
      attach: "material",
      color: "hotpink",
      side: three__WEBPACK_IMPORTED_MODULE_7__["DoubleSide"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

function WorldEnvironment({
  useWorldStore,
  children
}) {
  // const shouldStop = useWorldStore(state => state.isHeroHovered);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__["Canvas"], {
    camera: {
      fov: 35,
      far: 10000
    },
    gl: {
      alpha: false,
      toneMapping: three__WEBPACK_IMPORTED_MODULE_7__["ACESFilmicToneMapping"],
      physicallyCorrectLights: false,
      powerPreference: 'high-performance'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_InternalCamera__WEBPACK_IMPORTED_MODULE_10__["InternalCamera"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("color", {
      args: [0x010100],
      attach: "background"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_WorldLights__WEBPACK_IMPORTED_MODULE_9__["WorldLights"], {
      useWorldStore
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, this), children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_EnvironmentEffects__WEBPACK_IMPORTED_MODULE_8__["EnvironmentEffects"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 5
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (WorldEnvironment);

/***/ }),

/***/ "../../../libs/ui/src/lib/world-environment/WorldLights.tsx":
/*!************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/world-environment/WorldLights.tsx ***!
  \************************************************************************************************/
/*! exports provided: WorldLights */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldLights", function() { return WorldLights; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CirculatingLight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CirculatingLight */ "../../../libs/ui/src/lib/world-environment/CirculatingLight.tsx");
/* harmony import */ var _SHADOW_SCALE__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SHADOW_SCALE */ "../../../libs/ui/src/lib/world-environment/SHADOW_SCALE.ts");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ "../../../node_modules/three/build/three.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/fiber */ "../../../node_modules/@react-three/fiber/dist/react-three-fiber.esm.js");
/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-spring/three */ "../../../node_modules/@react-spring/three/dist/react-spring-three.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "/Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/world-environment/WorldLights.tsx";









function StaticLight({
  shouldShowBottom = false
}) {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  const [offset, api] = Object(_react_spring_three__WEBPACK_IMPORTED_MODULE_7__["useSpring"])(() => new three__WEBPACK_IMPORTED_MODULE_4__["Vector3"](1, 1, 1)); // useHelper(ref, SpotLightHelper, 'red');

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    api.start(shouldShowBottom ? {
      x: 0.1,
      y: -3,
      z: 1
    } : {
      x: 1,
      y: 1,
      z: 1
    });
  }, [shouldShowBottom, api]);
  Object(_react_three_fiber__WEBPACK_IMPORTED_MODULE_6__["useFrame"])(({
    camera,
    clock,
    gl
  }) => {
    if (!ref.current) return;
    ref.current.position.copy(camera.position); // if (camera.type === 'PerspectiveCamera') {
    //   ref.current.shadow.camera.fov = camera.getEffectiveFOV() + 90;
    // }

    ref.current.shadow.camera.rotation.copy(camera.rotation);
    ref.current.shadow.camera.layers.set(0); // if (typeof 'red' !== 'undefined') {
    // }
    // const {drawingBufferHeight} = gl.getContext();

    const d0 = camera.position.lengthSq() / 2 ** 12;
    ref.current.position.y -= d0;
    ref.current.position.x -= d0 * 0.5;
    ref.current.position.z -= d0 * 2;
    ref.current.position.x *= offset.x.get();
    ref.current.position.y *= offset.y.get();
    ref.current.position.z *= offset.z.get(); // ref.current.position.y -= 200;
    // ref.current.position.x *= 0;
    // ref.current.shadow.camera.position.x = -drawingBufferHeight / 2;
    // ref.current.shadow.camera.updateProjectionMatrix();
    // ref.current.position.y += 50;
    // ref.current.position.y += drawingBufferHeight / 2;
    // ref.current.position.z *= Math.cos(clock.getElapsedTime() * 2);
    // ref.current.target.position.set(0, 0, -1);
    // ref.current.updateMatrixWorld();
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("spotLight", {
    castShadow: true,
    angle: Math.PI * 0.2125,
    decay: 0.1,
    distance: 0,
    intensity: 2,
    layers: 0,
    penumbra: 0.1,
    ref: ref,
    "shadow-camera-aspect": 0.9,
    "shadow-camera-far": 10000,
    "shadow-mapSize": [2048, 2048]
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

function WorldLights({
  useWorldStore
}) {
  const shouldStop = useWorldStore(state => state.isHeroHovered);
  const shouldShowBottom = useWorldStore(state => state.shouldShowBottom);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("hemisphereLight", {
      // color="white"
      // groundColor="lightblue"
      intensity: 0.01
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_CirculatingLight__WEBPACK_IMPORTED_MODULE_2__["CirculatingLight"], {
      axis: [.1, .1, 1],
      center: [140, -40, -100] // color="gold"
      ,
      decay: 2,
      freq: 0.22,
      intensity: 1,
      layers: 1 // shadow-bias={-0.00002}
      ,
      radius: 60,
      "shadow-camera-far": 10000,
      "shadow-mapSize-height": _SHADOW_SCALE__WEBPACK_IMPORTED_MODULE_3__["SHADOW_SCALE"],
      "shadow-mapSize-width": _SHADOW_SCALE__WEBPACK_IMPORTED_MODULE_3__["SHADOW_SCALE"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_CirculatingLight__WEBPACK_IMPORTED_MODULE_2__["CirculatingLight"], {
      axis: [2, 0.2, 1],
      center: [0, 10, 40],
      color: 0xfdfffc,
      decay: 30,
      distance: 0,
      freq: 0.5,
      intensity: 4.5,
      layers: 1,
      offset: 3.14,
      radius: 400,
      "shadow-bias": -0.0004,
      "shadow-camera-far": 10000,
      "shadow-mapSize-height": _SHADOW_SCALE__WEBPACK_IMPORTED_MODULE_3__["SHADOW_SCALE"],
      "shadow-mapSize-width": _SHADOW_SCALE__WEBPACK_IMPORTED_MODULE_3__["SHADOW_SCALE"] // shouldStop={shouldStop}

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("spotLight", {
      castShadow: true,
      angle: 1.0,
      intensity: 0.5,
      layers: 1,
      position: [100, 200, 300],
      "shadow-bias": -0.00002,
      "shadow-mapSize-height": _SHADOW_SCALE__WEBPACK_IMPORTED_MODULE_3__["SHADOW_SCALE"],
      "shadow-mapSize-width": _SHADOW_SCALE__WEBPACK_IMPORTED_MODULE_3__["SHADOW_SCALE"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(StaticLight, {
      shouldShowBottom: shouldShowBottom
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("spotLight", {
      castShadow: true,
      angle: 1.0,
      decay: 0,
      intensity: 0.5,
      layers: 1,
      position: [-100, 200, 300],
      "shadow-bias": -0.00002,
      "shadow-mapSize-height": _SHADOW_SCALE__WEBPACK_IMPORTED_MODULE_3__["SHADOW_SCALE"],
      "shadow-mapSize-width": _SHADOW_SCALE__WEBPACK_IMPORTED_MODULE_3__["SHADOW_SCALE"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "../../../libs/ui/src/lib/world-environment/jsx-extensions.tsx":
/*!***************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/world-environment/jsx-extensions.tsx ***!
  \***************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-three/fiber */ "../../../node_modules/@react-three/fiber/dist/react-three-fiber.esm.js");
/* harmony import */ var three_stdlib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three-stdlib */ "../../../node_modules/three-stdlib/index.js");
/* harmony import */ var three_examples_jsm_geometries_ConvexGeometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/geometries/ConvexGeometry */ "../../../node_modules/three/examples/jsm/geometries/ConvexGeometry.js");



Object(_react_three_fiber__WEBPACK_IMPORTED_MODULE_0__["extend"])({
  OrbitControls: three_stdlib__WEBPACK_IMPORTED_MODULE_1__["OrbitControls"],
  PointerLockControls: three_stdlib__WEBPACK_IMPORTED_MODULE_1__["PointerLockControls"],
  FirstPersonControls: three_stdlib__WEBPACK_IMPORTED_MODULE_1__["FirstPersonControls"],
  ConvexGeometry: three_examples_jsm_geometries_ConvexGeometry__WEBPACK_IMPORTED_MODULE_2__["ConvexGeometry"]
});

/***/ }),

/***/ "../../../node_modules/core-js/internals/a-possible-prototype.js":
/*!*****************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/a-possible-prototype.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/add-to-unscopables.js":
/*!***************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/add-to-unscopables.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "../../../node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/an-object.js":
/*!******************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/an-object.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/array-includes.js":
/*!***********************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/array-includes.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../../../node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../../../node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/classof-raw.js":
/*!********************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/classof-raw.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/copy-constructor-properties.js":
/*!************************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/copy-constructor-properties.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "../../../node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../../node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/correct-prototype-getter.js":
/*!*********************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/correct-prototype-getter.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/create-iterator-constructor.js":
/*!************************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/create-iterator-constructor.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "../../../node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "../../../node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../../node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../../node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../../node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/create-non-enumerable-property.js":
/*!***************************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../../node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/create-property-descriptor.js":
/*!***********************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/create-property-descriptor.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/define-iterator.js":
/*!************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/define-iterator.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "../../../node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../../../node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../../../node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../../node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../../node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../../node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../../node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "../../../node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/descriptors.js":
/*!********************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/document-create-element.js":
/*!********************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/document-create-element.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/dom-iterables.js":
/*!**********************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/dom-iterables.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/engine-user-agent.js":
/*!**************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/engine-user-agent.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "../../../node_modules/core-js/internals/engine-v8-version.js":
/*!**************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/engine-v8-version.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../../../node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "../../../node_modules/core-js/internals/enum-bug-keys.js":
/*!**********************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/enum-bug-keys.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "../../../node_modules/core-js/internals/export.js":
/*!***************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/export.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../../node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../../node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../../node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "../../../node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../../../node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/fails.js":
/*!**************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/fails.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/get-built-in.js":
/*!*********************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/get-built-in.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "../../../node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/global.js":
/*!***************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/global.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "../../../node_modules/core-js/internals/has.js":
/*!************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/has.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ "../../../node_modules/core-js/internals/to-object.js");

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/hidden-keys.js":
/*!********************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/hidden-keys.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../../../node_modules/core-js/internals/html.js":
/*!*************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/html.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "../../../node_modules/core-js/internals/ie8-dom-define.js":
/*!***********************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/ie8-dom-define.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "../../../node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/indexed-object.js":
/*!***********************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/indexed-object.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../../../node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "../../../node_modules/core-js/internals/inspect-source.js":
/*!***********************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/inspect-source.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "../../../node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "../../../node_modules/core-js/internals/internal-state.js":
/*!***********************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/internal-state.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "../../../node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "../../../node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../../node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../../node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/is-forced.js":
/*!******************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/is-forced.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "../../../node_modules/core-js/internals/is-object.js":
/*!******************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/is-object.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/is-pure.js":
/*!****************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/is-pure.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "../../../node_modules/core-js/internals/iterators-core.js":
/*!***********************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/iterators-core.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../../../node_modules/core-js/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../../node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/iterators.js":
/*!******************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/iterators.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../../../node_modules/core-js/internals/native-symbol.js":
/*!**********************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/native-symbol.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../../../node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/native-weak-map.js":
/*!************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/native-weak-map.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../../../node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-create.js":
/*!**********************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/object-create.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "../../../node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../../node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../../node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "../../../node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "../../../node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../../node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-define-properties.js":
/*!*********************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/object-define-properties.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../../../node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-define-property.js":
/*!*******************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/object-define-property.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../../../node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../../../node_modules/core-js/internals/to-primitive.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../../../node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../../node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../../../node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../../../node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-get-own-property-names.js":
/*!**************************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/object-get-own-property-names.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../../../node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../../node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!****************************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-get-prototype-of.js":
/*!********************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/object-get-prototype-of.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../../node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../../node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "../../../node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-keys-internal.js":
/*!*****************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/object-keys-internal.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "../../../node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../../node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-keys.js":
/*!********************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/object-keys.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../../../node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../../node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-property-is-enumerable.js":
/*!**************************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-set-prototype-of.js":
/*!********************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/object-set-prototype-of.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "../../../node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "../../../node_modules/core-js/internals/own-keys.js":
/*!*****************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/own-keys.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../../../node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../../../node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/path.js":
/*!*************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/path.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "../../../node_modules/core-js/internals/redefine.js":
/*!*****************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/redefine.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../../node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../../../node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../../node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/require-object-coercible.js":
/*!*********************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/require-object-coercible.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/set-global.js":
/*!*******************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/set-global.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/set-to-string-tag.js":
/*!**************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/set-to-string-tag.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/shared-key.js":
/*!*******************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/shared-key.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "../../../node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../../../node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/shared-store.js":
/*!*********************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/shared-store.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../../node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "../../../node_modules/core-js/internals/shared.js":
/*!***************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/shared.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../../node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "../../../node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.13.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-absolute-index.js":
/*!**************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/to-absolute-index.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../../../node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-indexed-object.js":
/*!**************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/to-indexed-object.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../../../node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../../node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-integer.js":
/*!*******************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/to-integer.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-length.js":
/*!******************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/to-length.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../../../node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-object.js":
/*!******************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/to-object.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../../node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-primitive.js":
/*!*********************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/to-primitive.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/uid.js":
/*!************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/uid.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/use-symbol-as-uid.js":
/*!**************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../../../node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "../../../node_modules/core-js/internals/well-known-symbol.js":
/*!**************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/well-known-symbol.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "../../../node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../../../node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../../../node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../../../node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.array.iterator.js":
/*!************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/modules/es.array.iterator.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../../../node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../../node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../../node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "../../../node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!***********************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "../../../node_modules/core-js/internals/dom-iterables.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "../../../node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js!../../../libs/ui/src/lib/hero-figurine/HeroFigurine.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!/Users/coryhall/Code/FL/anonymous.club/node_modules/sass-loader/dist/cjs.js!/Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/hero-figurine/HeroFigurine.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js!../../../libs/ui/src/lib/world-environment/WorldEnvironment.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!/Users/coryhall/Code/FL/anonymous.club/node_modules/sass-loader/dist/cjs.js!/Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/world-environment/WorldEnvironment.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js!./app/App.module.scss":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!/Users/coryhall/Code/FL/anonymous.club/node_modules/sass-loader/dist/cjs.js!./app/App.module.scss ***!
  \******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".App_app__2Lcw_ {\n  position: absolute;\n  inset: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.0625em;\n}", ""]);
// Exports
exports.locals = {
	"app": "App_app__2Lcw_"
};
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js!./app/bio-text/BioText.module.scss":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!/Users/coryhall/Code/FL/anonymous.club/node_modules/sass-loader/dist/cjs.js!./app/bio-text/BioText.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".BioText_bio-text__11Ag1 {\n  text-align: center;\n}\n.BioText_bio-text__child__UFdZw {\n  position: absolute;\n  bottom: 0;\n  inset-inline: 0;\n  z-index: 9;\n}\n.BioText_bio-text__child__UFdZw.BioText_open__oSwLT {\n  min-height: fit-content;\n}\n.BioText_bio-text__child__UFdZw figcaption {\n  color: white;\n  position: relative;\n  max-width: 1024px;\n  width: 90%;\n  padding: 32px;\n  margin: 4px auto;\n  mix-blend-mode: difference;\n}\n.BioText_bio-text__child__UFdZw::before {\n  content: \"\";\n  position: fixed;\n  inset: 0;\n  display: block;\n  transition: top 200ms;\n  background: radial-gradient(ellipse 90vh 100vh at top center, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0) 60vh, rgba(0, 0, 0, 0.75) 85vh);\n}\n.BioText_bio-text__child__UFdZw.BioText_closed__2Dnga::before {\n  top: 100%;\n}", ""]);
// Exports
exports.locals = {
	"bio-text": "BioText_bio-text__11Ag1",
	"bio-text__child": "BioText_bio-text__child__UFdZw",
	"open": "BioText_open__oSwLT",
	"closed": "BioText_closed__2Dnga"
};
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js!./app/navigation/Navigation.module.scss":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!/Users/coryhall/Code/FL/anonymous.club/node_modules/sass-loader/dist/cjs.js!./app/navigation/Navigation.module.scss ***!
  \************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Navigation_navigation__3Jak3 {\n  position: fixed;\n  top: 0;\n  inset-inline: 0;\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  list-style-type: none;\n  color: #b8b8b8;\n}\n.Navigation_navigation__3Jak3 li {\n  margin: 2px 4px;\n}\n.Navigation_navigation__3Jak3 li a {\n  mix-blend-mode: difference;\n  display: block;\n  padding: 8px 32px;\n  color: inherit;\n  font-size: 24px;\n  text-decoration: none;\n}", ""]);
// Exports
exports.locals = {
	"navigation": "Navigation_navigation__3Jak3"
};
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./app/App.module.scss":
/*!*****************************!*\
  !*** ./app/App.module.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../node_modules/sass-loader/dist/cjs.js!./App.module.scss */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js!./app/App.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/App.tsx":
/*!*********************!*\
  !*** ./app/App.tsx ***!
  \*********************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _App_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.module.scss */ "./app/App.module.scss");
/* harmony import */ var _App_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _anonymous_club_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @anonymous.club/ui */ "../../../libs/ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ "../../../node_modules/three/build/three.module.js");
/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-spring/three */ "../../../node_modules/@react-spring/three/dist/react-spring-three.esm.js");
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/fiber */ "../../../node_modules/@react-three/fiber/dist/react-three-fiber.esm.js");
/* harmony import */ var _MODELS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MODELS */ "./app/MODELS.tsx");
/* harmony import */ var _useWorldStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useWorldStore */ "./app/useWorldStore.tsx");
/* harmony import */ var _navigation_Navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navigation/Navigation */ "./app/navigation/Navigation.tsx");
/* harmony import */ var _bio_text_BioText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bio-text/BioText */ "./app/bio-text/BioText.tsx");
/* harmony import */ var _IMGS__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./IMGS */ "./app/IMGS.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);


const _excluded = ["useWorldStore"];
var _jsxFileName = "/Users/coryhall/Code/FL/anonymous.club/apps/client/src/app/App.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











 // const imgs = new URL('../assets/Links/HBA_03_R2_QC_RGB_300dpi copy.jpg', import.meta.url);
// (async () => {
//   console.log(await imgArr[0]);
// })();


console.log(_IMGS__WEBPACK_IMPORTED_MODULE_12__["default"]);

const ClearOnHoverMaterial = _ref => {
  let {
    useWorldStore
  } = _ref,
      props = Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  const ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  const isHeroHovered = useWorldStore(state => 0.3 + 0.7 * ~~!state.isHeroHovered);
  const {
    alpha
  } = Object(_react_spring_three__WEBPACK_IMPORTED_MODULE_6__["useSpring"])({
    alpha: isHeroHovered
  });
  Object(_react_three_fiber__WEBPACK_IMPORTED_MODULE_7__["useFrame"])(() => {
    // useEffect(() => {
    // console.log(alpha, isHeroHovered);
    if (typeof ref.current !== 'undefined') {
      ref.current.opacity = alpha.get(); // ref.current.needsUpdate = true;
    }
  }); // }, [alpha, ref, isHeroHovered]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_react_spring_three__WEBPACK_IMPORTED_MODULE_6__["animated"].meshPhysicalMaterial, _objectSpread(_objectSpread({}, props), {}, {
    ref: ref // transmission={alpha.get()}

  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, undefined);
};

function WorldBackDrop() {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  const {
    gl
  } = Object(_react_three_fiber__WEBPACK_IMPORTED_MODULE_7__["useThree"])();
  const context = gl.getContext();
  const points = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(() => {
    const bigR = Math.max(context.drawingBufferHeight, context.drawingBufferWidth);
    return new three__WEBPACK_IMPORTED_MODULE_5__["EllipseCurve"](1, 0, bigR, bigR, 0.5 * Math.PI, 1.5 * Math.PI, true, 0).getSpacedPoints(64);
  }, [context.drawingBufferHeight, context.drawingBufferWidth]);
  Object(_react_three_fiber__WEBPACK_IMPORTED_MODULE_7__["useFrame"])(({
    camera
  }) => {
    if (!ref.current) return;
    ref.current.rotation.copy(camera.rotation);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("mesh", {
    // castShadow
    receiveShadow: true,
    layers: 0,
    ref: ref,
    scale: [1.01, 1.01, 1.01],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("latheGeometry", {
      args: [points, 64, Math.PI * 0.5, Math.PI * 1.0]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("meshStandardMaterial", {
      // wireframe
      attach: "material" // clearcoat={1}
      // clearcoatRoughness={0.99}
      ,
      color: 0xababab // depthTest={false}
      ,
      fog: false // metalness={0.01}
      // roughness={0.99}
      // side={DoubleSide}

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, this);
}

const LINKS = [{
  href: '/',
  copy: 'Home'
}, {
  href: '/archive',
  copy: 'Archive'
}, {
  href: '/cv',
  copy: 'CV'
}, {
  href: '/bio',
  copy: 'Bio'
}, {
  href: '/hba',
  copy: 'HBA x Anonymous'
}];
function App() {
  const [img, setImg] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(27);
  const [mod, setMod] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(2);
  const CurrentFigure = _MODELS__WEBPACK_IMPORTED_MODULE_8__["MODELS"][mod];
  const hideBG = Object(_useWorldStore__WEBPACK_IMPORTED_MODULE_9__["useWorldStore"])(state => state.shouldShowBottom);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.app,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
      style: {
        position: 'fixed',
        zIndex: 1000
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("input", {
        max: _IMGS__WEBPACK_IMPORTED_MODULE_12__["default"].length - 1,
        min: 0,
        type: "number",
        value: img,
        onChange: ({
          target: {
            value
          }
        }) => setImg(parseInt(value))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("input", {
        max: _MODELS__WEBPACK_IMPORTED_MODULE_8__["MODELS"].length - 1,
        min: 0,
        type: "number",
        value: mod,
        onChange: ({
          target: {
            value
          }
        }) => setMod(parseInt(value))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_navigation_Navigation__WEBPACK_IMPORTED_MODULE_10__["Navigation"], {
      links: LINKS
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_anonymous_club_ui__WEBPACK_IMPORTED_MODULE_3__["WorldEnvironment"], {
      useWorldStore: _useWorldStore__WEBPACK_IMPORTED_MODULE_9__["useWorldStore"],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(WorldBackDrop, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, this), hideBG || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_anonymous_club_ui__WEBPACK_IMPORTED_MODULE_3__["Globe"], {
        imgs: [_IMGS__WEBPACK_IMPORTED_MODULE_12__["default"][img]]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(CurrentFigure // Model={ANO_CHI_01_HIRES}
      // position={[0, 20, -600]}
      // layers={1}
      // scale={1.0}
      , {
        scale: 0.2,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(ClearOnHoverMaterial, {
          useWorldStore: _useWorldStore__WEBPACK_IMPORTED_MODULE_9__["useWorldStore"],
          flatShading: true // vertexColors
          // vertexTangents
          ,
          transparent: true // attach="material"
          // wireframe
          ,
          clearcoat: 1,
          clearcoatRoughness: 0.01 // clearcoatRoughness={0.5}
          // color={0xffffff - 0xebf8fb}
          // ior={1.0}
          ,
          color: 0xebf8fb // depthTest={false}
          ,
          ior: 2.3,
          metalness: 0.92,
          reflectivity: 0.9984 // metalness={0.098}
          ,
          roughness: 0.07062005,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("color", {
            args: [0x010f0f] // args={[0x010000]}
            ,
            attach: "emissive"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("color", {
            args: [0xeeefdd] // args={[0x010000]}
            ,
            attach: "sheen"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_bio_text_BioText__WEBPACK_IMPORTED_MODULE_11__["default"], {
      useWorldStore: _useWorldStore__WEBPACK_IMPORTED_MODULE_9__["useWorldStore"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 5
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./app/IMGS.ts":
/*!*********************!*\
  !*** ./app/IMGS.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([__webpack_require__(/*! ../assets/Links/01_10-Edit copy 2.jpg */ "./assets/Links/01_10-Edit copy 2.jpg"), __webpack_require__(/*! ../assets/Links/07_10 copy 2.jpg */ "./assets/Links/07_10 copy 2.jpg"), __webpack_require__(/*! ../assets/Links/12_06 copy 2.jpg */ "./assets/Links/12_06 copy 2.jpg"), __webpack_require__(/*! ../assets/Links/14_07-Edit copy 2.jpg */ "./assets/Links/14_07-Edit copy 2.jpg"), __webpack_require__(/*! ../assets/Links/ANON 5 RABIT INVERTED.jpg */ "./assets/Links/ANON 5 RABIT INVERTED.jpg"), __webpack_require__(/*! ../assets/Links/Anonymous_200626_Validated Design_Page_04.jpg */ "./assets/Links/Anonymous_200626_Validated Design_Page_04.jpg"), __webpack_require__(/*! ../assets/Links/Anonymous_200626_Validated Design_Page_05.jpg */ "./assets/Links/Anonymous_200626_Validated Design_Page_05.jpg"), __webpack_require__(/*! ../assets/Links/Anonymous_200626_Validated Design_Page_06.jpg */ "./assets/Links/Anonymous_200626_Validated Design_Page_06.jpg"), __webpack_require__(/*! ../assets/Links/Anonymous_200626_Validated Design_Page_07.jpg */ "./assets/Links/Anonymous_200626_Validated Design_Page_07.jpg"), __webpack_require__(/*! ../assets/Links/Anonymous_200626_Validated Design_Page_08.jpg */ "./assets/Links/Anonymous_200626_Validated Design_Page_08.jpg"), __webpack_require__(/*! ../assets/Links/Anonymous_200626_Validated Design_Page_10.jpg */ "./assets/Links/Anonymous_200626_Validated Design_Page_10.jpg"), __webpack_require__(/*! ../assets/Links/Anonymous_200626_Validated Design_Page_11.jpg */ "./assets/Links/Anonymous_200626_Validated Design_Page_11.jpg"), __webpack_require__(/*! ../assets/Links/Dazedmock1.jpg */ "./assets/Links/Dazedmock1.jpg"), __webpack_require__(/*! ../assets/Links/Dazedmock2.jpg */ "./assets/Links/Dazedmock2.jpg"), __webpack_require__(/*! ../assets/Links/Dazedmock3.jpg */ "./assets/Links/Dazedmock3.jpg"), __webpack_require__(/*! ../assets/Links/Dazedmock4.jpg */ "./assets/Links/Dazedmock4.jpg"), __webpack_require__(/*! ../assets/Links/Dazedmock5.jpg */ "./assets/Links/Dazedmock5.jpg"), __webpack_require__(/*! ../assets/Links/Dazedmock6.jpg */ "./assets/Links/Dazedmock6.jpg"), __webpack_require__(/*! ../assets/Links/Dazedmock7.jpg */ "./assets/Links/Dazedmock7.jpg"), __webpack_require__(/*! ../assets/Links/Dazedmock8.jpg */ "./assets/Links/Dazedmock8.jpg"), __webpack_require__(/*! ../assets/Links/HBA (3)_R1_QC_RGB_300dpi copy.jpg */ "./assets/Links/HBA (3)_R1_QC_RGB_300dpi copy.jpg"), __webpack_require__(/*! ../assets/Links/HBA (4)_R2_QC_RGB_300dpi copy.jpg */ "./assets/Links/HBA (4)_R2_QC_RGB_300dpi copy.jpg"), __webpack_require__(/*! ../assets/Links/HBA Polas_032 copy.jpg */ "./assets/Links/HBA Polas_032 copy.jpg"), __webpack_require__(/*! ../assets/Links/HBA Polas_18 copy.jpg */ "./assets/Links/HBA Polas_18 copy.jpg"), __webpack_require__(/*! ../assets/Links/HBA_015 copy.jpg */ "./assets/Links/HBA_015 copy.jpg"), __webpack_require__(/*! ../assets/Links/HBA_017 copy.jpg */ "./assets/Links/HBA_017 copy.jpg"), __webpack_require__(/*! ../assets/Links/HBA_03 copy.jpg */ "./assets/Links/HBA_03 copy.jpg"), __webpack_require__(/*! ../assets/Links/HBA_03_R2_QC_RGB_300dpi copy.jpg */ "./assets/Links/HBA_03_R2_QC_RGB_300dpi copy.jpg"), __webpack_require__(/*! ../assets/Links/HBA_04_R2_QC_RGB_300dpi copy.jpg */ "./assets/Links/HBA_04_R2_QC_RGB_300dpi copy.jpg"), __webpack_require__(/*! ../assets/Links/HBA_07 copy.jpg */ "./assets/Links/HBA_07 copy.jpg"), __webpack_require__(/*! ../assets/Links/HBA_R1_QC_RGB_300dpi copy.jpg */ "./assets/Links/HBA_R1_QC_RGB_300dpi copy.jpg"), __webpack_require__(/*! ../assets/Links/JULY 29 3 FINAL .jpg */ "./assets/Links/JULY 29 3 FINAL .jpg"), __webpack_require__(/*! ../assets/Links/_DSC4291.jpg */ "./assets/Links/_DSC4291.jpg"), __webpack_require__(/*! ../assets/Links/_DSC4457-Edit.jpg */ "./assets/Links/_DSC4457-Edit.jpg"), __webpack_require__(/*! ../assets/Links/_DSC4469.jpg */ "./assets/Links/_DSC4469.jpg"), __webpack_require__(/*! ../assets/Links/_DSC4470.jpg */ "./assets/Links/_DSC4470.jpg"), __webpack_require__(/*! ../assets/Links/anon 3 yves deli.jpg */ "./assets/Links/anon 3 yves deli.jpg"), __webpack_require__(/*! ../assets/Links/anon august 26.jpg */ "./assets/Links/anon august 26.jpg"), __webpack_require__(/*! ../assets/Links/anonymous 4.jpg */ "./assets/Links/anonymous 4.jpg"), __webpack_require__(/*! ../assets/Links/anonymous 5.jpg */ "./assets/Links/anonymous 5.jpg"), __webpack_require__(/*! ../assets/Links/anonymous 6.jpg */ "./assets/Links/anonymous 6.jpg"), __webpack_require__(/*! ../assets/Links/anonymous 7 copy.jpg */ "./assets/Links/anonymous 7 copy.jpg"), __webpack_require__(/*! ../assets/Links/anonymous 8.jpg */ "./assets/Links/anonymous 8.jpg"), __webpack_require__(/*! ../assets/Links/anonymous 9.jpg */ "./assets/Links/anonymous 9.jpg"), __webpack_require__(/*! ../assets/Links/anonymous1.jpg */ "./assets/Links/anonymous1.jpg"), __webpack_require__(/*! ../assets/Links/anonymous3.jpg */ "./assets/Links/anonymous3.jpg"), __webpack_require__(/*! ../assets/Links/cuzzibay.jpg */ "./assets/Links/cuzzibay.jpg"), __webpack_require__(/*! ../assets/Links/headache redu.jpg */ "./assets/Links/headache redu.jpg"), __webpack_require__(/*! ../assets/Links/still 13.jpg */ "./assets/Links/still 13.jpg"), __webpack_require__(/*! ../assets/Links/still 14.jpg */ "./assets/Links/still 14.jpg"), __webpack_require__(/*! ../assets/Links/still 15.jpg */ "./assets/Links/still 15.jpg"), __webpack_require__(/*! ../assets/Links/still 16.jpg */ "./assets/Links/still 16.jpg"), __webpack_require__(/*! ../assets/Links/still 17.jpg */ "./assets/Links/still 17.jpg"), __webpack_require__(/*! ../assets/Links/still 18.jpg */ "./assets/Links/still 18.jpg"), __webpack_require__(/*! ../assets/Links/still 19.jpg */ "./assets/Links/still 19.jpg"), __webpack_require__(/*! ../assets/Links/still 20.jpg */ "./assets/Links/still 20.jpg")]);

/***/ }),

/***/ "./app/MODELS.tsx":
/*!************************!*\
  !*** ./app/MODELS.tsx ***!
  \************************/
/*! exports provided: MODELS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODELS", function() { return MODELS; });
/* harmony import */ var _models_ANO_CHI_01_HIRES__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ANO_CHI_01_HIRES */ "./models/ANO_CHI_01_HIRES.tsx");
/* harmony import */ var _anonymous_club_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @anonymous.club/ui */ "../../../libs/ui/src/index.ts");
/* harmony import */ var _models_ANO_LOGO_01__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/ANO_LOGO_01 */ "./models/ANO_LOGO_01.tsx");
/* harmony import */ var _useWorldStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useWorldStore */ "./app/useWorldStore.tsx");
/* harmony import */ var _models_ANO_LOGO_02__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/ANO_LOGO_02 */ "./models/ANO_LOGO_02.tsx");





const MODELS = [_models_ANO_CHI_01_HIRES__WEBPACK_IMPORTED_MODULE_0__["default"], _models_ANO_LOGO_01__WEBPACK_IMPORTED_MODULE_2__["default"], _models_ANO_LOGO_02__WEBPACK_IMPORTED_MODULE_4__["default"]].map(m => Object(_anonymous_club_ui__WEBPACK_IMPORTED_MODULE_1__["asHeroFigurine"])(m, _useWorldStore__WEBPACK_IMPORTED_MODULE_3__["useWorldStore"]));
;

/***/ }),

/***/ "./app/bio-text/BioText.module.scss":
/*!******************************************!*\
  !*** ./app/bio-text/BioText.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../../node_modules/sass-loader/dist/cjs.js!./BioText.module.scss */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js!./app/bio-text/BioText.module.scss");

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

/***/ }),

/***/ "./app/navigation/Navigation.module.scss":
/*!***********************************************!*\
  !*** ./app/navigation/Navigation.module.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../../node_modules/sass-loader/dist/cjs.js!./Navigation.module.scss */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js!./app/navigation/Navigation.module.scss");

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

/***/ }),

/***/ "./app/useWorldStore.tsx":
/*!*******************************!*\
  !*** ./app/useWorldStore.tsx ***!
  \*******************************/
/*! exports provided: useWorldStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWorldStore", function() { return useWorldStore; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "../../../node_modules/three/build/three.module.js");
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand */ "../../../node_modules/zustand/esm/index.js");


const useWorldStore = Object(zustand__WEBPACK_IMPORTED_MODULE_1__["default"])((set, get) => ({
  isHeroHovered: false,
  shouldShowHelpers: true,
  shouldShowBottom: false,
  heroCenter: new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, 0),

  onHeroHover({
    down: isHeroHovered
  }) {
    set({
      isHeroHovered
    });
  },

  setHeroCenter(model) {
    const heroCenter = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
    console.log(model.getWorldPosition(heroCenter));
    console.log(heroCenter);
    set({
      heroCenter
    });
  },

  setBottomOpen(shouldShowBottom) {
    set({
      shouldShowBottom
    });
  }

}));

/***/ }),

/***/ "./assets/210611/ANO_CHI_01_HIRES.glb":
/*!********************************************!*\
  !*** ./assets/210611/ANO_CHI_01_HIRES.glb ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/models/cdab4f336d4b7b0f9592a0e65db064d2.glb";

/***/ }),

/***/ "./assets/210611/ANO_LOGO_01.glb":
/*!***************************************!*\
  !*** ./assets/210611/ANO_LOGO_01.glb ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/models/a00fe93a812bb87d40470aeef5625cbd.glb";

/***/ }),

/***/ "./assets/210611/ANO_LOGO_02.glb":
/*!***************************************!*\
  !*** ./assets/210611/ANO_LOGO_02.glb ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/models/d79739650452b84d130805cab95f3395.glb";

/***/ }),

/***/ "./assets/Links/01_10-Edit copy 2.jpg":
/*!********************************************!*\
  !*** ./assets/Links/01_10-Edit copy 2.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/f87142a8a3caf84125a5717e0bac6014.jpg";

/***/ }),

/***/ "./assets/Links/07_10 copy 2.jpg":
/*!***************************************!*\
  !*** ./assets/Links/07_10 copy 2.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/25b3f7d82c7f67042891abea7a0eae06.jpg";

/***/ }),

/***/ "./assets/Links/12_06 copy 2.jpg":
/*!***************************************!*\
  !*** ./assets/Links/12_06 copy 2.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/7c2f08b6059b7d8401205ec5e969bb08.jpg";

/***/ }),

/***/ "./assets/Links/14_07-Edit copy 2.jpg":
/*!********************************************!*\
  !*** ./assets/Links/14_07-Edit copy 2.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/ee2676c73819ea5e061ba7284881f380.jpg";

/***/ }),

/***/ "./assets/Links/ANON 5 RABIT INVERTED.jpg":
/*!************************************************!*\
  !*** ./assets/Links/ANON 5 RABIT INVERTED.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/2200ddd6e97b95500219e2ff78d7b028.jpg";

/***/ }),

/***/ "./assets/Links/Anonymous_200626_Validated Design_Page_04.jpg":
/*!********************************************************************!*\
  !*** ./assets/Links/Anonymous_200626_Validated Design_Page_04.jpg ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/f4c1fc369ee11f744f0b9a3031fe74a3.jpg";

/***/ }),

/***/ "./assets/Links/Anonymous_200626_Validated Design_Page_05.jpg":
/*!********************************************************************!*\
  !*** ./assets/Links/Anonymous_200626_Validated Design_Page_05.jpg ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/9fd616183d2c763a9ed5a2f2717215d0.jpg";

/***/ }),

/***/ "./assets/Links/Anonymous_200626_Validated Design_Page_06.jpg":
/*!********************************************************************!*\
  !*** ./assets/Links/Anonymous_200626_Validated Design_Page_06.jpg ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/72c929feea6cc9682eea22109fea04d4.jpg";

/***/ }),

/***/ "./assets/Links/Anonymous_200626_Validated Design_Page_07.jpg":
/*!********************************************************************!*\
  !*** ./assets/Links/Anonymous_200626_Validated Design_Page_07.jpg ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/58b94107e21cedff8be43793ed6c7cb5.jpg";

/***/ }),

/***/ "./assets/Links/Anonymous_200626_Validated Design_Page_08.jpg":
/*!********************************************************************!*\
  !*** ./assets/Links/Anonymous_200626_Validated Design_Page_08.jpg ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/d6538e42079c13adb5df5a39aa82e639.jpg";

/***/ }),

/***/ "./assets/Links/Anonymous_200626_Validated Design_Page_10.jpg":
/*!********************************************************************!*\
  !*** ./assets/Links/Anonymous_200626_Validated Design_Page_10.jpg ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/92548413ffe4a31d104639fb0254d3bf.jpg";

/***/ }),

/***/ "./assets/Links/Anonymous_200626_Validated Design_Page_11.jpg":
/*!********************************************************************!*\
  !*** ./assets/Links/Anonymous_200626_Validated Design_Page_11.jpg ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/c3d787e50979dc862ed141c4e0694d8c.jpg";

/***/ }),

/***/ "./assets/Links/Dazedmock1.jpg":
/*!*************************************!*\
  !*** ./assets/Links/Dazedmock1.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/d78a224c651eeedbe79fb647c41212d8.jpg";

/***/ }),

/***/ "./assets/Links/Dazedmock2.jpg":
/*!*************************************!*\
  !*** ./assets/Links/Dazedmock2.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/9159ecdc6a718d2ac1c26268b066ce59.jpg";

/***/ }),

/***/ "./assets/Links/Dazedmock3.jpg":
/*!*************************************!*\
  !*** ./assets/Links/Dazedmock3.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/b221ec7ff4dd30e446b8d96f8677c551.jpg";

/***/ }),

/***/ "./assets/Links/Dazedmock4.jpg":
/*!*************************************!*\
  !*** ./assets/Links/Dazedmock4.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/58f19b57a090c57b36a99eac1081423d.jpg";

/***/ }),

/***/ "./assets/Links/Dazedmock5.jpg":
/*!*************************************!*\
  !*** ./assets/Links/Dazedmock5.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/3818034eafdbd331207cfb8fd9d7b0fd.jpg";

/***/ }),

/***/ "./assets/Links/Dazedmock6.jpg":
/*!*************************************!*\
  !*** ./assets/Links/Dazedmock6.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/1d5de4160df92a24bfaf6f5ce0620f99.jpg";

/***/ }),

/***/ "./assets/Links/Dazedmock7.jpg":
/*!*************************************!*\
  !*** ./assets/Links/Dazedmock7.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/ef6b41a018a39f8b8a0ae8e5c1c0a927.jpg";

/***/ }),

/***/ "./assets/Links/Dazedmock8.jpg":
/*!*************************************!*\
  !*** ./assets/Links/Dazedmock8.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/0114b34573f064ad03807cb19335d50c.jpg";

/***/ }),

/***/ "./assets/Links/HBA (3)_R1_QC_RGB_300dpi copy.jpg":
/*!********************************************************!*\
  !*** ./assets/Links/HBA (3)_R1_QC_RGB_300dpi copy.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/1dc6e26582358d50558a851c36b942b5.jpg";

/***/ }),

/***/ "./assets/Links/HBA (4)_R2_QC_RGB_300dpi copy.jpg":
/*!********************************************************!*\
  !*** ./assets/Links/HBA (4)_R2_QC_RGB_300dpi copy.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/45204d2fd0edb9e2afbc0b80e9adf4bd.jpg";

/***/ }),

/***/ "./assets/Links/HBA Polas_032 copy.jpg":
/*!*********************************************!*\
  !*** ./assets/Links/HBA Polas_032 copy.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/e770ba8941b42e3c422bc88747843b7e.jpg";

/***/ }),

/***/ "./assets/Links/HBA Polas_18 copy.jpg":
/*!********************************************!*\
  !*** ./assets/Links/HBA Polas_18 copy.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/7ab6256ec44657f10c5dcdb5eb9fc5a3.jpg";

/***/ }),

/***/ "./assets/Links/HBA_015 copy.jpg":
/*!***************************************!*\
  !*** ./assets/Links/HBA_015 copy.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/163e22d2191719bcfbb3adb22032f6f5.jpg";

/***/ }),

/***/ "./assets/Links/HBA_017 copy.jpg":
/*!***************************************!*\
  !*** ./assets/Links/HBA_017 copy.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/b821da1366b5e3db68200839f481778e.jpg";

/***/ }),

/***/ "./assets/Links/HBA_03 copy.jpg":
/*!**************************************!*\
  !*** ./assets/Links/HBA_03 copy.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/d151d84ccf32f7dff99d2eed15cbdaf7.jpg";

/***/ }),

/***/ "./assets/Links/HBA_03_R2_QC_RGB_300dpi copy.jpg":
/*!*******************************************************!*\
  !*** ./assets/Links/HBA_03_R2_QC_RGB_300dpi copy.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/cf55776c5a4b09acaa00999c81f8dfee.jpg";

/***/ }),

/***/ "./assets/Links/HBA_04_R2_QC_RGB_300dpi copy.jpg":
/*!*******************************************************!*\
  !*** ./assets/Links/HBA_04_R2_QC_RGB_300dpi copy.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/d98ebd36aaf431683657d52cff712e5b.jpg";

/***/ }),

/***/ "./assets/Links/HBA_07 copy.jpg":
/*!**************************************!*\
  !*** ./assets/Links/HBA_07 copy.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/2777f17200757104b66a23689c3cff72.jpg";

/***/ }),

/***/ "./assets/Links/HBA_R1_QC_RGB_300dpi copy.jpg":
/*!****************************************************!*\
  !*** ./assets/Links/HBA_R1_QC_RGB_300dpi copy.jpg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/bdb40c6299765938fb8ebbe06976100d.jpg";

/***/ }),

/***/ "./assets/Links/JULY 29 3 FINAL .jpg":
/*!*******************************************!*\
  !*** ./assets/Links/JULY 29 3 FINAL .jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/4ca7d2bc727f9b4bfc0ea858fceb3d66.jpg";

/***/ }),

/***/ "./assets/Links/_DSC4291.jpg":
/*!***********************************!*\
  !*** ./assets/Links/_DSC4291.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/9cdf51fd6b94b3f9e43921e85ee322ac.jpg";

/***/ }),

/***/ "./assets/Links/_DSC4457-Edit.jpg":
/*!****************************************!*\
  !*** ./assets/Links/_DSC4457-Edit.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/5553e45684f8dec2cce7c77a5bc7080e.jpg";

/***/ }),

/***/ "./assets/Links/_DSC4469.jpg":
/*!***********************************!*\
  !*** ./assets/Links/_DSC4469.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/bc9a1c672e35a239f12174ef7d5e7442.jpg";

/***/ }),

/***/ "./assets/Links/_DSC4470.jpg":
/*!***********************************!*\
  !*** ./assets/Links/_DSC4470.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/cf1efdeae432680ba9aa2b71dcf3d3bc.jpg";

/***/ }),

/***/ "./assets/Links/anon 3 yves deli.jpg":
/*!*******************************************!*\
  !*** ./assets/Links/anon 3 yves deli.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/1c28e52e87e2479cfe5b8107830e90a3.jpg";

/***/ }),

/***/ "./assets/Links/anon august 26.jpg":
/*!*****************************************!*\
  !*** ./assets/Links/anon august 26.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/fce73770a00225b648c7d0d2ca15dd8d.jpg";

/***/ }),

/***/ "./assets/Links/anonymous 4.jpg":
/*!**************************************!*\
  !*** ./assets/Links/anonymous 4.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/a06362c8f5bbbeebfa9c203b4f8af753.jpg";

/***/ }),

/***/ "./assets/Links/anonymous 5.jpg":
/*!**************************************!*\
  !*** ./assets/Links/anonymous 5.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/0145f3a391f7b440262177dc318d2086.jpg";

/***/ }),

/***/ "./assets/Links/anonymous 6.jpg":
/*!**************************************!*\
  !*** ./assets/Links/anonymous 6.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/17b6b551677b97ab086ac12ea5b491ff.jpg";

/***/ }),

/***/ "./assets/Links/anonymous 7 copy.jpg":
/*!*******************************************!*\
  !*** ./assets/Links/anonymous 7 copy.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/7a8b1b3cacb61fe1ad7889558be6bc46.jpg";

/***/ }),

/***/ "./assets/Links/anonymous 8.jpg":
/*!**************************************!*\
  !*** ./assets/Links/anonymous 8.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/420c41be7666d30b33282cb4e0bd9086.jpg";

/***/ }),

/***/ "./assets/Links/anonymous 9.jpg":
/*!**************************************!*\
  !*** ./assets/Links/anonymous 9.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/9598bf769ec3be92abeee79a75dad221.jpg";

/***/ }),

/***/ "./assets/Links/anonymous1.jpg":
/*!*************************************!*\
  !*** ./assets/Links/anonymous1.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/314cfce29b384a70eacc028da9a34f5e.jpg";

/***/ }),

/***/ "./assets/Links/anonymous3.jpg":
/*!*************************************!*\
  !*** ./assets/Links/anonymous3.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/f34f6b9bd9a72f60e469566c279bfaf9.jpg";

/***/ }),

/***/ "./assets/Links/cuzzibay.jpg":
/*!***********************************!*\
  !*** ./assets/Links/cuzzibay.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/066590627424b762d78fbc78a20aa018.jpg";

/***/ }),

/***/ "./assets/Links/headache redu.jpg":
/*!****************************************!*\
  !*** ./assets/Links/headache redu.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/2a5bed65a631728ea5436c0376ed23f2.jpg";

/***/ }),

/***/ "./assets/Links/still 13.jpg":
/*!***********************************!*\
  !*** ./assets/Links/still 13.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/ea5524aea5196bad20a5062711203dc1.jpg";

/***/ }),

/***/ "./assets/Links/still 14.jpg":
/*!***********************************!*\
  !*** ./assets/Links/still 14.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/6712a05775e053b9ab794b914fc78625.jpg";

/***/ }),

/***/ "./assets/Links/still 15.jpg":
/*!***********************************!*\
  !*** ./assets/Links/still 15.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/26787d517d55f4d25625e6069c3c801c.jpg";

/***/ }),

/***/ "./assets/Links/still 16.jpg":
/*!***********************************!*\
  !*** ./assets/Links/still 16.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/122dfe0d3b4823ed6d210bb0a4fa77e1.jpg";

/***/ }),

/***/ "./assets/Links/still 17.jpg":
/*!***********************************!*\
  !*** ./assets/Links/still 17.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/52230f48127866aefaea4e736392166d.jpg";

/***/ }),

/***/ "./assets/Links/still 18.jpg":
/*!***********************************!*\
  !*** ./assets/Links/still 18.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/57c8de86cbe0ad7742f620f9609917b8.jpg";

/***/ }),

/***/ "./assets/Links/still 19.jpg":
/*!***********************************!*\
  !*** ./assets/Links/still 19.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/e757556b2f767e5b09fcbc3b45bfde46.jpg";

/***/ }),

/***/ "./assets/Links/still 20.jpg":
/*!***********************************!*\
  !*** ./assets/Links/still 20.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/0cd59060917c7c997f90d57d7f2c5342.jpg";

/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/App */ "./app/App.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/coryhall/Code/FL/anonymous.club/apps/client/src/main.tsx";





console.log(Object({"NODE_ENV":"development","NX_CLI_SET":"true","NX_TASK_HASH":"93d2be4e99d9e710a632c0844377660e12295f71d360be63bf724a40aeb19533","NX_INVOKED_BY_RUNNER":"true","NX_WORKSPACE_ROOT":"/Users/coryhall/Code/FL/anonymous.club","NX_TERMINAL_OUTPUT_PATH":"/Users/coryhall/Code/FL/anonymous.club/node_modules/.cache/nx/terminalOutputs/93d2be4e99d9e710a632c0844377660e12295f71d360be63bf724a40aeb19533","NX_FORWARD_OUTPUT":"true"}));
react_dom__WEBPACK_IMPORTED_MODULE_1__["render"]( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["StrictMode"], {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["HashRouter"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_app_App__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 9,
  columnNumber: 3
}, undefined), document.getElementById('root'));

/***/ }),

/***/ "./models/ANO_CHI_01_HIRES.tsx":
/*!*************************************!*\
  !*** ./models/ANO_CHI_01_HIRES.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Model; });
/* harmony import */ var _Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/drei */ "../../../node_modules/@react-three/drei/index.js");
/* harmony import */ var _assets_210611_ANO_CHI_01_HIRES_glb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/210611/ANO_CHI_01_HIRES.glb */ "./assets/210611/ANO_CHI_01_HIRES.glb");
/* harmony import */ var _assets_210611_ANO_CHI_01_HIRES_glb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_210611_ANO_CHI_01_HIRES_glb__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);


const _excluded = ["children"];
var _jsxFileName = "/Users/coryhall/Code/FL/anonymous.club/apps/client/src/models/ANO_CHI_01_HIRES.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function Model(props) {
  const {
    children
  } = props,
        groupProps = Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  const group = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  const {
    nodes,
    materials
  } = Object(_react_three_drei__WEBPACK_IMPORTED_MODULE_3__["useGLTF"])(_assets_210611_ANO_CHI_01_HIRES_glb__WEBPACK_IMPORTED_MODULE_4___default.a);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("group", _objectSpread(_objectSpread({
    ref: group
  }, groupProps), {}, {
    dispose: null,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("mesh", {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes.CHI_HIRES.geometry,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
_react_three_drei__WEBPACK_IMPORTED_MODULE_3__["useGLTF"].preload(_assets_210611_ANO_CHI_01_HIRES_glb__WEBPACK_IMPORTED_MODULE_4___default.a);

/***/ }),

/***/ "./models/ANO_LOGO_01.tsx":
/*!********************************!*\
  !*** ./models/ANO_LOGO_01.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Model; });
/* harmony import */ var _Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/drei */ "../../../node_modules/@react-three/drei/index.js");
/* harmony import */ var _assets_210611_ANO_LOGO_01_glb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/210611/ANO_LOGO_01.glb */ "./assets/210611/ANO_LOGO_01.glb");
/* harmony import */ var _assets_210611_ANO_LOGO_01_glb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_210611_ANO_LOGO_01_glb__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);


const _excluded = ["children", "onLoad"];
var _jsxFileName = "/Users/coryhall/Code/FL/anonymous.club/apps/client/src/models/ANO_LOGO_01.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function Model(props) {
  const {
    children,
    onLoad
  } = props,
        groupProps = Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  const group = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (!onLoad || !group.current) return;
    onLoad(group.current);
  }, [group, onLoad]);
  const {
    nodes,
    materials
  } = Object(_react_three_drei__WEBPACK_IMPORTED_MODULE_3__["useGLTF"])(_assets_210611_ANO_LOGO_01_glb__WEBPACK_IMPORTED_MODULE_4___default.a);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("group", _objectSpread(_objectSpread({
    ref: group
  }, groupProps), {}, {
    dispose: null,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("mesh", {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes.ANONYMOUS_LOGO_01.geometry // position={[8.82, -8.84, 0]}
      // onAfterRender={(_w, _s, _p, ge) => console.log(args)}
      ,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
_react_three_drei__WEBPACK_IMPORTED_MODULE_3__["useGLTF"].preload(_assets_210611_ANO_LOGO_01_glb__WEBPACK_IMPORTED_MODULE_4___default.a);

/***/ }),

/***/ "./models/ANO_LOGO_02.tsx":
/*!********************************!*\
  !*** ./models/ANO_LOGO_02.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Model; });
/* harmony import */ var _Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/drei */ "../../../node_modules/@react-three/drei/index.js");
/* harmony import */ var _assets_210611_ANO_LOGO_02_glb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/210611/ANO_LOGO_02.glb */ "./assets/210611/ANO_LOGO_02.glb");
/* harmony import */ var _assets_210611_ANO_LOGO_02_glb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_210611_ANO_LOGO_02_glb__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);


const _excluded = ["children", "onLoad"];
var _jsxFileName = "/Users/coryhall/Code/FL/anonymous.club/apps/client/src/models/ANO_LOGO_02.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function Model(props) {
  const {
    children,
    onLoad
  } = props,
        groupProps = Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  const group = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (!onLoad || !group.current) return;
    onLoad(group.current);
  }, [group, onLoad]);
  const {
    nodes,
    materials
  } = Object(_react_three_drei__WEBPACK_IMPORTED_MODULE_3__["useGLTF"])(_assets_210611_ANO_LOGO_02_glb__WEBPACK_IMPORTED_MODULE_4___default.a);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("group", _objectSpread(_objectSpread({
    ref: group
  }, groupProps), {}, {
    dispose: null,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("mesh", {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes.ANONYMOUS_LOGO_02.geometry // position={[8.82, -8.84, 0]}
      // onAfterRender={(_w, _s, _p, ge) => console.log(args)}
      ,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
_react_three_drei__WEBPACK_IMPORTED_MODULE_3__["useGLTF"].preload(_assets_210611_ANO_LOGO_02_glb__WEBPACK_IMPORTED_MODULE_4___default.a);

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/apps/client/src/main.tsx */"./main.tsx");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map