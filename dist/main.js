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
___CSS_LOADER_EXPORT___.push([module.id, ".contentWrapper{\n    border: 2px solid black;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.pageHeader {\n    border: 2px solid rgb(241, 15, 15);\n    flex-basis: 100%;\n}\n\n.projectNav {\n    padding-right: 100px;\n}\n\n.newTaskCard > form {\n    display: flex;\n    flex-direction: column;\n}\n\n.taskSimpleCard {\n    border-bottom: 1px solid rgba(211,211,211);\n\n}\n\n.taskCardTitle {\n    font-size: large;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.taskCardDescription {\n    font-size: medium;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.taskCardDueDate {\n    font-size: small;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.focusViewWrap {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    background-color: rgba(0,0,0,.5);\n}\n\n.focusViewCard {\n    display: flex;\n    flex-direction: column;\n    height: fit-content;\n    margin: auto;\n    \n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,kCAAkC;IAClC,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,0CAA0C;;AAE9C;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;;AAEhB","sourcesContent":[".contentWrapper{\n    border: 2px solid black;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.pageHeader {\n    border: 2px solid rgb(241, 15, 15);\n    flex-basis: 100%;\n}\n\n.projectNav {\n    padding-right: 100px;\n}\n\n.newTaskCard > form {\n    display: flex;\n    flex-direction: column;\n}\n\n.taskSimpleCard {\n    border-bottom: 1px solid rgba(211,211,211);\n\n}\n\n.taskCardTitle {\n    font-size: large;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.taskCardDescription {\n    font-size: medium;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.taskCardDueDate {\n    font-size: small;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.focusViewWrap {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    background-color: rgba(0,0,0,.5);\n}\n\n.focusViewCard {\n    display: flex;\n    flex-direction: column;\n    height: fit-content;\n    margin: auto;\n    \n}"],"sourceRoot":""}]);
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
/* harmony import */ var _state_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state-logic */ "./src/state-logic.js");


const initialPageLoad = () => {
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('contentWrapper');

    const pageHeader = document.createElement('header');
    pageHeader.classList.add('pageHeader');
    pageHeader.innerHTML = 'this is the header';
    
    const projectsWrapper = document.createElement('div');
    projectsWrapper.classList.add('projectNav');
    
    const projectsNavBar = document.createElement('nav');
    projectsNavBar.innerHTML = 'this is the project list';
    
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
    contentWrapper.appendChild(projectsWrapper);
    contentWrapper.appendChild(taskContentWrapper);

    projectsWrapper.appendChild(projectsNavBar);
    
    taskContentWrapper.appendChild(taskListHeader);
    taskContentWrapper.appendChild(taskListInnerWrap);
    taskContentWrapper.appendChild(newTaskWrapper);

    newTaskWrapper.appendChild(newTaskBtn);
    newTaskWrapper.appendChild(newTaskCard);

    
    newTaskCard.appendChild(newTaskForm)
    newTaskForm.appendChild(newTaskName);
    newTaskForm.appendChild(newTaskDescription);
    newTaskForm.appendChild(newTaskNotes);
    newTaskForm.appendChild(newTaskDateLabel);
    newTaskForm.appendChild(newTaskDueDate);
    newTaskForm.appendChild(newTaskSubmit);
    newTaskForm.appendChild(newTaskCancelBtn);  
}





/***/ }),

/***/ "./src/state-logic.js":
/*!****************************!*\
  !*** ./src/state-logic.js ***!
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

    const add = (taskObj) => {
        tasksArr.push(taskObj);
    };

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

const taskIdController = (() => {
    let list = ['0','1'];
    const createID = () => {
        //if list is empty,highestID start at -1, so newID begins at 0
        const highestIdPlusOne = ((list.length === 0 ? -1 : list[list.length-1]) + 1).toString();
        list.push(highestIdPlusOne)
        return (highestIdPlusOne);
    };
    const assignID = obj => obj.id = createID();
    
    const manualAssignment = (taskId, obj) => obj.id = taskId;

    const removeID = (taskID) => {
        list = list.filter(eachID => eachID !== taskID);
    }
    const getList = () => {console.log(list)}
    return {
        assignID,
        removeID,
        getList,
        manualAssignment
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
   
    const editTask = taskId => {
        tasksList.remove(taskId);
        
        const [targetTask] = tasksList.getTaskById(taskId);
        //ok so we have the target task stored, so now we need to form input values
        // what are we trying to do? we want to create a new task obj to replace the old one.. what does this mean..? we have to target the oldTask and delete it by id. then we create a newTask and append it to the task list. followed by sorting the taskList
        targetTask.name = document.querySelector("input[name='focusTaskName']").value;

        targetTask.description = document.querySelector("input[name='focusTaskDescription']").value;

        targetTask.notes = document.querySelector("input[name='focusTaskNotes']").value;

        targetTask.dueDate = document.querySelector("input[name='focusDueDate']").value;

        targetTask.id = taskId;

        const updatedTaskObj = tasksList.createTask(
            targetTask.name,
            targetTask.description,
            targetTask.notes,
            'default',
            'default',
            targetTask.dueDate,
        )

        taskIdController.manualAssignment(targetTask.id, updatedTaskObj);

        tasksList.add(updatedTask)


        console.log (targetTask.name);
        console.log(taskId)
        
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
/* harmony import */ var _state_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state-logic */ "./src/state-logic.js");


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
    const taskObjs = _state_logic__WEBPACK_IMPORTED_MODULE_0__.tasksList.getCurrentArr();
    taskObjs.forEach(element => simpleViewCard(element));
}

//clears the div containing tasklist and set them up again 
const regenerateTaskList = () => {
    const taskListDisplay = document.querySelector("div[class='tasksInnerWrap']");
    taskListDisplay.innerHTML = "";
    renderAllTasksSimpleView();
    console.log(_state_logic__WEBPACK_IMPORTED_MODULE_0__.tasksList.getCurrentArr());
}

const newTaskSubmitEventHandler = () => {
    const saveBtn = document.querySelector("button[id='newTaskSubmit']");
    saveBtn.addEventListener('click', () => {regenerateTaskList()});
}

//later on i will consider the complications and refactor the code
// will be used to add an event listener to the taskList container 
const taskFocusedViewCard = (taskId) => {
    const [taskObj] = _state_logic__WEBPACK_IMPORTED_MODULE_0__.tasksList.getTaskById(taskId);

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
/* harmony import */ var _state_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state-logic */ "./src/state-logic.js");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-page */ "./src/landing-page.js");
/* harmony import */ var _task_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-render */ "./src/task-render.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");





(0,_landing_page__WEBPACK_IMPORTED_MODULE_1__.initialPageLoad)();
(0,_state_logic__WEBPACK_IMPORTED_MODULE_0__.newTaskEventAdder)();
(0,_task_render__WEBPACK_IMPORTED_MODULE_2__.newTaskSubmitEventHandler)();
(0,_task_render__WEBPACK_IMPORTED_MODULE_2__.focusViewEventHandler)();
(0,_task_render__WEBPACK_IMPORTED_MODULE_2__.focusViewCloseEvents)();
(0,_task_render__WEBPACK_IMPORTED_MODULE_2__.renderAllTasksSimpleView)();
_state_logic__WEBPACK_IMPORTED_MODULE_0__.tasksList.getCurrentArr();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUZ4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsa0NBQWtDO0FBQ2xDLElBQUk7OztBQUdKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEU7QUFDMUU7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hMeUM7O0FBRTFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsaUVBQXVCO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpRUFBdUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QyxxQkFBcUI7QUFDbEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLCtEQUFxQjs7QUFFM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQTs7QUFFQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7OztVQ25LRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTHFCO0FBQzBCO0FBQ2lGO0FBQzFHOztBQUV0Qiw4REFBZTtBQUNmLCtEQUFpQjtBQUNqQix1RUFBeUI7QUFDekIsbUVBQXFCO0FBQ3JCLGtFQUFvQjtBQUNwQixzRUFBd0I7QUFDeEIsaUVBQXVCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9sYW5kaW5nLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdGF0ZS1sb2dpYy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2stcmVuZGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGVudFdyYXBwZXJ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5wYWdlSGVhZGVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI0MSwgMTUsIDE1KTtcXG4gICAgZmxleC1iYXNpczogMTAwJTtcXG59XFxuXFxuLnByb2plY3ROYXYge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcXG59XFxuXFxuLm5ld1Rhc2tDYXJkID4gZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNrU2ltcGxlQ2FyZCB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIxMSwyMTEsMjExKTtcXG5cXG59XFxuXFxuLnRhc2tDYXJkVGl0bGUge1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnRhc2tDYXJkRGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi50YXNrQ2FyZER1ZURhdGUge1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLmZvY3VzVmlld1dyYXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNSk7XFxufVxcblxcbi5mb2N1c1ZpZXdDYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDBDQUEwQzs7QUFFOUM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7O0FBRWhCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250ZW50V3JhcHBlcntcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnBhZ2VIZWFkZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjQxLCAxNSwgMTUpO1xcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdE5hdiB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4ubmV3VGFza0NhcmQgPiBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2tTaW1wbGVDYXJkIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjExLDIxMSwyMTEpO1xcblxcbn1cXG5cXG4udGFza0NhcmRUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4udGFza0NhcmREZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnRhc2tDYXJkRHVlRGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uZm9jdXNWaWV3V3JhcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC41KTtcXG59XFxuXFxuLmZvY3VzVmlld0NhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgdGFza0lkQ29udHJvbGxlciB9IGZyb20gXCIuL3N0YXRlLWxvZ2ljXCI7XG5cbmNvbnN0IGluaXRpYWxQYWdlTG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRXcmFwcGVyJyk7XG5cbiAgICBjb25zdCBwYWdlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgcGFnZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdwYWdlSGVhZGVyJyk7XG4gICAgcGFnZUhlYWRlci5pbm5lckhUTUwgPSAndGhpcyBpcyB0aGUgaGVhZGVyJztcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0c1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0c1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdE5hdicpO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3RzTmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgcHJvamVjdHNOYXZCYXIuaW5uZXJIVE1MID0gJ3RoaXMgaXMgdGhlIHByb2plY3QgbGlzdCc7XG4gICAgXG4gICAgY29uc3QgdGFza0NvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgY29uc3QgdGFza0xpc3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICB0YXNrTGlzdEhlYWRlci5pbm5lckhUTUwgPSAnYWN0aXZlIHByb2plY3QgTmFtZSc7XG4gICAgXG4gICAgY29uc3QgdGFza0xpc3RJbm5lcldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrTGlzdElubmVyV3JhcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2tzSW5uZXJXcmFwJyk7XG5cbiAgICBjb25zdCBuZXdUYXNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIGNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdUYXNrQnRuLmlubmVySFRNTCA9ICgnTmV3IFRhc2snKTtcblxuICAgIGNvbnN0IG5ld1Rhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3VGFza0NhcmQuY2xhc3NMaXN0LmFkZCgnbmV3VGFza0NhcmQnKTtcbiAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBuZXdUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Rhc2tGb3JtJyk7XG4gICAgXG4gICAgY29uc3QgbmV3VGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgbmV3VGFza05hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBuZXdUYXNrTmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFza05hbWUnKTtcbiAgICBuZXdUYXNrTmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2UuZy4sIFBheSBpbnRlcm5ldCBiaWxsJyk7XG4gICAgbmV3VGFza05hbWUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcblxuICAgIGNvbnN0IG5ld1Rhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBuZXdUYXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBuZXdUYXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2tEZXNjcmlwdGlvbicpO1xuICAgIG5ld1Rhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2Rlc2NyaXB0aW9uJyk7XG5cbiAgICBjb25zdCBuZXdUYXNrTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0QXJlYScpXG4gICAgbmV3VGFza05vdGVzLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgbmV3VGFza05vdGVzLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrTm90ZXMnKTtcbiAgICBuZXdUYXNrTm90ZXMuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdjb21tZW50cycpO1xuXG4gICAgY29uc3QgbmV3VGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICgnaW5wdXQnKTtcbiAgICBuZXdUYXNrRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZHVlRGF0ZScpXG4gICAgbmV3VGFza0R1ZURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcblxuICAgIGNvbnN0IG5ld1Rhc2tEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIG5ld1Rhc2tEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlRGF0ZScpXG4gICAgbmV3VGFza0RhdGVMYWJlbC5pbm5lckhUTUwgPSAnRHVlIGRhdGU6J1xuXG4gICAgY29uc3QgbmV3VGFza1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1Rhc2tTdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsJ25ld1Rhc2tTdWJtaXQnKTtcbiAgICBuZXdUYXNrU3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpO1xuICAgIG5ld1Rhc2tTdWJtaXQuaW5uZXJIVE1MID0gJ3NhdmUnO1xuXG4gICAgY29uc3QgbmV3VGFza0NhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1Rhc2tDYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ25ld1Rhc2tDYW5jZWwnKTtcbiAgICBuZXdUYXNrQ2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgIG5ld1Rhc2tDYW5jZWxCdG4uaW5uZXJIVE1MID0gJ2NhbmNlbCc7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnRXcmFwcGVyKTtcblxuICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHBhZ2VIZWFkZXIpO1xuICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RzV3JhcHBlcik7XG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRlbnRXcmFwcGVyKTtcblxuICAgIHByb2plY3RzV3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0c05hdkJhcik7XG4gICAgXG4gICAgdGFza0NvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tMaXN0SGVhZGVyKTtcbiAgICB0YXNrQ29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0xpc3RJbm5lcldyYXApO1xuICAgIHRhc2tDb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChuZXdUYXNrV3JhcHBlcik7XG5cbiAgICBuZXdUYXNrV3JhcHBlci5hcHBlbmRDaGlsZChuZXdUYXNrQnRuKTtcbiAgICBuZXdUYXNrV3JhcHBlci5hcHBlbmRDaGlsZChuZXdUYXNrQ2FyZCk7XG5cbiAgICBcbiAgICBuZXdUYXNrQ2FyZC5hcHBlbmRDaGlsZChuZXdUYXNrRm9ybSlcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChuZXdUYXNrTmFtZSk7XG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQobmV3VGFza0Rlc2NyaXB0aW9uKTtcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChuZXdUYXNrTm90ZXMpO1xuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKG5ld1Rhc2tEYXRlTGFiZWwpO1xuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKG5ld1Rhc2tEdWVEYXRlKTtcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChuZXdUYXNrU3VibWl0KTtcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChuZXdUYXNrQ2FuY2VsQnRuKTsgIFxufVxuXG5leHBvcnQge2luaXRpYWxQYWdlTG9hZH1cblxuIiwiY29uc3QgdGFza3NMaXN0ID0gKCgpID0+IHtcbiAgICBsZXQgdGFza3NBcnIgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICduYW1lNCcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2RlczQnLFxuICAgICAgICAgICAgZHVlRGF0ZTogJ2R1ZTQnLFxuICAgICAgICAgICAgaWQ6ICc0J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbmFtZTInLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdkZXMyJyxcbiAgICAgICAgICAgIGR1ZURhdGU6ICdkdWUyJyxcbiAgICAgICAgICAgIGlkOiAnMidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ25hbWUxJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZGVzMScsXG4gICAgICAgICAgICBkdWVEYXRlOiAnZHVlMScsXG4gICAgICAgICAgICBpZDogJzEnXG4gICAgICAgIH1cbiAgICBdO1xuICAgIGNvbnN0IGNyZWF0ZSA9IChuYW1lLCBkZXNjcmlwdGlvbiwgbm90ZSwgcHJvamVjdCA9ICdkZWZhdWx0JywgcHJpb3JpdHkgPSAnZGVmYXVsdCcsIGR1ZURhdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG5vdGUsXG4gICAgICAgICAgICBwcm9qZWN0LFxuICAgICAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICAgICBkdWVEYXRlXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZCA9ICh0YXNrT2JqKSA9PiB7XG4gICAgICAgIHRhc2tzQXJyLnB1c2godGFza09iaik7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZSA9IHRhc2tJZCA9PiB7XG4gICAgICAgIHRhc2tzQXJyID0gdGFza3NBcnIuZmlsdGVyKHRhc2tPYmogPT4gdGFza09iai5pZCAhPT0gdGFza0lkKTtcbiAgICB9XG4gICAgY29uc3QgZ2V0Q3VycmVudEFyciA9ICgpID0+IFsuLi50YXNrc0Fycl07XG5cbiAgICBjb25zdCBnZXRUYXNrQnlJZCA9IGlkID0+IHRhc2tzQXJyLmZpbHRlcih0YXNrT2JqID0+IGlkID09PSB0YXNrT2JqLmlkKTtcblxuICAgIGNvbnN0IHNvcnRMaXN0ID0gKCkgPT4ge1xuICAgICAgICB0YXNrc0Fyci5zb3J0ICgoYSxiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS5pZCA8IGIuaWQpIHtyZXR1cm4gLTF9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZSxcbiAgICAgICAgYWRkLFxuICAgICAgICByZW1vdmUsXG4gICAgICAgIGdldEN1cnJlbnRBcnIsXG4gICAgICAgIGdldFRhc2tCeUlkLFxuICAgICAgICBzb3J0TGlzdFxuICAgIH07XG59KSgpO1xuXG5jb25zdCB0YXNrSWRDb250cm9sbGVyID0gKCgpID0+IHtcbiAgICBsZXQgbGlzdCA9IFsnMCcsJzEnXTtcbiAgICBjb25zdCBjcmVhdGVJRCA9ICgpID0+IHtcbiAgICAgICAgLy9pZiBsaXN0IGlzIGVtcHR5LGhpZ2hlc3RJRCBzdGFydCBhdCAtMSwgc28gbmV3SUQgYmVnaW5zIGF0IDBcbiAgICAgICAgY29uc3QgaGlnaGVzdElkUGx1c09uZSA9ICgobGlzdC5sZW5ndGggPT09IDAgPyAtMSA6IGxpc3RbbGlzdC5sZW5ndGgtMV0pICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgbGlzdC5wdXNoKGhpZ2hlc3RJZFBsdXNPbmUpXG4gICAgICAgIHJldHVybiAoaGlnaGVzdElkUGx1c09uZSk7XG4gICAgfTtcbiAgICBjb25zdCBhc3NpZ25JRCA9IG9iaiA9PiBvYmouaWQgPSBjcmVhdGVJRCgpO1xuICAgIFxuICAgIGNvbnN0IG1hbnVhbEFzc2lnbm1lbnQgPSAodGFza0lkLCBvYmopID0+IG9iai5pZCA9IHRhc2tJZDtcblxuICAgIGNvbnN0IHJlbW92ZUlEID0gKHRhc2tJRCkgPT4ge1xuICAgICAgICBsaXN0ID0gbGlzdC5maWx0ZXIoZWFjaElEID0+IGVhY2hJRCAhPT0gdGFza0lEKTtcbiAgICB9XG4gICAgY29uc3QgZ2V0TGlzdCA9ICgpID0+IHtjb25zb2xlLmxvZyhsaXN0KX1cbiAgICByZXR1cm4ge1xuICAgICAgICBhc3NpZ25JRCxcbiAgICAgICAgcmVtb3ZlSUQsXG4gICAgICAgIGdldExpc3QsXG4gICAgICAgIG1hbnVhbEFzc2lnbm1lbnRcbiAgICB9O1xufSkoKVxuXG5jb25zdCB0YXNrRXZlbnRGdW5jcyA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlVGFzayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFzayA9IGdldE5ld1Rhc2tGb3JtVmFsdWVzKCk7XG4gICAgICAgIGNvbnN0IHRhc2tPYmogPSB0YXNrc0xpc3QuY3JlYXRlKHRhc2submFtZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5ub3RlcywgJ2RlZmF1bHQnLCAnaW1wb3J0YW50JywgdGFzay5kdWVEYXRlKTtcbiAgICAgICAgdGFza0lkQ29udHJvbGxlci5hc3NpZ25JRCh0YXNrT2JqKTtcbiAgICAgICAgdGFza3NMaXN0LmFkZCh0YXNrT2JqKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlVGFzayA9ICh0YXNrSWQpID0+IHtcbiAgICAgICAgdGFza0lkQ29udHJvbGxlci5yZW1vdmVJRCh0YXNrSWQpO1xuICAgICAgICB0YXNrc0xpc3QucmVtb3ZlKHRhc2tJZCk7XG4gICAgfVxuICAgXG4gICAgY29uc3QgZWRpdFRhc2sgPSB0YXNrSWQgPT4ge1xuICAgICAgICB0YXNrc0xpc3QucmVtb3ZlKHRhc2tJZCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBbdGFyZ2V0VGFza10gPSB0YXNrc0xpc3QuZ2V0VGFza0J5SWQodGFza0lkKTtcbiAgICAgICAgLy9vayBzbyB3ZSBoYXZlIHRoZSB0YXJnZXQgdGFzayBzdG9yZWQsIHNvIG5vdyB3ZSBuZWVkIHRvIGZvcm0gaW5wdXQgdmFsdWVzXG4gICAgICAgIC8vIHdoYXQgYXJlIHdlIHRyeWluZyB0byBkbz8gd2Ugd2FudCB0byBjcmVhdGUgYSBuZXcgdGFzayBvYmogdG8gcmVwbGFjZSB0aGUgb2xkIG9uZS4uIHdoYXQgZG9lcyB0aGlzIG1lYW4uLj8gd2UgaGF2ZSB0byB0YXJnZXQgdGhlIG9sZFRhc2sgYW5kIGRlbGV0ZSBpdCBieSBpZC4gdGhlbiB3ZSBjcmVhdGUgYSBuZXdUYXNrIGFuZCBhcHBlbmQgaXQgdG8gdGhlIHRhc2sgbGlzdC4gZm9sbG93ZWQgYnkgc29ydGluZyB0aGUgdGFza0xpc3RcbiAgICAgICAgdGFyZ2V0VGFzay5uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J2ZvY3VzVGFza05hbWUnXVwiKS52YWx1ZTtcblxuICAgICAgICB0YXJnZXRUYXNrLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J2ZvY3VzVGFza0Rlc2NyaXB0aW9uJ11cIikudmFsdWU7XG5cbiAgICAgICAgdGFyZ2V0VGFzay5ub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdmb2N1c1Rhc2tOb3RlcyddXCIpLnZhbHVlO1xuXG4gICAgICAgIHRhcmdldFRhc2suZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdmb2N1c0R1ZURhdGUnXVwiKS52YWx1ZTtcblxuICAgICAgICB0YXJnZXRUYXNrLmlkID0gdGFza0lkO1xuXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRUYXNrT2JqID0gdGFza3NMaXN0LmNyZWF0ZVRhc2soXG4gICAgICAgICAgICB0YXJnZXRUYXNrLm5hbWUsXG4gICAgICAgICAgICB0YXJnZXRUYXNrLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGFyZ2V0VGFzay5ub3RlcyxcbiAgICAgICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgICAgIHRhcmdldFRhc2suZHVlRGF0ZSxcbiAgICAgICAgKVxuXG4gICAgICAgIHRhc2tJZENvbnRyb2xsZXIubWFudWFsQXNzaWdubWVudCh0YXJnZXRUYXNrLmlkLCB1cGRhdGVkVGFza09iaik7XG5cbiAgICAgICAgdGFza3NMaXN0LmFkZCh1cGRhdGVkVGFzaylcblxuXG4gICAgICAgIGNvbnNvbGUubG9nICh0YXJnZXRUYXNrLm5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrSWQpXG4gICAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZVRhc2ssXG4gICAgICAgIGRlbGV0ZVRhc2ssXG4gICAgICAgIGVkaXRUYXNrXG4gICAgfTtcbn0pKCk7XG4vLyBjb25zdCBwcm9qZWN0c0xpc3QgPSAoKCkgPT4ge1xuLy8gICAgIGNvbnN0IGFyckxpc3QgPSBbXTtcbi8vICAgICBjb25zdCBnZXRQcm9qZWN0TGlzdCA9ICgpID0+IHtjb25zb2xlLmxvZygncmVkdWNlIHRhc2tMaXN0IHRvIGdldCBwcm9qZWN0TmFtZXMgdy9vIGR1cGxpY2F0ZXMgYW5kIHB1c2ggaW50byBhcnJMaXN0Jyl9O1xuLy8gICAgIGNvbnN0IGdldEFyckxpc3QgPSAoKSA9PiB7IGNvbnNvbGUubG9nKGFyckxpc3QpO31cbi8vIH0pKCk7XG5cblxuLy9kb20gbWV0aG9kIC0gIGdldFRhc2tJRCA9ICByZXR1cm4gZWxlbWVudC5xdWVyeXNlbGVjdC5nZXRhdHRyaWJ1dGUoZGF0YS1pZDogeClcblxuY29uc3QgZ2V0TmV3VGFza0Zvcm1WYWx1ZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuICB7XG4gICAgICAgIG5hbWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSd0YXNrTmFtZSddXCIpLnZhbHVlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3Rhc2tEZXNjcmlwdGlvbiddXCIpLnZhbHVlLFxuICAgICAgICBub3RlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRleHRBcmVhW25hbWU9J3Rhc2tOb3RlcyddXCIpLnZhbHVlLFxuICAgICAgICBkdWVEYXRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0nZHVlRGF0ZSddXCIpLnZhbHVlLFxuICAgIH1cbn1cblxuY29uc3QgbmV3VGFza0V2ZW50QWRkZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25baWQ9J25ld1Rhc2tTdWJtaXQnXVwiKTtcbiAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ndGFza05hbWUnXVwiKS52YWx1ZSA9PT0gJycpe3JldHVybn07XG4gICAgICAgIHRhc2tFdmVudEZ1bmNzLmNyZWF0ZVRhc2soKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1baWQ9J25ld1Rhc2tGb3JtJ11cIikucmVzZXQoKTtcbiAgICB9KTtcbn1cblxuY29uc3QgZm9jdXNWaWV3RGVsZXRlRXZlbnQgPSAoKSA9PiB7XG5cbn1cblxuLy90byByZW1vdmUgdGFzayBhbmQgaWQgZnJvbSBsaXN0c1xuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGlmKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKSAhPT0gJ2ZvY3VzVmlld0RlbGV0ZScpe3JldHVybn1cbiAgICBjb25zdCB0YXJnZXRUYXNrID0gZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtaWRmb2N1c10nKTtcbiAgICBjb25zdCB0YXJnZXRJZCA9IHRhcmdldFRhc2suZ2V0QXR0cmlidXRlKCdkYXRhLWlkZm9jdXMnKTtcbiAgICB0YXNrRXZlbnRGdW5jcy5kZWxldGVUYXNrKHRhcmdldElkKTtcbiAgICBjb25zb2xlLnRhYmxlKHRhc2tzTGlzdC5nZXRDdXJyZW50QXJyKCksIHRhc2tJZENvbnRyb2xsZXIuZ2V0TGlzdCgpKTtcbn0pXG5cblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJykhPT0nZm9jdXNWaWV3U3VibWl0Jyl7cmV0dXJufTtcbiAgICBjb25zdCB0YXJnZXRUYXNrID0gZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtaWRmb2N1c10nKTtcbiAgICBjb25zdCB0YXJnZXRJZCA9IHRhcmdldFRhc2suZ2V0QXR0cmlidXRlKCdkYXRhLWlkZm9jdXMnKTtcbiAgICB0YXNrRXZlbnRGdW5jcy5lZGl0VGFzayh0YXJnZXRJZCk7XG59KVxuZXhwb3J0IHt0YXNrc0xpc3QsIHRhc2tFdmVudEZ1bmNzLCB0YXNrSWRDb250cm9sbGVyLCBnZXROZXdUYXNrRm9ybVZhbHVlcywgbmV3VGFza0V2ZW50QWRkZXJ9OyIsImltcG9ydCB7IHRhc2tzTGlzdCB9IGZyb20gXCIuL3N0YXRlLWxvZ2ljXCI7XG5cbmNvbnN0IHNpbXBsZVZpZXdDYXJkID0gKHRhc2tPYmopID0+e1xuICAgIGNvbnN0IHRhc2tzV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc0lubmVyV3JhcCcpXG5cbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2tTaW1wbGVDYXJkJyk7XG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCB0YXNrT2JqLmlkKVxuXG4gICAgLy9sZXRzIHNheSBhIHVzZXIgY2xpY2tzIHRoZSBtYXJrQ29tcGxldGUgYnV0dG9uLiBzbyBldmVudC50YXJnZXQuY2xhc3MgPT0gbWFya0NvbXBsZXRlQnRuIFxuICAgIGNvbnN0IG1hcmtDb21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1hcmtDb21wbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21hcmtDb21wbGV0ZUJ0bicpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrQ2FyZFRpdGxlJyk7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gdGFza09iai5uYW1lO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrQ2FyZERlc2NyaXB0aW9uJyk7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gdGFza09iai5kZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2tDYXJkRHVlRGF0ZScpO1xuICAgIGR1ZURhdGUuaW5uZXJIVE1MID0gdGFza09iai5kdWVEYXRlO1xuXG4gICAgdGFza3NXcmFwcGVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG59XG5cbi8vcmVuZGVyIGFsbCB0YXNrcyB3aWxsIHVzZSBzaW1wbGV2aWV3Y2FyZCBhbmQgaXRlcmF0ZSBvdmVyIGFsbCB0aGUgdGFzayBvYmpzXG5jb25zdCByZW5kZXJBbGxUYXNrc1NpbXBsZVZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza09ianMgPSB0YXNrc0xpc3QuZ2V0Q3VycmVudEFycigpO1xuICAgIHRhc2tPYmpzLmZvckVhY2goZWxlbWVudCA9PiBzaW1wbGVWaWV3Q2FyZChlbGVtZW50KSk7XG59XG5cbi8vY2xlYXJzIHRoZSBkaXYgY29udGFpbmluZyB0YXNrbGlzdCBhbmQgc2V0IHRoZW0gdXAgYWdhaW4gXG5jb25zdCByZWdlbmVyYXRlVGFza0xpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza0xpc3REaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdltjbGFzcz0ndGFza3NJbm5lcldyYXAnXVwiKTtcbiAgICB0YXNrTGlzdERpc3BsYXkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICByZW5kZXJBbGxUYXNrc1NpbXBsZVZpZXcoKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrc0xpc3QuZ2V0Q3VycmVudEFycigpKTtcbn1cblxuY29uc3QgbmV3VGFza1N1Ym1pdEV2ZW50SGFuZGxlciA9ICgpID0+IHtcbiAgICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbltpZD0nbmV3VGFza1N1Ym1pdCddXCIpO1xuICAgIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7cmVnZW5lcmF0ZVRhc2tMaXN0KCl9KTtcbn1cblxuLy9sYXRlciBvbiBpIHdpbGwgY29uc2lkZXIgdGhlIGNvbXBsaWNhdGlvbnMgYW5kIHJlZmFjdG9yIHRoZSBjb2RlXG4vLyB3aWxsIGJlIHVzZWQgdG8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSB0YXNrTGlzdCBjb250YWluZXIgXG5jb25zdCB0YXNrRm9jdXNlZFZpZXdDYXJkID0gKHRhc2tJZCkgPT4ge1xuICAgIGNvbnN0IFt0YXNrT2JqXSA9IHRhc2tzTGlzdC5nZXRUYXNrQnlJZCh0YXNrSWQpO1xuXG4gICAgY29uc3QgZm9jdXNWaWV3V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvY3VzVmlld1dyYXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb2N1c1ZpZXdXcmFwJyk7XG5cbiAgICBjb25zdCBmb2N1c1ZpZXdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9jdXNWaWV3Q2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZvY3VzVmlld0NhcmQnKTtcbiAgICBmb2N1c1ZpZXdDYXJkLnNldEF0dHJpYnV0ZSgnZGF0YS1pZGZvY3VzJywgdGFza0lkKVxuICAgIFxuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2xvc2VCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb2N1c1ZpZXdDbG9zZUJ0bicpXG4gICAgY2xvc2VCdG4uaW5uZXJIVE1MID0gKCd4Jyk7XG5cbiAgICBjb25zdCBmb2N1c1ZpZXdGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvY3VzVmlld0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdmb2N1c1ZpZXdGb3JtJyk7XG4gICAgXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIG5hbWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ2ZvY3VzVGFza05hbWUnKTtcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnZS5nLiwgUGF5IGludGVybmV0IGJpbGwnKTtcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGFza09iai5uYW1lKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCduYW1lJywgJ2ZvY3VzVGFza0Rlc2NyaXB0aW9uJyk7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0YXNrT2JqLmRlc2NyaXB0aW9uKVxuICAgIFxuXG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0QXJlYScpO1xuICAgIG5vdGVzLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgbm90ZXMuc2V0QXR0cmlidXRlKCduYW1lJywgJ2ZvY3VzVGFza05vdGVzJyk7XG4gICAgbm90ZXMuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdjb21tZW50cycpO1xuICAgIG5vdGVzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0YXNrT2JqLm5vdGVzKTtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICgnaW5wdXQnKTtcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdmb2N1c0R1ZURhdGUnKVxuICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0YXNrT2JqLmR1ZURhdGUpO1xuXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZm9jdXNEdWVEYXRlJylcbiAgICBkYXRlTGFiZWwuaW5uZXJIVE1MID0gJ0R1ZSBkYXRlOidcblxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVUYXNrLnNldEF0dHJpYnV0ZSgnaWQnLCdmb2N1c1ZpZXdEZWxldGUnKTtcbiAgICBkZWxldGVUYXNrLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgIGRlbGV0ZVRhc2suaW5uZXJIVE1MID0gJ2RlbGV0ZSc7XG5cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsJ2ZvY3VzVmlld1N1Ym1pdCcpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKTtcbiAgICBzdWJtaXQuaW5uZXJIVE1MID0gJ3NhdmUnO1xuICAgIFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9jdXNWaWV3V3JhcCk7XG5cbiAgICBmb2N1c1ZpZXdXcmFwLmFwcGVuZENoaWxkKGZvY3VzVmlld0NhcmQpO1xuXG4gICAgZm9jdXNWaWV3Q2FyZC5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gICAgZm9jdXNWaWV3Q2FyZC5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICBmb2N1c1ZpZXdDYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBmb2N1c1ZpZXdDYXJkLmFwcGVuZENoaWxkKG5vdGVzKTtcbiAgICBmb2N1c1ZpZXdDYXJkLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIGZvY3VzVmlld0NhcmQuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBmb2N1c1ZpZXdDYXJkLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2spO1xuICAgIGZvY3VzVmlld0NhcmQuYXBwZW5kQ2hpbGQoc3VibWl0KTtcbn1cblxuY29uc3QgZm9jdXNWaWV3RXZlbnRIYW5kbGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc0lubmVyV3JhcCcpO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBjb25zdCBjbGlja2VkVGFzayA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWlkXScpO1xuICAgICAgICBjb25zdCBkYXRhSWRWYWx1ZSA9IGNsaWNrZWRUYXNrLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICB0YXNrRm9jdXNlZFZpZXdDYXJkKGRhdGFJZFZhbHVlKTtcbiAgICB9KVxufVxuXG4vL3doYXQgZG8gaSBuZWVkIG5vdz8gaSBuZWVkIGZ1bmN0aW9ucyB0byBoYW5kbGUgdGhlIGV2ZW50cyBmb3IgZm9jdXMgdmlldy4gdGhpcyB3aWxsIG1lYW4gZGVsZXRpbmcsIGVkaXRpbmcsIGFuZCBjbG9zaW5nIHRoZSBmb2N1c2VkIHZpZXcuIGxldHMgc3RhcnQgd2l0aCBjbG9zaW5nLiBcbi8vY2xvc2UgXG5jb25zdCBmb2N1c1ZpZXdDbG9zZUV2ZW50cyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykhPT0gJ2ZvY3VzVmlld0Nsb3NlQnRuJyl7cmV0dXJufVxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGUudGFyZ2V0LmNsb3Nlc3QoJy5mb2N1c1ZpZXdXcmFwJykpO1xuICAgIH0pXG5cbiAgICAvL2lmIHRoZXkgY2xpY2sgb3V0c2lkZSB0aGUgZm9ybSwgY2xvc2VzIHRoZSBjYXJkLiBiLmMgdGhlIHdyYXBwZXIgc3BhbnMgd2hvbGUgcGFnZS5cbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgIT09ICdmb2N1c1ZpZXdXcmFwJyl7cmV0dXJufVxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2N1c1ZpZXdXcmFwJykpO1xuICAgIH0pXG59XG5cblxuLy9kZWxldGVzIHRoZSB0YXNrIGZyb20gc2ltcGxlVmlldyBpbiBkb21cbmNvbnN0IGZvY3VzVmlld0RlbGV0ZSA9IChldikgPT4ge1xuICAgIGNvbnN0IGRhdGFJZEVsZW1lbnQgPSBldi50YXJnZXQuY2xvc2VzdCgnW2RhdGEtaWRmb2N1c10nKTtcbiAgICBjb25zdCBkYXRhSWQgPSBkYXRhSWRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZGZvY3VzJyk7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc0lubmVyV3JhcCcpXG4gICAgLy9uZWVkcyB0byBkZWxldGUgZnJvbSBkb20sIGNhbiByZW1vdmUgY2hpbGQgYmFzZWQgb24gdGFza2lkXG4gICAgLy9ob3cgZWxzZT8gY2FuIGVtcHR5IGRvbSBhbmQgcmVsb2FkIHRhc2tMaXN0XG4gICAgY29uc3QgdGFyZ2V0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JcbiAgICAoYFtkYXRhLWlkPVwiJHtkYXRhSWR9XCJdYCk7XG4gICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YXJnZXRUYXNrKTtcbn1cblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ID0+IHtcbiAgICBpZiAoZXYudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKSAhPT0gJ2ZvY3VzVmlld0RlbGV0ZScpe3JldHVybn1cbiAgICBmb2N1c1ZpZXdEZWxldGUoZXYpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvY3VzVmlld1dyYXAnKSlcbn0pXG5cblxuXG5leHBvcnQge3JlbmRlckFsbFRhc2tzU2ltcGxlVmlldywgbmV3VGFza1N1Ym1pdEV2ZW50SGFuZGxlciwgZm9jdXNWaWV3RXZlbnRIYW5kbGVyLCBmb2N1c1ZpZXdDbG9zZUV2ZW50c30iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgdGFza0NvbnRyb2xsZXIsIHRhc2tzTGlzdCwgdGFza0V2ZW50RnVuY3MsIHRhc2tJZENvbnRyb2xsZXIsIGdldE5ld1Rhc2tGb3JtVmFsdWVzLCBuZXdUYXNrRXZlbnRBZGRlciB9IFxuZnJvbSBcIi4vc3RhdGUtbG9naWNcIjtcbmltcG9ydCB7aW5pdGlhbFBhZ2VMb2FkfSBmcm9tIFwiLi9sYW5kaW5nLXBhZ2VcIjtcbmltcG9ydCB7IG5ld1Rhc2tTdWJtaXRFdmVudEhhbmRsZXIsIHJlbmRlckFsbFRhc2tzU2ltcGxlVmlldywgZm9jdXNWaWV3RXZlbnRIYW5kbGVyLCBmb2N1c1ZpZXdDbG9zZUV2ZW50c30gZnJvbSBcIi4vdGFzay1yZW5kZXJcIjtcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuaW5pdGlhbFBhZ2VMb2FkKCk7XG5uZXdUYXNrRXZlbnRBZGRlcigpO1xubmV3VGFza1N1Ym1pdEV2ZW50SGFuZGxlcigpO1xuZm9jdXNWaWV3RXZlbnRIYW5kbGVyKCk7XG5mb2N1c1ZpZXdDbG9zZUV2ZW50cygpO1xucmVuZGVyQWxsVGFza3NTaW1wbGVWaWV3KCk7XG50YXNrc0xpc3QuZ2V0Q3VycmVudEFycigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==