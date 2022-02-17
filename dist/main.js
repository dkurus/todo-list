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

//used to update project options in newtask form dynamically
const getProjectOptionElements = () => {
    const currentList = _projects_state__WEBPACK_IMPORTED_MODULE_1__.projectList.getList(); //should be array
    return currentList.map(listItem => {
        const currentItem = document.createElement('option');
        currentItem.setAttribute('value', listItem);
        currentItem.innerHTML = listItem;
        return currentItem;
    })
}

document.body.addEventListener('click', ev => {
    if (ev.target.getAttribute('id') !== 'focusViewDelete'){return}
    focusViewDelete(ev);
    document.body.removeChild(document.querySelector('.focusViewWrap'))
})

document.body.addEventListener('click', ev => {
    //if it wasn't the submit button return. we can target submit button with..? button[id=...]
    if(ev.target.getAttribute('id')!=='focusViewSubmit'){return}
    regenerateTaskList();
    document.body.removeChild(document.querySelector('.focusViewWrap'))
})

//i might need 2 events, one for the form submit, the other for the delete. well essentially they do similar things? in the end need a function that renders the list based on the updated state. state should always be correct. ok so i already have the code to generate the elements. just need to correct the eventlistener lets make 2 right now. the first one should be for adding new project button so that will be submit we can create oone function that does what? it should delete the old option elements. the getelements function will return an array of the elements based on the current list which should be updated. remains to be seen. with that array of elements. i need to append them to the list. after clearing the list
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsa0NBQWtDO0FBQ2xDLElBQUk7OztBQUdKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFO0FBQzFFO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7VUN0TEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHFCO0FBQzBCO0FBQ0E7QUFDaUY7QUFDeEQ7QUFDbEQ7OztBQUd0Qiw4REFBZTtBQUNmLCtEQUFpQjtBQUNqQix1RUFBeUI7QUFDekIsbUVBQXFCO0FBQ3JCLGtFQUFvQjtBQUNwQixzRUFBd0I7QUFDeEIsaUVBQXVCO0FBQ3ZCLG9FQUFrQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGFuZGluZy1wYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdHMtcmVuZGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdHMtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLXJlbmRlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2tzLXN0YXRlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGVudFdyYXBwZXJ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5wYWdlSGVhZGVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI0MSwgMTUsIDE1KTtcXG4gICAgZmxleC1iYXNpczogMTAwJTtcXG59XFxuXFxuLnByb2plY3ROYXYge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcXG59XFxuXFxuLm5ld1Rhc2tDYXJkID4gZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuW25hbWU9XFxcInRhc2tOYW1lXFxcIl0sXFxuW25hbWU9XFxcInRhc2tEZXNjcmlwdGlvblxcXCJdLCBcXG5bbmFtZT1cXFwidGFza05vdGVzXFxcIl0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2tTaW1wbGVDYXJkIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjExLDIxMSwyMTEpO1xcblxcbn1cXG5cXG4udGFza0NhcmRUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4udGFza0NhcmREZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnRhc2tDYXJkRHVlRGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uZm9jdXNWaWV3V3JhcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC41KTtcXG59XFxuXFxuLmZvY3VzVmlld0NhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIFxcbn1cXG5cXG4jcHJvamVjdFVsIHtcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW1XcmFwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG4ucHJvamVjdEl0ZW1XcmFwID4gYnV0dG9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTs7O0lBR0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksMENBQTBDOztBQUU5Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRlbnRXcmFwcGVye1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ucGFnZUhlYWRlciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNDEsIDE1LCAxNSk7XFxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0TmF2IHtcXG4gICAgcGFkZGluZy1yaWdodDogMTAwcHg7XFxufVxcblxcbi5uZXdUYXNrQ2FyZCA+IGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbltuYW1lPVxcXCJ0YXNrTmFtZVxcXCJdLFxcbltuYW1lPVxcXCJ0YXNrRGVzY3JpcHRpb25cXFwiXSwgXFxuW25hbWU9XFxcInRhc2tOb3Rlc1xcXCJdIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrU2ltcGxlQ2FyZCB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIxMSwyMTEsMjExKTtcXG5cXG59XFxuXFxuLnRhc2tDYXJkVGl0bGUge1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnRhc2tDYXJkRGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi50YXNrQ2FyZER1ZURhdGUge1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLmZvY3VzVmlld1dyYXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNSk7XFxufVxcblxcbi5mb2N1c1ZpZXdDYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBcXG59XFxuXFxuI3Byb2plY3RVbCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG59XFxuXFxuLnByb2plY3RJdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RJdGVtV3JhcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuLnByb2plY3RJdGVtV3JhcCA+IGJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB0YXNrSWRDb250cm9sbGVyfSBmcm9tIFwiLi90YXNrcy1zdGF0ZVwiO1xuaW1wb3J0IHsgbWFrZVByb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdHMtcmVuZGVyXCI7XG5pbXBvcnQgeyBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3Byb2plY3RzLXN0YXRlXCI7XG5cbmNvbnN0IGluaXRpYWxQYWdlTG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRXcmFwcGVyJyk7XG4gICAgXG5cbiAgICBjb25zdCBwYWdlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgcGFnZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdwYWdlSGVhZGVyJyk7XG4gICAgcGFnZUhlYWRlci5pbm5lckhUTUwgPSAndGhpcyBpcyB0aGUgaGVhZGVyJztcbiAgICAgIFxuICAgIGNvbnN0IHRhc2tDb250ZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIGNvbnN0IHRhc2tMaXN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgdGFza0xpc3RIZWFkZXIuaW5uZXJIVE1MID0gJ2FjdGl2ZSBwcm9qZWN0IE5hbWUnO1xuICAgIFxuICAgIGNvbnN0IHRhc2tMaXN0SW5uZXJXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0xpc3RJbm5lcldyYXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrc0lubmVyV3JhcCcpO1xuXG4gICAgY29uc3QgbmV3VGFza1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICBjb25zdCBuZXdUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3VGFza0J0bi5pbm5lckhUTUwgPSAoJ05ldyBUYXNrJyk7XG5cbiAgICBjb25zdCBuZXdUYXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Rhc2tDYXJkLmNsYXNzTGlzdC5hZGQoJ25ld1Rhc2tDYXJkJyk7XG4gICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgbmV3VGFza0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICduZXdUYXNrRm9ybScpO1xuICAgIFxuICAgIGNvbnN0IG5ld1Rhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIG5ld1Rhc2tOYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgbmV3VGFza05hbWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2tOYW1lJyk7XG4gICAgbmV3VGFza05hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdlLmcuLCBQYXkgaW50ZXJuZXQgYmlsbCcpO1xuICAgIG5ld1Rhc2tOYW1lLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG5cbiAgICBjb25zdCBuZXdUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgbmV3VGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgbmV3VGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrRGVzY3JpcHRpb24nKTtcbiAgICBuZXdUYXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdkZXNjcmlwdGlvbicpO1xuXG4gICAgY29uc3QgbmV3VGFza05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dEFyZWEnKVxuICAgIG5ld1Rhc2tOb3Rlcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIG5ld1Rhc2tOb3Rlcy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFza05vdGVzJyk7XG4gICAgbmV3VGFza05vdGVzLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnY29tbWVudHMnKTtcblxuICAgIGNvbnN0IHNlbGVjdFByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHNlbGVjdFByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3doaWNoUHJvamVjdCcpO1xuICAgIHNlbGVjdFByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnd2hpY2hQcm9qZWN0Jyk7XG5cbiAgICBjb25zdCBsYWJlbFByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWxQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdmb3InLCAnd2hpY2hQcm9qZWN0Jyk7XG4gICAgbGFiZWxQcm9qZWN0SW5wdXQuaW5uZXJIVE1MID0gJ1Byb2plY3Q6ICdcblxuICAgIGNvbnN0IGdldFByb2plY3RPcHRpb25FbGVtZW50cyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudExpc3QgPSBwcm9qZWN0TGlzdC5nZXRMaXN0KCk7IC8vc2hvdWxkIGJlIGFycmF5XG4gICAgICAgIHJldHVybiBjdXJyZW50TGlzdC5tYXAobGlzdEl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGN1cnJlbnRJdGVtLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBsaXN0SXRlbSk7XG4gICAgICAgICAgICBjdXJyZW50SXRlbS5pbm5lckhUTUwgPSBsaXN0SXRlbTtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50SXRlbTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoJ3NlbGVjdCcpO1xuICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eUlucHV0Jyk7XG5cbiAgICBjb25zdCBsYWJlbFByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsUHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eUlucHV0Jyk7XG4gICAgbGFiZWxQcmlvcml0eUlucHV0LmlubmVySFRNTCA9ICdQcmlvcml0eSdcblxuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9ucyA9IFtcbiAgICAgICAgJ25vbmUnLFxuICAgICAgICAncHJpb3JpdHkgMScsXG4gICAgICAgICdwcmlvcml0eSAyJyxcbiAgICAgICAgJ3ByaW9yaXR5IDMnXG4gICAgXVxuXG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb25FbGVtZW50cyA9IHByaW9yaXR5T3B0aW9ucy5tYXAoaXRlbU5hbWUgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGN1cnJlbnRPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGl0ZW1OYW1lKTtcbiAgICAgICAgY3VycmVudE9wdGlvbi5pbm5lckhUTUwgPSBpdGVtTmFtZTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRPcHRpb247XG4gICAgfSlcblxuXG4gICAgY29uc3QgbmV3VGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICgnaW5wdXQnKTtcbiAgICBuZXdUYXNrRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZHVlRGF0ZScpXG4gICAgbmV3VGFza0R1ZURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcblxuICAgIGNvbnN0IG5ld1Rhc2tEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIG5ld1Rhc2tEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlRGF0ZScpXG4gICAgbmV3VGFza0RhdGVMYWJlbC5pbm5lckhUTUwgPSAnRHVlIGRhdGU6J1xuXG4gICAgY29uc3QgbmV3VGFza1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1Rhc2tTdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsJ25ld1Rhc2tTdWJtaXQnKTtcbiAgICBuZXdUYXNrU3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpO1xuICAgIG5ld1Rhc2tTdWJtaXQuaW5uZXJIVE1MID0gJ3NhdmUnO1xuXG4gICAgY29uc3QgbmV3VGFza0NhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1Rhc2tDYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ25ld1Rhc2tDYW5jZWwnKTtcbiAgICBuZXdUYXNrQ2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgIG5ld1Rhc2tDYW5jZWxCdG4uaW5uZXJIVE1MID0gJ2NhbmNlbCc7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnRXcmFwcGVyKTtcblxuICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHBhZ2VIZWFkZXIpO1xuICAgIG1ha2VQcm9qZWN0TGlzdCgpO1xuICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tDb250ZW50V3JhcHBlcik7XG5cbiAgICBcbiAgICB0YXNrQ29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0xpc3RIZWFkZXIpO1xuICAgIHRhc2tDb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrTGlzdElubmVyV3JhcCk7XG4gICAgdGFza0NvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKG5ld1Rhc2tXcmFwcGVyKTtcblxuICAgIG5ld1Rhc2tXcmFwcGVyLmFwcGVuZENoaWxkKG5ld1Rhc2tCdG4pO1xuICAgIG5ld1Rhc2tXcmFwcGVyLmFwcGVuZENoaWxkKG5ld1Rhc2tDYXJkKTtcblxuICAgIFxuICAgIG5ld1Rhc2tDYXJkLmFwcGVuZENoaWxkKG5ld1Rhc2tGb3JtKVxuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKG5ld1Rhc2tOYW1lKTtcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChuZXdUYXNrRGVzY3JpcHRpb24pO1xuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKG5ld1Rhc2tOb3Rlcyk7XG4gICAgXG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQobGFiZWxQcm9qZWN0SW5wdXQpXG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0UHJvamVjdElucHV0KTtcbiAgICBnZXRQcm9qZWN0T3B0aW9uRWxlbWVudHMoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBzZWxlY3RQcm9qZWN0SW5wdXQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG5cblxuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKGxhYmVsUHJpb3JpdHlJbnB1dCk7XG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG4gICAgY29uc29sZS5sb2cocHJpb3JpdHlPcHRpb25FbGVtZW50cyk7XG4gICAgcHJpb3JpdHlPcHRpb25FbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT57XG4gICAgICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSlcblxuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKG5ld1Rhc2tEYXRlTGFiZWwpO1xuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKG5ld1Rhc2tEdWVEYXRlKTtcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChuZXdUYXNrU3VibWl0KTtcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChuZXdUYXNrQ2FuY2VsQnRuKTsgXG59XG5cbmV4cG9ydCB7aW5pdGlhbFBhZ2VMb2FkfVxuXG4vL29rIHNvIHdlIGFkZGVkIHByaW9yaXR5IGFuZCBwcm9qZWN0IGludG8gZG9tIGZvcm0uLiBub3cgd2UgbmVlZCB0byB1cGRhdGUgc3RhdGUuLiBvciB3ZSBjYW4gd29yayBvbiB0aGUgcHJvamVjdCBsaXN0LlxuLy9vayBwcm9qZWN0IGxpc3QgZmlyc3QsIGp1c3QgdGhlIGFiaWxpdHkgdG8gYWRkIG5ldyBwcm9qZWN0cyBhbmQgdXBkYXRlIHRoZSBuZXdUYXNrIGZvcm0uICIsImltcG9ydCB7IHRhc2tzTGlzdCB9IGZyb20gXCIuL3Rhc2tzLXN0YXRlXCI7XG5pbXBvcnQgeyBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3Byb2plY3RzLXN0YXRlXCI7XG5cbmNvbnN0IG1ha2VQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0c1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdE5hdicpO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3RzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdHNUaXRsZS5pbm5lckhUTUwgPSAndGhpcyBpcyB0aGUgcHJvamVjdCBsaXN0JztcblxuICAgIC8vc2hvdWxkIGFsc28gYmUgZHluYW1pYyBcbiAgICAvL25lZWQgYSBcIm5ld1Byb2plY3QgYnV0dG9uXCJcbiAgICAvLyBuZWVkIHRvIGRpc3BsYXkgZGVmYXVsdCBwcm9qZWN0XG4gICAgY29uc3QgcHJvamVjdERpc3BsYXlMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBwcm9qZWN0RGlzcGxheUxpc3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0VWwnKVxuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIG5ld1Byb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3UHJvamVjdEZvcm0nKTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3UHJvamVjdFN1Ym1pdCcpO1xuICAgIG5ld1Byb2plY3RCdG4uaW5uZXJIVE1MID0gJysnO1xuXG4gICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZUhvbGRlcicsICdhZGQgYSBuZXcgcHJvamVjdCcpO1xuICAgIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Byb2plY3RzSW5wdXQnKTtcbiAgIFxuICAgIFxuICAgIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRXcmFwcGVyJyk7XG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNXcmFwcGVyKTtcblxuICAgIHByb2plY3RzV3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0c1RpdGxlKTtcbiAgICBwcm9qZWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpc3BsYXlMaXN0KTtcbiAgICBwcm9qZWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pO1xuICAgIFxuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ0bik7XG59XG5cblxuXG5jb25zdCByZW5kZXJQcm9qZWN0SXRlbXMgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0VWwnKVxuICAgIGNvbnN0IGFsbEN1cnJlbnRQcm9qZWN0cyA9IHByb2plY3RMaXN0LmdldExpc3QoKTtcbiAgICAvL3doYXQgYW0gaSB0cnluYSBkb28/IGkgd2FudCBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBwcm9qZWN0IHN0cmluZyBpdGVtLCBhbmQgdXNlcyBpdCB0byBjcmVhdGUgYSBsaSBlbGVtZW50IGFuZCBhcHBlbmQgaXQuXG4gICAgY29uc3QgcmVuZGVyUHJvamVjdEl0ZW0gPSBwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaXN0SXRlbS5pbm5lckhUTUwgPSBwcm9qZWN0O1xuICAgICAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3RJdGVtJylcbiAgICAgICAgcmV0dXJuIGxpc3RJdGVtO1xuICAgIH1cbiAgICBjb25zdCBwcm9qZWN0UmVtb3ZlQnV0dG9uID0gcHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICByZW1vdmVCdG4uaW5uZXJIVE1MID0gJ3gnO1xuICAgICAgICByZW1vdmVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3ROYW1lJywgcHJvamVjdCk7XG4gICAgICAgIHJldHVybiByZW1vdmVCdG47XG4gICAgfVxuXG4gICAgYWxsQ3VycmVudFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBpZiAocHJvamVjdCA9PT0gJ0RlZmF1bHQnKXtcbiAgICAgICAgY29uc3QgaXRlbVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBpdGVtV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3RJdGVtV3JhcCcpO1xuICAgICAgICBpdGVtV3JhcHBlci5hcHBlbmRDaGlsZChyZW5kZXJQcm9qZWN0SXRlbShwcm9qZWN0KSk7XG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVdyYXBwZXIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBpdGVtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBpdGVtV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3RJdGVtV3JhcCcpO1xuICAgICAgaXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQocmVuZGVyUHJvamVjdEl0ZW0ocHJvamVjdCkpO1xuICAgICAgaXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdFJlbW92ZUJ1dHRvbihwcm9qZWN0KSk7XG4gICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1XcmFwcGVyKTtcbiAgICB9KVxufVxuXG5jb25zdCBkZWxldGVQcm9qZWN0SXRlbXMgPSAoKSA9PiB7IFxuICAgIGNvbnN0IHByb2plY3RVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0VWwnKTtcbiAgICBwcm9qZWN0VWwuaW5uZXJIVE1MID0gJyc7XG59XG5cblxuXG5cbi8vIGhvdyBzaG91bGQgd2UgY3JlYXRlIGFuZCBkaXNwbGF5IHRoZSBwcm9qZWN0IGxpc3Q/IHdlIHdpbGwgaGF2ZSB0byBiZSBhYmxlIHRvIGRlbGV0ZSB0aGVtIGFzIHdlbGwgYW5kIGhhbmRsZSB0aG9zZSBjYXNlcy4gcHJvYmFibHkgc2ltaWxpYXIgdG8gdGhlIHdheSB3ZSBoYW5kbGVkIHRhc2tzLiB0aGF0IG1lYW5zIHRoZSBwcm9qZWN0cyB3aWxsIG5lZWQgYW4gaWQgYXMgd2VsbC4uXG5cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKGUudGFyZ2V0LmNsb3Nlc3QoJ2Zvcm0nKS5nZXRBdHRyaWJ1dGUoJ2lkJykgIT09ICduZXdQcm9qZWN0Rm9ybScpe3JldHVybn1cbiAgICBkZWxldGVQcm9qZWN0SXRlbXMoKTtcbiAgICByZW5kZXJQcm9qZWN0SXRlbXMoKTtcbiAgICBlLnRhcmdldC5jbG9zZXN0KCdmb3JtJykucmVzZXQoKTsgXG59KVxuXG4vLyBob3cgc2hvdWxkIGkgZGVsZXRlLi4uIGkgdGhpbmsgYWN0dWFsbHksIGp1c3QgdXNlIHJlZ2VuZXJhdGUgdGFzayBsaXN0PyBhZnRlciBjbGVhcmluZyB0aGUgZG9tP1xuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGlmKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0TmFtZScpID09IG51bGwpe3JldHVybn1cbiAgICBkZWxldGVQcm9qZWN0SXRlbXMoKTtcbiAgICByZW5kZXJQcm9qZWN0SXRlbXMoKTtcbn0pXG5cblxuXG5cblxuXG5leHBvcnR7bWFrZVByb2plY3RMaXN0LCByZW5kZXJQcm9qZWN0SXRlbXN9IiwiY29uc3QgcHJvamVjdExpc3QgPSAoKCkgPT57XG4gICAgbGV0IGxpc3QgPSBbXG4gICAgICAgICdEZWZhdWx0JyxcbiAgICAgICAgJ2NhbGN1bHVzJyxcbiAgICAgICAgJ2NvZGluZycsXG4gICAgICAgICdjaG9yZXMnXG4gICAgXTtcbiAgICBjb25zdCBhZGQgPSBwcm9qZWN0TmFtZSA9PiBsaXN0ID0gWy4uLmxpc3QsIHByb2plY3ROYW1lXTtcbiAgICBjb25zdCByZW1vdmUgPSBwcm9qZWN0TmFtZSA9PiBsaXN0ID0gbGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBwcm9qZWN0TmFtZSlcbiAgICBjb25zdCBnZXRMaXN0ID0gKCkgPT4gWy4uLmxpc3RdO1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZCxcbiAgICAgICAgcmVtb3ZlLFxuICAgICAgICBnZXRMaXN0XG4gICAgfVxufSkoKTtcblxuY29uc3QgcHJvamVjdElkSGFuZGxlciA9ICgoKT0+IHtcblxufSkoKVxuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZihlLnRhcmdldC5jbG9zZXN0KCdmb3JtJykuZ2V0QXR0cmlidXRlKCdpZCcpICE9PSAnbmV3UHJvamVjdEZvcm0nKXtyZXR1cm59XG4gICAgY29uc3QgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Byb2plY3RzSW5wdXQnKTtcbiAgICBpZiAobmV3UHJvamVjdElucHV0LnZhbHVlID09PSAnJyl7cmV0dXJufTtcbiAgICBpZiAocHJvamVjdExpc3QuZ2V0TGlzdCgpLmluY2x1ZGVzKG5ld1Byb2plY3RJbnB1dC52YWx1ZSkpe1xuICAgICAgICBhbGVydCgndGhhdCBwcm9qZWN0IGFscmVhZHkgZXhpc3RzIScpXG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBwcm9qZWN0TGlzdC5hZGQobmV3UHJvamVjdElucHV0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdC5nZXRMaXN0KCkpO1xufSlcblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGlmKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0TmFtZScpID09IG51bGwpe3JldHVybn1cbiAgICBjb25zdCB0YXJnZXRQcm9qZWN0ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3ROYW1lJyk7XG4gICAgcHJvamVjdExpc3QucmVtb3ZlKHRhcmdldFByb2plY3QpXG59IClcblxuXG5leHBvcnQge3Byb2plY3RMaXN0fTsiLCJpbXBvcnQgeyB0YXNrc0xpc3QgfSBmcm9tIFwiLi90YXNrcy1zdGF0ZVwiO1xuaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0cy1zdGF0ZVwiO1xuXG5jb25zdCBzaW1wbGVWaWV3Q2FyZCA9ICh0YXNrT2JqKSA9PntcbiAgICBjb25zdCB0YXNrc1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3NJbm5lcldyYXAnKVxuXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrU2ltcGxlQ2FyZCcpO1xuICAgIGNhcmQuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgdGFza09iai5pZClcblxuICAgIC8vbGV0cyBzYXkgYSB1c2VyIGNsaWNrcyB0aGUgbWFya0NvbXBsZXRlIGJ1dHRvbi4gc28gZXZlbnQudGFyZ2V0LmNsYXNzID09IG1hcmtDb21wbGV0ZUJ0biBcbiAgICBjb25zdCBtYXJrQ29tcGxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtYXJrQ29tcGxldGVCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYXJrQ29tcGxldGVCdG4nKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFza0NhcmRUaXRsZScpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IHRhc2tPYmoubmFtZTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFza0NhcmREZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IHRhc2tPYmouZGVzY3JpcHRpb247XG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrQ2FyZER1ZURhdGUnKTtcbiAgICBkdWVEYXRlLmlubmVySFRNTCA9IHRhc2tPYmouZHVlRGF0ZTtcblxuICAgIHRhc2tzV3JhcHBlci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xufVxuXG4vL3JlbmRlciBhbGwgdGFza3Mgd2lsbCB1c2Ugc2ltcGxldmlld2NhcmQgYW5kIGl0ZXJhdGUgb3ZlciBhbGwgdGhlIHRhc2sgb2Jqc1xuY29uc3QgcmVuZGVyQWxsVGFza3NTaW1wbGVWaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tPYmpzID0gdGFza3NMaXN0LmdldEN1cnJlbnRBcnIoKTtcbiAgICB0YXNrT2Jqcy5mb3JFYWNoKGVsZW1lbnQgPT4gc2ltcGxlVmlld0NhcmQoZWxlbWVudCkpO1xufVxuXG4vL2NsZWFycyB0aGUgZGl2IGNvbnRhaW5pbmcgdGFza2xpc3QgYW5kIHNldCB0aGVtIHVwIGFnYWluIFxuY29uc3QgcmVnZW5lcmF0ZVRhc2tMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tMaXN0RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXZbY2xhc3M9J3Rhc2tzSW5uZXJXcmFwJ11cIik7XG4gICAgdGFza0xpc3REaXNwbGF5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgcmVuZGVyQWxsVGFza3NTaW1wbGVWaWV3KCk7XG4gICAgY29uc29sZS5sb2codGFza3NMaXN0LmdldEN1cnJlbnRBcnIoKSk7XG59XG5cbmNvbnN0IG5ld1Rhc2tTdWJtaXRFdmVudEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25baWQ9J25ld1Rhc2tTdWJtaXQnXVwiKTtcbiAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge3JlZ2VuZXJhdGVUYXNrTGlzdCgpfSk7XG59XG5cbi8vbGF0ZXIgb24gaSB3aWxsIGNvbnNpZGVyIHRoZSBjb21wbGljYXRpb25zIGFuZCByZWZhY3RvciB0aGUgY29kZVxuLy8gd2lsbCBiZSB1c2VkIHRvIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgdGFza0xpc3QgY29udGFpbmVyIFxuY29uc3QgdGFza0ZvY3VzZWRWaWV3Q2FyZCA9ICh0YXNrSWQpID0+IHtcbiAgICBjb25zdCBbdGFza09ial0gPSB0YXNrc0xpc3QuZ2V0VGFza0J5SWQodGFza0lkKTtcblxuICAgIGNvbnN0IGZvY3VzVmlld1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb2N1c1ZpZXdXcmFwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9jdXNWaWV3V3JhcCcpO1xuXG4gICAgY29uc3QgZm9jdXNWaWV3Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvY3VzVmlld0NhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb2N1c1ZpZXdDYXJkJyk7XG4gICAgZm9jdXNWaWV3Q2FyZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWRmb2N1cycsIHRhc2tJZClcbiAgICBcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9jdXNWaWV3Q2xvc2VCdG4nKVxuICAgIGNsb3NlQnRuLmlubmVySFRNTCA9ICgneCcpO1xuXG4gICAgY29uc3QgZm9jdXNWaWV3Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb2N1c1ZpZXdGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9jdXNWaWV3Rm9ybScpO1xuICAgIFxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICdmb2N1c1Rhc2tOYW1lJyk7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2UuZy4sIFBheSBpbnRlcm5ldCBiaWxsJyk7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIG5hbWUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRhc2tPYmoubmFtZSlcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnbmFtZScsICdmb2N1c1Rhc2tEZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnZGVzY3JpcHRpb24nKTtcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGFza09iai5kZXNjcmlwdGlvbilcbiAgICBcblxuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dEFyZWEnKTtcbiAgICBub3Rlcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIG5vdGVzLnNldEF0dHJpYnV0ZSgnbmFtZScsICdmb2N1c1Rhc2tOb3RlcycpO1xuICAgIG5vdGVzLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnY29tbWVudHMnKTtcbiAgICBub3Rlcy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGFza09iai5ub3Rlcyk7XG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoJ2lucHV0Jyk7XG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZm9jdXNEdWVEYXRlJylcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGFza09iai5kdWVEYXRlKTtcblxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2ZvY3VzRHVlRGF0ZScpXG4gICAgZGF0ZUxhYmVsLmlubmVySFRNTCA9ICdEdWUgZGF0ZTonXG5cbiAgICBjb25zdCBkZWxldGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlVGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywnZm9jdXNWaWV3RGVsZXRlJyk7XG4gICAgZGVsZXRlVGFzay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcbiAgICBkZWxldGVUYXNrLmlubmVySFRNTCA9ICdkZWxldGUnO1xuXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCdmb2N1c1ZpZXdTdWJtaXQnKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0Jyk7XG4gICAgc3VibWl0LmlubmVySFRNTCA9ICdzYXZlJztcbiAgICBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvY3VzVmlld1dyYXApO1xuXG4gICAgZm9jdXNWaWV3V3JhcC5hcHBlbmRDaGlsZChmb2N1c1ZpZXdDYXJkKTtcblxuICAgIGZvY3VzVmlld0NhcmQuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICAgIGZvY3VzVmlld0NhcmQuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgZm9jdXNWaWV3Q2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgZm9jdXNWaWV3Q2FyZC5hcHBlbmRDaGlsZChub3Rlcyk7XG4gICAgZm9jdXNWaWV3Q2FyZC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICBmb2N1c1ZpZXdDYXJkLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZm9jdXNWaWV3Q2FyZC5hcHBlbmRDaGlsZChkZWxldGVUYXNrKTtcbiAgICBmb2N1c1ZpZXdDYXJkLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG59XG5cbmNvbnN0IGZvY3VzVmlld0V2ZW50SGFuZGxlciA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3NJbm5lcldyYXAnKTtcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgY29uc3QgY2xpY2tlZFRhc2sgPSBlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1pZF0nKTtcbiAgICAgICAgY29uc3QgZGF0YUlkVmFsdWUgPSBjbGlja2VkVGFzay5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgdGFza0ZvY3VzZWRWaWV3Q2FyZChkYXRhSWRWYWx1ZSk7XG4gICAgfSlcbn1cblxuLy93aGF0IGRvIGkgbmVlZCBub3c/IGkgbmVlZCBmdW5jdGlvbnMgdG8gaGFuZGxlIHRoZSBldmVudHMgZm9yIGZvY3VzIHZpZXcuIHRoaXMgd2lsbCBtZWFuIGRlbGV0aW5nLCBlZGl0aW5nLCBhbmQgY2xvc2luZyB0aGUgZm9jdXNlZCB2aWV3LiBsZXRzIHN0YXJ0IHdpdGggY2xvc2luZy4gXG4vL2Nsb3NlIFxuY29uc3QgZm9jdXNWaWV3Q2xvc2VFdmVudHMgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpIT09ICdmb2N1c1ZpZXdDbG9zZUJ0bicpe3JldHVybn1cbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlLnRhcmdldC5jbG9zZXN0KCcuZm9jdXNWaWV3V3JhcCcpKTtcbiAgICB9KVxuXG4gICAgLy9pZiB0aGV5IGNsaWNrIG91dHNpZGUgdGhlIGZvcm0sIGNsb3NlcyB0aGUgY2FyZC4gYi5jIHRoZSB3cmFwcGVyIHNwYW5zIHdob2xlIHBhZ2UuXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpICE9PSAnZm9jdXNWaWV3V3JhcCcpe3JldHVybn1cbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9jdXNWaWV3V3JhcCcpKTtcbiAgICB9KVxufVxuXG5cbi8vZGVsZXRlcyB0aGUgdGFzayBmcm9tIHNpbXBsZVZpZXcgaW4gZG9tXG5jb25zdCBmb2N1c1ZpZXdEZWxldGUgPSAoZXYpID0+IHtcbiAgICBjb25zdCBkYXRhSWRFbGVtZW50ID0gZXYudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWlkZm9jdXNdJyk7XG4gICAgY29uc3QgZGF0YUlkID0gZGF0YUlkRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWRmb2N1cycpO1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3NJbm5lcldyYXAnKVxuICAgIC8vbmVlZHMgdG8gZGVsZXRlIGZyb20gZG9tLCBjYW4gcmVtb3ZlIGNoaWxkIGJhc2VkIG9uIHRhc2tpZFxuICAgIC8vaG93IGVsc2U/IGNhbiBlbXB0eSBkb20gYW5kIHJlbG9hZCB0YXNrTGlzdFxuICAgIGNvbnN0IHRhcmdldFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yXG4gICAgKGBbZGF0YS1pZD1cIiR7ZGF0YUlkfVwiXWApO1xuICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFyZ2V0VGFzayk7XG59XG5cbi8vdXNlZCB0byB1cGRhdGUgcHJvamVjdCBvcHRpb25zIGluIG5ld3Rhc2sgZm9ybSBkeW5hbWljYWxseVxuY29uc3QgZ2V0UHJvamVjdE9wdGlvbkVsZW1lbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gcHJvamVjdExpc3QuZ2V0TGlzdCgpOyAvL3Nob3VsZCBiZSBhcnJheVxuICAgIHJldHVybiBjdXJyZW50TGlzdC5tYXAobGlzdEl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBjdXJyZW50SXRlbS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgbGlzdEl0ZW0pO1xuICAgICAgICBjdXJyZW50SXRlbS5pbm5lckhUTUwgPSBsaXN0SXRlbTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRJdGVtO1xuICAgIH0pXG59XG5cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldiA9PiB7XG4gICAgaWYgKGV2LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJykgIT09ICdmb2N1c1ZpZXdEZWxldGUnKXtyZXR1cm59XG4gICAgZm9jdXNWaWV3RGVsZXRlKGV2KTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2N1c1ZpZXdXcmFwJykpXG59KVxuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXYgPT4ge1xuICAgIC8vaWYgaXQgd2Fzbid0IHRoZSBzdWJtaXQgYnV0dG9uIHJldHVybi4gd2UgY2FuIHRhcmdldCBzdWJtaXQgYnV0dG9uIHdpdGguLj8gYnV0dG9uW2lkPS4uLl1cbiAgICBpZihldi50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpIT09J2ZvY3VzVmlld1N1Ym1pdCcpe3JldHVybn1cbiAgICByZWdlbmVyYXRlVGFza0xpc3QoKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2N1c1ZpZXdXcmFwJykpXG59KVxuXG4vL2kgbWlnaHQgbmVlZCAyIGV2ZW50cywgb25lIGZvciB0aGUgZm9ybSBzdWJtaXQsIHRoZSBvdGhlciBmb3IgdGhlIGRlbGV0ZS4gd2VsbCBlc3NlbnRpYWxseSB0aGV5IGRvIHNpbWlsYXIgdGhpbmdzPyBpbiB0aGUgZW5kIG5lZWQgYSBmdW5jdGlvbiB0aGF0IHJlbmRlcnMgdGhlIGxpc3QgYmFzZWQgb24gdGhlIHVwZGF0ZWQgc3RhdGUuIHN0YXRlIHNob3VsZCBhbHdheXMgYmUgY29ycmVjdC4gb2sgc28gaSBhbHJlYWR5IGhhdmUgdGhlIGNvZGUgdG8gZ2VuZXJhdGUgdGhlIGVsZW1lbnRzLiBqdXN0IG5lZWQgdG8gY29ycmVjdCB0aGUgZXZlbnRsaXN0ZW5lciBsZXRzIG1ha2UgMiByaWdodCBub3cuIHRoZSBmaXJzdCBvbmUgc2hvdWxkIGJlIGZvciBhZGRpbmcgbmV3IHByb2plY3QgYnV0dG9uIHNvIHRoYXQgd2lsbCBiZSBzdWJtaXQgd2UgY2FuIGNyZWF0ZSBvb25lIGZ1bmN0aW9uIHRoYXQgZG9lcyB3aGF0PyBpdCBzaG91bGQgZGVsZXRlIHRoZSBvbGQgb3B0aW9uIGVsZW1lbnRzLiB0aGUgZ2V0ZWxlbWVudHMgZnVuY3Rpb24gd2lsbCByZXR1cm4gYW4gYXJyYXkgb2YgdGhlIGVsZW1lbnRzIGJhc2VkIG9uIHRoZSBjdXJyZW50IGxpc3Qgd2hpY2ggc2hvdWxkIGJlIHVwZGF0ZWQuIHJlbWFpbnMgdG8gYmUgc2Vlbi4gd2l0aCB0aGF0IGFycmF5IG9mIGVsZW1lbnRzLiBpIG5lZWQgdG8gYXBwZW5kIHRoZW0gdG8gdGhlIGxpc3QuIGFmdGVyIGNsZWFyaW5nIHRoZSBsaXN0XG5jb25zdCBkZWxldGVQcm9qZWN0SW5wdXRzID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3doaWNoUHJvamVjdCcpLmlubmVySFRNTCA9ICcnO1xuXG5jb25zdCBsb2FkUHJvamVjdElucHV0cyA9ICgpID0+IHtcbiAgICBjb25zdCBzZWxlY3RQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2hpY2hQcm9qZWN0JylcbiAgICBnZXRQcm9qZWN0T3B0aW9uRWxlbWVudHMoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBzZWxlY3RQcm9qZWN0SW5wdXQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG59XG5cbi8vdG8gdXBkYXRlIHRoZSBwcm9qZWN0IGxpc3Qgb24gYWRkaXRpb24gaW4gbmV3IHRhc2sgZm9ybVxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldiA9PiB7XG4gICAgaWYoZXYudGFyZ2V0LmNsb3Nlc3QoJ2Zvcm0nKS5nZXRBdHRyaWJ1dGUoJ2lkJykgIT09ICduZXdQcm9qZWN0Rm9ybScpe3JldHVybn1cbiAgICBkZWxldGVQcm9qZWN0SW5wdXRzKCk7XG4gICAgbG9hZFByb2plY3RJbnB1dHMoKTsgIFxufSApXG5cbi8vdG8gdXBkYXRlIHByb2plY3QgbGlzdCBvbiBkZWxldGUgaW4gbmV3IHRhc2sgZm9ybVxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ID0+IHtcbiAgICBpZihldi50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3RuYW1lJykgPT0gbnVsbCl7cmV0dXJufVxuICAgIGRlbGV0ZVByb2plY3RJbnB1dHMoKTtcbiAgICBsb2FkUHJvamVjdElucHV0cygpOyAgICBcbn0gKVxuXG5cblxuZXhwb3J0IHtyZW5kZXJBbGxUYXNrc1NpbXBsZVZpZXcsIG5ld1Rhc2tTdWJtaXRFdmVudEhhbmRsZXIsIGZvY3VzVmlld0V2ZW50SGFuZGxlciwgZm9jdXNWaWV3Q2xvc2VFdmVudHN9IiwiY29uc3QgdGFza3NMaXN0ID0gKCgpID0+IHtcbiAgICBsZXQgdGFza3NBcnIgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICduYW1lNCcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2RlczQnLFxuICAgICAgICAgICAgZHVlRGF0ZTogJ2R1ZTQnLFxuICAgICAgICAgICAgaWQ6ICc0J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbmFtZTInLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdkZXMyJyxcbiAgICAgICAgICAgIGR1ZURhdGU6ICdkdWUyJyxcbiAgICAgICAgICAgIGlkOiAnMidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ25hbWUxJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZGVzMScsXG4gICAgICAgICAgICBkdWVEYXRlOiAnZHVlMScsXG4gICAgICAgICAgICBpZDogJzEnXG4gICAgICAgIH1cbiAgICBdO1xuICAgIGNvbnN0IGNyZWF0ZSA9IChuYW1lLCBkZXNjcmlwdGlvbiwgbm90ZSwgcHJvamVjdCwgcHJpb3JpdHksIGR1ZURhdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG5vdGUsXG4gICAgICAgICAgICBwcm9qZWN0LFxuICAgICAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICAgICBkdWVEYXRlXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZCA9IHRhc2tPYmogPT4gdGFza3NBcnIgPSBbLi4udGFza3NBcnIsIHRhc2tPYmpdO1xuXG4gICAgY29uc3QgcmVtb3ZlID0gdGFza0lkID0+IHtcbiAgICAgICAgdGFza3NBcnIgPSB0YXNrc0Fyci5maWx0ZXIodGFza09iaiA9PiB0YXNrT2JqLmlkICE9PSB0YXNrSWQpO1xuICAgIH1cbiAgICBjb25zdCBnZXRDdXJyZW50QXJyID0gKCkgPT4gWy4uLnRhc2tzQXJyXTtcblxuICAgIGNvbnN0IGdldFRhc2tCeUlkID0gaWQgPT4gdGFza3NBcnIuZmlsdGVyKHRhc2tPYmogPT4gaWQgPT09IHRhc2tPYmouaWQpO1xuXG4gICAgY29uc3Qgc29ydExpc3QgPSAoKSA9PiB7XG4gICAgICAgIHRhc2tzQXJyLnNvcnQgKChhLGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLmlkIDwgYi5pZCkge3JldHVybiAtMX1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlLFxuICAgICAgICBhZGQsXG4gICAgICAgIHJlbW92ZSxcbiAgICAgICAgZ2V0Q3VycmVudEFycixcbiAgICAgICAgZ2V0VGFza0J5SWQsXG4gICAgICAgIHNvcnRMaXN0XG4gICAgfTtcbn0pKCk7XG5cbi8vd2hhdHMgdGhlIHByb2JsZW0uIGhvdyBjYW4gd2UgZGVsZXRlIHRhc2tzIHdpdGhvdXQgYW4gaWQgc3lzdGVtPyB3ZSBjb3VsZCBnbyBieSBuYW1lIGJ1dCB3aGF0IGlmIHRoZXkgbWFrZSBkdXBsaWNhdGVzLiByZW1vdmUgYWJpbGl0eSB0byBtYWtlIGR1cGxpY2F0ZXM/IGxldHMgZmlyc3QgY29uc2lkZXIgdGhpcy4gd2hhdCBmZWF0dXJlcyBkbyB3ZSB3YW50PyB3aGVuIHRoZSB1c2VyIGNsaWNrcyBhIHByb2plY3QgaXQgc2hvdWxkIHNpbXBseSBzaG93IGFsbCB0aGUgdGFza3MgYXNzb2NpYXRlZCB3aXRoIGl0LiB0aGUgdXNlciBzaG91bGQgYWxzbyBiZSBhYmxlIHRvIGRlbGV0ZSBwcm9qZWN0cy4gYW5kIGVkaXQgdGhlIHByb2plY3RzIG5hbWUuIGluIHdoaWNoIGNhc2UgZWFjaCBwcm9qZWN0IGxhYmVsIHNob3VsZCBjb21lIHdpdGggMiBidXR0b25zLCBlZGl0IGFuZCBkZWxldGUuIGkgdGhpbmsgaSB3aWxsIG1ha2UgaXQgc28gdGhhdCBkdXBsaWNhdGUgcHJvamVjdCBuYW1lcyBjYW5ub3QgYmUgYWRkZWQuIGFuZCB0aGVuIHRhcmdldCBwcm9qZWN0cyBpbiBzdGF0ZSBhbmQgZG9tIHdpdGggdGhlIHByb2plY3QgbmFtZXNcbmNvbnN0IHRhc2tJZENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAgIGxldCBsaXN0ID0gW107XG4gICAgY29uc3QgY3JlYXRlSUQgPSAoKSA9PiB7XG4gICAgICAgIC8vaWYgbGlzdCBpcyBlbXB0eSxoaWdoZXN0SUQgc3RhcnQgYXQgLTEsIHNvIG5ld0lEIGJlZ2lucyBhdCAwXG4gICAgICAgIGNvbnN0IGhpZ2hlc3RJZFBsdXNPbmUgPSAoKGxpc3QubGVuZ3RoID09PSAwID8gLTEgOiBsaXN0W2xpc3QubGVuZ3RoLTFdKSArIDEpLnRvU3RyaW5nKCk7XG4gICAgICAgIGxpc3QucHVzaChoaWdoZXN0SWRQbHVzT25lKVxuICAgICAgICByZXR1cm4gKGhpZ2hlc3RJZFBsdXNPbmUpO1xuICAgIH07XG4gICAgY29uc3QgYXNzaWduSUQgPSBvYmogPT4gb2JqLmlkID0gY3JlYXRlSUQoKTtcbiAgICBcblxuICAgIGNvbnN0IHJlbW92ZUlEID0gKHRhc2tJRCkgPT4ge1xuICAgICAgICBsaXN0ID0gbGlzdC5maWx0ZXIoZWFjaElEID0+IGVhY2hJRCAhPT0gdGFza0lEKTtcbiAgICB9XG4gICAgY29uc3QgZ2V0TGlzdCA9ICgpID0+IHtjb25zb2xlLmxvZyhsaXN0KX1cbiAgICByZXR1cm4ge1xuICAgICAgICBhc3NpZ25JRCxcbiAgICAgICAgcmVtb3ZlSUQsXG4gICAgICAgIGdldExpc3RcbiAgICB9O1xufSkoKVxuXG5jb25zdCB0YXNrRXZlbnRGdW5jcyA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlVGFzayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFzayA9IGdldE5ld1Rhc2tGb3JtVmFsdWVzKCk7XG4gICAgICAgIGNvbnN0IHRhc2tPYmogPSB0YXNrc0xpc3QuY3JlYXRlKHRhc2submFtZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5ub3RlcywgdGFzay5wcm9qZWN0LCB0YXNrLnByaW9yaXR5LCB0YXNrLmR1ZURhdGUpO1xuICAgICAgICB0YXNrSWRDb250cm9sbGVyLmFzc2lnbklEKHRhc2tPYmopO1xuICAgICAgICB0YXNrc0xpc3QuYWRkKHRhc2tPYmopO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWxldGVUYXNrID0gKHRhc2tJZCkgPT4ge1xuICAgICAgICB0YXNrSWRDb250cm9sbGVyLnJlbW92ZUlEKHRhc2tJZCk7XG4gICAgICAgIHRhc2tzTGlzdC5yZW1vdmUodGFza0lkKTtcbiAgICB9XG4gICBcbiAgICAvL3RvIGRlbGV0ZSB0YXNrT2JqLCBjcmVhdGUgbmV3IG9uZSwgYW5kIGtlZXAgc2FtZSBpZCB2YWxcbiAgICAvL29uZSB0aGluZyBpIHdvbmRlciB0aG91Z2gsIGlzIHdpbGwgdGhpcyBpbXBsZW1lbnRhdGlvbiBzaG93IGtlZXAgdGhlIHRhc2tzIGluIG9yZGVyIGZvciB0aGUgZG9tPyBsZXRzIGNvbnNpZGVyLiBuZXcgdGFza3Mgd2lsbCBsb29rIGF0IHRoZSBpZExpc3QsIGFuZCBnZXQgYW4gaWQgdGhhdHMgMSsgdGhlIGhpZ2hlc3QuIGVkaXQgdGFzayBkb2Vzbid0IHRvdWNoIHRoZSBpZExpc3QuIGRlbGV0ZVRhc2ssIHdpbGwgZGVsZXRlIHRoZSBpZCBvZiBjb3JyZXNwb25kaW5nIHRhc2suIFxuICAgIGNvbnN0IGVkaXRUYXNrID0gdGFza0lkID0+IHtcbiAgICAgICAgY29uc3QgW3RhcmdldFRhc2tdID0gdGFza3NMaXN0LmdldFRhc2tCeUlkKHRhc2tJZCk7XG4gICAgICAgIC8vb2sgc28gd2UgaGF2ZSB0aGUgdGFyZ2V0IHRhc2sgc3RvcmVkLCBzbyBub3cgd2UgbmVlZCB0byBmb3JtIGlucHV0IHZhbHVlc1xuICAgICAgICAvLyB3aGF0IGFyZSB3ZSB0cnlpbmcgdG8gZG8/IHdlIHdhbnQgdG8gY3JlYXRlIGEgbmV3IHRhc2sgb2JqIHRvIHJlcGxhY2UgdGhlIG9sZCBvbmUuLiB3aGF0IGRvZXMgdGhpcyBtZWFuLi4/IHdlIGhhdmUgdG8gdGFyZ2V0IHRoZSBvbGRUYXNrIGFuZCBkZWxldGUgaXQgYnkgaWQuIHRoZW4gd2UgY3JlYXRlIGEgbmV3VGFzayBhbmQgYXBwZW5kIGl0IHRvIHRoZSB0YXNrIGxpc3QuIGZvbGxvd2VkIGJ5IHNvcnRpbmcgdGhlIHRhc2tMaXN0XG4gICAgICAgIHRhcmdldFRhc2submFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdmb2N1c1Rhc2tOYW1lJ11cIikudmFsdWU7XG5cbiAgICAgICAgdGFyZ2V0VGFzay5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdmb2N1c1Rhc2tEZXNjcmlwdGlvbiddXCIpLnZhbHVlO1xuXG4gICAgICAgIHRhcmdldFRhc2subm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGV4dGFyZWFbbmFtZT0nZm9jdXNUYXNrTm90ZXMnXVwiKS52YWx1ZTtcblxuICAgICAgICB0YXJnZXRUYXNrLmR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0nZm9jdXNEdWVEYXRlJ11cIikudmFsdWU7XG5cbiAgICAgICAgdGFyZ2V0VGFzay5pZCA9IHRhc2tJZDtcblxuICAgICAgICBjb25zdCB1cGRhdGVkVGFza09iaiA9IHRhc2tzTGlzdC5jcmVhdGUoXG4gICAgICAgICAgICB0YXJnZXRUYXNrLm5hbWUsXG4gICAgICAgICAgICB0YXJnZXRUYXNrLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGFyZ2V0VGFzay5ub3RlcyxcbiAgICAgICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgICAgIHRhcmdldFRhc2suZHVlRGF0ZSxcbiAgICAgICAgKVxuICAgICAgICAvL3dlIGRvbid0IG5lZWQgcmVmZXJlbmNlIHRvIG9sZFRhc2sgYW55bW9yZSBhbmQgd2UgZG9uJ3Qgd2FudCBkdXBsaWNhdGUgdGFza3NcbiAgICAgICAgdGFza3NMaXN0LnJlbW92ZSh0YXNrSWQpO1xuXG4gICAgICAgIC8vdGhlIG5ldyBvYmogc2hvdWxkIGhhdmUgc2FtZSBpZCBhcyBvbGRcbiAgICAgICAgdXBkYXRlZFRhc2tPYmouaWQgPSB0YXNrSWQ7XG4gICAgICAgIHRhc2tzTGlzdC5hZGQodXBkYXRlZFRhc2tPYmopXG5cbiAgICAgICAgLy90aGUgb3JkZXIgb2YgdGFza0xpc3RzIG5lZWRzIHRvIGJlIG1haW50YWluZWQgZm9yIGRvbVxuICAgICAgICB0YXNrc0xpc3Quc29ydExpc3QoKTtcbiAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2cgKHRhc2tzTGlzdC5nZXRDdXJyZW50QXJyKCkpXG4gICAgICAgIFxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVUYXNrLFxuICAgICAgICBkZWxldGVUYXNrLFxuICAgICAgICBlZGl0VGFza1xuICAgIH07XG59KSgpO1xuLy8gY29uc3QgcHJvamVjdHNMaXN0ID0gKCgpID0+IHtcbi8vICAgICBjb25zdCBhcnJMaXN0ID0gW107XG4vLyAgICAgY29uc3QgZ2V0UHJvamVjdExpc3QgPSAoKSA9PiB7Y29uc29sZS5sb2coJ3JlZHVjZSB0YXNrTGlzdCB0byBnZXQgcHJvamVjdE5hbWVzIHcvbyBkdXBsaWNhdGVzIGFuZCBwdXNoIGludG8gYXJyTGlzdCcpfTtcbi8vICAgICBjb25zdCBnZXRBcnJMaXN0ID0gKCkgPT4geyBjb25zb2xlLmxvZyhhcnJMaXN0KTt9XG4vLyB9KSgpO1xuXG5cbi8vZG9tIG1ldGhvZCAtICBnZXRUYXNrSUQgPSAgcmV0dXJuIGVsZW1lbnQucXVlcnlzZWxlY3QuZ2V0YXR0cmlidXRlKGRhdGEtaWQ6IHgpXG5cbmNvbnN0IGdldE5ld1Rhc2tGb3JtVmFsdWVzID0gKCkgPT4ge1xuICAgIHJldHVybiAge1xuICAgICAgICBuYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ndGFza05hbWUnXVwiKS52YWx1ZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSd0YXNrRGVzY3JpcHRpb24nXVwiKS52YWx1ZSxcbiAgICAgICAgbm90ZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0QXJlYVtuYW1lPSd0YXNrTm90ZXMnXVwiKS52YWx1ZSxcbiAgICAgICAgcHJvamVjdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3aGljaFByb2plY3RcIikudmFsdWUsXG4gICAgICAgIHByaW9yaXR5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5SW5wdXRcIikudmFsdWUsXG4gICAgICAgIGR1ZURhdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdkdWVEYXRlJ11cIikudmFsdWVcbiAgICB9XG59XG5cbmNvbnN0IG5ld1Rhc2tFdmVudEFkZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uW2lkPSduZXdUYXNrU3VibWl0J11cIik7XG4gICAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3Rhc2tOYW1lJ11cIikudmFsdWUgPT09ICcnKXtyZXR1cm59O1xuICAgICAgICB0YXNrRXZlbnRGdW5jcy5jcmVhdGVUYXNrKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtW2lkPSduZXdUYXNrRm9ybSddXCIpLnJlc2V0KCk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2codGFza3NMaXN0LmdldEN1cnJlbnRBcnIoKSk7XG59XG5cblxuLy90byByZW1vdmUgdGFzayBhbmQgaWQgZnJvbSBsaXN0c1xuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGlmKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKSAhPT0gJ2ZvY3VzVmlld0RlbGV0ZScpe3JldHVybn1cbiAgICBjb25zdCB0YXJnZXRUYXNrID0gZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtaWRmb2N1c10nKTtcbiAgICBjb25zdCB0YXJnZXRJZCA9IHRhcmdldFRhc2suZ2V0QXR0cmlidXRlKCdkYXRhLWlkZm9jdXMnKTtcbiAgICB0YXNrRXZlbnRGdW5jcy5kZWxldGVUYXNrKHRhcmdldElkKTtcbn0pXG5cblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJykhPT0nZm9jdXNWaWV3U3VibWl0Jyl7cmV0dXJufTtcbiAgICBjb25zdCB0YXJnZXRUYXNrID0gZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtaWRmb2N1c10nKTtcbiAgICBjb25zdCB0YXJnZXRJZCA9IHRhcmdldFRhc2suZ2V0QXR0cmlidXRlKCdkYXRhLWlkZm9jdXMnKTtcbiAgICB0YXNrRXZlbnRGdW5jcy5lZGl0VGFzayh0YXJnZXRJZCk7XG59KVxuXG5cbmV4cG9ydCB7dGFza3NMaXN0LCB0YXNrRXZlbnRGdW5jcywgdGFza0lkQ29udHJvbGxlciwgZ2V0TmV3VGFza0Zvcm1WYWx1ZXMsIG5ld1Rhc2tFdmVudEFkZGVyfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgdGFza0NvbnRyb2xsZXIsIHRhc2tzTGlzdCwgdGFza0V2ZW50RnVuY3MsIHRhc2tJZENvbnRyb2xsZXIsIGdldE5ld1Rhc2tGb3JtVmFsdWVzLCBuZXdUYXNrRXZlbnRBZGRlciB9IFxuZnJvbSBcIi4vdGFza3Mtc3RhdGVcIjtcbmltcG9ydCB7IHByb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdHMtc3RhdGVcIjtcbmltcG9ydCB7aW5pdGlhbFBhZ2VMb2FkfSBmcm9tIFwiLi9sYW5kaW5nLXBhZ2VcIjtcbmltcG9ydCB7IG5ld1Rhc2tTdWJtaXRFdmVudEhhbmRsZXIsIHJlbmRlckFsbFRhc2tzU2ltcGxlVmlldywgZm9jdXNWaWV3RXZlbnRIYW5kbGVyLCBmb2N1c1ZpZXdDbG9zZUV2ZW50c30gZnJvbSBcIi4vdGFzay1yZW5kZXJcIjtcbmltcG9ydCB7IG1ha2VQcm9qZWN0TGlzdCwgcmVuZGVyUHJvamVjdEl0ZW1zIH0gZnJvbSBcIi4vcHJvamVjdHMtcmVuZGVyXCI7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cblxuaW5pdGlhbFBhZ2VMb2FkKCk7XG5uZXdUYXNrRXZlbnRBZGRlcigpO1xubmV3VGFza1N1Ym1pdEV2ZW50SGFuZGxlcigpO1xuZm9jdXNWaWV3RXZlbnRIYW5kbGVyKCk7XG5mb2N1c1ZpZXdDbG9zZUV2ZW50cygpO1xucmVuZGVyQWxsVGFza3NTaW1wbGVWaWV3KCk7XG50YXNrc0xpc3QuZ2V0Q3VycmVudEFycigpO1xucmVuZGVyUHJvamVjdEl0ZW1zKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9