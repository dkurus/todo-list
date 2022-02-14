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
___CSS_LOADER_EXPORT___.push([module.id, ".contentWrapper{\n    border: 2px solid black;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.pageHeader {\n    border: 2px solid rgb(241, 15, 15);\n    flex-basis: 100%;\n}\n\n.projectNav {\n    padding-right: 100px;\n}\n\n.newTaskCard > form {\n    display: flex;\n    flex-direction: column;\n}\n\n.taskSimpleCard {\n    border-bottom: 1px solid rgba(211,211,211);\n\n}\n\n.taskCardTitle {\n    font-size: large;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.taskCardDescription {\n    font-size: medium;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.taskCardDueDate {\n    font-size: small;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.focusViewWrap {\n    display: flex;\n}\n\n.focusViewCard {\n    display: flex;\n    flex-direction: column;\n    \n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,kCAAkC;IAClC,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,0CAA0C;;AAE9C;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;;AAE1B","sourcesContent":[".contentWrapper{\n    border: 2px solid black;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.pageHeader {\n    border: 2px solid rgb(241, 15, 15);\n    flex-basis: 100%;\n}\n\n.projectNav {\n    padding-right: 100px;\n}\n\n.newTaskCard > form {\n    display: flex;\n    flex-direction: column;\n}\n\n.taskSimpleCard {\n    border-bottom: 1px solid rgba(211,211,211);\n\n}\n\n.taskCardTitle {\n    font-size: large;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.taskCardDescription {\n    font-size: medium;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.taskCardDueDate {\n    font-size: small;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.focusViewWrap {\n    display: flex;\n}\n\n.focusViewCard {\n    display: flex;\n    flex-direction: column;\n    \n}"],"sourceRoot":""}]);
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
/* harmony export */   "taskController": () => (/* binding */ taskController),
/* harmony export */   "tasksList": () => (/* binding */ tasksList),
/* harmony export */   "taskEventFuncs": () => (/* binding */ taskEventFuncs),
/* harmony export */   "taskIdController": () => (/* binding */ taskIdController),
/* harmony export */   "getNewTaskFormValues": () => (/* binding */ getNewTaskFormValues),
/* harmony export */   "newTaskEventAdder": () => (/* binding */ newTaskEventAdder)
/* harmony export */ });
const tasksList = (() => {
    let tasksArr = [
        {
            name: 'name1',
            description: 'des1',
            dueDate: 'due1',
            id: '0'
        },
        {
            name: 'name2',
            description: 'des2',
            dueDate: 'due2',
            id: '1'

        }
    ];
    const add = (taskObj) => {
        tasksArr.push(taskObj);
    };
    //change to recreate new array? so that we follow immutability principles
    const remove = (taskID) => {
        tasksArr.forEach((element, index) => {
            if (element.id == taskID){
                tasksArr.splice(index, 1);
            };
        });
    };
    const getCurrentArr = () => [...tasksArr];

    const getTaskById = id => tasksArr.filter(taskObj => id === taskObj.id);

    return {
        add,
        remove,
        getCurrentArr,
        getTaskById
    };
})();

//a controller to manage the tasks
const taskController = (() => {
    const create = (name, description, note, project = 'default', priority, dueDate) => {
        return {
            name,
            description,
            note,
            project,
            priority,
            dueDate
        };
    };
    const edit = (taskID) => {
        console.log('editing task');
    }; 

    return {
        create,
        edit,
    };

})();

const taskIdController = (() => {
    //problem: setAttribute forces data-att to be string. when we create tasks it will always need a unique id... what if we only add new id's. even when deleting old ones we don't change anything. lets consider editing ids. the user has form open and it has event listeners. what would they do/ dom: change the values without changing the order of tasks    state: change the state. the way the dom is rendered just iterates over the array. what if we went in numerical task order. 
    // the problem is how to keep the tasklist in order while editing.i think... the answer lays in the id. no wait. even if i get the Id right the object will be pushed into the end of the array. unless i can.. sort.. the array by project id value. 
    // so if i manage the id correctly (edit: keeps same id) add(gen new id) delete(test to see what needs to happen) then we can sort the array before generating it. when should the list be sorted? it won't go out of order unless we edit i think. so around then. it should happen in the state module.once thats all sorted (hah) the taskList can be cleared and regen'd and it should be in order. 
    //ok so  createId needs to be an int. everything else can be a string. tbh i think its easier for id to be a string right now. but as i add more features i may need id to be an int to play around with it. 
    let list = ['0','1'];
    const createID = () => {
        //if list is empty,highestID start at -1, so newID begins at 0
        const highestIdPlusOne = ((list.length === 0 ? -1 : list[list.length-1]) + 1).toString();
        list.push(highestIdPlusOne)
        return (highestIdPlusOne);
    };
    const assignID = (obj) => {
        obj.id = createID();
    };

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
        const taskObj = taskController.create(task.name, task.description, task.notes, 'default', 'important', task.dueDate);
        taskIdController.assignID(taskObj);
        tasksList.add(taskObj);
    };

    const deleteTask = (taskID) => {
        taskIdController.removeID(taskID);
        tasksList.remove(taskID);
    }
   

    return {
        createTask,
        deleteTask
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
/* harmony export */   "focusViewEventHandler": () => (/* binding */ focusViewEventHandler)
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
    console.log(taskObj); 
    console.log(taskObj.name)
    console.log(taskObj.description)
    console.log(taskObj.dueDate)

    const focusViewWrap = document.createElement('div');
    focusViewWrap.setAttribute('class', 'focusViewWrap');

    const focusViewCard = document.createElement('div');
    focusViewCard.setAttribute('class', 'focusViewCard');
    
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
    deleteTask.setAttribute('id','newTaskCancel');
    deleteTask.setAttribute('type','button');
    deleteTask.innerHTML = 'delete';

    const submit = document.createElement('button');
    submit.setAttribute('id','newTaskSubmit');
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

focusViewCloseEvents();



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
(0,_task_render__WEBPACK_IMPORTED_MODULE_2__.renderAllTasksSimpleView)();
_state_logic__WEBPACK_IMPORTED_MODULE_0__.tasksList.getCurrentArr();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlGeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxrQ0FBa0M7QUFDbEMsSUFBSTs7O0FBR0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRTtBQUMxRTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RJMEM7O0FBRTFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsaUVBQXVCO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpRUFBdUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QyxxQkFBcUI7QUFDbEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLCtEQUFxQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0EsS0FBSztBQUNMOztBQUVBOzs7Ozs7OztVQ3JKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTHFCO0FBQzBCO0FBQzREO0FBQ3JGOztBQUV0Qiw4REFBZTtBQUNmLCtEQUFpQjtBQUNqQix1RUFBeUI7QUFDekIsbUVBQXFCO0FBQ3JCLHNFQUF3QjtBQUN4QixpRUFBdUIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xhbmRpbmctcGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0YXRlLWxvZ2ljLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay1yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jb250ZW50V3JhcHBlcntcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnBhZ2VIZWFkZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjQxLCAxNSwgMTUpO1xcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdE5hdiB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4ubmV3VGFza0NhcmQgPiBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2tTaW1wbGVDYXJkIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjExLDIxMSwyMTEpO1xcblxcbn1cXG5cXG4udGFza0NhcmRUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4udGFza0NhcmREZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnRhc2tDYXJkRHVlRGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uZm9jdXNWaWV3V3JhcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mb2N1c1ZpZXdDYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwwQ0FBMEM7O0FBRTlDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7O0FBRTFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250ZW50V3JhcHBlcntcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnBhZ2VIZWFkZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjQxLCAxNSwgMTUpO1xcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdE5hdiB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4ubmV3VGFza0NhcmQgPiBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2tTaW1wbGVDYXJkIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjExLDIxMSwyMTEpO1xcblxcbn1cXG5cXG4udGFza0NhcmRUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4udGFza0NhcmREZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnRhc2tDYXJkRHVlRGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uZm9jdXNWaWV3V3JhcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mb2N1c1ZpZXdDYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB0YXNrSWRDb250cm9sbGVyIH0gZnJvbSBcIi4vc3RhdGUtbG9naWNcIjtcblxuY29uc3QgaW5pdGlhbFBhZ2VMb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudFdyYXBwZXInKTtcblxuICAgIGNvbnN0IHBhZ2VIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBwYWdlSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3BhZ2VIZWFkZXInKTtcbiAgICBwYWdlSGVhZGVyLmlubmVySFRNTCA9ICd0aGlzIGlzIHRoZSBoZWFkZXInO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3RzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TmF2Jyk7XG4gICAgXG4gICAgY29uc3QgcHJvamVjdHNOYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBwcm9qZWN0c05hdkJhci5pbm5lckhUTUwgPSAndGhpcyBpcyB0aGUgcHJvamVjdCBsaXN0JztcbiAgICBcbiAgICBjb25zdCB0YXNrQ29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICBjb25zdCB0YXNrTGlzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIHRhc2tMaXN0SGVhZGVyLmlubmVySFRNTCA9ICdhY3RpdmUgcHJvamVjdCBOYW1lJztcbiAgICBcbiAgICBjb25zdCB0YXNrTGlzdElubmVyV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tMaXN0SW5uZXJXcmFwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFza3NJbm5lcldyYXAnKTtcblxuICAgIGNvbnN0IG5ld1Rhc2tXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgY29uc3QgbmV3VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1Rhc2tCdG4uaW5uZXJIVE1MID0gKCdOZXcgVGFzaycpO1xuXG4gICAgY29uc3QgbmV3VGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdUYXNrQ2FyZC5jbGFzc0xpc3QuYWRkKCduZXdUYXNrQ2FyZCcpO1xuICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIG5ld1Rhc2tGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3VGFza0Zvcm0nKTtcbiAgICBcbiAgICBjb25zdCBuZXdUYXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBuZXdUYXNrTmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIG5ld1Rhc2tOYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrTmFtZScpO1xuICAgIG5ld1Rhc2tOYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnZS5nLiwgUGF5IGludGVybmV0IGJpbGwnKTtcbiAgICBuZXdUYXNrTmFtZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuXG4gICAgY29uc3QgbmV3VGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIG5ld1Rhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIG5ld1Rhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFza0Rlc2NyaXB0aW9uJyk7XG4gICAgbmV3VGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnZGVzY3JpcHRpb24nKTtcblxuICAgIGNvbnN0IG5ld1Rhc2tOb3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRBcmVhJylcbiAgICBuZXdUYXNrTm90ZXMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBuZXdUYXNrTm90ZXMuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2tOb3RlcycpO1xuICAgIG5ld1Rhc2tOb3Rlcy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2NvbW1lbnRzJyk7XG5cbiAgICBjb25zdCBuZXdUYXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKCdpbnB1dCcpO1xuICAgIG5ld1Rhc2tEdWVEYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkdWVEYXRlJylcbiAgICBuZXdUYXNrRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuXG4gICAgY29uc3QgbmV3VGFza0RhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbmV3VGFza0RhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWVEYXRlJylcbiAgICBuZXdUYXNrRGF0ZUxhYmVsLmlubmVySFRNTCA9ICdEdWUgZGF0ZTonXG5cbiAgICBjb25zdCBuZXdUYXNrU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3VGFza1N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywnbmV3VGFza1N1Ym1pdCcpO1xuICAgIG5ld1Rhc2tTdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0Jyk7XG4gICAgbmV3VGFza1N1Ym1pdC5pbm5lckhUTUwgPSAnc2F2ZSc7XG5cbiAgICBjb25zdCBuZXdUYXNrQ2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3VGFza0NhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnbmV3VGFza0NhbmNlbCcpO1xuICAgIG5ld1Rhc2tDYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG4gICAgbmV3VGFza0NhbmNlbEJ0bi5pbm5lckhUTUwgPSAnY2FuY2VsJztcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudFdyYXBwZXIpO1xuXG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQocGFnZUhlYWRlcik7XG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNXcmFwcGVyKTtcbiAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrQ29udGVudFdyYXBwZXIpO1xuXG4gICAgcHJvamVjdHNXcmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RzTmF2QmFyKTtcbiAgICBcbiAgICB0YXNrQ29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0xpc3RIZWFkZXIpO1xuICAgIHRhc2tDb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrTGlzdElubmVyV3JhcCk7XG4gICAgdGFza0NvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKG5ld1Rhc2tXcmFwcGVyKTtcblxuICAgIG5ld1Rhc2tXcmFwcGVyLmFwcGVuZENoaWxkKG5ld1Rhc2tCdG4pO1xuICAgIG5ld1Rhc2tXcmFwcGVyLmFwcGVuZENoaWxkKG5ld1Rhc2tDYXJkKTtcblxuICAgIFxuICAgIG5ld1Rhc2tDYXJkLmFwcGVuZENoaWxkKG5ld1Rhc2tGb3JtKVxuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKG5ld1Rhc2tOYW1lKTtcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChuZXdUYXNrRGVzY3JpcHRpb24pO1xuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKG5ld1Rhc2tOb3Rlcyk7XG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQobmV3VGFza0RhdGVMYWJlbCk7XG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQobmV3VGFza0R1ZURhdGUpO1xuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKG5ld1Rhc2tTdWJtaXQpO1xuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKG5ld1Rhc2tDYW5jZWxCdG4pOyAgXG59XG5cbmV4cG9ydCB7aW5pdGlhbFBhZ2VMb2FkfVxuXG4iLCJjb25zdCB0YXNrc0xpc3QgPSAoKCkgPT4ge1xuICAgIGxldCB0YXNrc0FyciA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ25hbWUxJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZGVzMScsXG4gICAgICAgICAgICBkdWVEYXRlOiAnZHVlMScsXG4gICAgICAgICAgICBpZDogJzAnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICduYW1lMicsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2RlczInLFxuICAgICAgICAgICAgZHVlRGF0ZTogJ2R1ZTInLFxuICAgICAgICAgICAgaWQ6ICcxJ1xuXG4gICAgICAgIH1cbiAgICBdO1xuICAgIGNvbnN0IGFkZCA9ICh0YXNrT2JqKSA9PiB7XG4gICAgICAgIHRhc2tzQXJyLnB1c2godGFza09iaik7XG4gICAgfTtcbiAgICAvL2NoYW5nZSB0byByZWNyZWF0ZSBuZXcgYXJyYXk/IHNvIHRoYXQgd2UgZm9sbG93IGltbXV0YWJpbGl0eSBwcmluY2lwbGVzXG4gICAgY29uc3QgcmVtb3ZlID0gKHRhc2tJRCkgPT4ge1xuICAgICAgICB0YXNrc0Fyci5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gdGFza0lEKXtcbiAgICAgICAgICAgICAgICB0YXNrc0Fyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBnZXRDdXJyZW50QXJyID0gKCkgPT4gWy4uLnRhc2tzQXJyXTtcblxuICAgIGNvbnN0IGdldFRhc2tCeUlkID0gaWQgPT4gdGFza3NBcnIuZmlsdGVyKHRhc2tPYmogPT4gaWQgPT09IHRhc2tPYmouaWQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkLFxuICAgICAgICByZW1vdmUsXG4gICAgICAgIGdldEN1cnJlbnRBcnIsXG4gICAgICAgIGdldFRhc2tCeUlkXG4gICAgfTtcbn0pKCk7XG5cbi8vYSBjb250cm9sbGVyIHRvIG1hbmFnZSB0aGUgdGFza3NcbmNvbnN0IHRhc2tDb250cm9sbGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGUgPSAobmFtZSwgZGVzY3JpcHRpb24sIG5vdGUsIHByb2plY3QgPSAnZGVmYXVsdCcsIHByaW9yaXR5LCBkdWVEYXRlKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBub3RlLFxuICAgICAgICAgICAgcHJvamVjdCxcbiAgICAgICAgICAgIHByaW9yaXR5LFxuICAgICAgICAgICAgZHVlRGF0ZVxuICAgICAgICB9O1xuICAgIH07XG4gICAgY29uc3QgZWRpdCA9ICh0YXNrSUQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2VkaXRpbmcgdGFzaycpO1xuICAgIH07IFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlLFxuICAgICAgICBlZGl0LFxuICAgIH07XG5cbn0pKCk7XG5cbmNvbnN0IHRhc2tJZENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAgIC8vcHJvYmxlbTogc2V0QXR0cmlidXRlIGZvcmNlcyBkYXRhLWF0dCB0byBiZSBzdHJpbmcuIHdoZW4gd2UgY3JlYXRlIHRhc2tzIGl0IHdpbGwgYWx3YXlzIG5lZWQgYSB1bmlxdWUgaWQuLi4gd2hhdCBpZiB3ZSBvbmx5IGFkZCBuZXcgaWQncy4gZXZlbiB3aGVuIGRlbGV0aW5nIG9sZCBvbmVzIHdlIGRvbid0IGNoYW5nZSBhbnl0aGluZy4gbGV0cyBjb25zaWRlciBlZGl0aW5nIGlkcy4gdGhlIHVzZXIgaGFzIGZvcm0gb3BlbiBhbmQgaXQgaGFzIGV2ZW50IGxpc3RlbmVycy4gd2hhdCB3b3VsZCB0aGV5IGRvLyBkb206IGNoYW5nZSB0aGUgdmFsdWVzIHdpdGhvdXQgY2hhbmdpbmcgdGhlIG9yZGVyIG9mIHRhc2tzICAgIHN0YXRlOiBjaGFuZ2UgdGhlIHN0YXRlLiB0aGUgd2F5IHRoZSBkb20gaXMgcmVuZGVyZWQganVzdCBpdGVyYXRlcyBvdmVyIHRoZSBhcnJheS4gd2hhdCBpZiB3ZSB3ZW50IGluIG51bWVyaWNhbCB0YXNrIG9yZGVyLiBcbiAgICAvLyB0aGUgcHJvYmxlbSBpcyBob3cgdG8ga2VlcCB0aGUgdGFza2xpc3QgaW4gb3JkZXIgd2hpbGUgZWRpdGluZy5pIHRoaW5rLi4uIHRoZSBhbnN3ZXIgbGF5cyBpbiB0aGUgaWQuIG5vIHdhaXQuIGV2ZW4gaWYgaSBnZXQgdGhlIElkIHJpZ2h0IHRoZSBvYmplY3Qgd2lsbCBiZSBwdXNoZWQgaW50byB0aGUgZW5kIG9mIHRoZSBhcnJheS4gdW5sZXNzIGkgY2FuLi4gc29ydC4uIHRoZSBhcnJheSBieSBwcm9qZWN0IGlkIHZhbHVlLiBcbiAgICAvLyBzbyBpZiBpIG1hbmFnZSB0aGUgaWQgY29ycmVjdGx5IChlZGl0OiBrZWVwcyBzYW1lIGlkKSBhZGQoZ2VuIG5ldyBpZCkgZGVsZXRlKHRlc3QgdG8gc2VlIHdoYXQgbmVlZHMgdG8gaGFwcGVuKSB0aGVuIHdlIGNhbiBzb3J0IHRoZSBhcnJheSBiZWZvcmUgZ2VuZXJhdGluZyBpdC4gd2hlbiBzaG91bGQgdGhlIGxpc3QgYmUgc29ydGVkPyBpdCB3b24ndCBnbyBvdXQgb2Ygb3JkZXIgdW5sZXNzIHdlIGVkaXQgaSB0aGluay4gc28gYXJvdW5kIHRoZW4uIGl0IHNob3VsZCBoYXBwZW4gaW4gdGhlIHN0YXRlIG1vZHVsZS5vbmNlIHRoYXRzIGFsbCBzb3J0ZWQgKGhhaCkgdGhlIHRhc2tMaXN0IGNhbiBiZSBjbGVhcmVkIGFuZCByZWdlbidkIGFuZCBpdCBzaG91bGQgYmUgaW4gb3JkZXIuIFxuICAgIC8vb2sgc28gIGNyZWF0ZUlkIG5lZWRzIHRvIGJlIGFuIGludC4gZXZlcnl0aGluZyBlbHNlIGNhbiBiZSBhIHN0cmluZy4gdGJoIGkgdGhpbmsgaXRzIGVhc2llciBmb3IgaWQgdG8gYmUgYSBzdHJpbmcgcmlnaHQgbm93LiBidXQgYXMgaSBhZGQgbW9yZSBmZWF0dXJlcyBpIG1heSBuZWVkIGlkIHRvIGJlIGFuIGludCB0byBwbGF5IGFyb3VuZCB3aXRoIGl0LiBcbiAgICBsZXQgbGlzdCA9IFsnMCcsJzEnXTtcbiAgICBjb25zdCBjcmVhdGVJRCA9ICgpID0+IHtcbiAgICAgICAgLy9pZiBsaXN0IGlzIGVtcHR5LGhpZ2hlc3RJRCBzdGFydCBhdCAtMSwgc28gbmV3SUQgYmVnaW5zIGF0IDBcbiAgICAgICAgY29uc3QgaGlnaGVzdElkUGx1c09uZSA9ICgobGlzdC5sZW5ndGggPT09IDAgPyAtMSA6IGxpc3RbbGlzdC5sZW5ndGgtMV0pICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgbGlzdC5wdXNoKGhpZ2hlc3RJZFBsdXNPbmUpXG4gICAgICAgIHJldHVybiAoaGlnaGVzdElkUGx1c09uZSk7XG4gICAgfTtcbiAgICBjb25zdCBhc3NpZ25JRCA9IChvYmopID0+IHtcbiAgICAgICAgb2JqLmlkID0gY3JlYXRlSUQoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlSUQgPSAodGFza0lEKSA9PiB7XG4gICAgICAgIGxpc3QgPSBsaXN0LmZpbHRlcihlYWNoSUQgPT4gZWFjaElEICE9PSB0YXNrSUQpO1xuICAgIH1cbiAgICBjb25zdCBnZXRMaXN0ID0gKCkgPT4ge2NvbnNvbGUubG9nKGxpc3QpfVxuICAgIHJldHVybiB7XG4gICAgICAgIGFzc2lnbklELFxuICAgICAgICByZW1vdmVJRCxcbiAgICAgICAgZ2V0TGlzdFxuICAgIH07XG59KSgpXG5cbmNvbnN0IHRhc2tFdmVudEZ1bmNzID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVUYXNrID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrID0gZ2V0TmV3VGFza0Zvcm1WYWx1ZXMoKTtcbiAgICAgICAgY29uc3QgdGFza09iaiA9IHRhc2tDb250cm9sbGVyLmNyZWF0ZSh0YXNrLm5hbWUsIHRhc2suZGVzY3JpcHRpb24sIHRhc2subm90ZXMsICdkZWZhdWx0JywgJ2ltcG9ydGFudCcsIHRhc2suZHVlRGF0ZSk7XG4gICAgICAgIHRhc2tJZENvbnRyb2xsZXIuYXNzaWduSUQodGFza09iaik7XG4gICAgICAgIHRhc2tzTGlzdC5hZGQodGFza09iaik7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAodGFza0lEKSA9PiB7XG4gICAgICAgIHRhc2tJZENvbnRyb2xsZXIucmVtb3ZlSUQodGFza0lEKTtcbiAgICAgICAgdGFza3NMaXN0LnJlbW92ZSh0YXNrSUQpO1xuICAgIH1cbiAgIFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlVGFzayxcbiAgICAgICAgZGVsZXRlVGFza1xuICAgIH07XG59KSgpO1xuLy8gY29uc3QgcHJvamVjdHNMaXN0ID0gKCgpID0+IHtcbi8vICAgICBjb25zdCBhcnJMaXN0ID0gW107XG4vLyAgICAgY29uc3QgZ2V0UHJvamVjdExpc3QgPSAoKSA9PiB7Y29uc29sZS5sb2coJ3JlZHVjZSB0YXNrTGlzdCB0byBnZXQgcHJvamVjdE5hbWVzIHcvbyBkdXBsaWNhdGVzIGFuZCBwdXNoIGludG8gYXJyTGlzdCcpfTtcbi8vICAgICBjb25zdCBnZXRBcnJMaXN0ID0gKCkgPT4geyBjb25zb2xlLmxvZyhhcnJMaXN0KTt9XG4vLyB9KSgpO1xuXG5cbi8vZG9tIG1ldGhvZCAtICBnZXRUYXNrSUQgPSAgcmV0dXJuIGVsZW1lbnQucXVlcnlzZWxlY3QuZ2V0YXR0cmlidXRlKGRhdGEtaWQ6IHgpXG5cbmNvbnN0IGdldE5ld1Rhc2tGb3JtVmFsdWVzID0gKCkgPT4ge1xuICAgIHJldHVybiAge1xuICAgICAgICBuYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ndGFza05hbWUnXVwiKS52YWx1ZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSd0YXNrRGVzY3JpcHRpb24nXVwiKS52YWx1ZSxcbiAgICAgICAgbm90ZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0QXJlYVtuYW1lPSd0YXNrTm90ZXMnXVwiKS52YWx1ZSxcbiAgICAgICAgZHVlRGF0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J2R1ZURhdGUnXVwiKS52YWx1ZSxcbiAgICB9XG59XG5cbmNvbnN0IG5ld1Rhc2tFdmVudEFkZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uW2lkPSduZXdUYXNrU3VibWl0J11cIik7XG4gICAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3Rhc2tOYW1lJ11cIikudmFsdWUgPT09ICcnKXtyZXR1cm59O1xuICAgICAgICB0YXNrRXZlbnRGdW5jcy5jcmVhdGVUYXNrKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtW2lkPSduZXdUYXNrRm9ybSddXCIpLnJlc2V0KCk7XG4gICAgfSk7XG59XG5cblxuZXhwb3J0IHt0YXNrQ29udHJvbGxlciwgdGFza3NMaXN0LCB0YXNrRXZlbnRGdW5jcywgdGFza0lkQ29udHJvbGxlciwgZ2V0TmV3VGFza0Zvcm1WYWx1ZXMsIG5ld1Rhc2tFdmVudEFkZGVyfTsiLCJpbXBvcnQgeyB0YXNrc0xpc3QgfSBmcm9tIFwiLi9zdGF0ZS1sb2dpY1wiO1xuXG5jb25zdCBzaW1wbGVWaWV3Q2FyZCA9ICh0YXNrT2JqKSA9PntcbiAgICBjb25zdCB0YXNrc1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3NJbm5lcldyYXAnKVxuXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrU2ltcGxlQ2FyZCcpO1xuICAgIGNhcmQuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgdGFza09iai5pZClcblxuICAgIC8vbGV0cyBzYXkgYSB1c2VyIGNsaWNrcyB0aGUgbWFya0NvbXBsZXRlIGJ1dHRvbi4gc28gZXZlbnQudGFyZ2V0LmNsYXNzID09IG1hcmtDb21wbGV0ZUJ0biBcbiAgICBjb25zdCBtYXJrQ29tcGxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtYXJrQ29tcGxldGVCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYXJrQ29tcGxldGVCdG4nKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFza0NhcmRUaXRsZScpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IHRhc2tPYmoubmFtZTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFza0NhcmREZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IHRhc2tPYmouZGVzY3JpcHRpb247XG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrQ2FyZER1ZURhdGUnKTtcbiAgICBkdWVEYXRlLmlubmVySFRNTCA9IHRhc2tPYmouZHVlRGF0ZTtcblxuICAgIHRhc2tzV3JhcHBlci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xufVxuXG4vL3JlbmRlciBhbGwgdGFza3Mgd2lsbCB1c2Ugc2ltcGxldmlld2NhcmQgYW5kIGl0ZXJhdGUgb3ZlciBhbGwgdGhlIHRhc2sgb2Jqc1xuY29uc3QgcmVuZGVyQWxsVGFza3NTaW1wbGVWaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tPYmpzID0gdGFza3NMaXN0LmdldEN1cnJlbnRBcnIoKTtcbiAgICB0YXNrT2Jqcy5mb3JFYWNoKGVsZW1lbnQgPT4gc2ltcGxlVmlld0NhcmQoZWxlbWVudCkpO1xufVxuXG4vL2NsZWFycyB0aGUgZGl2IGNvbnRhaW5pbmcgdGFza2xpc3QgYW5kIHNldCB0aGVtIHVwIGFnYWluIFxuY29uc3QgcmVnZW5lcmF0ZVRhc2tMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tMaXN0RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXZbY2xhc3M9J3Rhc2tzSW5uZXJXcmFwJ11cIik7XG4gICAgdGFza0xpc3REaXNwbGF5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgcmVuZGVyQWxsVGFza3NTaW1wbGVWaWV3KCk7XG4gICAgY29uc29sZS5sb2codGFza3NMaXN0LmdldEN1cnJlbnRBcnIoKSk7XG59XG5cbmNvbnN0IG5ld1Rhc2tTdWJtaXRFdmVudEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25baWQ9J25ld1Rhc2tTdWJtaXQnXVwiKTtcbiAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge3JlZ2VuZXJhdGVUYXNrTGlzdCgpfSk7XG59XG5cbi8vbGF0ZXIgb24gaSB3aWxsIGNvbnNpZGVyIHRoZSBjb21wbGljYXRpb25zIGFuZCByZWZhY3RvciB0aGUgY29kZVxuLy8gd2lsbCBiZSB1c2VkIHRvIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgdGFza0xpc3QgY29udGFpbmVyIFxuY29uc3QgdGFza0ZvY3VzZWRWaWV3Q2FyZCA9ICh0YXNrSWQpID0+IHtcbiAgICBjb25zdCBbdGFza09ial0gPSB0YXNrc0xpc3QuZ2V0VGFza0J5SWQodGFza0lkKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrT2JqKTsgXG4gICAgY29uc29sZS5sb2codGFza09iai5uYW1lKVxuICAgIGNvbnNvbGUubG9nKHRhc2tPYmouZGVzY3JpcHRpb24pXG4gICAgY29uc29sZS5sb2codGFza09iai5kdWVEYXRlKVxuXG4gICAgY29uc3QgZm9jdXNWaWV3V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvY3VzVmlld1dyYXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb2N1c1ZpZXdXcmFwJyk7XG5cbiAgICBjb25zdCBmb2N1c1ZpZXdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9jdXNWaWV3Q2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZvY3VzVmlld0NhcmQnKTtcbiAgICBcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9jdXNWaWV3Q2xvc2VCdG4nKVxuICAgIGNsb3NlQnRuLmlubmVySFRNTCA9ICgneCcpO1xuXG4gICAgY29uc3QgZm9jdXNWaWV3Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb2N1c1ZpZXdGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9jdXNWaWV3Rm9ybScpO1xuICAgIFxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICdmb2N1c1Rhc2tOYW1lJyk7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2UuZy4sIFBheSBpbnRlcm5ldCBiaWxsJyk7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIG5hbWUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRhc2tPYmoubmFtZSlcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnbmFtZScsICdmb2N1c1Rhc2tEZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnZGVzY3JpcHRpb24nKTtcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGFza09iai5kZXNjcmlwdGlvbilcbiAgICBcblxuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dEFyZWEnKTtcbiAgICBub3Rlcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIG5vdGVzLnNldEF0dHJpYnV0ZSgnbmFtZScsICdmb2N1c1Rhc2tOb3RlcycpO1xuICAgIG5vdGVzLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnY29tbWVudHMnKTtcbiAgICBub3Rlcy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGFza09iai5ub3Rlcyk7XG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoJ2lucHV0Jyk7XG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZm9jdXNEdWVEYXRlJylcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGFza09iai5kdWVEYXRlKTtcblxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2ZvY3VzRHVlRGF0ZScpXG4gICAgZGF0ZUxhYmVsLmlubmVySFRNTCA9ICdEdWUgZGF0ZTonXG5cbiAgICBjb25zdCBkZWxldGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlVGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywnbmV3VGFza0NhbmNlbCcpO1xuICAgIGRlbGV0ZVRhc2suc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG4gICAgZGVsZXRlVGFzay5pbm5lckhUTUwgPSAnZGVsZXRlJztcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywnbmV3VGFza1N1Ym1pdCcpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKTtcbiAgICBzdWJtaXQuaW5uZXJIVE1MID0gJ3NhdmUnO1xuICAgIFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9jdXNWaWV3V3JhcCk7XG5cbiAgICBmb2N1c1ZpZXdXcmFwLmFwcGVuZENoaWxkKGZvY3VzVmlld0NhcmQpO1xuXG4gICAgZm9jdXNWaWV3Q2FyZC5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gICAgZm9jdXNWaWV3Q2FyZC5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICBmb2N1c1ZpZXdDYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBmb2N1c1ZpZXdDYXJkLmFwcGVuZENoaWxkKG5vdGVzKTtcbiAgICBmb2N1c1ZpZXdDYXJkLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIGZvY3VzVmlld0NhcmQuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBmb2N1c1ZpZXdDYXJkLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2spO1xuICAgIGZvY3VzVmlld0NhcmQuYXBwZW5kQ2hpbGQoc3VibWl0KTtcbn1cblxuY29uc3QgZm9jdXNWaWV3RXZlbnRIYW5kbGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc0lubmVyV3JhcCcpO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBjb25zdCBjbGlja2VkVGFzayA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWlkXScpO1xuICAgICAgICBjb25zdCBkYXRhSWRWYWx1ZSA9IGNsaWNrZWRUYXNrLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICB0YXNrRm9jdXNlZFZpZXdDYXJkKGRhdGFJZFZhbHVlKTtcbiAgICB9KVxufVxuXG4vL3doYXQgZG8gaSBuZWVkIG5vdz8gaSBuZWVkIGZ1bmN0aW9ucyB0byBoYW5kbGUgdGhlIGV2ZW50cyBmb3IgZm9jdXMgdmlldy4gdGhpcyB3aWxsIG1lYW4gZGVsZXRpbmcsIGVkaXRpbmcsIGFuZCBjbG9zaW5nIHRoZSBmb2N1c2VkIHZpZXcuIGxldHMgc3RhcnQgd2l0aCBjbG9zaW5nLiBcbi8vY2xvc2UgXG5jb25zdCBmb2N1c1ZpZXdDbG9zZUV2ZW50cyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykhPT0gJ2ZvY3VzVmlld0Nsb3NlQnRuJyl7cmV0dXJufVxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGUudGFyZ2V0LmNsb3Nlc3QoJy5mb2N1c1ZpZXdXcmFwJykpO1xuICAgIH0pXG5cbiAgICAvL2lmIHRoZXkgY2xpY2sgb3V0c2lkZSB0aGUgZm9ybSwgY2xvc2VzIHRoZSBjYXJkLiBiLmMgdGhlIHdyYXBwZXIgc3BhbnMgd2hvbGUgcGFnZS5cbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgIT09ICdmb2N1c1ZpZXdXcmFwJyl7cmV0dXJufVxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2N1c1ZpZXdXcmFwJykpO1xuICAgIH0pXG59XG5cbmZvY3VzVmlld0Nsb3NlRXZlbnRzKCk7XG5cbmV4cG9ydCB7cmVuZGVyQWxsVGFza3NTaW1wbGVWaWV3LCBuZXdUYXNrU3VibWl0RXZlbnRIYW5kbGVyLCBmb2N1c1ZpZXdFdmVudEhhbmRsZXJ9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHRhc2tDb250cm9sbGVyLCB0YXNrc0xpc3QsIHRhc2tFdmVudEZ1bmNzLCB0YXNrSWRDb250cm9sbGVyLCBnZXROZXdUYXNrRm9ybVZhbHVlcywgbmV3VGFza0V2ZW50QWRkZXIgfSBcbmZyb20gXCIuL3N0YXRlLWxvZ2ljXCI7XG5pbXBvcnQge2luaXRpYWxQYWdlTG9hZH0gZnJvbSBcIi4vbGFuZGluZy1wYWdlXCI7XG5pbXBvcnQgeyBuZXdUYXNrU3VibWl0RXZlbnRIYW5kbGVyLCByZW5kZXJBbGxUYXNrc1NpbXBsZVZpZXcsIGZvY3VzVmlld0V2ZW50SGFuZGxlciB9IGZyb20gXCIuL3Rhc2stcmVuZGVyXCI7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmluaXRpYWxQYWdlTG9hZCgpO1xubmV3VGFza0V2ZW50QWRkZXIoKTtcbm5ld1Rhc2tTdWJtaXRFdmVudEhhbmRsZXIoKTtcbmZvY3VzVmlld0V2ZW50SGFuZGxlcigpO1xucmVuZGVyQWxsVGFza3NTaW1wbGVWaWV3KCk7XG50YXNrc0xpc3QuZ2V0Q3VycmVudEFycigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==