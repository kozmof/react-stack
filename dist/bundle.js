/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Demo.tsx":
/*!*********************************!*\
  !*** ./src/components/Demo.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Stack_1 = __webpack_require__(/*! ./Stack */ "./src/components/Stack.tsx");
class Trainer {
    constructor(id, name, place) {
        this.id = id;
        this.name = name;
        this.place = place;
    }
}
class Pokemon {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
exports.props = {
    items: [new Trainer(0, "Red", "Mt. Silver"), new Trainer(1, "Kasumi", "Hanada City"), new Trainer(2, "Green", "Unknown")],
};
class IMStackDemo extends Stack_1.IMStack {
    constructor(props) {
        super(props, {});
    }
    callPack() {
        return (item) => {
            return (React.createElement("tr", { key: item.id },
                React.createElement("td", null,
                    "Name: ",
                    item.name),
                React.createElement("td", null,
                    "Place: ",
                    item.place),
                React.createElement("td", null,
                    React.createElement("button", { onClick: () => alert("!") }, "!"))));
        };
    }
}
exports.IMStackDemo = IMStackDemo;
class MStackDemo extends Stack_1.MStack {
    constructor() {
        super({}, { items: [new Pokemon(1, "Bulbasaur"), new Pokemon(4, "Charmander"), new Pokemon(7, "Squirtle")] });
    }
    callPack() {
        const remove = (id) => {
            const items = this.state.items;
            for (let n = 0; n < items.length; n++) {
                if (items[n].id === id) {
                    items.splice(n, 1);
                    this.setState({ items: items });
                    return;
                }
            }
        };
        return (item) => {
            return (React.createElement("tr", { key: item.id },
                React.createElement("td", null,
                    "Name: ",
                    item.name),
                React.createElement("td", null,
                    React.createElement("button", { onClick: () => remove(item.id) }, "!"))));
        };
    }
}
exports.MStackDemo = MStackDemo;


/***/ }),

/***/ "./src/components/Stack.tsx":
/*!**********************************!*\
  !*** ./src/components/Stack.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class IMStack extends React.Component {
    constructor(props, initial_state) {
        super(props);
        this.state = initial_state;
        this.callPack.bind(this);
    }
    render() {
        const items = this.props.items || [];
        const rows = items.map(this.callPack());
        return (React.createElement("table", null,
            React.createElement("tbody", null, rows)));
    }
}
exports.IMStack = IMStack;
class MStack extends React.Component {
    constructor(props, initial_state) {
        super(props);
        this.state = initial_state;
        this.callPack.bind(this);
    }
    render() {
        const rows = this.state.items.map(this.callPack());
        return (React.createElement("table", null,
            React.createElement("tbody", null, rows)));
    }
}
exports.MStack = MStack;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ReactDom = __webpack_require__(/*! react-dom */ "react-dom");
const Demo_1 = __webpack_require__(/*! ./components/Demo */ "./src/components/Demo.tsx");
ReactDom.render(React.createElement("div", null,
    React.createElement("p", null, " Immutable Stack"),
    React.createElement(Demo_1.IMStackDemo, { items: Demo_1.props.items }),
    React.createElement("p", null, " Mutable Stack"),
    React.createElement(Demo_1.MStackDemo, null)), document.getElementById("demo"));


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map