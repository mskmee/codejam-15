/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!../node_modules/sass-loader/dist/cjs.js!./style/style.css":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!../node_modules/sass-loader/dist/cjs.js!./style/style.css ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/background-img.jpg */ \"./img/background-img.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat center;\\n  color: #e2e8e4;\\n  background-color: #6Eb5C0;\\n  margin: 0;\\n  font-size: clamp(1rem, 0.688rem + 1.56vw, 2.25rem);\\n}\\n\\n.game__win {\\n  position: absolute;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-content: center;\\n  align-items: center;\\n  top: 0;\\n  opacity: 0;\\n  left: 0;\\n  background: rgba(255, 255, 255, 0.7);\\n  color: #006c84;\\n  font-size: 50px;\\n  width: 100%;\\n  height: 100%;\\n  transition: all 0.5s ease;\\n  z-index: 0;\\n}\\n\\n.game__win._active {\\n  opacity: 1;\\n  z-index: 4;\\n}\\n\\n.menu__list {\\n  display: flex;\\n  position: absolute;\\n  left: 0;\\n  top: -400%;\\n  background: rgba(0, 0, 0, 0.5);\\n  width: 100%;\\n  height: 100%;\\n  z-index: 2;\\n  margin: 0;\\n  padding: 0;\\n  justify-content: center;\\n  align-content: center;\\n  flex-direction: column;\\n  gap: 30px;\\n  align-items: center;\\n  list-style: none;\\n  transition: all 0.3s ease;\\n}\\n\\n.pop-up {\\n  position: absolute;\\n  background: linear-gradient(to right, #fc5c7d, #6a82fb);\\n  left: -100%;\\n  top: 0;\\n  padding: 40px;\\n  transition: all 1s ease;\\n  border-radius: 20px;\\n  height: 40px;\\n  z-index: 15;\\n}\\n\\n.pop-up._active {\\n  left: 0;\\n}\\n\\n.menu__list._active {\\n  top: 0;\\n}\\n\\n.menu__sub__list {\\n  display: flex;\\n  position: absolute;\\n  left: -400%;\\n  top: 0;\\n  background: rgba(0, 0, 0, 0.5);\\n  width: 100%;\\n  height: 100%;\\n  z-index: 2;\\n  margin: 0;\\n  padding: 0;\\n  justify-content: center;\\n  align-content: center;\\n  flex-direction: column;\\n  gap: 30px;\\n  align-items: center;\\n  list-style: none;\\n  transition: all 0.3s ease;\\n  color: #e2e8e4;\\n}\\n\\n.menu__sub__list._active {\\n  left: 0;\\n}\\n\\n.menu__button {\\n  position: relative;\\n  z-index: 3;\\n  background-color: #ffccbb;\\n  color: #006c84;\\n  padding: 10px;\\n  border-radius: 20%;\\n  border: 1px solid #e2e8e4;\\n  font-size: clamp(1.563rem, 1.406rem + 0.78vw, 2.188rem);\\n  cursor: pointer;\\n  transition: all 0.3s ease;\\n}\\n\\n.menu__button:hover {\\n  background: #6Eb5C0;\\n  color: aliceblue;\\n}\\n\\n.menu__option {\\n  font-size: 80px;\\n  padding: 0;\\n  margin: 0 auto;\\n  cursor: pointer;\\n}\\n\\n.menu__option:hover {\\n  color: #6Eb5C0;\\n}\\n\\n.menu__button_div {\\n  display: flex;\\n  justify-content: center;\\n  margin-bottom: 20px;\\n  padding-top: 20px;\\n}\\n\\n.game__field {\\n  margin: 0 auto;\\n  width: clamp(18.75rem, 12.657rem + 31.45vw, 50rem);\\n  height: clamp(18.75rem, 12.657rem + 31.45vw, 50rem);\\n  background-color: #6Eb5C0;\\n  position: relative;\\n  display: grid;\\n  grid-gap: 1px;\\n  gap: 1px;\\n}\\n\\n.columns-2 {\\n  grid-template-areas: \\\"1 2\\\";\\n}\\n\\n.columns-4 {\\n  grid-template-areas: \\\"1 2 3 4\\\";\\n}\\n\\n.columns-3 {\\n  grid-template-areas: \\\"1 2 3 4\\\";\\n}\\n\\n.columns-5 {\\n  grid-template-areas: \\\"1 2 3 4 5\\\";\\n}\\n\\n.columns-6 {\\n  grid-template-areas: \\\"1 2 3 4 5 6\\\";\\n}\\n\\n.columns-7 {\\n  grid-template-areas: \\\"1 2 3 4 5 6 7 8\\\";\\n}\\n\\n.columns-8 {\\n  grid-template-areas: \\\"1 2 3 4 5 6 7 8\\\";\\n}\\n\\n.puzzle-element {\\n  z-index: 1;\\n  display: flex;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  background-color: #006c84;\\n  border: 1px solid #6Eb5C0;\\n  cursor: pointer;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: clamp(1rem, 0.688rem + 1.56vw, 2.25rem);\\n  transition: all 0.2s ease-in-out;\\n}\\n\\n.puzzle-element.blank {\\n  background-color: #6Eb5C0;\\n  cursor: pointer;\\n  z-index: -1;\\n}\\n\\n.game__data {\\n  display: flex;\\n  justify-content: space-around;\\n  margin: 20px 0;\\n}\\n\\n.game__timer {\\n  display: flex;\\n  gap: 5px;\\n}\\n\\n.timer__minutes {\\n  position: relative;\\n}\\n\\n.wrapper {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100vh;\\n}\\n\\nform {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 10px;\\n  margin-top: 10px;\\n}\\n\\ninput {\\n  cursor: pointer;\\n  padding: 20px;\\n  margin: 30px;\\n  font-size: 30px;\\n  background: linear-gradient(to right, #fc5c7d, #6a82fb);\\n  color: #ffffff;\\n  border: 20px;\\n}\\n\\ninput::-moz-placeholder {\\n  color: #ffffff;\\n}\\n\\ninput::placeholder {\\n  color: #ffffff;\\n}\\n\\nbutton {\\n  padding: 20px 40px;\\n  font-size: 30px;\\n  color: #ffffff;\\n  background-color: #006c84;\\n  border-radius: 12px;\\n  border: 1px transparent;\\n  cursor: pointer;\\n  transition: all 0.3s ease;\\n}\\n\\nbutton:hover {\\n  background-color: #6Eb5C0;\\n}\\n\\ntable {\\n  font-family: \\\"Lucida Sans Unicode\\\", \\\"Lucida Grande\\\", Sans-Serif;\\n  font-size: 14px;\\n  border-radius: 10px;\\n  border-spacing: 0;\\n  text-align: center;\\n  position: absolute;\\n  width: 90%;\\n  height: 70%;\\n  transform: translate(-50%, -50%);\\n  top: -500%;\\n  left: 50%;\\n  z-index: 2;\\n  color: #ffffff;\\n  font-size: 22px;\\n  cursor: pointer;\\n  transition: all 0.3s ease;\\n}\\n\\ntable._active {\\n  top: 50%;\\n}\\n\\ncaption {\\n  color: white;\\n  margin-bottom: 7px;\\n  font-size: 20px;\\n}\\n\\nth {\\n  background: rgba(255, 137, 0, 0.9);\\n  padding: 10px 20px;\\n  color: #ffffff;\\n}\\n\\nth, td {\\n  border-style: solid;\\n  border-width: 0 1px 1px 0;\\n  border-color: rgba(0, 0, 0, 0.1);\\n  color: #ffffff;\\n}\\n\\nth:first-child {\\n  border-top-left-radius: 5px;\\n}\\n\\nth:last-child {\\n  border-top-right-radius: 5px;\\n  border-right: none;\\n}\\n\\nth:first-child, td:first-child {\\n  padding: 7px 8px;\\n}\\n\\ntd {\\n  padding: 7px 20px;\\n  background: #6Eb5C0;\\n}\\n\\ntr:last-child td:first-child {\\n  border-radius: 0 0 0 5px;\\n}\\n\\ntr:last-child td:last-child {\\n  border-radius: 0 0 5px 0;\\n}\\n\\ntr td:last-child {\\n  border-right: none;\\n}\\n\\n@media screen and (max-width: 1000px) {\\n  .menu__option {\\n    font-size: 30px;\\n    margin: 10px;\\n  }\\n  .menu__sub__list {\\n    font-size: 30px;\\n    margin: 10px;\\n  }\\n}\\n@media screen and (max-width: 500px) {\\n  input {\\n    width: clamp(15rem, -5.395rem + 105.26vw, 27.5rem);\\n  }\\n  .game__win {\\n    font-size: 35px;\\n    padding: 5px;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./style/style.css?../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B2%5D!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./style/style.css":
/*!*************************!*\
  !*** ./style/style.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!../../node_modules/sass-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!../node_modules/sass-loader/dist/cjs.js!./style/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./style/style.css?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style */ \"./style/style.css\");\n/* harmony import */ var _models_GameBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/GameBuilder */ \"./models/GameBuilder.js\");\n\n\n\nconsole.log('Приветсвтую проверяющий! DarnDrop не делал и, наверное, не буду))) Отличной проверки')\nconst gameBuilder = new _models_GameBuilder__WEBPACK_IMPORTED_MODULE_1__.GameBuilder();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./models/CreatorElements.js":
/*!***********************************!*\
  !*** ./models/CreatorElements.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreatorElements\": () => (/* binding */ CreatorElements)\n/* harmony export */ });\nclass CreatorElements{\n    constructor(parent, tag, content = \"\", classCss) {\n        const element = document.createElement(tag);\n        element.textContent = content;\n        this.element = element;\n        this.element.classList.add(classCss);\n        parent.appendChild(element);\n    }\n\n    destroy(){\n        this.element.remove();\n    }\n}\n\n//# sourceURL=webpack:///./models/CreatorElements.js?");

/***/ }),

/***/ "./models/GameBuilder.js":
/*!*******************************!*\
  !*** ./models/GameBuilder.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameBuilder\": () => (/* binding */ GameBuilder)\n/* harmony export */ });\n/* harmony import */ var _models_CreatorElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models/CreatorElements */ \"./models/CreatorElements.js\");\n/* harmony import */ var _models_MenuButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/MenuButton */ \"./models/MenuButton.js\");\n/* harmony import */ var _models_GameField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models/GameField */ \"./models/GameField.js\");\n/* harmony import */ var _models_GameData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models/GameData */ \"./models/GameData.js\");\n/* harmony import */ var _models_MusicPlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models/MusicPlayer */ \"./models/MusicPlayer.js\");\n/* harmony import */ var _models_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models/Menu */ \"./models/Menu.js\");\n/* harmony import */ var _models_MatrixCreator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @models/MatrixCreator */ \"./models/MatrixCreator.js\");\n/* harmony import */ var _models_PopUp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @models/PopUp */ \"./models/PopUp.js\");\n/* harmony import */ var _models_OptionsModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @models/OptionsModel */ \"./models/OptionsModel.js\");\n/* harmony import */ var _models_ScoreBoard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @models/ScoreBoard */ \"./models/ScoreBoard.js\");\n\n\n\n\n\n\n\n\n\n\n\nclass GameBuilder extends _models_CreatorElements__WEBPACK_IMPORTED_MODULE_0__.CreatorElements{\n    constructor(matrixLength) {\n        super(document.body, 'div', '', \"main__window\");\n        this.gameOptions = new _models_OptionsModel__WEBPACK_IMPORTED_MODULE_8__.OptionsModel(matrixLength);\n        this.menuButton = new _models_MenuButton__WEBPACK_IMPORTED_MODULE_1__.MenuButton(this.element, this.openMenu);\n        this.matrixCreator = new _models_MatrixCreator__WEBPACK_IMPORTED_MODULE_6__.MatrixCreator(this.gameOptions.matrixLength, this.gameOptions.matrix)\n        this.audio = new _models_MusicPlayer__WEBPACK_IMPORTED_MODULE_4__.MusicPlayer(this.element, this.gameOptions);\n        this.gameData = new _models_GameData__WEBPACK_IMPORTED_MODULE_3__.GameData(this.element, this.gameOptions.timerCount, this.gameOptions.movesCount);\n        this.gameField = new _models_GameField__WEBPACK_IMPORTED_MODULE_2__.GameField(this.element, this.matrixCreator.matrix, this.matrixCreator.matrixComplete,\n            this.gameData, this.audio);\n        const mainMenuData = [\"New game\", \"Save\", \"Load\", \"Music\", \"Game mode\", \"Score board\", \"Close menu\"];\n        this.menu = new _models_Menu__WEBPACK_IMPORTED_MODULE_5__.Menu(this.element, mainMenuData, (e) => this.menuLogic(e));\n    }\n\n    openMenu = () => {\n        if(!this.menu.option.classList.contains(\"_active\")){\n            clearInterval(this.gameField.t)\n            this.menu.option.classList.add(\"_active\")\n            this.createSubMenu();\n        }else{\n            this.menu.option.classList.remove(\"_active\");\n            if(this.timerOn){\n                this.gameField.gameData.time = this.gameField.gameData.timeForSave;\n                this.gameField.t = this.timer();\n            }\n        }\n        this.audio.menuSoundStart();\n    }\n\n    createSubMenu = () => {\n        const musicOptions = [\"Sound\", \"Music\", \"Main menu\"];\n        const gameOptionsChoose = [\"3x3\", \"4x4\", \"5x5\", \"6x6\", \"7x7\", \"8x8\", \"Main menu\"];\n        this.subMenuMusicOptions = new _models_Menu__WEBPACK_IMPORTED_MODULE_5__.Menu(this.element, musicOptions,\n            (e) => this.initSubMenuLogic(e, this.subMenuMusicOptions), \"menu__sub__list\");\n        this.subMenuGameOptions = new _models_Menu__WEBPACK_IMPORTED_MODULE_5__.Menu(this.element, gameOptionsChoose,\n            (e) => this.initSubMenuLogic(e , this.subMenuGameOptions), \"menu__sub__list\");\n        this.subMenuScoreBoard = new _models_ScoreBoard__WEBPACK_IMPORTED_MODULE_9__.ScoreBoard (this.gameOptions.getWinners(),\n            (e) => {\n                this.menu.option.style.opacity = '1';\n                this.subMenuScoreBoard.table.classList.remove('_active');\n            });\n    }\n\n    initSubMenuLogic = (e, thisOption) => {\n        switch (e.target.textContent.toLowerCase()){\n            case \"sound\":\n                this.gameOptions.soundPlay = !this.gameOptions.soundPlay;\n                if(this.gameOptions.soundPlay){\n                    new _models_PopUp__WEBPACK_IMPORTED_MODULE_7__.PopUp('sound turn on');\n                }else{\n                    new _models_PopUp__WEBPACK_IMPORTED_MODULE_7__.PopUp('sound turn off');\n                }\n                break\n            case \"music\":\n                this.gameOptions.musicPlay = !this.gameOptions.musicPlay;\n                if(this.gameOptions.musicPlay){\n                    new _models_PopUp__WEBPACK_IMPORTED_MODULE_7__.PopUp('music turn on');\n                    this.audio.musicStart();\n                }else{\n                    new _models_PopUp__WEBPACK_IMPORTED_MODULE_7__.PopUp('music turn off');\n                    this.audio.musicStopPlay();\n                }\n                break\n            case \"3x3\":\n                this.changeGameMode(\"3x3\")\n                break\n            case \"4x4\":\n                this.changeGameMode(\"4x4\")\n                break\n            case \"5x5\":\n                this.changeGameMode(\"5x5\")\n                break\n            case \"6x6\":\n                this.changeGameMode(\"6x6\")\n                break\n            case \"7x7\":\n                this.changeGameMode(\"7x7\")\n                break\n            case \"8x8\":\n                this.changeGameMode(\"8x8\")\n                break\n            default:\n                if(thisOption.option.classList.contains(\"_active\")){\n                    thisOption.option.classList.remove(\"_active\");\n                    this.menu.option.style.opacity = \"1\";\n                }\n        }\n        this.audio.menuSoundStart();\n    }\n\n    menuLogic = (e) => {\n        switch (e.target.textContent.toLowerCase()){\n            case \"load\":\n                const obj = this.gameOptions.getSaveGame();\n                if(obj){\n                    this.gameData.element.remove();\n                    this.gameField.element.remove();\n                    this.gameData = new _models_GameData__WEBPACK_IMPORTED_MODULE_3__.GameData(this.element, +obj.timer, +obj.moves);\n                    this.gameField = new _models_GameField__WEBPACK_IMPORTED_MODULE_2__.GameField(this.element, obj.matrix, obj.complete,\n                        this.gameData, this.audio);\n                    new _models_PopUp__WEBPACK_IMPORTED_MODULE_7__.PopUp('game was loaded')\n                }else{\n                    new _models_PopUp__WEBPACK_IMPORTED_MODULE_7__.PopUp(\"can't find you game, try to clear local storage and save again\")\n                }\n                break;\n            case \"save\":\n                const saveGame = new _models_OptionsModel__WEBPACK_IMPORTED_MODULE_8__.OptionsModel(this.matrixCreator.matrix.length, this.matrixCreator.matrix,\n                    this.matrixCreator.matrixComplete, this.gameField.gameData.timeForSave, this.gameData.count,\n                    this.gameOptions.musicPlay, this.gameOptions.soundPlay);\n                saveGame.saveGame();\n                new _models_PopUp__WEBPACK_IMPORTED_MODULE_7__.PopUp(\"the game was saved\");\n                break;\n            case \"music\":\n                this.menuMusic();\n                break;\n            case \"new game\":\n                this.menuNewGame();\n                break\n            case \"game mode\":\n                this.menuGameMode();\n                break\n            case \"score board\":\n                this.menuScoreBoard();\n                break\n            default:\n                this.menu.option.classList.remove(\"_active\");\n                if(this.gameField.timerOn){\n                    this.gameField.gameData.time = this.gameField.gameData.timeForSave;\n                    this.gameField.t = this.gameField.timer();\n                }\n                break;\n        }\n        this.audio.menuSoundStart();\n    }\n\n    changeGameMode = (text) => {\n        this.element.remove();\n        new GameBuilder(+text.split(\"x\")[0]);\n        new _models_PopUp__WEBPACK_IMPORTED_MODULE_7__.PopUp(`game ${text} was started`);\n    }\n\n    menuNewGame = () => {\n        this.element.remove();\n        const newGame = new GameBuilder();\n        new _models_PopUp__WEBPACK_IMPORTED_MODULE_7__.PopUp('new game have been started')\n    }\n\n    menuGameMode = () => {\n        this.menu.option.style.opacity = '0';\n        this.subMenuGameOptions.option.classList.add(\"_active\");\n    }\n\n    menuMusic = () => {\n        this.menu.option.style.opacity = '0';\n        this.subMenuMusicOptions.option.classList.add(\"_active\");\n    }\n\n    menuScoreBoard = () => {\n        this.menu.option.style.opacity = '0';\n        this.subMenuScoreBoard.table.classList.add(\"_active\");\n    }\n}\n\n//# sourceURL=webpack:///./models/GameBuilder.js?");

/***/ }),

/***/ "./models/GameData.js":
/*!****************************!*\
  !*** ./models/GameData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameData\": () => (/* binding */ GameData)\n/* harmony export */ });\n/* harmony import */ var _models_CreatorElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models/CreatorElements */ \"./models/CreatorElements.js\");\n\n\nclass GameData extends _models_CreatorElements__WEBPACK_IMPORTED_MODULE_0__.CreatorElements {\n    constructor(parent, time, count) {\n        super(parent, \"div\", \"\", \"game__data\");\n        this.createTimer();\n        this.count = count;\n        this.createSteps()\n        this.element.append(this.gameTime)\n        this.element.append(this.gameCount);\n        this.time = time;\n\n    }\n\n    createTimer = () => {\n        this.gameTime = document.createElement(\"div\");\n        this.gameTime.textContent = \"Timer: \";\n        this.gameTime.classList.add(\"game__timer\");\n        this.gameSeconds = document.createElement('div'),\n        this.gameMinute = document.createElement('div');\n        this.gameSeconds.classList.add(\"timer__seconds\");\n        this.gameMinute.classList.add(\"timer__minutes\");\n        this.gameSeconds.textContent = \"00\";\n        this.gameMinute.textContent = \"00\";\n        const separator = document.createElement('span');\n        separator.classList.add(\"timer__separator\");\n        separator.textContent = \":\"\n        this.gameTime.append(this.gameMinute, separator, this.gameSeconds)\n    }\n\n    createSteps = () => {\n        this.gameCount = document.createElement(\"div\");\n        this.gameCount.classList.add(\"game__count\");\n        this.gameCount.textContent = `Steps: ${this.count}`;\n\n    }\n\n    changeSteps = (count) => {\n        this.gameCount.textContent = `Steps: ${count}`;\n    }\n\n    timerStart = () => {\n        let timerInterval = setInterval(() => {\n            this.time += 1/60;\n            let secondVal = Math.floor(this.time) - Math.floor(this.time/60) * 60;\n            let minuteVal = Math.floor(this.time/60);\n            this.gameSeconds.innerHTML = secondVal < 10 ? \"0\" + secondVal.toString() : secondVal;\n            this.gameMinute.innerHTML = minuteVal < 10 ? \"0\" + minuteVal.toString() : minuteVal;\n            this.timeForSave = this.time;\n        }, 1000/60);\n        return timerInterval\n    }\n}\n\n//# sourceURL=webpack:///./models/GameData.js?");

/***/ }),

/***/ "./models/GameField.js":
/*!*****************************!*\
  !*** ./models/GameField.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameField\": () => (/* binding */ GameField)\n/* harmony export */ });\n/* harmony import */ var _models_CreatorElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models/CreatorElements */ \"./models/CreatorElements.js\");\n/* harmony import */ var _models_WinWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/WinWindow */ \"./models/WinWindow.js\");\n\n\n\nclass GameField extends _models_CreatorElements__WEBPACK_IMPORTED_MODULE_0__.CreatorElements{\n    constructor(parent, matrix, matrixComplete, data, audio) {\n        super(parent, \"div\", \"\", \"game__field\");\n        this.matrix = matrix;\n        this.matrixComplete = matrixComplete;\n        this.createPuzzles();\n        this.element.onclick = this.setNewPuzzlePosition;\n        this.gameData = data;\n        this.timer = this.gameData.timerStart;\n        this.timerOn = false;\n        this.audio = audio;\n    }\n\n    createPuzzles = () => {\n        for(let y = 0; y < this.matrix.length; y++){\n            for(let x = 0; x < this.matrix.length; x++){\n                const element = document.createElement('div');\n                element.classList.add('puzzle-element', `${this.matrix[y][x]}`)\n                if(this.matrix[y][x] !== 0){\n                    element.textContent = this.matrix[y][x];\n                }else{\n                    element.textContent = \"\";\n                    element.classList.add(\"blank\");\n                }\n                this.width = (100 / this.matrix.length);\n                element.style.width = `${this.width}%`;\n                element.style.height = `${this.width}%`;\n                this.element.append(element);\n            }\n        }\n        this.nodeArr = Array.from(this.element.querySelectorAll(\".puzzle-element\"));\n        this.setMatrixPosition()\n    }\n\n    setMatrixPosition = () => {\n        for(let y = 0; y < this.matrix.length; y++){\n            for(let x = 0; x < this.matrix.length; x++){\n                const value = this.matrix[y][x];\n                this.nodeArr.forEach(item => {\n                    if(+item.classList[1] === +value){\n                        this.setNodeStyle(item, x, y);\n                    }\n                })\n            }\n        }\n    }\n\n    setNodeStyle = (node, x, y) => {\n        const shiftPs = 100;\n        node.style.transform = `translate3D(${x * shiftPs}%, ${y * shiftPs}%, 0)`;\n    }\n\n    setNewPuzzlePosition = (e) =>{\n        const puzzleBlank = 0;\n        const puzzleNumber = e.target.classList[1];\n        if(typeof puzzleNumber !== \"undefined\"){\n            const puzzleCoords = this.getPuzzleCoords(+puzzleNumber);\n            const blankPuzzleCoords = this.getPuzzleCoords(puzzleBlank);\n            const isValid = this.isSwapValid(puzzleCoords, blankPuzzleCoords);\n            if(isValid){\n                this.swapPuzzle(puzzleCoords, blankPuzzleCoords);\n                this.setMatrixPosition();\n                const winCondition = this.setWin()\n                this.gameDataStart();\n                this.audio.gameFieldSoundStart();\n                if(winCondition){\n                    const win = new _models_WinWindow__WEBPACK_IMPORTED_MODULE_1__.WinWindow(this.gameData.timeForSave, this.gameData.count, this.matrix.length);\n                    this.audio.playWinSound();\n                    win.element.classList.add(\"_active\");\n                    this.element.remove();\n                }\n            }\n        }\n    }\n\n    setWin = () => {\n        const matrixToRow = this.matrix.flat();\n        for(let i = 0; i < matrixToRow.length; i++){\n            if(+matrixToRow[i] !== +this.matrixComplete[i]){\n                return false\n            }\n        }\n        return true\n    }\n\n    getPuzzleCoords = (num) => {\n        for(let y = 0; y < this.matrix.length; y++){\n            for(let x = 0; x < this.matrix.length; x++){\n                const value = this.matrix[y][x];\n                if(value === num){\n                    return {y, x};\n                }\n            }\n        }\n    }\n\n    swapPuzzle = (puzzleCoords, blankCoords) => {\n        const puzzleNumber = this.matrix[puzzleCoords.y][puzzleCoords.x];\n        this.matrix[puzzleCoords.y][puzzleCoords.x] = this.matrix[blankCoords.y][blankCoords.x];\n        this.matrix[blankCoords.y][blankCoords.x] = puzzleNumber;\n    }\n\n    isSwapValid = (puzzleCoords, blankCoords) => {\n        const diffX = Math.abs(puzzleCoords.x - blankCoords.x);\n        const diffY = Math.abs(puzzleCoords.y - blankCoords.y)\n        return (diffX === 1 || diffY === 1) && (puzzleCoords.x === blankCoords.x ||\n            puzzleCoords.y === blankCoords.y)\n    }\n\n    gameDataStart = () => {\n        if(!this.timerOn){\n            this.t = this.timer()\n            this.timerOn = true;\n        }\n        this.gameData.count++;\n        this.gameData.changeSteps(this.gameData.count);\n    }\n}\n\n//# sourceURL=webpack:///./models/GameField.js?");

/***/ }),

/***/ "./models/MatrixCreator.js":
/*!*********************************!*\
  !*** ./models/MatrixCreator.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MatrixCreator\": () => (/* binding */ MatrixCreator)\n/* harmony export */ });\nclass MatrixCreator {\n    constructor(size, matrix = null) {\n        this.size = matrix ? matrix.length : size;\n        this.matrixComplete = this.generateArray();\n        this.matrix = matrix || this.generateMatrix();\n    }\n\n    generateMatrix = () => {\n        let check = false;\n        const arr = this.generateArray();\n        while (!check){\n            this.shuffleArray(arr);\n            check = this.checkArr(arr);\n        }\n        return this.createMatrix(arr)\n    }\n\n    generateArray = () => {\n        const maxSize = this.size * this.size;\n        let arr = [];\n        for(let i = 1; i <= maxSize; i++){\n            let n = i === maxSize ? 0 : i\n            arr.push(n)\n        }\n        return arr\n    }\n\n    shuffleArray = (array) => {\n        let currentIndex = array.length,  randomIndex;\n        while (currentIndex !== 0) {\n            randomIndex = Math.floor(Math.random() * currentIndex);\n            currentIndex--;\n            [array[currentIndex], array[randomIndex]] = [\n                array[randomIndex], array[currentIndex]];\n        }\n        return array\n    }\n\n    checkArr = (array) =>{\n        let inversions = 0;\n        for(let i = 0; i < array.length; i++){\n            for(let j = i + 1; j < array.length; j++) {\n                if(array[i] != 0 && array[j] !=0){\n                    array[i] > array[j] ? inversions++ : 0\n                }\n            }\n        }\n        const checkLastNumbers = this.checkNumbers(array);\n        if(this.size % 2 !== 0){\n            return (inversions % 2 === 0 && checkLastNumbers);\n        }\n        if(this.size % 2 === 0){\n            const blankNum = Math.floor(array.indexOf(0) / this.size)\n            return ((inversions + blankNum) % 2 !== 0 & checkLastNumbers);\n        }\n    }\n\n    checkNumbers = (arr) =>{\n        const lastNum = this.size * this.size - 1;\n        const preLastNum = lastNum - 1;\n        if(arr.indexOf(lastNum) < arr.indexOf(preLastNum)){\n            return false\n        }\n        return  true\n    }\n\n    createMatrix = (array) => {\n       const matrix = [];\n       while (array.length !== 0){\n           matrix.push(array.splice(0, this.size));\n       }\n        return matrix;\n    }\n}\n\n//# sourceURL=webpack:///./models/MatrixCreator.js?");

/***/ }),

/***/ "./models/Menu.js":
/*!************************!*\
  !*** ./models/Menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Menu\": () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var _models_CreatorElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models/CreatorElements */ \"./models/CreatorElements.js\");\n\n\nclass Menu extends _models_CreatorElements__WEBPACK_IMPORTED_MODULE_0__.CreatorElements{\n    constructor(parent, arr, onClick, generatedMenuClass='menu__list') {\n        super(parent, 'div', \"\", \"menu__list_wrapper\");\n        this.menuClass = generatedMenuClass;\n        this.elementArr = arr\n        this.option = this.generateOptionMenu();\n        this.element.onclick = onClick;\n        this.element.append(this.option)\n\n    }\n\n    generateOptionMenu = () => {\n        const wrapper = document.createElement(\"ul\");\n        wrapper.classList.add(this.menuClass)\n        for (let i of this.elementArr){\n            const element = document.createElement(\"li\");\n            element.textContent = i;\n            const j = i.replace(\" \", \"-\")\n            element.classList.add(\"menu__option\", `${j.toLowerCase()}`);\n            wrapper.append(element);\n        }\n        return wrapper;\n    }\n}\n\n//# sourceURL=webpack:///./models/Menu.js?");

/***/ }),

/***/ "./models/MenuButton.js":
/*!******************************!*\
  !*** ./models/MenuButton.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MenuButton\": () => (/* binding */ MenuButton)\n/* harmony export */ });\n/* harmony import */ var _models_CreatorElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models/CreatorElements */ \"./models/CreatorElements.js\");\n\n\nclass MenuButton extends _models_CreatorElements__WEBPACK_IMPORTED_MODULE_0__.CreatorElements{\n    constructor(parent, onClick) {\n        super(parent,\"div\", \"\", \"menu__button_div\");\n        const button = document.createElement(\"button\");\n        button.classList.add(\"menu__button\");\n        button.textContent = \"Menu\";\n        this.element.onclick = onClick;\n        this.element.append(button);\n    }\n}\n\n//# sourceURL=webpack:///./models/MenuButton.js?");

/***/ }),

/***/ "./models/MusicPlayer.js":
/*!*******************************!*\
  !*** ./models/MusicPlayer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MusicPlayer\": () => (/* binding */ MusicPlayer)\n/* harmony export */ });\n/* harmony import */ var _models_CreatorElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models/CreatorElements */ \"./models/CreatorElements.js\");\n/* harmony import */ var _music_audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/music/audio */ \"./music/audio.js\");\n/* harmony import */ var _music_animation_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../music/animation.mp3 */ \"./music/animation.mp3\");\n/* harmony import */ var _music_menuMusic_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../music/menuMusic.mp3 */ \"./music/menuMusic.mp3\");\n/* harmony import */ var _music_winSound_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../music/winSound.mp3 */ \"./music/winSound.mp3\");\n\n\n\n\n\n\nclass MusicPlayer extends _models_CreatorElements__WEBPACK_IMPORTED_MODULE_0__.CreatorElements{\n    constructor(parent, options) {\n        super(parent, 'audio', \"\", \"audio\");\n        this.options = options\n        this.counter = 0;\n        this.playList = _music_audio__WEBPACK_IMPORTED_MODULE_1__.playList;\n    }\n\n    menuSoundStart = () => {\n        if(this.options.soundPlay){\n            this.menuSound = new Audio();\n            this.menuSound.src = _music_menuMusic_mp3__WEBPACK_IMPORTED_MODULE_3__;\n            this.menuSound.play();\n        }\n    }\n\n    gameFieldSoundStart = () => {\n        if(this.options.soundPlay){\n            this.gameFieldSound = new Audio();\n            this.gameFieldSound.src = _music_animation_mp3__WEBPACK_IMPORTED_MODULE_2__;\n            this.gameFieldSound.play();\n        }\n    }\n\n    musicStart = () => {\n        if(this.options.musicPlay){\n            this.music = new Audio()\n            this.music.src = _music_audio__WEBPACK_IMPORTED_MODULE_1__.playList[0].src;\n            this.music.play()\n            this.musicPlay = true;\n            this.music.addEventListener('ended', this.musicPlayNext)\n        }\n    }\n\n    musicPlayNext = () => {\n        if(this.counter === this.playList.length){\n            this.counter = 0;\n        }else {\n            this.counter++;\n        }\n        this.music.src = _music_audio__WEBPACK_IMPORTED_MODULE_1__.playList[this.counter].src;\n        this.music.play();\n    }\n\n    musicStopPlay = () => {\n        this.music.pause();\n        this.music.currentTime = 0;\n        this.options.musicPlay = false;\n    }\n\n    playWinSound = () => {\n        if(this.options.soundPlay){\n            const music = new Audio();\n            music.src = _music_winSound_mp3__WEBPACK_IMPORTED_MODULE_4__;\n            music.play();\n        }\n\n    }\n}\n\n//# sourceURL=webpack:///./models/MusicPlayer.js?");

/***/ }),

/***/ "./models/OptionsModel.js":
/*!********************************!*\
  !*** ./models/OptionsModel.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OptionsModel\": () => (/* binding */ OptionsModel)\n/* harmony export */ });\nclass OptionsModel {\n    constructor(matrixLength = null, matrix = null, matrixComplete = null,\n                timer=null, moves=null, music = null, sound=null) {\n        this.matrixLength = matrixLength || 4;\n        this.matrixComplete = matrixComplete;\n        this.matrix = matrix;\n        this.timerCount = timer || 1;\n        this.movesCount = moves || 0;\n        this.musicPlay =  music || false;\n        this.soundPlay = sound === null ? false : false;\n        this.array = [];\n    }\n\n    saveGame = () => {\n        const obj = {\n            matrix: this.matrix,\n            matrixLength: this.matrixLength,\n            complete: this.matrixComplete,\n            timer: this.timerCount,\n            moves: this.movesCount,\n            music: this.musicPlay,\n            sound: this.soundPlay\n        }\n        localStorage.setItem('gameCondition', JSON.stringify(obj));\n\n    }\n\n    getSaveGame = () => {\n        return JSON.parse(localStorage.getItem('gameCondition'));\n    }\n\n    saveWinner = (name, time, count, mode) => {\n        if(localStorage.getItem('winners')){\n            const savedData = JSON.parse(localStorage.getItem(\"winners\"))\n            if(Array.isArray(savedData)){\n                this.array = savedData\n            }else {\n                this.array.push(savedData)\n            }\n        }\n        const newData = {\n            'name': name,\n            'time': time,\n            'count': count,\n            'mode': `${mode}x${mode}`,\n        }\n        this.array.push(newData)\n        localStorage.setItem(\"winners\", JSON.stringify(this.array));\n    }\n\n    getWinners = () => {\n        if(localStorage.getItem(\"winners\")){\n            return JSON.parse(localStorage.getItem(\"winners\"))\n        }\n    }\n\n}\n\n//# sourceURL=webpack:///./models/OptionsModel.js?");

/***/ }),

/***/ "./models/PopUp.js":
/*!*************************!*\
  !*** ./models/PopUp.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PopUp\": () => (/* binding */ PopUp)\n/* harmony export */ });\n/* harmony import */ var _models_CreatorElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models/CreatorElements */ \"./models/CreatorElements.js\");\n\n\nclass PopUp extends _models_CreatorElements__WEBPACK_IMPORTED_MODULE_0__.CreatorElements{\n    constructor(content) {\n        super(document.body, 'div', content, 'pop-up');\n        this.element.onclick = this.element.remove\n        setTimeout(() => this.element.classList.add(\"_active\"), 1);\n        setTimeout(() => {\n            this.element.classList.remove(\"_active\");\n            setTimeout(() => this.element.remove(), 500);\n        }, 3000);\n    }\n\n\n}\n\n//# sourceURL=webpack:///./models/PopUp.js?");

/***/ }),

/***/ "./models/ScoreBoard.js":
/*!******************************!*\
  !*** ./models/ScoreBoard.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ScoreBoard\": () => (/* binding */ ScoreBoard)\n/* harmony export */ });\n/* harmony import */ var _models_Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models/Menu */ \"./models/Menu.js\");\n\n\nclass ScoreBoard extends _models_Menu__WEBPACK_IMPORTED_MODULE_0__.Menu{\n    constructor(obj, onClick) {\n        super(document.body, [], onClick, 'game__winners');\n        this.option.remove();\n        try{\n            this.sortData = obj.sort((a, b) => a.time - b.time)\n            this.createTable();\n        }catch (e){\n            this.createClearTable();\n        }\n\n    }\n\n    createClearTable = () => {\n        this.table = document.createElement('table');\n        const count = document.createElement('caption');\n        count.textContent = `Hight Scores:`;\n        this.table.append(count);\n        const tr = document.createElement('tr');\n        const data = ['position', 'name', 'time', 'count'];\n        for(let i = 0; i < data.length; i++){\n            const td = document.createElement('td');\n            td.textContent = data[i];\n            tr.append(td)\n        }\n        this.table.append(tr);\n        this.element.append(this.table)\n    }\n\n    createTable = () => {\n        this.table = document.createElement('table');\n        const count = document.createElement('caption');\n        count.textContent = `Hight Scores (total: ${count}`;\n        this.table.append(count)\n        const tr = document.createElement('tr');\n        for(let key in this.sortData[0]){\n            const td = document.createElement('td');\n            td.textContent = key;\n            tr.append(td)\n        }\n        this.table.append(tr)\n        for(let i = 0; i < this.sortData.length; i++){\n            const tr = document.createElement('tr');\n            for(let value of Object.values(this.sortData[i])){\n                const td = document.createElement(\"td\");\n                td.textContent = value\n                tr.append(td)\n            }\n            this.table.append(tr)\n        }\n        this.element.append(this.table);\n    }\n\n}\n\n//# sourceURL=webpack:///./models/ScoreBoard.js?");

/***/ }),

/***/ "./models/WinWindow.js":
/*!*****************************!*\
  !*** ./models/WinWindow.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WinWindow\": () => (/* binding */ WinWindow)\n/* harmony export */ });\n/* harmony import */ var _models_CreatorElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models/CreatorElements */ \"./models/CreatorElements.js\");\n/* harmony import */ var _models_OptionsModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/OptionsModel */ \"./models/OptionsModel.js\");\n/* harmony import */ var _models_MusicPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models/MusicPlayer */ \"./models/MusicPlayer.js\");\n\n\n\n\n\nclass WinWindow extends _models_CreatorElements__WEBPACK_IMPORTED_MODULE_0__.CreatorElements{\n    constructor(time, count, gameMode) {\n        super(document.body, 'div', `Congratulations!!! You have won!\n        You make it in ${Math.round(time)} seconds  and for ${count} moves`, 'game__win');\n        this.getUserName()\n        this.submit.onclick = () => {\n            const optionsModel = new _models_OptionsModel__WEBPACK_IMPORTED_MODULE_1__.OptionsModel();\n            optionsModel.saveWinner(this.input.value, Math.round(time), count, gameMode);\n            this.element.classList.remove(\"_active\");\n        }\n    }\n    getUserName = () => {\n        const form = document.createElement('form');\n        const label = document.createElement('label');\n        this.input = document.createElement('input');\n        this.submit = document.createElement('button')\n        form.setAttribute(\"action\", \"\")\n        label.setAttribute(\"for\", 'username');\n        label.textContent = \"Enter you name\"\n        this.setAttribute(this.input);\n        this.submit.setAttribute(\"type\", \"submit\");\n        this.submit.textContent = \"Ok\";\n        form.append(label, this.input, this.submit)\n        form.onclick = (e) => e.preventDefault();\n        this.element.append(form);\n    }\n\n    setAttribute = (el) => {\n        const obj = {\n            'name': \"username\",\n            'id': \"username\",\n            'type': \"text\",\n            \"placeholder\": \"Username\"\n        }\n        for(let key in obj){\n            el.setAttribute(key, obj[key]);\n        }\n    }\n}\n\n//# sourceURL=webpack:///./models/WinWindow.js?");

/***/ }),

/***/ "./music/audio.js":
/*!************************!*\
  !*** ./music/audio.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"playList\": () => (/* binding */ playList)\n/* harmony export */ });\n/* harmony import */ var _music1_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./music1.mp3 */ \"./music/music1.mp3\");\n/* harmony import */ var _music2_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./music2.mp3 */ \"./music/music2.mp3\");\n/* harmony import */ var _music3_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music3.mp3 */ \"./music/music3.mp3\");\n/* harmony import */ var _music4_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./music4.mp3 */ \"./music/music4.mp3\");\n\n\n\n\n\n\nconst playList = [\n    {\n        title: 'music',\n        src: _music1_mp3__WEBPACK_IMPORTED_MODULE_0__,\n    },\n    {\n        title: 'music2',\n        src: _music2_mp3__WEBPACK_IMPORTED_MODULE_1__,\n    },\n    {\n        title: 'music3',\n        src: _music3_mp3__WEBPACK_IMPORTED_MODULE_2__,\n    },\n    {\n        title: 'music4',\n        src: _music4_mp3__WEBPACK_IMPORTED_MODULE_3__,\n    },\n]\n\n\n//# sourceURL=webpack:///./music/audio.js?");

/***/ }),

/***/ "./img/background-img.jpg":
/*!********************************!*\
  !*** ./img/background-img.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1835bdcde500ed556ba4.jpg\";\n\n//# sourceURL=webpack:///./img/background-img.jpg?");

/***/ }),

/***/ "./music/animation.mp3":
/*!*****************************!*\
  !*** ./music/animation.mp3 ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0e855863f4496a865655.mp3\";\n\n//# sourceURL=webpack:///./music/animation.mp3?");

/***/ }),

/***/ "./music/menuMusic.mp3":
/*!*****************************!*\
  !*** ./music/menuMusic.mp3 ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fddc73ca13432374b966.mp3\";\n\n//# sourceURL=webpack:///./music/menuMusic.mp3?");

/***/ }),

/***/ "./music/music1.mp3":
/*!**************************!*\
  !*** ./music/music1.mp3 ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a2466b8d28dd36505f1a.mp3\";\n\n//# sourceURL=webpack:///./music/music1.mp3?");

/***/ }),

/***/ "./music/music2.mp3":
/*!**************************!*\
  !*** ./music/music2.mp3 ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a7acf70b16f77139dc13.mp3\";\n\n//# sourceURL=webpack:///./music/music2.mp3?");

/***/ }),

/***/ "./music/music3.mp3":
/*!**************************!*\
  !*** ./music/music3.mp3 ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f3f453803e5158c73517.mp3\";\n\n//# sourceURL=webpack:///./music/music3.mp3?");

/***/ }),

/***/ "./music/music4.mp3":
/*!**************************!*\
  !*** ./music/music4.mp3 ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"253399f002318113ba57.mp3\";\n\n//# sourceURL=webpack:///./music/music4.mp3?");

/***/ }),

/***/ "./music/winSound.mp3":
/*!****************************!*\
  !*** ./music/winSound.mp3 ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6e1f7ceff265ea7fe037.mp3\";\n\n//# sourceURL=webpack:///./music/winSound.mp3?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;