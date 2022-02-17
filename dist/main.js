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
    let listContainer = document.querySelector('#projectUl')
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
        'calculus',
        'coding',
        'chores'
    ];
    const add = projectName => list = [...list, projectName];
    const getList = () => [...list];

    return {
        add,
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
    const projectUl = document.querySelector('#projectUl');
    projectUl.innerHTML = '';
    projectList.add(newProjectInput.value);
    console.log(projectList.getList());
      
})




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


const simpleViewCard = (taskObj) =>{
    const tasksWrapper = document.querySelector('.tasksInnerWrap')

    const card = document.createElement('div');
    card.setAttribute('class', 'taskSimpleCard');
    card.setAttribute('data-id', taskObj.id)

    //lets say a user clicks the markComplete button. so event.target.class == markCompleteBtn 
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

//render all tasks will use simpleviewcard and iterate over all the task objs
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

//later on i will consider the complications and refactor the code
// will be used to add an event listener to the taskList container 
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

//ok so we need a submit button eveent listener for dom. i think since the state taskList is sorted correctly, we can just delete and reload the dom with the function made up top earlier, plus we want to close the focus view card. there should be a func fo rthat

//my currenttask si to wire up the input event listener. to do that i first need to grab the element. so i need to give it a class. or i can use a combinator selector 


// i
document.body.addEventListener('click', ev => {
    //if it wasn't the submit button return. we can target submit button with..? button[id=...]
    if(ev.target.getAttribute('id')!=='focusViewSubmit'){return}
    regenerateTaskList();
    document.body.removeChild(document.querySelector('.focusViewWrap'))
})


document.body.addEventListener('click', e => {
    if(e.target.getAttribute('data-projectName') == null){return}
    console.log(e.target.getAttribute('data-projectName'))
})


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
    let tasksArr = [
        {
            name: 'name4',
            description: 'des4',
            dueDate: 'due4',
            id: '4'
        },
        {
            name: 'name2',
            description: 'des2',
            dueDate: 'due2',
            id: '2'
        },
        {
            name: 'name1',
            description: 'des1',
            dueDate: 'due1',
            id: '1'
        }
    ];
    const create = (name, description, note, project = 'default', priority = 'default', dueDate) => {
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
        const taskObj = tasksList.create(task.name, task.description, task.notes, 'default', 'important', task.dueDate);
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
        dueDate: document.querySelector("input[name='dueDate']").value,
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
}

const focusViewDeleteEvent = () => {

}

//to remove task and id from lists
document.body.addEventListener('click', e => {
    if(e.target.getAttribute('id') !== 'focusViewDelete'){return}
    const targetTask = e.target.closest('[data-idfocus]');
    const targetId = targetTask.getAttribute('data-idfocus');
    taskEventFuncs.deleteTask(targetId);
    console.table(tasksList.getCurrentArr(), taskIdController.getList());
})


document.body.addEventListener('click', e => {
    if (e.target.getAttribute('id')!=='focusViewSubmit'){return};
    const targetTask = e.target.closest('[data-idfocus]');
    const targetId = targetTask.getAttribute('data-idfocus');
    taskEventFuncs.editTask(targetId);
})



document.body.addEventListener('keyup', e => {
    //to run, it has to be an input element inside the project nav 
    if(e.keycode !== 13){return}
    if (e.target.closest('.projectNav') == null && e.target.tagName !== 'INPUT'){return}
    const projectValue = e.target.value;
    projectList.add(projectValue);
    console.log(projectList.getList());    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHFCO0FBQzBCO0FBQ0E7QUFDaUY7QUFDeEQ7QUFDbEQ7OztBQUd0Qiw4REFBZTtBQUNmLCtEQUFpQjtBQUNqQix1RUFBeUI7QUFDekIsbUVBQXFCO0FBQ3JCLGtFQUFvQjtBQUNwQixzRUFBd0I7QUFDeEIsaUVBQXVCO0FBQ3ZCLG9FQUFrQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGFuZGluZy1wYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdHMtcmVuZGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdHMtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLXJlbmRlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2tzLXN0YXRlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGVudFdyYXBwZXJ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5wYWdlSGVhZGVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI0MSwgMTUsIDE1KTtcXG4gICAgZmxleC1iYXNpczogMTAwJTtcXG59XFxuXFxuLnByb2plY3ROYXYge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcXG59XFxuXFxuLm5ld1Rhc2tDYXJkID4gZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuW25hbWU9XFxcInRhc2tOYW1lXFxcIl0sXFxuW25hbWU9XFxcInRhc2tEZXNjcmlwdGlvblxcXCJdLCBcXG5bbmFtZT1cXFwidGFza05vdGVzXFxcIl0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2tTaW1wbGVDYXJkIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjExLDIxMSwyMTEpO1xcblxcbn1cXG5cXG4udGFza0NhcmRUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4udGFza0NhcmREZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnRhc2tDYXJkRHVlRGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uZm9jdXNWaWV3V3JhcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC41KTtcXG59XFxuXFxuLmZvY3VzVmlld0NhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIFxcbn1cXG5cXG4jcHJvamVjdFVsIHtcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW1XcmFwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG4ucHJvamVjdEl0ZW1XcmFwID4gYnV0dG9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTs7O0lBR0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksMENBQTBDOztBQUU5Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRlbnRXcmFwcGVye1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ucGFnZUhlYWRlciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNDEsIDE1LCAxNSk7XFxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0TmF2IHtcXG4gICAgcGFkZGluZy1yaWdodDogMTAwcHg7XFxufVxcblxcbi5uZXdUYXNrQ2FyZCA+IGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbltuYW1lPVxcXCJ0YXNrTmFtZVxcXCJdLFxcbltuYW1lPVxcXCJ0YXNrRGVzY3JpcHRpb25cXFwiXSwgXFxuW25hbWU9XFxcInRhc2tOb3Rlc1xcXCJdIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrU2ltcGxlQ2FyZCB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIxMSwyMTEsMjExKTtcXG5cXG59XFxuXFxuLnRhc2tDYXJkVGl0bGUge1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnRhc2tDYXJkRGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi50YXNrQ2FyZER1ZURhdGUge1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLmZvY3VzVmlld1dyYXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNSk7XFxufVxcblxcbi5mb2N1c1ZpZXdDYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBcXG59XFxuXFxuI3Byb2plY3RVbCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG59XFxuXFxuLnByb2plY3RJdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RJdGVtV3JhcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuLnByb2plY3RJdGVtV3JhcCA+IGJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB0YXNrSWRDb250cm9sbGVyfSBmcm9tIFwiLi90YXNrcy1zdGF0ZVwiO1xuaW1wb3J0IHsgbWFrZVByb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdHMtcmVuZGVyXCI7XG5pbXBvcnQgeyBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3Byb2plY3RzLXN0YXRlXCI7XG5cbmNvbnN0IGluaXRpYWxQYWdlTG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRXcmFwcGVyJyk7XG4gICAgXG5cbiAgICBjb25zdCBwYWdlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgcGFnZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdwYWdlSGVhZGVyJyk7XG4gICAgcGFnZUhlYWRlci5pbm5lckhUTUwgPSAndGhpcyBpcyB0aGUgaGVhZGVyJztcbiAgICAgIFxuICAgIGNvbnN0IHRhc2tDb250ZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIGNvbnN0IHRhc2tMaXN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgdGFza0xpc3RIZWFkZXIuaW5uZXJIVE1MID0gJ2FjdGl2ZSBwcm9qZWN0IE5hbWUnO1xuICAgIFxuICAgIGNvbnN0IHRhc2tMaXN0SW5uZXJXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0xpc3RJbm5lcldyYXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrc0lubmVyV3JhcCcpO1xuXG4gICAgY29uc3QgbmV3VGFza1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICBjb25zdCBuZXdUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3VGFza0J0bi5pbm5lckhUTUwgPSAoJ05ldyBUYXNrJyk7XG5cbiAgICBjb25zdCBuZXdUYXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Rhc2tDYXJkLmNsYXNzTGlzdC5hZGQoJ25ld1Rhc2tDYXJkJyk7XG4gICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgbmV3VGFza0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICduZXdUYXNrRm9ybScpO1xuICAgIFxuICAgIGNvbnN0IG5ld1Rhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIG5ld1Rhc2tOYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgbmV3VGFza05hbWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2tOYW1lJyk7XG4gICAgbmV3VGFza05hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdlLmcuLCBQYXkgaW50ZXJuZXQgYmlsbCcpO1xuICAgIG5ld1Rhc2tOYW1lLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG5cbiAgICBjb25zdCBuZXdUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgbmV3VGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgbmV3VGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrRGVzY3JpcHRpb24nKTtcbiAgICBuZXdUYXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdkZXNjcmlwdGlvbicpO1xuXG4gICAgY29uc3QgbmV3VGFza05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dEFyZWEnKVxuICAgIG5ld1Rhc2tOb3Rlcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIG5ld1Rhc2tOb3Rlcy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFza05vdGVzJyk7XG4gICAgbmV3VGFza05vdGVzLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnY29tbWVudHMnKTtcblxuICAgIGNvbnN0IHNlbGVjdFByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHNlbGVjdFByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3doaWNoUHJvamVjdCcpO1xuICAgIHNlbGVjdFByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnd2hpY2hQcm9qZWN0Jyk7XG5cbiAgICBjb25zdCBsYWJlbFByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWxQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdmb3InLCAnd2hpY2hQcm9qZWN0Jyk7XG4gICAgbGFiZWxQcm9qZWN0SW5wdXQuaW5uZXJIVE1MID0gJ1Byb2plY3Q6ICdcblxuICAgIGNvbnN0IGdldFByb2plY3RPcHRpb25FbGVtZW50cyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudExpc3QgPSBwcm9qZWN0TGlzdC5nZXRMaXN0KCk7IC8vc2hvdWxkIGJlIGFycmF5XG4gICAgICAgIHJldHVybiBjdXJyZW50TGlzdC5tYXAobGlzdEl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGN1cnJlbnRJdGVtLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBsaXN0SXRlbSk7XG4gICAgICAgICAgICBjdXJyZW50SXRlbS5pbm5lckhUTUwgPSBsaXN0SXRlbTtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50SXRlbTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoJ3NlbGVjdCcpO1xuICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eUlucHV0Jyk7XG5cbiAgICBjb25zdCBsYWJlbFByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsUHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eUlucHV0Jyk7XG4gICAgbGFiZWxQcmlvcml0eUlucHV0LmlubmVySFRNTCA9ICdQcmlvcml0eSdcblxuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9ucyA9IFtcbiAgICAgICAgJ25vbmUnLFxuICAgICAgICAncHJpb3JpdHkgMScsXG4gICAgICAgICdwcmlvcml0eSAyJyxcbiAgICAgICAgJ3ByaW9yaXR5IDMnXG4gICAgXVxuXG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb25FbGVtZW50cyA9IHByaW9yaXR5T3B0aW9ucy5tYXAoaXRlbU5hbWUgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGN1cnJlbnRPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGl0ZW1OYW1lKTtcbiAgICAgICAgY3VycmVudE9wdGlvbi5pbm5lckhUTUwgPSBpdGVtTmFtZTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRPcHRpb247XG4gICAgfSlcblxuXG4gICAgY29uc3QgbmV3VGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICgnaW5wdXQnKTtcbiAgICBuZXdUYXNrRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZHVlRGF0ZScpXG4gICAgbmV3VGFza0R1ZURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcblxuICAgIGNvbnN0IG5ld1Rhc2tEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIG5ld1Rhc2tEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlRGF0ZScpXG4gICAgbmV3VGFza0RhdGVMYWJlbC5pbm5lckhUTUwgPSAnRHVlIGRhdGU6J1xuXG4gICAgY29uc3QgbmV3VGFza1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1Rhc2tTdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsJ25ld1Rhc2tTdWJtaXQnKTtcbiAgICBuZXdUYXNrU3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpO1xuICAgIG5ld1Rhc2tTdWJtaXQuaW5uZXJIVE1MID0gJ3NhdmUnO1xuXG4gICAgY29uc3QgbmV3VGFza0NhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1Rhc2tDYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ25ld1Rhc2tDYW5jZWwnKTtcbiAgICBuZXdUYXNrQ2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgIG5ld1Rhc2tDYW5jZWxCdG4uaW5uZXJIVE1MID0gJ2NhbmNlbCc7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnRXcmFwcGVyKTtcblxuICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHBhZ2VIZWFkZXIpO1xuICAgIG1ha2VQcm9qZWN0TGlzdCgpO1xuICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tDb250ZW50V3JhcHBlcik7XG5cbiAgICBcbiAgICB0YXNrQ29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0xpc3RIZWFkZXIpO1xuICAgIHRhc2tDb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrTGlzdElubmVyV3JhcCk7XG4gICAgdGFza0NvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKG5ld1Rhc2tXcmFwcGVyKTtcblxuICAgIG5ld1Rhc2tXcmFwcGVyLmFwcGVuZENoaWxkKG5ld1Rhc2tCdG4pO1xuICAgIG5ld1Rhc2tXcmFwcGVyLmFwcGVuZENoaWxkKG5ld1Rhc2tDYXJkKTtcblxuICAgIFxuICAgIG5ld1Rhc2tDYXJkLmFwcGVuZENoaWxkKG5ld1Rhc2tGb3JtKVxuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKG5ld1Rhc2tOYW1lKTtcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChuZXdUYXNrRGVzY3JpcHRpb24pO1xuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKG5ld1Rhc2tOb3Rlcyk7XG4gICAgXG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQobGFiZWxQcm9qZWN0SW5wdXQpXG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0UHJvamVjdElucHV0KTtcbiAgICBnZXRQcm9qZWN0T3B0aW9uRWxlbWVudHMoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBzZWxlY3RQcm9qZWN0SW5wdXQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG5cblxuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKGxhYmVsUHJpb3JpdHlJbnB1dCk7XG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG4gICAgY29uc29sZS5sb2cocHJpb3JpdHlPcHRpb25FbGVtZW50cyk7XG4gICAgcHJpb3JpdHlPcHRpb25FbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT57XG4gICAgICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSlcblxuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKG5ld1Rhc2tEYXRlTGFiZWwpO1xuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKG5ld1Rhc2tEdWVEYXRlKTtcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChuZXdUYXNrU3VibWl0KTtcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChuZXdUYXNrQ2FuY2VsQnRuKTsgXG59XG5cbmV4cG9ydCB7aW5pdGlhbFBhZ2VMb2FkfVxuXG4vL29rIHNvIHdlIGFkZGVkIHByaW9yaXR5IGFuZCBwcm9qZWN0IGludG8gZG9tIGZvcm0uLiBub3cgd2UgbmVlZCB0byB1cGRhdGUgc3RhdGUuLiBvciB3ZSBjYW4gd29yayBvbiB0aGUgcHJvamVjdCBsaXN0LlxuLy9vayBwcm9qZWN0IGxpc3QgZmlyc3QsIGp1c3QgdGhlIGFiaWxpdHkgdG8gYWRkIG5ldyBwcm9qZWN0cyBhbmQgdXBkYXRlIHRoZSBuZXdUYXNrIGZvcm0uICIsImltcG9ydCB7IHRhc2tzTGlzdCB9IGZyb20gXCIuL3Rhc2tzLXN0YXRlXCI7XG5pbXBvcnQgeyBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3Byb2plY3RzLXN0YXRlXCI7XG5cbmNvbnN0IG1ha2VQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0c1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdE5hdicpO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3RzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdHNUaXRsZS5pbm5lckhUTUwgPSAndGhpcyBpcyB0aGUgcHJvamVjdCBsaXN0JztcblxuICAgIC8vc2hvdWxkIGFsc28gYmUgZHluYW1pYyBcbiAgICAvL25lZWQgYSBcIm5ld1Byb2plY3QgYnV0dG9uXCJcbiAgICAvLyBuZWVkIHRvIGRpc3BsYXkgZGVmYXVsdCBwcm9qZWN0XG4gICAgY29uc3QgcHJvamVjdERpc3BsYXlMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBwcm9qZWN0RGlzcGxheUxpc3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0VWwnKVxuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIG5ld1Byb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3UHJvamVjdEZvcm0nKTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3UHJvamVjdFN1Ym1pdCcpO1xuICAgIG5ld1Byb2plY3RCdG4uaW5uZXJIVE1MID0gJysnO1xuXG4gICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZUhvbGRlcicsICdhZGQgYSBuZXcgcHJvamVjdCcpO1xuICAgIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Byb2plY3RzSW5wdXQnKTtcbiAgIFxuICAgIFxuICAgIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRXcmFwcGVyJyk7XG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNXcmFwcGVyKTtcblxuICAgIHByb2plY3RzV3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0c1RpdGxlKTtcbiAgICBwcm9qZWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpc3BsYXlMaXN0KTtcbiAgICBwcm9qZWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pO1xuICAgIFxuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ0bik7XG59XG5cbmNvbnN0IHJlbmRlclByb2plY3RJdGVtcyA9ICgpID0+IHtcbiAgICBsZXQgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0VWwnKVxuICAgIGNvbnN0IGFsbEN1cnJlbnRQcm9qZWN0cyA9IHByb2plY3RMaXN0LmdldExpc3QoKTtcbiAgICAvL3doYXQgYW0gaSB0cnluYSBkb28/IGkgd2FudCBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBwcm9qZWN0IHN0cmluZyBpdGVtLCBhbmQgdXNlcyBpdCB0byBjcmVhdGUgYSBsaSBlbGVtZW50IGFuZCBhcHBlbmQgaXQuXG4gICAgY29uc3QgcmVuZGVyUHJvamVjdEl0ZW0gPSBwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaXN0SXRlbS5pbm5lckhUTUwgPSBwcm9qZWN0O1xuICAgICAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3RJdGVtJylcbiAgICAgICAgcmV0dXJuIGxpc3RJdGVtO1xuICAgIH1cbiAgICBjb25zdCBwcm9qZWN0UmVtb3ZlQnV0dG9uID0gcHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICByZW1vdmVCdG4uaW5uZXJIVE1MID0gJ3gnO1xuICAgICAgICByZW1vdmVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3ROYW1lJywgcHJvamVjdCk7XG4gICAgICAgIHJldHVybiByZW1vdmVCdG47XG4gICAgfVxuXG4gICAgYWxsQ3VycmVudFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBjb25zdCBpdGVtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBpdGVtV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3RJdGVtV3JhcCcpO1xuICAgICAgaXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQocmVuZGVyUHJvamVjdEl0ZW0ocHJvamVjdCkpO1xuICAgICAgaXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdFJlbW92ZUJ1dHRvbihwcm9qZWN0KSk7XG4gICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1XcmFwcGVyKTtcbiAgICB9KVxufVxuXG5jb25zdCBkZWxldGVQcm9qZWN0SXRlbXMgPSAoKSA9PiB7IFxuICAgIGNvbnN0IHByb2plY3RVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0VWwnKTtcbiAgICBwcm9qZWN0VWwuaW5uZXJIVE1MID0gJyc7XG59XG5cbi8vIGhvdyBzaG91bGQgd2UgY3JlYXRlIGFuZCBkaXNwbGF5IHRoZSBwcm9qZWN0IGxpc3Q/IHdlIHdpbGwgaGF2ZSB0byBiZSBhYmxlIHRvIGRlbGV0ZSB0aGVtIGFzIHdlbGwgYW5kIGhhbmRsZSB0aG9zZSBjYXNlcy4gcHJvYmFibHkgc2ltaWxpYXIgdG8gdGhlIHdheSB3ZSBoYW5kbGVkIHRhc2tzLiB0aGF0IG1lYW5zIHRoZSBwcm9qZWN0cyB3aWxsIG5lZWQgYW4gaWQgYXMgd2VsbC4uXG5cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKGUudGFyZ2V0LmNsb3Nlc3QoJ2Zvcm0nKS5nZXRBdHRyaWJ1dGUoJ2lkJykgIT09ICduZXdQcm9qZWN0Rm9ybScpe3JldHVybn1cbiAgICBkZWxldGVQcm9qZWN0SXRlbXMoKTtcbiAgICByZW5kZXJQcm9qZWN0SXRlbXMoKTtcbiAgICBlLnRhcmdldC5jbG9zZXN0KCdmb3JtJykucmVzZXQoKTsgXG59KVxuXG4vLyBob3cgc2hvdWxkIGkgZGVsZXRlLi4uIGkgdGhpbmsgYWN0dWFsbHksIGp1c3QgdXNlIHJlZ2VuZXJhdGUgdGFzayBsaXN0PyBhZnRlciBjbGVhcmluZyB0aGUgZG9tP1xuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGlmKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0TmFtZScpID09IG51bGwpe3JldHVybn1cbiAgICBkZWxldGVQcm9qZWN0SXRlbXMoKTtcbiAgICByZW5kZXJQcm9qZWN0SXRlbXMoKTtcbn0pXG5cblxuXG5cblxuXG5leHBvcnR7bWFrZVByb2plY3RMaXN0LCByZW5kZXJQcm9qZWN0SXRlbXN9IiwiY29uc3QgcHJvamVjdExpc3QgPSAoKCkgPT57XG4gICAgbGV0IGxpc3QgPSBbXG4gICAgICAgICdjYWxjdWx1cycsXG4gICAgICAgICdjb2RpbmcnLFxuICAgICAgICAnY2hvcmVzJ1xuICAgIF07XG4gICAgY29uc3QgYWRkID0gcHJvamVjdE5hbWUgPT4gbGlzdCA9IFsuLi5saXN0LCBwcm9qZWN0TmFtZV07XG4gICAgY29uc3QgZ2V0TGlzdCA9ICgpID0+IFsuLi5saXN0XTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZCxcbiAgICAgICAgZ2V0TGlzdFxuICAgIH1cbn0pKCk7XG5cbmNvbnN0IHByb2plY3RJZEhhbmRsZXIgPSAoKCk9PiB7XG5cbn0pKClcblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYoZS50YXJnZXQuY2xvc2VzdCgnZm9ybScpLmdldEF0dHJpYnV0ZSgnaWQnKSAhPT0gJ25ld1Byb2plY3RGb3JtJyl7cmV0dXJufVxuICAgIGNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdQcm9qZWN0c0lucHV0Jyk7XG4gICAgaWYgKG5ld1Byb2plY3RJbnB1dC52YWx1ZSA9PT0gJycpe3JldHVybn07XG4gICAgaWYgKHByb2plY3RMaXN0LmdldExpc3QoKS5pbmNsdWRlcyhuZXdQcm9qZWN0SW5wdXQudmFsdWUpKXtcbiAgICAgICAgYWxlcnQoJ3RoYXQgcHJvamVjdCBhbHJlYWR5IGV4aXN0cyEnKVxuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgcHJvamVjdFVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RVbCcpO1xuICAgIHByb2plY3RVbC5pbm5lckhUTUwgPSAnJztcbiAgICBwcm9qZWN0TGlzdC5hZGQobmV3UHJvamVjdElucHV0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdC5nZXRMaXN0KCkpO1xuICAgICAgXG59KVxuXG5cbmV4cG9ydCB7cHJvamVjdExpc3R9OyIsImltcG9ydCB7IHRhc2tzTGlzdCB9IGZyb20gXCIuL3Rhc2tzLXN0YXRlXCI7XG5cbmNvbnN0IHNpbXBsZVZpZXdDYXJkID0gKHRhc2tPYmopID0+e1xuICAgIGNvbnN0IHRhc2tzV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc0lubmVyV3JhcCcpXG5cbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2tTaW1wbGVDYXJkJyk7XG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCB0YXNrT2JqLmlkKVxuXG4gICAgLy9sZXRzIHNheSBhIHVzZXIgY2xpY2tzIHRoZSBtYXJrQ29tcGxldGUgYnV0dG9uLiBzbyBldmVudC50YXJnZXQuY2xhc3MgPT0gbWFya0NvbXBsZXRlQnRuIFxuICAgIGNvbnN0IG1hcmtDb21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1hcmtDb21wbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21hcmtDb21wbGV0ZUJ0bicpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrQ2FyZFRpdGxlJyk7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gdGFza09iai5uYW1lO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrQ2FyZERlc2NyaXB0aW9uJyk7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gdGFza09iai5kZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2tDYXJkRHVlRGF0ZScpO1xuICAgIGR1ZURhdGUuaW5uZXJIVE1MID0gdGFza09iai5kdWVEYXRlO1xuXG4gICAgdGFza3NXcmFwcGVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG59XG5cbi8vcmVuZGVyIGFsbCB0YXNrcyB3aWxsIHVzZSBzaW1wbGV2aWV3Y2FyZCBhbmQgaXRlcmF0ZSBvdmVyIGFsbCB0aGUgdGFzayBvYmpzXG5jb25zdCByZW5kZXJBbGxUYXNrc1NpbXBsZVZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza09ianMgPSB0YXNrc0xpc3QuZ2V0Q3VycmVudEFycigpO1xuICAgIHRhc2tPYmpzLmZvckVhY2goZWxlbWVudCA9PiBzaW1wbGVWaWV3Q2FyZChlbGVtZW50KSk7XG59XG5cbi8vY2xlYXJzIHRoZSBkaXYgY29udGFpbmluZyB0YXNrbGlzdCBhbmQgc2V0IHRoZW0gdXAgYWdhaW4gXG5jb25zdCByZWdlbmVyYXRlVGFza0xpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza0xpc3REaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdltjbGFzcz0ndGFza3NJbm5lcldyYXAnXVwiKTtcbiAgICB0YXNrTGlzdERpc3BsYXkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICByZW5kZXJBbGxUYXNrc1NpbXBsZVZpZXcoKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrc0xpc3QuZ2V0Q3VycmVudEFycigpKTtcbn1cblxuY29uc3QgbmV3VGFza1N1Ym1pdEV2ZW50SGFuZGxlciA9ICgpID0+IHtcbiAgICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbltpZD0nbmV3VGFza1N1Ym1pdCddXCIpO1xuICAgIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7cmVnZW5lcmF0ZVRhc2tMaXN0KCl9KTtcbn1cblxuLy9sYXRlciBvbiBpIHdpbGwgY29uc2lkZXIgdGhlIGNvbXBsaWNhdGlvbnMgYW5kIHJlZmFjdG9yIHRoZSBjb2RlXG4vLyB3aWxsIGJlIHVzZWQgdG8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSB0YXNrTGlzdCBjb250YWluZXIgXG5jb25zdCB0YXNrRm9jdXNlZFZpZXdDYXJkID0gKHRhc2tJZCkgPT4ge1xuICAgIGNvbnN0IFt0YXNrT2JqXSA9IHRhc2tzTGlzdC5nZXRUYXNrQnlJZCh0YXNrSWQpO1xuXG4gICAgY29uc3QgZm9jdXNWaWV3V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvY3VzVmlld1dyYXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb2N1c1ZpZXdXcmFwJyk7XG5cbiAgICBjb25zdCBmb2N1c1ZpZXdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9jdXNWaWV3Q2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZvY3VzVmlld0NhcmQnKTtcbiAgICBmb2N1c1ZpZXdDYXJkLnNldEF0dHJpYnV0ZSgnZGF0YS1pZGZvY3VzJywgdGFza0lkKVxuICAgIFxuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2xvc2VCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb2N1c1ZpZXdDbG9zZUJ0bicpXG4gICAgY2xvc2VCdG4uaW5uZXJIVE1MID0gKCd4Jyk7XG5cbiAgICBjb25zdCBmb2N1c1ZpZXdGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvY3VzVmlld0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdmb2N1c1ZpZXdGb3JtJyk7XG4gICAgXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIG5hbWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ2ZvY3VzVGFza05hbWUnKTtcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnZS5nLiwgUGF5IGludGVybmV0IGJpbGwnKTtcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGFza09iai5uYW1lKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCduYW1lJywgJ2ZvY3VzVGFza0Rlc2NyaXB0aW9uJyk7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0YXNrT2JqLmRlc2NyaXB0aW9uKVxuICAgIFxuXG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0QXJlYScpO1xuICAgIG5vdGVzLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgbm90ZXMuc2V0QXR0cmlidXRlKCduYW1lJywgJ2ZvY3VzVGFza05vdGVzJyk7XG4gICAgbm90ZXMuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdjb21tZW50cycpO1xuICAgIG5vdGVzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0YXNrT2JqLm5vdGVzKTtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICgnaW5wdXQnKTtcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdmb2N1c0R1ZURhdGUnKVxuICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0YXNrT2JqLmR1ZURhdGUpO1xuXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZm9jdXNEdWVEYXRlJylcbiAgICBkYXRlTGFiZWwuaW5uZXJIVE1MID0gJ0R1ZSBkYXRlOidcblxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVUYXNrLnNldEF0dHJpYnV0ZSgnaWQnLCdmb2N1c1ZpZXdEZWxldGUnKTtcbiAgICBkZWxldGVUYXNrLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgIGRlbGV0ZVRhc2suaW5uZXJIVE1MID0gJ2RlbGV0ZSc7XG5cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsJ2ZvY3VzVmlld1N1Ym1pdCcpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKTtcbiAgICBzdWJtaXQuaW5uZXJIVE1MID0gJ3NhdmUnO1xuICAgIFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9jdXNWaWV3V3JhcCk7XG5cbiAgICBmb2N1c1ZpZXdXcmFwLmFwcGVuZENoaWxkKGZvY3VzVmlld0NhcmQpO1xuXG4gICAgZm9jdXNWaWV3Q2FyZC5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gICAgZm9jdXNWaWV3Q2FyZC5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICBmb2N1c1ZpZXdDYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBmb2N1c1ZpZXdDYXJkLmFwcGVuZENoaWxkKG5vdGVzKTtcbiAgICBmb2N1c1ZpZXdDYXJkLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIGZvY3VzVmlld0NhcmQuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBmb2N1c1ZpZXdDYXJkLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2spO1xuICAgIGZvY3VzVmlld0NhcmQuYXBwZW5kQ2hpbGQoc3VibWl0KTtcbn1cblxuY29uc3QgZm9jdXNWaWV3RXZlbnRIYW5kbGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc0lubmVyV3JhcCcpO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBjb25zdCBjbGlja2VkVGFzayA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWlkXScpO1xuICAgICAgICBjb25zdCBkYXRhSWRWYWx1ZSA9IGNsaWNrZWRUYXNrLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICB0YXNrRm9jdXNlZFZpZXdDYXJkKGRhdGFJZFZhbHVlKTtcbiAgICB9KVxufVxuXG4vL3doYXQgZG8gaSBuZWVkIG5vdz8gaSBuZWVkIGZ1bmN0aW9ucyB0byBoYW5kbGUgdGhlIGV2ZW50cyBmb3IgZm9jdXMgdmlldy4gdGhpcyB3aWxsIG1lYW4gZGVsZXRpbmcsIGVkaXRpbmcsIGFuZCBjbG9zaW5nIHRoZSBmb2N1c2VkIHZpZXcuIGxldHMgc3RhcnQgd2l0aCBjbG9zaW5nLiBcbi8vY2xvc2UgXG5jb25zdCBmb2N1c1ZpZXdDbG9zZUV2ZW50cyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykhPT0gJ2ZvY3VzVmlld0Nsb3NlQnRuJyl7cmV0dXJufVxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGUudGFyZ2V0LmNsb3Nlc3QoJy5mb2N1c1ZpZXdXcmFwJykpO1xuICAgIH0pXG5cbiAgICAvL2lmIHRoZXkgY2xpY2sgb3V0c2lkZSB0aGUgZm9ybSwgY2xvc2VzIHRoZSBjYXJkLiBiLmMgdGhlIHdyYXBwZXIgc3BhbnMgd2hvbGUgcGFnZS5cbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgIT09ICdmb2N1c1ZpZXdXcmFwJyl7cmV0dXJufVxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2N1c1ZpZXdXcmFwJykpO1xuICAgIH0pXG59XG5cblxuLy9kZWxldGVzIHRoZSB0YXNrIGZyb20gc2ltcGxlVmlldyBpbiBkb21cbmNvbnN0IGZvY3VzVmlld0RlbGV0ZSA9IChldikgPT4ge1xuICAgIGNvbnN0IGRhdGFJZEVsZW1lbnQgPSBldi50YXJnZXQuY2xvc2VzdCgnW2RhdGEtaWRmb2N1c10nKTtcbiAgICBjb25zdCBkYXRhSWQgPSBkYXRhSWRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZGZvY3VzJyk7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc0lubmVyV3JhcCcpXG4gICAgLy9uZWVkcyB0byBkZWxldGUgZnJvbSBkb20sIGNhbiByZW1vdmUgY2hpbGQgYmFzZWQgb24gdGFza2lkXG4gICAgLy9ob3cgZWxzZT8gY2FuIGVtcHR5IGRvbSBhbmQgcmVsb2FkIHRhc2tMaXN0XG4gICAgY29uc3QgdGFyZ2V0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JcbiAgICAoYFtkYXRhLWlkPVwiJHtkYXRhSWR9XCJdYCk7XG4gICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YXJnZXRUYXNrKTtcbn1cblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ID0+IHtcbiAgICBpZiAoZXYudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKSAhPT0gJ2ZvY3VzVmlld0RlbGV0ZScpe3JldHVybn1cbiAgICBmb2N1c1ZpZXdEZWxldGUoZXYpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvY3VzVmlld1dyYXAnKSlcbn0pXG5cbi8vb2sgc28gd2UgbmVlZCBhIHN1Ym1pdCBidXR0b24gZXZlZW50IGxpc3RlbmVyIGZvciBkb20uIGkgdGhpbmsgc2luY2UgdGhlIHN0YXRlIHRhc2tMaXN0IGlzIHNvcnRlZCBjb3JyZWN0bHksIHdlIGNhbiBqdXN0IGRlbGV0ZSBhbmQgcmVsb2FkIHRoZSBkb20gd2l0aCB0aGUgZnVuY3Rpb24gbWFkZSB1cCB0b3AgZWFybGllciwgcGx1cyB3ZSB3YW50IHRvIGNsb3NlIHRoZSBmb2N1cyB2aWV3IGNhcmQuIHRoZXJlIHNob3VsZCBiZSBhIGZ1bmMgZm8gcnRoYXRcblxuLy9teSBjdXJyZW50dGFzayBzaSB0byB3aXJlIHVwIHRoZSBpbnB1dCBldmVudCBsaXN0ZW5lci4gdG8gZG8gdGhhdCBpIGZpcnN0IG5lZWQgdG8gZ3JhYiB0aGUgZWxlbWVudC4gc28gaSBuZWVkIHRvIGdpdmUgaXQgYSBjbGFzcy4gb3IgaSBjYW4gdXNlIGEgY29tYmluYXRvciBzZWxlY3RvciBcblxuXG4vLyBpXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXYgPT4ge1xuICAgIC8vaWYgaXQgd2Fzbid0IHRoZSBzdWJtaXQgYnV0dG9uIHJldHVybi4gd2UgY2FuIHRhcmdldCBzdWJtaXQgYnV0dG9uIHdpdGguLj8gYnV0dG9uW2lkPS4uLl1cbiAgICBpZihldi50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpIT09J2ZvY3VzVmlld1N1Ym1pdCcpe3JldHVybn1cbiAgICByZWdlbmVyYXRlVGFza0xpc3QoKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2N1c1ZpZXdXcmFwJykpXG59KVxuXG5cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBpZihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdE5hbWUnKSA9PSBudWxsKXtyZXR1cm59XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3ROYW1lJykpXG59KVxuZXhwb3J0IHtyZW5kZXJBbGxUYXNrc1NpbXBsZVZpZXcsIG5ld1Rhc2tTdWJtaXRFdmVudEhhbmRsZXIsIGZvY3VzVmlld0V2ZW50SGFuZGxlciwgZm9jdXNWaWV3Q2xvc2VFdmVudHN9IiwiY29uc3QgdGFza3NMaXN0ID0gKCgpID0+IHtcbiAgICBsZXQgdGFza3NBcnIgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICduYW1lNCcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2RlczQnLFxuICAgICAgICAgICAgZHVlRGF0ZTogJ2R1ZTQnLFxuICAgICAgICAgICAgaWQ6ICc0J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbmFtZTInLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdkZXMyJyxcbiAgICAgICAgICAgIGR1ZURhdGU6ICdkdWUyJyxcbiAgICAgICAgICAgIGlkOiAnMidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ25hbWUxJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZGVzMScsXG4gICAgICAgICAgICBkdWVEYXRlOiAnZHVlMScsXG4gICAgICAgICAgICBpZDogJzEnXG4gICAgICAgIH1cbiAgICBdO1xuICAgIGNvbnN0IGNyZWF0ZSA9IChuYW1lLCBkZXNjcmlwdGlvbiwgbm90ZSwgcHJvamVjdCA9ICdkZWZhdWx0JywgcHJpb3JpdHkgPSAnZGVmYXVsdCcsIGR1ZURhdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG5vdGUsXG4gICAgICAgICAgICBwcm9qZWN0LFxuICAgICAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICAgICBkdWVEYXRlXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZCA9IHRhc2tPYmogPT4gdGFza3NBcnIgPSBbLi4udGFza3NBcnIsIHRhc2tPYmpdO1xuXG4gICAgY29uc3QgcmVtb3ZlID0gdGFza0lkID0+IHtcbiAgICAgICAgdGFza3NBcnIgPSB0YXNrc0Fyci5maWx0ZXIodGFza09iaiA9PiB0YXNrT2JqLmlkICE9PSB0YXNrSWQpO1xuICAgIH1cbiAgICBjb25zdCBnZXRDdXJyZW50QXJyID0gKCkgPT4gWy4uLnRhc2tzQXJyXTtcblxuICAgIGNvbnN0IGdldFRhc2tCeUlkID0gaWQgPT4gdGFza3NBcnIuZmlsdGVyKHRhc2tPYmogPT4gaWQgPT09IHRhc2tPYmouaWQpO1xuXG4gICAgY29uc3Qgc29ydExpc3QgPSAoKSA9PiB7XG4gICAgICAgIHRhc2tzQXJyLnNvcnQgKChhLGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLmlkIDwgYi5pZCkge3JldHVybiAtMX1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlLFxuICAgICAgICBhZGQsXG4gICAgICAgIHJlbW92ZSxcbiAgICAgICAgZ2V0Q3VycmVudEFycixcbiAgICAgICAgZ2V0VGFza0J5SWQsXG4gICAgICAgIHNvcnRMaXN0XG4gICAgfTtcbn0pKCk7XG5cbi8vd2hhdHMgdGhlIHByb2JsZW0uIGhvdyBjYW4gd2UgZGVsZXRlIHRhc2tzIHdpdGhvdXQgYW4gaWQgc3lzdGVtPyB3ZSBjb3VsZCBnbyBieSBuYW1lIGJ1dCB3aGF0IGlmIHRoZXkgbWFrZSBkdXBsaWNhdGVzLiByZW1vdmUgYWJpbGl0eSB0byBtYWtlIGR1cGxpY2F0ZXM/IGxldHMgZmlyc3QgY29uc2lkZXIgdGhpcy4gd2hhdCBmZWF0dXJlcyBkbyB3ZSB3YW50PyB3aGVuIHRoZSB1c2VyIGNsaWNrcyBhIHByb2plY3QgaXQgc2hvdWxkIHNpbXBseSBzaG93IGFsbCB0aGUgdGFza3MgYXNzb2NpYXRlZCB3aXRoIGl0LiB0aGUgdXNlciBzaG91bGQgYWxzbyBiZSBhYmxlIHRvIGRlbGV0ZSBwcm9qZWN0cy4gYW5kIGVkaXQgdGhlIHByb2plY3RzIG5hbWUuIGluIHdoaWNoIGNhc2UgZWFjaCBwcm9qZWN0IGxhYmVsIHNob3VsZCBjb21lIHdpdGggMiBidXR0b25zLCBlZGl0IGFuZCBkZWxldGUuIGkgdGhpbmsgaSB3aWxsIG1ha2UgaXQgc28gdGhhdCBkdXBsaWNhdGUgcHJvamVjdCBuYW1lcyBjYW5ub3QgYmUgYWRkZWQuIGFuZCB0aGVuIHRhcmdldCBwcm9qZWN0cyBpbiBzdGF0ZSBhbmQgZG9tIHdpdGggdGhlIHByb2plY3QgbmFtZXNcbmNvbnN0IHRhc2tJZENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAgIGxldCBsaXN0ID0gW107XG4gICAgY29uc3QgY3JlYXRlSUQgPSAoKSA9PiB7XG4gICAgICAgIC8vaWYgbGlzdCBpcyBlbXB0eSxoaWdoZXN0SUQgc3RhcnQgYXQgLTEsIHNvIG5ld0lEIGJlZ2lucyBhdCAwXG4gICAgICAgIGNvbnN0IGhpZ2hlc3RJZFBsdXNPbmUgPSAoKGxpc3QubGVuZ3RoID09PSAwID8gLTEgOiBsaXN0W2xpc3QubGVuZ3RoLTFdKSArIDEpLnRvU3RyaW5nKCk7XG4gICAgICAgIGxpc3QucHVzaChoaWdoZXN0SWRQbHVzT25lKVxuICAgICAgICByZXR1cm4gKGhpZ2hlc3RJZFBsdXNPbmUpO1xuICAgIH07XG4gICAgY29uc3QgYXNzaWduSUQgPSBvYmogPT4gb2JqLmlkID0gY3JlYXRlSUQoKTtcbiAgICBcblxuICAgIGNvbnN0IHJlbW92ZUlEID0gKHRhc2tJRCkgPT4ge1xuICAgICAgICBsaXN0ID0gbGlzdC5maWx0ZXIoZWFjaElEID0+IGVhY2hJRCAhPT0gdGFza0lEKTtcbiAgICB9XG4gICAgY29uc3QgZ2V0TGlzdCA9ICgpID0+IHtjb25zb2xlLmxvZyhsaXN0KX1cbiAgICByZXR1cm4ge1xuICAgICAgICBhc3NpZ25JRCxcbiAgICAgICAgcmVtb3ZlSUQsXG4gICAgICAgIGdldExpc3RcbiAgICB9O1xufSkoKVxuXG5jb25zdCB0YXNrRXZlbnRGdW5jcyA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlVGFzayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFzayA9IGdldE5ld1Rhc2tGb3JtVmFsdWVzKCk7XG4gICAgICAgIGNvbnN0IHRhc2tPYmogPSB0YXNrc0xpc3QuY3JlYXRlKHRhc2submFtZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5ub3RlcywgJ2RlZmF1bHQnLCAnaW1wb3J0YW50JywgdGFzay5kdWVEYXRlKTtcbiAgICAgICAgdGFza0lkQ29udHJvbGxlci5hc3NpZ25JRCh0YXNrT2JqKTtcbiAgICAgICAgdGFza3NMaXN0LmFkZCh0YXNrT2JqKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlVGFzayA9ICh0YXNrSWQpID0+IHtcbiAgICAgICAgdGFza0lkQ29udHJvbGxlci5yZW1vdmVJRCh0YXNrSWQpO1xuICAgICAgICB0YXNrc0xpc3QucmVtb3ZlKHRhc2tJZCk7XG4gICAgfVxuICAgXG4gICAgLy90byBkZWxldGUgdGFza09iaiwgY3JlYXRlIG5ldyBvbmUsIGFuZCBrZWVwIHNhbWUgaWQgdmFsXG4gICAgLy9vbmUgdGhpbmcgaSB3b25kZXIgdGhvdWdoLCBpcyB3aWxsIHRoaXMgaW1wbGVtZW50YXRpb24gc2hvdyBrZWVwIHRoZSB0YXNrcyBpbiBvcmRlciBmb3IgdGhlIGRvbT8gbGV0cyBjb25zaWRlci4gbmV3IHRhc2tzIHdpbGwgbG9vayBhdCB0aGUgaWRMaXN0LCBhbmQgZ2V0IGFuIGlkIHRoYXRzIDErIHRoZSBoaWdoZXN0LiBlZGl0IHRhc2sgZG9lc24ndCB0b3VjaCB0aGUgaWRMaXN0LiBkZWxldGVUYXNrLCB3aWxsIGRlbGV0ZSB0aGUgaWQgb2YgY29ycmVzcG9uZGluZyB0YXNrLiBcbiAgICBjb25zdCBlZGl0VGFzayA9IHRhc2tJZCA9PiB7XG4gICAgICAgIGNvbnN0IFt0YXJnZXRUYXNrXSA9IHRhc2tzTGlzdC5nZXRUYXNrQnlJZCh0YXNrSWQpO1xuICAgICAgICAvL29rIHNvIHdlIGhhdmUgdGhlIHRhcmdldCB0YXNrIHN0b3JlZCwgc28gbm93IHdlIG5lZWQgdG8gZm9ybSBpbnB1dCB2YWx1ZXNcbiAgICAgICAgLy8gd2hhdCBhcmUgd2UgdHJ5aW5nIHRvIGRvPyB3ZSB3YW50IHRvIGNyZWF0ZSBhIG5ldyB0YXNrIG9iaiB0byByZXBsYWNlIHRoZSBvbGQgb25lLi4gd2hhdCBkb2VzIHRoaXMgbWVhbi4uPyB3ZSBoYXZlIHRvIHRhcmdldCB0aGUgb2xkVGFzayBhbmQgZGVsZXRlIGl0IGJ5IGlkLiB0aGVuIHdlIGNyZWF0ZSBhIG5ld1Rhc2sgYW5kIGFwcGVuZCBpdCB0byB0aGUgdGFzayBsaXN0LiBmb2xsb3dlZCBieSBzb3J0aW5nIHRoZSB0YXNrTGlzdFxuICAgICAgICB0YXJnZXRUYXNrLm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0nZm9jdXNUYXNrTmFtZSddXCIpLnZhbHVlO1xuXG4gICAgICAgIHRhcmdldFRhc2suZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0nZm9jdXNUYXNrRGVzY3JpcHRpb24nXVwiKS52YWx1ZTtcblxuICAgICAgICB0YXJnZXRUYXNrLm5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRleHRhcmVhW25hbWU9J2ZvY3VzVGFza05vdGVzJ11cIikudmFsdWU7XG5cbiAgICAgICAgdGFyZ2V0VGFzay5kdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J2ZvY3VzRHVlRGF0ZSddXCIpLnZhbHVlO1xuXG4gICAgICAgIHRhcmdldFRhc2suaWQgPSB0YXNrSWQ7XG5cbiAgICAgICAgY29uc3QgdXBkYXRlZFRhc2tPYmogPSB0YXNrc0xpc3QuY3JlYXRlKFxuICAgICAgICAgICAgdGFyZ2V0VGFzay5uYW1lLFxuICAgICAgICAgICAgdGFyZ2V0VGFzay5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRhcmdldFRhc2subm90ZXMsXG4gICAgICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgICAgICB0YXJnZXRUYXNrLmR1ZURhdGUsXG4gICAgICAgIClcbiAgICAgICAgLy93ZSBkb24ndCBuZWVkIHJlZmVyZW5jZSB0byBvbGRUYXNrIGFueW1vcmUgYW5kIHdlIGRvbid0IHdhbnQgZHVwbGljYXRlIHRhc2tzXG4gICAgICAgIHRhc2tzTGlzdC5yZW1vdmUodGFza0lkKTtcblxuICAgICAgICAvL3RoZSBuZXcgb2JqIHNob3VsZCBoYXZlIHNhbWUgaWQgYXMgb2xkXG4gICAgICAgIHVwZGF0ZWRUYXNrT2JqLmlkID0gdGFza0lkO1xuICAgICAgICB0YXNrc0xpc3QuYWRkKHVwZGF0ZWRUYXNrT2JqKVxuXG4gICAgICAgIC8vdGhlIG9yZGVyIG9mIHRhc2tMaXN0cyBuZWVkcyB0byBiZSBtYWludGFpbmVkIGZvciBkb21cbiAgICAgICAgdGFza3NMaXN0LnNvcnRMaXN0KCk7XG4gICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nICh0YXNrc0xpc3QuZ2V0Q3VycmVudEFycigpKVxuICAgICAgICBcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlVGFzayxcbiAgICAgICAgZGVsZXRlVGFzayxcbiAgICAgICAgZWRpdFRhc2tcbiAgICB9O1xufSkoKTtcbi8vIGNvbnN0IHByb2plY3RzTGlzdCA9ICgoKSA9PiB7XG4vLyAgICAgY29uc3QgYXJyTGlzdCA9IFtdO1xuLy8gICAgIGNvbnN0IGdldFByb2plY3RMaXN0ID0gKCkgPT4ge2NvbnNvbGUubG9nKCdyZWR1Y2UgdGFza0xpc3QgdG8gZ2V0IHByb2plY3ROYW1lcyB3L28gZHVwbGljYXRlcyBhbmQgcHVzaCBpbnRvIGFyckxpc3QnKX07XG4vLyAgICAgY29uc3QgZ2V0QXJyTGlzdCA9ICgpID0+IHsgY29uc29sZS5sb2coYXJyTGlzdCk7fVxuLy8gfSkoKTtcblxuXG4vL2RvbSBtZXRob2QgLSAgZ2V0VGFza0lEID0gIHJldHVybiBlbGVtZW50LnF1ZXJ5c2VsZWN0LmdldGF0dHJpYnV0ZShkYXRhLWlkOiB4KVxuXG5jb25zdCBnZXROZXdUYXNrRm9ybVZhbHVlcyA9ICgpID0+IHtcbiAgICByZXR1cm4gIHtcbiAgICAgICAgbmFtZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3Rhc2tOYW1lJ11cIikudmFsdWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ndGFza0Rlc2NyaXB0aW9uJ11cIikudmFsdWUsXG4gICAgICAgIG5vdGVzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGV4dEFyZWFbbmFtZT0ndGFza05vdGVzJ11cIikudmFsdWUsXG4gICAgICAgIGR1ZURhdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdkdWVEYXRlJ11cIikudmFsdWUsXG4gICAgfVxufVxuXG5jb25zdCBuZXdUYXNrRXZlbnRBZGRlciA9ICgpID0+IHtcbiAgICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbltpZD0nbmV3VGFza1N1Ym1pdCddXCIpO1xuICAgIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSd0YXNrTmFtZSddXCIpLnZhbHVlID09PSAnJyl7cmV0dXJufTtcbiAgICAgICAgdGFza0V2ZW50RnVuY3MuY3JlYXRlVGFzaygpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVtpZD0nbmV3VGFza0Zvcm0nXVwiKS5yZXNldCgpO1xuICAgIH0pO1xufVxuXG5jb25zdCBmb2N1c1ZpZXdEZWxldGVFdmVudCA9ICgpID0+IHtcblxufVxuXG4vL3RvIHJlbW92ZSB0YXNrIGFuZCBpZCBmcm9tIGxpc3RzXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgaWYoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpICE9PSAnZm9jdXNWaWV3RGVsZXRlJyl7cmV0dXJufVxuICAgIGNvbnN0IHRhcmdldFRhc2sgPSBlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1pZGZvY3VzXScpO1xuICAgIGNvbnN0IHRhcmdldElkID0gdGFyZ2V0VGFzay5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWRmb2N1cycpO1xuICAgIHRhc2tFdmVudEZ1bmNzLmRlbGV0ZVRhc2sodGFyZ2V0SWQpO1xuICAgIGNvbnNvbGUudGFibGUodGFza3NMaXN0LmdldEN1cnJlbnRBcnIoKSwgdGFza0lkQ29udHJvbGxlci5nZXRMaXN0KCkpO1xufSlcblxuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKSE9PSdmb2N1c1ZpZXdTdWJtaXQnKXtyZXR1cm59O1xuICAgIGNvbnN0IHRhcmdldFRhc2sgPSBlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1pZGZvY3VzXScpO1xuICAgIGNvbnN0IHRhcmdldElkID0gdGFyZ2V0VGFzay5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWRmb2N1cycpO1xuICAgIHRhc2tFdmVudEZ1bmNzLmVkaXRUYXNrKHRhcmdldElkKTtcbn0pXG5cblxuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XG4gICAgLy90byBydW4sIGl0IGhhcyB0byBiZSBhbiBpbnB1dCBlbGVtZW50IGluc2lkZSB0aGUgcHJvamVjdCBuYXYgXG4gICAgaWYoZS5rZXljb2RlICE9PSAxMyl7cmV0dXJufVxuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdE5hdicpID09IG51bGwgJiYgZS50YXJnZXQudGFnTmFtZSAhPT0gJ0lOUFVUJyl7cmV0dXJufVxuICAgIGNvbnN0IHByb2plY3RWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHByb2plY3RMaXN0LmFkZChwcm9qZWN0VmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0LmdldExpc3QoKSk7ICAgIFxufSlcblxuZXhwb3J0IHt0YXNrc0xpc3QsIHRhc2tFdmVudEZ1bmNzLCB0YXNrSWRDb250cm9sbGVyLCBnZXROZXdUYXNrRm9ybVZhbHVlcywgbmV3VGFza0V2ZW50QWRkZXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0YXNrQ29udHJvbGxlciwgdGFza3NMaXN0LCB0YXNrRXZlbnRGdW5jcywgdGFza0lkQ29udHJvbGxlciwgZ2V0TmV3VGFza0Zvcm1WYWx1ZXMsIG5ld1Rhc2tFdmVudEFkZGVyIH0gXG5mcm9tIFwiLi90YXNrcy1zdGF0ZVwiO1xuaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0cy1zdGF0ZVwiO1xuaW1wb3J0IHtpbml0aWFsUGFnZUxvYWR9IGZyb20gXCIuL2xhbmRpbmctcGFnZVwiO1xuaW1wb3J0IHsgbmV3VGFza1N1Ym1pdEV2ZW50SGFuZGxlciwgcmVuZGVyQWxsVGFza3NTaW1wbGVWaWV3LCBmb2N1c1ZpZXdFdmVudEhhbmRsZXIsIGZvY3VzVmlld0Nsb3NlRXZlbnRzfSBmcm9tIFwiLi90YXNrLXJlbmRlclwiO1xuaW1wb3J0IHsgbWFrZVByb2plY3RMaXN0LCByZW5kZXJQcm9qZWN0SXRlbXMgfSBmcm9tIFwiLi9wcm9qZWN0cy1yZW5kZXJcIjtcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuXG5pbml0aWFsUGFnZUxvYWQoKTtcbm5ld1Rhc2tFdmVudEFkZGVyKCk7XG5uZXdUYXNrU3VibWl0RXZlbnRIYW5kbGVyKCk7XG5mb2N1c1ZpZXdFdmVudEhhbmRsZXIoKTtcbmZvY3VzVmlld0Nsb3NlRXZlbnRzKCk7XG5yZW5kZXJBbGxUYXNrc1NpbXBsZVZpZXcoKTtcbnRhc2tzTGlzdC5nZXRDdXJyZW50QXJyKCk7XG5yZW5kZXJQcm9qZWN0SXRlbXMoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=