/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".contentWrapper{\n    border: 2px solid black;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.pageHeader {\n    border: 2px solid rgb(241, 15, 15);\n    flex-basis: 100%;\n}\n\n.projectNav {\n    padding-right: 100px;\n}\n\n.newTaskCard > form {\n    display: flex;\n    flex-wrap: wrap;\n}\n[name=\"taskName\"],\n[name=\"taskDescription\"], \n[name=\"taskNotes\"] {\n    width: 100%;\n}\n\n.taskSimpleCard {\n    border-bottom: 1px solid rgba(211,211,211);\n\n}\n\n.taskCardTitle {\n    font-size: large;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.taskCardDescription {\n    font-size: medium;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.taskCardDueDate {\n    font-size: small;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.focusViewWrap {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    background-color: rgba(0,0,0,.5);\n}\n\n.focusViewCard {\n    display: flex;\n    flex-direction: column;\n    height: fit-content;\n    margin: auto;\n    \n}\n\n#projectUl {\n    display: table;\n    list-style-type: none;\n    padding-left: 0;\n}\n\n.projectItem {\n    display: flex;\n    align-items: center;\n}\n\n.projectItemWrap {\n    display: flex;\n    padding: 4px;\n}\n\n.projectItemWrap > button {\n    margin-left: 5px;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,kCAAkC;IAClC,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;AACA;;;IAGI,WAAW;AACf;;AAEA;IACI,0CAA0C;;AAE9C;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;;AAEhB;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":[".contentWrapper{\n    border: 2px solid black;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.pageHeader {\n    border: 2px solid rgb(241, 15, 15);\n    flex-basis: 100%;\n}\n\n.projectNav {\n    padding-right: 100px;\n}\n\n.newTaskCard > form {\n    display: flex;\n    flex-wrap: wrap;\n}\n[name=\"taskName\"],\n[name=\"taskDescription\"], \n[name=\"taskNotes\"] {\n    width: 100%;\n}\n\n.taskSimpleCard {\n    border-bottom: 1px solid rgba(211,211,211);\n\n}\n\n.taskCardTitle {\n    font-size: large;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.taskCardDescription {\n    font-size: medium;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.taskCardDueDate {\n    font-size: small;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.focusViewWrap {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    background-color: rgba(0,0,0,.5);\n}\n\n.focusViewCard {\n    display: flex;\n    flex-direction: column;\n    height: fit-content;\n    margin: auto;\n    \n}\n\n#projectUl {\n    display: table;\n    list-style-type: none;\n    padding-left: 0;\n}\n\n.projectItem {\n    display: flex;\n    align-items: center;\n}\n\n.projectItemWrap {\n    display: flex;\n    padding: 4px;\n}\n\n.projectItemWrap > button {\n    margin-left: 5px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/landing-page.js":
/*!*****************************!*\
  !*** ./src/landing-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialPageLoad": () => (/* binding */ initialPageLoad)
/* harmony export */ });
/* harmony import */ var _tasks_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks-state */ "./src/tasks-state.js");
/* harmony import */ var _projects_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects-render */ "./src/projects-render.js");
/* harmony import */ var _projects_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects-state */ "./src/projects-state.js");




const initialPageLoad = () => {
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('contentWrapper');
    

    const pageHeader = document.createElement('header');
    pageHeader.classList.add('pageHeader');
    pageHeader.innerHTML = 'this is the header';
      
    const taskContentWrapper = document.createElement('div');
    
    const taskListHeader = document.createElement('header');
    taskListHeader.innerHTML = 'active project Name';
    
    const taskListInnerWrap = document.createElement('div');
    taskListInnerWrap.setAttribute('class', 'tasksInnerWrap');

    const newTaskWrapper = document.createElement('div');
    
    const newTaskBtn = document.createElement('button');
    newTaskBtn.innerHTML = ('New Task');

    const newTaskCard = document.createElement('div');
    newTaskCard.classList.add('newTaskCard');
    const newTaskForm = document.createElement('form');
    newTaskForm.setAttribute('id', 'newTaskForm');
    
    const newTaskName = document.createElement('input')
    newTaskName.setAttribute('type', 'text');
    newTaskName.setAttribute('name', 'taskName');
    newTaskName.setAttribute('placeholder', 'e.g., Pay internet bill');
    newTaskName.setAttribute('required', '');

    const newTaskDescription = document.createElement('input')
    newTaskDescription.setAttribute('type', 'text');
    newTaskDescription.setAttribute('name', 'taskDescription');
    newTaskDescription.setAttribute('placeholder', 'description');

    const newTaskNotes = document.createElement('textArea')
    newTaskNotes.setAttribute('type', 'text');
    newTaskNotes.setAttribute('name', 'taskNotes');
    newTaskNotes.setAttribute('placeholder', 'comments');

    const selectProjectInput = document.createElement('select');
    selectProjectInput.setAttribute('id', 'whichProject');
    selectProjectInput.setAttribute('name', 'whichProject');

    const labelProjectInput = document.createElement('label');
    labelProjectInput.setAttribute('for', 'whichProject');
    labelProjectInput.innerHTML = 'Project: '

    const getProjectOptionElements = () => {
        const currentList = _projects_state__WEBPACK_IMPORTED_MODULE_2__.projectList.getList(); //should be array
        return currentList.map(listItem => {
            const currentItem = document.createElement('option');
            currentItem.setAttribute('value', listItem);
            currentItem.innerHTML = listItem;
            return currentItem;
        })
    }

    const priorityInput = document.createElement ('select');
    priorityInput.setAttribute('id', 'priorityInput');

    const labelPriorityInput = document.createElement('label');
    labelPriorityInput.setAttribute('for', 'priorityInput');
    labelPriorityInput.innerHTML = 'Priority'

    const priorityOptions = [
        'none',
        'priority 1',
        'priority 2',
        'priority 3'
    ]

    const priorityOptionElements = priorityOptions.map(itemName => {
        const currentOption = document.createElement('option');
        currentOption.setAttribute('value', itemName);
        currentOption.innerHTML = itemName;
        return currentOption;
    })


    const newTaskDueDate = document.createElement ('input');
    newTaskDueDate.setAttribute('name', 'dueDate')
    newTaskDueDate.setAttribute('type', 'date');

    const newTaskDateLabel = document.createElement('label');
    newTaskDateLabel.setAttribute('for', 'dueDate')
    newTaskDateLabel.innerHTML = 'Due date:'

    const newTaskSubmit = document.createElement('button');
    newTaskSubmit.setAttribute('id','newTaskSubmit');
    newTaskSubmit.setAttribute('type','submit');
    newTaskSubmit.innerHTML = 'save';

    const newTaskCancelBtn = document.createElement('button');
    newTaskCancelBtn.setAttribute('id','newTaskCancel');
    newTaskCancelBtn.setAttribute('type','button');
    newTaskCancelBtn.innerHTML = 'cancel';

    document.body.appendChild(contentWrapper);

    contentWrapper.appendChild(pageHeader);
    (0,_projects_render__WEBPACK_IMPORTED_MODULE_1__.makeProjectList)();
    contentWrapper.appendChild(taskContentWrapper);

    
    taskContentWrapper.appendChild(taskListHeader);
    taskContentWrapper.appendChild(taskListInnerWrap);
    taskContentWrapper.appendChild(newTaskWrapper);

    newTaskWrapper.appendChild(newTaskBtn);
    newTaskWrapper.appendChild(newTaskCard);

    
    newTaskCard.appendChild(newTaskForm)
    newTaskForm.appendChild(newTaskName);
    newTaskForm.appendChild(newTaskDescription);
    newTaskForm.appendChild(newTaskNotes);
    
    newTaskForm.appendChild(labelProjectInput)
    newTaskForm.appendChild(selectProjectInput);
    getProjectOptionElements().forEach(element => {
        selectProjectInput.appendChild(element);
    });


    newTaskForm.appendChild(labelPriorityInput);
    newTaskForm.appendChild(priorityInput);
    console.log(priorityOptionElements);
    priorityOptionElements.forEach(element =>{
        priorityInput.appendChild(element);
    })

    newTaskForm.appendChild(newTaskDateLabel);
    newTaskForm.appendChild(newTaskDueDate);
    newTaskForm.appendChild(newTaskSubmit);
    newTaskForm.appendChild(newTaskCancelBtn); 
}



//ok so we added priority and project into dom form.. now we need to update state.. or we can work on the project list.
//ok project list first, just the ability to add new projects and update the newTask form. 

/***/ }),

/***/ "./src/projects-render.js":
/*!********************************!*\
  !*** ./src/projects-render.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeProjectList": () => (/* binding */ makeProjectList),
/* harmony export */   "renderProjectItems": () => (/* binding */ renderProjectItems)
/* harmony export */ });
/* harmony import */ var _tasks_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks-state */ "./src/tasks-state.js");
/* harmony import */ var _projects_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects-state */ "./src/projects-state.js");



const makeProjectList = () => {
    const projectsWrapper = document.createElement('div');
    projectsWrapper.classList.add('projectNav');
    
    const projectsTitle = document.createElement('p');
    projectsTitle.innerHTML = 'this is the project list';

    //should also be dynamic 
    //need a "newProject button"
    // need to display default project
    const projectDisplayList = document.createElement('ul');
    projectDisplayList.setAttribute('id', 'projectUl')
    const newProjectForm = document.createElement('form');
    newProjectForm.setAttribute('id', 'newProjectForm');

    const newProjectBtn = document.createElement('button');
    newProjectBtn.setAttribute('id', 'newProjectSubmit');
    newProjectBtn.innerHTML = '+';

    const projectInput = document.createElement('input');
    projectInput.setAttribute('placeHolder', 'add a new project');
    projectInput.setAttribute('type', 'text');
    projectInput.setAttribute('id', 'newProjectsInput');
   
    
    const contentWrapper = document.querySelector('.contentWrapper');
    contentWrapper.appendChild(projectsWrapper);

    projectsWrapper.appendChild(projectsTitle);
    projectsWrapper.appendChild(projectDisplayList);
    projectsWrapper.appendChild(newProjectForm);
    
    newProjectForm.appendChild(projectInput);
    newProjectForm.appendChild(newProjectBtn);
}



const renderProjectItems = () => {
    const listContainer = document.querySelector('#projectUl')
    const allCurrentProjects = _projects_state__WEBPACK_IMPORTED_MODULE_1__.projectList.getList();
    //what am i tryna doo? i want a function that takes a project string item, and uses it to create a li element and append it.
    const renderProjectItem = project => {
        const listItem = document.createElement('li');
        listItem.innerHTML = project;
        listItem.setAttribute('class', 'projectItem')
        return listItem;
    }
    const projectRemoveButton = project => {
        const removeBtn = document.createElement('button');
        removeBtn.innerHTML = 'x';
        removeBtn.setAttribute('data-projectName', project);
        return removeBtn;
    }

    allCurrentProjects.forEach(project => {
      if (project === 'Default'){
        const itemWrapper = document.createElement('div')
        itemWrapper.setAttribute('class', 'projectItemWrap');
        itemWrapper.appendChild(renderProjectItem(project));
        listContainer.appendChild(itemWrapper);
        return;
      }
      const itemWrapper = document.createElement('div')
      itemWrapper.setAttribute('class', 'projectItemWrap');
      itemWrapper.appendChild(renderProjectItem(project));
      itemWrapper.appendChild(projectRemoveButton(project));
      listContainer.appendChild(itemWrapper);
    })
}

const deleteProjectItems = () => { 
    const projectUl = document.querySelector('#projectUl');
    projectUl.innerHTML = '';
}




// how should we create and display the project list? we will have to be able to delete them as well and handle those cases. probably similiar to the way we handled tasks. that means the projects will need an id as well..

document.body.addEventListener('submit', e => {
    e.preventDefault();
    if(e.target.closest('form').getAttribute('id') !== 'newProjectForm'){return}
    deleteProjectItems();
    renderProjectItems();
    e.target.closest('form').reset(); 
})

// how should i delete... i think actually, just use regenerate task list? after clearing the dom?
document.body.addEventListener('click', e => {
    if(e.target.getAttribute('data-projectName') == null){return}
    deleteProjectItems();
    renderProjectItems();
})








/***/ }),

/***/ "./src/projects-state.js":
/*!*******************************!*\
  !*** ./src/projects-state.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectList": () => (/* binding */ projectList)
/* harmony export */ });
const projectList = (() =>{
    let list = [
        'Default',
        'calculus',
        'coding',
        'chores'
    ];
    const add = projectName => list = [...list, projectName];
    const remove = projectName => list = list.filter(item => item !== projectName)
    const getList = () => [...list];
    
    return {
        add,
        remove,
        getList
    }
})();

const projectIdHandler = (()=> {

})()

document.body.addEventListener('submit', e => {
    e.preventDefault();
    if(e.target.closest('form').getAttribute('id') !== 'newProjectForm'){return}
    const newProjectInput = document.querySelector('#newProjectsInput');
    if (newProjectInput.value === ''){return};
    if (projectList.getList().includes(newProjectInput.value)){
        alert('that project already exists!')
        return
    }
    projectList.add(newProjectInput.value);
    console.log(projectList.getList());
})

document.body.addEventListener('click', e => {
    if(e.target.getAttribute('data-projectName') == null){return}
    const targetProject = e.target.getAttribute('data-projectName');
    projectList.remove(targetProject)
} )




/***/ }),

/***/ "./src/task-render.js":
/*!****************************!*\
  !*** ./src/task-render.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAllTasksSimpleView": () => (/* binding */ renderAllTasksSimpleView),
/* harmony export */   "newTaskSubmitEventHandler": () => (/* binding */ newTaskSubmitEventHandler),
/* harmony export */   "focusViewEventHandler": () => (/* binding */ focusViewEventHandler),
/* harmony export */   "focusViewCloseEvents": () => (/* binding */ focusViewCloseEvents)
/* harmony export */ });
/* harmony import */ var _tasks_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks-state */ "./src/tasks-state.js");
/* harmony import */ var _projects_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects-state */ "./src/projects-state.js");



//used to update project options in newtask form dynamically
const getProjectOptionElements = () => {
    const currentList = _projects_state__WEBPACK_IMPORTED_MODULE_1__.projectList.getList(); 
    return currentList.map(listItem => {
        const currentItem = document.createElement('option');
        currentItem.setAttribute('value', listItem);
        currentItem.innerHTML = listItem;
        return currentItem;
    })
}

const simpleViewCard = (taskObj) =>{
    const tasksWrapper = document.querySelector('.tasksInnerWrap')

    const card = document.createElement('div');
    card.setAttribute('class', 'taskSimpleCard');
    card.setAttribute('data-id', taskObj.id)

    const markCompleteBtn = document.createElement('button');
    markCompleteBtn.setAttribute('class', 'markCompleteBtn');

    const title = document.createElement('p');
    title.setAttribute('class', 'taskCardTitle');
    title.innerHTML = taskObj.name;

    const description = document.createElement('p');
    description.setAttribute('class', 'taskCardDescription');
    description.innerHTML = taskObj.description;

    const dueDate = document.createElement('p');
    dueDate.setAttribute('class', 'taskCardDueDate');
    dueDate.innerHTML = taskObj.dueDate;

    tasksWrapper.appendChild(card);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(dueDate);
}


const renderAllTasksSimpleView = () => {
    const taskObjs = _tasks_state__WEBPACK_IMPORTED_MODULE_0__.tasksList.getCurrentArr();
    taskObjs.forEach(element => simpleViewCard(element));
}

//clears the div containing tasklist and set them up again 
const regenerateTaskList = () => {
    const taskListDisplay = document.querySelector("div[class='tasksInnerWrap']");
    taskListDisplay.innerHTML = "";
    renderAllTasksSimpleView();
    console.log(_tasks_state__WEBPACK_IMPORTED_MODULE_0__.tasksList.getCurrentArr());
}

const newTaskSubmitEventHandler = () => {
    const saveBtn = document.querySelector("button[id='newTaskSubmit']");
    saveBtn.addEventListener('click', () => {regenerateTaskList()});
}

const taskFocusedViewCard = (taskId) => {
    const [taskObj] = _tasks_state__WEBPACK_IMPORTED_MODULE_0__.tasksList.getTaskById(taskId);

    const focusViewWrap = document.createElement('div');
    focusViewWrap.setAttribute('class', 'focusViewWrap');

    const focusViewCard = document.createElement('div');
    focusViewCard.setAttribute('class', 'focusViewCard');
    focusViewCard.setAttribute('data-idfocus', taskId)
    
    const closeBtn = document.createElement('button');
    closeBtn.setAttribute('class', 'focusViewCloseBtn')
    closeBtn.innerHTML = ('x');

    const focusViewForm = document.createElement('form');
    focusViewForm.setAttribute('id', 'focusViewForm');
    
    const name = document.createElement('input');
    name.setAttribute('type', 'text');
    name.setAttribute('name', 'focusTaskName');
    name.setAttribute('placeholder', 'e.g., Pay internet bill');
    name.setAttribute('required', '');
    name.setAttribute('value', taskObj.name)

    const description = document.createElement('input');
    description.setAttribute('type', 'text');
    description.setAttribute('name', 'focusTaskDescription');
    description.setAttribute('placeholder', 'description');
    description.setAttribute('value', taskObj.description)
    

    const notes = document.createElement('textArea');
    notes.setAttribute('type', 'text');
    notes.setAttribute('name', 'focusTaskNotes');
    notes.setAttribute('placeholder', 'comments');
    notes.setAttribute('value', taskObj.notes);

    //cretae project and priority list. can i import it from project render?
    const projectSelect = document.createElement('select')
    projectSelect.setAttribute('id', 'editProjectInput')

    const optionElements = getProjectOptionElements();

    const projectInputLabel = document.createElement('label');
    projectInputLabel.setAttribute('for', 'editProjectInput');

    const priorityInput = document.createElement('select');
    priorityInput.setAttribute('id', 'editpriorityInput');

    const priorityOptions = [
        'none',
        'priority 1',
        'priority 2',
        'priority 3'
    ]

    const priorityOptionElements = priorityOptions.map(itemName => {
        const currentOption = document.createElement('option');
        currentOption.setAttribute('value', itemName);
        currentOption.innerHTML = itemName;
        return currentOption;
    })

    const dueDate = document.createElement ('input');
    dueDate.setAttribute('name', 'focusDueDate')
    dueDate.setAttribute('type', 'date');
    dueDate.setAttribute('value', taskObj.dueDate);

    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'focusDueDate')
    dateLabel.innerHTML = 'Due date:'

    const deleteTask = document.createElement('button');
    deleteTask.setAttribute('id','focusViewDelete');
    deleteTask.setAttribute('type','button');
    deleteTask.innerHTML = 'delete';

    const submit = document.createElement('button');
    submit.setAttribute('id','focusViewSubmit');
    submit.setAttribute('type','submit');
    submit.innerHTML = 'save';
    
    document.body.appendChild(focusViewWrap);

    focusViewWrap.appendChild(focusViewCard);

    focusViewCard.appendChild(closeBtn);
    focusViewCard.appendChild(name);
    focusViewCard.appendChild(description);
    focusViewCard.appendChild(notes);
    focusViewCard.appendChild(projectInputLabel);
    focusViewCard.appendChild(projectSelect);
    optionElements.forEach(element => {
        element.setAttribute('class', 'editOptionElement');
        projectSelect.appendChild(element)
    })
    focusViewCard.appendChild(priorityInput);
    priorityOptionElements.forEach(element => {
        priorityInput.appendChild(element);
    })

    focusViewCard.appendChild(dueDate);
    focusViewCard.appendChild(dateLabel);
    focusViewCard.appendChild(deleteTask);
    focusViewCard.appendChild(submit);
}

const focusViewEventHandler = () => {
    const container = document.querySelector('.tasksInnerWrap');
    container.addEventListener('click', e => {
        const clickedTask = e.target.closest('[data-id]');
        const dataIdValue = clickedTask.getAttribute('data-id');
        taskFocusedViewCard(dataIdValue);
    })
}

//what do i need now? i need functions to handle the events for focus view. this will mean deleting, editing, and closing the focused view. lets start with closing. 
//close 
const focusViewCloseEvents = () => {
    document.body.addEventListener('click', e => {
        if (e.target.getAttribute('class')!== 'focusViewCloseBtn'){return}
        document.body.removeChild(e.target.closest('.focusViewWrap'));
    })

    //if they click outside the form, closes the card. b.c the wrapper spans whole page.
    document.body.addEventListener('click', e => {
        if (e.target.getAttribute('class') !== 'focusViewWrap'){return}
        document.body.removeChild(document.querySelector('.focusViewWrap'));
    })
}


//deletes the task from simpleView in dom
const focusViewDelete = (ev) => {
    const dataIdElement = ev.target.closest('[data-idfocus]');
    const dataId = dataIdElement.getAttribute('data-idfocus');
    const parentNode = document.querySelector('.tasksInnerWrap')
    //needs to delete from dom, can remove child based on taskid
    //how else? can empty dom and reload taskList
    const targetTask = document.querySelector
    (`[data-id="${dataId}"]`);
    parentNode.removeChild(targetTask);
}



document.body.addEventListener('click', ev => {
    if (ev.target.getAttribute('id') !== 'focusViewDelete'){return}
    focusViewDelete(ev);
    document.body.removeChild(document.querySelector('.focusViewWrap'))
})

document.body.addEventListener('click', ev => {
    if(ev.target.getAttribute('id')!=='focusViewSubmit'){return}
    regenerateTaskList();
    document.body.removeChild(document.querySelector('.focusViewWrap'))
})

const deleteProjectInputs = () => document.querySelector('#whichProject').innerHTML = '';

const loadProjectInputs = () => {
    const selectProjectInput = document.querySelector('#whichProject')
    getProjectOptionElements().forEach(element => {
        selectProjectInput.appendChild(element);
    });
}

//to update the project list on addition in new task form
document.body.addEventListener('submit', ev => {
    if(ev.target.closest('form').getAttribute('id') !== 'newProjectForm'){return}
    deleteProjectInputs();
    loadProjectInputs();  
} )

//to update project list on delete in new task form
document.body.addEventListener('click', ev => {
    if(ev.target.getAttribute('data-projectname') == null){return}
    deleteProjectInputs();
    loadProjectInputs();    
} )





/***/ }),

/***/ "./src/tasks-state.js":
/*!****************************!*\
  !*** ./src/tasks-state.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tasksList": () => (/* binding */ tasksList),
/* harmony export */   "taskEventFuncs": () => (/* binding */ taskEventFuncs),
/* harmony export */   "taskIdController": () => (/* binding */ taskIdController),
/* harmony export */   "getNewTaskFormValues": () => (/* binding */ getNewTaskFormValues),
/* harmony export */   "newTaskEventAdder": () => (/* binding */ newTaskEventAdder)
/* harmony export */ });
const tasksList = (() => {
    let tasksArr = [];
    const create = (name, description, note, project, priority, dueDate) => {
        return {
            name,
            description,
            note,
            project,
            priority,
            dueDate
        };
    };

    const add = taskObj => tasksArr = [...tasksArr, taskObj];

    const remove = taskId => {
        tasksArr = tasksArr.filter(taskObj => taskObj.id !== taskId);
    }
    const getCurrentArr = () => [...tasksArr];

    const getTaskById = id => tasksArr.filter(taskObj => id === taskObj.id);

    const sortList = () => {
        tasksArr.sort ((a,b) => {
            if (a.id < b.id) {return -1}
        })
    }
    
    return {
        create,
        add,
        remove,
        getCurrentArr,
        getTaskById,
        sortList
    };
})();

//whats the problem. how can we delete tasks without an id system? we could go by name but what if they make duplicates. remove ability to make duplicates? lets first consider this. what features do we want? when the user clicks a project it should simply show all the tasks associated with it. the user should also be able to delete projects. and edit the projects name. in which case each project label should come with 2 buttons, edit and delete. i think i will make it so that duplicate project names cannot be added. and then target projects in state and dom with the project names
const taskIdController = (() => {
    let list = [];
    const createID = () => {
        //if list is empty,highestID start at -1, so newID begins at 0
        const highestIdPlusOne = ((list.length === 0 ? -1 : list[list.length-1]) + 1).toString();
        list.push(highestIdPlusOne)
        return (highestIdPlusOne);
    };
    const assignID = obj => obj.id = createID();
    

    const removeID = (taskID) => {
        list = list.filter(eachID => eachID !== taskID);
    }
    const getList = () => {console.log(list)}
    return {
        assignID,
        removeID,
        getList
    };
})()

const taskEventFuncs = (() => {
    const createTask = () => {
        const task = getNewTaskFormValues();
        const taskObj = tasksList.create(task.name, task.description, task.notes, task.project, task.priority, task.dueDate);
        taskIdController.assignID(taskObj);
        tasksList.add(taskObj);
    };

    const deleteTask = (taskId) => {
        taskIdController.removeID(taskId);
        tasksList.remove(taskId);
    }
   
    //to delete taskObj, create new one, and keep same id val
    //one thing i wonder though, is will this implementation show keep the tasks in order for the dom? lets consider. new tasks will look at the idList, and get an id thats 1+ the highest. edit task doesn't touch the idList. deleteTask, will delete the id of corresponding task. 
    const editTask = taskId => {
        const [targetTask] = tasksList.getTaskById(taskId);
        //ok so we have the target task stored, so now we need to form input values
        // what are we trying to do? we want to create a new task obj to replace the old one.. what does this mean..? we have to target the oldTask and delete it by id. then we create a newTask and append it to the task list. followed by sorting the taskList
        targetTask.name = document.querySelector("input[name='focusTaskName']").value;

        targetTask.description = document.querySelector("input[name='focusTaskDescription']").value;

        targetTask.notes = document.querySelector("textarea[name='focusTaskNotes']").value;

        targetTask.dueDate = document.querySelector("input[name='focusDueDate']").value;

        targetTask.id = taskId;

        const updatedTaskObj = tasksList.create(
            targetTask.name,
            targetTask.description,
            targetTask.notes,
            'default',
            'default',
            targetTask.dueDate,
        )
        //we don't need reference to oldTask anymore and we don't want duplicate tasks
        tasksList.remove(taskId);

        //the new obj should have same id as old
        updatedTaskObj.id = taskId;
        tasksList.add(updatedTaskObj)

        //the order of taskLists needs to be maintained for dom
        tasksList.sortList();
       
        console.log (tasksList.getCurrentArr())
        
    }
    return {
        createTask,
        deleteTask,
        editTask
    };
})();
// const projectsList = (() => {
//     const arrList = [];
//     const getProjectList = () => {console.log('reduce taskList to get projectNames w/o duplicates and push into arrList')};
//     const getArrList = () => { console.log(arrList);}
// })();


//dom method -  getTaskID =  return element.queryselect.getattribute(data-id: x)

const getNewTaskFormValues = () => {
    return  {
        name: document.querySelector("input[name='taskName']").value,
        description: document.querySelector("input[name='taskDescription']").value,
        notes: document.querySelector("textArea[name='taskNotes']").value,
        project: document.querySelector("#whichProject").value,
        priority: document.querySelector("#priorityInput").value,
        dueDate: document.querySelector("input[name='dueDate']").value
    }
}

const newTaskEventAdder = () => {
    const saveBtn = document.querySelector("button[id='newTaskSubmit']");
    saveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(document.querySelector("input[name='taskName']").value === ''){return};
        taskEventFuncs.createTask();
        document.querySelector("form[id='newTaskForm']").reset();
    });
    console.log(tasksList.getCurrentArr());
}


//to remove task and id from lists
document.body.addEventListener('click', e => {
    if(e.target.getAttribute('id') !== 'focusViewDelete'){return}
    const targetTask = e.target.closest('[data-idfocus]');
    const targetId = targetTask.getAttribute('data-idfocus');
    taskEventFuncs.deleteTask(targetId);
})


document.body.addEventListener('click', e => {
    if (e.target.getAttribute('id')!=='focusViewSubmit'){return};
    const targetTask = e.target.closest('[data-idfocus]');
    const targetId = targetTask.getAttribute('data-idfocus');
    taskEventFuncs.editTask(targetId);
})




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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tasks_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks-state */ "./src/tasks-state.js");
/* harmony import */ var _projects_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects-state */ "./src/projects-state.js");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-page */ "./src/landing-page.js");
/* harmony import */ var _task_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-render */ "./src/task-render.js");
/* harmony import */ var _projects_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects-render */ "./src/projects-render.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");








(0,_landing_page__WEBPACK_IMPORTED_MODULE_2__.initialPageLoad)();
(0,_tasks_state__WEBPACK_IMPORTED_MODULE_0__.newTaskEventAdder)();
(0,_task_render__WEBPACK_IMPORTED_MODULE_3__.newTaskSubmitEventHandler)();
(0,_task_render__WEBPACK_IMPORTED_MODULE_3__.focusViewEventHandler)();
(0,_task_render__WEBPACK_IMPORTED_MODULE_3__.focusViewCloseEvents)();
(0,_task_render__WEBPACK_IMPORTED_MODULE_3__.renderAllTasksSimpleView)();
_tasks_state__WEBPACK_IMPORTED_MODULE_0__.tasksList.getCurrentArr();
(0,_projects_render__WEBPACK_IMPORTED_MODULE_4__.renderProjectItems)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLENBQUM7Ozs7Ozs7OztVQ25LRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMcUI7QUFDMEI7QUFDQTtBQUNpRjtBQUN4RDtBQUNsRDs7O0FBR3RCLDhEQUFlO0FBQ2YsK0RBQWlCO0FBQ2pCLHVFQUF5QjtBQUN6QixtRUFBcUI7QUFDckIsa0VBQW9CO0FBQ3BCLHNFQUF3QjtBQUN4QixpRUFBdUI7QUFDdkIsb0VBQWtCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9sYW5kaW5nLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy1yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy1zdGF0ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2stcmVuZGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFza3Mtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jb250ZW50V3JhcHBlcntcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnBhZ2VIZWFkZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjQxLCAxNSwgMTUpO1xcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdE5hdiB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4ubmV3VGFza0NhcmQgPiBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5bbmFtZT1cXFwidGFza05hbWVcXFwiXSxcXG5bbmFtZT1cXFwidGFza0Rlc2NyaXB0aW9uXFxcIl0sIFxcbltuYW1lPVxcXCJ0YXNrTm90ZXNcXFwiXSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFza1NpbXBsZUNhcmQge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTEsMjExLDIxMSk7XFxuXFxufVxcblxcbi50YXNrQ2FyZFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi50YXNrQ2FyZERlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4udGFza0NhcmREdWVEYXRlIHtcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5mb2N1c1ZpZXdXcmFwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xcbn1cXG5cXG4uZm9jdXNWaWV3Q2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgXFxufVxcblxcbiNwcm9qZWN0VWwge1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxufVxcblxcbi5wcm9qZWN0SXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0SXRlbVdyYXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbi5wcm9qZWN0SXRlbVdyYXAgPiBidXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjtBQUNBOzs7SUFHSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwwQ0FBMEM7O0FBRTlDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGVudFdyYXBwZXJ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5wYWdlSGVhZGVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI0MSwgMTUsIDE1KTtcXG4gICAgZmxleC1iYXNpczogMTAwJTtcXG59XFxuXFxuLnByb2plY3ROYXYge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcXG59XFxuXFxuLm5ld1Rhc2tDYXJkID4gZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuW25hbWU9XFxcInRhc2tOYW1lXFxcIl0sXFxuW25hbWU9XFxcInRhc2tEZXNjcmlwdGlvblxcXCJdLCBcXG5bbmFtZT1cXFwidGFza05vdGVzXFxcIl0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2tTaW1wbGVDYXJkIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjExLDIxMSwyMTEpO1xcblxcbn1cXG5cXG4udGFza0NhcmRUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4udGFza0NhcmREZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnRhc2tDYXJkRHVlRGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uZm9jdXNWaWV3V3JhcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC41KTtcXG59XFxuXFxuLmZvY3VzVmlld0NhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIFxcbn1cXG5cXG4jcHJvamVjdFVsIHtcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW1XcmFwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG4ucHJvamVjdEl0ZW1XcmFwID4gYnV0dG9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHRhc2tJZENvbnRyb2xsZXJ9IGZyb20gXCIuL3Rhc2tzLXN0YXRlXCI7XG5pbXBvcnQgeyBtYWtlUHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0cy1yZW5kZXJcIjtcbmltcG9ydCB7IHByb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdHMtc3RhdGVcIjtcblxuY29uc3QgaW5pdGlhbFBhZ2VMb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudFdyYXBwZXInKTtcbiAgICBcblxuICAgIGNvbnN0IHBhZ2VIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBwYWdlSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3BhZ2VIZWFkZXInKTtcbiAgICBwYWdlSGVhZGVyLmlubmVySFRNTCA9ICd0aGlzIGlzIHRoZSBoZWFkZXInO1xuICAgICAgXG4gICAgY29uc3QgdGFza0NvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgY29uc3QgdGFza0xpc3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICB0YXNrTGlzdEhlYWRlci5pbm5lckhUTUwgPSAnYWN0aXZlIHByb2plY3QgTmFtZSc7XG4gICAgXG4gICAgY29uc3QgdGFza0xpc3RJbm5lcldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrTGlzdElubmVyV3JhcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2tzSW5uZXJXcmFwJyk7XG5cbiAgICBjb25zdCBuZXdUYXNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIGNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdUYXNrQnRuLmlubmVySFRNTCA9ICgnTmV3IFRhc2snKTtcblxuICAgIGNvbnN0IG5ld1Rhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3VGFza0NhcmQuY2xhc3NMaXN0LmFkZCgnbmV3VGFza0NhcmQnKTtcbiAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBuZXdUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Rhc2tGb3JtJyk7XG4gICAgXG4gICAgY29uc3QgbmV3VGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgbmV3VGFza05hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBuZXdUYXNrTmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFza05hbWUnKTtcbiAgICBuZXdUYXNrTmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2UuZy4sIFBheSBpbnRlcm5ldCBiaWxsJyk7XG4gICAgbmV3VGFza05hbWUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcblxuICAgIGNvbnN0IG5ld1Rhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBuZXdUYXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBuZXdUYXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2tEZXNjcmlwdGlvbicpO1xuICAgIG5ld1Rhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2Rlc2NyaXB0aW9uJyk7XG5cbiAgICBjb25zdCBuZXdUYXNrTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0QXJlYScpXG4gICAgbmV3VGFza05vdGVzLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgbmV3VGFza05vdGVzLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrTm90ZXMnKTtcbiAgICBuZXdUYXNrTm90ZXMuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdjb21tZW50cycpO1xuXG4gICAgY29uc3Qgc2VsZWN0UHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgc2VsZWN0UHJvamVjdElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnd2hpY2hQcm9qZWN0Jyk7XG4gICAgc2VsZWN0UHJvamVjdElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd3aGljaFByb2plY3QnKTtcblxuICAgIGNvbnN0IGxhYmVsUHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbFByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd3aGljaFByb2plY3QnKTtcbiAgICBsYWJlbFByb2plY3RJbnB1dC5pbm5lckhUTUwgPSAnUHJvamVjdDogJ1xuXG4gICAgY29uc3QgZ2V0UHJvamVjdE9wdGlvbkVsZW1lbnRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50TGlzdCA9IHByb2plY3RMaXN0LmdldExpc3QoKTsgLy9zaG91bGQgYmUgYXJyYXlcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRMaXN0Lm1hcChsaXN0SXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgY3VycmVudEl0ZW0uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGxpc3RJdGVtKTtcbiAgICAgICAgICAgIGN1cnJlbnRJdGVtLmlubmVySFRNTCA9IGxpc3RJdGVtO1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRJdGVtO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5SW5wdXQnKTtcblxuICAgIGNvbnN0IGxhYmVsUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWxQcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5SW5wdXQnKTtcbiAgICBsYWJlbFByaW9yaXR5SW5wdXQuaW5uZXJIVE1MID0gJ1ByaW9yaXR5J1xuXG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb25zID0gW1xuICAgICAgICAnbm9uZScsXG4gICAgICAgICdwcmlvcml0eSAxJyxcbiAgICAgICAgJ3ByaW9yaXR5IDInLFxuICAgICAgICAncHJpb3JpdHkgMydcbiAgICBdXG5cbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbkVsZW1lbnRzID0gcHJpb3JpdHlPcHRpb25zLm1hcChpdGVtTmFtZSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgY3VycmVudE9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgaXRlbU5hbWUpO1xuICAgICAgICBjdXJyZW50T3B0aW9uLmlubmVySFRNTCA9IGl0ZW1OYW1lO1xuICAgICAgICByZXR1cm4gY3VycmVudE9wdGlvbjtcbiAgICB9KVxuXG5cbiAgICBjb25zdCBuZXdUYXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKCdpbnB1dCcpO1xuICAgIG5ld1Rhc2tEdWVEYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkdWVEYXRlJylcbiAgICBuZXdUYXNrRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuXG4gICAgY29uc3QgbmV3VGFza0RhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbmV3VGFza0RhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWVEYXRlJylcbiAgICBuZXdUYXNrRGF0ZUxhYmVsLmlubmVySFRNTCA9ICdEdWUgZGF0ZTonXG5cbiAgICBjb25zdCBuZXdUYXNrU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3VGFza1N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywnbmV3VGFza1N1Ym1pdCcpO1xuICAgIG5ld1Rhc2tTdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0Jyk7XG4gICAgbmV3VGFza1N1Ym1pdC5pbm5lckhUTUwgPSAnc2F2ZSc7XG5cbiAgICBjb25zdCBuZXdUYXNrQ2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3VGFza0NhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnbmV3VGFza0NhbmNlbCcpO1xuICAgIG5ld1Rhc2tDYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG4gICAgbmV3VGFza0NhbmNlbEJ0bi5pbm5lckhUTUwgPSAnY2FuY2VsJztcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudFdyYXBwZXIpO1xuXG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQocGFnZUhlYWRlcik7XG4gICAgbWFrZVByb2plY3RMaXN0KCk7XG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRlbnRXcmFwcGVyKTtcblxuICAgIFxuICAgIHRhc2tDb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrTGlzdEhlYWRlcik7XG4gICAgdGFza0NvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tMaXN0SW5uZXJXcmFwKTtcbiAgICB0YXNrQ29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQobmV3VGFza1dyYXBwZXIpO1xuXG4gICAgbmV3VGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQobmV3VGFza0J0bik7XG4gICAgbmV3VGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQobmV3VGFza0NhcmQpO1xuXG4gICAgXG4gICAgbmV3VGFza0NhcmQuYXBwZW5kQ2hpbGQobmV3VGFza0Zvcm0pXG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQobmV3VGFza05hbWUpO1xuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKG5ld1Rhc2tEZXNjcmlwdGlvbik7XG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQobmV3VGFza05vdGVzKTtcbiAgICBcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChsYWJlbFByb2plY3RJbnB1dClcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChzZWxlY3RQcm9qZWN0SW5wdXQpO1xuICAgIGdldFByb2plY3RPcHRpb25FbGVtZW50cygpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIHNlbGVjdFByb2plY3RJbnB1dC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcblxuXG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQobGFiZWxQcmlvcml0eUlucHV0KTtcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgICBjb25zb2xlLmxvZyhwcmlvcml0eU9wdGlvbkVsZW1lbnRzKTtcbiAgICBwcmlvcml0eU9wdGlvbkVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PntcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KVxuXG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQobmV3VGFza0RhdGVMYWJlbCk7XG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQobmV3VGFza0R1ZURhdGUpO1xuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKG5ld1Rhc2tTdWJtaXQpO1xuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKG5ld1Rhc2tDYW5jZWxCdG4pOyBcbn1cblxuZXhwb3J0IHtpbml0aWFsUGFnZUxvYWR9XG5cbi8vb2sgc28gd2UgYWRkZWQgcHJpb3JpdHkgYW5kIHByb2plY3QgaW50byBkb20gZm9ybS4uIG5vdyB3ZSBuZWVkIHRvIHVwZGF0ZSBzdGF0ZS4uIG9yIHdlIGNhbiB3b3JrIG9uIHRoZSBwcm9qZWN0IGxpc3QuXG4vL29rIHByb2plY3QgbGlzdCBmaXJzdCwganVzdCB0aGUgYWJpbGl0eSB0byBhZGQgbmV3IHByb2plY3RzIGFuZCB1cGRhdGUgdGhlIG5ld1Rhc2sgZm9ybS4gIiwiaW1wb3J0IHsgdGFza3NMaXN0IH0gZnJvbSBcIi4vdGFza3Mtc3RhdGVcIjtcbmltcG9ydCB7IHByb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdHMtc3RhdGVcIjtcblxuY29uc3QgbWFrZVByb2plY3RMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TmF2Jyk7XG4gICAgXG4gICAgY29uc3QgcHJvamVjdHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0c1RpdGxlLmlubmVySFRNTCA9ICd0aGlzIGlzIHRoZSBwcm9qZWN0IGxpc3QnO1xuXG4gICAgLy9zaG91bGQgYWxzbyBiZSBkeW5hbWljIFxuICAgIC8vbmVlZCBhIFwibmV3UHJvamVjdCBidXR0b25cIlxuICAgIC8vIG5lZWQgdG8gZGlzcGxheSBkZWZhdWx0IHByb2plY3RcbiAgICBjb25zdCBwcm9qZWN0RGlzcGxheUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHByb2plY3REaXNwbGF5TGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RVbCcpXG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgbmV3UHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICduZXdQcm9qZWN0Rm9ybScpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1Byb2plY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICduZXdQcm9qZWN0U3VibWl0Jyk7XG4gICAgbmV3UHJvamVjdEJ0bi5pbm5lckhUTUwgPSAnKyc7XG5cbiAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlSG9sZGVyJywgJ2FkZCBhIG5ldyBwcm9qZWN0Jyk7XG4gICAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3UHJvamVjdHNJbnB1dCcpO1xuICAgXG4gICAgXG4gICAgY29uc3QgY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudFdyYXBwZXInKTtcbiAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0c1dyYXBwZXIpO1xuXG4gICAgcHJvamVjdHNXcmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RzVGl0bGUpO1xuICAgIHByb2plY3RzV3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0RGlzcGxheUxpc3QpO1xuICAgIHByb2plY3RzV3JhcHBlci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybSk7XG4gICAgXG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdElucHV0KTtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnRuKTtcbn1cblxuXG5cbmNvbnN0IHJlbmRlclByb2plY3RJdGVtcyA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RVbCcpXG4gICAgY29uc3QgYWxsQ3VycmVudFByb2plY3RzID0gcHJvamVjdExpc3QuZ2V0TGlzdCgpO1xuICAgIC8vd2hhdCBhbSBpIHRyeW5hIGRvbz8gaSB3YW50IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHByb2plY3Qgc3RyaW5nIGl0ZW0sIGFuZCB1c2VzIGl0IHRvIGNyZWF0ZSBhIGxpIGVsZW1lbnQgYW5kIGFwcGVuZCBpdC5cbiAgICBjb25zdCByZW5kZXJQcm9qZWN0SXRlbSA9IHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpc3RJdGVtLmlubmVySFRNTCA9IHByb2plY3Q7XG4gICAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdEl0ZW0nKVxuICAgICAgICByZXR1cm4gbGlzdEl0ZW07XG4gICAgfVxuICAgIGNvbnN0IHByb2plY3RSZW1vdmVCdXR0b24gPSBwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHJlbW92ZUJ0bi5pbm5lckhUTUwgPSAneCc7XG4gICAgICAgIHJlbW92ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdE5hbWUnLCBwcm9qZWN0KTtcbiAgICAgICAgcmV0dXJuIHJlbW92ZUJ0bjtcbiAgICB9XG5cbiAgICBhbGxDdXJyZW50UHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIGlmIChwcm9qZWN0ID09PSAnRGVmYXVsdCcpe1xuICAgICAgICBjb25zdCBpdGVtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGl0ZW1XcmFwcGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdEl0ZW1XcmFwJyk7XG4gICAgICAgIGl0ZW1XcmFwcGVyLmFwcGVuZENoaWxkKHJlbmRlclByb2plY3RJdGVtKHByb2plY3QpKTtcbiAgICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtV3JhcHBlcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGl0ZW1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGl0ZW1XcmFwcGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdEl0ZW1XcmFwJyk7XG4gICAgICBpdGVtV3JhcHBlci5hcHBlbmRDaGlsZChyZW5kZXJQcm9qZWN0SXRlbShwcm9qZWN0KSk7XG4gICAgICBpdGVtV3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0UmVtb3ZlQnV0dG9uKHByb2plY3QpKTtcbiAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVdyYXBwZXIpO1xuICAgIH0pXG59XG5cbmNvbnN0IGRlbGV0ZVByb2plY3RJdGVtcyA9ICgpID0+IHsgXG4gICAgY29uc3QgcHJvamVjdFVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RVbCcpO1xuICAgIHByb2plY3RVbC5pbm5lckhUTUwgPSAnJztcbn1cblxuXG5cblxuLy8gaG93IHNob3VsZCB3ZSBjcmVhdGUgYW5kIGRpc3BsYXkgdGhlIHByb2plY3QgbGlzdD8gd2Ugd2lsbCBoYXZlIHRvIGJlIGFibGUgdG8gZGVsZXRlIHRoZW0gYXMgd2VsbCBhbmQgaGFuZGxlIHRob3NlIGNhc2VzLiBwcm9iYWJseSBzaW1pbGlhciB0byB0aGUgd2F5IHdlIGhhbmRsZWQgdGFza3MuIHRoYXQgbWVhbnMgdGhlIHByb2plY3RzIHdpbGwgbmVlZCBhbiBpZCBhcyB3ZWxsLi5cblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYoZS50YXJnZXQuY2xvc2VzdCgnZm9ybScpLmdldEF0dHJpYnV0ZSgnaWQnKSAhPT0gJ25ld1Byb2plY3RGb3JtJyl7cmV0dXJufVxuICAgIGRlbGV0ZVByb2plY3RJdGVtcygpO1xuICAgIHJlbmRlclByb2plY3RJdGVtcygpO1xuICAgIGUudGFyZ2V0LmNsb3Nlc3QoJ2Zvcm0nKS5yZXNldCgpOyBcbn0pXG5cbi8vIGhvdyBzaG91bGQgaSBkZWxldGUuLi4gaSB0aGluayBhY3R1YWxseSwganVzdCB1c2UgcmVnZW5lcmF0ZSB0YXNrIGxpc3Q/IGFmdGVyIGNsZWFyaW5nIHRoZSBkb20/XG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgaWYoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3ROYW1lJykgPT0gbnVsbCl7cmV0dXJufVxuICAgIGRlbGV0ZVByb2plY3RJdGVtcygpO1xuICAgIHJlbmRlclByb2plY3RJdGVtcygpO1xufSlcblxuXG5cblxuXG5cbmV4cG9ydHttYWtlUHJvamVjdExpc3QsIHJlbmRlclByb2plY3RJdGVtc30iLCJjb25zdCBwcm9qZWN0TGlzdCA9ICgoKSA9PntcbiAgICBsZXQgbGlzdCA9IFtcbiAgICAgICAgJ0RlZmF1bHQnLFxuICAgICAgICAnY2FsY3VsdXMnLFxuICAgICAgICAnY29kaW5nJyxcbiAgICAgICAgJ2Nob3JlcydcbiAgICBdO1xuICAgIGNvbnN0IGFkZCA9IHByb2plY3ROYW1lID0+IGxpc3QgPSBbLi4ubGlzdCwgcHJvamVjdE5hbWVdO1xuICAgIGNvbnN0IHJlbW92ZSA9IHByb2plY3ROYW1lID0+IGxpc3QgPSBsaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHByb2plY3ROYW1lKVxuICAgIGNvbnN0IGdldExpc3QgPSAoKSA9PiBbLi4ubGlzdF07XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkLFxuICAgICAgICByZW1vdmUsXG4gICAgICAgIGdldExpc3RcbiAgICB9XG59KSgpO1xuXG5jb25zdCBwcm9qZWN0SWRIYW5kbGVyID0gKCgpPT4ge1xuXG59KSgpXG5cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKGUudGFyZ2V0LmNsb3Nlc3QoJ2Zvcm0nKS5nZXRBdHRyaWJ1dGUoJ2lkJykgIT09ICduZXdQcm9qZWN0Rm9ybScpe3JldHVybn1cbiAgICBjb25zdCBuZXdQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3UHJvamVjdHNJbnB1dCcpO1xuICAgIGlmIChuZXdQcm9qZWN0SW5wdXQudmFsdWUgPT09ICcnKXtyZXR1cm59O1xuICAgIGlmIChwcm9qZWN0TGlzdC5nZXRMaXN0KCkuaW5jbHVkZXMobmV3UHJvamVjdElucHV0LnZhbHVlKSl7XG4gICAgICAgIGFsZXJ0KCd0aGF0IHByb2plY3QgYWxyZWFkeSBleGlzdHMhJylcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHByb2plY3RMaXN0LmFkZChuZXdQcm9qZWN0SW5wdXQudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0LmdldExpc3QoKSk7XG59KVxuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgaWYoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3ROYW1lJykgPT0gbnVsbCl7cmV0dXJufVxuICAgIGNvbnN0IHRhcmdldFByb2plY3QgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdE5hbWUnKTtcbiAgICBwcm9qZWN0TGlzdC5yZW1vdmUodGFyZ2V0UHJvamVjdClcbn0gKVxuXG5cbmV4cG9ydCB7cHJvamVjdExpc3R9OyIsImltcG9ydCB7IHRhc2tzTGlzdCB9IGZyb20gXCIuL3Rhc2tzLXN0YXRlXCI7XG5pbXBvcnQgeyBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3Byb2plY3RzLXN0YXRlXCI7XG5cbi8vdXNlZCB0byB1cGRhdGUgcHJvamVjdCBvcHRpb25zIGluIG5ld3Rhc2sgZm9ybSBkeW5hbWljYWxseVxuY29uc3QgZ2V0UHJvamVjdE9wdGlvbkVsZW1lbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gcHJvamVjdExpc3QuZ2V0TGlzdCgpOyBcbiAgICByZXR1cm4gY3VycmVudExpc3QubWFwKGxpc3RJdGVtID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgY3VycmVudEl0ZW0uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGxpc3RJdGVtKTtcbiAgICAgICAgY3VycmVudEl0ZW0uaW5uZXJIVE1MID0gbGlzdEl0ZW07XG4gICAgICAgIHJldHVybiBjdXJyZW50SXRlbTtcbiAgICB9KVxufVxuXG5jb25zdCBzaW1wbGVWaWV3Q2FyZCA9ICh0YXNrT2JqKSA9PntcbiAgICBjb25zdCB0YXNrc1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3NJbm5lcldyYXAnKVxuXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrU2ltcGxlQ2FyZCcpO1xuICAgIGNhcmQuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgdGFza09iai5pZClcblxuICAgIGNvbnN0IG1hcmtDb21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1hcmtDb21wbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21hcmtDb21wbGV0ZUJ0bicpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrQ2FyZFRpdGxlJyk7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gdGFza09iai5uYW1lO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrQ2FyZERlc2NyaXB0aW9uJyk7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gdGFza09iai5kZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2tDYXJkRHVlRGF0ZScpO1xuICAgIGR1ZURhdGUuaW5uZXJIVE1MID0gdGFza09iai5kdWVEYXRlO1xuXG4gICAgdGFza3NXcmFwcGVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG59XG5cblxuY29uc3QgcmVuZGVyQWxsVGFza3NTaW1wbGVWaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tPYmpzID0gdGFza3NMaXN0LmdldEN1cnJlbnRBcnIoKTtcbiAgICB0YXNrT2Jqcy5mb3JFYWNoKGVsZW1lbnQgPT4gc2ltcGxlVmlld0NhcmQoZWxlbWVudCkpO1xufVxuXG4vL2NsZWFycyB0aGUgZGl2IGNvbnRhaW5pbmcgdGFza2xpc3QgYW5kIHNldCB0aGVtIHVwIGFnYWluIFxuY29uc3QgcmVnZW5lcmF0ZVRhc2tMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tMaXN0RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXZbY2xhc3M9J3Rhc2tzSW5uZXJXcmFwJ11cIik7XG4gICAgdGFza0xpc3REaXNwbGF5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgcmVuZGVyQWxsVGFza3NTaW1wbGVWaWV3KCk7XG4gICAgY29uc29sZS5sb2codGFza3NMaXN0LmdldEN1cnJlbnRBcnIoKSk7XG59XG5cbmNvbnN0IG5ld1Rhc2tTdWJtaXRFdmVudEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25baWQ9J25ld1Rhc2tTdWJtaXQnXVwiKTtcbiAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge3JlZ2VuZXJhdGVUYXNrTGlzdCgpfSk7XG59XG5cbmNvbnN0IHRhc2tGb2N1c2VkVmlld0NhcmQgPSAodGFza0lkKSA9PiB7XG4gICAgY29uc3QgW3Rhc2tPYmpdID0gdGFza3NMaXN0LmdldFRhc2tCeUlkKHRhc2tJZCk7XG5cbiAgICBjb25zdCBmb2N1c1ZpZXdXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9jdXNWaWV3V3JhcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZvY3VzVmlld1dyYXAnKTtcblxuICAgIGNvbnN0IGZvY3VzVmlld0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb2N1c1ZpZXdDYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9jdXNWaWV3Q2FyZCcpO1xuICAgIGZvY3VzVmlld0NhcmQuc2V0QXR0cmlidXRlKCdkYXRhLWlkZm9jdXMnLCB0YXNrSWQpXG4gICAgXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZvY3VzVmlld0Nsb3NlQnRuJylcbiAgICBjbG9zZUJ0bi5pbm5lckhUTUwgPSAoJ3gnKTtcblxuICAgIGNvbnN0IGZvY3VzVmlld0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9jdXNWaWV3Rm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZvY3VzVmlld0Zvcm0nKTtcbiAgICBcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZm9jdXNUYXNrTmFtZScpO1xuICAgIG5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdlLmcuLCBQYXkgaW50ZXJuZXQgYmlsbCcpO1xuICAgIG5hbWUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0YXNrT2JqLm5hbWUpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZm9jdXNUYXNrRGVzY3JpcHRpb24nKTtcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRhc2tPYmouZGVzY3JpcHRpb24pXG4gICAgXG5cbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRBcmVhJyk7XG4gICAgbm90ZXMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBub3Rlcy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZm9jdXNUYXNrTm90ZXMnKTtcbiAgICBub3Rlcy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2NvbW1lbnRzJyk7XG4gICAgbm90ZXMuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRhc2tPYmoubm90ZXMpO1xuXG4gICAgLy9jcmV0YWUgcHJvamVjdCBhbmQgcHJpb3JpdHkgbGlzdC4gY2FuIGkgaW1wb3J0IGl0IGZyb20gcHJvamVjdCByZW5kZXI/XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgcHJvamVjdFNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXRQcm9qZWN0SW5wdXQnKVxuXG4gICAgY29uc3Qgb3B0aW9uRWxlbWVudHMgPSBnZXRQcm9qZWN0T3B0aW9uRWxlbWVudHMoKTtcblxuICAgIGNvbnN0IHByb2plY3RJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcm9qZWN0SW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdlZGl0UHJvamVjdElucHV0Jyk7XG5cbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXRwcmlvcml0eUlucHV0Jyk7XG5cbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbnMgPSBbXG4gICAgICAgICdub25lJyxcbiAgICAgICAgJ3ByaW9yaXR5IDEnLFxuICAgICAgICAncHJpb3JpdHkgMicsXG4gICAgICAgICdwcmlvcml0eSAzJ1xuICAgIF1cblxuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9uRWxlbWVudHMgPSBwcmlvcml0eU9wdGlvbnMubWFwKGl0ZW1OYW1lID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBjdXJyZW50T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpdGVtTmFtZSk7XG4gICAgICAgIGN1cnJlbnRPcHRpb24uaW5uZXJIVE1MID0gaXRlbU5hbWU7XG4gICAgICAgIHJldHVybiBjdXJyZW50T3B0aW9uO1xuICAgIH0pXG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoJ2lucHV0Jyk7XG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZm9jdXNEdWVEYXRlJylcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGFza09iai5kdWVEYXRlKTtcblxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2ZvY3VzRHVlRGF0ZScpXG4gICAgZGF0ZUxhYmVsLmlubmVySFRNTCA9ICdEdWUgZGF0ZTonXG5cbiAgICBjb25zdCBkZWxldGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlVGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywnZm9jdXNWaWV3RGVsZXRlJyk7XG4gICAgZGVsZXRlVGFzay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcbiAgICBkZWxldGVUYXNrLmlubmVySFRNTCA9ICdkZWxldGUnO1xuXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCdmb2N1c1ZpZXdTdWJtaXQnKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0Jyk7XG4gICAgc3VibWl0LmlubmVySFRNTCA9ICdzYXZlJztcbiAgICBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvY3VzVmlld1dyYXApO1xuXG4gICAgZm9jdXNWaWV3V3JhcC5hcHBlbmRDaGlsZChmb2N1c1ZpZXdDYXJkKTtcblxuICAgIGZvY3VzVmlld0NhcmQuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICAgIGZvY3VzVmlld0NhcmQuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgZm9jdXNWaWV3Q2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgZm9jdXNWaWV3Q2FyZC5hcHBlbmRDaGlsZChub3Rlcyk7XG4gICAgZm9jdXNWaWV3Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXRMYWJlbCk7XG4gICAgZm9jdXNWaWV3Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0KTtcbiAgICBvcHRpb25FbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZWRpdE9wdGlvbkVsZW1lbnQnKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgIH0pXG4gICAgZm9jdXNWaWV3Q2FyZC5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgICBwcmlvcml0eU9wdGlvbkVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSlcblxuICAgIGZvY3VzVmlld0NhcmQuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgZm9jdXNWaWV3Q2FyZC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgIGZvY3VzVmlld0NhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlVGFzayk7XG4gICAgZm9jdXNWaWV3Q2FyZC5hcHBlbmRDaGlsZChzdWJtaXQpO1xufVxuXG5jb25zdCBmb2N1c1ZpZXdFdmVudEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzSW5uZXJXcmFwJyk7XG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGNvbnN0IGNsaWNrZWRUYXNrID0gZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtaWRdJyk7XG4gICAgICAgIGNvbnN0IGRhdGFJZFZhbHVlID0gY2xpY2tlZFRhc2suZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgIHRhc2tGb2N1c2VkVmlld0NhcmQoZGF0YUlkVmFsdWUpO1xuICAgIH0pXG59XG5cbi8vd2hhdCBkbyBpIG5lZWQgbm93PyBpIG5lZWQgZnVuY3Rpb25zIHRvIGhhbmRsZSB0aGUgZXZlbnRzIGZvciBmb2N1cyB2aWV3LiB0aGlzIHdpbGwgbWVhbiBkZWxldGluZywgZWRpdGluZywgYW5kIGNsb3NpbmcgdGhlIGZvY3VzZWQgdmlldy4gbGV0cyBzdGFydCB3aXRoIGNsb3NpbmcuIFxuLy9jbG9zZSBcbmNvbnN0IGZvY3VzVmlld0Nsb3NlRXZlbnRzID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSE9PSAnZm9jdXNWaWV3Q2xvc2VCdG4nKXtyZXR1cm59XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZS50YXJnZXQuY2xvc2VzdCgnLmZvY3VzVmlld1dyYXAnKSk7XG4gICAgfSlcblxuICAgIC8vaWYgdGhleSBjbGljayBvdXRzaWRlIHRoZSBmb3JtLCBjbG9zZXMgdGhlIGNhcmQuIGIuYyB0aGUgd3JhcHBlciBzcGFucyB3aG9sZSBwYWdlLlxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSAhPT0gJ2ZvY3VzVmlld1dyYXAnKXtyZXR1cm59XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvY3VzVmlld1dyYXAnKSk7XG4gICAgfSlcbn1cblxuXG4vL2RlbGV0ZXMgdGhlIHRhc2sgZnJvbSBzaW1wbGVWaWV3IGluIGRvbVxuY29uc3QgZm9jdXNWaWV3RGVsZXRlID0gKGV2KSA9PiB7XG4gICAgY29uc3QgZGF0YUlkRWxlbWVudCA9IGV2LnRhcmdldC5jbG9zZXN0KCdbZGF0YS1pZGZvY3VzXScpO1xuICAgIGNvbnN0IGRhdGFJZCA9IGRhdGFJZEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkZm9jdXMnKTtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzSW5uZXJXcmFwJylcbiAgICAvL25lZWRzIHRvIGRlbGV0ZSBmcm9tIGRvbSwgY2FuIHJlbW92ZSBjaGlsZCBiYXNlZCBvbiB0YXNraWRcbiAgICAvL2hvdyBlbHNlPyBjYW4gZW1wdHkgZG9tIGFuZCByZWxvYWQgdGFza0xpc3RcbiAgICBjb25zdCB0YXJnZXRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvclxuICAgIChgW2RhdGEtaWQ9XCIke2RhdGFJZH1cIl1gKTtcbiAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhcmdldFRhc2spO1xufVxuXG5cblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ID0+IHtcbiAgICBpZiAoZXYudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKSAhPT0gJ2ZvY3VzVmlld0RlbGV0ZScpe3JldHVybn1cbiAgICBmb2N1c1ZpZXdEZWxldGUoZXYpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvY3VzVmlld1dyYXAnKSlcbn0pXG5cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldiA9PiB7XG4gICAgaWYoZXYudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKSE9PSdmb2N1c1ZpZXdTdWJtaXQnKXtyZXR1cm59XG4gICAgcmVnZW5lcmF0ZVRhc2tMaXN0KCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9jdXNWaWV3V3JhcCcpKVxufSlcblxuY29uc3QgZGVsZXRlUHJvamVjdElucHV0cyA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aGljaFByb2plY3QnKS5pbm5lckhUTUwgPSAnJztcblxuY29uc3QgbG9hZFByb2plY3RJbnB1dHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0UHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3doaWNoUHJvamVjdCcpXG4gICAgZ2V0UHJvamVjdE9wdGlvbkVsZW1lbnRzKCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgc2VsZWN0UHJvamVjdElucHV0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xufVxuXG4vL3RvIHVwZGF0ZSB0aGUgcHJvamVjdCBsaXN0IG9uIGFkZGl0aW9uIGluIG5ldyB0YXNrIGZvcm1cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXYgPT4ge1xuICAgIGlmKGV2LnRhcmdldC5jbG9zZXN0KCdmb3JtJykuZ2V0QXR0cmlidXRlKCdpZCcpICE9PSAnbmV3UHJvamVjdEZvcm0nKXtyZXR1cm59XG4gICAgZGVsZXRlUHJvamVjdElucHV0cygpO1xuICAgIGxvYWRQcm9qZWN0SW5wdXRzKCk7ICBcbn0gKVxuXG4vL3RvIHVwZGF0ZSBwcm9qZWN0IGxpc3Qgb24gZGVsZXRlIGluIG5ldyB0YXNrIGZvcm1cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldiA9PiB7XG4gICAgaWYoZXYudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0bmFtZScpID09IG51bGwpe3JldHVybn1cbiAgICBkZWxldGVQcm9qZWN0SW5wdXRzKCk7XG4gICAgbG9hZFByb2plY3RJbnB1dHMoKTsgICAgXG59IClcblxuXG5cbmV4cG9ydCB7cmVuZGVyQWxsVGFza3NTaW1wbGVWaWV3LCBuZXdUYXNrU3VibWl0RXZlbnRIYW5kbGVyLCBmb2N1c1ZpZXdFdmVudEhhbmRsZXIsIGZvY3VzVmlld0Nsb3NlRXZlbnRzfSIsImNvbnN0IHRhc2tzTGlzdCA9ICgoKSA9PiB7XG4gICAgbGV0IHRhc2tzQXJyID0gW107XG4gICAgY29uc3QgY3JlYXRlID0gKG5hbWUsIGRlc2NyaXB0aW9uLCBub3RlLCBwcm9qZWN0LCBwcmlvcml0eSwgZHVlRGF0ZSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgbm90ZSxcbiAgICAgICAgICAgIHByb2plY3QsXG4gICAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgICAgIGR1ZURhdGVcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkID0gdGFza09iaiA9PiB0YXNrc0FyciA9IFsuLi50YXNrc0FyciwgdGFza09ial07XG5cbiAgICBjb25zdCByZW1vdmUgPSB0YXNrSWQgPT4ge1xuICAgICAgICB0YXNrc0FyciA9IHRhc2tzQXJyLmZpbHRlcih0YXNrT2JqID0+IHRhc2tPYmouaWQgIT09IHRhc2tJZCk7XG4gICAgfVxuICAgIGNvbnN0IGdldEN1cnJlbnRBcnIgPSAoKSA9PiBbLi4udGFza3NBcnJdO1xuXG4gICAgY29uc3QgZ2V0VGFza0J5SWQgPSBpZCA9PiB0YXNrc0Fyci5maWx0ZXIodGFza09iaiA9PiBpZCA9PT0gdGFza09iai5pZCk7XG5cbiAgICBjb25zdCBzb3J0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgdGFza3NBcnIuc29ydCAoKGEsYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEuaWQgPCBiLmlkKSB7cmV0dXJuIC0xfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGUsXG4gICAgICAgIGFkZCxcbiAgICAgICAgcmVtb3ZlLFxuICAgICAgICBnZXRDdXJyZW50QXJyLFxuICAgICAgICBnZXRUYXNrQnlJZCxcbiAgICAgICAgc29ydExpc3RcbiAgICB9O1xufSkoKTtcblxuLy93aGF0cyB0aGUgcHJvYmxlbS4gaG93IGNhbiB3ZSBkZWxldGUgdGFza3Mgd2l0aG91dCBhbiBpZCBzeXN0ZW0/IHdlIGNvdWxkIGdvIGJ5IG5hbWUgYnV0IHdoYXQgaWYgdGhleSBtYWtlIGR1cGxpY2F0ZXMuIHJlbW92ZSBhYmlsaXR5IHRvIG1ha2UgZHVwbGljYXRlcz8gbGV0cyBmaXJzdCBjb25zaWRlciB0aGlzLiB3aGF0IGZlYXR1cmVzIGRvIHdlIHdhbnQ/IHdoZW4gdGhlIHVzZXIgY2xpY2tzIGEgcHJvamVjdCBpdCBzaG91bGQgc2ltcGx5IHNob3cgYWxsIHRoZSB0YXNrcyBhc3NvY2lhdGVkIHdpdGggaXQuIHRoZSB1c2VyIHNob3VsZCBhbHNvIGJlIGFibGUgdG8gZGVsZXRlIHByb2plY3RzLiBhbmQgZWRpdCB0aGUgcHJvamVjdHMgbmFtZS4gaW4gd2hpY2ggY2FzZSBlYWNoIHByb2plY3QgbGFiZWwgc2hvdWxkIGNvbWUgd2l0aCAyIGJ1dHRvbnMsIGVkaXQgYW5kIGRlbGV0ZS4gaSB0aGluayBpIHdpbGwgbWFrZSBpdCBzbyB0aGF0IGR1cGxpY2F0ZSBwcm9qZWN0IG5hbWVzIGNhbm5vdCBiZSBhZGRlZC4gYW5kIHRoZW4gdGFyZ2V0IHByb2plY3RzIGluIHN0YXRlIGFuZCBkb20gd2l0aCB0aGUgcHJvamVjdCBuYW1lc1xuY29uc3QgdGFza0lkQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gICAgbGV0IGxpc3QgPSBbXTtcbiAgICBjb25zdCBjcmVhdGVJRCA9ICgpID0+IHtcbiAgICAgICAgLy9pZiBsaXN0IGlzIGVtcHR5LGhpZ2hlc3RJRCBzdGFydCBhdCAtMSwgc28gbmV3SUQgYmVnaW5zIGF0IDBcbiAgICAgICAgY29uc3QgaGlnaGVzdElkUGx1c09uZSA9ICgobGlzdC5sZW5ndGggPT09IDAgPyAtMSA6IGxpc3RbbGlzdC5sZW5ndGgtMV0pICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgbGlzdC5wdXNoKGhpZ2hlc3RJZFBsdXNPbmUpXG4gICAgICAgIHJldHVybiAoaGlnaGVzdElkUGx1c09uZSk7XG4gICAgfTtcbiAgICBjb25zdCBhc3NpZ25JRCA9IG9iaiA9PiBvYmouaWQgPSBjcmVhdGVJRCgpO1xuICAgIFxuXG4gICAgY29uc3QgcmVtb3ZlSUQgPSAodGFza0lEKSA9PiB7XG4gICAgICAgIGxpc3QgPSBsaXN0LmZpbHRlcihlYWNoSUQgPT4gZWFjaElEICE9PSB0YXNrSUQpO1xuICAgIH1cbiAgICBjb25zdCBnZXRMaXN0ID0gKCkgPT4ge2NvbnNvbGUubG9nKGxpc3QpfVxuICAgIHJldHVybiB7XG4gICAgICAgIGFzc2lnbklELFxuICAgICAgICByZW1vdmVJRCxcbiAgICAgICAgZ2V0TGlzdFxuICAgIH07XG59KSgpXG5cbmNvbnN0IHRhc2tFdmVudEZ1bmNzID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVUYXNrID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrID0gZ2V0TmV3VGFza0Zvcm1WYWx1ZXMoKTtcbiAgICAgICAgY29uc3QgdGFza09iaiA9IHRhc2tzTGlzdC5jcmVhdGUodGFzay5uYW1lLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLm5vdGVzLCB0YXNrLnByb2plY3QsIHRhc2sucHJpb3JpdHksIHRhc2suZHVlRGF0ZSk7XG4gICAgICAgIHRhc2tJZENvbnRyb2xsZXIuYXNzaWduSUQodGFza09iaik7XG4gICAgICAgIHRhc2tzTGlzdC5hZGQodGFza09iaik7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAodGFza0lkKSA9PiB7XG4gICAgICAgIHRhc2tJZENvbnRyb2xsZXIucmVtb3ZlSUQodGFza0lkKTtcbiAgICAgICAgdGFza3NMaXN0LnJlbW92ZSh0YXNrSWQpO1xuICAgIH1cbiAgIFxuICAgIC8vdG8gZGVsZXRlIHRhc2tPYmosIGNyZWF0ZSBuZXcgb25lLCBhbmQga2VlcCBzYW1lIGlkIHZhbFxuICAgIC8vb25lIHRoaW5nIGkgd29uZGVyIHRob3VnaCwgaXMgd2lsbCB0aGlzIGltcGxlbWVudGF0aW9uIHNob3cga2VlcCB0aGUgdGFza3MgaW4gb3JkZXIgZm9yIHRoZSBkb20/IGxldHMgY29uc2lkZXIuIG5ldyB0YXNrcyB3aWxsIGxvb2sgYXQgdGhlIGlkTGlzdCwgYW5kIGdldCBhbiBpZCB0aGF0cyAxKyB0aGUgaGlnaGVzdC4gZWRpdCB0YXNrIGRvZXNuJ3QgdG91Y2ggdGhlIGlkTGlzdC4gZGVsZXRlVGFzaywgd2lsbCBkZWxldGUgdGhlIGlkIG9mIGNvcnJlc3BvbmRpbmcgdGFzay4gXG4gICAgY29uc3QgZWRpdFRhc2sgPSB0YXNrSWQgPT4ge1xuICAgICAgICBjb25zdCBbdGFyZ2V0VGFza10gPSB0YXNrc0xpc3QuZ2V0VGFza0J5SWQodGFza0lkKTtcbiAgICAgICAgLy9vayBzbyB3ZSBoYXZlIHRoZSB0YXJnZXQgdGFzayBzdG9yZWQsIHNvIG5vdyB3ZSBuZWVkIHRvIGZvcm0gaW5wdXQgdmFsdWVzXG4gICAgICAgIC8vIHdoYXQgYXJlIHdlIHRyeWluZyB0byBkbz8gd2Ugd2FudCB0byBjcmVhdGUgYSBuZXcgdGFzayBvYmogdG8gcmVwbGFjZSB0aGUgb2xkIG9uZS4uIHdoYXQgZG9lcyB0aGlzIG1lYW4uLj8gd2UgaGF2ZSB0byB0YXJnZXQgdGhlIG9sZFRhc2sgYW5kIGRlbGV0ZSBpdCBieSBpZC4gdGhlbiB3ZSBjcmVhdGUgYSBuZXdUYXNrIGFuZCBhcHBlbmQgaXQgdG8gdGhlIHRhc2sgbGlzdC4gZm9sbG93ZWQgYnkgc29ydGluZyB0aGUgdGFza0xpc3RcbiAgICAgICAgdGFyZ2V0VGFzay5uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J2ZvY3VzVGFza05hbWUnXVwiKS52YWx1ZTtcblxuICAgICAgICB0YXJnZXRUYXNrLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J2ZvY3VzVGFza0Rlc2NyaXB0aW9uJ11cIikudmFsdWU7XG5cbiAgICAgICAgdGFyZ2V0VGFzay5ub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYVtuYW1lPSdmb2N1c1Rhc2tOb3RlcyddXCIpLnZhbHVlO1xuXG4gICAgICAgIHRhcmdldFRhc2suZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdmb2N1c0R1ZURhdGUnXVwiKS52YWx1ZTtcblxuICAgICAgICB0YXJnZXRUYXNrLmlkID0gdGFza0lkO1xuXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRUYXNrT2JqID0gdGFza3NMaXN0LmNyZWF0ZShcbiAgICAgICAgICAgIHRhcmdldFRhc2submFtZSxcbiAgICAgICAgICAgIHRhcmdldFRhc2suZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0YXJnZXRUYXNrLm5vdGVzLFxuICAgICAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICAgICAgdGFyZ2V0VGFzay5kdWVEYXRlLFxuICAgICAgICApXG4gICAgICAgIC8vd2UgZG9uJ3QgbmVlZCByZWZlcmVuY2UgdG8gb2xkVGFzayBhbnltb3JlIGFuZCB3ZSBkb24ndCB3YW50IGR1cGxpY2F0ZSB0YXNrc1xuICAgICAgICB0YXNrc0xpc3QucmVtb3ZlKHRhc2tJZCk7XG5cbiAgICAgICAgLy90aGUgbmV3IG9iaiBzaG91bGQgaGF2ZSBzYW1lIGlkIGFzIG9sZFxuICAgICAgICB1cGRhdGVkVGFza09iai5pZCA9IHRhc2tJZDtcbiAgICAgICAgdGFza3NMaXN0LmFkZCh1cGRhdGVkVGFza09iailcblxuICAgICAgICAvL3RoZSBvcmRlciBvZiB0YXNrTGlzdHMgbmVlZHMgdG8gYmUgbWFpbnRhaW5lZCBmb3IgZG9tXG4gICAgICAgIHRhc2tzTGlzdC5zb3J0TGlzdCgpO1xuICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyAodGFza3NMaXN0LmdldEN1cnJlbnRBcnIoKSlcbiAgICAgICAgXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZVRhc2ssXG4gICAgICAgIGRlbGV0ZVRhc2ssXG4gICAgICAgIGVkaXRUYXNrXG4gICAgfTtcbn0pKCk7XG4vLyBjb25zdCBwcm9qZWN0c0xpc3QgPSAoKCkgPT4ge1xuLy8gICAgIGNvbnN0IGFyckxpc3QgPSBbXTtcbi8vICAgICBjb25zdCBnZXRQcm9qZWN0TGlzdCA9ICgpID0+IHtjb25zb2xlLmxvZygncmVkdWNlIHRhc2tMaXN0IHRvIGdldCBwcm9qZWN0TmFtZXMgdy9vIGR1cGxpY2F0ZXMgYW5kIHB1c2ggaW50byBhcnJMaXN0Jyl9O1xuLy8gICAgIGNvbnN0IGdldEFyckxpc3QgPSAoKSA9PiB7IGNvbnNvbGUubG9nKGFyckxpc3QpO31cbi8vIH0pKCk7XG5cblxuLy9kb20gbWV0aG9kIC0gIGdldFRhc2tJRCA9ICByZXR1cm4gZWxlbWVudC5xdWVyeXNlbGVjdC5nZXRhdHRyaWJ1dGUoZGF0YS1pZDogeClcblxuY29uc3QgZ2V0TmV3VGFza0Zvcm1WYWx1ZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuICB7XG4gICAgICAgIG5hbWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSd0YXNrTmFtZSddXCIpLnZhbHVlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3Rhc2tEZXNjcmlwdGlvbiddXCIpLnZhbHVlLFxuICAgICAgICBub3RlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRleHRBcmVhW25hbWU9J3Rhc2tOb3RlcyddXCIpLnZhbHVlLFxuICAgICAgICBwcm9qZWN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3doaWNoUHJvamVjdFwiKS52YWx1ZSxcbiAgICAgICAgcHJpb3JpdHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlJbnB1dFwiKS52YWx1ZSxcbiAgICAgICAgZHVlRGF0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J2R1ZURhdGUnXVwiKS52YWx1ZVxuICAgIH1cbn1cblxuY29uc3QgbmV3VGFza0V2ZW50QWRkZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25baWQ9J25ld1Rhc2tTdWJtaXQnXVwiKTtcbiAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ndGFza05hbWUnXVwiKS52YWx1ZSA9PT0gJycpe3JldHVybn07XG4gICAgICAgIHRhc2tFdmVudEZ1bmNzLmNyZWF0ZVRhc2soKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1baWQ9J25ld1Rhc2tGb3JtJ11cIikucmVzZXQoKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh0YXNrc0xpc3QuZ2V0Q3VycmVudEFycigpKTtcbn1cblxuXG4vL3RvIHJlbW92ZSB0YXNrIGFuZCBpZCBmcm9tIGxpc3RzXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgaWYoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpICE9PSAnZm9jdXNWaWV3RGVsZXRlJyl7cmV0dXJufVxuICAgIGNvbnN0IHRhcmdldFRhc2sgPSBlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1pZGZvY3VzXScpO1xuICAgIGNvbnN0IHRhcmdldElkID0gdGFyZ2V0VGFzay5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWRmb2N1cycpO1xuICAgIHRhc2tFdmVudEZ1bmNzLmRlbGV0ZVRhc2sodGFyZ2V0SWQpO1xufSlcblxuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKSE9PSdmb2N1c1ZpZXdTdWJtaXQnKXtyZXR1cm59O1xuICAgIGNvbnN0IHRhcmdldFRhc2sgPSBlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1pZGZvY3VzXScpO1xuICAgIGNvbnN0IHRhcmdldElkID0gdGFyZ2V0VGFzay5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWRmb2N1cycpO1xuICAgIHRhc2tFdmVudEZ1bmNzLmVkaXRUYXNrKHRhcmdldElkKTtcbn0pXG5cblxuZXhwb3J0IHt0YXNrc0xpc3QsIHRhc2tFdmVudEZ1bmNzLCB0YXNrSWRDb250cm9sbGVyLCBnZXROZXdUYXNrRm9ybVZhbHVlcywgbmV3VGFza0V2ZW50QWRkZXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0YXNrQ29udHJvbGxlciwgdGFza3NMaXN0LCB0YXNrRXZlbnRGdW5jcywgdGFza0lkQ29udHJvbGxlciwgZ2V0TmV3VGFza0Zvcm1WYWx1ZXMsIG5ld1Rhc2tFdmVudEFkZGVyIH0gXG5mcm9tIFwiLi90YXNrcy1zdGF0ZVwiO1xuaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0cy1zdGF0ZVwiO1xuaW1wb3J0IHtpbml0aWFsUGFnZUxvYWR9IGZyb20gXCIuL2xhbmRpbmctcGFnZVwiO1xuaW1wb3J0IHsgbmV3VGFza1N1Ym1pdEV2ZW50SGFuZGxlciwgcmVuZGVyQWxsVGFza3NTaW1wbGVWaWV3LCBmb2N1c1ZpZXdFdmVudEhhbmRsZXIsIGZvY3VzVmlld0Nsb3NlRXZlbnRzfSBmcm9tIFwiLi90YXNrLXJlbmRlclwiO1xuaW1wb3J0IHsgbWFrZVByb2plY3RMaXN0LCByZW5kZXJQcm9qZWN0SXRlbXMgfSBmcm9tIFwiLi9wcm9qZWN0cy1yZW5kZXJcIjtcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuXG5pbml0aWFsUGFnZUxvYWQoKTtcbm5ld1Rhc2tFdmVudEFkZGVyKCk7XG5uZXdUYXNrU3VibWl0RXZlbnRIYW5kbGVyKCk7XG5mb2N1c1ZpZXdFdmVudEhhbmRsZXIoKTtcbmZvY3VzVmlld0Nsb3NlRXZlbnRzKCk7XG5yZW5kZXJBbGxUYXNrc1NpbXBsZVZpZXcoKTtcbnRhc2tzTGlzdC5nZXRDdXJyZW50QXJyKCk7XG5yZW5kZXJQcm9qZWN0SXRlbXMoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=