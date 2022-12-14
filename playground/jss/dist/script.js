/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _styles = __webpack_require__(1);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _jss = __webpack_require__(2);
	
	var _jss2 = _interopRequireDefault(_jss);
	
	var _jssNested = __webpack_require__(17);
	
	var _jssNested2 = _interopRequireDefault(_jssNested);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jss2.default.use((0, _jssNested2.default)());
	
	var _jss$createStyleSheet = _jss2.default.createStyleSheet(_styles2.default).attach();
	
	var classes = _jss$createStyleSheet.classes;
	
	// classes // {button: '.button--jss-0-0 ', ctaButton: '.ctaButton--jss-0-2'}
	
	document.body.innerHTML = '\n  <button class="' + classes.button + '">Button</button>\n  <br />\n  <button class="' + classes.ctaButton + '">CTA Button</button>\n  <p class="' + classes.p + '">Grumpy wizards make toxic brew for the evil Queen and Jack.</p>\n';

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function () {
	    var _1 = {},
	        _2 = {},
	        _3 = {},
	        _4 = {},
	        _5 = {},
	        _6 = {},
	        _7 = {},
	        _8 = {},
	        _9 = {},
	        _10 = {};
	    _2['font-family'] = '\'Raleway\'';
	    _2['font-style'] = 'normal';
	    _2['font-weight'] = '400';
	    _2['src'] = 'url(https://fonts.gstatic.com/s/raleway/v10/YZaO6llzOP57DpTBv2GnyFKPGs1ZzpMvnHX-7fPOuAc.woff2) format(\'woff2\')';
	    _2['unicode-range'] = 'U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF';
	    _3['font-family'] = '\'Lobster\'';
	    _3['font-style'] = 'normal';
	    _3['font-weight'] = '400';
	    _3['src'] = 'url(https://fonts.gstatic.com/s/lobster/v16/MeFZ5NpSE1j8mC06Jh1miFKPGs1ZzpMvnHX-7fPOuAc.woff2) format(\'woff2\')';
	    _3['unicode-range'] = 'U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116';
	    _4['background'] = 'blue';
	    _5['&:hover'] = _4;
	    _5['font-family'] = '\'Raleway\'';
	    _5['font-size'] = '12px';
	    _6['background'] = 'red';
	    _7['&:hover'] = _6;
	    _7['extend'] = 'button';
	    _8['font-family'] = '\'Lobster\'';
	    _9['button'] = _8;
	    _10['font-family'] = '\'Lobster\'';
	    _10['font-size'] = '20px';
	    _1['@font-face'] = [_2, _3];
	    _1['button'] = _5;
	    _1['ctaButton'] = _7;
	    _1['@media (max-width: 800px)'] = _9;
	    _1['p'] = _10;
	    return _1;
	}.apply(undefined);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Rule = exports.StyleSheet = exports.Jss = undefined;
	
	var _Jss = __webpack_require__(3);
	
	var _Jss2 = _interopRequireDefault(_Jss);
	
	var _StyleSheet = __webpack_require__(4);
	
	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
	
	var _Rule = __webpack_require__(7);
	
	var _Rule2 = _interopRequireDefault(_Rule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var jss = new _Jss2.default();
	
	// Hotfix for babel 5 migration, will be removed in version 4.0.0
	/**
	 * StyleSheets written in javascript.
	 *
	 * @copyright Oleg Slobodskoi 2014-2016
	 * @website https://github.com/jsstyles/jss
	 * @license MIT
	 */
	
	module.exports = exports = jss;
	
	// For testing only.
	exports.Jss = _Jss2.default;
	exports.StyleSheet = _StyleSheet2.default;
	exports.Rule = _Rule2.default;
	exports.default = jss;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _StyleSheet = __webpack_require__(4);
	
	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
	
	var _PluginsRegistry = __webpack_require__(15);
	
	var _PluginsRegistry2 = _interopRequireDefault(_PluginsRegistry);
	
	var _SheetsRegistry = __webpack_require__(16);
	
	var _SheetsRegistry2 = _interopRequireDefault(_SheetsRegistry);
	
	var _utils = __webpack_require__(5);
	
	var _createRule2 = __webpack_require__(6);
	
	var _createRule3 = _interopRequireDefault(_createRule2);
	
	var _findRenderer = __webpack_require__(12);
	
	var _findRenderer2 = _interopRequireDefault(_findRenderer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Main Jss class.
	 *
	 * @api public
	 */
	
	var Jss = function () {
	  function Jss() {
	    _classCallCheck(this, Jss);
	
	    this.sheets = new _SheetsRegistry2.default();
	    this.plugins = new _PluginsRegistry2.default();
	    this.uid = _utils.uid;
	  }
	
	  /**
	   * Creates a new instance of Jss.
	   *
	   * @see Jss
	   * @api public
	   */
	
	
	  _createClass(Jss, [{
	    key: 'create',
	    value: function create() {
	      return new Jss();
	    }
	
	    /**
	     * Create a stylesheet.
	     *
	     * @see StyleSheet
	     * @api public
	     */
	
	  }, {
	    key: 'createStyleSheet',
	    value: function createStyleSheet(rules, options) {
	      var sheet = new _StyleSheet2.default(rules, _extends({}, options, { jss: this }));
	      this.sheets.add(sheet);
	      return sheet;
	    }
	
	    /**
	     * Create a rule.
	     *
	     * @see createRule
	     * @api public
	     */
	
	  }, {
	    key: 'createRule',
	    value: function createRule(selector, style, options) {
	      // Enable rule without selector.
	      if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) == 'object') {
	        options = style;
	        style = selector;
	        selector = null;
	      }
	      var rule = (0, _createRule3.default)(selector, style, _extends({}, options, {
	        jss: this,
	        Renderer: (0, _findRenderer2.default)(options)
	      }));
	      this.plugins.run(rule);
	      return rule;
	    }
	
	    /**
	     * Register plugin. Passed function will be invoked with a rule instance.
	     *
	     * @param {Function} plugins
	     * @api public
	     */
	
	  }, {
	    key: 'use',
	    value: function use() {
	      var _this = this;
	
	      for (var _len = arguments.length, plugins = Array(_len), _key = 0; _key < _len; _key++) {
	        plugins[_key] = arguments[_key];
	      }
	
	      plugins.forEach(function (plugin) {
	        return _this.plugins.use(plugin);
	      });
	      return this;
	    }
	  }]);
	
	  return Jss;
	}();
	
	exports.default = Jss;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(5);
	
	var _createRule2 = __webpack_require__(6);
	
	var _createRule3 = _interopRequireDefault(_createRule2);
	
	var _findRenderer = __webpack_require__(12);
	
	var _findRenderer2 = _interopRequireDefault(_findRenderer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * StyleSheet model.
	 *
	 * Options:
	 *
	 *  - 'media' style element attribute
	 *  - 'title' style element attribute
	 *  - 'type' style element attribute
	 *  - 'named' true by default - keys are names, selectors will be generated,
	 *    if false - keys are global selectors
	 *  - 'link' link renderable CSS rules with their corresponding models, false
	 *    by default because fast by default
	 *
	 * @param {Object} [rules] object with selectors and declarations
	 * @param {Object} [options]
	 * @api public
	 */
	
	var StyleSheet = function () {
	  function StyleSheet(rules, options) {
	    _classCallCheck(this, StyleSheet);
	
	    this.options = _extends({}, options);
	    if (this.options.named == null) this.options.named = true;
	    this.rules = Object.create(null);
	    this.classes = Object.create(null);
	    this.attached = false;
	    this.deployed = false;
	    this.linked = false;
	
	    var Renderer = (0, _findRenderer2.default)(this.options);
	    this.options.Renderer = Renderer;
	    this.renderer = new Renderer(this.options);
	
	    for (var name in rules) {
	      this.createRule(name, rules[name]);
	    }
	  }
	
	  /**
	   * Attach renderable to the render tree.
	   *
	   * @api public
	   * @return {StyleSheet}
	   */
	
	
	  _createClass(StyleSheet, [{
	    key: 'attach',
	    value: function attach() {
	      if (this.attached) return this;
	      if (!this.deployed) this.deploy();
	      this.renderer.attach();
	      if (!this.linked && this.options.link) this.link();
	      this.attached = true;
	      return this;
	    }
	
	    /**
	     * Remove renderable from render tree.
	     *
	     * @return {StyleSheet}
	     * @api public
	     */
	
	  }, {
	    key: 'detach',
	    value: function detach() {
	      if (!this.attached) return this;
	      this.renderer.detach();
	      this.attached = false;
	      return this;
	    }
	
	    /**
	     * Add a rule to the current stylesheet. Will insert a rule also after the stylesheet
	     * has been rendered first time.
	     *
	     * @param {Object} [name] can be selector or name if ??options.named is true
	     * @param {Object} style property/value hash
	     * @return {Rule}
	     * @api public
	     */
	
	  }, {
	    key: 'addRule',
	    value: function addRule(name, style) {
	      var rule = this.createRule(name, style);
	      // Don't insert rule directly if there is no stringified version yet.
	      // It will be inserted all together when .attach is called.
	      if (this.deployed) {
	        var renderable = this.renderer.insertRule(rule);
	        if (this.options.link) rule.renderable = renderable;
	      }
	      return rule;
	    }
	
	    /**
	     * Create rules, will render also after stylesheet was rendered the first time.
	     *
	     * @param {Object} rules name:style hash.
	     * @return {Array} array of added rules
	     * @api public
	     */
	
	  }, {
	    key: 'addRules',
	    value: function addRules(rules) {
	      var added = [];
	      for (var name in rules) {
	        added.push(this.addRule(name, rules[name]));
	      }
	      return added;
	    }
	
	    /**
	     * Get a rule.
	     *
	     * @param {String} name can be selector or name if `named` option is true.
	     * @return {Rule}
	     * @api public
	     */
	
	  }, {
	    key: 'getRule',
	    value: function getRule(name) {
	      return this.rules[name];
	    }
	
	    /**
	     * Convert rules to a CSS string.
	     *
	     * @param {Object} options
	     * @return {String}
	     * @api public
	     */
	
	  }, {
	    key: 'toString',
	    value: function toString(options) {
	      var rules = this.rules;
	
	      var stringified = Object.create(null);
	      var str = '';
	      for (var name in rules) {
	        var rule = rules[name];
	        // We have the same rule referenced twice if using named rules.
	        // By name and by selector.
	        if (stringified[rule.id]) {
	          continue;
	        }
	
	        if (rule.style && (0, _utils.isEmptyObject)(rule.style)) {
	          continue;
	        }
	
	        if (rule.rules && (0, _utils.isEmptyObject)(rule.rules)) {
	          continue;
	        }
	
	        if (str) str += '\n';
	
	        str += rule.toString(options);
	        stringified[rule.id] = true;
	      }
	      return str;
	    }
	
	    /**
	     * Create a rule, will not render after stylesheet was rendered the first time.
	     * Will link the rule in `this.rules`.
	     *
	     * @see createRule
	     * @api private
	     */
	
	  }, {
	    key: 'createRule',
	    value: function createRule(name, style, options) {
	      options = _extends({}, options, {
	        sheet: this,
	        jss: this.options.jss,
	        Renderer: this.options.Renderer
	      });
	      // Scope options overwrite instance options.
	      if (options.named == null) options.named = this.options.named;
	      var rule = (0, _createRule3.default)(name, style, options);
	      this.registerRule(rule);
	      options.jss.plugins.run(rule);
	      return rule;
	    }
	
	    /**
	     * Register a rule in `sheet.rules` and `sheet.classes` maps.
	     *
	     * @param {Rule} rule
	     * @api public
	     */
	
	  }, {
	    key: 'registerRule',
	    value: function registerRule(rule) {
	      if (rule.name) {
	        if (!rule.options.parent) this.rules[rule.name] = rule;
	        if (rule.className) this.classes[rule.name] = rule.className;
	      }
	      if (rule.selector && !rule.options.parent) {
	        this.rules[rule.selector] = rule;
	      }
	      return this;
	    }
	
	    /**
	     * Unregister a rule.
	     *
	     * @param {Rule} rule
	     * @api public
	     */
	
	  }, {
	    key: 'unregisterRule',
	    value: function unregisterRule(rule) {
	      delete this.rules[rule.name];
	      delete this.rules[rule.selector];
	      delete this.classes[rule.name];
	      return this;
	    }
	
	    /**
	     * Deploy pure CSS string to a renderable.
	     *
	     * @return {StyleSheet}
	     * @api private
	     */
	
	  }, {
	    key: 'deploy',
	    value: function deploy() {
	      this.renderer.deploy(this);
	      this.deployed = true;
	      return this;
	    }
	
	    /**
	     * Link renderable CSS rules with their corresponding models.
	     *
	     * @return {StyleSheet}
	     * @api private
	     */
	
	  }, {
	    key: 'link',
	    value: function link() {
	      var renderables = this.renderer.getRules();
	      for (var selector in renderables) {
	        var rule = this.rules[selector];
	        if (rule) rule.renderable = renderables[selector];
	      }
	      this.linked = true;
	      return this;
	    }
	  }]);
	
	  return StyleSheet;
	}();
	
	exports.default = StyleSheet;

/***/ },
/* 5 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.clone = clone;
	exports.isEmptyObject = isEmptyObject;
	exports.toCSS = toCSS;
	var stringify = JSON.stringify;
	var parse = JSON.parse;
	
	/**
	 * Deeply clone object using serialization.
	 * Expects object to be plain and without cyclic dependencies.
	 *
	 * http://jsperf.com/lodash-deepclone-vs-jquery-extend-deep/6
	 *
	 * @type {Object} obj
	 * @return {Object}
	 */
	function clone(obj) {
	  return parse(stringify(obj));
	}
	
	/**
	 * Determine whether an object is empty or not.
	 * More performant than a `Object.keys(obj).length > 0`
	 *
	 * @type {Object} obj
	 * @return {Boolean}
	 */
	function isEmptyObject(obj) {
	  for (var key in obj) {
	    return false;
	  } // eslint-disable-line no-unused-vars
	
	  return true;
	}
	
	/**
	 * Simple very fast UID generation based on a global counter.
	 */
	var uid = exports.uid = function () {
	  var globalReference = typeof window == 'undefined' ? global : window;
	  var namespace = '__JSS_VERSION_COUNTER__';
	  if (globalReference[namespace] == null) globalReference[namespace] = 0;
	
	  // In case we have more than one jss version.
	  var versionCounter = globalReference[namespace]++;
	  var ruleCounter = 0;
	
	  /**
	   * Returns a uid.
	   * Ensures uniqueness if more than 1 jss version is used.
	   *
	   * @api public
	   * @return {String}
	   */
	  function get() {
	    return 'jss-' + versionCounter + '-' + ruleCounter++;
	  }
	
	  /**
	   * Resets the counter.
	   *
	   * @api public
	   */
	  function reset() {
	    ruleCounter = 0;
	  }
	
	  return { get: get, reset: reset };
	}();
	
	/**
	 * Converts a Rule to CSS string.
	 *
	 * Options:
	 * - `selector` use `false` to get a rule without selector
	 * - `indentationLevel` level of indentation
	 *
	 * @param {String} selector
	 * @param {Object} style
	 * @param {Object} options
	 * @return {String}
	 */
	function toCSS(selector, style) {
	  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	  var indentationLevel = options.indentationLevel || 0;
	  var str = '';
	
	  if (options.selector !== false) {
	    str += indent(indentationLevel, selector + ' {');
	    indentationLevel++;
	  }
	
	  for (var prop in style) {
	    var value = style[prop];
	    // We want to generate multiple style with identical property names.
	    if (Array.isArray(value)) {
	      for (var index = 0; index < value.length; index++) {
	        str += '\n' + indent(indentationLevel, prop + ': ' + value[index] + ';');
	      }
	    } else str += '\n' + indent(indentationLevel, prop + ': ' + value + ';');
	  }
	
	  if (options.selector !== false) str += '\n' + indent(--indentationLevel, '}');
	
	  return str;
	}
	
	/**
	 * Indent a string.
	 *
	 * http://jsperf.com/array-join-vs-for
	 *
	 * @param {Number} level
	 * @param {String} str
	 * @return {String}
	 */
	function indent(level, str) {
	  var indentStr = '';
	  for (var index = 0; index < level; index++) {
	    indentStr += '  ';
	  }return indentStr + str;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createRule;
	
	var _Rule = __webpack_require__(7);
	
	var _Rule2 = _interopRequireDefault(_Rule);
	
	var _SimpleRule = __webpack_require__(8);
	
	var _SimpleRule2 = _interopRequireDefault(_SimpleRule);
	
	var _KeyframeRule = __webpack_require__(9);
	
	var _KeyframeRule2 = _interopRequireDefault(_KeyframeRule);
	
	var _ConditionalRule = __webpack_require__(10);
	
	var _ConditionalRule2 = _interopRequireDefault(_ConditionalRule);
	
	var _FontFaceRule = __webpack_require__(11);
	
	var _FontFaceRule2 = _interopRequireDefault(_FontFaceRule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Map of at rules to corresponding implementation class.
	 *
	 * @type {Object}
	 */
	var atRuleClassMap = {
	  '@charset': _SimpleRule2.default,
	  '@import': _SimpleRule2.default,
	  '@namespace': _SimpleRule2.default,
	  '@keyframes': _KeyframeRule2.default,
	  '@media': _ConditionalRule2.default,
	  '@supports': _ConditionalRule2.default,
	  '@font-face': _FontFaceRule2.default
	};
	
	var atRuleNameRegExp = /^@[^ ]+/;
	
	/**
	 * Create rule factory.
	 *
	 * @param {Object} [selector] if you don't pass selector - it will be generated
	 * @param {Object} [style] declarations block
	 * @param {Object} [options] rule options
	 * @return {Object} rule
	 * @api private
	 */
	function createRule(selector) {
	  var style = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	  // Is an at-rule.
	  if (selector && selector[0] === '@') {
	    var name = atRuleNameRegExp.exec(selector)[0];
	    var AtRule = atRuleClassMap[name];
	    return new AtRule(selector, style, options);
	  }
	
	  if (options.named == null) options.named = true;
	  return new _Rule2.default(selector, style, options);
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(5);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var dotsRegExp = /[.]/g;
	var classesRegExp = /[.][^ ,]+/g;
	
	/**
	 * Regular rules.
	 *
	 * @api public
	 */
	
	var Rule = function () {
	  function Rule(selector, style, options) {
	    _classCallCheck(this, Rule);
	
	    this.id = _utils.uid.get();
	    this.type = 'regular';
	    this.options = options;
	    this.selector = selector || '';
	    this.className = '';
	    if (options.named) {
	      this.name = selector;
	      var className = options.className || (this.name ? this.name + '--' + this.id : this.id);
	      this.selector = '.' + className;
	    }
	    this.originalStyle = style;
	    // We expect style to be plain object.
	    this.style = (0, _utils.clone)(style);
	  }
	
	  /**
	   * Set selector string.
	   * Attenition: use this with caution. Most browser didn't implement selector
	   * text setter, so this will result in rerendering of entire style sheet.
	   *
	   * @param {String} selector
	   * @api public
	   */
	
	
	  _createClass(Rule, [{
	    key: 'prop',
	
	
	    /**
	     * Get or set a style property.
	     *
	     * @param {String} name
	     * @param {String|Number} [value]
	     * @return {Rule|String|Number}
	     * @api public
	     */
	    value: function prop(name, value) {
	      var style = this.options.Renderer.style;
	      // Its a setter.
	
	      if (value != null) {
	        this.style[name] = value;
	        // Only defined if option linked is true.
	        if (this.renderable) style(this.renderable, name, value);
	        return this;
	      }
	      // Its a getter, read the value from the DOM if its not cached.
	      if (this.renderable && this.style[name] == null) {
	        // Cache the value after we have got it from the DOM once.
	        this.style[name] = style(this.renderable, name);
	      }
	      return this.style[name];
	    }
	
	    /**
	     * Apply rule to an element inline.
	     *
	     * @param {Element} renderable
	     * @return {Rule}
	     * @api public
	     */
	
	  }, {
	    key: 'applyTo',
	    value: function applyTo(renderable) {
	      for (var prop in this.style) {
	        var value = this.style[prop];
	        var style = this.options.Renderer.style;
	
	        if (Array.isArray(value)) {
	          for (var index = 0; index < value.length; index++) {
	            style(renderable, prop, value[index]);
	          }
	        } else style(renderable, prop, value);
	      }
	      return this;
	    }
	
	    /**
	     * Returns JSON representation of the rule.
	     * Array of values is not supported.
	     *
	     * @return {Object}
	     * @api public
	     */
	
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      var style = Object.create(null);
	      for (var prop in this.style) {
	        if (_typeof(this.style[prop]) != 'object') {
	          style[prop] = this.style[prop];
	        }
	      }
	      return style;
	    }
	
	    /**
	     * Generates a CSS string.
	     *
	     * @see toCSS
	     * @api public
	     */
	
	  }, {
	    key: 'toString',
	    value: function toString(options) {
	      return (0, _utils.toCSS)(this.selector, this.style, options);
	    }
	  }, {
	    key: 'selector',
	    set: function set() {
	      var selector = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	      var _options = this.options;
	      var Renderer = _options.Renderer;
	      var sheet = _options.sheet;
	
	      // After we modify selector, ref by old selector needs to be removed.
	
	      if (sheet) sheet.unregisterRule(this);
	
	      this._selector = selector;
	      var classes = selector.match(classesRegExp);
	      if (classes) {
	        this.className = classes.join(' ').replace(dotsRegExp, '');
	      }
	
	      if (!this.renderable) {
	        // Register the rule with new selector.
	        if (sheet) sheet.registerRule(this);
	        return;
	      }
	
	      var changed = Renderer.setSelector(this.renderable, selector);
	
	      if (changed) {
	        sheet.registerRule(this);
	        return;
	      }
	
	      // If selector setter is not implemented, rerender the sheet.
	      // We need to delete renderable from the rule, because when sheet.deploy()
	      // calls rule.toString, it will get the old selector.
	      delete this.renderable;
	      sheet.registerRule(this).deploy().link();
	    }
	
	    /**
	     * Get selector string.
	     *
	     * @return {String}
	     * @api public
	     */
	    ,
	    get: function get() {
	      if (this.renderable) {
	        return this.options.Renderer.getSelector(this.renderable);
	      }
	
	      return this._selector;
	    }
	  }]);
	
	  return Rule;
	}();
	
	exports.default = Rule;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(5);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Rule like @charset, @import, @namespace.
	 *
	 * @api public
	 */
	
	var SimpleRule = function () {
	  function SimpleRule(name, value, options) {
	    _classCallCheck(this, SimpleRule);
	
	    this.id = _utils.uid.get();
	    this.type = 'simple';
	    this.name = name;
	    this.value = value;
	    this.options = options;
	  }
	
	  /**
	   * Generates a CSS string.
	   *
	   * @return {String}
	   * @api public
	   */
	
	
	  _createClass(SimpleRule, [{
	    key: 'toString',
	    value: function toString() {
	      return this.name + ' ' + this.value + ';';
	    }
	  }]);
	
	  return SimpleRule;
	}();
	
	exports.default = SimpleRule;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(5);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Keyframe rule.
	 *
	 * @api private
	 */
	
	var KeyframeRule = function () {
	  function KeyframeRule(selector, frames, options) {
	    _classCallCheck(this, KeyframeRule);
	
	    this.id = _utils.uid.get();
	    this.type = 'keyframe';
	    this.selector = selector;
	    this.options = options;
	    this.frames = this.formatFrames(frames);
	  }
	
	  /**
	   * Creates formatted frames where every frame value is a rule instance.
	   *
	   * @api private
	   */
	
	
	  _createClass(KeyframeRule, [{
	    key: 'formatFrames',
	    value: function formatFrames(frames) {
	      var newFrames = Object.create(null);
	      for (var name in frames) {
	        var options = _extends({}, this.options, { named: false, parent: this });
	        newFrames[name] = this.options.jss.createRule(name, frames[name], options);
	      }
	      return newFrames;
	    }
	
	    /**
	     * Generates a CSS string.
	     *
	     * @return {String}
	     * @api private
	     */
	
	  }, {
	    key: 'toString',
	    value: function toString() {
	      var str = this.selector + ' {\n';
	      var options = { indentationLevel: 1 };
	      for (var name in this.frames) {
	        str += this.frames[name].toString(options) + '\n';
	      }
	      str += '}';
	      return str;
	    }
	  }]);
	
	  return KeyframeRule;
	}();
	
	exports.default = KeyframeRule;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(5);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Conditional rule for @media, @supports
	 *
	 * @api public
	 */
	
	var ConditionalRule = function () {
	  function ConditionalRule(selector, styles, options) {
	    _classCallCheck(this, ConditionalRule);
	
	    this.id = _utils.uid.get();
	    this.type = 'conditional';
	    this.selector = selector;
	    this.options = options;
	    this.rules = Object.create(null);
	    for (var name in styles) {
	      this.createRule(name, styles[name]);
	    }
	  }
	
	  /**
	   * A conditional rule always contains child rules.
	   *
	   * @param {Object} styles
	   * @return {Array} rules
	   * @api public
	   */
	
	
	  _createClass(ConditionalRule, [{
	    key: 'createRule',
	    value: function createRule(name, style, options) {
	      var newOptions = _extends({}, this.options, { parent: this });
	      var _newOptions = newOptions;
	      var sheet = _newOptions.sheet;
	      var jss = _newOptions.jss;
	      // We have already a rule in the current style sheet with this name,
	      // This new rule is supposed to overwrite the first one, for this we need
	      // to ensure it will have the same className/selector.
	
	      var existingRule = sheet && sheet.getRule(name);
	      var className = existingRule ? existingRule.className : null;
	      if (className || options) {
	        newOptions = _extends({}, newOptions, { className: className }, options);
	      }
	      var rule = (sheet || jss).createRule(name, style, newOptions);
	      this.rules[name] = rule;
	      return rule;
	    }
	
	    /**
	     * Generates a CSS string.
	     *
	     * @return {String}
	     * @api public
	     */
	
	  }, {
	    key: 'toString',
	    value: function toString() {
	      var str = this.selector + ' {\n';
	      for (var name in this.rules) {
	        var rule = this.rules[name];
	        if (rule.style && (0, _utils.isEmptyObject)(rule.style)) {
	          continue;
	        }
	        var ruleStr = rule.toString({ indentationLevel: 1 });
	        str += ruleStr + '\n';
	      }
	      str += '}';
	      return str;
	    }
	  }]);
	
	  return ConditionalRule;
	}();
	
	exports.default = ConditionalRule;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(5);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Font-face rules.
	 *
	 * @api public
	 */
	
	var Rule = function () {
	  function Rule(selector, style, options) {
	    _classCallCheck(this, Rule);
	
	    this.id = _utils.uid.get();
	    this.type = 'font-face';
	    this.options = options;
	    this.selector = selector;
	    this.style = style;
	  }
	
	  /**
	   * Generates a CSS string.
	   *
	   * @see toCSS
	   * @api public
	   */
	
	
	  _createClass(Rule, [{
	    key: 'toString',
	    value: function toString(options) {
	      var str = '';
	      if (Array.isArray(this.style)) {
	        for (var index = 0; index < this.style.length; index++) {
	          str += (0, _utils.toCSS)(this.selector, this.style[index], options);
	          str += '\n';
	        }
	        return str;
	      }
	
	      return (0, _utils.toCSS)(this.selector, this.style, options);
	    }
	  }]);
	
	  return Rule;
	}();
	
	exports.default = Rule;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = findRenderer;
	
	var _DomRenderer = __webpack_require__(13);
	
	var _DomRenderer2 = _interopRequireDefault(_DomRenderer);
	
	var _VirtualRenderer = __webpack_require__(14);
	
	var _VirtualRenderer2 = _interopRequireDefault(_VirtualRenderer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Find proper renderer.
	 * Option `virtual` is used to force use of VirtualRenderer even if DOM is
	 * detected, used for testing only.
	 *
	 * @param {Object} options
	 * @return {Renderer}
	 * @api private
	 */
	function findRenderer() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  if (options.Renderer) return options.Renderer;
	  return options.virtual || typeof document == 'undefined' ? _VirtualRenderer2.default : _DomRenderer2.default;
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * DOM rendering backend for StyleSheet.
	 *
	 * @api private
	 */
	
	var DomRenderer = function () {
	  _createClass(DomRenderer, null, [{
	    key: 'style',
	    value: function style(element, name, value) {
	      try {
	        if (value == null) return element.style[name];
	        element.style[name] = value;
	      } catch (err) {
	        // IE8 may throw if property is unknown.
	      }
	    }
	  }, {
	    key: 'setSelector',
	    value: function setSelector(cssRule, selector) {
	      cssRule.selectorText = selector;
	
	      // Return false if setter was not successful.
	      // Currently works in chrome only.
	      return cssRule.selectorText === selector;
	    }
	  }, {
	    key: 'getSelector',
	    value: function getSelector(cssRule) {
	      return cssRule.selectorText;
	    }
	  }]);
	
	  function DomRenderer(options) {
	    _classCallCheck(this, DomRenderer);
	
	    this.head = document.head || document.getElementsByTagName('head')[0];
	    this.element = document.createElement('style');
	    // IE8 will not have `styleSheet` prop without `type and `styleSheet.cssText`
	    // is the only way to render on IE8.
	    this.element.type = 'text/css';
	    if (options.media) this.element.setAttribute('media', options.media);
	    if (options.meta) this.element.setAttribute('data-meta', options.meta);
	  }
	
	  /**
	   * Insert style element into render tree.
	   *
	   * @api private
	   */
	
	
	  _createClass(DomRenderer, [{
	    key: 'attach',
	    value: function attach() {
	      this.head.appendChild(this.element);
	    }
	
	    /**
	     * Remove style element from render tree.
	     *
	     * @api private
	     */
	
	  }, {
	    key: 'detach',
	    value: function detach() {
	      this.element.parentNode.removeChild(this.element);
	    }
	
	    /**
	     * Inject CSS string into element.
	     *
	     * @param {String} cssStr
	     * @api private
	     */
	
	  }, {
	    key: 'deploy',
	    value: function deploy(sheet) {
	      var css = '\n' + sheet.toString() + '\n';
	      if ('sheet' in this.element) this.element.innerHTML = css;
	      // On IE8 the only way to render is `styleSheet.cssText`.
	      else if ('styleSheet' in this.element) this.element.styleSheet.cssText = css;
	    }
	
	    /**
	     * Insert a rule into element.
	     *
	     * @param {Rule} rule
	     * @return {CSSStyleRule}
	     * @api private
	     */
	
	  }, {
	    key: 'insertRule',
	    value: function insertRule(rule) {
	      // IE8 has only `styleSheet` and `styleSheet.rules`
	      var sheet = this.element.sheet || this.element.styleSheet;
	      var cssRules = sheet.cssRules || sheet.rules;
	      var nextIndex = cssRules.length;
	      if (sheet.insertRule) sheet.insertRule(rule.toString(), nextIndex);else sheet.addRule(rule.selector, rule.toString({ selector: false }), nextIndex);
	      return cssRules[nextIndex];
	    }
	
	    /**
	     * Get all rules elements.
	     *
	     * @return {Object} rules map, where key is selector, CSSStyleRule is value.
	     * @api private
	     */
	
	  }, {
	    key: 'getRules',
	    value: function getRules() {
	      // IE8 has only `styleSheet` and `styleSheet.rules`
	      var sheet = this.element.sheet || this.element.styleSheet;
	      var cssRules = sheet.rules || sheet.cssRules;
	      var rules = Object.create(null);
	      for (var index = 0; index < cssRules.length; index++) {
	        var cssRule = cssRules[index];
	        rules[cssRule.selectorText] = cssRule;
	      }
	      return rules;
	    }
	  }]);
	
	  return DomRenderer;
	}();
	
	exports.default = DomRenderer;

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Rendering backend to do nothing in nodejs.
	 */
	
	var VirtualRenderer = function () {
	  function VirtualRenderer() {
	    _classCallCheck(this, VirtualRenderer);
	  }
	
	  _createClass(VirtualRenderer, [{
	    key: "attach",
	    value: function attach() {}
	  }, {
	    key: "detach",
	    value: function detach() {}
	  }, {
	    key: "deploy",
	    value: function deploy() {}
	  }, {
	    key: "insertRule",
	    value: function insertRule() {}
	  }, {
	    key: "getRules",
	    value: function getRules() {
	      return {};
	    }
	  }], [{
	    key: "style",
	    value: function style() {}
	  }, {
	    key: "setSelector",
	    value: function setSelector() {}
	  }, {
	    key: "getSelector",
	    value: function getSelector() {}
	  }]);
	
	  return VirtualRenderer;
	}();
	
	exports.default = VirtualRenderer;

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Register a plugin, run a plugin.
	 *
	 * @api public
	 */
	
	var PluginsRegistry = function () {
	  function PluginsRegistry() {
	    _classCallCheck(this, PluginsRegistry);
	
	    this.registry = [];
	  }
	
	  /**
	   * Register plugin. Passed function will be invoked with a rule instance.
	   *
	   * @param {Function} fn
	   * @api public
	   */
	
	
	  _createClass(PluginsRegistry, [{
	    key: "use",
	    value: function use(fn) {
	      this.registry.push(fn);
	    }
	
	    /**
	     * Execute all registered plugins.
	     *
	     * @param {Rule} rule
	     * @api private
	     */
	
	  }, {
	    key: "run",
	    value: function run(rule) {
	      for (var index = 0; index < this.registry.length; index++) {
	        this.registry[index](rule);
	      }
	    }
	  }]);
	
	  return PluginsRegistry;
	}();
	
	exports.default = PluginsRegistry;

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Sheets registry to access them all at one place.
	 *
	 * @api public
	 */
	
	var SheetsRegistry = function () {
	  function SheetsRegistry() {
	    _classCallCheck(this, SheetsRegistry);
	
	    this.registry = [];
	  }
	
	  /**
	   * Register a style sheet.
	   *
	   * @param {StyleSheet} sheet
	   * @api public
	   */
	
	
	  _createClass(SheetsRegistry, [{
	    key: 'add',
	    value: function add(sheet) {
	      this.registry.push(sheet);
	    }
	
	    /**
	     * Returns CSS string with all Style Sheets.
	     *
	     * @param {StyleSheet} sheet
	     * @api public
	     */
	
	  }, {
	    key: 'toString',
	    value: function toString(options) {
	      return this.registry.map(function (sheet) {
	        return sheet.toString(options);
	      }).join('\n');
	    }
	  }]);
	
	  return SheetsRegistry;
	}();
	
	exports.default = SheetsRegistry;

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = jssNested;
	var regExp = /&/g;
	
	/**
	 * Convert nested rules to separate, remove them from original styles.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	function jssNested() {
	  return function (rule) {
	    if (rule.type !== 'regular') return;
	    var _rule$options = rule.options;
	    var sheet = _rule$options.sheet;
	    var jss = _rule$options.jss;
	    var parent = _rule$options.parent;
	
	    var container = sheet || jss;
	    var options = void 0;
	
	    if (parent && parent.type === 'conditional') {
	      container = parent;
	    }
	
	    for (var prop in rule.style) {
	      if (prop[0] === '&') {
	        if (!options) options = _extends({}, rule.options, { named: false });
	        var name = prop.replace(regExp, rule.selector);
	        container.createRule(name, rule.style[prop], options);
	        delete rule.style[prop];
	      }
	    }
	  };
	}

/***/ }
/******/ ]);
//# sourceMappingURL=script.js.map