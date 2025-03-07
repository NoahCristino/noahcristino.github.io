(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _utils = __webpack_require__(13);
var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(36)("" + id);
  }
  return __webpack_require__('' + id);
};
exports["default"] = requireById;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(12);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _requireUniversalModule = __webpack_require__(35);
Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});
var _reportChunks = __webpack_require__(37);
Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(17);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _hoistNonReactStatics = __webpack_require__(19);
var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);
var _context = __webpack_require__(18);
var _context2 = _interopRequireDefault(_context);
var _utils = __webpack_require__(13);
var _helpers = __webpack_require__(38);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}
var hasBabelPlugin = false;
var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (false)
  );
};
var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};
function universal(asyncModule) {
  var _class, _temp;
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var userRender = opts.render,
    _opts$loading = opts.loading,
    Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
    _opts$error = opts.error,
    Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
    _opts$minDelay = opts.minDelay,
    minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
    _opts$alwaysDelay = opts.alwaysDelay,
    alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
    _opts$testBabelPlugin = opts.testBabelPlugin,
    testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
    _opts$loadingTransiti = opts.loadingTransition,
    loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
    options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);
  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);
    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;
        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }
        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }
          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
          error = state.error;
        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }
        this.setState(state);
      }
      // $FlowFixMe
    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
          addModule = _req.addModule,
          requireSync = _req.requireSync,
          requireAsync = _req.requireAsync,
          asyncOnly = _req.asyncOnly;
        var mod = void 0;
        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }
        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)
        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }
        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }
        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};
        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
          requireAsync = _req2.requireAsync,
          requireSync = _req2.requireSync;
        var mod = void 0;
        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }
        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};
        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
          requireSync = _req3.requireSync;
        var mod = requireSync(props);
        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }
        return mod;
      }
    }]);
    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);
      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));
      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;
        _this.handleAfter(state, isMount, isSync, isServer);
      };
      _this.state = _this.init(_this.props);
      // $FlowFixMe
      _this.state.error = null;
      return _this;
    }
    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;
        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
            requireSync = _req4.requireSync,
            requireAsync = _req4.requireAsync,
            shouldUpdate = _req4.shouldUpdate;
          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;
            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }
            this.handleBefore(false, !!mod);
            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }
            var state = {
              mod: mod
            };
            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }
            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
          isLoading = _props.isLoading,
          userError = _props.error,
          props = _objectWithoutProperties(_props, ['isLoading', 'error']);
        var _state = this.state,
          mod = _state.mod,
          error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
          requireSync = _req5.requireSync,
          shouldUpdate = _req5.shouldUpdate;
        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }
        return null;
      }
    }]);
    return UniversalComponent;
  }(_react2["default"].Component), _class.contextType = _context2["default"], _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(34)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(4);

// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(26);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(8);

// CONCATENATED MODULE: /home/noah/noahcristino.github.io/noahcristino.github.io/src/components/Router.js

// EXTERNAL MODULE: /home/noah/noahcristino.github.io/noahcristino.github.io/src/app.css
var app = __webpack_require__(46);

// CONCATENATED MODULE: /home/noah/noahcristino.github.io/noahcristino.github.io/src/App.js






// Any routes that start with 'dynamic' will be treated as non-static routes
Object(external_react_static_["addPrefetchExcludes"])(["dynamic"]);
function App() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_helmet_["Helmet"], null, /*#__PURE__*/external_react_default.a.createElement("script", {
    "data-goatcounter": "https://noahcristino.goatcounter.com/count",
    async: true,
    src: "//gc.zgo.at/count.js"
  }), /*#__PURE__*/external_react_default.a.createElement("title", null, "Noah Cristino")), /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: /*#__PURE__*/external_react_default.a.createElement("div", {
      id: "loading"
    }, /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "loader"
    }))
  }, /*#__PURE__*/external_react_default.a.createElement(router_["Router"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  }))));
}
/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(12);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};
var _react = __webpack_require__(0);
var React = _interopRequireWildcard(_react);
var _requireById = __webpack_require__(3);
var _requireById2 = _interopRequireDefault(_requireById);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }
    newObj["default"] = obj;
    return newObj;
  }
}
var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);
var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};
var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};
var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }
  return null;
};
var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};
var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};
var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};
var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }
    return createElement(Loading, props);
  };
};
var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};
var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};
var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};
var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};
var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("/home/noah/noahcristino.github.io/noahcristino.github.io/node_modules/react-static/lib/browser");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
var ReportContext = _react2["default"].createContext({
  report: function report() {}
});
exports["default"] = ReportContext;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(2);

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__(6);

// CONCATENATED MODULE: /home/noah/noahcristino.github.io/noahcristino.github.io/src/data.js


var resume = "./resume.pdf";
var profile = {
  name: "Noah Cristino",
  title: "Fullstack Developer",
  bio: "I am a Software Engineer committed to building reliable, scalable, and efficient software.",
  profilePic: "./me.png"
};
var projects = [{
  name: "ReadTogether",
  image: "./readtogether.png",
  description: "A social eBook platform connecting readers to discuss, share insights, and enhance understanding through community and AI-powered tools.",
  stack: ["React", "Next.js", "Node.js", "AI"]
}, {
  name: "Webalyze",
  image: "./webalyze.png",
  description: "A visual code analysis tool designed to provide clear insights into codebase structure.",
  stack: ["React", "Node.js", "Chart.js"]
}, {
  name: "AIReply",
  image: "./aireply.png",
  description: "An AI-driven tool that generates intelligent email replies, streamlining communication.",
  stack: ["React", "Flask", "AI"]
}, {
  name: "SmileDetector",
  image: "./smiledetector.png",
  description: "A high-speed, accurate machine learning model that detects smiles in images and videos.",
  stack: ["Python", "TensorFlow", "OpenCV"]
}];
var jobs = [{
  title: "Systems Engineer",
  company: "Blue Mantis",
  startDate: "Sep 2023",
  endDate: "Aug 2024",
  description: "I worked on cloud migration and automation, using AWS and Azure.",
  stack: ["AWS", "Azure"]
}, {
  title: "Fullstack Developer",
  company: "The BRIDGE",
  startDate: "Jan 2023",
  endDate: "Apr 2023",
  description: "I worked on the SDDH Data Hub project, using React and Node.js.",
  stack: ["React", "Node.js", "JavaScript", "Docker", "Express"]
}];
var data_education = {
  school: "University of Toronto",
  major: "Bachelors of Science in Computer Science",
  specialization: "Specialization in Software Engineering",
  image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/640px-Utoronto_coa.svg.png"
};
var socialIcons = [{
  icon: free_solid_svg_icons_["faEnvelope"],
  link: "mailto:noah@noahcristino.com"
}, {
  icon: free_brands_svg_icons_["faGithub"],
  link: "https://github.com/NoahCristino"
}, {
  icon: free_brands_svg_icons_["faLinkedinIn"],
  link: "https://linkedin.com/in/noahcristino"
}, {
  icon: free_brands_svg_icons_["faDiscord"],
  link: "https://discord.com/users/crrrssssss"
}, {
  icon: free_brands_svg_icons_["faGoodreads"],
  link: "https://goodreads.com/user/show/179282883"
}];

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(1);

// CONCATENATED MODULE: /home/noah/noahcristino.github.io/noahcristino.github.io/src/components/Hero/SocialLink.js


var SocialLink_SocialLink = function SocialLink(_ref) {
  var href = _ref.href,
    icon = _ref.icon;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    "class": "social-link",
    onClick: function onClick() {
      return window.open(href, "_blank");
    }
  }, /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: icon,
    size: "2x",
    color: "white"
  }));
};
/* harmony default export */ var Hero_SocialLink = (SocialLink_SocialLink);
// CONCATENATED MODULE: /home/noah/noahcristino.github.io/noahcristino.github.io/src/components/Hero/Hero.js




var Hero_Hero = function Hero() {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "left-column"
  }, /*#__PURE__*/external_react_default.a.createElement("h1", {
    id: "name"
  }, profile.name), /*#__PURE__*/external_react_default.a.createElement("p", {
    id: "title"
  }, profile.title), /*#__PURE__*/external_react_default.a.createElement("img", {
    id: "me",
    src: profile.profilePic
  }), /*#__PURE__*/external_react_default.a.createElement("p", {
    id: "bio"
  }, profile.bio), /*#__PURE__*/external_react_default.a.createElement("div", {
    id: "social"
  }, socialIcons.map(function (socialIcon) {
    return /*#__PURE__*/external_react_default.a.createElement(Hero_SocialLink, socialIcon);
  })));
};
/* harmony default export */ var components_Hero_Hero = (Hero_Hero);
// CONCATENATED MODULE: /home/noah/noahcristino.github.io/noahcristino.github.io/src/components/Content/Pill.js

var Pill_Pill = function Pill(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    "class": "stack-item"
  }, text);
};
/* harmony default export */ var Content_Pill = (Pill_Pill);
// CONCATENATED MODULE: /home/noah/noahcristino.github.io/noahcristino.github.io/src/components/Content/Project.js




var Project_Project = function Project(_ref) {
  var project = _ref.project,
    delay = _ref.delay;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "project",
    style: {
      animationDuration: "".concat(delay, "s")
    }
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "project-image-container"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: project.image
  })), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "project-content"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    "class": "project-header"
  }, /*#__PURE__*/external_react_default.a.createElement("h2", null, project.name), /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    className: "project-icon",
    icon: free_solid_svg_icons_["faArrowUpRightFromSquare"],
    size: "1x"
  })), /*#__PURE__*/external_react_default.a.createElement("p", {
    "class": "project-description"
  }, project.description), /*#__PURE__*/external_react_default.a.createElement("div", {
    "class": "project-stack"
  }, project.stack.map(function (stackItem) {
    return /*#__PURE__*/external_react_default.a.createElement(Content_Pill, {
      text: stackItem
    });
  }))));
};
/* harmony default export */ var Content_Project = (Project_Project);
// CONCATENATED MODULE: /home/noah/noahcristino.github.io/noahcristino.github.io/src/components/Content/Job.js


var Job_Job = function Job(_ref) {
  var job = _ref.job;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "job"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    "class": "job-header"
  }, /*#__PURE__*/external_react_default.a.createElement("p", null, job.startDate, " -", "\n", job.endDate)), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("h2", {
    "class": "job-title"
  }, job.title, " @ ", job.company), /*#__PURE__*/external_react_default.a.createElement("div", {
    "class": "job-description"
  }, job.description), /*#__PURE__*/external_react_default.a.createElement("div", {
    "class": "job-stack"
  }, job.stack.map(function (stackItem) {
    return /*#__PURE__*/external_react_default.a.createElement(Content_Pill, {
      text: stackItem
    });
  }))));
};
/* harmony default export */ var Content_Job = (Job_Job);
// CONCATENATED MODULE: /home/noah/noahcristino.github.io/noahcristino.github.io/src/components/Content/MoreLink.js


var MoreLink_MoreLink = function MoreLink(_ref) {
  var text = _ref.text,
    icon = _ref.icon,
    link = _ref.link;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    "class": "more-link",
    onClick: function onClick() {
      return window.open(link, "_blank");
    }
  }, /*#__PURE__*/external_react_default.a.createElement("h2", null, text), /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: icon,
    size: "1x"
  }));
};
/* harmony default export */ var Content_MoreLink = (MoreLink_MoreLink);
// CONCATENATED MODULE: /home/noah/noahcristino.github.io/noahcristino.github.io/src/components/Content/Education.js

var Education_Education = function Education(_ref) {
  var education = _ref.education;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    "class": "education"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: education.image
  }), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("h2", {
    "class": "education-title"
  }, education.school), /*#__PURE__*/external_react_default.a.createElement("div", {
    "class": "education-major"
  }, education.major, "\n", education.specialization)));
};
/* harmony default export */ var Content_Education = (Education_Education);
// CONCATENATED MODULE: /home/noah/noahcristino.github.io/noahcristino.github.io/src/components/Content/Content.js







var Content_Content = function Content() {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "right-column"
  }, projects.map(function (project, index) {
    return /*#__PURE__*/external_react_default.a.createElement(Content_Project, {
      project: project,
      delay: (index + 1) * 0.5
    });
  }), /*#__PURE__*/external_react_default.a.createElement(Content_MoreLink, {
    text: "View More Projects",
    icon: free_solid_svg_icons_["faArrowUpRightFromSquare"]
  }), jobs.map(function (job, index) {
    return /*#__PURE__*/external_react_default.a.createElement(Content_Job, {
      job: job,
      delay: (index + 1) * 0.5
    });
  }), /*#__PURE__*/external_react_default.a.createElement(Content_MoreLink, {
    text: "View Full Resume",
    icon: free_solid_svg_icons_["faDownload"],
    link: resume
  }), /*#__PURE__*/external_react_default.a.createElement(Content_Education, {
    education: data_education
  }));
};
/* harmony default export */ var components_Content_Content = (Content_Content);
// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(15);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(7);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react-tsparticles"
var external_react_tsparticles_ = __webpack_require__(27);
var external_react_tsparticles_default = /*#__PURE__*/__webpack_require__.n(external_react_tsparticles_);

// EXTERNAL MODULE: external "tsparticles-slim"
var external_tsparticles_slim_ = __webpack_require__(28);

// CONCATENATED MODULE: /home/noah/noahcristino.github.io/noahcristino.github.io/src/components/Background.js




 // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

var Background_Background = function Background() {
  var particlesInit = Object(external_react_["useCallback"])(/*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()(/*#__PURE__*/regenerator_default.a.mark(function _callee(engine) {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(external_tsparticles_slim_["loadSlim"])(engine);
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), []);
  var particlesLoaded = Object(external_react_["useCallback"])(/*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()(/*#__PURE__*/regenerator_default.a.mark(function _callee2(container) {
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return console.log(container);
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }(), []);
  return /*#__PURE__*/external_react_default.a.createElement(external_react_tsparticles_default.a, {
    id: "tsparticles",
    options: {
      particles: {
        number: {
          value: 35,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0,
            sync: false
          }
        },
        size: {
          value: 4,
          random: true,
          anim: {
            enable: false,
            speed: 4,
            size_min: 0.3,
            sync: false
          }
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 600
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false,
            mode: "bubble"
          },
          onclick: {
            enable: false,
            mode: "remove"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 100,
            size: 0,
            duration: 1,
            opacity: 0,
            speed: 3
          },
          repulse: {
            distance: 150,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    },
    init: particlesInit,
    loaded: particlesLoaded
  });
};
/* harmony default export */ var components_Background = (Background_Background);
// CONCATENATED MODULE: /home/noah/noahcristino.github.io/noahcristino.github.io/src/pages/index.js




var pages_Index = function Index() {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/external_react_default.a.createElement(components_Hero_Hero, null), /*#__PURE__*/external_react_default.a.createElement(components_Content_Content, null), /*#__PURE__*/external_react_default.a.createElement(components_Background, null));
};
/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(0));
var _reactStatic = __webpack_require__(4);
var _router = __webpack_require__(8);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
    userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
          rest = _objectWithoutProperties(_ref2, ["children"]);
        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();
        var RouteHandler = function RouteHandler(props) {
          return /*#__PURE__*/_react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };
        var renderedChildren = /*#__PURE__*/
        // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), /*#__PURE__*/_react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location

        return typeof document === 'undefined' ? /*#__PURE__*/_react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (/*#__PURE__*/
          // Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return /*#__PURE__*/_react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};
exports["default"] = _default;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-tsparticles");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("tsparticles-slim");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30);
__webpack_require__(32);
module.exports = __webpack_require__(39);


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable import/no-dynamic-require */
var plugins = __webpack_require__(31)["default"];
var _require = __webpack_require__(16),
  registerPlugins = _require.registerPlugins;
registerPlugins(plugins);
if (false) {}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports


// Plugins
var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}];

// Export em!
/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable import/no-dynamic-require */
var _require = __webpack_require__(16),
  registerTemplates = _require.registerTemplates;
var _require2 = __webpack_require__(33),
  templates = _require2["default"],
  notFoundTemplate = _require2.notFoundTemplate;
registerTemplates(templates, notFoundTemplate);
if (false) {}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);






Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404 */).then(__webpack_require__.bind(null, 22))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.js';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/index */).then(__webpack_require__.bind(null, 23))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(23);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/index";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/index.js';

// Template Map
/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.js': t_0,
  '__react_static_root__/src/pages/index.js': t_1
});
// Not Found Template
var notFoundTemplate = "__react_static_root__/src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};
    module.paths = [];
    // module.parent = undefined by default
    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }
  return module;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
exports["default"] = requireUniversalModule;
var _utils = __webpack_require__(13);
var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();
function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
    _options$timeout = options.timeout,
    timeout = _options$timeout === undefined ? 15000 : _options$timeout,
    onLoad = options.onLoad,
    onError = options.onError,
    isDynamic = options.isDynamic,
    modCache = options.modCache,
    promCache = options.promCache,
    usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
    path = config.path,
    resolve = config.resolve,
    load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';
  var requireSync = function requireSync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (!exp) {
      var mod = void 0;
      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }
      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }
    return exp;
  };
  var requireAsync = function requireAsync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);
      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };
      var request = load(props, {
        resolve: resolve,
        reject: reject
      });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };
  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;
          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }
      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }
      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };
  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };
  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}
var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};
var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};
var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};
var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }
    return resultingConfig;
  }
  var load = typeof universalConfig === 'function' ? universalConfig :
  // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 3,
	"./": 3,
	"./index": 3,
	"./index.js": 3
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 36;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(12);
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(17);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _context = __webpack_require__(18);
var _context2 = _interopRequireDefault(_context);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);
  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);
    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));
    _this.state = {
      report: props.report
    };
    return _this;
  }
  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement(_context2["default"].Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);
  return ReportChunks;
}(_react2["default"].Component);
ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;
var _hoistNonReactStatics = __webpack_require__(19);
var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
var _index = __webpack_require__(5);
var _index2 = _interopRequireDefault(_index);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;
  if (!state.error) {
    state.error = null;
  }
  return __handleAfter(props, state, isMount, isSync, isServer);
};

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */
var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
    error = state.error;
  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });
    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }
  return state;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(20);
var _interopRequireWildcard = __webpack_require__(21);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(0));
var _useStaticInfo = __webpack_require__(40);
var _Suspense = _interopRequireDefault(__webpack_require__(41));

/* eslint-disable import/no-dynamic-require */
// Override the suspense module to be our own
// This is expected to break when using preact
// In order to make it work with preact 10, use `patch-package` to remove those 2 lines
// Reference: https://github.com/react-static/react-static/pull/1500
React.Suspense = _Suspense["default"];
React["default"].Suspense = _Suspense["default"];
var App = __webpack_require__(44)["default"];
var _default = function _default(staticInfo) {
  return function (props) {
    return /*#__PURE__*/React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, /*#__PURE__*/React.createElement(App, props));
  };
};
exports["default"] = _default;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("/home/noah/noahcristino.github.io/noahcristino.github.io/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(21);
var _interopRequireDefault = __webpack_require__(20);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(42));
var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(43));
var React = _interopRequireWildcard(__webpack_require__(0));
var OriginalSuspense = React.Suspense;
function Suspense(_ref) {
  var key = _ref.key,
    children = _ref.children,
    rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? /*#__PURE__*/React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: key
  }, children);
}
var _default = Suspense;
exports["default"] = _default;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);




// Your top level component


// Export your top level component as JSX (for static rendering)
/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);

// Render your app
if (typeof document !== "undefined") {
  var target = document.getElementById("root");
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;
  var render = function render(Comp) {
    renderMethod(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  };

  // Render!
  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept("./App", function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(45)(module)))

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule);
    // module.parent = undefined by default
    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }
  return module;
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap);", ""]);

// Module
exports.push([module.i, "* {\n  scroll-behavior: smooth;\n  scrollbar-width: none;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  --text-primary: #c9d4e3;\n  --text-secondary: #7a91b1;\n  --badge-bg: #0b162a;\n  --project-bg: #071220;\n  --bg: #03080f;\n\n}\n\nbody {\n  font-family: \"Geist\", serif;\n  font-weight: 600;\n  font-optical-sizing: auto;\n  font-style: normal;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n  background: var(--bg);\n  color: var(--text-primary);\n}\n\n.container {\n  justify-self: center;\n  width: 80rem;\n  display: flex;\n  min-height: 100vh;\n  flex-direction: row;\n}\n\n@media only screen and (max-width: 992px) {\n  .container {\n    flex-direction: column !important;\n  }\n  .left-column {\n    width: 100% !important;\n    position: relative !important;\n    height: auto !important;\n  }\n\n  .right-column {\n    width: 100% !important;\n  }\n\n  .container {\n    width: 80% !important;\n  }\n}\n\n.left-column {\n  width: 50%;\n  flex-shrink: 0;\n  overflow: hidden;\n  position: sticky; /* Add this line */\n  top: 0; /* Add this line */\n  left: 0; /* Add this line */\n  height: 100vh;\n  padding-top: 4rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  animation: fade-in 1s;\n}\n\n.right-column {\n  padding-top: 4rem;\n  flex-grow: 1;\n}\n\n#me {\n  height: 14rem;\n  aspect-ratio: 1/1;\n  border-radius: 50%;\n  margin-bottom: 1rem;\n  overflow: hidden;\n  -o-object-fit: cover;\n     object-fit: cover;\n  background-color: var(--project-bg);\n}\n\n#name {\n  font-size: 3rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n  text-align: center;\n}\n\n#title {\n  font-size: 1.5rem;\n  font-weight: 500;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n\n#job {\n  font-size: 1.5rem;\n  font-weight: 500;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n\n#bio {\n  font-size: 1rem;\n  font-weight: 400;\n  margin-bottom: 1rem;\n  margin-top: 0.5rem;\n  text-align: center;\n  width: 60%;\n  color: var(--text-secondary);\n  line-height: 1.5;\n}\n\n#social {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n\n.social-link {\n  height: 3rem;\n  aspect-ratio: 1/1;\n  -o-object-fit: cover;\n     object-fit: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.social-link svg {\n  height: 90%;\n  width: 90%;\n  color: var(--text-primary);\n  transition: color 0.3s;\n}\n\n.social-link:hover svg {\n  color: white;\n  cursor: pointer;\n}\n\n.project {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  padding: 1rem;\n  border-radius: 0.5rem;\n  transition: background 0.3s;\n  animation: fade-in 1s;\n  transition: opacity 0.3s;\n}\n\n\n@keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.education {\n  display: flex;\n  gap: 2rem;\n  margin-bottom: 4rem;\n  padding: 1rem;\n  border-radius: 0.5rem;\n  transition: background 0.3s;\n}\n\n.education-major {\n  font-size: 1rem;\n  font-weight: 400;\n  margin-top: 0.5rem;\n  color: var(--text-secondary);\n  white-space: pre-line;\n}\n\n.job {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  padding: 1rem;\n  border-radius: 0.5rem;\n  transition: background 0.3s;\n  animation: fade-in 1s;\n}\n\n.job-header {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n\n.job-header p {\n  white-space: pre-line;\n}\n\n.job-stack {\n  display: flex;\n  margin-top: 1rem;\n  gap: 0.5rem;\n}\n\n.job-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n}\n\n.project h2 {\n  font-size: 1.5rem;\n  font-weight: 700;  \n}\n\n.project-image-container {\n  flex-basis: 33%;\n  border-radius: 0.5rem;\n}\n\n.project-content {\n  flex-basis: 66%;\n}\n\n.project img {\n  aspect-ratio: 16/9;\n  width: 100%;\n  -o-object-fit: stretch;\n     object-fit: stretch;\n  border-radius: 0.5rem;\n}\n\n.education img {\n  aspect-ratio: 1/1;\n  width: 5rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.project-header {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  margin-bottom: 0.5rem;\n  transition: all .3s;\n}\n\n.project:hover {\n  cursor: pointer;\n  background: var(--project-bg);\n  opacity: 1 !important;\n}\n\ndiv:has(> .project:hover) .project {\n  opacity: 0.5;\n}\n\n.project-icon {\n  transition: all .3s;\n}\n\n.project:hover .project-icon {\n  padding-left: .25rem;\n  padding-bottom: .25rem;\n}\n\n.more-link {\n  animation: fade-in 1s;\n}\n\n.more-link svg {\n  transition: all .3s;\n}\n\n.more-link:hover svg {\n  padding-left: .25rem;\n  padding-bottom: .25rem;\n}\n\n.project-stack {\n  display: flex;\n  margin-top: 1rem;\n  gap: 0.5rem;\n}\n\n.stack-item {\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  background: var(--badge-bg);\n  color: var(--text-secondary);\n}\n\n.project-description {\n  font-size: 1rem;\n  font-weight: 400;\n  margin-top: 1rem;\n  color: var(--text-secondary);\n}\n\n.job-description {\n  font-size: 1rem;\n  font-weight: 400;\n  margin-top: 1rem;\n  color: var(--text-secondary);\n}\n\n.more-link {\n  display: flex;\n  margin-top: 1rem;\n  margin-bottom: 4rem;\n  font-size: 1rem;\n  margin-left: 1rem;\n  color: var(--text-secondary);\n  gap: 0.5rem;\n  align-items: center;\n}\n\n.more-link:hover {\n  cursor: pointer;\n  color: var(--text-primary);\n}\n\n#tsparticles {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n\n#loading {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--bg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 100;\n}\n\n.loader {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: block;\n  margin:15px auto;\n  position: relative;\n  box-sizing: border-box;\n  animation: rotation 1s linear infinite;\n}\n.loader::after,\n.loader::before {\n  content: '';  \n  box-sizing: border-box;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background: #FFF;\n  width: 16px;\n  height: 16px;\n  transform: translate(-50%, 50%);\n  border-radius: 50%;\n}\n.loader::before {\n  left: auto;\n  right: 0;\n  background: #FFF;\n  transform: translate(50%, 100%);\n}\n\n@keyframes rotation {\n0% {\n  transform: rotate(0deg);\n}\n100% {\n  transform: rotate(360deg);\n}\n} \n\n@keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n} \n\n#tsparticles {\n  animation-delay: 3s;\n  animation: fade-in 5s;\n}", ""]);



/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);
      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list

  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }
    var alreadyImportedModules = {};
    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];
      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }
    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }
        list.push(item);
      }
    }
  };
  return list;
};
function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }
  return [content].join('\n');
} // Adapted from convert-source-map (MIT)

function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ })
/******/ ]);
});