(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../libs/ui/src/index.ts":
/*!*******************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/index.ts ***!
  \*******************************************************************/
/*! exports provided: constants, makeUseRefTarget, useBufferHeight, useRefFrame, Grid, GridConstraints, materials, GridGlobe, Globe, HeroFigurine, asHeroFigurine, WorldEnvironment, WorldBackDrop, EnvironmentEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentEffects", function() { return EnvironmentEffects; });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/constants */ "../../../libs/ui/src/lib/constants.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return _lib_constants__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/utils */ "../../../libs/ui/src/lib/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeUseRefTarget", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_3__["makeUseRefTarget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useBufferHeight", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_3__["useBufferHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRefFrame", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_3__["useRefFrame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_3__["Grid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridConstraints", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_3__["GridConstraints"]; });

/* harmony import */ var _lib_materials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/materials */ "../../../libs/ui/src/lib/materials/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "materials", function() { return _lib_materials__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _lib_globe_Globe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/globe/Globe */ "../../../libs/ui/src/lib/globe/Globe.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridGlobe", function() { return _lib_globe_Globe__WEBPACK_IMPORTED_MODULE_5__["GridGlobe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Globe", function() { return _lib_globe_Globe__WEBPACK_IMPORTED_MODULE_5__["Globe"]; });

/* harmony import */ var _lib_hero_figurine_HeroFigurine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/hero-figurine/HeroFigurine */ "../../../libs/ui/src/lib/hero-figurine/HeroFigurine.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeroFigurine", function() { return _lib_hero_figurine_HeroFigurine__WEBPACK_IMPORTED_MODULE_6__["HeroFigurine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asHeroFigurine", function() { return _lib_hero_figurine_HeroFigurine__WEBPACK_IMPORTED_MODULE_6__["asHeroFigurine"]; });

/* harmony import */ var _lib_world_environment_WorldEnvironment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/world-environment/WorldEnvironment */ "../../../libs/ui/src/lib/world-environment/WorldEnvironment.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorldEnvironment", function() { return _lib_world_environment_WorldEnvironment__WEBPACK_IMPORTED_MODULE_7__["WorldEnvironment"]; });

/* harmony import */ var _lib_world_environment_WorldBackDrop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/world-environment/WorldBackDrop */ "../../../libs/ui/src/lib/world-environment/WorldBackDrop.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorldBackDrop", function() { return _lib_world_environment_WorldBackDrop__WEBPACK_IMPORTED_MODULE_8__["WorldBackDrop"]; });












const EnvironmentEffects = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(() => __webpack_require__.e(/*! import() | envfx */ "envfx").then(__webpack_require__.bind(null, /*! ./lib/world-environment/EnvironmentEffects */ "../../../libs/ui/src/lib/world-environment/EnvironmentEffects.tsx")));

/***/ }),

/***/ "../../../libs/ui/src/lib/constants.ts":
/*!***************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/constants.ts ***!
  \***************************************************************************/
/*! exports provided: PI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PI", function() { return PI; });
const _pi = {};

for (let i = 0; i <= 4; i++) {
  _pi[`_${i}`] = i * Math.PI;
}

[1, 2, 4, 8, 16, 32, 64].forEach(j => {
  const m = 32 / j;

  for (let i = 1; i <= m * 2; i++) {
    var _pi$key;

    const key = `_${i}_${m}`;
    _pi[key] = (_pi$key = _pi[key]) !== null && _pi$key !== void 0 ? _pi$key : Math.PI * i / m;
  }
});
Object.freeze(_pi);
const PI = _pi;

/***/ }),

/***/ "../../../libs/ui/src/lib/globe/Globe.tsx":
/*!******************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/globe/Globe.tsx ***!
  \******************************************************************************/
/*! exports provided: GridGlobe, Globe, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridGlobe", function() { return GridGlobe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globe", function() { return Globe; });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _world_environment_jsx_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../world-environment/jsx-extensions */ "../../../libs/ui/src/lib/world-environment/jsx-extensions.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _GlobeItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GlobeItem */ "../../../libs/ui/src/lib/globe/GlobeItem.tsx");
/* harmony import */ var _utils_useBufferHeight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useBufferHeight */ "../../../libs/ui/src/lib/utils/useBufferHeight.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/globe/Globe.tsx";



/* eslint-disable-next-line */




const GridGlobe = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["lazy"])(() => __webpack_require__.e(/*! import() | globe */ "globe").then(__webpack_require__.bind(null, /*! ./GridGlobe */ "../../../libs/ui/src/lib/globe/GridGlobe.tsx")));
function Globe(props) {
  const {
    imgs,
    cols
  } = props;
  const numCols = Math.min(imgs.length, cols !== null && cols !== void 0 ? cols : 4);
  const buffer = Object(_utils_useBufferHeight__WEBPACK_IMPORTED_MODULE_4__["useBufferHeight"])(); // tGrid.setContraint([8]);
  // const g = useMemo(() => tGrid, []);
  // const [gL, setGL] = useState(tGrid.length);
  // const [cb, setCB] = useState<RenderCallback>((): RenderCallback => ({ clock }) => {
  //   if (g.length > 18) {
  //     setTimeout(() => setCB(() => undefined));
  //     return;
  //   }
  //   if (tGrid.length < 18 && ((15 * ((3 * clock.getElapsedTime()) % 2)) | 0) === 0) {
  //     requestAnimationFrame(() => {
  //       tGrid.push({
  //         key: `r:${tGrid.length}`,
  //         height: (50 + Math.random() * 1000) | 0,
  //         next: undefined,
  //       });
  //       setTimeout(() =>
  //         setGL(g.length),
  //       100,
  //       );
  //     });
  //   }
  // });
  // useFrame(cb);
  // const gArr = useMemo(() => {
  //   const arr = g.toArray();
  //   console.log(g, gL, arr.map(pluck('rect')).map(pluck('0')));
  //   return arr.slice(0, gL);
  // }, [g, gL]);
  // useEffect(() => {
  // }, [buffer.height]);

  const numRows = Math.ceil(imgs.length / numCols);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: imgs.map((src, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_GlobeItem__WEBPACK_IMPORTED_MODULE_3__["GlobeItem"], {
      index: i,
      numCols: numCols,
      numRows: numRows,
      src: src
    }, `${src}?${numCols}${numRows}`, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }, this))
  }, void 0, false);
}
/* harmony default export */ __webpack_exports__["default"] = (Globe);

/***/ }),

/***/ "../../../libs/ui/src/lib/globe/GlobeItem.tsx":
/*!**********************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/globe/GlobeItem.tsx ***!
  \**********************************************************************************/
/*! exports provided: GlobeItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobeItem", function() { return GlobeItem; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "../../../node_modules/three/build/three.module.js");
/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-spring/three */ "../../../node_modules/@react-spring/three/dist/react-spring-three.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "../../../libs/ui/src/lib/utils/index.ts");
/* harmony import */ var _ImageMaterial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ImageMaterial */ "../../../libs/ui/src/lib/globe/ImageMaterial.tsx");
/* harmony import */ var _utils_useRefEffect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useRefEffect */ "../../../libs/ui/src/lib/utils/useRefEffect.tsx");
/* harmony import */ var _verticalSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./verticalSlice */ "../../../libs/ui/src/lib/globe/verticalSlice.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "/Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/globe/GlobeItem.tsx";








function GlobeItem(props) {
  const gutter = 0.02;
  const {
    src,
    size = 250,
    numCols,
    numRows
  } = props;
  const {
    index = 0
  } = props;
  const {
    position: [pX, pY] = [~~(index / numCols) % numRows, index % numCols]
  } = props;
  const NUM_ITEM_POINTS = 16;
  const halfDim = size / 2;
  const mRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  const [dim, setDim] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  const seed = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => 60 * (0.5 + 2 * Math.random()), []);
  const buffer = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["useBufferHeight"])();
  const [origin, setOrigin] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(() => new three__WEBPACK_IMPORTED_MODULE_3__["Vector3"](0, buffer.diag * 2 * (pX - numCols / 2), -buffer.diag));
  const head = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => new three__WEBPACK_IMPORTED_MODULE_3__["Vector3"](0, 0, 0), []);
  const scaleSpringRef = Object(_react_spring_three__WEBPACK_IMPORTED_MODULE_4__["useSpringRef"])();
  const morphSpringRef = Object(_react_spring_three__WEBPACK_IMPORTED_MODULE_4__["useSpringRef"])();
  const rotationSpringRef = Object(_react_spring_three__WEBPACK_IMPORTED_MODULE_4__["useSpringRef"])();
  const [{
    pH
  }] = Object(_react_spring_three__WEBPACK_IMPORTED_MODULE_4__["useSpring"])(() => ({
    pH: 0,
    config: {
      tension: 210,
      friction: 40,
      bounce: 0.05
    },
    default: true,
    ref: scaleSpringRef
  }));
  const [{
    pos,
    mH
  }, pApi] = Object(_react_spring_three__WEBPACK_IMPORTED_MODULE_4__["useSpring"])(() => ({
    pos: 1,
    mH: 0,
    config: {
      tension: 120,
      friction: 30,
      mass: 1 + Math.random()
    },
    delay: seed,
    default: true,
    ref: morphSpringRef,
    onRest: {
      pos: () => {
        var _mRef$current$geometr;

        if (!mRef.current) return;
        mRef.current.geometry.boundingSphere && setOrigin((_mRef$current$geometr = mRef.current.geometry.boundingSphere) === null || _mRef$current$geometr === void 0 ? void 0 : _mRef$current$geometr.center);
      }
    }
  }));
  const xStart = 0.5 * Math.PI;
  const xDelta = Math.PI / (numCols / 2);
  const yStart = 0.5 * Math.PI;
  const yDelta = 2 * Math.PI / numRows;
  const {
    rD,
    rM,
    rX,
    rZ
  } = Object(_react_spring_three__WEBPACK_IMPORTED_MODULE_4__["useSpring"])({
    rD: 0.25 * Math.PI - xDelta * pY,
    // rM: (pX - (numRows - 1) / 2)
    rM: 0.1 * buffer.height * (pX - (numRows - 1) / 2),
    rZ: buffer.height * (numRows - (pX - (numRows - 1) / 2)),
    rX: Math.PI * 0.75 * (pX - (numRows - 1) / 2),
    // rX: -(yStart - yDelta * (pX - (numRows - 1) / 2))
    ref: rotationSpringRef
  });
  Object(_react_spring_three__WEBPACK_IMPORTED_MODULE_4__["useChain"])([scaleSpringRef, morphSpringRef, rotationSpringRef], [0.5, 0.2, 0]);
  const afterImageLoads = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(img => {
    pH.start(1);
    pos.start(0);
    mH.start(1); // setDim((img.height / img.width) / (buffer.height / buffer.width));

    setDim(img.height / img.width); // pH.start((img.width / img.height) ** 1);
  }, [mH, pH, pos]);
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  const lref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(); // useEffect(() => {
  //   if (dim === 0) return;
  //   pH.start(1);
  //   pos.start(0);
  //   mH.start(1);
  // }, [dim, mH, pH, pos]);
  // useLayoutEffect(() => {
  //   // console.log(pX, pY, numCols, numRows, (pX - (numRows - 1) / 2));
  //   // if (ref.current) {
  //   //   ref.current.layers.set(0);
  //   //   // console.log(ref.current.getWorldPosition(new Vector3()));
  //   // };
  //   // mH.start(1);
  // }, [pos, pH, src, pX, pY, numCols, numRows, mH]);

  const sliceFn = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => Object(_verticalSlice__WEBPACK_IMPORTED_MODULE_8__["verticalSlice"])(1, gutter), []);
  const sliceFn2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => Object(_verticalSlice__WEBPACK_IMPORTED_MODULE_8__["verticalSlice"])(numRows, gutter), [numRows]);
  const points = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => {
    const r = buffer.diag * 2;
    const [phiStart, phiEnd] = sliceFn(0);
    const curve = new three__WEBPACK_IMPORTED_MODULE_3__["EllipseCurve"](-r * 0.25, 0, r - gutter, r - gutter, phiStart, phiEnd, false, 0); // const curve = new EllipseCurve(bigR * 1.75, 0, 20 * bigR - gutter, 20 * bigR - gutter, phiStart, phiEnd, false, 0);

    const curvePoints = curve.getSpacedPoints(NUM_ITEM_POINTS);
    return curvePoints;
  }, [buffer.diag, sliceFn]);
  Object(_utils__WEBPACK_IMPORTED_MODULE_5__["useRefFrame"])(([obj]) => {
    // if (!pos.isAnimating) return;
    const {
      position
    } = obj;
    position.lerpVectors(head, origin, pos.get()); // position.lerpVectors(posCenter, cam.position.clone().negate(), pos.get());
    // if (obj.morphTargetInfluences) {
    //   obj.morphTargetInfluences[0] = mH.get();
    // }
    // else
    //   obj.updateMorphTargets();
    // obj?.lookAt(posCenter);
  }, [mRef]);
  Object(_utils_useRefEffect__WEBPACK_IMPORTED_MODULE_7__["useRefEffect"])(([geometry]) => {
    const r = buffer.diag; // const curve = new EllipseCurve(0, 0, 2 * bigR - gutter, 2 * bigR - gutter, 0.75 * Math.PI, 1.25 * Math.PI, false, 0);

    const [phiStart, phiEnd] = sliceFn2(pX);
    const curve = new three__WEBPACK_IMPORTED_MODULE_3__["EllipseCurve"](-r * 0.5, 0, 2 * r - gutter, 2 * r - gutter, phiStart, phiEnd, false, 0);
    const curvePoints = curve.getSpacedPoints(NUM_ITEM_POINTS);
    const l2 = new three__WEBPACK_IMPORTED_MODULE_3__["LatheBufferGeometry"](curvePoints, NUM_ITEM_POINTS * 2, xStart, xDelta - gutter);
    const l2P = l2.getAttribute('position').clone();
    if (!geometry.morphAttributes.position) geometry.morphAttributes.position = [];
    geometry.morphAttributes.position[0] = l2P; // geometry.morphAttributes.position[0] = new Float32BufferAttribute(planar, 3);
    // if (!geometry.morphAttributes.normal)
    //   geometry.morphAttributes.normal = [];
    // const l2N = l2.getAttribute('normal').clone();
    // geometry.morphAttributes.normal[0] = l2N;
    // const l2U = l2.getAttribute('uv').clone();
    // if (!geometry.morphAttributes.uv)
    //   geometry.morphAttributes.uv = [];
    // geometry.morphAttributes.uv[0] = l2U;

    l2.dispose();
  }, [lref], [lref.current, pX]); // useRefEffect(([geometry]) => {
  //   const position = geometry.getAttribute('position');
  //   if (!geometry.morphAttributes.position) geometry.morphAttributes.position = [];
  //   geometry.computeBoundingBox();
  //   geometry.boundingSphere ?? geometry.computeBoundingSphere();
  //   const box = geometry.boundingBox;
  //   const sphere = geometry.boundingSphere;
  //   const planar: number[] = [];
  //   const plane = new Plane(box?.getCenter(new Vector3()).normalize().negate(), sphere?.radius);
  //   const up = new Vector3(0, 1, 0);
  //   const vertex = new Vector3();
  //   const v2 = new Vector3();
  //   for (let i = 0; i < position.count; i++) {
  //     const x = position.getX(i);
  //     const y = position.getY(i);
  //     const z = position.getZ(i);
  //     vertex.set(x, y, z);
  //     // plane.projectPoint(vertex, v2);
  //     v2.lerp(vertex, 0.5);
  //     v2.projectOnPlane(up).toArray(planar, planar.length);
  //   }
  //   geometry.morphAttributes.position[0] = new Float32BufferAttribute(planar, 3);
  //   console.log(geometry, plane);
  // }, [lref], [lref.current]);
  // useHelper(mRef, VertexNormalsHelper, 100);

  const mti = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => [], []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_react_spring_three__WEBPACK_IMPORTED_MODULE_4__["animated"].group, {
    castShadow: true,
    receiveShadow: true,
    layers: 1,
    ref: ref,
    "rotation-x": 0 // rotation-z={Math.PI}
    ,
    "rotation-y": rD,
    "rotation-z": 0 // scale={pH}
    ,
    "scale-x": 1,
    "scale-y": 1,
    "scale-z": pH,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_react_spring_three__WEBPACK_IMPORTED_MODULE_4__["animated"].mesh, {
      castShadow: true,
      receiveShadow: true // layers={0}
      // quaternion={new Quaternion()}
      // quaternion-w={rM}
      // lookAt={posCenter}
      // quaternion-y={0}
      // quaternion-z={0}
      ,
      morphTargetInfluences: mti,
      "morphTargetInfluences-0": mH,
      "position-z": rZ,
      ref: mRef,
      "rotation-order": "ZXY",
      "rotation-x": 0,
      "rotation-y": 0,
      "rotation-z": Math.PI,
      scale: 1,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("latheBufferGeometry", {
        args: [points, NUM_ITEM_POINTS * 2, xStart, gutter] // args={[points, NUM_ITEM_POINTS * 2, xStart, xDelta - gutter]}
        ,
        ref: lref
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_ImageMaterial__WEBPACK_IMPORTED_MODULE_6__["ImageMaterial"], {
        delay: pX * numCols,
        src: src,
        onLoad: afterImageLoads
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 161,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "../../../libs/ui/src/lib/globe/ImageMaterial.tsx":
/*!**************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/globe/ImageMaterial.tsx ***!
  \**************************************************************************************/
/*! exports provided: ImageMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageMaterial", function() { return ImageMaterial; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "../../../node_modules/three/build/three.module.js");
/* harmony import */ var _utils_useRefEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useRefEffect */ "../../../libs/ui/src/lib/utils/useRefEffect.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/globe/ImageMaterial.tsx";




const BLANK_IMG = new ImageData(2, 2);
BLANK_IMG.data.set([255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 0, 0, 0, 255]);
const dataCache = {};
const DOWNSAMPLING = 1;
function ImageMaterial({
  src,
  onLoad,
  delay
}) {
  const tRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  const imgR = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(document.createElement('canvas').getContext('2d'));
  const iLoader = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(new Image());
  const [iD, setImageData] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(dataCache[src] || BLANK_IMG);
  const didLoad = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(i => {
    onLoad && onLoad(i);
    setImageData(i);
  }, [onLoad]);
  Object(_utils_useRefEffect__WEBPACK_IMPORTED_MODULE_4__["useRefEffect"])(([ct]) => {
    if (iD) {
      ct.image = iD;
      ct.needsUpdate = true;

      if (iD !== BLANK_IMG) {
        dataCache[src] = iD;
      }
    }
  }, [tRef], [iD]);
  Object(_utils_useRefEffect__WEBPACK_IMPORTED_MODULE_4__["useRefEffect"])(([context]) => {
    let delOpen;

    if (iD === dataCache[src]) {
      delOpen = setTimeout(() => didLoad(iD), delay);
      return () => {
        clearTimeout(delOpen);
      };
    } // const context = imgEl.getContext && imgEl.getContext('2d');
    // if (!context) return;


    const iht = iLoader.current;

    iht.onload = () => {
      const {
        naturalHeight,
        naturalWidth
      } = iht;
      const h = naturalHeight * DOWNSAMPLING;
      const w = naturalWidth * DOWNSAMPLING;
      context.canvas.width = w;
      context.canvas.height = h;
      context.fillStyle = '#020202';
      context.fillRect(0, 0, w, h);
      context.drawImage(iht, 0, 0, w, h);
      context.scale(-1, 1);
      const i = context.getImageData(0, 0, w, h); // onLoad && onLoad(i);

      delOpen = setTimeout(() => didLoad(i), delay);
      ;
    };

    iht.src = src;
    return () => {
      iht.onload = null;
      clearTimeout(delOpen);
    };
  }, [imgR], [src, didLoad]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("meshPhysicalMaterial", {
    // flatShading
    // vertexColors
    // wireframe
    // depthTest={false}
    // depthWrite={false}
    clipIntersection: true,
    morphTargets: true // shininess={0.0}
    ,
    transparent: true,
    clearcoat: 1,
    clearcoatRoughness: 0.9,
    fog: false,
    metalness: 0.1,
    ref: Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(),
    reflectivity: 0.4,
    roughness: 0.4,
    side: three__WEBPACK_IMPORTED_MODULE_3__["DoubleSide"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("canvasTexture", {
      flipY: true,
      anisotropy: 2,
      attach: "map",
      magFilter: three__WEBPACK_IMPORTED_MODULE_3__["LinearFilter"],
      minFilter: three__WEBPACK_IMPORTED_MODULE_3__["LinearFilter"],
      needsUpdate: false // offset-x={0.2}
      // offset-y={0.2}
      ,
      ref: tRef // repeat-x={1.25}
      // repeat-y={1.25}
      // wrapS={MirroredRepeatWrapping}
      // wrapT={MirroredRepeatWrapping}

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 5
  }, this); // return (
  //   <meshPhysicalMaterial
  //     // flatShading
  //     // vertexColors
  //     // wireframe
  //     // depthTest={false}
  //     // depthWrite={false}
  //     clipIntersection
  //     morphTargets
  //     // shininess={0.0}
  //     transparent
  //     clearcoat={1}
  //     clearcoatRoughness={0.9}
  //     fog={false}
  //     metalness={0.1}
  //     ref={useRef()}
  //     reflectivity={0.4}
  //     roughness={0.4}
  //     side={DoubleSide}
  //     >
  //     <canvasTexture
  //       flipY
  //       anisotropy={2}
  //       attach="map"
  //       magFilter={LinearFilter}
  //       minFilter={LinearFilter}
  //       needsUpdate={false}
  //       // offset-x={0.2}
  //       // offset-y={0.2}
  //       ref={tRef}
  //       // repeat-x={1.25}
  //       // repeat-y={1.25}
  //       wrapS={MirroredRepeatWrapping}
  //       wrapT={MirroredRepeatWrapping}
  //       />
  //   </meshPhysicalMaterial>
  // );
}

/***/ }),

/***/ "../../../libs/ui/src/lib/globe/verticalSlice.tsx":
/*!**************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/globe/verticalSlice.tsx ***!
  \**************************************************************************************/
/*! exports provided: verticalSlice, vSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verticalSlice", function() { return verticalSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vSlice", function() { return vSlice; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "../../../libs/ui/src/lib/constants.ts");

const verticalSlice = (divisions = 1, gutter = 0) => {
  const dStart = _constants__WEBPACK_IMPORTED_MODULE_0__["PI"]._3_4;
  const dDelta = _constants__WEBPACK_IMPORTED_MODULE_0__["PI"]._1_2 / divisions;
  return cell => {
    return [0, 1].map(i => dStart + dDelta * (cell + i) - i * gutter);
  };
};
const vSlice = (mStart = '_3_4', mLength = '_1_2') => {
  const startAngle = _constants__WEBPACK_IMPORTED_MODULE_0__["PI"][mStart];
  const angleSlope = _constants__WEBPACK_IMPORTED_MODULE_0__["PI"][mLength];
  return (maxHeight = 1, gutter = 0) => {
    const m = angleSlope / maxHeight;
    const gutteredStartAngle = startAngle - gutter;
    return (start, end) => [startAngle + m * start, gutteredStartAngle + m * end];
  };
}; // console.log(PI._2);
// console.log(vSlice()(10, 0.5)(0, 10), verticalSlice(1, 0.5)(0));

/***/ }),

/***/ "../../../libs/ui/src/lib/hero-figurine/HeroFigurine.module.scss":
/*!*****************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/hero-figurine/HeroFigurine.module.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../../../node_modules/sass-loader/dist/cjs.js!./HeroFigurine.module.scss */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js!../../../libs/ui/src/lib/hero-figurine/HeroFigurine.module.scss");

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
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/fiber */ "../../../node_modules/@react-three/fiber/dist/react-three-fiber.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _HeroFigurine_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeroFigurine.module.scss */ "../../../libs/ui/src/lib/hero-figurine/HeroFigurine.module.scss");
/* harmony import */ var _HeroFigurine_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_HeroFigurine_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-spring/three */ "../../../node_modules/@react-spring/three/dist/react-spring-three.esm.js");
/* harmony import */ var _world_environment_INITIAL_CAMERA_POSITION__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../world-environment/INITIAL_CAMERA_POSITION */ "../../../libs/ui/src/lib/world-environment/INITIAL_CAMERA_POSITION.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "../../../libs/ui/src/lib/utils/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constants */ "../../../libs/ui/src/lib/constants.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);




const _excluded = ["Model", "useWorldStore"];
var _jsxFileName = "/Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/hero-figurine/HeroFigurine.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








/* eslint-disable-next-line */


function HeroFigurine(_ref) {
  let {
    Model,
    useWorldStore
  } = _ref,
      props = Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, _excluded);

  // const onHeroHover = useCallback(useWorldStore(state => state.onHeroHover), [useWorldStore]);
  // const bind = useHover(onHeroHover);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(Model, _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
const asHeroFigurine = (Component, useStore) => {
  const _overflow = _constants__WEBPACK_IMPORTED_MODULE_10__["PI"]._2 * 1000;

  return function HeroFigurine(props) {
    const onHeroHover = useStore(state => state.onHeroHover);
    const onLoad = useStore(state => state.setHeroCenter);
    const groupRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
    const modelRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
    const {
      rY
    } = Object(_react_spring_three__WEBPACK_IMPORTED_MODULE_7__["useSpring"])({
      rY: 0,
      default: true
    });
    Object(_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__["useFrame"])(() => {
      const newNum = rY.goal + 0.01; // eslint-disable-next-line @typescript-eslint/no-explicit-any

      rY.start(newNum * (newNum < _overflow));
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_9__["useRefFrame"])(([m], [{
      camera
    }]) => {
      m.scale.setScalar(camera.position.length() / _world_environment_INITIAL_CAMERA_POSITION__WEBPACK_IMPORTED_MODULE_8__["INITIAL_CAMERA_POSITION_LENGTH"]);
    }, [modelRef]);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("group", {
      ref: modelRef,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_5__["Suspense"], {
        fallback: null,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_react_spring_three__WEBPACK_IMPORTED_MODULE_7__["animated"].group, {
          ref: groupRef,
          "rotation-y": rY,
          onPointerOut: Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(() => onHeroHover({
            down: false
          }), [onHeroHover]),
          onPointerOver: Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(() => onHeroHover({
            down: true
          }), [onHeroHover]),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(Component, _objectSpread(_objectSpread({}, props), {}, {
            onLoad: onLoad
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this);
  };
};
/* harmony default export */ __webpack_exports__["default"] = (HeroFigurine);

/***/ }),

/***/ "../../../libs/ui/src/lib/materials/CellMaterial/CellMaterial.tsx":
/*!******************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/materials/CellMaterial/CellMaterial.tsx ***!
  \******************************************************************************************************/
/*! exports provided: CellMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellMaterial", function() { return CellMaterial; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ "../../../node_modules/three/build/three.module.js");
/* harmony import */ var _image_frag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image.frag */ "../../../libs/ui/src/lib/materials/CellMaterial/image.frag");
/* harmony import */ var _image_frag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_image_frag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _circleSection_vert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./circleSection.vert */ "../../../libs/ui/src/lib/materials/CellMaterial/circleSection.vert");
/* harmony import */ var _circleSection_vert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_circleSection_vert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_useRefFrame__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/useRefFrame */ "../../../libs/ui/src/lib/utils/useRefFrame.tsx");
/* harmony import */ var _utils_useRefLayoutEffect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/useRefLayoutEffect */ "../../../libs/ui/src/lib/utils/useRefLayoutEffect.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "/Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/materials/CellMaterial/CellMaterial.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








console.dir([three__WEBPACK_IMPORTED_MODULE_4__["ShaderMaterial"], three__WEBPACK_IMPORTED_MODULE_4__["PointsMaterial"]]);
function CellMaterial(props) {
  const [shaderDef] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(() => [{
    defines: {
      USE_SIZEATTENUATION: '',
      USE_MAP: '',
      USE_COLOR: ''
    },
    uniforms: three__WEBPACK_IMPORTED_MODULE_4__["UniformsUtils"].merge([three__WEBPACK_IMPORTED_MODULE_4__["UniformsLib"].common, three__WEBPACK_IMPORTED_MODULE_4__["UniformsLib"].points, three__WEBPACK_IMPORTED_MODULE_4__["UniformsLib"].fog, {
      randBase: {
        value: Math.random()
      }
    }]),
    fragmentShader: (_image_frag__WEBPACK_IMPORTED_MODULE_5___default()),
    vertexShader: (_circleSection_vert__WEBPACK_IMPORTED_MODULE_6___default())
  }], []);
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  Object(_utils_useRefFrame__WEBPACK_IMPORTED_MODULE_7__["useRefFrame"])(([mat], [{
    clock
  }]) => {
    mat.uniforms.randBase.value = Math.sin(Math.random() * 0.01 + mat.uniforms.randBase.value || 0) ** 2; // mat.uniforms.size.value = 200;
    // mat.uniforms.scale.value = 300;

    return; // let { value: rV } = mat.uniforms.randBase;
    // rV = rV || 0;
    // rV += (Math.random() - 0.5) * 0.005;
    // rV *= (rV < 1) as any;
    // rV *= (rV > 0) as any;
    // mat.uniforms.randBase.value = rV;
    // mat.uniformsNeedUpdate = true;
  }, [ref]);
  Object(_utils_useRefLayoutEffect__WEBPACK_IMPORTED_MODULE_8__["useRefLayoutEffect"])(([mat]) => {
    const openMat = mat;
    openMat.isMeshBasicMaterial = true;
    openMat.isPointsMaterial = true;
    openMat.color = new three__WEBPACK_IMPORTED_MODULE_4__["Color"](0xf8f8f8); // mat.uniforms.sizeAttenuation.value = true;
  }, [ref]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("shaderMaterial", _objectSpread(_objectSpread({}, props), {}, {
    args: [shaderDef],
    ref: ref // onBeforeCompile={(...args) => {debugger;console.log(args)}}

  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "../../../libs/ui/src/lib/materials/CellMaterial/circleSection.vert":
/*!********************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/materials/CellMaterial/circleSection.vert ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "uniform float size;uniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <color_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <project_vertex>\ngl_PointSize=size;\n#ifdef USE_SIZEATTENUATION\nbool isPerspective=isPerspectiveMatrix(projectionMatrix);if(isPerspective)gl_PointSize*=(scale/-mvPosition.z);\n#endif\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <worldpos_vertex>\n#include <fog_vertex>\n}"

/***/ }),

/***/ "../../../libs/ui/src/lib/materials/CellMaterial/image.frag":
/*!************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/materials/CellMaterial/image.frag ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "uniform float randBase;uniform vec3 diffuse;uniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec3 outgoingLight=vec3(0.);vec4 diffuseColor=vec4(diffuse,opacity);\n#include <logdepthbuf_fragment>\n#include <map_particle_fragment>\n#include <color_fragment>\n#include <alphatest_fragment>\noutgoingLight=diffuseColor.rgb;gl_FragColor=vec4(outgoingLight,diffuseColor.a);\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n}"

/***/ }),

/***/ "../../../libs/ui/src/lib/materials/ClearOnHoverMaterial.tsx":
/*!*************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/materials/ClearOnHoverMaterial.tsx ***!
  \*************************************************************************************************/
/*! exports provided: ClearOnHoverMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearOnHoverMaterial", function() { return ClearOnHoverMaterial; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-spring/three */ "../../../node_modules/@react-spring/three/dist/react-spring-three.esm.js");
/* harmony import */ var _utils_useRefFrame__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useRefFrame */ "../../../libs/ui/src/lib/utils/useRefFrame.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);




const _excluded = ["useWorldStore"];
var _jsxFileName = "/Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/materials/ClearOnHoverMaterial.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





const ClearOnHoverMaterial = _ref => {
  let {
    useWorldStore
  } = _ref,
      props = Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, _excluded);

  const ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  const isHeroHovered = useWorldStore(state => 0.3 + 0.7 * ~~!state.isHeroHovered);
  const {
    alpha
  } = Object(_react_spring_three__WEBPACK_IMPORTED_MODULE_5__["useSpring"])({
    alpha: isHeroHovered
  });
  Object(_utils_useRefFrame__WEBPACK_IMPORTED_MODULE_6__["useRefFrame"])(([mesh]) => {
    mesh.opacity = alpha.get();
  }, [ref]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_react_spring_three__WEBPACK_IMPORTED_MODULE_5__["animated"].meshPhysicalMaterial, _objectSpread(_objectSpread({}, props), {}, {
    ref: ref
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../../libs/ui/src/lib/materials/index.ts":
/*!*********************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/materials/index.ts ***!
  \*********************************************************************************/
/*! exports provided: ClearOnHoverMaterial, CellMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClearOnHoverMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClearOnHoverMaterial */ "../../../libs/ui/src/lib/materials/ClearOnHoverMaterial.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClearOnHoverMaterial", function() { return _ClearOnHoverMaterial__WEBPACK_IMPORTED_MODULE_0__["ClearOnHoverMaterial"]; });

/* harmony import */ var _CellMaterial_CellMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CellMaterial/CellMaterial */ "../../../libs/ui/src/lib/materials/CellMaterial/CellMaterial.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CellMaterial", function() { return _CellMaterial_CellMaterial__WEBPACK_IMPORTED_MODULE_1__["CellMaterial"]; });




/***/ }),

/***/ "../../../libs/ui/src/lib/utils/grid/Grid.ts":
/*!*********************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/utils/grid/Grid.ts ***!
  \*********************************************************************************/
/*! exports provided: Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "../../../node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "../../../node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase.js");
/* harmony import */ var _Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey.js");
/* harmony import */ var _pluck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pluck */ "../../../libs/ui/src/lib/utils/pluck.ts");
/* harmony import */ var _IGridCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./IGridCell */ "../../../libs/ui/src/lib/utils/grid/IGridCell.ts");
/* harmony import */ var _GridCol__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./GridCol */ "../../../libs/ui/src/lib/utils/grid/GridCol.ts");









const _excluded = ["col"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





const _subNOOP = () => undefined;

var _needsResizing = /*#__PURE__*/Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_8__["default"])("needsResizing");

var _subscribers = /*#__PURE__*/Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_8__["default"])("subscribers");

var _gloablSubscribers = /*#__PURE__*/Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_8__["default"])("gloablSubscribers");

class Grid {
  constructor(constrain, constraintValue = [1, -1]) {
    this.constrain = constrain;
    this.constraintValue = constraintValue;
    this.cols = [];
    this.cells = new Map();
    Object.defineProperty(this, _needsResizing, {
      writable: true,
      value: false
    });
    Object.defineProperty(this, _subscribers, {
      writable: true,
      value: new Map()
    });
    Object.defineProperty(this, _gloablSubscribers, {
      writable: true,
      value: new Set()
    });
  }

  push(cell) {
    if (cell.col) {
      this.cols[cell.col.index].add(cell);
    } else {
      // find shortest col or create new
      this.findColForCell(cell).add(cell);
    }

    this.storeLocal(cell);
  }

  storeLocal(cell) {
    this.cells.set(cell.key, cell);
  }

  setContraint(newConstraint) {
    this.constraintValue = newConstraint;
    Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_7__["default"])(this, _needsResizing)[_needsResizing] = true;
  }

  getOrMakeSubscriberSet(cellKey) {
    const subscriber = Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_7__["default"])(this, _subscribers)[_subscribers].get(cellKey);

    if (subscriber) return subscriber;
    const newSub = [new Set(), rect => {
      const prom = Promise.resolve(rect);
      const [subs] = this.getOrMakeSubscriberSet(cellKey);
      return Promise.all(Array.from(subs).map(resolver => prom.then(resolver)));
    }];

    Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_7__["default"])(this, _subscribers)[_subscribers].set(cellKey, newSub);

    return newSub;
  }

  toJSON() {
    const {
      constrain,
      constraintValue,
      cells,
      cols
    } = this;
    const cellMap = new Map();

    for (const [k, v] of cells.entries()) {
      const {
        col: {
          heightSum,
          index
        } = {}
      } = v,
            cellData = Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__["default"])(v, _excluded);

      cellMap.set(k, _objectSpread(_objectSpread({}, cellData), {}, {
        col: {
          heightSum,
          index
        }
      }));
    }

    return {
      constrain,
      constraintValue,
      cells: cellMap,
      cols
    };
  }

  getSubscriptionResolver(cellKey) {
    const resolver = Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_7__["default"])(this, _subscribers)[_subscribers].get(cellKey);

    if (!resolver) return _subNOOP;
    return resolver[1];
  }

  subscribeGlobal(sub) {
    Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_7__["default"])(this, _gloablSubscribers)[_gloablSubscribers].add(sub);

    return () => void Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_7__["default"])(this, _gloablSubscribers)[_gloablSubscribers].delete(sub);
  }

  subscribeToCell(cellKey) {
    const [subs] = this.getOrMakeSubscriberSet(cellKey);
    return callback => {
      subs.add(callback);

      const unsubscribe = () => void subs.delete(callback);

      return unsubscribe;
    };
  }

  notifyCellSubscribers(cellKey, rect) {
    this.getSubscriptionResolver(cellKey)(rect);

    Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_7__["default"])(this, _gloablSubscribers)[_gloablSubscribers].forEach(sub => sub(rect, cellKey));
  }

  toMatrix() {
    if (Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_7__["default"])(this, _needsResizing)[_needsResizing]) this.resize();
    const maxHeight = this.getMaxHeight();
    let x = 0;
    return this.cols.map(col => {
      let y = 0;
      const {
        heightSum
      } = col;
      const width = heightSum / maxHeight;
      const colArr = [...col].map(cell => {
        const height = cell.height / heightSum;
        const rect = [x, y, width, height];
        this.notifyCellSubscribers(cell.key, rect);
        y += height;
        return {
          column: col.index,
          rect,
          cell
        };
      });
      x += width;
      return colArr;
    });
  }

  remove(cellKey) {
    const cell = this.cells.get(cellKey);
    if (!cell) return;
    const {
      col
    } = cell;
    col.remove(cell);
    this.cells.delete(cellKey);
    this.notifyCellSubscribers(cellKey, [0.5, 0.5, 0, 0]);
    Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_7__["default"])(this, _needsResizing)[_needsResizing] = true;
  }

  toArray() {
    return [].concat(...this.toMatrix());
  }

  get length() {
    return this.cells.size;
  }

  get isWaitingForResize() {
    return Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_7__["default"])(this, _needsResizing)[_needsResizing];
  }

  resize() {
    for (const col of this.cols) {
      _GridCol__WEBPACK_IMPORTED_MODULE_11__["GridCol"].clearCol(col);
    }

    this.cols = this.cols.filter(Object(_pluck__WEBPACK_IMPORTED_MODULE_9__["pluck"])('heightSum'));
    const cells = Array.from(this.cells.values());
    cells.forEach(cell => this.push(cell));
    Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_7__["default"])(this, _needsResizing)[_needsResizing] = false;
  }

  _makeCol() {
    const col = new _GridCol__WEBPACK_IMPORTED_MODULE_11__["GridCol"](this.cols.length);
    this.cols.push(col);
    return col;
  }

  _findOrCreateCol(predicate, needsSort = false) {
    var _find;

    return (_find = (needsSort ? this.sortedCols() : this.cols).find(predicate)) !== null && _find !== void 0 ? _find : this._makeCol();
  }

  sortedCols() {
    return this.cols.sort((a, b) => a.heightSum - b.heightSum);
  }

  findColForCell({
    height
  }) {
    switch (this.constrain) {
      case _IGridCell__WEBPACK_IMPORTED_MODULE_10__["GridConstraints"].COL_WIDTH:
        {
          // only return col if new resultant width > minWidth, max value doesn't matter
          const maxHeight = this.getMaxHeight(height);
          const [minColWidth] = this.constraintValue;
          return this._findOrCreateCol(({
            heightSum
          }) => (heightSum + height) / maxHeight <= minColWidth, true);
        }

      case _IGridCell__WEBPACK_IMPORTED_MODULE_10__["GridConstraints"].COL_HEIGHT:
        {
          // return col if new height < max
          const [maxColHeight] = this.constraintValue;
          return this._findOrCreateCol(({
            heightSum
          }) => heightSum + height <= maxColHeight, true);
        }

      case _IGridCell__WEBPACK_IMPORTED_MODULE_10__["GridConstraints"].MAX_COLS:
        {
          // return shortest col
          const [maxCols] = this.constraintValue;
          const {
            length
          } = this.cols;
          return this._findOrCreateCol(() => !!length && length >= maxCols, length >= maxCols); // if () {
          //   return this._makeCol();
          // }
          // let [min] = this.cols;
          // for (let i = 0; i < this.cols.length; i++) {
          //   const { [i]: current } = this.cols;
          //   min = min && current.heightSum > min.heightSum ? min : current;
          // }
          // return min;
        }

      case _IGridCell__WEBPACK_IMPORTED_MODULE_10__["GridConstraints"].MIN_CELL_HEIGHT:
        {
          // return col where resultant cell.height / cell.colHeight > value
          const [minHeight] = this.constraintValue;
          return this._findOrCreateCol(col => {
            const newHeight = col.heightSum + height;
            return Array.from(col).every(cel => cel.height / newHeight >= minHeight);
          });
        }
    }
  }

  getMaxHeight(height = 0) {
    return this.cols.reduce((sum, {
      heightSum
    }) => sum + heightSum, height);
  }

}

/***/ }),

/***/ "../../../libs/ui/src/lib/utils/grid/GridCol.ts":
/*!************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/utils/grid/GridCol.ts ***!
  \************************************************************************************/
/*! exports provided: GridCol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridCol", function() { return GridCol; });
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "../../../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase.js");
/* harmony import */ var _Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey.js");
/* harmony import */ var _pluck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pluck */ "../../../libs/ui/src/lib/utils/pluck.ts");






let _Symbol$iterator;



var _cache = /*#__PURE__*/Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_4__["default"])("cache");

_Symbol$iterator = Symbol.iterator;
class GridCol {
  constructor(index) {
    this.index = index;
    this.heightSum = 0;
    this.head = void 0;
    Object.defineProperty(this, _cache, {
      writable: true,
      value: new Map()
    });
  }

  static assertCellsEqual(cell, existing) {
    if (!existing) return;
    if (!cell.col) return;
    if (!cell.next) return;
    if (existing.col !== cell.col) throw new this.ColumnMismatchError();
  }

  static divorceCell(cell) {
    delete cell.col;
    delete cell.colHeight;
    cell.next = undefined;
  }

  isEmpty() {
    return typeof this.head === 'undefined';
  }

  remove(cell) {
    if (this.isEmpty()) return;
    this.heightSum -= cell.height;
    let prevCell = this.head;
    const nextCell = cell.next;
    Array.from(this).forEach(cel => {
      if (cel.key === cell.key) {
        if (prevCell) {
          prevCell.next = nextCell;
          delete cell.col;
          cell.next = undefined;
        }
      } else {
        cel.colHeight = this.heightSum;
      }

      prevCell = cel;
    });

    Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _cache)[_cache].delete(cell.key);
  }

  clear() {
    this.heightSum = 0;
    this.head = undefined;

    for (const cell of Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _cache)[_cache].values()) {
      GridCol.divorceCell(cell);
    }

    Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _cache)[_cache].clear();
  }

  static clearCol(col) {
    col.clear();
  }

  cloneFrom(otherCol) {
    if (this.index !== otherCol.index) {
      console.warn('cannot clone different columns');
    } else {
      this.heightSum = otherCol.heightSum;
      let current = otherCol.head;
      this.head = current;

      while (current) {
        Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _cache)[_cache].set(current.key, current);

        current.col = this;
        current = current.next;
      }
    }
  }

  add(cell) {
    const existing = Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _cache)[_cache].get(cell.key);

    const heightDelta = cell.height - ((existing === null || existing === void 0 ? void 0 : existing.height) || 0);
    this.heightSum += heightDelta;
    GridCol.assertCellsEqual(cell, existing);
    let current = this.head;
    let last;
    this.checkCells();

    while (current) {
      current.colHeight = this.heightSum;
      last = current;
      current = current.next;
    }

    if (existing) return;
    cell.col = this;
    cell.colHeight = this.heightSum;
    if (last) last.next = cell;else this.head = cell;

    Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _cache)[_cache].set(cell.key, cell);
  }

  checkCells() {
    const cellArray = Array.from(Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _cache)[_cache].values());

    if (cellArray.length && cellArray.every(Object(_pluck__WEBPACK_IMPORTED_MODULE_5__["pluck"])('next'))) {
      throw new GridCol.ColumnCircularError();
    }
  }

  *[_Symbol$iterator]() {
    let current = this.head;
    this.checkCells();

    while (current) {
      yield current;
      current = current.next;
    }
  }

}
GridCol.ColumnMismatchError = class ColumnMismatchError extends Error {
  constructor(...args) {
    super(...args);
    this.name = 'ColumnMismatchError';
  }

};
GridCol.ColumnCircularError = class ColumnCircularError extends Error {
  constructor(...args) {
    super(...args);
    this.name = 'ColumnCircularError';
  }

};

/***/ }),

/***/ "../../../libs/ui/src/lib/utils/grid/IGridCell.ts":
/*!**************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/utils/grid/IGridCell.ts ***!
  \**************************************************************************************/
/*! exports provided: GridConstraints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridConstraints", function() { return GridConstraints; });
let GridConstraints;

(function (GridConstraints) {
  GridConstraints[GridConstraints["COL_WIDTH"] = 0] = "COL_WIDTH";
  GridConstraints[GridConstraints["COL_HEIGHT"] = 1] = "COL_HEIGHT";
  GridConstraints[GridConstraints["MAX_COLS"] = 2] = "MAX_COLS";
  GridConstraints[GridConstraints["MIN_CELL_HEIGHT"] = 3] = "MIN_CELL_HEIGHT";
})(GridConstraints || (GridConstraints = {}));

/***/ }),

/***/ "../../../libs/ui/src/lib/utils/grid/index.ts":
/*!**********************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/utils/grid/index.ts ***!
  \**********************************************************************************/
/*! exports provided: Grid, GridConstraints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IGridCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IGridCell */ "../../../libs/ui/src/lib/utils/grid/IGridCell.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridConstraints", function() { return _IGridCell__WEBPACK_IMPORTED_MODULE_0__["GridConstraints"]; });

/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid */ "../../../libs/ui/src/lib/utils/grid/Grid.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _Grid__WEBPACK_IMPORTED_MODULE_1__["Grid"]; });



 // const gc = new GridCol<string>(0);
// gc.add({ key: 'a', height: 20, next: undefined });
// gc.add({ key: 'a', height: 30, next: undefined });
// const b = { key: 'b', height: 40, next: undefined } as PartialGridCell<string>;
// gc.add(b);
// gc.add(b);
// console.log([...gc], new Set(gc));
// // const gr = new Grid<string>(GridConstraints.COL_WIDTH, [0.1]);
// const gr = new Grid<string>(GridConstraints.MAX_COLS, [12]);
// // const gr = new Grid<string>(GridConstraints.MIN_CELL_HEIGHT, [0.15]);
// // const gr = new Grid<string>(GridConstraints.COL_HEIGHT, [3000]);
// for (let i = 0; i < 60; i++) {
//   // debugger;
//   gr.push({
//     key: `x:${i}`,
//     height: (Math.random() * 1000) | 0,
//     next: undefined,
//   });
// }
// console.log(gr.toMatrix().map(pluck('length')), gr.toArray().map(pluck('rect')));
// // gr.setContraint([0.25]);
// // gr.setContraint([2000]);
// // gr.setContraint([0.25]);
// gr.setContraint([16]);
// console.log(gr.toMatrix().map(pluck('length')));

/***/ }),

/***/ "../../../libs/ui/src/lib/utils/index.ts":
/*!*****************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/utils/index.ts ***!
  \*****************************************************************************/
/*! exports provided: makeUseRefTarget, useBufferHeight, useRefFrame, Grid, GridConstraints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _makeUseRefTarget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeUseRefTarget */ "../../../libs/ui/src/lib/utils/makeUseRefTarget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeUseRefTarget", function() { return _makeUseRefTarget__WEBPACK_IMPORTED_MODULE_0__["makeUseRefTarget"]; });

/* harmony import */ var _useBufferHeight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useBufferHeight */ "../../../libs/ui/src/lib/utils/useBufferHeight.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useBufferHeight", function() { return _useBufferHeight__WEBPACK_IMPORTED_MODULE_1__["useBufferHeight"]; });

/* harmony import */ var _useRefFrame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useRefFrame */ "../../../libs/ui/src/lib/utils/useRefFrame.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRefFrame", function() { return _useRefFrame__WEBPACK_IMPORTED_MODULE_2__["useRefFrame"]; });

/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid */ "../../../libs/ui/src/lib/utils/grid/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _grid__WEBPACK_IMPORTED_MODULE_3__["Grid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridConstraints", function() { return _grid__WEBPACK_IMPORTED_MODULE_3__["GridConstraints"]; });






/***/ }),

/***/ "../../../libs/ui/src/lib/utils/makeUseRefTarget.ts":
/*!****************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/utils/makeUseRefTarget.ts ***!
  \****************************************************************************************/
/*! exports provided: makeUseRefTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeUseRefTarget", function() { return makeUseRefTarget; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



/* eslint-disable @typescript-eslint/no-explicit-any */

function makeUseRefTarget(hook) {
  var _displayName;

  const useWithRefTarget = (cb, refs, ...args) => {
    const cCb = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])((...cbArgs) => {
      const curRefs = refs.map(r => r.current);
      if (curRefs.every(r => typeof r !== 'undefined')) return cb(curRefs, cbArgs); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...refs, cb]);
    return hook(cCb, ...args);
  };

  useWithRefTarget.displayName = `${(_displayName = hook.displayName) !== null && _displayName !== void 0 ? _displayName : hook.name}WithRef`;
  return useWithRefTarget;
}

/***/ }),

/***/ "../../../libs/ui/src/lib/utils/pluck.ts":
/*!*****************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/utils/pluck.ts ***!
  \*****************************************************************************/
/*! exports provided: pluck, getGl, getCamera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return pluck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGl", function() { return getGl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCamera", function() { return getCamera; });
function pluck(key) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return ({
    [key]: value
  }) => value;
}
const getGl = pluck('gl');
const getCamera = pluck('camera');

/***/ }),

/***/ "../../../libs/ui/src/lib/utils/useBufferHeight.ts":
/*!***************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/utils/useBufferHeight.ts ***!
  \***************************************************************************************/
/*! exports provided: useBufferHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBufferHeight", function() { return useBufferHeight; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useThreeGl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useThreeGl */ "../../../libs/ui/src/lib/utils/useThreeGl.ts");


const useBufferHeight = () => {
  const gl = Object(_useThreeGl__WEBPACK_IMPORTED_MODULE_1__["useThreeGl"])();
  const {
    drawingBufferHeight: height,
    drawingBufferWidth: width
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => gl.getContext(), [gl]);
  const max = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Math.max(height, width), [height, width]);
  const min = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Math.min(height, width), [height, width]);
  const diag = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => (width ** 2 + height ** 2) ** 0.5, [height, width]);
  return {
    height,
    width,
    max,
    min,
    diag
  };
};

/***/ }),

/***/ "../../../libs/ui/src/lib/utils/useRefEffect.tsx":
/*!*************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/utils/useRefEffect.tsx ***!
  \*************************************************************************************/
/*! exports provided: useRefEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRefEffect", function() { return useRefEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _makeUseRefTarget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeUseRefTarget */ "../../../libs/ui/src/lib/utils/makeUseRefTarget.ts");


const useRefEffect = Object(_makeUseRefTarget__WEBPACK_IMPORTED_MODULE_1__["makeUseRefTarget"])(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"]);

/***/ }),

/***/ "../../../libs/ui/src/lib/utils/useRefFrame.tsx":
/*!************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/utils/useRefFrame.tsx ***!
  \************************************************************************************/
/*! exports provided: useRefFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRefFrame", function() { return useRefFrame; });
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-three/fiber */ "../../../node_modules/@react-three/fiber/dist/react-three-fiber.esm.js");
/* harmony import */ var _makeUseRefTarget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeUseRefTarget */ "../../../libs/ui/src/lib/utils/makeUseRefTarget.ts");


const useRefFrame = Object(_makeUseRefTarget__WEBPACK_IMPORTED_MODULE_1__["makeUseRefTarget"])(_react_three_fiber__WEBPACK_IMPORTED_MODULE_0__["useFrame"]);

/***/ }),

/***/ "../../../libs/ui/src/lib/utils/useRefLayoutEffect.tsx":
/*!*******************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/utils/useRefLayoutEffect.tsx ***!
  \*******************************************************************************************/
/*! exports provided: useRefLayoutEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRefLayoutEffect", function() { return useRefLayoutEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _makeUseRefTarget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeUseRefTarget */ "../../../libs/ui/src/lib/utils/makeUseRefTarget.ts");


const useRefLayoutEffect = Object(_makeUseRefTarget__WEBPACK_IMPORTED_MODULE_1__["makeUseRefTarget"])(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"]);

/***/ }),

/***/ "../../../libs/ui/src/lib/utils/useThreeGl.ts":
/*!**********************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/utils/useThreeGl.ts ***!
  \**********************************************************************************/
/*! exports provided: useThreeGl, useThreeCamera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useThreeGl", function() { return useThreeGl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useThreeCamera", function() { return useThreeCamera; });
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-three/fiber */ "../../../node_modules/@react-three/fiber/dist/react-three-fiber.esm.js");
/* harmony import */ var _pluck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pluck */ "../../../libs/ui/src/lib/utils/pluck.ts");


const useThreeGl = () => {
  return Object(_react_three_fiber__WEBPACK_IMPORTED_MODULE_0__["useThree"])(_pluck__WEBPACK_IMPORTED_MODULE_1__["getGl"]);
};
const useThreeCamera = () => {
  return Object(_react_three_fiber__WEBPACK_IMPORTED_MODULE_0__["useThree"])(_pluck__WEBPACK_IMPORTED_MODULE_1__["getCamera"]);
};

/***/ }),

/***/ "../../../libs/ui/src/lib/world-environment/INITIAL_CAMERA_POSITION.tsx":
/*!************************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/world-environment/INITIAL_CAMERA_POSITION.tsx ***!
  \************************************************************************************************************/
/*! exports provided: MAX_CAMERA_DISTANCE, INITIAL_CAMERA_POSITION, INITIAL_CAMERA_POSITION_LENGTH_SQ, INITIAL_CAMERA_POSITION_LENGTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_CAMERA_DISTANCE", function() { return MAX_CAMERA_DISTANCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_CAMERA_POSITION", function() { return INITIAL_CAMERA_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_CAMERA_POSITION_LENGTH_SQ", function() { return INITIAL_CAMERA_POSITION_LENGTH_SQ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_CAMERA_POSITION_LENGTH", function() { return INITIAL_CAMERA_POSITION_LENGTH; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "../../../node_modules/three/build/three.module.js");

const MAX_CAMERA_DISTANCE = 4000;
const INITIAL_CAMERA_POSITION = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-50, -100, MAX_CAMERA_DISTANCE / 2);
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
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "../../../libs/ui/src/lib/utils/index.ts");
/* harmony import */ var _utils_useRefEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useRefEffect */ "../../../libs/ui/src/lib/utils/useRefEffect.tsx");
/* harmony import */ var _utils_useThreeGl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useThreeGl */ "../../../libs/ui/src/lib/utils/useThreeGl.ts");
/* harmony import */ var _INITIAL_CAMERA_POSITION__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./INITIAL_CAMERA_POSITION */ "../../../libs/ui/src/lib/world-environment/INITIAL_CAMERA_POSITION.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants */ "../../../libs/ui/src/lib/constants.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "/Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/world-environment/InternalCamera.tsx";







function InternalCamera() {
  const controls = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  const camera = Object(_utils_useThreeGl__WEBPACK_IMPORTED_MODULE_5__["useThreeCamera"])();
  const {
    domElement
  } = Object(_utils_useThreeGl__WEBPACK_IMPORTED_MODULE_5__["useThreeGl"])();
  const buffer = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["useBufferHeight"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    camera.position.copy(_INITIAL_CAMERA_POSITION__WEBPACK_IMPORTED_MODULE_6__["INITIAL_CAMERA_POSITION"]);

    if (camera.type === 'OrthographicCamera') {
      camera.far = 100000;
    }
  }, [camera]);
  Object(_utils_useRefEffect__WEBPACK_IMPORTED_MODULE_4__["useRefEffect"])(([controlsRef]) => {
    // controlsRef.target.set(0, 0, 0);
    // controlsRef.maxDistance = buffer.diag * 2.4 - 5;
    // controlsRef.minDistance = 1;
    // controlsRef.enablePan = false;
    // controlsRef.maxAzimuthAngle = 0.125 * Math.PI;
    // controlsRef.minAzimuthAngle = -0.125 * Math.PI;
    // controlsRef.minPolarAngle = 0.375 * Math.PI;
    // controlsRef.maxPolarAngle = 0.625 * Math.PI;
    // controlsRef.update();
    console.log(controlsRef);
  }, [controls], [buffer]);
  const camRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(camera); // useHelper(camRef, CameraHelper);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("orbitControls", {
    args: [camera, domElement],
    enablePan: false,
    maxDistance: buffer.diag * 2.4 - 5,
    maxPolarAngle: _constants__WEBPACK_IMPORTED_MODULE_7__["PI"]._5_8,
    minDistance: 0,
    minPolarAngle: _constants__WEBPACK_IMPORTED_MODULE_7__["PI"]._3_8,
    ref: controls,
    rotateSpeed: 2,
    target: 0
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
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
const SHADOW_SCALE = 256;

/***/ }),

/***/ "../../../libs/ui/src/lib/world-environment/StaticLight.tsx":
/*!************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/world-environment/StaticLight.tsx ***!
  \************************************************************************************************/
/*! exports provided: StaticLight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticLight", function() { return StaticLight; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ "../../../node_modules/three/build/three.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-spring/three */ "../../../node_modules/@react-spring/three/dist/react-spring-three.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "../../../libs/ui/src/lib/utils/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ "../../../libs/ui/src/lib/constants.ts");
/* harmony import */ var _utils_useRefLayoutEffect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/useRefLayoutEffect */ "../../../libs/ui/src/lib/utils/useRefLayoutEffect.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);




const _excluded = ["shouldShowBottom"];
var _jsxFileName = "/Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/world-environment/StaticLight.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








const center = new three__WEBPACK_IMPORTED_MODULE_4__["Vector3"](0, 10000, 0);
function StaticLight(_ref) {
  let {
    shouldShowBottom = false
  } = _ref,
      props = Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, _excluded);

  const ref = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
  const [offset, api] = Object(_react_spring_three__WEBPACK_IMPORTED_MODULE_6__["useSpring"])(() => new three__WEBPACK_IMPORTED_MODULE_4__["Vector3"](1, 1, 1)); // useHelper(ref, SpotLightHelper, 'red');

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    api.start(shouldShowBottom ? {
      x: 0.1,
      y: -3,
      z: 1
    } : {
      x: 1.2,
      y: 0.5,
      z: 1
    });
  }, [shouldShowBottom, api]);
  const buffer = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["useBufferHeight"])();
  Object(_utils_useRefLayoutEffect__WEBPACK_IMPORTED_MODULE_9__["useRefLayoutEffect"])(([light]) => {
    light.shadow.camera.updateProjectionMatrix(); // light.shadow.bias = 0.8;
    // light.shadow.needsUpdate = true;
  }, [ref], []);
  Object(_utils__WEBPACK_IMPORTED_MODULE_7__["useRefFrame"])(([light], [{
    camera
  }]) => {
    light.position.copy(camera.position);
    light.shadow.camera.rotation.copy(camera.rotation); // light.shadow.camera.layers.set(0);
    // light.position.z = buffer.diag * 2 * (light.position.z < 0 ? -1 : 1);

    light.position.x *= offset.x.get();
    light.position.y *= offset.y.get();
    light.position.z *= offset.z.get();
    light.position.clampLength(10, buffer.diag / 2);
    light.shadow.needsUpdate = true; // light.shadow.camera.rotation.;
  }, [ref]); // useFrame(({ camera, clock, gl }) => {
  //   if (!ref.current)
  //     return;
  //   ref.current.position.copy(camera.position);
  //   // if (camera.type === 'PerspectiveCamera') {
  //   //   ref.current.shadow.camera.fov = camera.getEffectiveFOV() + 90;
  //   // }
  //   ref.current.shadow.camera.rotation.copy(camera.rotation);
  //   ref.current.shadow.camera.layers.set(0);
  //   // ref.current.shadow.camera.layers.set(2);
  //   // ref.current.shadow.camera.layers.enableAll();
  //   // ref.current.layers.set(0);
  //   // ref.current.layers.set(2);
  //   // ref.current.layers.enableAll();
  //   // if (typeof 'red' !== 'undefined') {
  //   // }
  //   // const {drawingBufferHeight} = gl.getContext();
  //   // const d0 = camera.position.lengthSq() / (2 ** 12);
  //   // ref.current.position.setLength(d0);
  //   // ref.current.position.z = camera.position.z;
  //   ref.current.position.z = buffer.diag * 2;
  //   // ref.current.position.y -= d0;
  //   // ref.current.position.x -= d0 * 0.5;
  //   // ref.current.position.z -= d0 * 2;
  //   ref.current.position.x *= offset.x.get();
  //   ref.current.position.y *= offset.y.get();
  //   ref.current.position.z *= offset.z.get();
  //   // ref.current.position.y -= 200;
  //   // ref.current.position.x *= 0;
  //   // ref.current.shadow.camera.position.x = -drawingBufferHeight / 2;
  //   // ref.current.shadow.camera.updateProjectionMatrix();
  //   // ref.current.position.y += 50;
  //   // ref.current.position.y += drawingBufferHeight / 2;
  //   // ref.current.position.z *= Math.cos(clock.getElapsedTime() * 2);
  //   // ref.current.target.position.set(0, 0, -1);
  //   // ref.current.updateMatrixWorld();
  // });

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("spotLight", _objectSpread({
    castShadow: true // angle={Math.PI * 0.2125}
    ,
    angle: _constants__WEBPACK_IMPORTED_MODULE_8__["PI"]._9_32,
    decay: 0.5,
    distance: 100000,
    intensity: 1,
    layers: 0 // penumbra={0.6}
    ,
    penumbra: 1,
    ref: ref,
    "shadow-bias": 0.8,
    "shadow-camera-aspect": 0.09,
    "shadow-camera-far": -1,
    "shadow-focus": 0 // shadow-camera-near={10}
    // shadow-camera-layers={0}
    ,
    "shadow-mapSize": [2048, 2048]
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "../../../libs/ui/src/lib/world-environment/WorldBackDrop.tsx":
/*!**************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/world-environment/WorldBackDrop.tsx ***!
  \**************************************************************************************************/
/*! exports provided: WorldBackDrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldBackDrop", function() { return WorldBackDrop; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _anonymous_club_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @anonymous.club/ui */ "../../../libs/ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var three_src_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/src/constants */ "../../../node_modules/three/src/constants.js");
/* harmony import */ var three_src_extras_curves_EllipseCurve__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/src/extras/curves/EllipseCurve */ "../../../node_modules/three/src/extras/curves/EllipseCurve.js");
/* harmony import */ var three_src_math_Color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/src/math/Color */ "../../../node_modules/three/src/math/Color.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants */ "../../../libs/ui/src/lib/constants.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "/Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/world-environment/WorldBackDrop.tsx";







function WorldBackDrop() {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  const buffer = Object(_anonymous_club_ui__WEBPACK_IMPORTED_MODULE_2__["useBufferHeight"])();
  const inc = 10;
  const NUM_POINTS = 64;
  const points = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(() => {
    const bigR = buffer.diag * 2 + inc;
    return new three_src_extras_curves_EllipseCurve__WEBPACK_IMPORTED_MODULE_5__["EllipseCurve"](buffer.diag * 0.75, 0, bigR, bigR, _constants__WEBPACK_IMPORTED_MODULE_7__["PI"]._1_2, _constants__WEBPACK_IMPORTED_MODULE_7__["PI"]._3_2, true, 0).getPoints(NUM_POINTS);
  }, [buffer.diag, inc]);
  Object(_anonymous_club_ui__WEBPACK_IMPORTED_MODULE_2__["useRefFrame"])(([mesh], [{
    camera,
    clock
  }]) => {
    mesh.rotation.copy(camera.rotation);
    const mat = mesh.material;
    const t = clock.getElapsedTime();
    mat.bumpScale = Math.sin(t * 0.5) * 0.3 + 0.05;
    mat.displacementBias = Math.sin(t * 0.3) * 100;
  }, [ref]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("mesh", {
    castShadow: true,
    receiveShadow: true,
    layers: 0,
    ref: ref // scale={[1.01, 1.01, 1.01]}
    ,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("latheGeometry", {
      args: [points, NUM_POINTS, _constants__WEBPACK_IMPORTED_MODULE_7__["PI"]._1_2, _constants__WEBPACK_IMPORTED_MODULE_7__["PI"]._1]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("meshStandardMaterial", {
      // flatShading
      // transparent
      // wireframe
      // depthTest={false}
      attach: "material",
      bumpScale: 0.1,
      displacementBias: 0,
      displacementScale: -2500,
      emissive: new three_src_math_Color__WEBPACK_IMPORTED_MODULE_6__["Color"](0xcebbbb).setHSL(0.02, 0.91, 0.9),
      fog: true,
      metalness: 0.05 // metalness={0.05}
      ,
      roughness: 0.1 // side={DoubleSide}
      ,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("noiseTexture", {
        args: [256, 256] // attach="map"
        ,
        attach: "displacementMap",
        "repeat-x": 4,
        "repeat-y": 16,
        rotation: 0.125,
        wrapS: three_src_constants__WEBPACK_IMPORTED_MODULE_4__["MirroredRepeatWrapping"],
        wrapT: three_src_constants__WEBPACK_IMPORTED_MODULE_4__["MirroredRepeatWrapping"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("noiseTexture", {
        args: [1024, 64] // attach="map"
        ,
        attach: "bumpMap",
        "repeat-x": 4,
        "repeat-y": 16,
        rotation: 0.125,
        wrapS: three_src_constants__WEBPACK_IMPORTED_MODULE_4__["MirroredRepeatWrapping"],
        wrapT: three_src_constants__WEBPACK_IMPORTED_MODULE_4__["MirroredRepeatWrapping"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("noiseTexture", {
        args: [1024, 4] // attach="map"
        ,
        attach: "map",
        "repeat-x": 60,
        "repeat-y": 2.5,
        rotation: 0.125,
        wrapS: three_src_constants__WEBPACK_IMPORTED_MODULE_4__["MirroredRepeatWrapping"],
        wrapT: three_src_constants__WEBPACK_IMPORTED_MODULE_4__["MirroredRepeatWrapping"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
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

/***/ }),

/***/ "../../../libs/ui/src/lib/world-environment/WorldEnvironment.module.scss":
/*!*************************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/world-environment/WorldEnvironment.module.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../../../node_modules/sass-loader/dist/cjs.js!./WorldEnvironment.module.scss */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js!../../../libs/ui/src/lib/world-environment/WorldEnvironment.module.scss");

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
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-three/fiber */ "../../../node_modules/@react-three/fiber/dist/react-three-fiber.esm.js");
/* harmony import */ var _jsx_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsx-extensions */ "../../../libs/ui/src/lib/world-environment/jsx-extensions.tsx");
/* harmony import */ var _WorldEnvironment_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorldEnvironment.module.scss */ "../../../libs/ui/src/lib/world-environment/WorldEnvironment.module.scss");
/* harmony import */ var _WorldEnvironment_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_WorldEnvironment_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "../../../node_modules/three/build/three.module.js");
/* harmony import */ var _WorldLights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WorldLights */ "../../../libs/ui/src/lib/world-environment/WorldLights.tsx");
/* harmony import */ var _InternalCamera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InternalCamera */ "../../../libs/ui/src/lib/world-environment/InternalCamera.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/world-environment/WorldEnvironment.tsx";




// import { EnvironmentEffects } from './EnvironmentEffects';



/* eslint-disable-next-line */


// import( /* webpackChunkName: 'envfx' */ './EnvironmentEffects');
// const EnvironmentEffects = lazy(() => import( /* webpackChunkName: 'envfx' */ './EnvironmentEffects'));
const GL_ATTRIBUTES = {
  alpha: true,
  toneMapping: three__WEBPACK_IMPORTED_MODULE_3__["ACESFilmicToneMapping"],
  physicallyCorrectLights: false,
  powerPreference: 'high-performance'
};
class WorldEnvironment extends react__WEBPACK_IMPORTED_MODULE_6__["Component"] {
  render() {
    const {
      useWorldStore,
      children
    } = this.props; // const shouldStop = useWorldStore(state => state.isHeroHovered);

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_react_three_fiber__WEBPACK_IMPORTED_MODULE_0__["Canvas"] // orthographic
    // camera={{ fov: 45, far: 10000 }}
    // camera={{ fov: 22.5, far: -1 }}
    , {
      camera: {
        fov: 45,
        far: -1
      },
      gl: GL_ATTRIBUTES,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_InternalCamera__WEBPACK_IMPORTED_MODULE_5__["InternalCamera"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("color", {
        // args={[0xffffff - 0x010100]}
        // args={[0x31d1f0]}
        args: [0x010100],
        attach: "background"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_WorldLights__WEBPACK_IMPORTED_MODULE_4__["WorldLights"], {
        useWorldStore
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this);
  }

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
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SHADOW_SCALE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SHADOW_SCALE */ "../../../libs/ui/src/lib/world-environment/SHADOW_SCALE.ts");
/* harmony import */ var _StaticLight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StaticLight */ "../../../libs/ui/src/lib/world-environment/StaticLight.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "../../../libs/ui/src/lib/utils/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/world-environment/WorldLights.tsx";





const CirculatingLight = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["lazy"])(() => __webpack_require__.e(/*! import() | circ-light */ "circ-light").then(__webpack_require__.bind(null, /*! ./CirculatingLight */ "../../../libs/ui/src/lib/world-environment/CirculatingLight.tsx")).then(m => ({
  default: m.CirculatingLight
})));
function WorldLights({
  useWorldStore
}) {
  // const shouldStop = useWorldStore(state => state.isHeroHovered);
  const shouldShowBottom = useWorldStore(state => state.shouldShowBottom);
  const buffer = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["useBufferHeight"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_4__["Suspense"], {
    fallback: null,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("hemisphereLight", {
      // color="white"
      // groundColor="lightblue"
      intensity: 0.1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(CirculatingLight, {
      axis: [1, 2, 0],
      center: [0, 10, 40],
      color: 0xfbfffc - 0x888888,
      decay: 3 // color={0xff0000}
      ,
      distance: buffer.diag * 4,
      freq: 0.35,
      intensity: 2,
      layers: 0,
      offset: 3.14,
      radius: buffer.diag,
      "rotation-z": Math.PI,
      "shadow-bias": -0.0004 // shadow-camera-far={-1}
      ,
      "shadow-mapSize-height": _SHADOW_SCALE__WEBPACK_IMPORTED_MODULE_1__["SHADOW_SCALE"],
      "shadow-mapSize-width": _SHADOW_SCALE__WEBPACK_IMPORTED_MODULE_1__["SHADOW_SCALE"] // shouldStop={shouldStop}

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_StaticLight__WEBPACK_IMPORTED_MODULE_2__["StaticLight"] // color={'hotpink'}
    // depthBuffer={depthRef}
    , {
      shouldShowBottom: shouldShowBottom
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
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
/* harmony import */ var postprocessing_src_images_textures_NoiseTexture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! postprocessing/src/images/textures/NoiseTexture */ "../../../node_modules/postprocessing/src/images/textures/NoiseTexture.js");




Object(_react_three_fiber__WEBPACK_IMPORTED_MODULE_0__["extend"])({
  OrbitControls: three_stdlib__WEBPACK_IMPORTED_MODULE_1__["OrbitControls"],
  PointerLockControls: three_stdlib__WEBPACK_IMPORTED_MODULE_1__["PointerLockControls"],
  FirstPersonControls: three_stdlib__WEBPACK_IMPORTED_MODULE_1__["FirstPersonControls"],
  ConvexGeometry: three_examples_jsm_geometries_ConvexGeometry__WEBPACK_IMPORTED_MODULE_2__["ConvexGeometry"],
  NoiseTexture: postprocessing_src_images_textures_NoiseTexture__WEBPACK_IMPORTED_MODULE_3__["NoiseTexture"]
});

/***/ }),

/***/ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../../../node_modules/core-js/internals/a-function.js":
/*!*******************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/a-function.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


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

/***/ "../../../node_modules/core-js/internals/an-instance.js":
/*!********************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/an-instance.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
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

/***/ "../../../node_modules/core-js/internals/array-method-is-strict.js":
/*!*******************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/array-method-is-strict.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/array-reduce.js":
/*!*********************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/array-reduce.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "../../../node_modules/core-js/internals/a-function.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../../node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../../../node_modules/core-js/internals/indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../../../node_modules/core-js/internals/to-length.js");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!***************************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
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

/***/ "../../../node_modules/core-js/internals/classof.js":
/*!****************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/classof.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "../../../node_modules/core-js/internals/to-string-tag-support.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "../../../node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
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

/***/ "../../../node_modules/core-js/internals/engine-is-browser.js":
/*!**************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/engine-is-browser.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = typeof window == 'object';


/***/ }),

/***/ "../../../node_modules/core-js/internals/engine-is-ios.js":
/*!**********************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/engine-is-ios.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../../../node_modules/core-js/internals/engine-user-agent.js");

module.exports = /(?:iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "../../../node_modules/core-js/internals/engine-is-node.js":
/*!***********************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/engine-is-node.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "../../../node_modules/core-js/internals/classof-raw.js");
var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "../../../node_modules/core-js/internals/engine-is-webos-webkit.js":
/*!*******************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/engine-is-webos-webkit.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../../../node_modules/core-js/internals/engine-user-agent.js");

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


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

/***/ "../../../node_modules/core-js/internals/function-bind-context.js":
/*!******************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/function-bind-context.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "../../../node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
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

/***/ "../../../node_modules/core-js/internals/get-iterator-method.js":
/*!****************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/get-iterator-method.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "../../../node_modules/core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../../node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
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

/***/ "../../../node_modules/core-js/internals/host-report-errors.js":
/*!***************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/host-report-errors.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


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

/***/ "../../../node_modules/core-js/internals/is-array-iterator-method.js":
/*!*********************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/is-array-iterator-method.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../../node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
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

/***/ "../../../node_modules/core-js/internals/iterate.js":
/*!****************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/iterate.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "../../../node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../../../node_modules/core-js/internals/to-length.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../../../node_modules/core-js/internals/function-bind-context.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "../../../node_modules/core-js/internals/get-iterator-method.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "../../../node_modules/core-js/internals/iterator-close.js");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/iterator-close.js":
/*!***********************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/iterator-close.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


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

/***/ "../../../node_modules/core-js/internals/microtask.js":
/*!******************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/microtask.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../../node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var macrotask = __webpack_require__(/*! ../internals/task */ "../../../node_modules/core-js/internals/task.js").set;
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "../../../node_modules/core-js/internals/engine-is-ios.js");
var IS_WEBOS_WEBKIT = __webpack_require__(/*! ../internals/engine-is-webos-webkit */ "../../../node_modules/core-js/internals/engine-is-webos-webkit.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "../../../node_modules/core-js/internals/engine-is-node.js");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/native-promise-constructor.js":
/*!***********************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/native-promise-constructor.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");

module.exports = global.Promise;


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

/***/ "../../../node_modules/core-js/internals/new-promise-capability.js":
/*!*******************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/new-promise-capability.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "../../../node_modules/core-js/internals/a-function.js");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


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

/***/ "../../../node_modules/core-js/internals/perform.js":
/*!****************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/perform.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/promise-resolve.js":
/*!************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/promise-resolve.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");
var newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ "../../../node_modules/core-js/internals/new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/redefine-all.js":
/*!*********************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/redefine-all.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "../../../node_modules/core-js/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


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

/***/ "../../../node_modules/core-js/internals/set-species.js":
/*!********************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/set-species.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../node_modules/core-js/internals/get-built-in.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
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

/***/ "../../../node_modules/core-js/internals/species-constructor.js":
/*!****************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/species-constructor.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "../../../node_modules/core-js/internals/a-function.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/task.js":
/*!*************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/task.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../../../node_modules/core-js/internals/function-bind-context.js");
var html = __webpack_require__(/*! ../internals/html */ "../../../node_modules/core-js/internals/html.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "../../../node_modules/core-js/internals/document-create-element.js");
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "../../../node_modules/core-js/internals/engine-is-ios.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "../../../node_modules/core-js/internals/engine-is-node.js");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins -- safe
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


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

/***/ "../../../node_modules/core-js/internals/to-string-tag-support.js":
/*!******************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/internals/to-string-tag-support.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


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

/***/ "../../../node_modules/core-js/modules/es.array.reduce.js":
/*!**********************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/modules/es.array.reduce.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");
var $reduce = __webpack_require__(/*! ../internals/array-reduce */ "../../../node_modules/core-js/internals/array-reduce.js").left;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "../../../node_modules/core-js/internals/array-method-is-strict.js");
var CHROME_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../../../node_modules/core-js/internals/engine-v8-version.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "../../../node_modules/core-js/internals/engine-is-node.js");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.array.sort.js":
/*!********************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/modules/es.array.sort.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "../../../node_modules/core-js/internals/a-function.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../../node_modules/core-js/internals/to-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "../../../node_modules/core-js/internals/array-method-is-strict.js");

var test = [];
var nativeSort = test.sort;

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD;

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.promise.js":
/*!*****************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/modules/es.promise.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../../node_modules/core-js/internals/is-pure.js");
var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../node_modules/core-js/internals/get-built-in.js");
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ "../../../node_modules/core-js/internals/native-promise-constructor.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../../node_modules/core-js/internals/redefine.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "../../../node_modules/core-js/internals/redefine-all.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../../../node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../../node_modules/core-js/internals/set-to-string-tag.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "../../../node_modules/core-js/internals/set-species.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "../../../node_modules/core-js/internals/a-function.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "../../../node_modules/core-js/internals/an-instance.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../../../node_modules/core-js/internals/inspect-source.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "../../../node_modules/core-js/internals/iterate.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "../../../node_modules/core-js/internals/check-correctness-of-iteration.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "../../../node_modules/core-js/internals/species-constructor.js");
var task = __webpack_require__(/*! ../internals/task */ "../../../node_modules/core-js/internals/task.js").set;
var microtask = __webpack_require__(/*! ../internals/microtask */ "../../../node_modules/core-js/internals/microtask.js");
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "../../../node_modules/core-js/internals/promise-resolve.js");
var hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ "../../../node_modules/core-js/internals/host-report-errors.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "../../../node_modules/core-js/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "../../../node_modules/core-js/internals/perform.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../../node_modules/core-js/internals/internal-state.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../../../node_modules/core-js/internals/is-forced.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");
var IS_BROWSER = __webpack_require__(/*! ../internals/engine-is-browser */ "../../../node_modules/core-js/internals/engine-is-browser.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "../../../node_modules/core-js/internals/engine-is-node.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../../../node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var NativePromisePrototype = NativePromise && NativePromise.prototype;
var PromiseConstructor = NativePromise;
var PromiseConstructorPrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var SUBCLASSING = false;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructorPrototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = new PromiseConstructor(function (resolve) { resolve(1); });
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
  if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  PromiseConstructorPrototype = PromiseConstructor.prototype;
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructorPrototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function' && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          nativeThen.call(that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });

      // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
      redefine(NativePromisePrototype, 'catch', PromiseConstructorPrototype['catch'], { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromiseConstructorPrototype);
    }
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.symbol.description.js":
/*!****************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/core-js/modules/es.symbol.description.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js").f;
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "../../../node_modules/core-js/internals/copy-constructor-properties.js");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


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
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!/Users/coryhall/Code/FL/anonymous.club/node_modules/sass-loader/dist/cjs.js!/Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/hero-figurine/HeroFigurine.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!/Users/coryhall/Code/FL/anonymous.club/node_modules/sass-loader/dist/cjs.js!/Users/coryhall/Code/FL/anonymous.club/libs/ui/src/lib/world-environment/WorldEnvironment.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
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
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /Users/coryhall/Code/FL/anonymous.club/node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!/Users/coryhall/Code/FL/anonymous.club/node_modules/sass-loader/dist/cjs.js!./app/App.module.scss ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".App_app__2Lcw_ {\n  position: absolute;\n  inset: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.0625em;\n}\n.App_app__2Lcw_ input {\n  font-size: 16px;\n  background: none;\n  color: white;\n  padding: 2px;\n  margin: 0px 2px;\n}", ""]);
// Exports
exports.locals = {
	"app": "App_app__2Lcw_"
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

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../../node_modules/sass-loader/dist/cjs.js!./App.module.scss */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js!./app/App.module.scss");

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _anonymous_club_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @anonymous.club/ui */ "../../../libs/ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _MODELS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MODELS */ "./app/MODELS.tsx");
/* harmony import */ var _useWorldStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useWorldStore */ "./app/useWorldStore.tsx");
/* harmony import */ var _IMGS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IMGS */ "./app/IMGS.ts");
/* harmony import */ var _LINKS__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LINKS */ "./app/LINKS.tsx");
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @react-three/drei */ "../../../node_modules/@react-three/drei/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);


const _excluded = ["value", "setValue"];
var _jsxFileName = "/Users/coryhall/Code/FL/anonymous.club/apps/client/src/app/App.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable @typescript-eslint/no-explicit-any */





 // import { Navigation } from './navigation/Navigation';
// import BioText from './bio-text/BioText';






const circleSlice = (arr, count) => idx => {
  let i = idx;
  const out = [];

  while (out.length < count) {
    i %= arr.length;
    out.push(arr[i]);
    i++;
  }

  return out;
};

function TestInput(_ref) {
  let {
    value,
    setValue
  } = _ref,
      props = Object(_Users_coryhall_Code_FL_anonymous_club_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  const onChange = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(({
    target: {
      value: v
    }
  }) => {
    const parsed = parseInt(v);
    if (!isNaN(parsed)) setValue(parsed);
  }, [setValue]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("input", _objectSpread(_objectSpread({}, props), {}, {
    type: "number",
    value: value,
    onChange: onChange
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

const Navigation = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["lazy"])(() => __webpack_require__.e(/*! import() | navigation */ "navigation").then(__webpack_require__.bind(null, /*! ./navigation/Navigation */ "./app/navigation/Navigation.tsx")));
const BioText = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["lazy"])(() => __webpack_require__.e(/*! import() | bio */ "bio").then(__webpack_require__.bind(null, /*! ./bio-text/BioText */ "./app/bio-text/BioText.tsx")));
const WorldEnvironment = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["lazy"])(() => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @anonymous.club/ui */ "../../../libs/ui/src/index.ts")).then(m => {
  return {
    default: m.WorldEnvironment
  };
}));
function App() {
  const [img, setImg] = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(27);
  const [iCount, setICount] = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(36);
  const [colMax, setColMax] = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(12);
  const [mod, setMod] = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(2);
  const imgCircle = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(() => circleSlice(_IMGS__WEBPACK_IMPORTED_MODULE_8__["default"], iCount), [iCount]);
  const CurrentFigure = _MODELS__WEBPACK_IMPORTED_MODULE_6__["MODELS"][mod];
  const hideBG = Object(_useWorldStore__WEBPACK_IMPORTED_MODULE_7__["useWorldStore"])(state => state.shouldShowBottom);
  const globe = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_anonymous_club_ui__WEBPACK_IMPORTED_MODULE_4__["GridGlobe"], {
    cols: colMax,
    imgs: imgCircle(img + Math.floor(iCount / 2))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 32
  }, this), [colMax, iCount, img, imgCircle]); // const globe = useMemo(() => (<Globe
  //   cols={colMax}
  //   imgs={imgCircle(img + Math.floor(iCount / 2))}
  //   />), [colMax, iCount, img, imgCircle]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.app,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
      style: {
        position: 'fixed',
        zIndex: 1000
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(TestInput, {
        max: _IMGS__WEBPACK_IMPORTED_MODULE_8__["default"].length - 1,
        min: 0,
        setValue: setImg,
        value: img
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(TestInput, {
        max: _IMGS__WEBPACK_IMPORTED_MODULE_8__["default"].length,
        min: 1,
        setValue: setICount,
        type: "number",
        value: iCount
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(TestInput, {
        max: 16,
        min: 1,
        setValue: setColMax,
        type: "number",
        value: colMax
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(TestInput, {
        max: _MODELS__WEBPACK_IMPORTED_MODULE_6__["MODELS"].length - 1,
        min: 0,
        setValue: setMod,
        type: "number",
        value: mod
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_5__["Suspense"], {
      fallback: null,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(Navigation, {
        links: _LINKS__WEBPACK_IMPORTED_MODULE_9__["LINKS"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(WorldEnvironment, {
        useWorldStore: _useWorldStore__WEBPACK_IMPORTED_MODULE_7__["useWorldStore"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_react_three_drei__WEBPACK_IMPORTED_MODULE_10__["AdaptiveDpr"], {
          pixelated: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_anonymous_club_ui__WEBPACK_IMPORTED_MODULE_4__["WorldBackDrop"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, this), hideBG || globe, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_react_three_drei__WEBPACK_IMPORTED_MODULE_10__["CubeCamera"], {
          far: -1,
          resolution: 1024,
          children: Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(texture => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(CurrentFigure, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_anonymous_club_ui__WEBPACK_IMPORTED_MODULE_4__["materials"].ClearOnHoverMaterial, {
              transparent: true // flatShading
              // vertexColors
              // vertexTangents
              ,
              clearcoat: 1 // attach="material"
              // wireframe
              ,
              clearcoatRoughness: 0.01,
              color: 0xffffff - 0xebf8fb // clearcoatRoughness={0.5}
              ,
              envMap: texture // ior={1.0}
              // color={0xebf8fb}
              // color={0x000000}
              // depthTest={false}
              ,
              envMapIntensity: 2,
              ior: 2.3,
              metalness: 0.92,
              reflectivity: 0.9984,
              roughness: 0.07062005 // metalness={0.098}
              ,
              useWorldStore: _useWorldStore__WEBPACK_IMPORTED_MODULE_7__["useWorldStore"],
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("color", {
                // args={[0x010f0f]}
                args: [0x010000],
                attach: "emissive"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("color", {
                args: [0xeeefdd] // args={[0x010000]}
                ,
                attach: "sheen"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 15
          }, this), [CurrentFigure])
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_anonymous_club_ui__WEBPACK_IMPORTED_MODULE_4__["EnvironmentEffects"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      path: "/bio",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_5__["Suspense"], {
        fallback: null,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(BioText, {
          useWorldStore: _useWorldStore__WEBPACK_IMPORTED_MODULE_7__["useWorldStore"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
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

/***/ "./app/LINKS.tsx":
/*!***********************!*\
  !*** ./app/LINKS.tsx ***!
  \***********************/
/*! exports provided: LINKS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINKS", function() { return LINKS; });
const LINKS = [{
  href: '/',
  copy: 'Home'
}, {
  href: '/archive',
  copy: 'Archive'
}, {
  href: '/cv',
  copy: 'CV'
}, // {
//   href: '/bio',
//   copy: 'Bio'
// },
{
  href: '/hba',
  copy: 'HBA x Anonymous'
}];

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
    model.getWorldPosition(heroCenter);
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

/***/ "./assets/210618/ANO_CHI_01_HIRES.glb":
/*!********************************************!*\
  !*** ./assets/210618/ANO_CHI_01_HIRES.glb ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/models/d9618422c5d13baba8e389797a88740a.glb";

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





console.log(Object({"NODE_ENV":"development","NX_CLI_SET":"true","NX_TASK_HASH":"46e40bfdc8b3b6f6d7f47a04f75ad8677ea592a4a727b74096d82d59819b1d30","NX_INVOKED_BY_RUNNER":"true","NX_WORKSPACE_ROOT":"/Users/coryhall/Code/FL/anonymous.club","NX_TERMINAL_OUTPUT_PATH":"/Users/coryhall/Code/FL/anonymous.club/node_modules/.cache/nx/terminalOutputs/46e40bfdc8b3b6f6d7f47a04f75ad8677ea592a4a727b74096d82d59819b1d30","NX_FORWARD_OUTPUT":"true"}));
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
/* harmony import */ var _assets_210618_ANO_CHI_01_HIRES_glb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/210618/ANO_CHI_01_HIRES.glb */ "./assets/210618/ANO_CHI_01_HIRES.glb");
/* harmony import */ var _assets_210618_ANO_CHI_01_HIRES_glb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_210618_ANO_CHI_01_HIRES_glb__WEBPACK_IMPORTED_MODULE_4__);
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
  } = Object(_react_three_drei__WEBPACK_IMPORTED_MODULE_3__["useGLTF"])(_assets_210618_ANO_CHI_01_HIRES_glb__WEBPACK_IMPORTED_MODULE_4___default.a);
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
_react_three_drei__WEBPACK_IMPORTED_MODULE_3__["useGLTF"].preload(_assets_210618_ANO_CHI_01_HIRES_glb__WEBPACK_IMPORTED_MODULE_4___default.a);

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