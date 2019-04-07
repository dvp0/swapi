/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_favicon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var utils_favicon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(utils_favicon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var typestyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29);
/* harmony import */ var utils_values__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44);
/* harmony import */ var components_film__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(45);
/* harmony import */ var components_home__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(74);





// js modules




 // utils

 // components


 // Only generic css needed

Object(typestyle__WEBPACK_IMPORTED_MODULE_8__["cssRule"])("html, body", {
  background: utils_values__WEBPACK_IMPORTED_MODULE_10__["colors"].charcoal,
  margin: "0px",
  color: utils_values__WEBPACK_IMPORTED_MODULE_10__["colors"].white
});
Object(typestyle__WEBPACK_IMPORTED_MODULE_8__["cssRule"])("a", {
  color: utils_values__WEBPACK_IMPORTED_MODULE_10__["colors"].whiskey,
  textDecoration: "none",
  $nest: {
    "&:visited": {
      color: utils_values__WEBPACK_IMPORTED_MODULE_10__["colors"].whiskey
    },
    "&:hover": {
      color: utils_values__WEBPACK_IMPORTED_MODULE_10__["colors"].amber,
      textDecoration: "underline"
    }
  }
}); // Using classic React.Component as hooks doesn't have proper
// support for error boundry yet

var Wrapper =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Wrapper, _React$Component);

  function Wrapper() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Wrapper);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Wrapper).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Wrapper, [{
    key: "componentDidCatchError",
    value: function componentDidCatchError(e) {
      console.error(e);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_reach_router__WEBPACK_IMPORTED_MODULE_9__["Router"], null, react__WEBPACK_IMPORTED_MODULE_6__["createElement"](components_home__WEBPACK_IMPORTED_MODULE_12__["Home"], {
        path: "/"
      }), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](components_film__WEBPACK_IMPORTED_MODULE_11__["Film"], {
        path: "films/:filmId"
      }));
    }
  }]);

  return Wrapper;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(react_dom__WEBPACK_IMPORTED_MODULE_7__["render"])(react__WEBPACK_IMPORTED_MODULE_6__["createElement"](Wrapper, null), document.getElementById("root"));

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPIRE_IN_SECONDS", function() { return EXPIRE_IN_SECONDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
// global setting for cache busting time 300 seconds = 5 minutes
var EXPIRE_IN_SECONDS = 300; // enums for colors for consistency

var colors = {
  charcoal: "#121517",
  dark: "#000000",
  gray: "#262b2f",
  pale: "#D5D5D5",
  white: "#FFFFFF",
  amber: "#DAB900",
  whiskey: "#544700",
  transparent: "transparent"
};

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Film", function() { return Film; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_sortby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);
/* harmony import */ var lodash_sortby__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_sortby__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hooks_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53);
/* harmony import */ var hooks_characters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59);
/* harmony import */ var hooks_species__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60);
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61);
/* harmony import */ var widgets_plasma__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62);
/* harmony import */ var widgets_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63);
/* harmony import */ var visuals_back__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67);
/* harmony import */ var widgets_pulse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(66);
/* harmony import */ var styles_film__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73);














function Character(_ref) {
  var character = _ref.character;
  var mass = character.mass === Infinity ? " - " : character.mass;
  var height = character.height === Infinity ? " - " : character.height;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles_film__WEBPACK_IMPORTED_MODULE_12__["_styles"].character
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(widgets_image__WEBPACK_IMPORTED_MODULE_9__["Image"], {
    isCharacter: true,
    text: character.name
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, character.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    title: "Mass"
  }, mass, "kg"), " | ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    title: "Height"
  }, height, "cm")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    title: "Home world"
  }, "\u2302 ", character.homeworld));
}

function Sortable(_ref2) {
  var active = _ref2.active,
      onChange = _ref2.onChange,
      direction = _ref2.direction,
      onDirectionChange = _ref2.onDirectionChange;
  var options = ["name", "mass", "homeworld", "height"];

  var _onDirectionChange = function _onDirectionChange() {
    return direction === "asc" ? onDirectionChange("desc") : onDirectionChange("asc");
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles_film__WEBPACK_IMPORTED_MODULE_12__["_styles"].allSorts
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles_film__WEBPACK_IMPORTED_MODULE_12__["_styles"].sortWrapper
  }, options.map(function (o, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: i,
      onClick: function onClick() {
        return onChange(o);
      },
      className: styles_film__WEBPACK_IMPORTED_MODULE_12__["_styles"].sort(active === o)
    }, o);
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    onClick: _onDirectionChange,
    className: styles_film__WEBPACK_IMPORTED_MODULE_12__["_styles"].arrow
  }, direction === "asc" && "↑", direction === "desc" && "↓"));
}

function CharacterList(_ref3) {
  var movie = _ref3.movie,
      setCharacters = _ref3.setCharacters;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("name"),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      sort = _useState2[0],
      setSort = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("asc"),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      direction = _useState4[0],
      setDirection = _useState4[1];

  var _useCharactersFetch = Object(hooks_characters__WEBPACK_IMPORTED_MODULE_5__["useCharactersFetch"])(movie),
      charactersData = _useCharactersFetch.charactersData,
      charactersLoading = _useCharactersFetch.charactersLoading; //  all the magic in there


  var _sortedChars = lodash_sortby__WEBPACK_IMPORTED_MODULE_2___default()(charactersData, function (o) {
    return o[sort];
  });

  var _characters = direction === "desc" ? _sortedChars.reverse() : _sortedChars;

  if (charactersData.length) {
    // SpeciesList (sibling) component relies on this data, so rather than introducing
    // something like redux which would be overkill for one use case of this app,
    // doing this neat trick where parent component will take care of passing it
    // down to sibling component
    setCharacters(charactersData);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles_film__WEBPACK_IMPORTED_MODULE_12__["_styles"].charactersWrapper
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles_film__WEBPACK_IMPORTED_MODULE_12__["_styles"].charactersTitle
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Characters"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(widgets_pulse__WEBPACK_IMPORTED_MODULE_11__["LoadingPulse"], {
    condition: charactersLoading
  }), !!_characters.length && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Sortable, {
    active: sort,
    onChange: setSort,
    onDirectionChange: setDirection,
    direction: direction
  })), !!_characters.length && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles_film__WEBPACK_IMPORTED_MODULE_12__["_styles"].characters
  }, _characters.map(function (c, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Character, {
      key: i,
      character: c
    });
  })));
}

function SpeciesList(_ref4) {
  var movie = _ref4.movie,
      characters = _ref4.characters;

  var _useSpeciesFetch = Object(hooks_species__WEBPACK_IMPORTED_MODULE_6__["useSpeciesFetch"])((movie || {}).species, characters),
      speciesData = _useSpeciesFetch.speciesData,
      speciesLoading = _useSpeciesFetch.speciesLoading;

  if (speciesData && !speciesLoading) {
    var _last = speciesData.pop(); // because .... linguistic .... perfection


    var renderTupal = function renderTupal(s) {
      return pluralize__WEBPACK_IMPORTED_MODULE_3___default()(s.name.toLowerCase(), s.value, true);
    };

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: styles_film__WEBPACK_IMPORTED_MODULE_12__["_styles"].speciesList
    }, "This movie has ", speciesData.map(function (s) {
      return renderTupal(s);
    }).join(", "), " and ", renderTupal(_last), ".");
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(widgets_pulse__WEBPACK_IMPORTED_MODULE_11__["LoadingPulse"], {
    condition: !!characters.length && speciesLoading
  });
}

function Film(_ref5) {
  var filmId = _ref5.filmId;

  var _useFetch = Object(hooks_fetch__WEBPACK_IMPORTED_MODULE_4__["useFetch"])(utils_api__WEBPACK_IMPORTED_MODULE_7__["api"].film(filmId)),
      data = _useFetch.data,
      loading = _useFetch.loading;

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      characters = _useState6[0],
      setCharacters = _useState6[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles_film__WEBPACK_IMPORTED_MODULE_12__["_styles"].wrapper
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(widgets_plasma__WEBPACK_IMPORTED_MODULE_8__["LoadingSaber"], {
    condition: loading
  }), data && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles_film__WEBPACK_IMPORTED_MODULE_12__["_styles"].left
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(visuals_back__WEBPACK_IMPORTED_MODULE_10__["BackButton"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles_film__WEBPACK_IMPORTED_MODULE_12__["_styles"].right
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles_film__WEBPACK_IMPORTED_MODULE_12__["_styles"].headerWrapper
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles_film__WEBPACK_IMPORTED_MODULE_12__["_styles"].image
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(widgets_image__WEBPACK_IMPORTED_MODULE_9__["Image"], {
    text: data.title
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles_film__WEBPACK_IMPORTED_MODULE_12__["_styles"].content
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, data.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: styles_film__WEBPACK_IMPORTED_MODULE_12__["_styles"].sub
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Episode ", data.episode_id), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Release on ", data.release_date), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Directed by ", data.director))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SpeciesList, {
    movie: data,
    characters: characters
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CharacterList, {
    movie: data,
    setCharacters: setCharacters
  }))));
}

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetch", function() { return useFetch; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57);




 // Custom React Hook for fetching and caching single url results

function useFetch(url) {
  var deps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var cachedResult = Object(utils_cache__WEBPACK_IMPORTED_MODULE_4__["getCachedResult"])(url);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function getData() {
      return _getData.apply(this, arguments);
    } // In newer 16.X.X versions, react enforces this way of declaring async methods 
    // within useEffect and calling it right away rather than directly returning
    // async function as following 
    //
    // useEffect(async () => {....
    //


    function _getData() {
      _getData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response, _data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(cachedResult && cachedResult.expiresAt >= Date.now())) {
                  _context.next = 4;
                  break;
                }

                setData(cachedResult.data);
                _context.next = 14;
                break;

              case 4:
                setLoading(true);
                _context.next = 7;
                return fetch(url);

              case 7:
                response = _context.sent;
                _context.next = 10;
                return response.json();

              case 10:
                _data = _context.sent;
                Object(utils_cache__WEBPACK_IMPORTED_MODULE_4__["cacheResult"])(url, _data);
                setData(_data);
                setLoading(false);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getData.apply(this, arguments);
    }

    getData(); //eslint-disable-next-line
  }, [cachedResult, url].concat(deps));
  return {
    data: data,
    loading: loading
  };
}

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCachedResult", function() { return getCachedResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheResult", function() { return cacheResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAndCacheResult", function() { return fetchAndCacheResult; });
/* harmony import */ var utils_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var localstorage_fifo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);


var cache = new localstorage_fifo__WEBPACK_IMPORTED_MODULE_1__["default"]({
  namespace: 'darth'
}); // Simple yet robust local storage caching system

function getCachedResult(url) {
  return cache.get(encodeURI(url));
}
function cacheResult(url, data) {
  cache.set(encodeURI(url), {
    expiresAt: Date.now() + utils_values__WEBPACK_IMPORTED_MODULE_0__["EXPIRE_IN_SECONDS"] * 1000,
    data: data
  });
}
function fetchAndCacheResult(url) {
  var cachedResult = getCachedResult(url);

  if (cachedResult && cachedResult.expiresAt >= Date.now()) {
    return Promise.resolve(cachedResult.data);
  } else {
    return fetch(url).then(function (r) {
      return r.json();
    }).then(function (data) {
      cacheResult(url, data);
      return data;
    });
  }
}

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCharactersFetch", function() { return useCharactersFetch; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57);






function getUniqueHomes(characters) {
  return characters.reduce(function (aggr, character) {
    if (aggr.indexOf(character.homeworld) < 0) {
      return aggr.concat([character.homeworld]);
    }

    return aggr;
  }, []);
}

function cleanValue(value) {
  return value === "unknown" ? Infinity : parseFloat(value.replace(",", ""));
} // This is responsible for getting data for all the characters in a movie (parallel fetching)
// + finding unique home types from the those results
// + fetching deatails of these homes (parallel fetching)
// + constructing following structure to be used later on for rendering
// [{
//   name,
//   homeworld,
//   mass,
//   height,
//   species
// }]


function useCharactersFetch() {
  var _movie = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var movie = _movie || {};
  var urls = movie.characters || [];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      charactersData = _useState2[0],
      setCharsData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      charactersLoading = _useState4[0],
      setCharactersLoading = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function getCharactersAndHomes() {
      return _getCharactersAndHomes.apply(this, arguments);
    }

    function _getCharactersAndHomes() {
      _getCharactersAndHomes = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var finalResults, _charsPromises, _charsResults, _uniqueHomeUrls, _homesPromises, _homesResults;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!urls.length) {
                  _context.next = 15;
                  break;
                }

                setCharactersLoading(true);
                finalResults = [];
                _charsPromises = urls.map(function (url) {
                  return Object(utils_cache__WEBPACK_IMPORTED_MODULE_4__["fetchAndCacheResult"])(url);
                });
                _context.next = 6;
                return Promise.all(_charsPromises);

              case 6:
                _charsResults = _context.sent;
                _uniqueHomeUrls = getUniqueHomes(_charsResults);
                _homesPromises = _uniqueHomeUrls.map(function (url) {
                  return Object(utils_cache__WEBPACK_IMPORTED_MODULE_4__["fetchAndCacheResult"])(url);
                });
                _context.next = 11;
                return Promise.all(_homesPromises);

              case 11:
                _homesResults = _context.sent;

                _charsResults.forEach(function (character) {
                  finalResults.push({
                    name: character.name,
                    homeworld: _homesResults.find(function (h) {
                      return h.url === character.homeworld;
                    }).name,
                    mass: cleanValue(character.mass),
                    height: cleanValue(character.height),
                    species: character.species[0]
                  });
                });

                setCharsData(finalResults);
                setCharactersLoading(false);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getCharactersAndHomes.apply(this, arguments);
    }

    getCharactersAndHomes();
  }, [urls, movie]);
  return {
    charactersData: charactersData,
    charactersLoading: charactersLoading
  };
}

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSpeciesFetch", function() { return useSpeciesFetch; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57);




 // Responsible for fetching all the species and based on previously fetched
// character details, counts the number of each species in that list
// returning following format for ease of rendering
// [{
//   name: "Humans",
//   value: 3
// }]

function useSpeciesFetch() {
  var speciesUrls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _charactersData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var charactersData = _charactersData || [];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      speciesData = _useState2[0],
      setSpeciesData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      speciesLoading = _useState4[0],
      setSpeciesLoading = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function useSpeciesDataFetch() {
      return _useSpeciesDataFetch.apply(this, arguments);
    }

    function _useSpeciesDataFetch() {
      _useSpeciesDataFetch = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _speciesPromises, _speciesResults, _data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(speciesUrls.length && charactersData.length)) {
                  _context.next = 9;
                  break;
                }

                setSpeciesLoading(true);
                _speciesPromises = speciesUrls.map(function (url) {
                  return Object(utils_cache__WEBPACK_IMPORTED_MODULE_4__["fetchAndCacheResult"])(url);
                });
                _context.next = 5;
                return Promise.all(_speciesPromises);

              case 5:
                _speciesResults = _context.sent;
                _data = _speciesResults.map(function (s) {
                  return {
                    name: s.name,
                    value: charactersData.filter(function (c) {
                      return c.species === s.url;
                    }).length
                  };
                });
                setSpeciesData(_data);
                setSpeciesLoading(false);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _useSpeciesDataFetch.apply(this, arguments);
    }

    useSpeciesDataFetch(_charactersData);
  }, [_charactersData, charactersData, speciesUrls]);
  return {
    speciesData: speciesData,
    speciesLoading: speciesLoading
  };
}

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
var api = {
  // application pages
  homePage: "/",
  moviePage: function moviePage(id) {
    return "films/".concat(id);
  },
  // third party / util urls
  films: "https://swapi.co/api/films/",
  film: function film(id) {
    return "https://swapi.co/api/films/".concat(id, "/");
  },
  poster: function poster(title) {
    return "/poster?title=".concat(title);
  },
  character: function character(title) {
    return "/character_thumbnail?name=".concat(title);
  }
};

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSaber", function() { return LoadingSaber; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typestyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var utils_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);


 // pure css implementation of lightsaber gif
// this block is taken from https://codepen.io/ncerminara/pen/KzurJ?editors=1100
// and modified to be animated

Object(typestyle__WEBPACK_IMPORTED_MODULE_1__["cssRaw"])("\n\t.lightsaber { \n\t\tposition: relative;\n\t\theight: 270px;\n\t}\n\n\t.lightsaber label {\n\t\tcursor: pointer;\n\t\tposition: absolute;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tz-index: 88;\n\t\ttext-indent: -9999px;\n\t\twidth: 15px;\n\t\theight: 50px;\n\t\tborder-bottom: solid 4px grey;\n\t\tborder-top: solid 5px grey;\n\t\tborder-radius: 5px;\n\t\t-moz-border-radius: 5px;\n\t\t-webkit-border-radius: 5px;\n\t\t-o-border-radius: 5px;\n\t\t-ms-border-radius: 5px;\n\t\tbackground: rgb(226,226,226); /* Old browsers */\n\t\tbackground: linear-gradient(to right, rgba(226,226,226,1) 0%,rgba(219,219,219,1) 50%,rgba(209,209,209,1) 51%,rgba(254,254,254,1) 100%); /* W3C */\n\t\tbackground: -moz-linear-gradient(left, rgba(226,226,226,1) 0%, rgba(219,219,219,1) 50%, rgba(209,209,209,1) 51%, rgba(254,254,254,1) 100%); /* FF3.6+ */\n\t\tbackground: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(226,226,226,1)), color-stop(50%,rgba(219,219,219,1)), color-stop(51%,rgba(209,209,209,1)), color-stop(100%,rgba(254,254,254,1))); /* Chrome,Safari4+ */\n\t\tbackground: -webkit-linear-gradient(left, rgba(226,226,226,1) 0%,rgba(219,219,219,1) 50%,rgba(209,209,209,1) 51%,rgba(254,254,254,1) 100%); /* Chrome10+,Safari5.1+ */\n\t\tbackground: -o-linear-gradient(left, rgba(226,226,226,1) 0%,rgba(219,219,219,1) 50%,rgba(209,209,209,1) 51%,rgba(254,254,254,1) 100%); /* Opera 11.10+ */\n\t\tbackground: -ms-linear-gradient(left, rgba(226,226,226,1) 0%,rgba(219,219,219,1) 50%,rgba(209,209,209,1) 51%,rgba(254,254,254,1) 100%); /* IE10+ */\n\t\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#fefefe',GradientType=1 ); /* IE6-9 */\n\t}\n\n\t.lightsaber .switch {\n\t\tbackground: #B94A37;\n\t\twidth: 5px;\n\t\theight: 10px;\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\tbottom: 25px;\n\t\tleft: 13px;\n\t\ttransition: left 200ms;\n\t\t-moz-transition: left 200ms;\n\t\t-webkit-transition: left 200ms;\n\t\t-o-transition: left 200ms;\n\t\t-ms-transition: left 200ms;\n\t\tborder-radius: 10px;\n\t\t-moz-border-radius: 10px;\n\t\t-webkit-border-radius: 10px;\n\t\t-o-border-radius: 10px;\n\t\t-ms-border-radius: 10px;\n\t}\n\n\t.lightsaber input[type=checkbox] {\n\t\tposition: absolute;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\topacity: 0;\n\t\t-moz-opacity: 0;\n\t\t-webkit-opacity: 0;\n\t\t-o-opacity: 0;\n\t\t-ms-opacity: 0;\n\t\tz-index: 77;\n\t}\n\n\t.lightsaber .plasma {\n\t\ttransition: height 300ms,;\n\t\t-moz-transition: height 300ms;\n\t\t-webkit-transition: height 300ms;\n\t\t-o-transition: height 300ms;\n\t\t-ms-transition: height 300ms;\n\t\tborder-radius: 12px 12px 0 0;\n\t\tposition: absolute;\n\t\tbottom: 55px;\n\t\tleft: 2px;\n\t\twidth: 10px;\n\t\tdisplay: block;\n\t\tfilter: blur(1px);\n\t\t-moz-filter: blur(1px);\n\t\t-webkit-filter: blur(1px);\n\t\t-o-filter: blur(1px);\n\t\t-ms-filter: blur(1px);\n\t\theight: 0;\n\t}\n\n\n\t.lightsaber input[type=checkbox]:checked ~ div.plasma {\n\t\theight: 250px;\n\t}\n\n\t.lightsaber input[type=checkbox]:hover ~ div.switch {\n\t\tbackground: #c09853;\n\t\tleft: 12px;\n\t}\n\n\t.lightsaber input[type=checkbox]:checked ~ div.switch {\n\t\tbackground: #468847;\n\t}\n\n\t.yoda {\n\t\tbackground: rgb(135,220,90); /* Old browsers */\n\t\tbackground: linear-gradient(to right, rgb(135,220,90) 0%,rgb(254,254,254) 30%,rgb(254,254,254) 50%,rgb(254,254,254) 70%,rgb(135,220,90) 100%); /* W3C */\n\t\tbackground: -moz-linear-gradient(left, rgb(135,220,90) 0%, rgb(254,254,254) 30%, rgb(254,254,254) 50%, rgb(254,254,254) 70%, rgb(135,220,90) 100%); /* FF3.6+ */\n\t\tbackground: -webkit-gradient(linear, left top, right top, color-stop(0%,rgb(135,220,90)), color-stop(30%,rgb(254,254,254)), color-stop(50%,rgb(254,254,254)), color-stop(70%,rgb(254,254,254)), color-stop(100%,rgb(135,220,90))); /* Chrome,Safari4+ */\n\t\tbackground: -webkit-linear-gradient(left, rgb(135,220,90) 0%,rgb(254,254,254) 30%,rgb(254,254,254) 50%,rgb(254,254,254) 70%,rgb(135,220,90) 100%); /* Chrome10+,Safari5.1+ */\n\t\tbackground: -o-linear-gradient(left, rgb(135,220,90) 0%,rgb(254,254,254) 30%,rgb(254,254,254) 50%,rgb(254,254,254) 70%,rgb(135,220,90) 100%); /* Opera 11.10+ */\n\t\tbackground: -ms-linear-gradient(left, rgb(135,220,90) 0%,rgb(254,254,254) 30%,rgb(254,254,254) 50%,rgb(254,254,254) 70%,rgb(135,220,90) 100%); /* IE10+ */\n\t\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#87dc5a', endColorstr='#87dc5a',GradientType=1 ); /* IE6-9 */\n\t\tanimation-name: yoda;\n\t\t-moz-animation-name: yoda;\n\t\t-webkit-animation-name: yoda;\n\t\t-o-animation-name: yoda;\n\t\t-ms-animation-name: yoda;\n\t\tanimation-duration: 1.5s;\n\t\t-moz-animation-duration: 1.5s;\n\t\t-webkit-animation-duration: 1.5s;\n\t\t-o-animation-duration: 1.5s;\n\t\t-ms-animation-duration: 1.5s;\n\t\tanimation-iteration-count: infinite;\n\t\t-moz-animation-iteration-count: infinite;\n\t\t-webkit-animation-iteration-count: infinite;\n\t\t-o-animation-iteration-count: infinite;\n\t\t-ms-animation-iteration-count: infinite;\n\t}\n\n\t.vader {\n\t\tbackground: rgb(229,17,21); /* Old browsers */\n\t\tbackground: linear-gradient(to right, rgba(229,17,21,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(229,17,21,1) 100%); /* W3C */\n\t\tbackground: -moz-linear-gradient(left, rgba(229,17,21,1) 0%, rgba(254,254,254,1) 30%, rgba(254,254,254,1) 47%, rgba(254,254,254,1) 71%, rgba(229,17,21,1) 100%); /* FF3.6+ */\n\t\tbackground: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(229,17,21,1)), color-stop(30%,rgba(254,254,254,1)), color-stop(47%,rgba(254,254,254,1)), color-stop(71%,rgba(254,254,254,1)), color-stop(100%,rgba(229,17,21,1))); /* Chrome,Safari4+ */\n\t\tbackground: -webkit-linear-gradient(left, rgba(229,17,21,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(229,17,21,1) 100%); /* Chrome10+,Safari5.1+ */\n\t\tbackground: -o-linear-gradient(left, rgba(229,17,21,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(229,17,21,1) 100%); /* Opera 11.10+ */\n\t\tbackground: -ms-linear-gradient(left, rgba(229,17,21,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(229,17,21,1) 100%); /* IE10+ */\n\t\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e51115', endColorstr='#e51115',GradientType=1 ); /* IE6-9 */\n\t\tanimation-name: vader;\n\t\t-moz-animation-name: vader;\n\t\t-webkit-animation-name: vader;\n\t\t-o-animation-name: vader;\n\t\t-ms-animation-name: vader;\n\t\tanimation-duration: 1.5s;\n\t\t-moz-animation-duration: 1.5s;\n\t\t-webkit-animation-duration: 1.5s;\n\t\t-o-animation-duration: 1.5s;\n\t\t-ms-animation-duration: 1.5s;\n\t\tanimation-iteration-count: infinite;\n\t\t-moz-animation-iteration-count: infinite;\n\t\t-webkit-animation-iteration-count: infinite;\n\t\t-o-animation-iteration-count: infinite;\n\t\t-ms-animation-iteration-count: infinite;\n\t}\n\n\t.windu {\n\t\tbackground: rgb(202,116,221); /* Old browsers */\n\t\tbackground: linear-gradient(to right, rgba(202,116,221,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(202,116,221,1) 100%); /* W3C */\n\t\tbackground: -moz-linear-gradient(left, rgba(202,116,221,1) 0%, rgba(254,254,254,1) 30%, rgba(254,254,254,1) 47%, rgba(254,254,254,1) 71%, rgba(202,116,221,1) 100%); /* FF3.6+ */\n\t\tbackground: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(202,116,221,1)), color-stop(30%,rgba(254,254,254,1)), color-stop(47%,rgba(254,254,254,1)), color-stop(71%,rgba(254,254,254,1)), color-stop(100%,rgba(202,116,221,1))); /* Chrome,Safari4+ */\n\t\tbackground: -webkit-linear-gradient(left, rgba(202,116,221,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(202,116,221,1) 100%); /* Chrome10+,Safari5.1+ */\n\t\tbackground: -o-linear-gradient(left, rgba(202,116,221,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(202,116,221,1) 100%); /* Opera 11.10+ */\n\t\tbackground: -ms-linear-gradient(left, rgba(202,116,221,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(202,116,221,1) 100%); /* IE10+ */\n\t\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ca74dd', endColorstr='#ca74dd',GradientType=1 ); /* IE6-9 */\n\t\tanimation-name: windu;\n\t\t-moz-animation-name: windu;\n\t\t-webkit-animation-name: windu;\n\t\t-o-animation-name: windu;\n\t\t-ms-animation-name: windu;\n\t\tanimation-duration: 1.5s;\n\t\t-moz-animation-duration: 1.5s;\n\t\t-webkit-animation-duration: 1.5s;\n\t\t-o-animation-duration: 1.5s;\n\t\t-ms-animation-duration: 1.5s;\n\t\tanimation-iteration-count: infinite;\n\t\t-moz-animation-iteration-count: infinite;\n\t\t-webkit-animation-iteration-count: infinite;\n\t\t-o-animation-iteration-count: infinite;\n\t\t-ms-animation-iteration-count: infinite;\n\t}\n\n\t.obi-wan {\n\t\tbackground: rgb(55,132,214); /* Old browsers */\n\t\tbackground: linear-gradient(to right, rgba(55,132,214,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(55,132,214,1) 100%); /* W3C */\n\t\tbackground: -moz-linear-gradient(left, rgba(55,132,214,1) 0%, rgba(254,254,254,1) 30%, rgba(254,254,254,1) 47%, rgba(254,254,254,1) 71%, rgba(55,132,214,1) 100%); /* FF3.6+ */\n\t\tbackground: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(55,132,214,1)), color-stop(30%,rgba(254,254,254,1)), color-stop(47%,rgba(254,254,254,1)), color-stop(71%,rgba(254,254,254,1)), color-stop(100%,rgba(55,132,214,1))); /* Chrome,Safari4+ */\n\t\tbackground: -webkit-linear-gradient(left, rgba(55,132,214,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(55,132,214,1) 100%); /* Chrome10+,Safari5.1+ */\n\t\tbackground: -o-linear-gradient(left, rgba(55,132,214,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(55,132,214,1) 100%); /* Opera 11.10+ */\n\t\tbackground: -ms-linear-gradient(left, rgba(55,132,214,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(55,132,214,1) 100%); /* IE10+ */\n\t\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3784d6', endColorstr='#3784d6',GradientType=1 ); /* IE6-9 */\n\t\tanimation-name: obi-wan;\n\t\t-moz-animation-name: obi-wan;\n\t\t-webkit-animation-name: obi-wan;\n\t\t-o-animation-name: obi-wan;\n\t\t-ms-animation-name: obi-wan;\n\t\tanimation-duration: 1.5s;\n\t\t-moz-animation-duration: 1.5s;\n\t\t-webkit-animation-duration: 1.5s;\n\t\t-o-animation-duration: 1.5s;\n\t\t-ms-animation-duration: 1.5s;\n\t\tanimation-iteration-count: infinite;\n\t\t-moz-animation-iteration-count: infinite;\n\t\t-webkit-animation-iteration-count: infinite;\n\t\t-o-animation-iteration-count: infinite;\n\t\t-ms-animation-iteration-count: infinite;\n\t}\n\n\tdiv {\n\t\t-webkit-transform : translateZ(0); \n\t\t-o-transform : translateZ(0); \n\t\t-moz-transform : translateZ(0); \n\t\ttransform : translateZ(0); \n\t}\n\n\t/* Animations */\n\t@keyframes yoda {\n\t\tfrom { box-shadow: 0 0 0px #7EC855;  height: 0px; }\n\t\t50% { box-shadow: 0 0 25px #7EC855; height: 270px; }\n\t\tto { box-shadow: 0 0 0px #7EC855;  height: 0px; }\n\t}\n\t@-moz-keyframes yoda {\n\t\tfrom { box-shadow: 0 0 0px #7EC855;  height: 0px; }\n\t\t50% { box-shadow: 0 0 25px #7EC855; height: 270px; }\n\t\tto { box-shadow: 0 0 0px #7EC855;  height: 0px; }\n\t}\n\t@-webkit-keyframes yoda {\n\t\tfrom { box-shadow: 0 0 0px #7EC855;  height: 0px; }\n\t\t50% { box-shadow: 0 0 25px #7EC855; height: 270px; }\n\t\tto { box-shadow: 0 0 0px #7EC855;  height: 0px; }\n\t}\n\t@-o-keyframes yoda {\n\t\tfrom { box-shadow: 0 0 0px #7EC855;  height: 0px; }\n\t\t50% { box-shadow: 0 0 25px #7EC855; height: 270px; }\n\t\tto { box-shadow: 0 0 0px #7EC855;  height: 0px; }\n\t}\n\t@-ms-keyframes yoda {\n\t\tfrom { box-shadow: 0 0 0px #7EC855;  height: 0px; }\n\t\t50% { box-shadow: 0 0 25px #7EC855; height: 270px; }\n\t\tto { box-shadow: 0 0 0px #7EC855;  height: 0px; }\n\t}\n\n\t@keyframes vader {\n\t\tfrom { box-shadow: 0 0 0px #e51115; height: 0; }\n\t\t50% { box-shadow: 0 0 25px #e51115; height: 270px; }\n\t\tto { box-shadow: 0 0 0px #e51115; height: 0; }\n\t}\n\t@-moz-keyframes vader {\n\t\tfrom { box-shadow: 0 0 0px #e51115; height: 0; }\n\t\t50% { box-shadow: 0 0 25px #e51115; height: 270px; }\n\t\tto { box-shadow: 0 0 0px #e51115; height: 0; }\n\t}\n\t@-webkit-keyframes vader {\n\t\tfrom { box-shadow: 0 0 0px #e51115; height: 0; }\n\t\t50% { box-shadow: 0 0 25px #e51115; height: 270px; }\n\t\tto { box-shadow: 0 0 0px #e51115; height: 0; }\n\t}\n\t@-o-keyframes vader {\n\t\tfrom { box-shadow: 0 0 0px #e51115; height: 0; }\n\t\t50% { box-shadow: 0 0 25px #e51115; height: 270px; }\n\t\tto { box-shadow: 0 0 0px #e51115; height: 0; }\n\t}\n\t@-ms-keyframes vader {\n\t\tfrom { box-shadow: 0 0 0px #e51115; height: 0; }\n\t\t50% { box-shadow: 0 0 25px #e51115; height: 270px; }\n\t\tto { box-shadow: 0 0 0px #e51115; height: 0; }\n\t}\n\n\t@keyframes windu {\n\t\tfrom { box-shadow: 0 0 0px #ca74dd; height: 0px; }\n\t\t50% { box-shadow: 0 0 25px #ca74dd; height: 270px; }\n\t\tto { box-shadow: 0 0 0px #ca74dd; height: 0px; }\n\t}\n\t@-moz-keyframes windu {\n\t\tfrom { box-shadow: 0 0 0px #ca74dd; height: 0px; }\n\t\t50% { box-shadow: 0 0 25px #ca74dd; height: 270px; }\n\t\tto { box-shadow: 0 0 0px #ca74dd; height: 0px; }\n\t}\n\t@-webkit-keyframes windu {\n\t\tfrom { box-shadow: 0 0 0px #ca74dd; height: 0px; }\n\t\t50% { box-shadow: 0 0 25px #ca74dd; height: 270px; }\n\t\tto { box-shadow: 0 0 0px #ca74dd; height: 0px; }\n\t}\n\t@-o-keyframes windu {\n\t\tfrom { box-shadow: 0 0 0px #ca74dd; height: 0px; }\n\t\t50% { box-shadow: 0 0 25px #ca74dd; height: 270px; }\n\t\tto { box-shadow: 0 0 0px #ca74dd; height: 0px; }\n\t}\n\t@-ms-keyframes windu {\n\t\tfrom { box-shadow: 0 0 0px #ca74dd; height: 0px; }\n\t\t50% { box-shadow: 0 0 25px #ca74dd; height: 270px; }\n\t\tto { box-shadow: 0 0 0px #ca74dd; height: 0px; }\n\t}\n\n\t@keyframes obi-wan {\n\t\tfrom { box-shadow: 0 0 0px #3784d6; height: 0px; }\n\t\t50% { box-shadow: 0 0 25px #3784d6; height: 270px; }\n\t\tto { box-shadow: 0 0 0px #3784d6; height: 0px; }\n\t}\n\t@-moz-keyframes obi-wan {\n\t\tfrom { box-shadow: 0 0 0px #3784d6; height: 0px; }\n\t\t50% { box-shadow: 0 0 25px #3784d6; height: 270px; }\n\t\tto { box-shadow: 0 0 0px #3784d6; height: 0px; }\n\t}\n\t@-webkit-keyframes obi-wan {\n\t\tfrom { box-shadow: 0 0 0px #3784d6; height: 0px; }\n\t\t50% { box-shadow: 0 0 25px #3784d6; height: 270px; }\n\t\tto { box-shadow: 0 0 0px #3784d6; height: 0px; }\n\t}\n\t@-o-keyframes obi-wan {\n\t\tfrom { box-shadow: 0 0 0px #3784d6; height: 0px; }\n\t\t50% { box-shadow: 0 0 25px #3784d6; height: 270px; }\n\t\tto { box-shadow: 0 0 0px #3784d6; height: 0px; }\n\t}\n\t@-ms-keyframes obi-wan {\n\t\tfrom { box-shadow: 0 0 0px #3784d6; height: 0px; }\n\t\t50% { box-shadow: 0 0 25px #3784d6; height: 270px; }\n\t\tto { box-shadow: 0 0 0px #3784d6; height: 0px; }\n\t}\n\n");

var _styles = Object(typestyle__WEBPACK_IMPORTED_MODULE_1__["stylesheet"])({
  wrapper: {
    left: "0px",
    top: "0px",
    height: "100vh",
    width: "100%",
    position: "fixed",
    background: utils_values__WEBPACK_IMPORTED_MODULE_2__["colors"].dark,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

function LoadingSaber(_ref) {
  var condition = _ref.condition;
  var plasmas = ["yoda", "obi-wan", "vader", "windu"];
  var random = plasmas[Math.floor(Math.random() * plasmas.length)];
  return condition && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _styles.wrapper
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "lightsaber"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
    type: "checkbox",
    defaultChecked: true
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "switch"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "plasma ".concat(random)
  })));
}

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var typestyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var widgets_pulse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66);
/* harmony import */ var hooks_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53);
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61);
/* harmony import */ var utils_values__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44);



 // helpers

 // static values




var _styles = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
  placeholder: function placeholder(isCharacter) {
    var _s = {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      color: utils_values__WEBPACK_IMPORTED_MODULE_6__["colors"].gray,
      background: utils_values__WEBPACK_IMPORTED_MODULE_6__["colors"].charcoal,
      height: "152px"
    };

    if (!isCharacter) {
      _s = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _s, {
        height: "250px",
        background: utils_values__WEBPACK_IMPORTED_MODULE_6__["colors"].dark
      });
    }

    return Object(typestyle__WEBPACK_IMPORTED_MODULE_2__["style"])(_s);
  }
}, Object(typestyle__WEBPACK_IMPORTED_MODULE_2__["stylesheet"])({
  image: {
    height: "inherit",
    width: "100%",
    borderRadius: "7px",
    textAlign: "center"
  },
  thumb: {
    background: utils_values__WEBPACK_IMPORTED_MODULE_6__["colors"].charcoal,
    height: "150px",
    width: "100px",
    objectFit: "cover",
    borderRadius: "5px"
  },
  placeholderText: {
    padding: "0px 10px"
  }
})); // It renders an empty box >> hits our express app to get link to the image >> renders the image
// these calls to the express app are also cached for time specified.


function Image(_ref) {
  var text = _ref.text,
      isCharacter = _ref.isCharacter;

  var _url = isCharacter ? utils_api__WEBPACK_IMPORTED_MODULE_5__["api"].character(text) : utils_api__WEBPACK_IMPORTED_MODULE_5__["api"].poster(text);

  var _isSurged = window.location.host.indexOf("surge.sh") > -1;

  var _placeholder = _isSurged ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
    href: "https://obi-van.herokuapp.com/"
  }, "Go to fun version") : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](widgets_pulse__WEBPACK_IMPORTED_MODULE_3__["LoadingPulse"], {
    condition: true,
    color: utils_values__WEBPACK_IMPORTED_MODULE_6__["colors"].charcoal
  });

  var _className = isCharacter ? _styles.thumb : _styles.image;

  if (!_isSurged) {
    var _useFetch = Object(hooks_fetch__WEBPACK_IMPORTED_MODULE_4__["useFetch"])(_url, [text]),
        data = _useFetch.data,
        loading = _useFetch.loading;

    if (!loading && data && !_isSurged) {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
        src: data.value,
        className: _className
      });
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: Object(typestyle__WEBPACK_IMPORTED_MODULE_2__["classes"])(_className, _styles.placeholder(isCharacter))
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _styles.placeholderText
  }, _placeholder));
}

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPulse", function() { return LoadingPulse; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typestyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var utils_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);


 // pure css implementation of pulse gif, this block is taken from https://loading.io/css/

Object(typestyle__WEBPACK_IMPORTED_MODULE_1__["cssRaw"])("\n  .lds-facebook {\n    display: inline-block;\n    position: relative;\n    width: 64px;\n    height: 64px;\n  }\n  .lds-facebook div {\n    display: inline-block;\n    position: absolute;\n    border-radius: 3px;\n    left: 6px;\n    width: 8px;\n    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n  }\n  .lds-facebook div:nth-child(1) {\n    left: 6px;\n    animation-delay: -0.24s;\n  }\n  .lds-facebook div:nth-child(2) {\n    left: 26px;\n    animation-delay: -0.12s;\n  }\n  .lds-facebook div:nth-child(3) {\n    left: 45px;\n    animation-delay: 0;\n  }\n  @keyframes lds-facebook {\n    0% {\n      top: 6px;\n      height: 51px;\n    }\n    50%, 100% {\n      top: 19px;\n      height: 26px;\n    }\n  }\n");

var _styles = Object(typestyle__WEBPACK_IMPORTED_MODULE_1__["stylesheet"])({
  wrapper: {
    display: "inline-flex",
    width: "64px",
    height: "40px",
    marginTop: "-7px"
  }
});

function LoadingPulse(_ref) {
  var condition = _ref.condition,
      color = _ref.color;
  var style = {
    background: color || utils_values__WEBPACK_IMPORTED_MODULE_2__["colors"].white
  };
  return condition ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _styles.wrapper
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "lds-facebook"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: style
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: style
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: style
  }))) : false;
}

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackButton", function() { return BackButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typestyle_lib_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony import */ var typestyle_lib_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typestyle_lib_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61);
/* harmony import */ var utils_values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);






var _styles = Object(typestyle_lib_index__WEBPACK_IMPORTED_MODULE_1__["stylesheet"])({
  back: {
    width: "50px",
    transform: "rotate(270deg)",
    margin: "35% auto",
    cursor: "pointer",
    paddingTop: "15px"
  },
  falconLines: {
    fill: utils_values__WEBPACK_IMPORTED_MODULE_3__["colors"].pale,
    $nest: {
      "&:hover": {
        fill: utils_values__WEBPACK_IMPORTED_MODULE_3__["colors"].white
      }
    }
  }
});

function BackButton() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    onClick: function onClick() {
      return Object(_reach_router__WEBPACK_IMPORTED_MODULE_4__["navigate"])(utils_api__WEBPACK_IMPORTED_MODULE_2__["api"].homePage);
    },
    className: _styles.back
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "data-name": "Ebene 1",
    viewBox: "0 0 32 40",
    x: "0px",
    y: "0px"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: _styles.falconLines,
    d: "M14.52,19.1a1.25,1.25,0,1,0,1.25-1.25A1.25,1.25,0,0,0,14.52,19.1Zm1.5,0c0,.28-.5.28-.5,0a.25.25,0,1,1,.5,0Z"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: _styles.falconLines,
    d: "M15.77,24.53a1.08,1.08,0,1,0,1.08,1.08A1.08,1.08,0,0,0,15.77,24.53Zm-.08,1.08a.08.08,0,1,1,.17,0C15.85,25.71,15.69,25.71,15.69,25.62Z"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: _styles.falconLines,
    d: "M13.35,24.17a1.08,1.08,0,1,0,1.08,1.08A1.08,1.08,0,0,0,13.35,24.17Zm-.08,1.08a.08.08,0,0,1,.17,0C13.43,25.34,13.27,25.34,13.27,25.25Z"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: _styles.falconLines,
    d: "M17.1,25.25a1.08,1.08,0,1,0,1.08-1.08A1.08,1.08,0,0,0,17.1,25.25Zm1,0a.08.08,0,0,1,.17,0C18.27,25.34,18.1,25.34,18.1,25.25Z"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: _styles.falconLines,
    d: "M15.77,26.92A1.08,1.08,0,1,0,16.85,28,1.08,1.08,0,0,0,15.77,26.92ZM15.69,28a.08.08,0,0,1,.17,0C15.85,28.09,15.69,28.09,15.69,28Z"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: _styles.falconLines,
    d: "M12.85,26.56a1.08,1.08,0,1,0,1.08,1.08A1.08,1.08,0,0,0,12.85,26.56Zm-.08,1.08a.08.08,0,0,1,.17,0C12.94,27.73,12.77,27.73,12.77,27.64Z"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: _styles.falconLines,
    d: "M17.6,27.64a1.08,1.08,0,1,0,1.08-1.08A1.08,1.08,0,0,0,17.6,27.64Zm1,0a.08.08,0,0,1,.17,0C18.77,27.73,18.6,27.73,18.6,27.64Z"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: _styles.falconLines,
    d: "M26.72,9.51a.5.5,0,0,0-.46-.31h-.87a.5.5,0,0,0-.47.33l-.41,1.17a.51.51,0,0,0,0,.17v.8L20,1.14a.5.5,0,0,0-.46-.31H16.93a.5.5,0,0,0-.5.5v3.8H15.1V1.33a.5.5,0,0,0-.5-.5H12a.5.5,0,0,0-.46.31L5.23,16h0a.48.48,0,0,0,0,.1.52.52,0,0,0,0,.09.49.49,0,0,0,0,.13.48.48,0,0,0,0,.07.5.5,0,0,0,.09.14l0,0a.48.48,0,0,0,.11.08l1.79.79h-2a.5.5,0,0,0-.5.5v2.33a.5.5,0,0,0,.5.5H7.42l-1.92.79a.5.5,0,0,0-.29.6A11,11,0,0,0,8.15,27l-.38.44a.5.5,0,0,0,0,.7,13.29,13.29,0,0,0,7.94,3,12.73,12.73,0,0,0,7.72-2.84.5.5,0,0,0,.06-.69l-.36-.46a10.94,10.94,0,0,0,3.15-5,.5.5,0,0,0-.27-.59l-1.72-.79h1.92a.5.5,0,0,0,.5-.5V17.94a.5.5,0,0,0-.5-.5H24.2L26,16.65a.5.5,0,0,0,.26-.65c-.11-.27-.24-.52-.36-.78l1-.42a.5.5,0,0,0,.3-.46V10.86a.5.5,0,0,0,0-.19Zm-1,.68h.18l.3.76v.36h-.75v-.37ZM16.93,17h0a2.39,2.39,0,1,1-1.18-.32,2.4,2.4,0,0,1,1.18.32Zm6.49,1.42v1.33H19.11a3.32,3.32,0,0,0,0-1.33Zm-5,2.79a3.4,3.4,0,0,0,.31-.46h2.69A5.91,5.91,0,0,1,20,23.2Zm-6.94,1.9a5.83,5.83,0,0,1-1.35-2.36h2.69a3.39,3.39,0,0,0,.3.45ZM6.35,15.92c1.57-3.58,4-5.81,7.11-6.53l-.31,3.33a6.93,6.93,0,0,0-4,4.44L6.34,15.93Zm8.42-9.79h2l.78,8.32H14Zm3.63,6.59-.31-3.35a8.64,8.64,0,0,1,3.17,1.41L19.17,13.1A6.84,6.84,0,0,0,18.39,12.72Zm-7.45,3,1.91,1.64,0,.08h-2.7A5.89,5.89,0,0,1,10.94,15.71Zm1.48,2.73a3.32,3.32,0,0,0,0,1.33H8.11V18.44Zm3.35-2.75a3.39,3.39,0,0,0-2.28.89l-1.9-1.63A5.9,5.9,0,0,1,13,13.87l-.1,1a.5.5,0,0,0,.5.55h4.66L17,15.92A3.38,3.38,0,0,0,15.77,15.69Zm2.7-.4a.5.5,0,0,0,.13-.38l-.1-1a5.93,5.93,0,0,1,1.27.9l-1.33.55Zm2.29-.94a6.9,6.9,0,0,0-.76-.68l2-2.25a11,11,0,0,1,1.57,1.76ZM19.22,1.83l3.92,9.27A9.84,9.84,0,0,0,18,8.33l-.26-2.75a.5.5,0,0,0-.29-.4V1.83Zm-6.91,0H14.1V5.18a.5.5,0,0,0-.29.4l-.26,2.76a10,10,0,0,0-5.17,2.77ZM5.78,18.44H7.11v1.33H5.78Zm.53,3.87,2.86-1.17a6.86,6.86,0,0,0,1.65,2.76l-2,2.34A10,10,0,0,1,6.31,22.3Zm9.45,7.86a12.25,12.25,0,0,1-6.89-2.48l5-5.78a3.39,3.39,0,0,0,3.85,0l4.76,5.95A11.8,11.8,0,0,1,15.76,30.17Zm6.79-3.77L20.62,24a6.94,6.94,0,0,0,1.79-3l2.82,1.31A10,10,0,0,1,22.55,26.4Zm3.2-6.64H24.42V18.44h1.33Zm-.57-3.84-3.33,1.42a.49.49,0,0,0-.13.09h-.89L25,15.61ZM18.65,17.3a3.41,3.41,0,0,0-.63-.74l7.14-3a.5.5,0,0,0,.31-.46v-.83h.75V14Z"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
    className: _styles.falconLines,
    cx: "12.83",
    cy: "4.3",
    r: "0.58"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: _styles.falconLines,
    d: "M12,8a1.08,1.08,0,1,0-1.08-1.08A1.08,1.08,0,0,0,12,8Zm0-1.17a.08.08,0,0,1,.08.08c0,.09-.17.09-.17,0A.08.08,0,0,1,12,6.83Z"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
    className: _styles.falconLines,
    cx: "18.67",
    cy: "4.3",
    r: "0.58"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: _styles.falconLines,
    d: "M18.43,6.92a1.08,1.08,0,1,0,1.08-1.08A1.08,1.08,0,0,0,18.43,6.92Zm1.08-.08a.08.08,0,0,1,.08.08c0,.09-.17.09-.17,0A.08.08,0,0,1,19.51,6.83Z"
  })));
}

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_styles", function() { return _styles; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typestyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var utils_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);



var _styles = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
  sort: function sort(isActive) {
    return Object(typestyle__WEBPACK_IMPORTED_MODULE_1__["style"])({
      padding: "7px 12px",
      fontSize: "14px",
      background: isActive ? utils_values__WEBPACK_IMPORTED_MODULE_2__["colors"].gray : utils_values__WEBPACK_IMPORTED_MODULE_2__["colors"].transparent,
      textTransform: "capitalize"
    });
  }
}, Object(typestyle__WEBPACK_IMPORTED_MODULE_1__["stylesheet"])({
  wrapper: {
    fontFamily: "arial",
    display: "flex",
    justifyContent: "space-between",
    height: "100vh",
    flexFlow: "row wrap",
    overflow: "hidden"
  },
  goBack: {
    padding: "50px"
  },
  left: {
    flex: 1,
    height: "inherit",
    background: utils_values__WEBPACK_IMPORTED_MODULE_2__["colors"].dark,
    color: utils_values__WEBPACK_IMPORTED_MODULE_2__["colors"].white
  },
  right: {
    width: "85%",
    height: "inherit",
    background: utils_values__WEBPACK_IMPORTED_MODULE_2__["colors"].charcoal,
    overflow: "scroll"
  },
  headerWrapper: {
    margin: "4%",
    marginBottom: "0",
    display: "flex",
    flexFlow: "row wrap"
  },
  charactersWrapper: {
    margin: "4%",
    padding: "25px 30px",
    background: utils_values__WEBPACK_IMPORTED_MODULE_2__["colors"].dark,
    borderRadius: "20px"
  },
  content: {
    flex: 1,
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "space-between",
    $nest: {
      "h1": {
        fontSize: "3em",
        margin: "0px",
        color: utils_values__WEBPACK_IMPORTED_MODULE_2__["colors"].white
      },
      "h4": {
        opacity: 0.7,
        fontWeight: "normal"
      }
    }
  },
  speciesList: {
    fontStyle: "italic",
    lineHeight: 1.5,
    width: "55%",
    paddingBottom: "10px"
  },
  image: {
    width: "16%",
    marginRight: "4%"
  },
  charactersTitle: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0px",
    $nest: {
      "h3": {
        fontSize: "2em",
        color: utils_values__WEBPACK_IMPORTED_MODULE_2__["colors"].white,
        margin: "0px"
      }
    }
  },
  characters: {
    display: "flex",
    flexFlow: "row nowrap",
    overflow: "scroll",
    marginTop: "30px"
  },
  character: {
    padding: "0 25px 10px 0",
    textAlign: "center",
    $nest: {
      "h3": {
        fontSize: "2em",
        color: utils_values__WEBPACK_IMPORTED_MODULE_2__["colors"].white,
        display: "inline-block"
      },
      "h5": {
        opacity: 0.7,
        margin: "5px"
      }
    }
  },
  sub: {
    width: "500px",
    display: "flex",
    justifyContent: "space-between"
  },
  thumbnail: {
    height: "auto",
    width: "inherit"
  },
  sortWrapper: {
    background: utils_values__WEBPACK_IMPORTED_MODULE_2__["colors"].charcoal,
    borderRadius: "3px",
    display: "inline-flex",
    overflow: "hidden",
    margin: "0 5px 5px",
    height: "fit-content"
  },
  allSorts: {
    display: "inline-flex",
    cursor: "pointer",
    marginTop: "5px"
  },
  arrow: {
    padding: "3px 0 0 15px"
  }
}));

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61);
/* harmony import */ var widgets_plasma__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62);
/* harmony import */ var widgets_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63);
/* harmony import */ var styles_home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75);
/* harmony import */ var visuals_wars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76);
 // helpers


 // static values

 // components


 // styles




function Movie(_ref) {
  var movie = _ref.movie;
  var movieId = movie.url.substr(-2, 1);

  var goToMovie = function goToMovie() {
    return Object(_reach_router__WEBPACK_IMPORTED_MODULE_2__["navigate"])(utils_api__WEBPACK_IMPORTED_MODULE_3__["api"].moviePage(movieId));
  };

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: styles_home__WEBPACK_IMPORTED_MODULE_6__["_styles"].eachMovie,
    onClick: goToMovie
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](widgets_image__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    text: movie.title
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null, movie.title), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", null, "Released on ", movie.release_date), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", null, "Episode ", movie.episode_id), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", null, "Director by ", movie.director));
}

function Home() {
  var _useFetch = Object(hooks_fetch__WEBPACK_IMPORTED_MODULE_1__["useFetch"])(utils_api__WEBPACK_IMPORTED_MODULE_3__["api"].films),
      data = _useFetch.data,
      loading = _useFetch.loading;

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](widgets_plasma__WEBPACK_IMPORTED_MODULE_4__["LoadingSaber"], {
    condition: loading
  }), data && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: styles_home__WEBPACK_IMPORTED_MODULE_6__["_styles"].logo
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](visuals_wars__WEBPACK_IMPORTED_MODULE_7__["StarWarsLogo"], null)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: styles_home__WEBPACK_IMPORTED_MODULE_6__["_styles"].wrapper
  }, data.results.map(function (each, index) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Movie, {
      key: index,
      movie: each
    });
  }))));
}

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_styles", function() { return _styles; });
/* harmony import */ var typestyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var utils_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);


var _styles = Object(typestyle__WEBPACK_IMPORTED_MODULE_0__["stylesheet"])({
  wrapper: {
    margin: "0px auto",
    padding: "0px 40px 0",
    fontFamily: "arial",
    display: "flex",
    justifyContent: "space-between"
  },
  eachMovie: {
    width: "calc(100% / 7)",
    height: "auto",
    padding: "15px 15px 0px",
    textAlign: "center",
    transition: "transform .2s",
    borderRadius: "10px",
    cursor: "pointer",
    $nest: {
      "h6": {
        opacity: 0,
        margin: "10px 0"
      },
      "&:hover": {
        zIndex: 1,
        transform: "scale(1.2)",
        background: utils_values__WEBPACK_IMPORTED_MODULE_1__["colors"].gray,
        boxShadow: "1px 1px 20px 5px ".concat(utils_values__WEBPACK_IMPORTED_MODULE_1__["colors"].dark),
        $nest: {
          "h6": {
            opacity: 0.7
          }
        }
      },
      "&:active": {
        transform: "scale(1.1)"
      }
    }
  },
  logo: {
    width: "100px",
    margin: "7% auto",
    display: "block"
  }
});

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarWarsLogo", function() { return StarWarsLogo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);


var StarWarsLogo = function StarWarsLogo() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", {
    version: "1.0",
    xmlns: "http://www.w3.org/2000/svg",
    width: "100%",
    viewBox: "0 0 673.000000 314.000000",
    preserveAspectRatio: "xMidYMid meet",
    style: {
      background: "rgb(255, 234, 5)"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    transform: "translate(0.000000,314.000000) scale(0.100000,-0.100000)",
    fill: utils_values__WEBPACK_IMPORTED_MODULE_1__["colors"].charcoal,
    stroke: "none"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M0 1570 l0 -1570 3365 0 3365 0 0 1570 0 1570 -3365 0 -3365 0 0 -1570z m3260 1100 l0 -200 -265 0 -265 0 0 -415 0 -415 -215 0 -215 0 0 415 0 415 -285 0 c-157 0 -285 -3 -285 -7 0 -5 42 -53 92 -108 60 -66 102 -122 122 -165 28 -59 31 -74 31 -165 0 -89 -3 -107 -29 -162 -33 -72 -113 -154 -180 -183 -78 -35 -168 -40 -758 -40 l-578 0 0 220 0 220 495 0 c272 0 495 4 495 8 0 5 -37 49 -82 98 -125 136 -173 260 -147 382 28 140 118 235 267 283 53 17 114 18 930 18 l872 1 0 -200z m1061 -410 c103 -333 184 -608 180 -613 -4 -4 -103 -6 -221 -5 l-213 3 -30 88 -29 87 -207 0 -207 0 -24 -77 c-13 -43 -28 -84 -33 -90 -12 -16 -432 -19 -442 -3 -3 5 76 282 177 615 l182 605 340 -2 340 -3 187 -605z m1212 595 c81 -21 132 -49 192 -106 124 -117 158 -294 86 -446 -28 -59 -105 -139 -163 -169 -31 -16 -29 -39 5 -48 12 -3 160 -6 330 -6 l307 0 0 -220 0 -220 -362 0 c-377 0 -453 7 -530 45 -18 9 -99 83 -180 163 l-148 147 0 -178 0 -177 -240 0 -240 0 0 615 0 615 443 0 c361 0 453 -3 500 -15z m-4563 -1457 c25 -87 48 -158 51 -158 3 0 25 71 50 158 l44 157 252 3 252 2 41 -132 c23 -73 46 -149 52 -168 l11 -35 24 80 c13 44 36 118 51 165 l27 85 228 3 c178 2 227 0 227 -10 0 -7 -82 -284 -182 -616 l-182 -602 -208 0 -207 0 -19 63 c-10 34 -41 135 -68 225 -27 89 -51 162 -54 162 -3 0 -37 -101 -75 -225 l-69 -225 -206 0 -206 0 -187 606 c-103 334 -184 611 -181 616 3 4 114 7 247 6 l241 -3 46 -157z m2197 150 c11 -14 373 -1185 373 -1205 0 -10 -51 -13 -219 -13 l-220 0 -28 88 -28 87 -206 3 -207 2 -27 -90 -28 -90 -224 0 c-168 0 -223 3 -223 12 0 17 350 1178 361 1201 9 16 36 17 338 17 251 0 331 -3 338 -12z m1453 -16 c125 -41 230 -138 267 -247 12 -33 17 -79 17 -135 -1 -141 -45 -224 -161 -307 -59 -42 -63 -47 -48 -62 14 -14 58 -16 337 -19 206 -2 324 0 331 7 7 7 -17 40 -73 102 -107 119 -142 192 -148 304 -3 65 0 91 18 137 44 118 164 212 304 237 36 7 211 11 443 11 l383 0 0 -200 0 -200 -305 0 c-177 0 -305 -4 -305 -9 0 -5 41 -53 91 -108 57 -62 102 -122 122 -163 30 -60 32 -72 32 -170 0 -99 -2 -110 -32 -171 -39 -79 -102 -140 -181 -177 l-57 -27 -525 -3 c-550 -4 -592 -1 -675 40 -22 11 -104 84 -182 161 l-143 141 0 -172 0 -172 -240 0 -240 0 0 616 0 615 453 -3 c433 -4 455 -5 517 -26z"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M3775 2394 c-15 -49 -36 -116 -46 -149 -10 -33 -19 -66 -19 -72 0 -10 26 -13 95 -13 67 0 95 4 95 12 0 15 -80 278 -90 297 -5 10 -17 -17 -35 -75z"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M5080 2445 l0 -75 143 0 c137 0 144 1 165 23 31 33 29 80 -4 106 -24 19 -40 21 -165 21 l-139 0 0 -75z"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M2801 1040 c-23 -74 -46 -147 -51 -162 -4 -14 -6 -29 -3 -32 12 -11 193 -7 193 5 0 8 -68 234 -94 314 -2 6 -22 -51 -45 -125z"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M4140 1130 l0 -80 133 0 c86 0 141 5 157 13 30 15 45 54 36 90 -11 46 -50 57 -196 57 l-130 0 0 -80z"
  })));
};

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

// fun utility to change favicon on every page load
(function () {
  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = "/favicon-".concat(Math.floor(Math.random() * 9), ".ico");
  document.getElementsByTagName('head')[0].appendChild(link);
})();

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map