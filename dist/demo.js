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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _beeLayout = __webpack_require__(1);
	
	var _beePanel = __webpack_require__(8);
	
	var _beeButton = __webpack_require__(82);
	
	var _beeButton2 = _interopRequireDefault(_beeButton);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var CARET = _react2['default'].createElement('i', { className: 'uf uf-arrow-down' });
	
	var CARETUP = _react2['default'].createElement('i', { className: 'uf uf-arrow-up' });
	
	var Demo1 = __webpack_require__(84);var Demo2 = __webpack_require__(101);var Demo3 = __webpack_require__(102);var DemoArray = [{ "example": _react2['default'].createElement(Demo1, null), "title": " 基础Tab", "code": "/**\r\n *  @title 基础Tab\r\n *  @description 通过Tabs和TabPane配合完成Tab功能\r\n *\r\n */\r\n\r\nimport React, {Component} from 'react';\r\nimport { Tabs } from 'tinper-bee';\r\n\r\nconst {TabPane} = Tabs;\r\n\r\nfunction callback() {\r\n\r\n}\r\n\r\nclass Demo1 extends Component {\r\n    render() {\r\n        return (\r\n            <Tabs\r\n                defaultActiveKey=\"1\"\r\n                onChange={callback}\r\n                tabBarStyle=\"upborder\"\r\n                className=\"demo1-tabs\"\r\n                style={{width:'500px'}}\r\n            >\r\n                <TabPane tab='望庐山瀑布' key=\"1\">\r\n                    <ul>\r\n                        <li>日照香炉生紫烟，</li>\r\n                        <li>遥看瀑布挂前川。</li>\r\n                        <li>飞流直下三千尺，</li>\r\n                        <li>疑是银河落九天。</li>\r\n                    </ul>\r\n\r\n\r\n                </TabPane>\r\n                <TabPane tab='望庐山瀑2布' key=\"1-2\">\r\n                    <ul>\r\n                        <li>日照香炉生紫烟，</li>\r\n                        <li>遥看瀑布挂前2川。</li>\r\n                        <li>飞流直下三千尺，</li>\r\n                        <li>疑是银河落九2天。</li>\r\n                    </ul>\r\n\r\n\r\n                </TabPane>\r\n                <TabPane tab='早发白帝城' key=\"2\">\r\n                    <ul>\r\n                        <li>朝辞白帝彩云间，</li>\r\n                        <li>千里江陵一日还。</li>\r\n                        <li>两岸猿声啼不住，</li>\r\n                        <li>轻舟已过万重山。</li>\r\n                    </ul>\r\n                </TabPane>\r\n                <TabPane tab='菩萨蛮·平林漠漠烟如织' key=\"3\">\r\n                    <ul>\r\n                        <li>平林漠漠烟如织，寒山一带伤心碧。</li>\r\n                        <li>暝色入高楼，有人楼上愁。</li>\r\n                        <li>玉阶空伫立，宿鸟归飞急。</li>\r\n                        <li>何处是归程？长亭连短亭</li>\r\n                    </ul>\r\n                </TabPane>\r\n                <TabPane tab='关山月' key=\"4\">\r\n                    <ul>\r\n                        <li>明月出天山，苍茫云海间。</li>\r\n                        <li>长风几万里，吹度玉门关。</li>\r\n                        <li>汉下白登道，胡窥青海湾。</li>\r\n                        <li>由来征战地，不见有人还。</li>\r\n                    </ul>\r\n                </TabPane>\r\n            </Tabs>\r\n        )\r\n    }\r\n}\r\n\r\n", "desc": " 通过Tabs和TabPane配合完成Tab功能", "scss_code": ".demo1-tabs{\r\n  margin-bottom: 40px;\r\n  width: 600px;\r\n}" }, { "example": _react2['default'].createElement(Demo2, null), "title": " 竖向的Tab", "code": "/**\r\n *\r\n * @title 竖向的Tab\r\n * @description 通过tabBarPosition属性可以控制Tab做不同方向展示,当设置为`left`和`right`时，要为Tabs设置高度。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Tabs } from 'tinper-bee';\r\n\r\nconst {TabPane} = Tabs;\r\n\r\nclass Demo2 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = ({\r\n            activeKey: \"1\",\r\n            start: 0,\r\n        })\r\n    }\r\n    onChange = (activeKey) => {\r\n        console.log(`onChange ${activeKey}o-^-o`);\r\n        this.setState({\r\n            activeKey,\r\n        });\r\n    }\r\n\r\n    onTabClick = (key) => {\r\n        console.log(`onTabClick ${key}o^o`);\r\n        if (key === this.state.activeKey) {\r\n            this.setState({\r\n                activeKey: '',\r\n            });\r\n        }\r\n    }\r\n\r\n    render() {\r\n\r\n        return (\r\n            <div style={{ margin: 20 }}>\r\n                <Tabs\r\n                    activeKey={this.state.activeKey}\r\n                    tabBarPosition=\"left\"\r\n                    defaultActiveKey=\"1\"\r\n                    onChange={this.onChange}\r\n                    className=\"demo2-tabs\"\r\n                >\r\n                    <TabPane tab=\"望庐山瀑布\" key=\"1\" >\r\n                        <ul>\r\n                            <li>日照香炉生紫烟，</li>\r\n                            <li>遥看瀑布挂前川。</li>\r\n                            <li>飞流直下三千尺，</li>\r\n                            <li>疑是银河落九天。</li>\r\n                        </ul>\r\n                    </TabPane>\r\n                    <TabPane tab=\"早发白帝城\" key=\"2\">\r\n                        <ul>\r\n                            <li>朝辞白帝彩云间，</li>\r\n                            <li>千里江陵一日还。</li>\r\n                            <li>两岸猿声啼不住，</li>\r\n                            <li>轻舟已过万重山。</li>\r\n                        </ul>\r\n                    </TabPane>\r\n                    <TabPane tab=\"菩萨蛮·平林漠漠烟如织\" key=\"3\">\r\n                        <ul>\r\n                            <li>平林漠漠烟如织，寒山一带伤心碧。</li>\r\n                            <li>暝色入高楼，有人楼上愁。</li>\r\n                            <li>玉阶空伫立，宿鸟归飞急。</li>\r\n                            <li>何处是归程？长亭连短亭</li>\r\n                        </ul>\r\n                    </TabPane>\r\n                    <TabPane tab=\"关山月\" key=\"4\">\r\n                        <ul>\r\n                            <li>明月出天山，苍茫云海间。</li>\r\n                            <li>长风几万里，吹度玉门关。</li>\r\n                            <li>汉下白登道，胡窥青海湾。</li>\r\n                            <li>由来征战地，不见有人还。</li>\r\n                        </ul>\r\n                    </TabPane>\r\n                </Tabs>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n", "desc": " 通过tabBarPosition属性可以控制Tab做不同方向展示,当设置为`left`和`right`时，要为Tabs设置高度。", "scss_code": ".demo2-tabs{\r\n  height: 300px;\r\n}" }, { "example": _react2['default'].createElement(Demo3, null), "title": " 页签Tab", "code": "/**\r\n *\r\n * @title 页签Tab\r\n * @description 通过扩展TabPane和ScrollableInkTabBar的方式，可以完成模拟页签的效果\r\n *\r\n */\r\n\r\nimport React, {Component} from 'react';\r\nimport { Tabs, Icon } from 'tinper-bee';\r\n\n\r\nconst {TabPane} = Tabs;\r\n\r\nlet index = 1;\r\nconst content = `问世间、情为何物，只教生死相许？天南地北双飞客，老翅几回寒暑。欢乐趣，离别苦，\r\n就中更有痴儿女。君应有语，渺万里层云，千山暮雪，只影向谁去？横汾路，寂寞当年箫鼓，荒烟依旧平楚。招魂楚些何嗟及，\r\n山鬼暗谛风雨。天也妒，未信与，莺几燕子俱黄土。千秋万古，为留待骚人，狂歌痛饮，来访雁丘处。`;\r\n\r\nclass Demo3 extends Component {\r\n    state = {\r\n        tabs: [{\r\n            title: '摸鱼儿',\r\n            content: content\r\n        }],\r\n        activeKey: '摸鱼儿',\r\n    };\r\n\r\n    onTabChange = (activeKey) => {\r\n        this.setState({\r\n            activeKey,\r\n        });\r\n    }\r\n\r\n    construct() {\r\n        const disabled = true;\r\n        return this.state.tabs.map((t) => {\r\n            return (\r\n                <TabPane\r\n                tab={<span>{t.title}\r\n                    <Icon\r\n                        type=\"uf-close-c\"\r\n                        className=\"close-icon\"\r\n                        onClick={this.remove.bind(this, t.title)}\r\n                    />\r\n                </span>}\r\n                key={t.title}\r\n            >\r\n                <div style={{padding: 100}}>\r\n                    {t.content}\r\n                </div>\r\n            </TabPane>);\r\n        }).concat([\r\n            <TabPane\r\n                tab={<a style={{color: 'black', cursor: 'pointer'}} onClick={this.add}> + 添加</a>}\r\n                disabled={disabled}\r\n                key={'__add'}\r\n            />,\r\n        ]);\r\n    }\r\n\r\n    // 删除\r\n    remove = (title, e) => {\r\n        e.stopPropagation();\r\n        if (this.state.tabs.length === 1) {\r\n            alert('只剩一个，不能删');\r\n            return;\r\n        }\r\n        let foundIndex = 0;\r\n        const after = this.state.tabs.filter((t, i) => {\r\n            if (t.title !== title) {\r\n                return true;\r\n            }\r\n            foundIndex = i;\r\n            return false;\r\n        });\r\n        let activeKey = this.state.activeKey;\r\n        if (activeKey === title) {\r\n            if (foundIndex) {\r\n                foundIndex--;\r\n            }\r\n            activeKey = after[foundIndex].title;\r\n        }\r\n        this.setState({\r\n            tabs: after,\r\n            activeKey,\r\n        });\r\n    }\r\n\r\n    clear = () => {\r\n        let { tabs } = this.state;\r\n        this.setState({\r\n            tabs:  [tabs.shift()],\r\n            activeKey: '摸鱼儿',\r\n        })\r\n    }\r\n\r\n    // 增加\r\n    add = (e) => {\r\n        e.stopPropagation();\r\n        index++;\r\n        const newTab = {\r\n            title: `名称: ${index}`,\r\n            content: `内容: ${content}`,\r\n        };\r\n        this.setState({\r\n            tabs: this.state.tabs.concat(newTab),\r\n            activeKey: `名称: ${index}`,\r\n        });\r\n    }\r\n\r\n    render() {\r\n\r\n        return (\r\n            <div style={{margin: 20}}>\r\n\r\n                <Tabs\r\n                    activeKey={this.state.activeKey}\r\n                    onChange={this.onTabChange}\r\n                    tabBarStyle=\"primary\"\r\n                    defaultActiveKey=\"摸鱼儿\"\r\n                    extraContent={\r\n                        <Icon\r\n                            type=\"uf-del\"\r\n                            className=\"clear-icon\"\r\n                            onClick={this.clear}\r\n                            title=\"清空\"\r\n                        />\r\n                    }\r\n                >\r\n                    {this.construct()}\r\n                </Tabs>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n\r\n\r\n", "desc": " 通过扩展TabPane和ScrollableInkTabBar的方式，可以完成模拟页签的效果", "scss_code": ".close-icon{\r\n  position: relative;\r\n  right: -15px;\r\n  top: 1px;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.clear-icon{\r\n  display: inline-block;\r\n  margin-top: 11px;\r\n  margin-right: 10px;\r\n}" }];
	
	var Demo = function (_Component) {
	    _inherits(Demo, _Component);
	
	    function Demo(props) {
	        _classCallCheck(this, Demo);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	        _this.state = {
	            open: false
	        };
	        _this.handleClick = _this.handleClick.bind(_this);
	        return _this;
	    }
	
	    Demo.prototype.handleClick = function handleClick() {
	        this.setState({ open: !this.state.open });
	    };
	
	    Demo.prototype.render = function render() {
	        var _props = this.props,
	            title = _props.title,
	            example = _props.example,
	            code = _props.code,
	            desc = _props.desc,
	            scss_code = _props.scss_code;
	
	        var caret = this.state.open ? CARETUP : CARET;
	        var text = this.state.open ? "隐藏代码" : "查看代码";
	
	        var header = _react2['default'].createElement(
	            'div',
	            null,
	            example,
	            _react2['default'].createElement(
	                _beeButton2['default'],
	                { style: { "marginTop": "10px" }, shape: 'block', onClick: this.handleClick },
	                caret,
	                text
	            )
	        );
	        return _react2['default'].createElement(
	            _beeLayout.Col,
	            { md: 12 },
	            _react2['default'].createElement(
	                'h3',
	                null,
	                title
	            ),
	            _react2['default'].createElement(
	                'p',
	                null,
	                desc
	            ),
	            _react2['default'].createElement(
	                _beePanel.Panel,
	                { collapsible: true, headerContent: true, expanded: this.state.open, colors: 'bordered', header: header, footerStyle: { padding: 0 } },
	                _react2['default'].createElement(
	                    'pre',
	                    null,
	                    _react2['default'].createElement(
	                        'code',
	                        { className: 'hljs javascript' },
	                        code
	                    )
	                ),
	                !!scss_code ? _react2['default'].createElement(
	                    'pre',
	                    null,
	                    _react2['default'].createElement(
	                        'code',
	                        { className: 'hljs css' },
	                        scss_code
	                    )
	                ) : null
	            )
	        );
	    };
	
	    return Demo;
	}(_react.Component);
	
	var DemoGroup = function (_Component2) {
	    _inherits(DemoGroup, _Component2);
	
	    function DemoGroup(props) {
	        _classCallCheck(this, DemoGroup);
	
	        return _possibleConstructorReturn(this, _Component2.call(this, props));
	    }
	
	    DemoGroup.prototype.render = function render() {
	        return _react2['default'].createElement(
	            _beeLayout.Row,
	            null,
	            DemoArray.map(function (child, index) {
	
	                return _react2['default'].createElement(Demo, { example: child.example, title: child.title, code: child.code, scss_code: child.scss_code, desc: child.desc, key: index });
	            })
	        );
	    };
	
	    return DemoGroup;
	}(_react.Component);
	
	_reactDom2['default'].render(_react2['default'].createElement(DemoGroup, null), document.getElementById('tinperBeeDemo'));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Con = exports.Row = exports.Col = undefined;
	
	var _Col2 = __webpack_require__(2);
	
	var _Col3 = _interopRequireDefault(_Col2);
	
	var _Row2 = __webpack_require__(6);
	
	var _Row3 = _interopRequireDefault(_Row2);
	
	var _Layout = __webpack_require__(7);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Col = _Col3["default"];
	exports.Row = _Row3["default"];
	exports.Con = _Layout2["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  componentClass: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].string]),
	
	  /**
	   * xs显示列数
	   */
	  xs: _propTypes2["default"].number,
	  /**
	   * sm显示列数
	   */
	  sm: _propTypes2["default"].number,
	  /**
	   * md显示列数
	   */
	  md: _propTypes2["default"].number,
	  /**
	   * lg显示列数
	   */
	  lg: _propTypes2["default"].number,
	  /**
	   * xs偏移列数
	   */
	  xsOffset: _propTypes2["default"].number,
	  /**
	   * sm偏移列数
	   */
	  smOffset: _propTypes2["default"].number,
	  /**
	   * md偏移列数
	   */
	  mdOffset: _propTypes2["default"].number,
	  /**
	   * lg偏移列数
	   */
	  lgOffset: _propTypes2["default"].number,
	  /**
	   * xs右偏移列数
	   */
	  xsPush: _propTypes2["default"].number,
	  /**
	   * sm右偏移列数
	   */
	  smPush: _propTypes2["default"].number,
	  /**
	   * md右偏移列数
	   */
	  mdPush: _propTypes2["default"].number,
	  /**
	   * lg右偏移列数
	   */
	  lgPush: _propTypes2["default"].number,
	  /**
	   * xs左偏移列数
	   */
	  xsPull: _propTypes2["default"].number,
	  /**
	   * sm左偏移列数
	   */
	  smPull: _propTypes2["default"].number,
	  /**
	   * md左偏移列数
	   */
	  mdPull: _propTypes2["default"].number,
	  /**
	   * lg左偏移列数
	   */
	  lgPull: _propTypes2["default"].number
	};
	
	var defaultProps = {
	  componentClass: 'div',
	  clsPrefix: 'u-col'
	};
	
	var DEVICE_SIZES = ['lg', 'md', 'sm', 'xs'];
	
	var Col = function (_Component) {
	  _inherits(Col, _Component);
	
	  function Col() {
	    _classCallCheck(this, Col);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  Col.prototype.render = function render() {
	    var _props = this.props,
	        Component = _props.componentClass,
	        className = _props.className,
	        clsPrefix = _props.clsPrefix,
	        others = _objectWithoutProperties(_props, ['componentClass', 'className', 'clsPrefix']);
	
	    var tbClass = [];
	    /**
	     * 对传入props做样式转化
	     * @type {[type]}
	     */
	    DEVICE_SIZES.forEach(function (size) {
	      function popProp(propSuffix, modifier) {
	        var propName = '' + size + propSuffix;
	        var propValue = others[propName];
	
	        if (propValue != undefined && propValue != null) {
	          tbClass.push(clsPrefix + '-' + size + modifier + '-' + propValue);
	        }
	
	        delete others[propName];
	      }
	
	      popProp('', '');
	      popProp('Offset', '-offset');
	      popProp('Push', '-push');
	      popProp('Pull', '-pull');
	    });
	
	    return _react2["default"].createElement(
	      Component,
	      _extends({
	        className: (0, _classnames2["default"])(tbClass, className)
	      }, others),
	      this.props.children
	    );
	  };
	
	  return Col;
	}(_react.Component);
	
	Col.defaultProps = defaultProps;
	Col.propTypes = propTypes;
	
	exports["default"] = Col;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2017 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg) && arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = PropTypes;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  componentClass: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].string])
	};
	
	var defaultProps = {
	  componentClass: 'div',
	  clsPrefix: 'u-row'
	};
	
	var Row = function (_Component) {
	  _inherits(Row, _Component);
	
	  function Row() {
	    _classCallCheck(this, Row);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  Row.prototype.render = function render() {
	    var _props = this.props,
	        Component = _props.componentClass,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        others = _objectWithoutProperties(_props, ['componentClass', 'clsPrefix', 'className']);
	
	    var bsclass = '' + clsPrefix;
	
	    return _react2["default"].createElement(
	      Component,
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(bsclass, className)
	      }),
	      this.props.children
	    );
	  };
	
	  return Row;
	}(_react.Component);
	
	Row.propTypes = propTypes;
	Row.defaultProps = defaultProps;
	
	exports["default"] = Row;
	module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  /**
	   * Adds `container-fluid` class.
	   */
	  fluid: _propTypes2["default"].bool,
	  /**
	   * You can use a custom element for this component
	   */
	  componentClass: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].string])
	};
	
	var defaultProps = {
	  componentClass: 'div',
	  fluid: false,
	  clsPrefix: 'u-container'
	};
	
	var Con = function (_React$Component) {
	  _inherits(Con, _React$Component);
	
	  function Con() {
	    _classCallCheck(this, Con);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Con.prototype.render = function render() {
	    var _tbclass;
	
	    var _props = this.props,
	        fluid = _props.fluid,
	        Component = _props.componentClass,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        others = _objectWithoutProperties(_props, ['fluid', 'componentClass', 'clsPrefix', 'className']);
	
	    var tbclass = (_tbclass = {}, _defineProperty(_tbclass, '' + clsPrefix, !fluid), _defineProperty(_tbclass, clsPrefix + '-fluid', fluid), _tbclass);
	
	    return _react2["default"].createElement(
	      Component,
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(tbclass, className)
	      }),
	      this.props.children
	    );
	  };
	
	  return Con;
	}(_react2["default"].Component);
	
	Con.propTypes = propTypes;
	Con.defaultProps = defaultProps;
	
	exports["default"] = Con;
	module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PanelGroup = exports.Panel = undefined;
	
	var _Panel2 = __webpack_require__(9);
	
	var _Panel3 = _interopRequireDefault(_Panel2);
	
	var _PanelGroup2 = __webpack_require__(81);
	
	var _PanelGroup3 = _interopRequireDefault(_PanelGroup2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Panel = _Panel3["default"];
	exports.PanelGroup = _PanelGroup3["default"];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _beeTransition = __webpack_require__(10);
	
	var _beeMessage = __webpack_require__(65);
	
	var _beeMessage2 = _interopRequireDefault(_beeMessage);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _copyToClipboard = __webpack_require__(79);
	
	var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  //是否添加折叠
	  collapsible: _propTypes2["default"].bool,
	  onSelect: _propTypes2["default"].func,
	  //头部组件
	  header: _propTypes2["default"].node,
	  headerStyle: _propTypes2["default"].object,
	  id: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),
	  headerContent: _propTypes2["default"].bool,
	  //footer组件
	  footer: _propTypes2["default"].node,
	  footerStyle: _propTypes2["default"].object,
	  //默认是否打开
	  defaultExpanded: _propTypes2["default"].bool,
	  //是否打开
	  expanded: _propTypes2["default"].bool,
	  //每个panel的标记
	  eventKey: _propTypes2["default"].any,
	  headerRole: _propTypes2["default"].string,
	  panelRole: _propTypes2["default"].string,
	  //颜色
	  colors: _propTypes2["default"].oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', 'default', 'bordered']),
	
	  // From Collapse.的扩展动画
	  onEnter: _propTypes2["default"].func,
	  onEntering: _propTypes2["default"].func,
	  onEntered: _propTypes2["default"].func,
	  onExit: _propTypes2["default"].func,
	  onExiting: _propTypes2["default"].func,
	  onExited: _propTypes2["default"].func,
	  //是否可复制内容
	  copyable: _propTypes2["default"].bool
	};
	
	var defaultProps = {
	  defaultExpanded: false,
	  clsPrefix: "u-panel",
	  colors: "default"
	};
	
	var Panel = function (_React$Component) {
	  _inherits(Panel, _React$Component);
	
	  function Panel(props, context) {
	    _classCallCheck(this, Panel);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	    _this.handleClickTitle = _this.handleClickTitle.bind(_this);
	
	    _this.state = {
	      expanded: _this.props.defaultExpanded
	    };
	    return _this;
	  }
	
	  //头部点击事件
	
	
	  Panel.prototype.handleClickTitle = function handleClickTitle(e) {
	    // 不让事件进入事件池
	    e.persist();
	    e.selected = true;
	
	    if (this.props.onSelect) {
	      this.props.onSelect(this.props.eventKey, e);
	    } else {
	      e.preventDefault();
	    }
	
	    if (e.selected) {
	      this.setState({ expanded: !this.state.expanded });
	    }
	  };
	
	  //渲染panelheader
	
	
	  Panel.prototype.renderHeader = function renderHeader(collapsible, header, id, role, expanded, clsPrefix) {
	    var titleClassName = clsPrefix + '-title';
	
	    if (!collapsible) {
	      if (!_react2["default"].isValidElement(header)) {
	        return header;
	      }
	
	      return (0, _react.cloneElement)(header, {
	        className: (0, _classnames2["default"])(header.props.className, titleClassName)
	      });
	    }
	
	    if (!_react2["default"].isValidElement(header)) {
	      return _react2["default"].createElement(
	        'h4',
	        { role: 'presentation', className: titleClassName },
	        this.renderAnchor(header, id, role, expanded)
	      );
	    }
	    if (this.props.headerContent) {
	      return (0, _react.cloneElement)(header, {
	        className: (0, _classnames2["default"])(header.props.className, titleClassName)
	      });
	    }
	
	    return (0, _react.cloneElement)(header, {
	      className: (0, _classnames2["default"])(header.props.className, titleClassName),
	      children: this.renderAnchor(header.props.children, id, role, expanded)
	    });
	  };
	
	  //如果使用链接，渲染为a标签
	
	
	  Panel.prototype.renderAnchor = function renderAnchor(header, id, role, expanded) {
	    return _react2["default"].createElement(
	      'a',
	      {
	        role: role,
	        href: id && '#' + id,
	        'aria-controls': id,
	        'aria-expanded': expanded,
	        'aria-selected': expanded,
	        className: expanded ? null : 'collapsed'
	      },
	      header
	    );
	  };
	
	  //复制代码，弹出提示信息
	
	
	  Panel.prototype.copyDemo = function copyDemo(e) {
	    var panelTarget = e.target.parentNode;
	    var clipBoardContent = panelTarget.firstChild.innerText;
	    (0, _copyToClipboard2["default"])(clipBoardContent);
	    _beeMessage2["default"].create({ content: '复制成功！', color: 'success', duration: 2 });
	  };
	
	  //如果有折叠动画，渲染折叠动画
	
	
	  Panel.prototype.renderCollapsibleBody = function renderCollapsibleBody(id, expanded, role, children, clsPrefix, copyable, animationHooks) {
	    return _react2["default"].createElement(
	      _beeTransition.Collapse,
	      _extends({ 'in': expanded }, animationHooks),
	      _react2["default"].createElement(
	        'div',
	        {
	          id: id,
	          role: role,
	          className: clsPrefix + '-collapse',
	          'aria-hidden': !expanded
	        },
	        this.renderBody(children, clsPrefix, copyable)
	      )
	    );
	  };
	
	  //渲染panelbody
	
	
	  Panel.prototype.renderBody = function renderBody(rawChildren, clsPrefix, copyable) {
	    var self = this;
	    var children = [];
	    var bodyChildren = [];
	
	    var bodyClassName = clsPrefix + '-body';
	    //添加到body的children中
	    function maybeAddBody(self) {
	      if (!bodyChildren.length) {
	        return;
	      }
	      // 给子组件添加key，为了之后触发事件时使用
	      children.push(_react2["default"].createElement(
	        'div',
	        { key: children.length, className: bodyClassName },
	        bodyChildren,
	        copyable && _react2["default"].createElement('i', { className: clsPrefix + '-copy uf uf-files-o', onClick: self.copyDemo })
	      ));
	      bodyChildren = [];
	    }
	
	    //转换为数组，方便复用
	    _react2["default"].Children.toArray(rawChildren).forEach(function (child) {
	      if (_react2["default"].isValidElement(child) && child.props.fill) {
	        maybeAddBody(self);
	
	        //将标示fill设置为undefined
	        children.push((0, _react.cloneElement)(child, { fill: undefined }));
	
	        return;
	      }
	      bodyChildren.push(child);
	    });
	
	    maybeAddBody(self);
	
	    return children;
	  };
	
	  Panel.prototype.render = function render() {
	    var _props = this.props,
	        collapsible = _props.collapsible,
	        header = _props.header,
	        id = _props.id,
	        footer = _props.footer,
	        propsExpanded = _props.expanded,
	        footerStyle = _props.footerStyle,
	        headerStyle = _props.headerStyle,
	        headerRole = _props.headerRole,
	        panelRole = _props.panelRole,
	        className = _props.className,
	        colors = _props.colors,
	        children = _props.children,
	        onEnter = _props.onEnter,
	        onEntering = _props.onEntering,
	        onEntered = _props.onEntered,
	        clsPrefix = _props.clsPrefix,
	        onExit = _props.onExit,
	        headerContent = _props.headerContent,
	        onExiting = _props.onExiting,
	        onExited = _props.onExited,
	        defaultExpanded = _props.defaultExpanded,
	        eventKey = _props.eventKey,
	        onSelect = _props.onSelect,
	        copyable = _props.copyable,
	        props = _objectWithoutProperties(_props, ['collapsible', 'header', 'id', 'footer', 'expanded', 'footerStyle', 'headerStyle', 'headerRole', 'panelRole', 'className', 'colors', 'children', 'onEnter', 'onEntering', 'onEntered', 'clsPrefix', 'onExit', 'headerContent', 'onExiting', 'onExited', 'defaultExpanded', 'eventKey', 'onSelect', 'copyable']);
	
	    var expanded = propsExpanded != null ? propsExpanded : this.state.expanded;
	
	    var classes = {};
	    classes['' + clsPrefix] = true;
	    classes[clsPrefix + '-' + colors] = true;
	
	    var headerClass = _defineProperty({}, clsPrefix + '-heading', true);
	
	    copyable === false ? false : true;
	    return _react2["default"].createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2["default"])(className, classes),
	        id: collapsible ? null : id
	      }),
	      header && _react2["default"].createElement(
	        'div',
	        { className: (0, _classnames2["default"])(headerClass), style: headerStyle, onClick: this.handleClickTitle },
	        this.renderHeader(collapsible, header, id, headerRole, expanded, clsPrefix)
	      ),
	      collapsible ? this.renderCollapsibleBody(id, expanded, panelRole, children, clsPrefix, copyable, { onEnter: onEnter, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onExited: onExited }) : this.renderBody(children, clsPrefix, copyable),
	      footer && _react2["default"].createElement(
	        'div',
	        { className: clsPrefix + '-footer', style: footerStyle },
	        footer
	      )
	    );
	  };
	
	  return Panel;
	}(_react2["default"].Component);
	
	Panel.propTypes = propTypes;
	Panel.defaultProps = defaultProps;
	
	exports["default"] = Panel;
	module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Fade = exports.Collapse = exports.Transition = undefined;
	
	var _Transition2 = __webpack_require__(11);
	
	var _Transition3 = _interopRequireDefault(_Transition2);
	
	var _Collapse2 = __webpack_require__(17);
	
	var _Collapse3 = _interopRequireDefault(_Collapse2);
	
	var _Fade2 = __webpack_require__(64);
	
	var _Fade3 = _interopRequireDefault(_Fade2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Transition = _Transition3["default"];
	exports.Collapse = _Collapse3["default"];
	exports.Fade = _Fade3["default"];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _properties = __webpack_require__(13);
	
	var _properties2 = _interopRequireDefault(_properties);
	
	var _on = __webpack_require__(16);
	
	var _on2 = _interopRequireDefault(_on);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var transitionEndEvent = _properties2["default"].end;
	
	//设置状态码
	var UNMOUNTED = exports.UNMOUNTED = 0;
	var EXITED = exports.EXITED = 1;
	var ENTERING = exports.ENTERING = 2;
	var ENTERED = exports.ENTERED = 3;
	var EXITING = exports.EXITING = 4;
	
	var propTypes = {
	  /**
	   * 是否触发动画
	   */
	  "in": _propTypes2["default"].bool,
	
	  /**
	   * 不显示的时候是否移除组件
	   */
	  unmountOnExit: _propTypes2["default"].bool,
	
	  /**
	   * 如果设置为默认显示，挂载时显示动画
	   */
	  transitionAppear: _propTypes2["default"].bool,
	
	  /**
	   * 设置超时时间，防止出现问题，可设置为>=动画时间
	   */
	  timeout: _propTypes2["default"].number,
	
	  /**
	   * 退出组件时添加的class
	   */
	  exitedClassName: _propTypes2["default"].string,
	  /**
	   * 退出组件中添加的class
	   */
	  exitingClassName: _propTypes2["default"].string,
	  /**
	   * 进入动画后添加的class
	   */
	  enteredClassName: _propTypes2["default"].string,
	  /**
	   * 进入动画时添加的class
	   */
	  enteringClassName: _propTypes2["default"].string,
	
	  /**
	   * 进入动画开始时的钩子函数
	   */
	  onEnter: _propTypes2["default"].func,
	  /**
	   * 进入动画中的钩子函数
	   */
	  onEntering: _propTypes2["default"].func,
	  /**
	   * 进入动画后的钩子函数
	   */
	  onEntered: _propTypes2["default"].func,
	  /**
	   * 退出动画开始时的钩子函数
	   */
	  onExit: _propTypes2["default"].func,
	  /**
	   * 退出动画中的钩子函数
	   */
	  onExiting: _propTypes2["default"].func,
	  /**
	   * 退出动画后的钩子函数
	   */
	  onExited: _propTypes2["default"].func
	};
	
	function noop() {}
	
	var defaultProps = {
	  "in": false,
	  unmountOnExit: false,
	  transitionAppear: false,
	  timeout: 5000,
	  onEnter: noop,
	  onEntering: noop,
	  onEntered: noop,
	  onExit: noop,
	  onExiting: noop,
	  onExited: noop
	};
	
	/**
	 * 动画组件
	 */
	
	var Transition = function (_Component) {
	  _inherits(Transition, _Component);
	
	  function Transition(props, context) {
	    _classCallCheck(this, Transition);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	    var initialStatus = void 0;
	    if (props["in"]) {
	      // 在componentdidmount时开始执行动画
	      initialStatus = props.transitionAppear ? EXITED : ENTERED;
	    } else {
	      initialStatus = props.unmountOnExit ? UNMOUNTED : EXITED;
	    }
	    _this.state = { status: initialStatus };
	
	    _this.nextCallback = null;
	    return _this;
	  }
	
	  Transition.prototype.componentDidMount = function componentDidMount() {
	    if (this.props.transitionAppear && this.props["in"]) {
	      this.performEnter(this.props);
	    }
	  };
	
	  Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (nextProps["in"] && this.props.unmountOnExit) {
	      if (this.state.status === UNMOUNTED) {
	        // 在componentDidUpdate执行动画.
	        this.setState({ status: EXITED });
	      }
	    } else {
	      this._needsUpdate = true;
	    }
	  };
	
	  Transition.prototype.componentDidUpdate = function componentDidUpdate() {
	    var status = this.state.status;
	
	    if (this.props.unmountOnExit && status === EXITED) {
	      // 当使用unmountOnExit时，exited为exiting和unmont的过渡状态
	      if (this.props["in"]) {
	        this.performEnter(this.props);
	      } else {
	        this.setState({ status: UNMOUNTED });
	      }
	
	      return;
	    }
	
	    // 确保只响应prop变化
	    if (this._needsUpdate) {
	      this._needsUpdate = false;
	
	      if (this.props["in"]) {
	        if (status === EXITING) {
	          this.performEnter(this.props);
	        } else if (status === EXITED) {
	          this.performEnter(this.props);
	        }
	        // 其他，当我们已经输入或输出
	      } else {
	        if (status === ENTERING || status === ENTERED) {
	          this.performExit(this.props);
	        }
	        // 我们已经输入或输出完成
	      }
	    }
	  };
	
	  Transition.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.cancelNextCallback();
	  };
	
	  Transition.prototype.performEnter = function performEnter(props) {
	    var _this2 = this;
	
	    this.cancelNextCallback();
	    var node = _reactDom2["default"].findDOMNode(this);
	
	    // 这里接收新props
	    props.onEnter(node);
	
	    this.safeSetState({ status: ENTERING }, function () {
	      _this2.props.onEntering(node);
	
	      _this2.onTransitionEnd(node, function () {
	        _this2.safeSetState({ status: ENTERED }, function () {
	          _this2.props.onEntered(node);
	        });
	      });
	    });
	  };
	
	  Transition.prototype.performExit = function performExit(props) {
	    var _this3 = this;
	
	    this.cancelNextCallback();
	    var node = _reactDom2["default"].findDOMNode(this);
	
	    props.onExit(node);
	
	    this.safeSetState({ status: EXITING }, function () {
	      _this3.props.onExiting(node);
	
	      _this3.onTransitionEnd(node, function () {
	        _this3.safeSetState({ status: EXITED }, function () {
	          _this3.props.onExited(node);
	        });
	      });
	    });
	  };
	
	  Transition.prototype.cancelNextCallback = function cancelNextCallback() {
	    if (this.nextCallback !== null) {
	      this.nextCallback.cancel();
	      this.nextCallback = null;
	    }
	  };
	
	  Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
	    // 确保在组件销毁后挂起的setState被消除
	    this.setState(nextState, this.setNextCallback(callback));
	  };
	
	  Transition.prototype.setNextCallback = function setNextCallback(callback) {
	    var _this4 = this;
	
	    var active = true;
	
	    this.nextCallback = function (event) {
	      if (active) {
	        active = false;
	        _this4.nextCallback = null;
	
	        callback(event);
	      }
	    };
	
	    this.nextCallback.cancel = function () {
	      active = false;
	    };
	
	    return this.nextCallback;
	  };
	
	  Transition.prototype.onTransitionEnd = function onTransitionEnd(node, handler) {
	    this.setNextCallback(handler);
	
	    if (node) {
	      if (transitionEndEvent == undefined) {
	        this.nextCallback();
	      } else {
	        (0, _on2["default"])(node, transitionEndEvent, this.nextCallback);
	      }
	      setTimeout(this.nextCallback, this.props.timeout);
	    } else {
	      setTimeout(this.nextCallback, 0);
	    }
	  };
	
	  Transition.prototype.render = function render() {
	    var status = this.state.status;
	    if (status === UNMOUNTED) {
	      return null;
	    }
	
	    var _props = this.props,
	        children = _props.children,
	        className = _props.className,
	        childProps = _objectWithoutProperties(_props, ['children', 'className']);
	
	    Object.keys(Transition.propTypes).forEach(function (key) {
	      return delete childProps[key];
	    });
	
	    var transitionClassName = void 0;
	    if (status === EXITED) {
	      transitionClassName = this.props.exitedClassName;
	    } else if (status === ENTERING) {
	      transitionClassName = this.props.enteringClassName;
	    } else if (status === ENTERED) {
	      transitionClassName = this.props.enteredClassName;
	    } else if (status === EXITING) {
	      transitionClassName = this.props.exitingClassName;
	    }
	
	    var child = _react2["default"].Children.only(children);
	    return _react2["default"].cloneElement(child, _extends({}, childProps, {
	      className: (0, _classnames2["default"])(child.props.className, className, transitionClassName)
	    }));
	  };
	
	  return Transition;
	}(_react.Component);
	
	Transition.propTypes = propTypes;
	
	Transition.defaultProps = defaultProps;
	
	exports["default"] = Transition;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = ReactDOM;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.default = exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = void 0;
	
	var _inDOM = _interopRequireDefault(__webpack_require__(15));
	
	var transform = 'transform';
	exports.transform = transform;
	var prefix, transitionEnd, animationEnd;
	exports.animationEnd = animationEnd;
	exports.transitionEnd = transitionEnd;
	var transitionProperty, transitionDuration, transitionTiming, transitionDelay;
	exports.transitionDelay = transitionDelay;
	exports.transitionTiming = transitionTiming;
	exports.transitionDuration = transitionDuration;
	exports.transitionProperty = transitionProperty;
	var animationName, animationDuration, animationTiming, animationDelay;
	exports.animationDelay = animationDelay;
	exports.animationTiming = animationTiming;
	exports.animationDuration = animationDuration;
	exports.animationName = animationName;
	
	if (_inDOM.default) {
	  var _getTransitionPropert = getTransitionProperties();
	
	  prefix = _getTransitionPropert.prefix;
	  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
	  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
	  exports.transform = transform = prefix + "-" + transform;
	  exports.transitionProperty = transitionProperty = prefix + "-transition-property";
	  exports.transitionDuration = transitionDuration = prefix + "-transition-duration";
	  exports.transitionDelay = transitionDelay = prefix + "-transition-delay";
	  exports.transitionTiming = transitionTiming = prefix + "-transition-timing-function";
	  exports.animationName = animationName = prefix + "-animation-name";
	  exports.animationDuration = animationDuration = prefix + "-animation-duration";
	  exports.animationTiming = animationTiming = prefix + "-animation-delay";
	  exports.animationDelay = animationDelay = prefix + "-animation-timing-function";
	}
	
	var _default = {
	  transform: transform,
	  end: transitionEnd,
	  property: transitionProperty,
	  timing: transitionTiming,
	  delay: transitionDelay,
	  duration: transitionDuration
	};
	exports.default = _default;
	
	function getTransitionProperties() {
	  var style = document.createElement('div').style;
	  var vendorMap = {
	    O: function O(e) {
	      return "o" + e.toLowerCase();
	    },
	    Moz: function Moz(e) {
	      return e.toLowerCase();
	    },
	    Webkit: function Webkit(e) {
	      return "webkit" + e;
	    },
	    ms: function ms(e) {
	      return "MS" + e;
	    }
	  };
	  var vendors = Object.keys(vendorMap);
	  var transitionEnd, animationEnd;
	  var prefix = '';
	
	  for (var i = 0; i < vendors.length; i++) {
	    var vendor = vendors[i];
	
	    if (vendor + "TransitionProperty" in style) {
	      prefix = "-" + vendor.toLowerCase();
	      transitionEnd = vendorMap[vendor]('TransitionEnd');
	      animationEnd = vendorMap[vendor]('AnimationEnd');
	      break;
	    }
	  }
	
	  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';
	  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';
	  style = null;
	  return {
	    animationEnd: animationEnd,
	    transitionEnd: transitionEnd,
	    prefix: prefix
	  };
	}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	}
	
	module.exports = _interopRequireDefault;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = void 0;
	
	var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	exports.default = _default;
	module.exports = exports["default"];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.default = void 0;
	
	var _inDOM = _interopRequireDefault(__webpack_require__(15));
	
	var on = function on() {};
	
	if (_inDOM.default) {
	  on = function () {
	    if (document.addEventListener) return function (node, eventName, handler, capture) {
	      return node.addEventListener(eventName, handler, capture || false);
	    };else if (document.attachEvent) return function (node, eventName, handler) {
	      return node.attachEvent('on' + eventName, function (e) {
	        e = e || window.event;
	        e.target = e.target || e.srcElement;
	        e.currentTarget = node;
	        handler.call(node, e);
	      });
	    };
	  }();
	}
	
	var _default = on;
	exports.default = _default;
	module.exports = exports["default"];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _style = __webpack_require__(18);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Transition = __webpack_require__(11);
	
	var _Transition2 = _interopRequireDefault(_Transition);
	
	var _capitalize = __webpack_require__(26);
	
	var _capitalize2 = _interopRequireDefault(_capitalize);
	
	var _tinperBeeCore = __webpack_require__(27);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var MARGINS = {
	  height: ['marginTop', 'marginBottom'],
	  width: ['marginLeft', 'marginRight']
	};
	
	// reading a dimension prop will cause the browser to recalculate,
	// which will let our animations work
	function triggerBrowserReflow(node) {
	  node.offsetHeight; // eslint-disable-line no-unused-expressions
	}
	
	function getDimensionValue(dimension, elem) {
	  var value = elem['offset' + (0, _capitalize2["default"])(dimension)];
	  var margins = MARGINS[dimension];
	
	  return value + parseInt((0, _style2["default"])(elem, margins[0]), 10) + parseInt((0, _style2["default"])(elem, margins[1]), 10);
	}
	
	var propTypes = {
	  /**
	   * Show the component; triggers the expand or collapse animation
	   */
	  "in": _propTypes2["default"].bool,
	
	  /**
	   * Unmount the component (remove it from the DOM) when it is collapsed
	   */
	  unmountOnExit: _propTypes2["default"].bool,
	
	  /**
	   * Run the expand animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _propTypes2["default"].bool,
	
	  /**
	   * Duration of the collapse animation in milliseconds, to ensure that
	   * finishing callbacks are fired even if the original browser transition end
	   * events are canceled
	   */
	  timeout: _propTypes2["default"].number,
	
	  /**
	   * Callback fired before the component expands
	   */
	  onEnter: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to expand
	   */
	  onEntering: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component has expanded
	   */
	  onEntered: _propTypes2["default"].func,
	  /**
	   * Callback fired before the component collapses
	   */
	  onExit: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to collapse
	   */
	  onExiting: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component has collapsed
	   */
	  onExited: _propTypes2["default"].func,
	
	  /**
	   * The dimension used when collapsing, or a function that returns the
	   * dimension
	   *
	   * _Note: Bootstrap only partially supports 'width'!
	   * You will need to supply your own CSS animation for the `.width` CSS class._
	   */
	  dimension: _propTypes2["default"].oneOfType([_propTypes2["default"].oneOf(['height', 'width']), _propTypes2["default"].func]),
	
	  /**
	   * Function that returns the height or width of the animating DOM node
	   *
	   * Allows for providing some custom logic for how much the Collapse component
	   * should animate in its specified dimension. Called with the current
	   * dimension prop value and the DOM node.
	   */
	  getDimensionValue: _propTypes2["default"].func,
	
	  /**
	   * ARIA role of collapsible element
	   */
	  role: _propTypes2["default"].string
	};
	
	var defaultProps = {
	  "in": false,
	  timeout: 300,
	  unmountOnExit: false,
	  transitionAppear: false,
	
	  dimension: 'height',
	  getDimensionValue: getDimensionValue
	};
	
	var Collapse = function (_React$Component) {
	  _inherits(Collapse, _React$Component);
	
	  function Collapse(props, context) {
	    _classCallCheck(this, Collapse);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	    _this.handleEnter = _this.handleEnter.bind(_this);
	    _this.handleEntering = _this.handleEntering.bind(_this);
	    _this.handleEntered = _this.handleEntered.bind(_this);
	    _this.handleExit = _this.handleExit.bind(_this);
	    _this.handleExiting = _this.handleExiting.bind(_this);
	    return _this;
	  }
	
	  /* -- Expanding -- */
	
	
	  Collapse.prototype.handleEnter = function handleEnter(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = '0';
	  };
	
	  Collapse.prototype.handleEntering = function handleEntering(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = this._getScrollDimensionValue(elem, dimension);
	  };
	
	  Collapse.prototype.handleEntered = function handleEntered(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = null;
	  };
	
	  /* -- Collapsing -- */
	
	
	  Collapse.prototype.handleExit = function handleExit(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = this.props.getDimensionValue(dimension, elem) + 'px';
	    triggerBrowserReflow(elem);
	  };
	
	  Collapse.prototype.handleExiting = function handleExiting(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = '0';
	  };
	
	  Collapse.prototype._dimension = function _dimension() {
	    return typeof this.props.dimension === 'function' ? this.props.dimension() : this.props.dimension;
	  };
	
	  // for testing
	
	
	  Collapse.prototype._getScrollDimensionValue = function _getScrollDimensionValue(elem, dimension) {
	    return elem['scroll' + (0, _capitalize2["default"])(dimension)] + 'px';
	  };
	
	  Collapse.prototype.render = function render() {
	    var _props = this.props,
	        onEnter = _props.onEnter,
	        onEntering = _props.onEntering,
	        onEntered = _props.onEntered,
	        onExit = _props.onExit,
	        onExiting = _props.onExiting,
	        className = _props.className,
	        props = _objectWithoutProperties(_props, ['onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'className']);
	
	    delete props.dimension;
	    delete props.getDimensionValue;
	
	    var handleEnter = (0, _tinperBeeCore.createChainedFunction)(this.handleEnter, onEnter);
	    var handleEntering = (0, _tinperBeeCore.createChainedFunction)(this.handleEntering, onEntering);
	    var handleEntered = (0, _tinperBeeCore.createChainedFunction)(this.handleEntered, onEntered);
	    var handleExit = (0, _tinperBeeCore.createChainedFunction)(this.handleExit, onExit);
	    var handleExiting = (0, _tinperBeeCore.createChainedFunction)(this.handleExiting, onExiting);
	
	    var classes = {
	      width: this._dimension() === 'width'
	    };
	
	    return _react2["default"].createElement(_Transition2["default"], _extends({}, props, {
	      'aria-expanded': props.role ? props["in"] : null,
	      className: (0, _classnames2["default"])(className, classes),
	      exitedClassName: 'collapse',
	      exitingClassName: 'collapsing',
	      enteredClassName: 'collapse in',
	      enteringClassName: 'collapsing',
	      onEnter: handleEnter,
	      onEntering: handleEntering,
	      onEntered: handleEntered,
	      onExit: handleExit,
	      onExiting: handleExiting
	    }));
	  };
	
	  return Collapse;
	}(_react2["default"].Component);
	
	Collapse.propTypes = propTypes;
	Collapse.defaultProps = defaultProps;
	
	exports["default"] = Collapse;
	module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.default = style;
	
	var _camelizeStyle = _interopRequireDefault(__webpack_require__(19));
	
	var _hyphenateStyle = _interopRequireDefault(__webpack_require__(21));
	
	var _getComputedStyle2 = _interopRequireDefault(__webpack_require__(23));
	
	var _removeStyle = _interopRequireDefault(__webpack_require__(24));
	
	var _properties = __webpack_require__(13);
	
	var _isTransform = _interopRequireDefault(__webpack_require__(25));
	
	function style(node, property, value) {
	  var css = '';
	  var transforms = '';
	  var props = property;
	
	  if (typeof property === 'string') {
	    if (value === undefined) {
	      return node.style[(0, _camelizeStyle.default)(property)] || (0, _getComputedStyle2.default)(node).getPropertyValue((0, _hyphenateStyle.default)(property));
	    } else {
	      (props = {})[property] = value;
	    }
	  }
	
	  Object.keys(props).forEach(function (key) {
	    var value = props[key];
	
	    if (!value && value !== 0) {
	      (0, _removeStyle.default)(node, (0, _hyphenateStyle.default)(key));
	    } else if ((0, _isTransform.default)(key)) {
	      transforms += key + "(" + value + ") ";
	    } else {
	      css += (0, _hyphenateStyle.default)(key) + ": " + value + ";";
	    }
	  });
	
	  if (transforms) {
	    css += _properties.transform + ": " + transforms + ";";
	  }
	
	  node.style.cssText += ';' + css;
	}
	
	module.exports = exports["default"];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.default = camelizeStyleName;
	
	var _camelize = _interopRequireDefault(__webpack_require__(20));
	
	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
	 */
	var msPattern = /^-ms-/;
	
	function camelizeStyleName(string) {
	  return (0, _camelize.default)(string.replace(msPattern, 'ms-'));
	}
	
	module.exports = exports["default"];

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = camelize;
	var rHyphen = /-(.)/g;
	
	function camelize(string) {
	  return string.replace(rHyphen, function (_, chr) {
	    return chr.toUpperCase();
	  });
	}
	
	module.exports = exports["default"];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.default = hyphenateStyleName;
	
	var _hyphenate = _interopRequireDefault(__webpack_require__(22));
	
	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
	 */
	var msPattern = /^ms-/;
	
	function hyphenateStyleName(string) {
	  return (0, _hyphenate.default)(string).replace(msPattern, '-ms-');
	}
	
	module.exports = exports["default"];

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = hyphenate;
	var rUpper = /([A-Z])/g;
	
	function hyphenate(string) {
	  return string.replace(rUpper, '-$1').toLowerCase();
	}
	
	module.exports = exports["default"];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.default = _getComputedStyle;
	
	var _camelizeStyle = _interopRequireDefault(__webpack_require__(19));
	
	var rposition = /^(top|right|bottom|left)$/;
	var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;
	
	function _getComputedStyle(node) {
	  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
	  var doc = node.ownerDocument;
	  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
	    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
	    getPropertyValue: function getPropertyValue(prop) {
	      var style = node.style;
	      prop = (0, _camelizeStyle.default)(prop);
	      if (prop == 'float') prop = 'styleFloat';
	      var current = node.currentStyle[prop] || null;
	      if (current == null && style && style[prop]) current = style[prop];
	
	      if (rnumnonpx.test(current) && !rposition.test(prop)) {
	        // Remember the original values
	        var left = style.left;
	        var runStyle = node.runtimeStyle;
	        var rsLeft = runStyle && runStyle.left; // Put in the new values to get a computed value out
	
	        if (rsLeft) runStyle.left = node.currentStyle.left;
	        style.left = prop === 'fontSize' ? '1em' : current;
	        current = style.pixelLeft + 'px'; // Revert the changed values
	
	        style.left = left;
	        if (rsLeft) runStyle.left = rsLeft;
	      }
	
	      return current;
	    }
	  };
	}
	
	module.exports = exports["default"];

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = removeStyle;
	
	function removeStyle(node, key) {
	  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
	}
	
	module.exports = exports["default"];

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = isTransform;
	var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
	
	function isTransform(property) {
	  return !!(property && supportedTransforms.test(property));
	}
	
	module.exports = exports["default"];

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = capitalize;
	function capitalize(string) {
	  return "" + string.charAt(0).toUpperCase() + string.slice(1);
	}
	module.exports = exports["default"];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.Align = exports.toArray = exports.cssAnimation = exports.addEventListener = exports.contains = exports.KeyCode = exports.createChainedFunction = exports.splitComponent = exports.isRequiredForA11y = exports.elementType = exports.deprecated = exports.componentOrElement = exports.all = undefined;
	
	var _all2 = __webpack_require__(28);
	
	var _all3 = _interopRequireDefault(_all2);
	
	var _componentOrElement2 = __webpack_require__(30);
	
	var _componentOrElement3 = _interopRequireDefault(_componentOrElement2);
	
	var _deprecated2 = __webpack_require__(31);
	
	var _deprecated3 = _interopRequireDefault(_deprecated2);
	
	var _elementType2 = __webpack_require__(34);
	
	var _elementType3 = _interopRequireDefault(_elementType2);
	
	var _isRequiredForA11y2 = __webpack_require__(35);
	
	var _isRequiredForA11y3 = _interopRequireDefault(_isRequiredForA11y2);
	
	var _splitComponent2 = __webpack_require__(36);
	
	var _splitComponent3 = _interopRequireDefault(_splitComponent2);
	
	var _createChainedFunction2 = __webpack_require__(37);
	
	var _createChainedFunction3 = _interopRequireDefault(_createChainedFunction2);
	
	var _keyCode = __webpack_require__(38);
	
	var _keyCode2 = _interopRequireDefault(_keyCode);
	
	var _contains2 = __webpack_require__(39);
	
	var _contains3 = _interopRequireDefault(_contains2);
	
	var _addEventListener2 = __webpack_require__(40);
	
	var _addEventListener3 = _interopRequireDefault(_addEventListener2);
	
	var _cssAnimation2 = __webpack_require__(45);
	
	var _cssAnimation3 = _interopRequireDefault(_cssAnimation2);
	
	var _toArray2 = __webpack_require__(49);
	
	var _toArray3 = _interopRequireDefault(_toArray2);
	
	var _Align2 = __webpack_require__(50);
	
	var _Align3 = _interopRequireDefault(_Align2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.all = _all3.default;
	exports.componentOrElement = _componentOrElement3.default;
	exports.deprecated = _deprecated3.default;
	exports.elementType = _elementType3.default;
	exports.isRequiredForA11y = _isRequiredForA11y3.default;
	exports.splitComponent = _splitComponent3.default;
	exports.createChainedFunction = _createChainedFunction3.default;
	exports.KeyCode = _keyCode2.default;
	exports.contains = _contains3.default;
	exports.addEventListener = _addEventListener3.default;
	exports.cssAnimation = _cssAnimation3.default;
	exports.toArray = _toArray3.default;
	//export getContainerRenderMixin from './getContainerRenderMixin';
	
	exports.Align = _Align3.default;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = all;
	
	var _createChainableTypeChecker = __webpack_require__(29);
	
	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function all() {
	  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
	    validators[_key] = arguments[_key];
	  }
	
	  function allPropTypes() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    var error = null;
	
	    validators.forEach(function (validator) {
	      if (error != null) {
	        return;
	      }
	
	      var result = validator.apply(undefined, args);
	      if (result != null) {
	        error = result;
	      }
	    });
	
	    return error;
	  }
	
	  return (0, _createChainableTypeChecker2.default)(allPropTypes);
	} /**
	   * This source code is quoted from rc-util.
	   * homepage: https://github.com/react-component/util
	   */

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = createChainableTypeChecker;
	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	// Mostly taken from ReactPropTypes.
	
	/* This source code is quoted from rc-util.
	 * homepage: https://github.com/react-component/util
	 */
	
	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;
	
	    if (props[propName] == null) {
	      if (isRequired) {
	        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
	      }
	
	      return null;
	    }
	
	    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
	      args[_key - 6] = arguments[_key];
	    }
	
	    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
	  }
	
	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);
	
	  return chainedCheckType;
	}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * This source code is quoted from rc-util.
	                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/util
	                                                                                                                                                                                                                                                                               */
	
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createChainableTypeChecker = __webpack_require__(29);
	
	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validate(props, propName, componentName, location, propFullName) {
	  var propValue = props[propName];
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
	
	  if (_react2.default.isValidElement(propValue)) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement. You can usually obtain a ReactComponent or DOMElement ' + 'from a ReactElement by attaching a ref to it.');
	  }
	
	  if ((propType !== 'object' || typeof propValue.render !== 'function') && propValue.nodeType !== 1) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement.');
	  }
	
	  return null;
	}
	
	exports.default = (0, _createChainableTypeChecker2.default)(validate);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = deprecated;
	
	var _warning = __webpack_require__(32);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var warned = {}; /**
	                  * This source code is quoted from rc-util.
	                  * homepage: https://github.com/react-component/util
	                  */
	function deprecated(validator, reason) {
	  return function validate(props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;
	
	    if (props[propName] != null) {
	      var messageKey = componentName + '.' + propName;
	
	      (0, _warning2.default)(warned[messageKey], 'The ' + location + ' `' + propFullNameSafe + '` of ' + ('`' + componentNameSafe + '` is deprecated. ' + reason + '.'));
	
	      warned[messageKey] = true;
	    }
	
	    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
	      args[_key - 5] = arguments[_key];
	    }
	
	    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
	  };
	}
	
	/* eslint-disable no-underscore-dangle */
	function _resetWarned() {
	  warned = {};
	}
	
	deprecated._resetWarned = _resetWarned;
	/* eslint-enable no-underscore-dangle */

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var __DEV__ = process.env.NODE_ENV !== 'production';
	
	var warning = function() {};
	
	if (__DEV__) {
	  var printWarning = function printWarning(format, args) {
	    var len = arguments.length;
	    args = new Array(len > 1 ? len - 1 : 0);
	    for (var key = 1; key < len; key++) {
	      args[key - 1] = arguments[key];
	    }
	    var argIndex = 0;
	    var message = 'Warning: ' +
	      format.replace(/%s/g, function() {
	        return args[argIndex++];
	      });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  }
	
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	          '`warning(condition, format, ...args)` requires a warning ' +
	          'message argument'
	      );
	    }
	    if (!condition) {
	      printWarning.apply(null, [format].concat(args));
	    }
	  };
	}
	
	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * This source code is quoted from rc-util.
	                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/util
	                                                                                                                                                                                                                                                                               */
	
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createChainableTypeChecker = __webpack_require__(29);
	
	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function elementType(props, propName, componentName, location, propFullName) {
	  var propValue = props[propName];
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
	
	  if (_react2.default.isValidElement(propValue)) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
	  }
	
	  if (propType !== 'function' && propType !== 'string') {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
	  }
	
	  return null;
	}
	
	exports.default = (0, _createChainableTypeChecker2.default)(elementType);

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = isRequiredForA11y;
	/**
	 * This source code is quoted from rc-util.
	 * homepage: https://github.com/react-component/util
	 */
	function isRequiredForA11y(validator) {
	  return function validate(props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;
	
	    if (props[propName] == null) {
	      return new Error('The ' + location + ' `' + propFullNameSafe + '` is required to make ' + ('`' + componentNameSafe + '` accessible for users of assistive ') + 'technologies such as screen readers.');
	    }
	
	    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
	      args[_key - 5] = arguments[_key];
	    }
	
	    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
	  };
	}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = splitComponentProps;
	/**
	 * This source code is quoted from rc-util.
	 * homepage: https://github.com/react-component/util
	 */
	function _objectEntries(obj) {
	  var entries = [];
	  var keys = Object.keys(obj);
	
	  for (var k = 0; k < keys.length; ++k) {
	    entries.push([keys[k], obj[keys[k]]]);
	  }return entries;
	}
	
	/**
	 * 分割要传入父元素和子元素的props
	 * @param  {[object]} props     传入的属性
	 * @param  {[reactElement]} Component 组件
	 * @return {[array]}           返回数组，第一个元素为父元素props对象，第二个子元素props对象
	 */
	function splitComponentProps(props, Component) {
	  var componentPropTypes = Component.propTypes;
	
	  var parentProps = {};
	  var childProps = {};
	
	  _objectEntries(props).forEach(function (_ref) {
	    var propName = _ref[0],
	        propValue = _ref[1];
	
	    if (componentPropTypes[propName]) {
	      parentProps[propName] = propValue;
	    } else {
	      childProps[propName] = propValue;
	    }
	  });
	
	  return [parentProps, childProps];
	}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	/**
	 * This source code is quoted from rc-util.
	 * homepage: https://github.com/react-component/util
	 */
	function createChainedFunction() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  return funcs.filter(function (f) {
	    return f != null;
	  }).reduce(function (acc, f) {
	    if (typeof f !== 'function') {
	      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
	    }
	
	    if (acc === null) {
	      return f;
	    }
	
	    return function chainedFunction() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      acc.apply(this, args);
	      f.apply(this, args);
	    };
	  }, null);
	}
	exports.default = createChainedFunction;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	/**
	 * This source code is quoted from rc-util.
	 * homepage: https://github.com/react-component/util
	 */
	'use strict';
	
	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */
	
	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};
	
	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	  // Function keys don't generate text
	  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }
	
	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};
	
	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
	  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
	    return true;
	  }
	
	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }
	
	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};
	
	module.exports = KeyCode;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = contains;
	/**
	 * This source code is quoted from rc-util.
	 * homepage: https://github.com/react-component/util
	 */
	function contains(root, n) {
	  var node = n;
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }
	
	  return false;
	}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = addEventListenerWrap;
	
	var _addDomEventListener = __webpack_require__(41);
	
	var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * This source code is quoted from rc-util.
	 * homepage: https://github.com/react-component/util
	 */
	function addEventListenerWrap(target, eventType, cb) {
	  /* eslint camelcase: 2 */
	  var callback = _reactDom2.default.unstable_batchedUpdates ? function run(e) {
	    _reactDom2.default.unstable_batchedUpdates(cb, e);
	  } : cb;
	  return (0, _addDomEventListener2.default)(target, eventType, callback);
	}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = addEventListener;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _EventObject = __webpack_require__(42);
	
	var _EventObject2 = _interopRequireDefault(_EventObject);
	
	function addEventListener(target, eventType, callback, option) {
	  function wrapCallback(e) {
	    var ne = new _EventObject2['default'](e);
	    callback.call(target, ne);
	  }
	
	  if (target.addEventListener) {
	    var _ret = (function () {
	      var useCapture = false;
	      if (typeof option === 'object') {
	        useCapture = option.capture || false;
	      } else if (typeof option === 'boolean') {
	        useCapture = option;
	      }
	
	      target.addEventListener(eventType, wrapCallback, option || false);
	
	      return {
	        v: {
	          remove: function remove() {
	            target.removeEventListener(eventType, wrapCallback, useCapture);
	          }
	        }
	      };
	    })();
	
	    if (typeof _ret === 'object') return _ret.v;
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + eventType, wrapCallback);
	    return {
	      remove: function remove() {
	        target.detachEvent('on' + eventType, wrapCallback);
	      }
	    };
	  }
	}
	
	module.exports = exports['default'];

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @ignore
	 * event object for dom
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _EventBaseObject = __webpack_require__(43);
	
	var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);
	
	var _objectAssign = __webpack_require__(44);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var TRUE = true;
	var FALSE = false;
	var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];
	
	function isNullOrUndefined(w) {
	  return w === null || w === undefined;
	}
	
	var eventNormalizers = [{
	  reg: /^key/,
	  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
	  fix: function fix(event, nativeEvent) {
	    if (isNullOrUndefined(event.which)) {
	      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
	    }
	
	    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
	    if (event.metaKey === undefined) {
	      event.metaKey = event.ctrlKey;
	    }
	  }
	}, {
	  reg: /^touch/,
	  props: ['touches', 'changedTouches', 'targetTouches']
	}, {
	  reg: /^hashchange$/,
	  props: ['newURL', 'oldURL']
	}, {
	  reg: /^gesturechange$/i,
	  props: ['rotation', 'scale']
	}, {
	  reg: /^(mousewheel|DOMMouseScroll)$/,
	  props: [],
	  fix: function fix(event, nativeEvent) {
	    var deltaX = undefined;
	    var deltaY = undefined;
	    var delta = undefined;
	    var wheelDelta = nativeEvent.wheelDelta;
	    var axis = nativeEvent.axis;
	    var wheelDeltaY = nativeEvent.wheelDeltaY;
	    var wheelDeltaX = nativeEvent.wheelDeltaX;
	    var detail = nativeEvent.detail;
	
	    // ie/webkit
	    if (wheelDelta) {
	      delta = wheelDelta / 120;
	    }
	
	    // gecko
	    if (detail) {
	      // press control e.detail == 1 else e.detail == 3
	      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
	    }
	
	    // Gecko
	    if (axis !== undefined) {
	      if (axis === event.HORIZONTAL_AXIS) {
	        deltaY = 0;
	        deltaX = 0 - delta;
	      } else if (axis === event.VERTICAL_AXIS) {
	        deltaX = 0;
	        deltaY = delta;
	      }
	    }
	
	    // Webkit
	    if (wheelDeltaY !== undefined) {
	      deltaY = wheelDeltaY / 120;
	    }
	    if (wheelDeltaX !== undefined) {
	      deltaX = -1 * wheelDeltaX / 120;
	    }
	
	    // 默认 deltaY (ie)
	    if (!deltaX && !deltaY) {
	      deltaY = delta;
	    }
	
	    if (deltaX !== undefined) {
	      /**
	       * deltaX of mousewheel event
	       * @property deltaX
	       * @member Event.DomEvent.Object
	       */
	      event.deltaX = deltaX;
	    }
	
	    if (deltaY !== undefined) {
	      /**
	       * deltaY of mousewheel event
	       * @property deltaY
	       * @member Event.DomEvent.Object
	       */
	      event.deltaY = deltaY;
	    }
	
	    if (delta !== undefined) {
	      /**
	       * delta of mousewheel event
	       * @property delta
	       * @member Event.DomEvent.Object
	       */
	      event.delta = delta;
	    }
	  }
	}, {
	  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
	  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
	  fix: function fix(event, nativeEvent) {
	    var eventDoc = undefined;
	    var doc = undefined;
	    var body = undefined;
	    var target = event.target;
	    var button = nativeEvent.button;
	
	    // Calculate pageX/Y if missing and clientX/Y available
	    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
	      eventDoc = target.ownerDocument || document;
	      doc = eventDoc.documentElement;
	      body = eventDoc.body;
	      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
	      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
	    }
	
	    // which for click: 1 === left; 2 === middle; 3 === right
	    // do not use button
	    if (!event.which && button !== undefined) {
	      if (button & 1) {
	        event.which = 1;
	      } else if (button & 2) {
	        event.which = 3;
	      } else if (button & 4) {
	        event.which = 2;
	      } else {
	        event.which = 0;
	      }
	    }
	
	    // add relatedTarget, if necessary
	    if (!event.relatedTarget && event.fromElement) {
	      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
	    }
	
	    return event;
	  }
	}];
	
	function retTrue() {
	  return TRUE;
	}
	
	function retFalse() {
	  return FALSE;
	}
	
	function DomEventObject(nativeEvent) {
	  var type = nativeEvent.type;
	
	  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';
	
	  _EventBaseObject2['default'].call(this);
	
	  this.nativeEvent = nativeEvent;
	
	  // in case dom event has been mark as default prevented by lower dom node
	  var isDefaultPrevented = retFalse;
	  if ('defaultPrevented' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
	  } else if ('getPreventDefault' in nativeEvent) {
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
	    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
	  } else if ('returnValue' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
	  }
	
	  this.isDefaultPrevented = isDefaultPrevented;
	
	  var fixFns = [];
	  var fixFn = undefined;
	  var l = undefined;
	  var prop = undefined;
	  var props = commonProps.concat();
	
	  eventNormalizers.forEach(function (normalizer) {
	    if (type.match(normalizer.reg)) {
	      props = props.concat(normalizer.props);
	      if (normalizer.fix) {
	        fixFns.push(normalizer.fix);
	      }
	    }
	  });
	
	  l = props.length;
	
	  // clone properties of the original event object
	  while (l) {
	    prop = props[--l];
	    this[prop] = nativeEvent[prop];
	  }
	
	  // fix target property, if necessary
	  if (!this.target && isNative) {
	    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
	  }
	
	  // check if target is a text node (safari)
	  if (this.target && this.target.nodeType === 3) {
	    this.target = this.target.parentNode;
	  }
	
	  l = fixFns.length;
	
	  while (l) {
	    fixFn = fixFns[--l];
	    fixFn(this, nativeEvent);
	  }
	
	  this.timeStamp = nativeEvent.timeStamp || Date.now();
	}
	
	var EventBaseObjectProto = _EventBaseObject2['default'].prototype;
	
	(0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
	  constructor: DomEventObject,
	
	  preventDefault: function preventDefault() {
	    var e = this.nativeEvent;
	
	    // if preventDefault exists run it on the original event
	    if (e.preventDefault) {
	      e.preventDefault();
	    } else {
	      // otherwise set the returnValue property of the original event to FALSE (IE)
	      e.returnValue = FALSE;
	    }
	
	    EventBaseObjectProto.preventDefault.call(this);
	  },
	
	  stopPropagation: function stopPropagation() {
	    var e = this.nativeEvent;
	
	    // if stopPropagation exists run it on the original event
	    if (e.stopPropagation) {
	      e.stopPropagation();
	    } else {
	      // otherwise set the cancelBubble property of the original event to TRUE (IE)
	      e.cancelBubble = TRUE;
	    }
	
	    EventBaseObjectProto.stopPropagation.call(this);
	  }
	});
	
	exports['default'] = DomEventObject;
	module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	/**
	 * @ignore
	 * base event object for custom and dom event.
	 * @author yiminghe@gmail.com
	 */
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function returnFalse() {
	  return false;
	}
	
	function returnTrue() {
	  return true;
	}
	
	function EventBaseObject() {
	  this.timeStamp = Date.now();
	  this.target = undefined;
	  this.currentTarget = undefined;
	}
	
	EventBaseObject.prototype = {
	  isEventObject: 1,
	
	  constructor: EventBaseObject,
	
	  isDefaultPrevented: returnFalse,
	
	  isPropagationStopped: returnFalse,
	
	  isImmediatePropagationStopped: returnFalse,
	
	  preventDefault: function preventDefault() {
	    this.isDefaultPrevented = returnTrue;
	  },
	
	  stopPropagation: function stopPropagation() {
	    this.isPropagationStopped = returnTrue;
	  },
	
	  stopImmediatePropagation: function stopImmediatePropagation() {
	    this.isImmediatePropagationStopped = returnTrue;
	    // fixed 1.2
	    // call stopPropagation implicitly
	    this.stopPropagation();
	  },
	
	  halt: function halt(immediate) {
	    if (immediate) {
	      this.stopImmediatePropagation();
	    } else {
	      this.stopPropagation();
	    }
	    this.preventDefault();
	  }
	};
	
	exports["default"] = EventBaseObject;
	module.exports = exports["default"];

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * This source code is quoted from rc-util.
	                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/util
	                                                                                                                                                                                                                                                                               */
	
	
	var _Event = __webpack_require__(46);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	var _componentClasses = __webpack_require__(47);
	
	var _componentClasses2 = _interopRequireDefault(_componentClasses);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var isCssAnimationSupported = _Event2.default.endEvents.length !== 0;
	
	
	var capitalPrefixes = ['Webkit', 'Moz', 'O',
	// ms is special .... !
	'ms'];
	var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
	
	function getStyleProperty(node, name) {
	  var style = window.getComputedStyle(node);
	
	  var ret = '';
	  for (var i = 0; i < prefixes.length; i++) {
	    ret = style.getPropertyValue(prefixes[i] + name);
	    if (ret) {
	      break;
	    }
	  }
	  return ret;
	}
	
	function fixBrowserByTimeout(node) {
	  if (isCssAnimationSupported) {
	    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
	    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
	    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
	    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
	    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
	    // sometimes, browser bug
	    node.rcEndAnimTimeout = setTimeout(function () {
	      node.rcEndAnimTimeout = null;
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }, time * 1000 + 200);
	  }
	}
	
	function clearBrowserBugTimeout(node) {
	  if (node.rcEndAnimTimeout) {
	    clearTimeout(node.rcEndAnimTimeout);
	    node.rcEndAnimTimeout = null;
	  }
	}
	
	var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
	  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	  var className = nameIsObj ? transitionName.name : transitionName;
	  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
	  var end = endCallback;
	  var start = void 0;
	  var active = void 0;
	  var nodeClasses = (0, _componentClasses2.default)(node);
	
	  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
	    end = endCallback.end;
	    start = endCallback.start;
	    active = endCallback.active;
	  }
	
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    nodeClasses.remove(className);
	    nodeClasses.remove(activeClassName);
	
	    _Event2.default.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional end is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (end) {
	      end();
	    }
	  };
	
	  _Event2.default.addEndEventListener(node, node.rcEndListener);
	
	  if (start) {
	    start();
	  }
	  nodeClasses.add(className);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    node.rcAnimTimeout = null;
	    nodeClasses.add(activeClassName);
	    if (active) {
	      setTimeout(active, 0);
	    }
	    fixBrowserByTimeout(node);
	    // 30ms for firefox
	  }, 30);
	
	  return {
	    stop: function stop() {
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }
	  };
	};
	
	cssAnimation.style = function (node, style, callback) {
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    _Event2.default.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };
	
	  _Event2.default.addEndEventListener(node, node.rcEndListener);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    for (var s in style) {
	      if (style.hasOwnProperty(s)) {
	        node.style[s] = style[s];
	      }
	    }
	    node.rcAnimTimeout = null;
	    fixBrowserByTimeout(node);
	  }, 0);
	};
	
	cssAnimation.setTransition = function (node, p, value) {
	  var property = p;
	  var v = value;
	  if (value === undefined) {
	    v = property;
	    property = '';
	  }
	  property = property || '';
	  capitalPrefixes.forEach(function (prefix) {
	    node.style[prefix + 'Transition' + property] = v;
	  });
	};
	
	cssAnimation.isCssAnimationSupported = isCssAnimationSupported;
	
	exports.default = cssAnimation;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	/**
	 * This source code is quoted from rc-util.
	 * homepage: https://github.com/react-component/util
	 */
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },
	
	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
	      var baseEvents = EVENT_NAME_MAP[baseEventName];
	      for (var styleName in baseEvents) {
	        if (styleName in style) {
	          endEvents.push(baseEvents[styleName]);
	          break;
	        }
	      }
	    }
	  }
	}
	
	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	  detectEvents();
	}
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var TransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	
	  endEvents: endEvents,
	
	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	exports.default = TransitionEvents;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	try {
	  var index = __webpack_require__(48);
	} catch (err) {
	  var index = __webpack_require__(48);
	}
	
	/**
	 * Whitespace regexp.
	 */
	
	var re = /\s+/;
	
	/**
	 * toString reference.
	 */
	
	var toString = Object.prototype.toString;
	
	/**
	 * Wrap `el` in a `ClassList`.
	 *
	 * @param {Element} el
	 * @return {ClassList}
	 * @api public
	 */
	
	module.exports = function(el){
	  return new ClassList(el);
	};
	
	/**
	 * Initialize a new ClassList for `el`.
	 *
	 * @param {Element} el
	 * @api private
	 */
	
	function ClassList(el) {
	  if (!el || !el.nodeType) {
	    throw new Error('A DOM element reference is required');
	  }
	  this.el = el;
	  this.list = el.classList;
	}
	
	/**
	 * Add class `name` if not already present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.add = function(name){
	  // classList
	  if (this.list) {
	    this.list.add(name);
	    return this;
	  }
	
	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (!~i) arr.push(name);
	  this.el.className = arr.join(' ');
	  return this;
	};
	
	/**
	 * Remove class `name` when present, or
	 * pass a regular expression to remove
	 * any which match.
	 *
	 * @param {String|RegExp} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.remove = function(name){
	  if ('[object RegExp]' == toString.call(name)) {
	    return this.removeMatching(name);
	  }
	
	  // classList
	  if (this.list) {
	    this.list.remove(name);
	    return this;
	  }
	
	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (~i) arr.splice(i, 1);
	  this.el.className = arr.join(' ');
	  return this;
	};
	
	/**
	 * Remove all classes matching `re`.
	 *
	 * @param {RegExp} re
	 * @return {ClassList}
	 * @api private
	 */
	
	ClassList.prototype.removeMatching = function(re){
	  var arr = this.array();
	  for (var i = 0; i < arr.length; i++) {
	    if (re.test(arr[i])) {
	      this.remove(arr[i]);
	    }
	  }
	  return this;
	};
	
	/**
	 * Toggle class `name`, can force state via `force`.
	 *
	 * For browsers that support classList, but do not support `force` yet,
	 * the mistake will be detected and corrected.
	 *
	 * @param {String} name
	 * @param {Boolean} force
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.toggle = function(name, force){
	  // classList
	  if (this.list) {
	    if ("undefined" !== typeof force) {
	      if (force !== this.list.toggle(name, force)) {
	        this.list.toggle(name); // toggle again to correct
	      }
	    } else {
	      this.list.toggle(name);
	    }
	    return this;
	  }
	
	  // fallback
	  if ("undefined" !== typeof force) {
	    if (!force) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  } else {
	    if (this.has(name)) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return an array of classes.
	 *
	 * @return {Array}
	 * @api public
	 */
	
	ClassList.prototype.array = function(){
	  var className = this.el.getAttribute('class') || '';
	  var str = className.replace(/^\s+|\s+$/g, '');
	  var arr = str.split(re);
	  if ('' === arr[0]) arr.shift();
	  return arr;
	};
	
	/**
	 * Check if class `name` is present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.has =
	ClassList.prototype.contains = function(name){
	  return this.list
	    ? this.list.contains(name)
	    : !! ~index(this.array(), name);
	};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

	module.exports = function(arr, obj){
	  if (arr.indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = toArray;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function toArray(children) {
	  var ret = [];
	  _react2.default.Children.forEach(children, function (c) {
	    ret.push(c);
	  });
	  return ret;
	} /**
	   * This source code is quoted from rc-util.
	   * homepage: https://github.com/react-component/util
	   */

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _domAlign = __webpack_require__(51);
	
	var _domAlign2 = _interopRequireDefault(_domAlign);
	
	var _addEventListener = __webpack_require__(40);
	
	var _addEventListener2 = _interopRequireDefault(_addEventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This source code is quoted from rc-util.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * homepage: https://github.com/react-component/util
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	//import isWindow from './isWindow';
	
	function isWindow(obj) {
	  /* eslint no-eq-null: 0 */
	  /* eslint eqeqeq: 0 */
	  return obj != null && obj == obj.window;
	}
	
	function buffer(fn, ms) {
	  var timer = void 0;
	
	  function clear() {
	    if (timer) {
	      clearTimeout(timer);
	      timer = null;
	    }
	  }
	
	  function bufferFn() {
	    clear();
	    timer = setTimeout(fn, ms);
	  }
	
	  bufferFn.clear = clear;
	
	  return bufferFn;
	}
	
	var propTypes = {
	  childrenProps: _propTypes2.default.object,
	  align: _propTypes2.default.object.isRequired,
	  target: _propTypes2.default.func,
	  onAlign: _propTypes2.default.func,
	  monitorBufferTime: _propTypes2.default.number,
	  monitorWindowResize: _propTypes2.default.bool,
	  disabled: _propTypes2.default.bool,
	  children: _propTypes2.default.any
	};
	
	var defaultProps = {
	  target: function target() {
	    return window;
	  },
	  onAlign: function onAlign() {},
	
	  monitorBufferTime: 50,
	  monitorWindowResize: false,
	  disabled: false
	};
	
	var Align = function (_React$Component) {
	  _inherits(Align, _React$Component);
	
	  function Align(props) {
	    _classCallCheck(this, Align);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _initialiseProps.call(_this);
	
	    return _this;
	  }
	
	  Align.prototype.componentDidMount = function componentDidMount() {
	    var props = this.props;
	    // if parent ref not attached .... use document.getElementById
	    this.forceAlign();
	    if (!props.disabled && props.monitorWindowResize) {
	      this.startMonitorWindowResize();
	    }
	  };
	
	  Align.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    var reAlign = false;
	    var props = this.props;
	
	    if (!props.disabled) {
	      if (prevProps.disabled || prevProps.align !== props.align) {
	        reAlign = true;
	      } else {
	        var lastTarget = prevProps.target();
	        var currentTarget = props.target();
	        if (isWindow(lastTarget) && isWindow(currentTarget)) {
	          reAlign = false;
	        } else if (lastTarget !== currentTarget) {
	          reAlign = true;
	        }
	      }
	    }
	
	    if (reAlign) {
	      this.forceAlign();
	    }
	
	    if (props.monitorWindowResize && !props.disabled) {
	      this.startMonitorWindowResize();
	    } else {
	      this.stopMonitorWindowResize();
	    }
	  };
	
	  Align.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.stopMonitorWindowResize();
	  };
	
	  Align.prototype.render = function render() {
	    var _props = this.props,
	        childrenProps = _props.childrenProps,
	        children = _props.children;
	
	    var child = _react2.default.Children.only(children);
	    if (childrenProps) {
	      var newProps = {};
	      for (var prop in childrenProps) {
	        if (childrenProps.hasOwnProperty(prop)) {
	          newProps[prop] = this.props[childrenProps[prop]];
	        }
	      }
	      return _react2.default.cloneElement(child, newProps);
	    }
	    return child;
	  };
	
	  return Align;
	}(_react2.default.Component);
	
	var _initialiseProps = function _initialiseProps() {
	  var _this2 = this;
	
	  this.startMonitorWindowResize = function () {
	    if (!_this2.resizeHandler) {
	      _this2.bufferMonitor = buffer(_this2.forceAlign, _this2.props.monitorBufferTime);
	      _this2.resizeHandler = (0, _addEventListener2.default)(window, 'resize', _this2.bufferMonitor);
	    }
	  };
	
	  this.stopMonitorWindowResize = function () {
	    if (_this2.resizeHandler) {
	      _this2.bufferMonitor.clear();
	      _this2.resizeHandler.remove();
	      _this2.resizeHandler = null;
	    }
	  };
	
	  this.forceAlign = function () {
	    var props = _this2.props;
	    if (!props.disabled) {
	      var source = _reactDom2.default.findDOMNode(_this2);
	      props.onAlign(source, (0, _domAlign2.default)(source, props.target(), props.align));
	    }
	  };
	};
	
	;
	
	Align.defaultProps = defaultProps;
	Align.propTypes = propTypes;
	
	exports.default = Align;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.alignPoint = exports.alignElement = undefined;
	
	var _alignElement = __webpack_require__(52);
	
	var _alignElement2 = _interopRequireDefault(_alignElement);
	
	var _alignPoint = __webpack_require__(63);
	
	var _alignPoint2 = _interopRequireDefault(_alignPoint);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports.alignElement = _alignElement2['default'];
	exports.alignPoint = _alignPoint2['default'];
	exports['default'] = _alignElement2['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _align = __webpack_require__(53);
	
	var _align2 = _interopRequireDefault(_align);
	
	var _getOffsetParent = __webpack_require__(57);
	
	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);
	
	var _getVisibleRectForElement = __webpack_require__(56);
	
	var _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);
	
	var _getRegion = __webpack_require__(60);
	
	var _getRegion2 = _interopRequireDefault(_getRegion);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function isOutOfVisibleRect(target) {
	  var visibleRect = (0, _getVisibleRectForElement2['default'])(target);
	  var targetRegion = (0, _getRegion2['default'])(target);
	
	  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
	}
	
	function alignElement(el, refNode, align) {
	  var target = align.target || refNode;
	  var refNodeRegion = (0, _getRegion2['default'])(target);
	
	  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target);
	
	  return (0, _align2['default'])(el, refNodeRegion, align, isTargetNotOutOfVisible);
	}
	
	alignElement.__getOffsetParent = _getOffsetParent2['default'];
	
	alignElement.__getVisibleRectForElement = _getVisibleRectForElement2['default'];
	
	exports['default'] = alignElement;
	module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(54);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _getVisibleRectForElement = __webpack_require__(56);
	
	var _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);
	
	var _adjustForViewport = __webpack_require__(59);
	
	var _adjustForViewport2 = _interopRequireDefault(_adjustForViewport);
	
	var _getRegion = __webpack_require__(60);
	
	var _getRegion2 = _interopRequireDefault(_getRegion);
	
	var _getElFuturePos = __webpack_require__(61);
	
	var _getElFuturePos2 = _interopRequireDefault(_getElFuturePos);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	// http://yiminghe.iteye.com/blog/1124720
	
	function isFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
	} /**
	   * align dom node flexibly
	   * @author yiminghe@gmail.com
	   */
	
	function isFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
	}
	
	function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
	}
	
	function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
	}
	
	function flip(points, reg, map) {
	  var ret = [];
	  _utils2['default'].each(points, function (p) {
	    ret.push(p.replace(reg, function (m) {
	      return map[m];
	    }));
	  });
	  return ret;
	}
	
	function flipOffset(offset, index) {
	  offset[index] = -offset[index];
	  return offset;
	}
	
	function convertOffset(str, offsetLen) {
	  var n = void 0;
	  if (/%$/.test(str)) {
	    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
	  } else {
	    n = parseInt(str, 10);
	  }
	  return n || 0;
	}
	
	function normalizeOffset(offset, el) {
	  offset[0] = convertOffset(offset[0], el.width);
	  offset[1] = convertOffset(offset[1], el.height);
	}
	
	/**
	 * @param el
	 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
	 * @param align
	 */
	function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
	  var points = align.points;
	  var offset = align.offset || [0, 0];
	  var targetOffset = align.targetOffset || [0, 0];
	  var overflow = align.overflow;
	  var source = align.source || el;
	  offset = [].concat(offset);
	  targetOffset = [].concat(targetOffset);
	  overflow = overflow || {};
	  var newOverflowCfg = {};
	  var fail = 0;
	  // 当前节点可以被放置的显示区域
	  var visibleRect = (0, _getVisibleRectForElement2['default'])(source);
	  // 当前节点所占的区域, left/top/width/height
	  var elRegion = (0, _getRegion2['default'])(source);
	  // 将 offset 转换成数值，支持百分比
	  normalizeOffset(offset, elRegion);
	  normalizeOffset(targetOffset, tgtRegion);
	  // 当前节点将要被放置的位置
	  var elFuturePos = (0, _getElFuturePos2['default'])(elRegion, tgtRegion, points, offset, targetOffset);
	  // 当前节点将要所处的区域
	  var newElRegion = _utils2['default'].merge(elRegion, elFuturePos);
	
	  // 如果可视区域不能完全放置当前节点时允许调整
	  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
	    if (overflow.adjustX) {
	      // 如果横向不能放下
	      if (isFailX(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var newPoints = flip(points, /[lr]/ig, {
	          l: 'r',
	          r: 'l'
	        });
	        // 偏移量也反下
	        var newOffset = flipOffset(offset, 0);
	        var newTargetOffset = flipOffset(targetOffset, 0);
	        var newElFuturePos = (0, _getElFuturePos2['default'])(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);
	
	        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = newPoints;
	          offset = newOffset;
	          targetOffset = newTargetOffset;
	        }
	      }
	    }
	
	    if (overflow.adjustY) {
	      // 如果纵向不能放下
	      if (isFailY(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var _newPoints = flip(points, /[tb]/ig, {
	          t: 'b',
	          b: 't'
	        });
	        // 偏移量也反下
	        var _newOffset = flipOffset(offset, 1);
	        var _newTargetOffset = flipOffset(targetOffset, 1);
	        var _newElFuturePos = (0, _getElFuturePos2['default'])(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);
	
	        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = _newPoints;
	          offset = _newOffset;
	          targetOffset = _newTargetOffset;
	        }
	      }
	    }
	
	    // 如果失败，重新计算当前节点将要被放置的位置
	    if (fail) {
	      elFuturePos = (0, _getElFuturePos2['default'])(elRegion, tgtRegion, points, offset, targetOffset);
	      _utils2['default'].mix(newElRegion, elFuturePos);
	    }
	    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
	    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect);
	    // 检查反下后的位置是否可以放下了，如果仍然放不下：
	    // 1. 复原修改过的定位参数
	    if (isStillFailX || isStillFailY) {
	      points = align.points;
	      offset = align.offset || [0, 0];
	      targetOffset = align.targetOffset || [0, 0];
	    }
	    // 2. 只有指定了可以调整当前方向才调整
	    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
	    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY;
	
	    // 确实要调整，甚至可能会调整高度宽度
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = (0, _adjustForViewport2['default'])(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  }
	
	  // need judge to in case set fixed with in css on height auto element
	  if (newElRegion.width !== elRegion.width) {
	    _utils2['default'].css(source, 'width', _utils2['default'].width(source) + newElRegion.width - elRegion.width);
	  }
	
	  if (newElRegion.height !== elRegion.height) {
	    _utils2['default'].css(source, 'height', _utils2['default'].height(source) + newElRegion.height - elRegion.height);
	  }
	
	  // https://github.com/kissyteam/kissy/issues/190
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	  _utils2['default'].offset(source, {
	    left: newElRegion.left,
	    top: newElRegion.top
	  }, {
	    useCssRight: align.useCssRight,
	    useCssBottom: align.useCssBottom,
	    useCssTransform: align.useCssTransform,
	    ignoreShake: align.ignoreShake
	  });
	
	  return {
	    points: points,
	    offset: offset,
	    targetOffset: targetOffset,
	    overflow: newOverflowCfg
	  };
	}
	
	exports['default'] = doAlign;
	/**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/
	
	module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _propertyUtils = __webpack_require__(55);
	
	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
	
	var getComputedStyleX = void 0;
	
	// https://stackoverflow.com/a/3485654/3040605
	function forceRelayout(elem) {
	  var originalStyle = elem.style.display;
	  elem.style.display = 'none';
	  elem.offsetHeight; // eslint-disable-line
	  elem.style.display = originalStyle;
	}
	
	function css(el, name, v) {
	  var value = v;
	  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = value + 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}
	
	function getClientPosition(elem) {
	  var box = void 0;
	  var x = void 0;
	  var y = void 0;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();
	
	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
	
	  x = box.left;
	  y = box.top;
	
	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.
	
	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.
	
	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
	
	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}
	
	function getScrollLeft(w) {
	  return getScroll(w);
	}
	
	function getScrollTop(w) {
	  return getScroll(w, true);
	}
	
	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	
	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj !== null && obj !== undefined && obj == obj.window;
	}
	
	function getDocument(node) {
	  if (isWindow(node)) {
	    return node.document;
	  }
	  if (node.nodeType === 9) {
	    return node;
	  }
	  return node.ownerDocument;
	}
	
	function _getComputedStyle(elem, name, cs) {
	  var computedStyle = cs;
	  var val = '';
	  var d = getDocument(elem);
	  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);
	
	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }
	
	  return val;
	}
	
	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';
	
	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
	
	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
	
	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT];
	
	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
	
	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;
	
	    // Revert the changed values
	    style[LEFT] = left;
	
	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}
	
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}
	
	function getOffsetDirection(dir, option) {
	  if (dir === 'left') {
	    return option.useCssRight ? 'right' : dir;
	  }
	  return option.useCssBottom ? 'bottom' : dir;
	}
	
	function oppositeOffsetDirection(dir) {
	  if (dir === 'left') {
	    return 'right';
	  } else if (dir === 'right') {
	    return 'left';
	  } else if (dir === 'top') {
	    return 'bottom';
	  } else if (dir === 'bottom') {
	    return 'top';
	  }
	}
	
	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setLeftTop(elem, offset, option) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	  var presetH = -999;
	  var presetV = -999;
	  var horizontalProperty = getOffsetDirection('left', option);
	  var verticalProperty = getOffsetDirection('top', option);
	  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
	  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);
	
	  if (horizontalProperty !== 'left') {
	    presetH = 999;
	  }
	
	  if (verticalProperty !== 'top') {
	    presetV = 999;
	  }
	  var originalTransition = '';
	  var originalOffset = getOffset(elem);
	  if ('left' in offset || 'top' in offset) {
	    originalTransition = (0, _propertyUtils.getTransitionProperty)(elem) || '';
	    (0, _propertyUtils.setTransitionProperty)(elem, 'none');
	  }
	  if ('left' in offset) {
	    elem.style[oppositeHorizontalProperty] = '';
	    elem.style[horizontalProperty] = presetH + 'px';
	  }
	  if ('top' in offset) {
	    elem.style[oppositeVerticalProperty] = '';
	    elem.style[verticalProperty] = presetV + 'px';
	  }
	  // force relayout
	  forceRelayout(elem);
	  var old = getOffset(elem);
	  var originalStyle = {};
	  for (var key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      var dir = getOffsetDirection(key, option);
	      var preset = key === 'left' ? presetH : presetV;
	      var off = originalOffset[key] - old[key];
	      if (dir === key) {
	        originalStyle[dir] = preset + off;
	      } else {
	        originalStyle[dir] = preset - off;
	      }
	    }
	  }
	  css(elem, originalStyle);
	  // force relayout
	  forceRelayout(elem);
	  if ('left' in offset || 'top' in offset) {
	    (0, _propertyUtils.setTransitionProperty)(elem, originalTransition);
	  }
	  var ret = {};
	  for (var _key in offset) {
	    if (offset.hasOwnProperty(_key)) {
	      var _dir = getOffsetDirection(_key, option);
	      var _off = offset[_key] - originalOffset[_key];
	      if (_key === _dir) {
	        ret[_dir] = originalStyle[_dir] + _off;
	      } else {
	        ret[_dir] = originalStyle[_dir] - _off;
	      }
	    }
	  }
	  css(elem, ret);
	}
	
	function setTransform(elem, offset) {
	  var originalOffset = getOffset(elem);
	  var originalXY = (0, _propertyUtils.getTransformXY)(elem);
	  var resultXY = { x: originalXY.x, y: originalXY.y };
	  if ('left' in offset) {
	    resultXY.x = originalXY.x + offset.left - originalOffset.left;
	  }
	  if ('top' in offset) {
	    resultXY.y = originalXY.y + offset.top - originalOffset.top;
	  }
	  (0, _propertyUtils.setTransformXY)(elem, resultXY);
	}
	
	function setOffset(elem, offset, option) {
	  if (option.ignoreShake) {
	    var oriOffset = getOffset(elem);
	
	    var oLeft = oriOffset.left.toFixed(0);
	    var oTop = oriOffset.top.toFixed(0);
	    var tLeft = offset.left.toFixed(0);
	    var tTop = offset.top.toFixed(0);
	
	    if (oLeft === tLeft && oTop === tTop) {
	      return;
	    }
	  }
	
	  if (option.useCssRight || option.useCssBottom) {
	    setLeftTop(elem, offset, option);
	  } else if (option.useCssTransform && (0, _propertyUtils.getTransformName)() in document.body.style) {
	    setTransform(elem, offset, option);
	  } else {
	    setLeftTop(elem, offset, option);
	  }
	}
	
	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}
	
	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}
	
	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;
	
	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name = void 0;
	
	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }
	
	  callback.call(elem);
	
	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}
	
	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop = void 0;
	  var j = void 0;
	  var i = void 0;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = void 0;
	        if (prop === 'border') {
	          cssProp = '' + prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}
	
	var domUtils = {};
	
	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };
	
	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name;
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});
	
	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, ex) {
	  var extra = ex;
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  } else if (borderBoxValueOrIsBorderBox) {
	    if (extra === BORDER_INDEX) {
	      return val;
	    }
	    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}
	
	var cssShow = {
	  position: 'absolute',
	  visibility: 'hidden',
	  display: 'block'
	};
	
	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay() {
	  for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
	    args[_key2] = arguments[_key2];
	  }
	
	  var val = void 0;
	  var elem = args[0];
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}
	
	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	
	  domUtils[name] = function (elem, v) {
	    var val = v;
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});
	
	function mix(to, from) {
	  for (var i in from) {
	    if (from.hasOwnProperty(i)) {
	      to[i] = from[i];
	    }
	  }
	  return to;
	}
	
	var utils = {
	  getWindow: function getWindow(node) {
	    if (node && node.document && node.setTimeout) {
	      return node;
	    }
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	
	  getDocument: getDocument,
	  offset: function offset(el, value, option) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value, option || {});
	    } else {
	      return getOffset(el);
	    }
	  },
	
	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var i = void 0;
	    var ret = {};
	    for (i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },
	
	  mix: mix,
	  getWindowScrollLeft: function getWindowScrollLeft(w) {
	    return getScrollLeft(w);
	  },
	  getWindowScrollTop: function getWindowScrollTop(w) {
	    return getScrollTop(w);
	  },
	  merge: function merge() {
	    var ret = {};
	
	    for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
	      args[_key3] = arguments[_key3];
	    }
	
	    for (var i = 0; i < args.length; i++) {
	      utils.mix(ret, args[i]);
	    }
	    return ret;
	  },
	
	  viewportWidth: 0,
	  viewportHeight: 0
	};
	
	mix(utils, domUtils);
	
	exports['default'] = utils;
	module.exports = exports['default'];

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getTransformName = getTransformName;
	exports.setTransitionProperty = setTransitionProperty;
	exports.getTransitionProperty = getTransitionProperty;
	exports.getTransformXY = getTransformXY;
	exports.setTransformXY = setTransformXY;
	var vendorPrefix = void 0;
	
	var jsCssMap = {
	  Webkit: '-webkit-',
	  Moz: '-moz-',
	  // IE did it wrong again ...
	  ms: '-ms-',
	  O: '-o-'
	};
	
	function getVendorPrefix() {
	  if (vendorPrefix !== undefined) {
	    return vendorPrefix;
	  }
	  vendorPrefix = '';
	  var style = document.createElement('p').style;
	  var testProp = 'Transform';
	  for (var key in jsCssMap) {
	    if (key + testProp in style) {
	      vendorPrefix = key;
	    }
	  }
	  return vendorPrefix;
	}
	
	function getTransitionName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'TransitionProperty' : 'transitionProperty';
	}
	
	function getTransformName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'Transform' : 'transform';
	}
	
	function setTransitionProperty(node, value) {
	  var name = getTransitionName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transitionProperty') {
	      node.style.transitionProperty = value;
	    }
	  }
	}
	
	function setTransform(node, value) {
	  var name = getTransformName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transform') {
	      node.style.transform = value;
	    }
	  }
	}
	
	function getTransitionProperty(node) {
	  return node.style.transitionProperty || node.style[getTransitionName()];
	}
	
	function getTransformXY(node) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
	    return { x: parseFloat(matrix[12] || matrix[4], 0), y: parseFloat(matrix[13] || matrix[5], 0) };
	  }
	  return {
	    x: 0,
	    y: 0
	  };
	}
	
	var matrix2d = /matrix\((.*)\)/;
	var matrix3d = /matrix3d\((.*)\)/;
	
	function setTransformXY(node, xy) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    var arr = void 0;
	    var match2d = transform.match(matrix2d);
	    if (match2d) {
	      match2d = match2d[1];
	      arr = match2d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[4] = xy.x;
	      arr[5] = xy.y;
	      setTransform(node, 'matrix(' + arr.join(',') + ')');
	    } else {
	      var match3d = transform.match(matrix3d)[1];
	      arr = match3d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[12] = xy.x;
	      arr[13] = xy.y;
	      setTransform(node, 'matrix3d(' + arr.join(',') + ')');
	    }
	  } else {
	    setTransform(node, 'translateX(' + xy.x + 'px) translateY(' + xy.y + 'px) translateZ(0)');
	  }
	}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(54);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _getOffsetParent = __webpack_require__(57);
	
	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);
	
	var _isAncestorFixed = __webpack_require__(58);
	
	var _isAncestorFixed2 = _interopRequireDefault(_isAncestorFixed);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * 获得元素的显示部分的区域
	 */
	function getVisibleRectForElement(element) {
	  var visibleRect = {
	    left: 0,
	    right: Infinity,
	    top: 0,
	    bottom: Infinity
	  };
	  var el = (0, _getOffsetParent2['default'])(element);
	  var doc = _utils2['default'].getDocument(element);
	  var win = doc.defaultView || doc.parentWindow;
	  var body = doc.body;
	  var documentElement = doc.documentElement;
	
	  // Determine the size of the visible rect by climbing the dom accounting for
	  // all scrollable containers.
	  while (el) {
	    // clientWidth is zero for inline block elements in ie.
	    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
	    // body may have overflow set on it, yet we still get the entire
	    // viewport. In some browsers, el.offsetParent may be
	    // document.documentElement, so check for that too.
	    el !== body && el !== documentElement && _utils2['default'].css(el, 'overflow') !== 'visible') {
	      var pos = _utils2['default'].offset(el);
	      // add border
	      pos.left += el.clientLeft;
	      pos.top += el.clientTop;
	      visibleRect.top = Math.max(visibleRect.top, pos.top);
	      visibleRect.right = Math.min(visibleRect.right,
	      // consider area without scrollBar
	      pos.left + el.clientWidth);
	      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
	      visibleRect.left = Math.max(visibleRect.left, pos.left);
	    } else if (el === body || el === documentElement) {
	      break;
	    }
	    el = (0, _getOffsetParent2['default'])(el);
	  }
	
	  // Set element position to fixed
	  // make sure absolute element itself don't affect it's visible area
	  // https://github.com/ant-design/ant-design/issues/7601
	  var originalPosition = null;
	  if (!_utils2['default'].isWindow(element) && element.nodeType !== 9) {
	    originalPosition = element.style.position;
	    var position = _utils2['default'].css(element, 'position');
	    if (position === 'absolute') {
	      element.style.position = 'fixed';
	    }
	  }
	
	  var scrollX = _utils2['default'].getWindowScrollLeft(win);
	  var scrollY = _utils2['default'].getWindowScrollTop(win);
	  var viewportWidth = _utils2['default'].viewportWidth(win);
	  var viewportHeight = _utils2['default'].viewportHeight(win);
	  var documentWidth = documentElement.scrollWidth;
	  var documentHeight = documentElement.scrollHeight;
	
	  // Reset element position after calculate the visible area
	  if (element.style) {
	    element.style.position = originalPosition;
	  }
	
	  if ((0, _isAncestorFixed2['default'])(element)) {
	    // Clip by viewport's size.
	    visibleRect.left = Math.max(visibleRect.left, scrollX);
	    visibleRect.top = Math.max(visibleRect.top, scrollY);
	    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
	    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
	  } else {
	    // Clip by document's size.
	    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
	    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
	
	    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
	    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
	  }
	
	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
	}
	
	exports['default'] = getVisibleRectForElement;
	module.exports = exports['default'];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(54);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * 得到会导致元素显示不全的祖先元素
	 */
	
	function getOffsetParent(element) {
	  if (_utils2['default'].isWindow(element) || element.nodeType === 9) {
	    return null;
	  }
	  // ie 这个也不是完全可行
	  /*
	   <div style="width: 50px;height: 100px;overflow: hidden">
	   <div style="width: 50px;height: 100px;position: relative;" id="d6">
	   元素 6 高 100px 宽 50px<br/>
	   </div>
	   </div>
	   */
	  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
	  //  In other browsers it only includes elements with position absolute, relative or
	  // fixed, not elements with overflow set to auto or scroll.
	  //        if (UA.ie && ieMode < 8) {
	  //            return element.offsetParent;
	  //        }
	  // 统一的 offsetParent 方法
	  var doc = _utils2['default'].getDocument(element);
	  var body = doc.body;
	  var parent = void 0;
	  var positionStyle = _utils2['default'].css(element, 'position');
	  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';
	
	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
	  }
	
	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    positionStyle = _utils2['default'].css(parent, 'position');
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	  return null;
	}
	
	exports['default'] = getOffsetParent;
	module.exports = exports['default'];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = isAncestorFixed;
	
	var _utils = __webpack_require__(54);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function isAncestorFixed(element) {
	  if (_utils2['default'].isWindow(element) || element.nodeType === 9) {
	    return false;
	  }
	
	  var doc = _utils2['default'].getDocument(element);
	  var body = doc.body;
	  var parent = null;
	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    var positionStyle = _utils2['default'].css(parent, 'position');
	    if (positionStyle === 'fixed') {
	      return true;
	    }
	  }
	  return false;
	}
	module.exports = exports['default'];

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(54);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  var pos = _utils2['default'].clone(elFuturePos);
	  var size = {
	    width: elRegion.width,
	    height: elRegion.height
	  };
	
	  if (overflow.adjustX && pos.left < visibleRect.left) {
	    pos.left = visibleRect.left;
	  }
	
	  // Left edge inside and right edge outside viewport, try to resize it.
	  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
	    size.width -= pos.left + size.width - visibleRect.right;
	  }
	
	  // Right edge outside viewport, try to move it.
	  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
	    // 保证左边界和可视区域左边界对齐
	    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
	  }
	
	  // Top edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top < visibleRect.top) {
	    pos.top = visibleRect.top;
	  }
	
	  // Top edge inside and bottom edge outside viewport, try to resize it.
	  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
	    size.height -= pos.top + size.height - visibleRect.bottom;
	  }
	
	  // Bottom edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
	    // 保证上边界和可视区域上边界对齐
	    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
	  }
	
	  return _utils2['default'].mix(pos, size);
	}
	
	exports['default'] = adjustForViewport;
	module.exports = exports['default'];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(54);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getRegion(node) {
	  var offset = void 0;
	  var w = void 0;
	  var h = void 0;
	  if (!_utils2['default'].isWindow(node) && node.nodeType !== 9) {
	    offset = _utils2['default'].offset(node);
	    w = _utils2['default'].outerWidth(node);
	    h = _utils2['default'].outerHeight(node);
	  } else {
	    var win = _utils2['default'].getWindow(node);
	    offset = {
	      left: _utils2['default'].getWindowScrollLeft(win),
	      top: _utils2['default'].getWindowScrollTop(win)
	    };
	    w = _utils2['default'].viewportWidth(win);
	    h = _utils2['default'].viewportHeight(win);
	  }
	  offset.width = w;
	  offset.height = h;
	  return offset;
	}
	
	exports['default'] = getRegion;
	module.exports = exports['default'];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getAlignOffset = __webpack_require__(62);
	
	var _getAlignOffset2 = _interopRequireDefault(_getAlignOffset);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
	  var p1 = (0, _getAlignOffset2['default'])(refNodeRegion, points[1]);
	  var p2 = (0, _getAlignOffset2['default'])(elRegion, points[0]);
	  var diff = [p2.left - p1.left, p2.top - p1.top];
	
	  return {
	    left: elRegion.left - diff[0] + offset[0] - targetOffset[0],
	    top: elRegion.top - diff[1] + offset[1] - targetOffset[1]
	  };
	}
	
	exports['default'] = getElFuturePos;
	module.exports = exports['default'];

/***/ }),
/* 62 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 获取 node 上的 align 对齐点 相对于页面的坐标
	 */
	
	function getAlignOffset(region, align) {
	  var V = align.charAt(0);
	  var H = align.charAt(1);
	  var w = region.width;
	  var h = region.height;
	
	  var x = region.left;
	  var y = region.top;
	
	  if (V === 'c') {
	    y += h / 2;
	  } else if (V === 'b') {
	    y += h;
	  }
	
	  if (H === 'c') {
	    x += w / 2;
	  } else if (H === 'r') {
	    x += w;
	  }
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	exports['default'] = getAlignOffset;
	module.exports = exports['default'];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _utils = __webpack_require__(54);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _align = __webpack_require__(53);
	
	var _align2 = _interopRequireDefault(_align);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
	 * If client position provided, will internal convert to page position.
	 */
	
	function alignPoint(el, tgtPoint, align) {
	  var pageX = void 0;
	  var pageY = void 0;
	
	  var doc = _utils2['default'].getDocument(el);
	  var win = doc.defaultView || doc.parentWindow;
	
	  var scrollX = _utils2['default'].getWindowScrollLeft(win);
	  var scrollY = _utils2['default'].getWindowScrollTop(win);
	  var viewportWidth = _utils2['default'].viewportWidth(win);
	  var viewportHeight = _utils2['default'].viewportHeight(win);
	
	  if ('pageX' in tgtPoint) {
	    pageX = tgtPoint.pageX;
	  } else {
	    pageX = scrollX + tgtPoint.clientX;
	  }
	
	  if ('pageY' in tgtPoint) {
	    pageY = tgtPoint.pageY;
	  } else {
	    pageY = scrollY + tgtPoint.clientY;
	  }
	
	  var tgtRegion = {
	    left: pageX,
	    top: pageY,
	    width: 0,
	    height: 0
	  };
	
	  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight;
	
	  // Provide default target point
	  var points = [align.points[0], 'cc'];
	
	  return (0, _align2['default'])(el, tgtRegion, _extends({}, align, { points: points }), pointInView);
	}
	
	exports['default'] = alignPoint;
	module.exports = exports['default'];

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Transition = __webpack_require__(11);
	
	var _Transition2 = _interopRequireDefault(_Transition);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  /**
	   * Show the component; triggers the fade in or fade out animation
	   */
	  "in": _propTypes2["default"].bool,
	
	  /**
	   * Unmount the component (remove it from the DOM) when it is faded out
	   */
	  unmountOnExit: _propTypes2["default"].bool,
	
	  /**
	   * Run the fade in animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _propTypes2["default"].bool,
	
	  /**
	   * Duration of the fade animation in milliseconds, to ensure that finishing
	   * callbacks are fired even if the original browser transition end events are
	   * canceled
	   */
	  timeout: _propTypes2["default"].number,
	
	  /**
	   * Callback fired before the component fades in
	   */
	  onEnter: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to fade in
	   */
	  onEntering: _propTypes2["default"].func,
	  /**
	   * Callback fired after the has component faded in
	   */
	  onEntered: _propTypes2["default"].func,
	  /**
	   * Callback fired before the component fades out
	   */
	  onExit: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to fade out
	   */
	  onExiting: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component has faded out
	   */
	  onExited: _propTypes2["default"].func
	};
	
	var defaultProps = {
	  "in": false,
	  timeout: 300,
	  unmountOnExit: false,
	  transitionAppear: false
	};
	
	var Fade = function (_React$Component) {
	  _inherits(Fade, _React$Component);
	
	  function Fade() {
	    _classCallCheck(this, Fade);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Fade.prototype.render = function render() {
	    return _react2["default"].createElement(_Transition2["default"], _extends({}, this.props, {
	      className: (0, _classnames2["default"])(this.props.className, 'fade'),
	      enteredClassName: 'in',
	      enteringClassName: 'in'
	    }));
	  };
	
	  return Fade;
	}(_react2["default"].Component);
	
	Fade.propTypes = propTypes;
	Fade.defaultProps = defaultProps;
	
	exports["default"] = Fade;
	module.exports = exports['default'];

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Message = __webpack_require__(66);
	
	var _Message2 = _interopRequireDefault(_Message);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Message2["default"];
	module.exports = exports['default'];

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _beeNotification = __webpack_require__(67);
	
	var _beeNotification2 = _interopRequireDefault(_beeNotification);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var defaultDuration = 1.5;
	var defaultTop = 0;
	var defaultBottom = 48;
	var bottom = 90;
	var padding = 30;
	var width = 200;
	var messageInstance = void 0;
	var key = 1;
	var clsPrefix = 'u-message';
	var noop = function noop() {};
	
	var positionObj = {
	    "top": {
	        messageStyle: {
	            width: "100%"
	        },
	        notificationStyle: {
	            top: defaultTop,
	            width: "100%"
	        },
	        transitionName: 'top'
	    },
	    "bottom": {
	        messageStyle: {
	            width: "100%"
	        },
	        notificationStyle: {
	            bottom: defaultBottom,
	            width: "100%"
	        },
	        transitionName: 'bottom'
	    },
	    "topRight": {
	        messageStyle: {
	            width: width
	        },
	        notificationStyle: {
	            top: padding,
	            right: padding,
	            width: width
	        },
	        transitionName: 'right'
	    },
	    "bottomRight": {
	        messageStyle: {
	            width: width
	        },
	        notificationStyle: {
	            bottom: bottom,
	            right: padding,
	            width: width
	        },
	        transitionName: 'right'
	    },
	    "topLeft": {
	        messageStyle: {
	            width: width
	        },
	        notificationStyle: {
	            top: padding,
	            left: padding,
	            width: width
	        },
	        transitionName: 'left'
	    },
	    "bottomLeft": {
	        messageStyle: {
	            width: width
	        },
	        notificationStyle: {
	            bottom: bottom,
	            left: padding,
	            width: width
	        },
	        transitionName: 'left'
	    }
	};
	
	function getMessageInstance() {
	    var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'top';
	    var callback = arguments[1];
	    var keyboard = arguments[2];
	    var onEscapeKeyUp = arguments[3];
	
	    if (messageInstance) {
	        callback(messageInstance);
	        return;
	    }
	    var style = positionObj[position].notificationStyle;
	    var instanceObj = {
	        clsPrefix: clsPrefix,
	        transitionName: clsPrefix + '-' + positionObj[position].transitionName,
	        style: style, // 覆盖原来的样式
	        position: ''
	    };
	    if (typeof keyboard === 'boolean') {
	        instanceObj.keyboard = keyboard;
	    }
	    if (typeof onEscapeKeyUp === 'function') {
	        instanceObj.onEscapeKeyUp = onEscapeKeyUp;
	    }
	    _beeNotification2["default"].newInstance(instanceObj, function (instance) {
	        messageInstance = instance;
	        callback(instance);
	    });
	}
	
	function notice(content, duration, type, onClose, position, style, keyboard, onEscapeKeyUp, showIcon) {
	    var iconType = {
	        info: 'uf uf-i-c-2',
	        success: 'uf uf-correct',
	        danger: 'uf uf-close-c',
	        warning: 'uf uf-exc-t',
	        light: 'uf uf-notification',
	        dark: 'uf uf-bubble',
	        news: 'uf uf-bell',
	        infolight: 'uf uf-i-c-2',
	        successlight: 'uf uf-correct',
	        dangerlight: 'uf uf-close-c',
	        warninglight: 'uf uf-exc-t'
	    }[type];
	
	    var positionStyle = positionObj[position].messageStyle;
	
	    getMessageInstance(position, function (instance) {
	        instance.notice({
	            key: key,
	            duration: duration,
	            color: type,
	            style: _extends({}, positionStyle, style),
	            content: _react2["default"].createElement(
	                'div',
	                null,
	                showIcon ? _react2["default"].createElement(
	                    'div',
	                    { className: clsPrefix + '-notice-description-icon' },
	                    _react2["default"].createElement('i', { className: (0, _classnames2["default"])(iconType) })
	                ) : null,
	                _react2["default"].createElement(
	                    'div',
	                    { className: clsPrefix + '-notice-description-content' },
	                    content
	                )
	            ),
	            onClose: onClose
	        });
	    }, keyboard, onEscapeKeyUp);
	    return function () {
	        var target = key++;
	        return function () {
	            if (messageInstance) {
	                messageInstance.removeNotice(target);
	            }
	        };
	    }();
	}
	
	exports["default"] = {
	    create: function create(obj) {
	        var content = obj.content || '';
	        var duration = _typeof(obj.duration) == undefined ? defaultDuration : obj.duration;
	        var color = obj.color || 'dark';
	        var onClose = obj.onClose || noop;
	        var position = obj.position || "top";
	        var style = obj.style || {};
	        var showIcon = obj.showIcon || false;
	        return notice(content, duration, color, onClose, position, style, obj.keyboard, obj.onEscapeKeyUp, showIcon);
	    },
	    config: function config(options) {
	        if (options.top !== undefined) {
	            defaultTop = options.top;
	        }
	        if (options.duration !== undefined) {
	            defaultDuration = options.duration;
	        }
	        if (options.clsPrefix !== undefined) {
	            clsPrefix = options.clsPrefix;
	        }
	        if (options.defaultBottom !== undefined) {
	            defaultBottom = options.defaultBottom;
	        }
	        if (options.bottom !== undefined) {
	            bottom = options.bottom;
	        }
	        if (options.width !== undefined) {
	            bottom = options.width;
	        }
	    },
	    destroy: function destroy() {
	        if (messageInstance) {
	            messageInstance.destroy();
	            messageInstance = null;
	        }
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Notification = __webpack_require__(68);
	
	var _Notification2 = _interopRequireDefault(_Notification);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Notification2["default"];
	module.exports = exports['default'];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _beeAnimate = __webpack_require__(69);
	
	var _beeAnimate2 = _interopRequireDefault(_beeAnimate);
	
	var _createChainedFunction = __webpack_require__(37);
	
	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);
	
	var _ownerDocument = __webpack_require__(74);
	
	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);
	
	var _addEventListener = __webpack_require__(76);
	
	var _addEventListener2 = _interopRequireDefault(_addEventListener);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Notice = __webpack_require__(78);
	
	var _Notice2 = _interopRequireDefault(_Notice);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var seed = 0;
	var now = Date.now();
	
	function getUuid() {
	  return 'uNotification_' + now + '_' + seed++;
	}
	
	var propTypes = {
	  show: _propTypes2["default"].bool,
	  clsPrefix: _propTypes2["default"].string,
	  style: _propTypes2["default"].object,
	  position: _propTypes2["default"].oneOf(['topRight', 'bottomRight', '']),
	  transitionName: _propTypes2["default"].string,
	  keyboard: _propTypes2["default"].bool, // 按esc键是否关闭notice
	  onEscapeKeyUp: _propTypes2["default"].func, // 设置esc键特殊钩子函数
	  animation: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].object])
	};
	
	var defaultProps = {
	  clsPrefix: 'u-notification',
	  animation: 'fade',
	  keyboard: true,
	  position: 'topRight'
	};
	
	var Notification = function (_Component) {
	  _inherits(Notification, _Component);
	
	  function Notification(props) {
	    _classCallCheck(this, Notification);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.handleDocumentKeyUp = function (e) {
	      if (_this.props.keyboard && e.keyCode === 27 && _this.state.notices.length) {
	        _this.setState(function (previousState) {
	          previousState.notices.shift();
	          return {
	            notices: previousState.notices
	          };
	        });
	        if (_this.props.onEscapeKeyUp) {
	          _this.props.onEscapeKeyUp(e);
	        }
	      }
	    };
	
	    _this.state = {
	      notices: []
	    };
	    _this.add = _this.add.bind(_this);
	    _this.remove = _this.remove.bind(_this);
	
	    return _this;
	  }
	
	  Notification.prototype.componentDidMount = function componentDidMount() {
	    // 给document绑定keyup事件
	    var doc = (0, _ownerDocument2["default"])(this);
	    this._onDocumentKeyupListener = (0, _addEventListener2["default"])(doc, 'keyup', this.handleDocumentKeyUp);
	  };
	
	  Notification.prototype.componentWillUnmount = function componentWillUnmount() {
	    this._onDocumentKeyupListener.remove();
	  };
	
	  Notification.prototype.getTransitionName = function getTransitionName() {
	    var props = this.props;
	    var transitionName = props.transitionName;
	    if (!transitionName && props.animation) {
	      transitionName = props.clsPrefix + '-' + props.animation;
	    }
	    return transitionName;
	  };
	
	  Notification.prototype.add = function add(notice) {
	    var key = notice.key = notice.key || getUuid();
	    this.setState(function (previousState) {
	      var notices = previousState.notices;
	      if (!notices.filter(function (v) {
	        return v.key === key;
	      }).length) {
	        return {
	          notices: notices.concat(notice)
	        };
	      }
	    });
	  };
	
	  Notification.prototype.remove = function remove(key) {
	    this.setState(function (previousState) {
	      return {
	        notices: previousState.notices.filter(function (notice) {
	          return notice.key !== key;
	        })
	      };
	    });
	  };
	
	  /**
	   * 处理绑定在document上的keyup事件
	   */
	
	
	  Notification.prototype.render = function render() {
	    var _this2 = this,
	        _classes;
	
	    var _props = this.props,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        position = _props.position,
	        style = _props.style;
	
	    var noticeNodes = this.state.notices.map(function (notice) {
	      var onClose = (0, _createChainedFunction2["default"])(_this2.remove.bind(_this2, notice.key), notice.onClose);
	      return _react2["default"].createElement(
	        _Notice2["default"],
	        _extends({
	          clsPrefix: clsPrefix
	        }, notice, {
	          onClose: onClose
	        }),
	        notice.content
	      );
	    });
	    var classes = (_classes = {}, _defineProperty(_classes, clsPrefix, 1), _defineProperty(_classes, className, !!className), _classes);
	    if (position) {
	      classes[clsPrefix + '-' + position] = !!position;
	    }
	
	    return _react2["default"].createElement(
	      'div',
	      { className: (0, _classnames2["default"])(className, classes), style: style },
	      _react2["default"].createElement(
	        _beeAnimate2["default"],
	        { transitionName: this.getTransitionName() },
	        noticeNodes
	      )
	    );
	  };
	
	  return Notification;
	}(_react.Component);
	
	;
	
	Notification.propTypes = propTypes;
	Notification.defaultProps = defaultProps;
	
	Notification.newInstance = function newNotificationInstance(properties, callback) {
	  if (typeof callback !== 'function') {
	    console.error('You must introduce callback as the second parameter of Notification.newInstance().');
	    return;
	  }
	  var props = properties || {};
	  var div = document.createElement('div');
	  document.body.appendChild(div);
	
	  var called = false;
	  function ref(notification) {
	    if (called) {
	      return;
	    }
	    called = true;
	    callback({
	      notice: function notice(noticeProps) {
	        notification.add(noticeProps);
	      },
	      removeNotice: function removeNotice(key) {
	        notification.remove(key);
	      },
	
	      component: notification,
	      destroy: function destroy() {
	        _reactDom2["default"].unmountComponentAtNode(div);
	        document.body.removeChild(div);
	      }
	    });
	  }
	  _reactDom2["default"].render(_react2["default"].createElement(Notification, _extends({}, props, { ref: ref })), div);
	};
	
	exports["default"] = Notification;
	module.exports = exports['default'];

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Animate = __webpack_require__(70);
	
	var _Animate2 = _interopRequireDefault(_Animate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Animate2["default"];
	module.exports = exports['default'];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _ChildrenUtils = __webpack_require__(71);
	
	var _AnimateChild = __webpack_require__(72);
	
	var _AnimateChild2 = _interopRequireDefault(_AnimateChild);
	
	var _util = __webpack_require__(73);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var defaultKey = 'u_animate_' + Date.now();
	
	
	function getChildrenFromProps(props) {
	  var children = props.children;
	  if (_react2["default"].isValidElement(children)) {
	    if (!children.key) {
	      return _react2["default"].cloneElement(children, {
	        key: defaultKey
	      });
	    }
	  }
	  return children;
	}
	
	function noop() {}
	
	var propTypes = {
	  component: _propTypes2["default"].any,
	  animation: _propTypes2["default"].object,
	  transitionName: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].object]),
	  transitionEnter: _propTypes2["default"].bool,
	  transitionAppear: _propTypes2["default"].bool,
	  exclusive: _propTypes2["default"].bool,
	  transitionLeave: _propTypes2["default"].bool,
	  onEnd: _propTypes2["default"].func,
	  onEnter: _propTypes2["default"].func,
	  onLeave: _propTypes2["default"].func,
	  onAppear: _propTypes2["default"].func,
	  showProp: _propTypes2["default"].string
	};
	
	var defaultProps = {
	  animation: {},
	  component: 'span',
	  transitionEnter: true,
	  transitionLeave: true,
	  transitionAppear: false,
	  onEnd: noop,
	  onEnter: noop,
	  onLeave: noop,
	  onAppear: noop
	};
	
	var Animate = function (_Component) {
	  _inherits(Animate, _Component);
	
	  function Animate(props) {
	    _classCallCheck(this, Animate);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.currentlyAnimatingKeys = {};
	    _this.keysToEnter = [];
	    _this.keysToLeave = [];
	    _this.state = {
	      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(_this.props))
	    };
	
	    _this.performEnter = _this.performEnter.bind(_this);
	    _this.performAppear = _this.performAppear.bind(_this);
	    _this.handleDoneAdding = _this.handleDoneAdding.bind(_this);
	    _this.performLeave = _this.performLeave.bind(_this);
	
	    _this.performLeave = _this.performLeave.bind(_this);
	    _this.handleDoneLeaving = _this.handleDoneLeaving.bind(_this);
	    _this.isValidChildByKey = _this.isValidChildByKey.bind(_this);
	    _this.stop = _this.stop.bind(_this);
	    return _this;
	  }
	
	  Animate.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;
	
	    this.mounted = true;
	    var showProp = this.props.showProp;
	    var children = this.state.children;
	    if (showProp) {
	      children = children.filter(function (child) {
	        return !!child.props[showProp];
	      });
	    }
	    children.forEach(function (child) {
	      if (child) {
	        _this2.performAppear(child.key);
	      }
	    });
	  };
	
	  Animate.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.mounted = false;
	  };
	
	  Animate.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var _this3 = this;
	
	    this.nextProps = nextProps;
	    var nextChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(nextProps));
	    var props = this.props;
	    // exclusive needs immediate response
	    if (props.exclusive) {
	      Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
	        _this3.stop(key);
	      });
	    }
	    var showProp = props.showProp;
	    var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
	    // last props children if exclusive
	    var currentChildren = props.exclusive ? (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props)) : this.state.children;
	    // in case destroy in showProp mode
	    var newChildren = [];
	    if (showProp) {
	      currentChildren.forEach(function (currentChild) {
	        var nextChild = currentChild && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, currentChild.key);
	        var newChild = void 0;
	        if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
	          newChild = _react2["default"].cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
	        } else {
	          newChild = nextChild;
	        }
	        if (newChild) {
	          newChildren.push(newChild);
	        }
	      });
	      nextChildren.forEach(function (nextChild) {
	        if (!nextChild || !(0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, nextChild.key)) {
	          newChildren.push(nextChild);
	        }
	      });
	    } else {
	      newChildren = (0, _ChildrenUtils.mergeChildren)(currentChildren, nextChildren);
	    }
	
	    // need render to avoid update
	    this.setState({
	      children: newChildren
	    });
	
	    nextChildren.forEach(function (child) {
	      var key = child && child.key;
	      if (child && currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasPrev = child && (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	      if (showProp) {
	        var showInNext = child.props[showProp];
	        if (hasPrev) {
	          var showInNow = (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	          if (!showInNow && showInNext) {
	            _this3.keysToEnter.push(key);
	          }
	        } else if (showInNext) {
	          _this3.keysToEnter.push(key);
	        }
	      } else if (!hasPrev) {
	        _this3.keysToEnter.push(key);
	      }
	    });
	
	    currentChildren.forEach(function (child) {
	      var key = child && child.key;
	      if (child && currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasNext = child && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, key);
	      if (showProp) {
	        var showInNow = child.props[showProp];
	        if (hasNext) {
	          var showInNext = (0, _ChildrenUtils.findShownChildInChildrenByKey)(nextChildren, key, showProp);
	          if (!showInNext && showInNow) {
	            _this3.keysToLeave.push(key);
	          }
	        } else if (showInNow) {
	          _this3.keysToLeave.push(key);
	        }
	      } else if (!hasNext) {
	        _this3.keysToLeave.push(key);
	      }
	    });
	  };
	
	  Animate.prototype.componentDidUpdate = function componentDidUpdate() {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  };
	
	  Animate.prototype.performEnter = function performEnter(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillEnter(this.handleDoneAdding.bind(this, key, 'enter'));
	    }
	  };
	
	  Animate.prototype.performAppear = function performAppear(key) {
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillAppear(this.handleDoneAdding.bind(this, key, 'appear'));
	    }
	  };
	
	  Animate.prototype.handleDoneAdding = function handleDoneAdding(key, type) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    if (!this.isValidChildByKey(currentChildren, key)) {
	      // exclusive will not need this
	      this.performLeave(key);
	    } else {
	      if (type === 'appear') {
	        if (_util2["default"].allowAppearCallback(props)) {
	          props.onAppear(key);
	          props.onEnd(key, true);
	        }
	      } else {
	        if (_util2["default"].allowEnterCallback(props)) {
	          props.onEnter(key);
	          props.onEnd(key, true);
	        }
	      }
	    }
	  };
	
	  Animate.prototype.performLeave = function performLeave(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillLeave(this.handleDoneLeaving.bind(this, key));
	    }
	  };
	
	  Animate.prototype.handleDoneLeaving = function handleDoneLeaving(key) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    // in case state change is too fast
	    if (this.isValidChildByKey(currentChildren, key)) {
	      this.performEnter(key);
	    } else {
	      var end = function end() {
	        if (_util2["default"].allowLeaveCallback(props)) {
	          props.onLeave(key);
	          props.onEnd(key, false);
	        }
	      };
	      /* eslint react/no-is-mounted:0 */
	      if (this.mounted && !(0, _ChildrenUtils.isSameChildren)(this.state.children, currentChildren, props.showProp)) {
	        this.setState({
	          children: currentChildren
	        }, end);
	      } else {
	        end();
	      }
	    }
	  };
	
	  Animate.prototype.isValidChildByKey = function isValidChildByKey(currentChildren, key) {
	    var showProp = this.props.showProp;
	    if (showProp) {
	      return (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	    }
	    return (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	  };
	
	  Animate.prototype.stop = function stop(key) {
	    delete this.currentlyAnimatingKeys[key];
	    var component = this.refs[key];
	    if (component) {
	      component.stop();
	    }
	  };
	
	  Animate.prototype.render = function render() {
	    var props = this.props;
	    this.nextProps = props;
	    var stateChildren = this.state.children;
	    var children = null;
	    if (stateChildren) {
	      children = stateChildren.map(function (child) {
	        if (child === null || child === undefined) {
	          return child;
	        }
	        if (!child.key) {
	          throw new Error('must set key for <rc-animate> children');
	        }
	        return _react2["default"].createElement(
	          _AnimateChild2["default"],
	          {
	            key: child.key,
	            ref: child.key,
	            animation: props.animation,
	            transitionName: props.transitionName,
	            transitionEnter: props.transitionEnter,
	            transitionAppear: props.transitionAppear,
	            transitionLeave: props.transitionLeave
	          },
	          child
	        );
	      });
	    }
	    var Component = props.component;
	    if (Component) {
	      var passedProps = props;
	      if (typeof Component === 'string') {
	        passedProps = {
	          className: props.className,
	          style: props.style
	        };
	      }
	      return _react2["default"].createElement(
	        Component,
	        passedProps,
	        children
	      );
	    }
	    return children[0] || null;
	  };
	
	  return Animate;
	}(_react.Component);
	
	;
	Animate.defaultProps = defaultProps;
	Animate.propTypes = Animate.propTypes;
	
	exports["default"] = Animate;
	module.exports = exports['default'];

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toArrayChildren = toArrayChildren;
	exports.findChildInChildrenByKey = findChildInChildrenByKey;
	exports.findShownChildInChildrenByKey = findShownChildInChildrenByKey;
	exports.findHiddenChildInChildrenByKey = findHiddenChildInChildrenByKey;
	exports.isSameChildren = isSameChildren;
	exports.mergeChildren = mergeChildren;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function toArrayChildren(children) {
	  var ret = [];
	  _react2["default"].Children.forEach(children, function (child) {
	    ret.push(child);
	  });
	  return ret;
	}
	
	function findChildInChildrenByKey(children, key) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (ret) {
	        return;
	      }
	      if (child && child.key === key) {
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}
	
	function findShownChildInChildrenByKey(children, key, showProp) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (child && child.key === key && child.props[showProp]) {
	        if (ret) {
	          throw new Error('two child with same key for <rc-animate> children');
	        }
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}
	
	function findHiddenChildInChildrenByKey(children, key, showProp) {
	  var found = 0;
	  if (children) {
	    children.forEach(function (child) {
	      if (found) {
	        return;
	      }
	      found = child && child.key === key && !child.props[showProp];
	    });
	  }
	  return found;
	}
	
	function isSameChildren(c1, c2, showProp) {
	  var same = c1.length === c2.length;
	  if (same) {
	    c1.forEach(function (child, index) {
	      var child2 = c2[index];
	      if (child && child2) {
	        if (child && !child2 || !child && child2) {
	          same = false;
	        } else if (child.key !== child2.key) {
	          same = false;
	        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
	          same = false;
	        }
	      }
	    });
	  }
	  return same;
	}
	
	function mergeChildren(prev, next) {
	  var ret = [];
	
	  // For each key of `next`, the list of keys to insert before that key in
	  // the combined list
	  var nextChildrenPending = {};
	  var pendingChildren = [];
	  prev.forEach(function (child) {
	    if (child && findChildInChildrenByKey(next, child.key)) {
	      if (pendingChildren.length) {
	        nextChildrenPending[child.key] = pendingChildren;
	        pendingChildren = [];
	      }
	    } else {
	      pendingChildren.push(child);
	    }
	  });
	
	  next.forEach(function (child) {
	    if (child && nextChildrenPending.hasOwnProperty(child.key)) {
	      ret = ret.concat(nextChildrenPending[child.key]);
	    }
	    ret.push(child);
	  });
	
	  ret = ret.concat(pendingChildren);
	
	  return ret;
	}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _tinperBeeCore = __webpack_require__(27);
	
	var _util = __webpack_require__(73);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var transitionMap = {
	  enter: 'transitionEnter',
	  appear: 'transitionAppear',
	  leave: 'transitionLeave'
	};
	
	var propTypes = {
	  children: _propTypes2["default"].any
	};
	
	var AnimateChild = function (_Component) {
	  _inherits(AnimateChild, _Component);
	
	  function AnimateChild(props) {
	    _classCallCheck(this, AnimateChild);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.transition = _this.transition.bind(_this);
	    _this.stop = _this.stop.bind(_this);
	    return _this;
	  }
	
	  AnimateChild.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.stop();
	  };
	
	  AnimateChild.prototype.componentWillEnter = function componentWillEnter(done) {
	    if (_util2["default"].isEnterSupported(this.props)) {
	      this.transition('enter', done);
	    } else {
	      done();
	    }
	  };
	
	  AnimateChild.prototype.componentWillAppear = function componentWillAppear(done) {
	    if (_util2["default"].isAppearSupported(this.props)) {
	      this.transition('appear', done);
	    } else {
	      done();
	    }
	  };
	
	  AnimateChild.prototype.componentWillLeave = function componentWillLeave(done) {
	    if (_util2["default"].isLeaveSupported(this.props)) {
	      this.transition('leave', done);
	    } else {
	      // always sync, do not interupt with react component life cycle
	      // update hidden -> animate hidden ->
	      // didUpdate -> animate leave -> unmount (if animate is none)
	      done();
	    }
	  };
	
	  AnimateChild.prototype.transition = function transition(animationType, finishCallback) {
	    var _this2 = this;
	
	    var node = _reactDom2["default"].findDOMNode(this);
	    var props = this.props;
	    var transitionName = props.transitionName;
	    var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	    this.stop();
	    var end = function end() {
	      _this2.stopper = null;
	      finishCallback();
	    };
	    if ((_tinperBeeCore.cssAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
	      var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
	      var activeName = name + '-active';
	      if (nameIsObj && transitionName[animationType + 'Active']) {
	        activeName = transitionName[animationType + 'Active'];
	      }
	      this.stopper = (0, _tinperBeeCore.cssAnimation)(node, {
	        name: name,
	        active: activeName
	      }, end);
	    } else {
	      this.stopper = props.animation[animationType](node, end);
	    }
	  };
	
	  AnimateChild.prototype.stop = function stop() {
	    var stopper = this.stopper;
	    if (stopper) {
	      this.stopper = null;
	      stopper.stop();
	    }
	  };
	
	  AnimateChild.prototype.render = function render() {
	    return this.props.children;
	  };
	
	  return AnimateChild;
	}(_react.Component);
	
	;
	
	AnimateChild.propTypes = propTypes;
	
	exports["default"] = AnimateChild;
	module.exports = exports['default'];

/***/ }),
/* 73 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var util = {
	  isAppearSupported: function isAppearSupported(props) {
	    return props.transitionName && props.transitionAppear || props.animation.appear;
	  },
	  isEnterSupported: function isEnterSupported(props) {
	    return props.transitionName && props.transitionEnter || props.animation.enter;
	  },
	  isLeaveSupported: function isLeaveSupported(props) {
	    return props.transitionName && props.transitionLeave || props.animation.leave;
	  },
	  allowAppearCallback: function allowAppearCallback(props) {
	    return props.transitionAppear || props.animation.appear;
	  },
	  allowEnterCallback: function allowEnterCallback(props) {
	    return props.transitionEnter || props.animation.enter;
	  },
	  allowLeaveCallback: function allowLeaveCallback(props) {
	    return props.transitionLeave || props.animation.leave;
	  }
	};
	exports["default"] = util;
	module.exports = exports["default"];

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports["default"] = function (componentOrElement) {
	  return (0, _ownerDocument2["default"])(_reactDom2["default"].findDOMNode(componentOrElement));
	};
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _ownerDocument = __webpack_require__(75);
	
	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	module.exports = exports['default'];

/***/ }),
/* 75 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = ownerDocument;
	
	function ownerDocument(node) {
	  return node && node.ownerDocument || document;
	}
	
	module.exports = exports["default"];

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports["default"] = function (node, event, handler, capture) {
	  (0, _on2["default"])(node, event, handler, capture);
	
	  return {
	    remove: function remove() {
	      (0, _off2["default"])(node, event, handler, capture);
	    }
	  };
	};
	
	var _on = __webpack_require__(16);
	
	var _on2 = _interopRequireDefault(_on);
	
	var _off = __webpack_require__(77);
	
	var _off2 = _interopRequireDefault(_off);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	module.exports = exports['default'];

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.default = void 0;
	
	var _inDOM = _interopRequireDefault(__webpack_require__(15));
	
	var off = function off() {};
	
	if (_inDOM.default) {
	  off = function () {
	    if (document.addEventListener) return function (node, eventName, handler, capture) {
	      return node.removeEventListener(eventName, handler, capture || false);
	    };else if (document.attachEvent) return function (node, eventName, handler) {
	      return node.detachEvent('on' + eventName, handler);
	    };
	  }();
	}
	
	var _default = off;
	exports.default = _default;
	module.exports = exports["default"];

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  duration: _propTypes2["default"].number,
	  onClose: _propTypes2["default"].func,
	  children: _propTypes2["default"].any,
	  color: _propTypes2["default"].oneOf(['info', 'success', 'danger', 'warning', 'light', 'dark', 'news', 'infolight', 'successlight', 'dangerlight', 'warninglight']),
	  title: _propTypes2["default"].any
	};
	
	function noop() {}
	
	var defaultProps = {
	  onEnd: noop,
	  onClose: noop,
	  duration: 4.5,
	  closable: true
	};
	
	var Notice = function (_React$Component) {
	  _inherits(Notice, _React$Component);
	
	  function Notice(props) {
	    _classCallCheck(this, Notice);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.clearCloseTimer = _this.clearCloseTimer.bind(_this);
	    _this.close = _this.close.bind(_this);
	    return _this;
	  }
	
	  Notice.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;
	
	    if (this.props.duration) {
	      this.closeTimer = setTimeout(function () {
	        _this2.close();
	      }, this.props.duration * 1000);
	    }
	  };
	
	  Notice.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.clearCloseTimer();
	  };
	
	  Notice.prototype.clearCloseTimer = function clearCloseTimer() {
	    if (this.closeTimer) {
	      clearTimeout(this.closeTimer);
	      this.closeTimer = null;
	    }
	  };
	
	  Notice.prototype.close = function close() {
	    this.clearCloseTimer();
	    this.props.onClose();
	  };
	
	  Notice.prototype.render = function render() {
	    var _classes;
	
	    var _props = this.props,
	        closable = _props.closable,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        style = _props.style,
	        children = _props.children,
	        color = _props.color,
	        title = _props.title;
	
	    var componentClass = clsPrefix + '-notice';
	    var classes = (_classes = {}, _defineProperty(_classes, '' + componentClass, 1), _defineProperty(_classes, componentClass + '-closable', closable), _defineProperty(_classes, className, !!className), _classes);
	    if (color) {
	      classes[componentClass + '-' + color] = true;
	    }
	    return _react2["default"].createElement(
	      'div',
	      { className: (0, _classnames2["default"])(classes), style: style, onClick: this.close },
	      _react2["default"].createElement(
	        'div',
	        { className: componentClass + '-content' },
	        title && _react2["default"].createElement(
	          'div',
	          { className: componentClass + '-title' },
	          title
	        ),
	        _react2["default"].createElement(
	          'div',
	          { className: componentClass + '-description' },
	          children
	        )
	      ),
	      closable ? _react2["default"].createElement(
	        'a',
	        { tabIndex: '0', onClick: this.close, className: componentClass + '-close' },
	        _react2["default"].createElement('span', { className: componentClass + '-close-x' })
	      ) : null
	    );
	  };
	
	  return Notice;
	}(_react2["default"].Component);
	
	;
	
	Notice.propTypes = propTypes;
	Notice.defaultProps = defaultProps;
	
	exports["default"] = Notice;
	module.exports = exports['default'];

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var deselectCurrent = __webpack_require__(80);
	
	var defaultMessage = 'Copy to clipboard: #{key}, Enter';
	
	function format(message) {
	  var copyKey = (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C';
	  return message.replace(/#{\s*key\s*}/g, copyKey);
	}
	
	function copy(text, options) {
	  var debug, message, reselectPrevious, range, selection, mark, success = false;
	  if (!options) { options = {}; }
	  debug = options.debug || false;
	  try {
	    reselectPrevious = deselectCurrent();
	
	    range = document.createRange();
	    selection = document.getSelection();
	
	    mark = document.createElement('span');
	    mark.textContent = text;
	    // reset user styles for span element
	    mark.style.all = 'unset';
	    // prevents scrolling to the end of the page
	    mark.style.position = 'fixed';
	    mark.style.top = 0;
	    mark.style.clip = 'rect(0, 0, 0, 0)';
	    // used to preserve spaces and line breaks
	    mark.style.whiteSpace = 'pre';
	    // do not inherit user-select (it may be `none`)
	    mark.style.webkitUserSelect = 'text';
	    mark.style.MozUserSelect = 'text';
	    mark.style.msUserSelect = 'text';
	    mark.style.userSelect = 'text';
	
	    document.body.appendChild(mark);
	
	    range.selectNode(mark);
	    selection.addRange(range);
	
	    var successful = document.execCommand('copy');
	    if (!successful) {
	      throw new Error('copy command was unsuccessful');
	    }
	    success = true;
	  } catch (err) {
	    debug && console.error('unable to copy using execCommand: ', err);
	    debug && console.warn('trying IE specific stuff');
	    try {
	      window.clipboardData.setData('text', text);
	      success = true;
	    } catch (err) {
	      debug && console.error('unable to copy using clipboardData: ', err);
	      debug && console.error('falling back to prompt');
	      message = format('message' in options ? options.message : defaultMessage);
	      window.prompt(message, text);
	    }
	  } finally {
	    if (selection) {
	      if (typeof selection.removeRange == 'function') {
	        selection.removeRange(range);
	      } else {
	        selection.removeAllRanges();
	      }
	    }
	
	    if (mark) {
	      document.body.removeChild(mark);
	    }
	    reselectPrevious();
	  }
	
	  return success;
	}
	
	module.exports = copy;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

	
	module.exports = function () {
	  var selection = document.getSelection();
	  if (!selection.rangeCount) {
	    return function () {};
	  }
	  var active = document.activeElement;
	
	  var ranges = [];
	  for (var i = 0; i < selection.rangeCount; i++) {
	    ranges.push(selection.getRangeAt(i));
	  }
	
	  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
	    case 'INPUT':
	    case 'TEXTAREA':
	      active.blur();
	      break;
	
	    default:
	      active = null;
	      break;
	  }
	
	  selection.removeAllRanges();
	  return function () {
	    selection.type === 'Caret' &&
	    selection.removeAllRanges();
	
	    if (!selection.rangeCount) {
	      ranges.forEach(function(range) {
	        selection.addRange(range);
	      });
	    }
	
	    active &&
	    active.focus();
	  };
	};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _tinperBeeCore = __webpack_require__(27);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  //是否是手风琴效果
	  accordion: _propTypes2["default"].bool,
	  //激活的项
	  activeKey: _propTypes2["default"].any,
	  //默认的激活的项
	  defaultActiveKey: _propTypes2["default"].any,
	  //选中函数
	  onSelect: _propTypes2["default"].func,
	  role: _propTypes2["default"].string
	};
	
	var defaultProps = {
	  accordion: false,
	  clsPrefix: 'u-panel-group'
	};
	
	// TODO: Use uncontrollable.
	
	var PanelGroup = function (_React$Component) {
	  _inherits(PanelGroup, _React$Component);
	
	  function PanelGroup(props, context) {
	    _classCallCheck(this, PanelGroup);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	    _this.handleSelect = _this.handleSelect.bind(_this);
	
	    _this.state = {
	      activeKey: props.defaultActiveKey
	    };
	    return _this;
	  }
	
	  PanelGroup.prototype.handleSelect = function handleSelect(key, e) {
	    e.preventDefault();
	
	    if (this.props.onSelect) {
	      this.props.onSelect(key, e);
	    }
	
	    if (this.state.activeKey === key) {
	      key = null;
	    }
	
	    this.setState({ activeKey: key });
	  };
	
	  PanelGroup.prototype.render = function render() {
	    var _this2 = this;
	
	    var _props = this.props,
	        accordion = _props.accordion,
	        propsActiveKey = _props.activeKey,
	        className = _props.className,
	        children = _props.children,
	        defaultActiveKey = _props.defaultActiveKey,
	        onSelect = _props.onSelect,
	        style = _props.style,
	        clsPrefix = _props.clsPrefix,
	        others = _objectWithoutProperties(_props, ['accordion', 'activeKey', 'className', 'children', 'defaultActiveKey', 'onSelect', 'style', 'clsPrefix']);
	
	    var activeKey = void 0;
	    if (accordion) {
	      activeKey = propsActiveKey != null ? propsActiveKey : this.state.activeKey;
	      others.role = others.role || 'tablist';
	    }
	
	    var classes = {};
	    classes['' + clsPrefix] = true;
	
	    return _react2["default"].createElement(
	      'div',
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(className, classes)
	      }),
	      _react2["default"].Children.map(children, function (child) {
	        if (!_react2["default"].isValidElement(child)) {
	          return child;
	        }
	        var childProps = {
	          style: child.props.style
	        };
	
	        if (accordion) {
	          _extends(childProps, {
	            headerRole: 'tab',
	            panelRole: 'tabpanel',
	            collapsible: true,
	            expanded: child.props.eventKey === activeKey,
	            onSelect: (0, _tinperBeeCore.createChainedFunction)(_this2.handleSelect, child.props.onSelect)
	          });
	        }
	
	        return (0, _react.cloneElement)(child, childProps);
	      })
	    );
	  };
	
	  return PanelGroup;
	}(_react2["default"].Component);
	
	PanelGroup.propTypes = propTypes;
	PanelGroup.defaultProps = defaultProps;
	
	exports["default"] = PanelGroup;
	module.exports = exports['default'];

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Button = __webpack_require__(83);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Button2["default"];
	module.exports = exports['default'];

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	    /**
	     * @title 尺寸
	     */
	    size: _propTypes2["default"].oneOf(['sm', 'md', 'xg', 'lg']),
	    /**
	     * @title 样式
	     */
	    style: _propTypes2["default"].object,
	    /**
	     * @title 形状
	     */
	    shape: _propTypes2["default"].oneOf(['block', 'round', 'border', 'squared', 'floating', 'pillRight', 'pillLeft', 'icon']),
	
	    bordered: _propTypes2["default"].bool,
	    /**
	    * @title 类型
	    */
	    colors: _propTypes2["default"].oneOf(['primary', 'secondary', 'accent', 'success', 'info', 'warning', 'danger', 'dark', 'light', 'default']),
	    /**
	     * @title 是否禁用
	     * @veIgnore
	     */
	    disabled: _propTypes2["default"].bool,
	    /**
	     * @title 类名
	     * @veIgnore
	     */
	    className: _propTypes2["default"].string,
	
	    /**
	     * @title <button> 的 type
	     * @veIgnore
	     */
	    htmlType: _propTypes2["default"].oneOf(['submit', 'button', 'reset']),
	    isSubmit: _propTypes2["default"].bool //是否作为form的提交按钮
	};
	
	var defaultProps = {
	    disabled: false,
	    htmlType: 'button',
	    clsPrefix: 'u-button',
	    bordered: false,
	    isSubmit: false
	};
	
	var sizeMap = {
	    sm: 'sm',
	    md: 'md',
	    xg: 'xg',
	    lg: 'lg'
	},
	    colorsMap = {
	    primary: 'primary',
	    secondary: 'secondary',
	    accent: 'accent',
	    success: 'success',
	    info: 'info',
	    warning: 'warning',
	    danger: 'danger',
	    dark: 'dark',
	    light: 'light'
	},
	    shapeMap = {
	    block: 'block',
	    round: 'round',
	    border: 'border',
	    squared: 'squared',
	    floating: 'floating',
	    pillRight: 'pill-right',
	    pillLeft: 'pill-left',
	    icon: 'icon'
	};
	
	var Button = function (_Component) {
	    _inherits(Button, _Component);
	
	    function Button(props) {
	        _classCallCheck(this, Button);
	
	        return _possibleConstructorReturn(this, _Component.call(this, props));
	    }
	
	    Button.prototype.render = function render() {
	        var _props = this.props,
	            colors = _props.colors,
	            shape = _props.shape,
	            disabled = _props.disabled,
	            className = _props.className,
	            size = _props.size,
	            bordered = _props.bordered,
	            children = _props.children,
	            htmlType = _props.htmlType,
	            clsPrefix = _props.clsPrefix,
	            isSubmit = _props.isSubmit,
	            others = _objectWithoutProperties(_props, ['colors', 'shape', 'disabled', 'className', 'size', 'bordered', 'children', 'htmlType', 'clsPrefix', 'isSubmit']);
	
	        var clsObj = {};
	        if (className) {
	            clsObj[className] = true;
	        }
	        if (sizeMap[size]) {
	            clsObj[clsPrefix + '-' + sizeMap[size]] = true;
	        }
	
	        if (shapeMap[shape]) {
	            clsObj[clsPrefix + '-' + shapeMap[shape]] = true;
	        }
	        if (colorsMap[colors]) {
	            clsObj[clsPrefix + '-' + colorsMap[colors]] = true;
	        }
	        //clsObj[`${clsPrefix}-border`] = bordered;
	        var classes = (0, _classnames2["default"])(clsPrefix, clsObj);
	        return _react2["default"].createElement(
	            'button',
	            _extends({
	                type: htmlType,
	                className: classes,
	                disabled: disabled
	            }, others),
	            this.props.children
	        );
	    };
	
	    return Button;
	}(_react.Component);
	
	Button.propTypes = propTypes;
	Button.defaultProps = defaultProps;
	
	exports["default"] = Button;
	module.exports = exports['default'];

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _src = __webpack_require__(85);
	
	var _src2 = _interopRequireDefault(_src);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @title 基础Tab
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @description 通过Tabs和TabPane配合完成Tab功能
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var TabPane = _src2['default'].TabPane;
	
	
	function callback() {}
	
	var Demo1 = function (_Component) {
	    _inherits(Demo1, _Component);
	
	    function Demo1() {
	        _classCallCheck(this, Demo1);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	    }
	
	    Demo1.prototype.render = function render() {
	        return _react2['default'].createElement(
	            _src2['default'],
	            {
	                defaultActiveKey: '1',
	                onChange: callback,
	                tabBarStyle: 'upborder',
	                className: 'demo1-tabs',
	                style: { width: '500px' }
	            },
	            _react2['default'].createElement(
	                TabPane,
	                { tab: '\u671B\u5E90\u5C71\u7011\u5E03', key: '1' },
	                _react2['default'].createElement(
	                    'ul',
	                    null,
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        '\u65E5\u7167\u9999\u7089\u751F\u7D2B\u70DF\uFF0C'
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        '\u9065\u770B\u7011\u5E03\u6302\u524D\u5DDD\u3002'
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        '\u98DE\u6D41\u76F4\u4E0B\u4E09\u5343\u5C3A\uFF0C'
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        '\u7591\u662F\u94F6\u6CB3\u843D\u4E5D\u5929\u3002'
	                    )
	                )
	            ),
	            _react2['default'].createElement(
	                TabPane,
	                { tab: '\u671B\u5E90\u5C71\u70112\u5E03', key: '1-2' },
	                _react2['default'].createElement(
	                    'ul',
	                    null,
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        '\u65E5\u7167\u9999\u7089\u751F\u7D2B\u70DF\uFF0C'
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        '\u9065\u770B\u7011\u5E03\u6302\u524D2\u5DDD\u3002'
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        '\u98DE\u6D41\u76F4\u4E0B\u4E09\u5343\u5C3A\uFF0C'
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        '\u7591\u662F\u94F6\u6CB3\u843D\u4E5D2\u5929\u3002'
	                    )
	                )
	            ),
	            _react2['default'].createElement(
	                TabPane,
	                { tab: '\u65E9\u53D1\u767D\u5E1D\u57CE', key: '2' },
	                _react2['default'].createElement(
	                    'ul',
	                    null,
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        '\u671D\u8F9E\u767D\u5E1D\u5F69\u4E91\u95F4\uFF0C'
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        '\u5343\u91CC\u6C5F\u9675\u4E00\u65E5\u8FD8\u3002'
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        '\u4E24\u5CB8\u733F\u58F0\u557C\u4E0D\u4F4F\uFF0C'
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        '\u8F7B\u821F\u5DF2\u8FC7\u4E07\u91CD\u5C71\u3002'
	                    )
	                )
	            ),
	            _react2['default'].createElement(
	                TabPane,
	                { tab: '\u83E9\u8428\u86EE\xB7\u5E73\u6797\u6F20\u6F20\u70DF\u5982\u7EC7', key: '3' },
	                _react2['default'].createElement(
	                    'ul',
	                    null,
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        '\u5E73\u6797\u6F20\u6F20\u70DF\u5982\u7EC7\uFF0C\u5BD2\u5C71\u4E00\u5E26\u4F24\u5FC3\u78A7\u3002'
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        '\u669D\u8272\u5165\u9AD8\u697C\uFF0C\u6709\u4EBA\u697C\u4E0A\u6101\u3002'
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        '\u7389\u9636\u7A7A\u4F2B\u7ACB\uFF0C\u5BBF\u9E1F\u5F52\u98DE\u6025\u3002'
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        '\u4F55\u5904\u662F\u5F52\u7A0B\uFF1F\u957F\u4EAD\u8FDE\u77ED\u4EAD'
	                    )
	                )
	            ),
	            _react2['default'].createElement(
	                TabPane,
	                { tab: '\u5173\u5C71\u6708', key: '4' },
	                _react2['default'].createElement(
	                    'ul',
	                    null,
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        '\u660E\u6708\u51FA\u5929\u5C71\uFF0C\u82CD\u832B\u4E91\u6D77\u95F4\u3002'
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        '\u957F\u98CE\u51E0\u4E07\u91CC\uFF0C\u5439\u5EA6\u7389\u95E8\u5173\u3002'
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        '\u6C49\u4E0B\u767D\u767B\u9053\uFF0C\u80E1\u7AA5\u9752\u6D77\u6E7E\u3002'
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        '\u7531\u6765\u5F81\u6218\u5730\uFF0C\u4E0D\u89C1\u6709\u4EBA\u8FD8\u3002'
	                    )
	                )
	            )
	        );
	    };
	
	    return Demo1;
	}(_react.Component);
	
	exports['default'] = Demo1;
	module.exports = exports['default'];

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // export default from './Tabs';
	// 20181211animated，scrollAnimated（ScrollableTabBarMixin），inkBarAnimated（InkTabBarMixin）都是默认为true的
	// 去掉所有的动画
	
	
	var _createReactClass = __webpack_require__(86);
	
	var _createReactClass2 = _interopRequireDefault(_createReactClass);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Tabs = __webpack_require__(92);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Tabs = (0, _createReactClass2['default'])({
	    render: function render() {
	        var disableProps = {
	            animated: false,
	            scrollAnimated: false, // scrollableBar的class
	            inkBarAnimated: false, // inkBar的class
	            useTransform3d: false //是否使用translate3d來实现线条
	        };
	        return _react2['default'].createElement(_Tabs.Tabs, _extends({}, this.props, disableProps));
	    }
	});
	Tabs.TabPane = _Tabs.Tabs.TabPane;
	exports['default'] = Tabs;
	module.exports = exports['default'];

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var React = __webpack_require__(4);
	var factory = __webpack_require__(87);
	
	if (typeof React === 'undefined') {
	  throw Error(
	    'create-react-class could not find the React object. If you are using script tags, ' +
	      'make sure that React is being loaded before create-react-class.'
	  );
	}
	
	// Hack to grab NoopUpdateQueue from isomorphic React
	var ReactNoopUpdateQueue = new React.Component().updater;
	
	module.exports = factory(
	  React.Component,
	  React.isValidElement,
	  ReactNoopUpdateQueue
	);


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(44);
	
	var emptyObject = __webpack_require__(88);
	var _invariant = __webpack_require__(89);
	
	if (process.env.NODE_ENV !== 'production') {
	  var warning = __webpack_require__(90);
	}
	
	var MIXINS_KEY = 'mixins';
	
	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}
	
	var ReactPropTypeLocationNames;
	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	} else {
	  ReactPropTypeLocationNames = {};
	}
	
	function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
	  /**
	   * Policies that describe methods in `ReactClassInterface`.
	   */
	
	  var injectedMixins = [];
	
	  /**
	   * Composite components are higher-level components that compose other composite
	   * or host components.
	   *
	   * To create a new type of `ReactClass`, pass a specification of
	   * your new class to `React.createClass`. The only requirement of your class
	   * specification is that you implement a `render` method.
	   *
	   *   var MyComponent = React.createClass({
	   *     render: function() {
	   *       return <div>Hello World</div>;
	   *     }
	   *   });
	   *
	   * The class specification supports a specific protocol of methods that have
	   * special meaning (e.g. `render`). See `ReactClassInterface` for
	   * more the comprehensive protocol. Any other properties and methods in the
	   * class specification will be available on the prototype.
	   *
	   * @interface ReactClassInterface
	   * @internal
	   */
	  var ReactClassInterface = {
	    /**
	     * An array of Mixin objects to include when defining your component.
	     *
	     * @type {array}
	     * @optional
	     */
	    mixins: 'DEFINE_MANY',
	
	    /**
	     * An object containing properties and methods that should be defined on
	     * the component's constructor instead of its prototype (static methods).
	     *
	     * @type {object}
	     * @optional
	     */
	    statics: 'DEFINE_MANY',
	
	    /**
	     * Definition of prop types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    propTypes: 'DEFINE_MANY',
	
	    /**
	     * Definition of context types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    contextTypes: 'DEFINE_MANY',
	
	    /**
	     * Definition of context types this component sets for its children.
	     *
	     * @type {object}
	     * @optional
	     */
	    childContextTypes: 'DEFINE_MANY',
	
	    // ==== Definition methods ====
	
	    /**
	     * Invoked when the component is mounted. Values in the mapping will be set on
	     * `this.props` if that prop is not specified (i.e. using an `in` check).
	     *
	     * This method is invoked before `getInitialState` and therefore cannot rely
	     * on `this.state` or use `this.setState`.
	     *
	     * @return {object}
	     * @optional
	     */
	    getDefaultProps: 'DEFINE_MANY_MERGED',
	
	    /**
	     * Invoked once before the component is mounted. The return value will be used
	     * as the initial value of `this.state`.
	     *
	     *   getInitialState: function() {
	     *     return {
	     *       isOn: false,
	     *       fooBaz: new BazFoo()
	     *     }
	     *   }
	     *
	     * @return {object}
	     * @optional
	     */
	    getInitialState: 'DEFINE_MANY_MERGED',
	
	    /**
	     * @return {object}
	     * @optional
	     */
	    getChildContext: 'DEFINE_MANY_MERGED',
	
	    /**
	     * Uses props from `this.props` and state from `this.state` to render the
	     * structure of the component.
	     *
	     * No guarantees are made about when or how often this method is invoked, so
	     * it must not have side effects.
	     *
	     *   render: function() {
	     *     var name = this.props.name;
	     *     return <div>Hello, {name}!</div>;
	     *   }
	     *
	     * @return {ReactComponent}
	     * @required
	     */
	    render: 'DEFINE_ONCE',
	
	    // ==== Delegate methods ====
	
	    /**
	     * Invoked when the component is initially created and about to be mounted.
	     * This may have side effects, but any external subscriptions or data created
	     * by this method must be cleaned up in `componentWillUnmount`.
	     *
	     * @optional
	     */
	    componentWillMount: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component has been mounted and has a DOM representation.
	     * However, there is no guarantee that the DOM node is in the document.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been mounted (initialized and rendered) for the first time.
	     *
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidMount: 'DEFINE_MANY',
	
	    /**
	     * Invoked before the component receives new props.
	     *
	     * Use this as an opportunity to react to a prop transition by updating the
	     * state using `this.setState`. Current props are accessed via `this.props`.
	     *
	     *   componentWillReceiveProps: function(nextProps, nextContext) {
	     *     this.setState({
	     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	     *     });
	     *   }
	     *
	     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	     * transition may cause a state change, but the opposite is not true. If you
	     * need it, you are probably looking for `componentWillUpdate`.
	     *
	     * @param {object} nextProps
	     * @optional
	     */
	    componentWillReceiveProps: 'DEFINE_MANY',
	
	    /**
	     * Invoked while deciding if the component should be updated as a result of
	     * receiving new props, state and/or context.
	     *
	     * Use this as an opportunity to `return false` when you're certain that the
	     * transition to the new props/state/context will not require a component
	     * update.
	     *
	     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	     *     return !equal(nextProps, this.props) ||
	     *       !equal(nextState, this.state) ||
	     *       !equal(nextContext, this.context);
	     *   }
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @return {boolean} True if the component should update.
	     * @optional
	     */
	    shouldComponentUpdate: 'DEFINE_ONCE',
	
	    /**
	     * Invoked when the component is about to update due to a transition from
	     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	     * and `nextContext`.
	     *
	     * Use this as an opportunity to perform preparation before an update occurs.
	     *
	     * NOTE: You **cannot** use `this.setState()` in this method.
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @param {ReactReconcileTransaction} transaction
	     * @optional
	     */
	    componentWillUpdate: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component's DOM representation has been updated.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been updated.
	     *
	     * @param {object} prevProps
	     * @param {?object} prevState
	     * @param {?object} prevContext
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidUpdate: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component is about to be removed from its parent and have
	     * its DOM representation destroyed.
	     *
	     * Use this as an opportunity to deallocate any external resources.
	     *
	     * NOTE: There is no `componentDidUnmount` since your component will have been
	     * destroyed by that point.
	     *
	     * @optional
	     */
	    componentWillUnmount: 'DEFINE_MANY',
	
	    /**
	     * Replacement for (deprecated) `componentWillMount`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillMount: 'DEFINE_MANY',
	
	    /**
	     * Replacement for (deprecated) `componentWillReceiveProps`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',
	
	    /**
	     * Replacement for (deprecated) `componentWillUpdate`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillUpdate: 'DEFINE_MANY',
	
	    // ==== Advanced methods ====
	
	    /**
	     * Updates the component's currently mounted DOM representation.
	     *
	     * By default, this implements React's rendering and reconciliation algorithm.
	     * Sophisticated clients may wish to override this.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     * @overridable
	     */
	    updateComponent: 'OVERRIDE_BASE'
	  };
	
	  /**
	   * Similar to ReactClassInterface but for static methods.
	   */
	  var ReactClassStaticInterface = {
	    /**
	     * This method is invoked after a component is instantiated and when it
	     * receives new props. Return an object to update state in response to
	     * prop changes. Return null to indicate no change to state.
	     *
	     * If an object is returned, its keys will be merged into the existing state.
	     *
	     * @return {object || null}
	     * @optional
	     */
	    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
	  };
	
	  /**
	   * Mapping from class specification keys to special processing functions.
	   *
	   * Although these are declared like instance properties in the specification
	   * when defining classes using `React.createClass`, they are actually static
	   * and are accessible on the constructor instead of the prototype. Despite
	   * being static, they must be defined outside of the "statics" key under
	   * which all other static methods are defined.
	   */
	  var RESERVED_SPEC_KEYS = {
	    displayName: function(Constructor, displayName) {
	      Constructor.displayName = displayName;
	    },
	    mixins: function(Constructor, mixins) {
	      if (mixins) {
	        for (var i = 0; i < mixins.length; i++) {
	          mixSpecIntoComponent(Constructor, mixins[i]);
	        }
	      }
	    },
	    childContextTypes: function(Constructor, childContextTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, childContextTypes, 'childContext');
	      }
	      Constructor.childContextTypes = _assign(
	        {},
	        Constructor.childContextTypes,
	        childContextTypes
	      );
	    },
	    contextTypes: function(Constructor, contextTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, contextTypes, 'context');
	      }
	      Constructor.contextTypes = _assign(
	        {},
	        Constructor.contextTypes,
	        contextTypes
	      );
	    },
	    /**
	     * Special case getDefaultProps which should move into statics but requires
	     * automatic merging.
	     */
	    getDefaultProps: function(Constructor, getDefaultProps) {
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps = createMergedResultFunction(
	          Constructor.getDefaultProps,
	          getDefaultProps
	        );
	      } else {
	        Constructor.getDefaultProps = getDefaultProps;
	      }
	    },
	    propTypes: function(Constructor, propTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, propTypes, 'prop');
	      }
	      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	    },
	    statics: function(Constructor, statics) {
	      mixStaticSpecIntoComponent(Constructor, statics);
	    },
	    autobind: function() {}
	  };
	
	  function validateTypeDef(Constructor, typeDef, location) {
	    for (var propName in typeDef) {
	      if (typeDef.hasOwnProperty(propName)) {
	        // use a warning instead of an _invariant so components
	        // don't show up in prod but only in __DEV__
	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            typeof typeDef[propName] === 'function',
	            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	              'React.PropTypes.',
	            Constructor.displayName || 'ReactClass',
	            ReactPropTypeLocationNames[location],
	            propName
	          );
	        }
	      }
	    }
	  }
	
	  function validateMethodOverride(isAlreadyDefined, name) {
	    var specPolicy = ReactClassInterface.hasOwnProperty(name)
	      ? ReactClassInterface[name]
	      : null;
	
	    // Disallow overriding of base class methods unless explicitly allowed.
	    if (ReactClassMixin.hasOwnProperty(name)) {
	      _invariant(
	        specPolicy === 'OVERRIDE_BASE',
	        'ReactClassInterface: You are attempting to override ' +
	          '`%s` from your class specification. Ensure that your method names ' +
	          'do not overlap with React methods.',
	        name
	      );
	    }
	
	    // Disallow defining methods more than once unless explicitly allowed.
	    if (isAlreadyDefined) {
	      _invariant(
	        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
	        'ReactClassInterface: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be due ' +
	          'to a mixin.',
	        name
	      );
	    }
	  }
	
	  /**
	   * Mixin helper which handles policy validation and reserved
	   * specification keys when building React classes.
	   */
	  function mixSpecIntoComponent(Constructor, spec) {
	    if (!spec) {
	      if (process.env.NODE_ENV !== 'production') {
	        var typeofSpec = typeof spec;
	        var isMixinValid = typeofSpec === 'object' && spec !== null;
	
	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            isMixinValid,
	            "%s: You're attempting to include a mixin that is either null " +
	              'or not an object. Check the mixins included by the component, ' +
	              'as well as any mixins they include themselves. ' +
	              'Expected object but got %s.',
	            Constructor.displayName || 'ReactClass',
	            spec === null ? null : typeofSpec
	          );
	        }
	      }
	
	      return;
	    }
	
	    _invariant(
	      typeof spec !== 'function',
	      "ReactClass: You're attempting to " +
	        'use a component class or function as a mixin. Instead, just use a ' +
	        'regular object.'
	    );
	    _invariant(
	      !isValidElement(spec),
	      "ReactClass: You're attempting to " +
	        'use a component as a mixin. Instead, just use a regular object.'
	    );
	
	    var proto = Constructor.prototype;
	    var autoBindPairs = proto.__reactAutoBindPairs;
	
	    // By handling mixins before any other properties, we ensure the same
	    // chaining order is applied to methods with DEFINE_MANY policy, whether
	    // mixins are listed before or after these methods in the spec.
	    if (spec.hasOwnProperty(MIXINS_KEY)) {
	      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	    }
	
	    for (var name in spec) {
	      if (!spec.hasOwnProperty(name)) {
	        continue;
	      }
	
	      if (name === MIXINS_KEY) {
	        // We have already handled mixins in a special case above.
	        continue;
	      }
	
	      var property = spec[name];
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      validateMethodOverride(isAlreadyDefined, name);
	
	      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	        RESERVED_SPEC_KEYS[name](Constructor, property);
	      } else {
	        // Setup methods on prototype:
	        // The following member methods should not be automatically bound:
	        // 1. Expected ReactClass methods (in the "interface").
	        // 2. Overridden methods (that were mixed in).
	        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	        var isFunction = typeof property === 'function';
	        var shouldAutoBind =
	          isFunction &&
	          !isReactClassMethod &&
	          !isAlreadyDefined &&
	          spec.autobind !== false;
	
	        if (shouldAutoBind) {
	          autoBindPairs.push(name, property);
	          proto[name] = property;
	        } else {
	          if (isAlreadyDefined) {
	            var specPolicy = ReactClassInterface[name];
	
	            // These cases should already be caught by validateMethodOverride.
	            _invariant(
	              isReactClassMethod &&
	                (specPolicy === 'DEFINE_MANY_MERGED' ||
	                  specPolicy === 'DEFINE_MANY'),
	              'ReactClass: Unexpected spec policy %s for key %s ' +
	                'when mixing in component specs.',
	              specPolicy,
	              name
	            );
	
	            // For methods which are defined more than once, call the existing
	            // methods before calling the new property, merging if appropriate.
	            if (specPolicy === 'DEFINE_MANY_MERGED') {
	              proto[name] = createMergedResultFunction(proto[name], property);
	            } else if (specPolicy === 'DEFINE_MANY') {
	              proto[name] = createChainedFunction(proto[name], property);
	            }
	          } else {
	            proto[name] = property;
	            if (process.env.NODE_ENV !== 'production') {
	              // Add verbose displayName to the function, which helps when looking
	              // at profiling tools.
	              if (typeof property === 'function' && spec.displayName) {
	                proto[name].displayName = spec.displayName + '_' + name;
	              }
	            }
	          }
	        }
	      }
	    }
	  }
	
	  function mixStaticSpecIntoComponent(Constructor, statics) {
	    if (!statics) {
	      return;
	    }
	
	    for (var name in statics) {
	      var property = statics[name];
	      if (!statics.hasOwnProperty(name)) {
	        continue;
	      }
	
	      var isReserved = name in RESERVED_SPEC_KEYS;
	      _invariant(
	        !isReserved,
	        'ReactClass: You are attempting to define a reserved ' +
	          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	          'as an instance property instead; it will still be accessible on the ' +
	          'constructor.',
	        name
	      );
	
	      var isAlreadyDefined = name in Constructor;
	      if (isAlreadyDefined) {
	        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
	          ? ReactClassStaticInterface[name]
	          : null;
	
	        _invariant(
	          specPolicy === 'DEFINE_MANY_MERGED',
	          'ReactClass: You are attempting to define ' +
	            '`%s` on your component more than once. This conflict may be ' +
	            'due to a mixin.',
	          name
	        );
	
	        Constructor[name] = createMergedResultFunction(Constructor[name], property);
	
	        return;
	      }
	
	      Constructor[name] = property;
	    }
	  }
	
	  /**
	   * Merge two objects, but throw if both contain the same key.
	   *
	   * @param {object} one The first object, which is mutated.
	   * @param {object} two The second object
	   * @return {object} one after it has been mutated to contain everything in two.
	   */
	  function mergeIntoWithNoDuplicateKeys(one, two) {
	    _invariant(
	      one && two && typeof one === 'object' && typeof two === 'object',
	      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
	    );
	
	    for (var key in two) {
	      if (two.hasOwnProperty(key)) {
	        _invariant(
	          one[key] === undefined,
	          'mergeIntoWithNoDuplicateKeys(): ' +
	            'Tried to merge two objects with the same key: `%s`. This conflict ' +
	            'may be due to a mixin; in particular, this may be caused by two ' +
	            'getInitialState() or getDefaultProps() methods returning objects ' +
	            'with clashing keys.',
	          key
	        );
	        one[key] = two[key];
	      }
	    }
	    return one;
	  }
	
	  /**
	   * Creates a function that invokes two functions and merges their return values.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createMergedResultFunction(one, two) {
	    return function mergedResult() {
	      var a = one.apply(this, arguments);
	      var b = two.apply(this, arguments);
	      if (a == null) {
	        return b;
	      } else if (b == null) {
	        return a;
	      }
	      var c = {};
	      mergeIntoWithNoDuplicateKeys(c, a);
	      mergeIntoWithNoDuplicateKeys(c, b);
	      return c;
	    };
	  }
	
	  /**
	   * Creates a function that invokes two functions and ignores their return vales.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createChainedFunction(one, two) {
	    return function chainedFunction() {
	      one.apply(this, arguments);
	      two.apply(this, arguments);
	    };
	  }
	
	  /**
	   * Binds a method to the component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   * @param {function} method Method to be bound.
	   * @return {function} The bound method.
	   */
	  function bindAutoBindMethod(component, method) {
	    var boundMethod = method.bind(component);
	    if (process.env.NODE_ENV !== 'production') {
	      boundMethod.__reactBoundContext = component;
	      boundMethod.__reactBoundMethod = method;
	      boundMethod.__reactBoundArguments = null;
	      var componentName = component.constructor.displayName;
	      var _bind = boundMethod.bind;
	      boundMethod.bind = function(newThis) {
	        for (
	          var _len = arguments.length,
	            args = Array(_len > 1 ? _len - 1 : 0),
	            _key = 1;
	          _key < _len;
	          _key++
	        ) {
	          args[_key - 1] = arguments[_key];
	        }
	
	        // User is trying to bind() an autobound method; we effectively will
	        // ignore the value of "this" that the user is trying to use, so
	        // let's warn.
	        if (newThis !== component && newThis !== null) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): React component methods may only be bound to the ' +
	                'component instance. See %s',
	              componentName
	            );
	          }
	        } else if (!args.length) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): You are binding a component method to the component. ' +
	                'React does this for you automatically in a high-performance ' +
	                'way, so you can safely remove this call. See %s',
	              componentName
	            );
	          }
	          return boundMethod;
	        }
	        var reboundMethod = _bind.apply(boundMethod, arguments);
	        reboundMethod.__reactBoundContext = component;
	        reboundMethod.__reactBoundMethod = method;
	        reboundMethod.__reactBoundArguments = args;
	        return reboundMethod;
	      };
	    }
	    return boundMethod;
	  }
	
	  /**
	   * Binds all auto-bound methods in a component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   */
	  function bindAutoBindMethods(component) {
	    var pairs = component.__reactAutoBindPairs;
	    for (var i = 0; i < pairs.length; i += 2) {
	      var autoBindKey = pairs[i];
	      var method = pairs[i + 1];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }
	
	  var IsMountedPreMixin = {
	    componentDidMount: function() {
	      this.__isMounted = true;
	    }
	  };
	
	  var IsMountedPostMixin = {
	    componentWillUnmount: function() {
	      this.__isMounted = false;
	    }
	  };
	
	  /**
	   * Add more to the ReactClass base class. These are all legacy features and
	   * therefore not already part of the modern ReactComponent.
	   */
	  var ReactClassMixin = {
	    /**
	     * TODO: This will be deprecated because state should always keep a consistent
	     * type signature and the only use case for this, is to avoid that.
	     */
	    replaceState: function(newState, callback) {
	      this.updater.enqueueReplaceState(this, newState, callback);
	    },
	
	    /**
	     * Checks whether or not this composite component is mounted.
	     * @return {boolean} True if mounted, false otherwise.
	     * @protected
	     * @final
	     */
	    isMounted: function() {
	      if (process.env.NODE_ENV !== 'production') {
	        warning(
	          this.__didWarnIsMounted,
	          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
	            'subscriptions and pending requests in componentWillUnmount to ' +
	            'prevent memory leaks.',
	          (this.constructor && this.constructor.displayName) ||
	            this.name ||
	            'Component'
	        );
	        this.__didWarnIsMounted = true;
	      }
	      return !!this.__isMounted;
	    }
	  };
	
	  var ReactClassComponent = function() {};
	  _assign(
	    ReactClassComponent.prototype,
	    ReactComponent.prototype,
	    ReactClassMixin
	  );
	
	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  function createClass(spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function(props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.
	
	      if (process.env.NODE_ENV !== 'production') {
	        warning(
	          this instanceof Constructor,
	          'Something is calling a React component directly. Use a factory or ' +
	            'JSX instead. See: https://fb.me/react-legacyfactory'
	        );
	      }
	
	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }
	
	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;
	
	      this.state = null;
	
	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.
	
	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (
	          initialState === undefined &&
	          this.getInitialState._isMockFunction
	        ) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      _invariant(
	        typeof initialState === 'object' && !Array.isArray(initialState),
	        '%s.getInitialState(): must return an object or null',
	        Constructor.displayName || 'ReactCompositeComponent'
	      );
	
	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];
	
	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
	
	    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
	    mixSpecIntoComponent(Constructor, spec);
	    mixSpecIntoComponent(Constructor, IsMountedPostMixin);
	
	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }
	
	    _invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    );
	
	    if (process.env.NODE_ENV !== 'production') {
	      warning(
	        !Constructor.prototype.componentShouldUpdate,
	        '%s has a method called ' +
	          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	          'The name is phrased as a question because the function is ' +
	          'expected to return a value.',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.componentWillRecieveProps,
	        '%s has a method called ' +
	          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.UNSAFE_componentWillRecieveProps,
	        '%s has a method called UNSAFE_componentWillRecieveProps(). ' +
	          'Did you mean UNSAFE_componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	    }
	
	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }
	
	    return Constructor;
	  }
	
	  return createClass;
	}
	
	module.exports = factory;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var emptyObject = {};
	
	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}
	
	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var validateFormat = function validateFormat(format) {};
	
	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(91);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	
	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	
	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }
	
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }
	
	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}
	
	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 91 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Tabs = undefined;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _KeyCode = __webpack_require__(93);
	
	var _KeyCode2 = _interopRequireDefault(_KeyCode);
	
	var _TabPane = __webpack_require__(94);
	
	var _TabPane2 = _interopRequireDefault(_TabPane);
	
	var _classnames2 = __webpack_require__(3);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _TabContent = __webpack_require__(95);
	
	var _TabContent2 = _interopRequireDefault(_TabContent);
	
	var _ScrollableInkTabBar = __webpack_require__(97);
	
	var _ScrollableInkTabBar2 = _interopRequireDefault(_ScrollableInkTabBar);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _createReactClass = __webpack_require__(86);
	
	var _createReactClass2 = _interopRequireDefault(_createReactClass);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
	                                                                                                                                                                                                                  * This source code is quoted from rc-tabs.
	                                                                                                                                                                                                                  * homepage: https://github.com/react-component/tabs
	                                                                                                                                                                                                                  */
	
	
	function noop() {}
	
	function getDefaultActiveKey(props) {
	  var activeKey = void 0;
	  _react2["default"].Children.forEach(props.children, function (child) {
	    if (child && !activeKey && !child.props.disabled) {
	      activeKey = child.key;
	    }
	  });
	  return activeKey;
	}
	
	var Tabs = (0, _createReactClass2["default"])({
	  propTypes: {
	    destroyInactiveTabPane: _propTypes2["default"].bool,
	    renderTabBar: _propTypes2["default"].func.isRequired,
	    renderTabContent: _propTypes2["default"].func.isRequired,
	    onChange: _propTypes2["default"].func,
	    children: _propTypes2["default"].any,
	    clsPrefix: _propTypes2["default"].string,
	    className: _propTypes2["default"].string,
	    tabBarPosition: _propTypes2["default"].string,
	    style: _propTypes2["default"].object,
	    tabBarStyle: _propTypes2["default"].oneOf(["simple", "fill", "primary", "upborder", "fade", "downborder", "trapezoid"])
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      clsPrefix: "u-tabs",
	      destroyInactiveTabPane: false,
	      onChange: noop,
	      tabBarPosition: "top",
	      style: {},
	      renderTabContent: function renderTabContent() {
	        return _react2["default"].createElement(_TabContent2["default"], null);
	      },
	      renderTabBar: function renderTabBar() {
	        return _react2["default"].createElement(_ScrollableInkTabBar2["default"], null);
	      },
	      tabBarStyle: "simple",
	      animated: true
	    };
	  },
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    var activeKey = void 0;
	    if ("activeKey" in props) {
	      activeKey = props.activeKey;
	    } else if ("defaultActiveKey" in props) {
	      activeKey = props.defaultActiveKey;
	    } else {
	      activeKey = getDefaultActiveKey(props);
	    }
	    return {
	      activeKey: activeKey
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if ("activeKey" in nextProps) {
	      this.setState({
	        activeKey: nextProps.activeKey
	      });
	    }
	  },
	  onTabClick: function onTabClick(activeKey) {
	    if (this.tabBar.props.onTabClick) {
	      this.tabBar.props.onTabClick(activeKey);
	    }
	    this.setActiveKey(activeKey);
	  },
	  onNavKeyDown: function onNavKeyDown(e) {
	    var eventKeyCode = e.keyCode;
	    if (eventKeyCode === _KeyCode2["default"].RIGHT || eventKeyCode === _KeyCode2["default"].DOWN) {
	      e.preventDefault();
	      var nextKey = this.getNextActiveKey(true);
	      this.onTabClick(nextKey);
	    } else if (eventKeyCode === _KeyCode2["default"].LEFT || eventKeyCode === _KeyCode2["default"].UP) {
	      e.preventDefault();
	      var previousKey = this.getNextActiveKey(false);
	      this.onTabClick(previousKey);
	    }
	  },
	  setActiveKey: function setActiveKey(activeKey) {
	    if (this.state.activeKey !== activeKey) {
	      if (!("activeKey" in this.props)) {
	        this.setState({
	          activeKey: activeKey
	        });
	      }
	      this.props.onChange(activeKey);
	    }
	  },
	  getNextActiveKey: function getNextActiveKey(next) {
	    var activeKey = this.state.activeKey;
	    var children = [];
	    _react2["default"].Children.forEach(this.props.children, function (c) {
	      if (c && !c.props.disabled) {
	        if (next) {
	          children.push(c);
	        } else {
	          children.unshift(c);
	        }
	      }
	    });
	    var length = children.length;
	    var ret = length && children[0].key;
	    children.forEach(function (child, i) {
	      if (child.key === activeKey) {
	        if (i === length - 1) {
	          ret = children[0].key;
	        } else {
	          ret = children[i + 1].key;
	        }
	      }
	    });
	    return ret;
	  },
	  render: function render() {
	    var _classnames;
	
	    var props = this.props;
	    var clsPrefix = props.clsPrefix,
	        tabBarPosition = props.tabBarPosition,
	        className = props.className,
	        renderTabContent = props.renderTabContent,
	        renderTabBar = props.renderTabBar,
	        tabBarStyle = props.tabBarStyle,
	        extraContent = props.extraContent,
	        animated = props.animated,
	        tabIndex = props.tabIndex;
	
	
	    var cls = (0, _classnames3["default"])((_classnames = {}, _defineProperty(_classnames, clsPrefix, true), _defineProperty(_classnames, clsPrefix + "-" + tabBarPosition, true), _defineProperty(_classnames, className, !!className), _defineProperty(_classnames, clsPrefix + "-" + tabBarStyle, true), _classnames));
	
	    this.tabBar = renderTabBar();
	    var contents = [_react2["default"].cloneElement(this.tabBar, {
	      clsPrefix: clsPrefix,
	      key: "tabBar",
	      onKeyDown: this.onNavKeyDown,
	      tabBarPosition: tabBarPosition,
	      extraContent: extraContent,
	      onTabClick: this.onTabClick,
	      panels: props.children,
	      activeKey: this.state.activeKey,
	      tabIndex: tabIndex
	    }), _react2["default"].cloneElement(renderTabContent(), {
	      clsPrefix: clsPrefix,
	      tabBarPosition: tabBarPosition,
	      animated: animated,
	      activeKey: this.state.activeKey,
	      destroyInactiveTabPane: props.destroyInactiveTabPane,
	      children: props.children,
	      style: { height: '100%' },
	      onChange: this.setActiveKey,
	      key: "tabContent"
	    })];
	    if (tabBarPosition === "bottom") {
	      contents.reverse();
	    }
	    return _react2["default"].createElement(
	      "div",
	      { className: cls, style: props.style },
	      contents
	    );
	  }
	});
	
	Tabs.TabPane = _TabPane2["default"];
	
	exports.Tabs = Tabs;

/***/ }),
/* 93 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	* This source code is quoted from rc-tabs.
	* homepage: https://github.com/react-component/tabs
	*/
	exports["default"] = {
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40 // also NUM_SOUTH
	};
	module.exports = exports["default"];

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames2 = __webpack_require__(3);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _createReactClass = __webpack_require__(86);
	
	var _createReactClass2 = _interopRequireDefault(_createReactClass);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-tabs.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/tabs
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */
	
	
	var propTypes = {
	  className: _propTypes2["default"].string,
	  active: _propTypes2["default"].bool,
	  style: _propTypes2["default"].any,
	  destroyInactiveTabPane: _propTypes2["default"].bool,
	  forceRender: _propTypes2["default"].bool,
	  placeholder: _propTypes2["default"].node
	};
	var defaultProps = {
	  placeholder: null
	};
	
	var TabPane = function (_Component) {
	  _inherits(TabPane, _Component);
	
	  function TabPane() {
	    _classCallCheck(this, TabPane);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  TabPane.prototype.render = function render() {
	    var _classnames;
	
	    var props = this.props;
	    var className = props.className,
	        destroyInactiveTabPane = props.destroyInactiveTabPane,
	        active = props.active,
	        forceRender = props.forceRender;
	
	    this._isActived = this._isActived || active;
	    var clsPrefix = props.rootclsPrefix + "-tabpane";
	    var cls = (0, _classnames3["default"])((_classnames = {}, _defineProperty(_classnames, clsPrefix, 1), _defineProperty(_classnames, clsPrefix + "-inactive", !active), _defineProperty(_classnames, clsPrefix + "-active", active), _defineProperty(_classnames, className, className), _classnames));
	    var isRender = destroyInactiveTabPane ? active : this._isActived;
	    return _react2["default"].createElement(
	      "div",
	      {
	        style: props.style,
	        role: "tabpanel",
	        "aria-hidden": props.active ? "false" : "true",
	        className: cls
	      },
	      isRender || forceRender ? props.children : props.placeholder
	    );
	  };
	
	  return TabPane;
	}(_react.Component);
	
	TabPane.propTypes = propTypes;
	TabPane.defaultProps = defaultProps;
	
	exports["default"] = TabPane;
	module.exports = exports["default"];

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(3);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _utils = __webpack_require__(96);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _createReactClass = __webpack_require__(86);
	
	var _createReactClass2 = _interopRequireDefault(_createReactClass);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
	                                                                                                                                                                                                                  * This source code is quoted from rc-tabs.
	                                                                                                                                                                                                                  * homepage: https://github.com/react-component/tabs
	                                                                                                                                                                                                                  */
	
	
	var TabContent = (0, _createReactClass2['default'])({
	  propTypes: {
	    animated: _propTypes2['default'].bool,
	    animatedWithMargin: _propTypes2['default'].bool,
	    clsPrefix: _propTypes2['default'].string,
	    children: _propTypes2['default'].any,
	    activeKey: _propTypes2['default'].string,
	    style: _propTypes2['default'].any,
	    tabBarPosition: _propTypes2['default'].string
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      animated: true
	    };
	  },
	  getTabPanes: function getTabPanes() {
	    var props = this.props;
	    var activeKey = props.activeKey;
	    var children = props.children;
	    var newChildren = [];
	
	    _react2['default'].Children.forEach(children, function (child) {
	      if (!child) {
	        return;
	      }
	      var key = child.key;
	      var active = activeKey === key;
	      newChildren.push(_react2['default'].cloneElement(child, {
	        active: active,
	        destroyInactiveTabPane: props.destroyInactiveTabPane,
	        rootclsPrefix: props.clsPrefix
	      }));
	    });
	
	    return newChildren;
	  },
	  render: function render() {
	    var _classnames;
	
	    var props = this.props;
	    var clsPrefix = props.clsPrefix,
	        children = props.children,
	        activeKey = props.activeKey,
	        tabBarPosition = props.tabBarPosition,
	        animated = props.animated,
	        animatedWithMargin = props.animatedWithMargin;
	    var style = props.style;
	
	    var classes = (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, clsPrefix + '-content', true), _defineProperty(_classnames, animated ? clsPrefix + '-content-animated' : clsPrefix + '-content-no-animated', true), _classnames));
	    if (animated) {
	      var activeIndex = (0, _utils.getActiveIndex)(children, activeKey);
	      if (activeIndex !== -1) {
	        var animatedStyle = animatedWithMargin ? (0, _utils.getMarginStyle)(activeIndex, tabBarPosition) : (0, _utils.getTransformPropValue)((0, _utils.getTransformByIndex)(activeIndex, tabBarPosition));
	        style = _extends({}, style, animatedStyle);
	      } else {
	        style = _extends({}, style, {
	          display: 'none'
	        });
	      }
	    }
	    return _react2['default'].createElement(
	      'div',
	      {
	        className: classes,
	        style: style
	      },
	      this.getTabPanes()
	    );
	  }
	});
	
	exports['default'] = TabContent;
	module.exports = exports['default'];

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toArray = toArray;
	exports.getActiveIndex = getActiveIndex;
	exports.getActiveKey = getActiveKey;
	exports.setTransform = setTransform;
	exports.isTransformSupported = isTransformSupported;
	exports.setTransition = setTransition;
	exports.getTransformPropValue = getTransformPropValue;
	exports.isVertical = isVertical;
	exports.getTransformByIndex = getTransformByIndex;
	exports.getMarginStyle = getMarginStyle;
	exports.getStyle = getStyle;
	exports.setPxStyle = setPxStyle;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
	                                                                                                                                                                                                                  * This source code is quoted from rc-tabs.
	                                                                                                                                                                                                                  * homepage: https://github.com/react-component/tabs
	                                                                                                                                                                                                                  */
	
	
	function toArray(children) {
	  // allow [c,[a,b]]
	  var c = [];
	  _react2['default'].Children.forEach(children, function (child) {
	    if (child) {
	      c.push(child);
	    }
	  });
	  return c;
	}
	
	function getActiveIndex(children, activeKey) {
	  var c = toArray(children);
	  for (var i = 0; i < c.length; i++) {
	    if (c[i].key === activeKey) {
	      return i;
	    }
	  }
	  return -1;
	}
	
	function getActiveKey(children, index) {
	  var c = toArray(children);
	  return c[index].key;
	}
	
	function setTransform(style, v) {
	  style.transform = v;
	  style.webkitTransform = v;
	  style.mozTransform = v;
	}
	
	function isTransformSupported(style) {
	  return 'transform' in style || 'webkitTransform' in style || 'MozTransform' in style;
	}
	
	function setTransition(style, v) {
	  style.transition = v;
	  style.webkitTransition = v;
	  style.MozTransition = v;
	}
	function getTransformPropValue(v) {
	  return {
	    transform: v,
	    WebkitTransform: v,
	    MozTransform: v
	  };
	}
	
	function isVertical(tabBarPosition) {
	  return tabBarPosition === 'left' || tabBarPosition === 'right';
	}
	
	function getTransformByIndex(index, tabBarPosition) {
	  var translate = isVertical(tabBarPosition) ? 'translateY' : 'translateX';
	  return translate + '(' + -index * 100 + '%) translateZ(0)';
	}
	
	function getMarginStyle(index, tabBarPosition) {
	  var marginDirection = isVertical(tabBarPosition) ? 'marginTop' : 'marginLeft';
	  return _defineProperty({}, marginDirection, -index * 100 + '%');
	}
	
	function getStyle(el, property) {
	  return +getComputedStyle(el).getPropertyValue(property).replace('px', '');
	}
	
	function setPxStyle(el, property, value) {
	  el.style[property] = value + 'px';
	}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _InkTabBarMixin = __webpack_require__(98);
	
	var _InkTabBarMixin2 = _interopRequireDefault(_InkTabBarMixin);
	
	var _ScrollableTabBarMixin = __webpack_require__(99);
	
	var _ScrollableTabBarMixin2 = _interopRequireDefault(_ScrollableTabBarMixin);
	
	var _TabBarMixin = __webpack_require__(100);
	
	var _TabBarMixin2 = _interopRequireDefault(_TabBarMixin);
	
	var _createReactClass = __webpack_require__(86);
	
	var _createReactClass2 = _interopRequireDefault(_createReactClass);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var ScrollableInkTabBar = (0, _createReactClass2['default'])({
	  mixins: [_TabBarMixin2['default'], _InkTabBarMixin2['default'], _ScrollableTabBarMixin2['default']],
	
	  render: function render() {
	    var inkBarNode = this.getInkBarNode();
	    var tabs = this.getTabs();
	    var scrollbarNode = this.getScrollBarNode([inkBarNode, tabs]);
	    return this.getRootNode(scrollbarNode);
	  }
	}); /**
	    * This source code is quoted from rc-tabs.
	    * homepage: https://github.com/react-component/tabs
	    */
	exports['default'] = ScrollableInkTabBar;
	module.exports = exports['default'];

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getScroll = getScroll;
	
	var _utils = __webpack_require__(96);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(3);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
	                                                                                                                                                                                                                  * This source code is quoted from rc-tabs.
	                                                                                                                                                                                                                  * homepage: https://github.com/react-component/tabs
	                                                                                                                                                                                                                  */
	
	
	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}
	
	function offset(elem) {
	  var box = void 0;
	  var x = void 0;
	  var y = void 0;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  box = elem.getBoundingClientRect();
	  x = box.left;
	  y = box.top;
	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;
	  var w = doc.defaultView || doc.parentWindow;
	  x += getScroll(w);
	  y += getScroll(w, true);
	  return {
	    left: x, top: y
	  };
	}
	
	function _componentDidUpdate(component, init) {
	  var refs = component.refs;
	  var wrapNode = refs.nav || refs.root;
	  var containerOffset = offset(wrapNode);
	  var inkBarNode = refs.inkBar;
	  var activeTab = refs.activeTab;
	  var inkBarNodeStyle = inkBarNode.style;
	  var tabBarPosition = component.props.tabBarPosition;
	  if (init) {
	    // prevent mount animation
	    inkBarNodeStyle.display = 'none';
	  }
	  if (activeTab) {
	    var tabNode = activeTab;
	    var tabOffset = offset(tabNode);
	    var transformSupported = (0, _utils.isTransformSupported)(inkBarNodeStyle);
	    if (tabBarPosition === 'top' || tabBarPosition === 'bottom') {
	      var left = tabOffset.left - containerOffset.left;
	      // use 3d gpu to optimize render
	      if (transformSupported && component.props.useTransform3d) {
	        (0, _utils.setTransform)(inkBarNodeStyle, 'translate3d(' + left + 'px,0,0)');
	        inkBarNodeStyle.width = tabNode.offsetWidth + 'px';
	        inkBarNodeStyle.height = '';
	      } else {
	        inkBarNodeStyle.left = left + 'px';
	        inkBarNodeStyle.top = '';
	        inkBarNodeStyle.bottom = '';
	        inkBarNodeStyle.right = wrapNode.offsetWidth - left - tabNode.offsetWidth + 'px';
	      }
	    } else {
	      var top = tabOffset.top - containerOffset.top;
	      if (transformSupported && component.props.useTransform3d) {
	        (0, _utils.setTransform)(inkBarNodeStyle, 'translate3d(0,' + top + 'px,0)');
	        inkBarNodeStyle.height = tabNode.offsetHeight + 'px';
	        inkBarNodeStyle.width = '';
	      } else {
	        inkBarNodeStyle.left = '';
	        inkBarNodeStyle.right = '';
	        inkBarNodeStyle.top = top + 'px';
	        inkBarNodeStyle.bottom = wrapNode.offsetHeight - top - tabNode.offsetHeight + 'px';
	      }
	    }
	  }
	  inkBarNodeStyle.display = activeTab ? 'block' : 'none';
	}
	
	exports['default'] = {
	  getDefaultProps: function getDefaultProps() {
	    return {
	      inkBarAnimated: true
	    };
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    _componentDidUpdate(this);
	  },
	  componentDidMount: function componentDidMount() {
	    _componentDidUpdate(this, true);
	  },
	  getInkBarNode: function getInkBarNode() {
	    var _classnames;
	
	    var _props = this.props,
	        clsPrefix = _props.clsPrefix,
	        styles = _props.styles,
	        inkBarAnimated = _props.inkBarAnimated;
	
	    var className = clsPrefix + '-ink-bar';
	    var classes = (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, className, true), _defineProperty(_classnames, inkBarAnimated ? className + '-animated' : className + '-no-animated', true), _classnames));
	    return _react2['default'].createElement('div', {
	      style: styles.inkBar,
	      className: classes,
	      key: 'inkBar',
	      ref: 'inkBar'
	    });
	  }
	};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classnames5 = __webpack_require__(3);
	
	var _classnames6 = _interopRequireDefault(_classnames5);
	
	var _utils = __webpack_require__(96);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
	                                                                                                                                                                                                                  * This source code is quoted from rc-tabs.
	                                                                                                                                                                                                                  * homepage: https://github.com/react-component/tabs
	                                                                                                                                                                                                                  */
	
	
	exports['default'] = {
	  getDefaultProps: function getDefaultProps() {
	    return {
	      scrollAnimated: true,
	      onPrevClick: function onPrevClick() {},
	      onNextClick: function onNextClick() {}
	    };
	  },
	  getInitialState: function getInitialState() {
	    this.offset = 0;
	    return {
	      next: false,
	      prev: false
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.componentDidUpdate();
	  },
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    var props = this.props;
	    if (prevProps && prevProps.tabBarPosition !== props.tabBarPosition) {
	      this.setOffset(0);
	      return;
	    }
	    var nextPrev = this.setNextPrev();
	    // wait next, prev show hide
	    /* eslint react/no-did-update-set-state:0 */
	    if (this.isNextPrevShown(this.state) !== this.isNextPrevShown(nextPrev)) {
	      this.setState({}, this.scrollToActiveTab);
	    } else {
	      // can not use props.activeKey
	      if (!prevProps || props.activeKey !== prevProps.activeKey) {
	        this.scrollToActiveTab();
	      }
	    }
	  },
	  setNextPrev: function setNextPrev() {
	    var navNode = this.refs.nav;
	    var navNodeWH = this.getOffsetWH(navNode);
	    var navWrapNode = this.refs.navWrap;
	    var navWrapNodeWH = this.getOffsetWH(navWrapNode);
	    var offset = this.offset;
	
	    var minOffset = navWrapNodeWH - navNodeWH;
	    var _state = this.state,
	        next = _state.next,
	        prev = _state.prev;
	
	    if (minOffset >= 0) {
	      next = false;
	      this.setOffset(0, false);
	      offset = 0;
	    } else if (minOffset < offset) {
	      next = true;
	    } else {
	      next = false;
	      this.setOffset(minOffset, false);
	      offset = minOffset;
	    }
	
	    if (offset < 0) {
	      prev = true;
	    } else {
	      prev = false;
	    }
	
	    this.setNext(next);
	    this.setPrev(prev);
	    return {
	      next: next,
	      prev: prev
	    };
	  },
	  getOffsetWH: function getOffsetWH(node) {
	    var tabBarPosition = this.props.tabBarPosition;
	    var prop = 'offsetWidth';
	    if (tabBarPosition === 'left' || tabBarPosition === 'right') {
	      prop = 'offsetHeight';
	    }
	    return node[prop];
	  },
	  getOffsetLT: function getOffsetLT(node) {
	    var tabBarPosition = this.props.tabBarPosition;
	    var prop = 'left';
	    if (tabBarPosition === 'left' || tabBarPosition === 'right') {
	      prop = 'top';
	    }
	    return node.getBoundingClientRect()[prop];
	  },
	  setOffset: function setOffset(offset) {
	    var checkNextPrev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	    var target = Math.min(0, offset);
	    if (this.offset !== target) {
	      this.offset = target;
	      var navOffset = {};
	      var tabBarPosition = this.props.tabBarPosition;
	      var useTransform3d = this.props.useTransform3d;
	      var navStyle = this.refs.nav.style;
	      var transformSupported = (0, _utils.isTransformSupported)(navStyle);
	      if (tabBarPosition === 'left' || tabBarPosition === 'right') {
	        if (transformSupported && useTransform3d) {
	          navOffset = {
	            value: 'translate3d(0,' + target + 'px,0)'
	          };
	        } else {
	          navOffset = {
	            name: 'top',
	            value: target + 'px'
	          };
	        }
	      } else {
	        if (transformSupported && useTransform3d) {
	          navOffset = {
	            value: 'translate3d(' + target + 'px,0,0)'
	          };
	        } else {
	          navOffset = {
	            name: 'left',
	            value: target + 'px'
	          };
	        }
	      }
	      if (transformSupported && useTransform3d) {
	        (0, _utils.setTransform)(navStyle, navOffset.value);
	      } else {
	        navStyle[navOffset.name] = navOffset.value;
	      }
	      if (checkNextPrev) {
	        this.setNextPrev();
	      }
	    }
	  },
	  setPrev: function setPrev(v) {
	    if (this.state.prev !== v) {
	      this.setState({
	        prev: v
	      });
	    }
	  },
	  setNext: function setNext(v) {
	    if (this.state.next !== v) {
	      this.setState({
	        next: v
	      });
	    }
	  },
	  isNextPrevShown: function isNextPrevShown(state) {
	    return state.next || state.prev;
	  },
	  scrollToActiveTab: function scrollToActiveTab() {
	    var _refs = this.refs,
	        activeTab = _refs.activeTab,
	        navWrap = _refs.navWrap;
	
	    if (activeTab) {
	      var activeTabWH = this.getOffsetWH(activeTab);
	      var navWrapNodeWH = this.getOffsetWH(navWrap);
	      var offset = this.offset;
	
	      var wrapOffset = this.getOffsetLT(navWrap);
	      var activeTabOffset = this.getOffsetLT(activeTab);
	      if (wrapOffset > activeTabOffset) {
	        offset += wrapOffset - activeTabOffset;
	        this.setOffset(offset);
	      } else if (wrapOffset + navWrapNodeWH < activeTabOffset + activeTabWH) {
	        offset -= activeTabOffset + activeTabWH - (wrapOffset + navWrapNodeWH);
	        this.setOffset(offset);
	      }
	    }
	  },
	  prev: function prev(e) {
	    this.props.onPrevClick(e);
	    var navWrapNode = this.refs.navWrap;
	    var navWrapNodeWH = this.getOffsetWH(navWrapNode);
	    var offset = this.offset;
	
	    this.setOffset(offset + navWrapNodeWH);
	  },
	  next: function next(e) {
	    this.props.onNextClick(e);
	    var navWrapNode = this.refs.navWrap;
	    var navWrapNodeWH = this.getOffsetWH(navWrapNode);
	    var offset = this.offset;
	
	    this.setOffset(offset - navWrapNodeWH);
	  },
	  getScrollBarNode: function getScrollBarNode(content) {
	    var _classnames3, _classnames4;
	
	    var _state2 = this.state,
	        next = _state2.next,
	        prev = _state2.prev;
	    var _props = this.props,
	        clsPrefix = _props.clsPrefix,
	        scrollAnimated = _props.scrollAnimated;
	
	    var nextButton = void 0;
	    var prevButton = void 0;
	    var showNextPrev = prev || next;
	
	    if (showNextPrev) {
	      var _classnames, _classnames2;
	
	      prevButton = _react2['default'].createElement(
	        'span',
	        {
	          onClick: prev ? this.prev : null,
	          unselectable: 'unselectable',
	          className: (0, _classnames6['default'])((_classnames = {}, _defineProperty(_classnames, clsPrefix + '-tab-prev', 1), _defineProperty(_classnames, clsPrefix + '-tab-btn-disabled', !prev), _classnames))
	        },
	        _react2['default'].createElement('span', { className: clsPrefix + '-tab-prev-icon' })
	      );
	
	      nextButton = _react2['default'].createElement(
	        'span',
	        {
	          onClick: next ? this.next : null,
	          unselectable: 'unselectable',
	          className: (0, _classnames6['default'])((_classnames2 = {}, _defineProperty(_classnames2, clsPrefix + '-tab-next', 1), _defineProperty(_classnames2, clsPrefix + '-tab-btn-disabled', !next), _classnames2))
	        },
	        _react2['default'].createElement('span', { className: clsPrefix + '-tab-next-icon' })
	      );
	    }
	
	    var navClassName = clsPrefix + '-nav';
	    var navClasses = (0, _classnames6['default'])((_classnames3 = {}, _defineProperty(_classnames3, navClassName, true), _defineProperty(_classnames3, scrollAnimated ? navClassName + '-animated' : navClassName + '-no-animated', true), _classnames3));
	
	    return _react2['default'].createElement(
	      'div',
	      {
	        className: (0, _classnames6['default'])((_classnames4 = {}, _defineProperty(_classnames4, clsPrefix + '-nav-container', 1), _defineProperty(_classnames4, clsPrefix + '-nav-container-scrolling', showNextPrev), _classnames4)),
	        key: 'container',
	        ref: 'container'
	      },
	      prevButton,
	      nextButton,
	      _react2['default'].createElement(
	        'div',
	        { className: clsPrefix + '-nav-wrap', ref: 'navWrap' },
	        _react2['default'].createElement(
	          'div',
	          { className: clsPrefix + '-nav-scroll' },
	          _react2['default'].createElement(
	            'div',
	            { className: navClasses, ref: 'nav' },
	            content
	          )
	        )
	      )
	    );
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                  * This source code is quoted from rc-tabs.
	                                                                                                                                                                                                                                                                  * homepage: https://github.com/react-component/tabs
	                                                                                                                                                                                                                                                                  */
	
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(3);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var tabBarExtraContentStyle = {
	  float: 'right'
	};
	
	exports['default'] = {
	  getDefaultProps: function getDefaultProps() {
	    return {
	      styles: {},
	      tabIndex: '0'
	    };
	  },
	  onTabClick: function onTabClick(key) {
	    this.props.onTabClick(key);
	  },
	  getTabs: function getTabs() {
	    var _this = this;
	
	    var props = this.props;
	    var children = props.panels;
	    var activeKey = props.activeKey;
	    var rst = [];
	    var clsPrefix = props.clsPrefix;
	
	    _react2['default'].Children.forEach(children, function (child) {
	      if (!child) {
	        return;
	      }
	      var key = child.key;
	      var cls = activeKey === key ? clsPrefix + '-tab-active' : '';
	      cls += ' ' + clsPrefix + '-tab';
	      var events = {};
	      if (child.props.disabled) {
	        cls += ' ' + clsPrefix + '-tab-disabled';
	      } else {
	        events = {
	          onClick: _this.onTabClick.bind(_this, key)
	        };
	      }
	      var ref = {};
	      if (activeKey === key) {
	        ref.ref = 'activeTab';
	      }
	      rst.push(_react2['default'].createElement(
	        'div',
	        _extends({
	          role: 'tab',
	          'aria-disabled': child.props.disabled ? 'true' : 'false',
	          'aria-selected': activeKey === key ? 'true' : 'false'
	        }, events, {
	          className: cls,
	          key: key
	        }, ref),
	        child.props.tab
	      ));
	    });
	
	    return rst;
	  },
	  getRootNode: function getRootNode(contents) {
	    var _classnames;
	
	    var _props = this.props,
	        clsPrefix = _props.clsPrefix,
	        onKeyDown = _props.onKeyDown,
	        className = _props.className,
	        extraContent = _props.extraContent,
	        style = _props.style,
	        tabIndex = _props.tabIndex;
	
	    var cls = (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, clsPrefix + '-bar', 1), _defineProperty(_classnames, className, !!className), _classnames));
	    return _react2['default'].createElement(
	      'div',
	      {
	        role: 'tablist',
	        className: cls,
	        tabIndex: tabIndex,
	        ref: 'root',
	        onKeyDown: onKeyDown,
	        style: style
	      },
	      extraContent ? _react2['default'].createElement(
	        'div',
	        {
	          style: tabBarExtraContentStyle,
	          key: 'extra'
	        },
	        extraContent
	      ) : null,
	      contents
	    );
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _src = __webpack_require__(85);
	
	var _src2 = _interopRequireDefault(_src);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title 竖向的Tab
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 通过tabBarPosition属性可以控制Tab做不同方向展示,当设置为`left`和`right`时，要为Tabs设置高度。
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var TabPane = _src2['default'].TabPane;
	
	var Demo2 = function (_Component) {
	    _inherits(Demo2, _Component);
	
	    function Demo2(props) {
	        _classCallCheck(this, Demo2);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	        _this.onChange = function (activeKey) {
	            console.log('onChange ' + activeKey + 'o-^-o');
	            _this.setState({
	                activeKey: activeKey
	            });
	        };
	
	        _this.onTabClick = function (key) {
	            console.log('onTabClick ' + key + 'o^o');
	            if (key === _this.state.activeKey) {
	                _this.setState({
	                    activeKey: ''
	                });
	            }
	        };
	
	        _this.state = {
	            activeKey: "1",
	            start: 0
	        };
	        return _this;
	    }
	
	    Demo2.prototype.render = function render() {
	
	        return _react2['default'].createElement(
	            'div',
	            { style: { margin: 20 } },
	            _react2['default'].createElement(
	                _src2['default'],
	                {
	                    activeKey: this.state.activeKey,
	                    tabBarPosition: 'left',
	                    defaultActiveKey: '1',
	                    onChange: this.onChange,
	                    className: 'demo2-tabs'
	                },
	                _react2['default'].createElement(
	                    TabPane,
	                    { tab: '\u671B\u5E90\u5C71\u7011\u5E03', key: '1' },
	                    _react2['default'].createElement(
	                        'ul',
	                        null,
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            '\u65E5\u7167\u9999\u7089\u751F\u7D2B\u70DF\uFF0C'
	                        ),
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            '\u9065\u770B\u7011\u5E03\u6302\u524D\u5DDD\u3002'
	                        ),
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            '\u98DE\u6D41\u76F4\u4E0B\u4E09\u5343\u5C3A\uFF0C'
	                        ),
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            '\u7591\u662F\u94F6\u6CB3\u843D\u4E5D\u5929\u3002'
	                        )
	                    )
	                ),
	                _react2['default'].createElement(
	                    TabPane,
	                    { tab: '\u65E9\u53D1\u767D\u5E1D\u57CE', key: '2' },
	                    _react2['default'].createElement(
	                        'ul',
	                        null,
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            '\u671D\u8F9E\u767D\u5E1D\u5F69\u4E91\u95F4\uFF0C'
	                        ),
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            '\u5343\u91CC\u6C5F\u9675\u4E00\u65E5\u8FD8\u3002'
	                        ),
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            '\u4E24\u5CB8\u733F\u58F0\u557C\u4E0D\u4F4F\uFF0C'
	                        ),
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            '\u8F7B\u821F\u5DF2\u8FC7\u4E07\u91CD\u5C71\u3002'
	                        )
	                    )
	                ),
	                _react2['default'].createElement(
	                    TabPane,
	                    { tab: '\u83E9\u8428\u86EE\xB7\u5E73\u6797\u6F20\u6F20\u70DF\u5982\u7EC7', key: '3' },
	                    _react2['default'].createElement(
	                        'ul',
	                        null,
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            '\u5E73\u6797\u6F20\u6F20\u70DF\u5982\u7EC7\uFF0C\u5BD2\u5C71\u4E00\u5E26\u4F24\u5FC3\u78A7\u3002'
	                        ),
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            '\u669D\u8272\u5165\u9AD8\u697C\uFF0C\u6709\u4EBA\u697C\u4E0A\u6101\u3002'
	                        ),
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            '\u7389\u9636\u7A7A\u4F2B\u7ACB\uFF0C\u5BBF\u9E1F\u5F52\u98DE\u6025\u3002'
	                        ),
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            '\u4F55\u5904\u662F\u5F52\u7A0B\uFF1F\u957F\u4EAD\u8FDE\u77ED\u4EAD'
	                        )
	                    )
	                ),
	                _react2['default'].createElement(
	                    TabPane,
	                    { tab: '\u5173\u5C71\u6708', key: '4' },
	                    _react2['default'].createElement(
	                        'ul',
	                        null,
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            '\u660E\u6708\u51FA\u5929\u5C71\uFF0C\u82CD\u832B\u4E91\u6D77\u95F4\u3002'
	                        ),
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            '\u957F\u98CE\u51E0\u4E07\u91CC\uFF0C\u5439\u5EA6\u7389\u95E8\u5173\u3002'
	                        ),
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            '\u6C49\u4E0B\u767D\u767B\u9053\uFF0C\u80E1\u7AA5\u9752\u6D77\u6E7E\u3002'
	                        ),
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            '\u7531\u6765\u5F81\u6218\u5730\uFF0C\u4E0D\u89C1\u6709\u4EBA\u8FD8\u3002'
	                        )
	                    )
	                )
	            )
	        );
	    };
	
	    return Demo2;
	}(_react.Component);
	
	exports['default'] = Demo2;
	module.exports = exports['default'];

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _src = __webpack_require__(85);
	
	var _src2 = _interopRequireDefault(_src);
	
	var _beeIcon = __webpack_require__(103);
	
	var _beeIcon2 = _interopRequireDefault(_beeIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title 页签Tab
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 通过扩展TabPane和ScrollableInkTabBar的方式，可以完成模拟页签的效果
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var TabPane = _src2['default'].TabPane;
	
	
	var index = 1;
	var content = '\u95EE\u4E16\u95F4\u3001\u60C5\u4E3A\u4F55\u7269\uFF0C\u53EA\u6559\u751F\u6B7B\u76F8\u8BB8\uFF1F\u5929\u5357\u5730\u5317\u53CC\u98DE\u5BA2\uFF0C\u8001\u7FC5\u51E0\u56DE\u5BD2\u6691\u3002\u6B22\u4E50\u8DA3\uFF0C\u79BB\u522B\u82E6\uFF0C\n\u5C31\u4E2D\u66F4\u6709\u75F4\u513F\u5973\u3002\u541B\u5E94\u6709\u8BED\uFF0C\u6E3A\u4E07\u91CC\u5C42\u4E91\uFF0C\u5343\u5C71\u66AE\u96EA\uFF0C\u53EA\u5F71\u5411\u8C01\u53BB\uFF1F\u6A2A\u6C7E\u8DEF\uFF0C\u5BC2\u5BDE\u5F53\u5E74\u7BAB\u9F13\uFF0C\u8352\u70DF\u4F9D\u65E7\u5E73\u695A\u3002\u62DB\u9B42\u695A\u4E9B\u4F55\u55DF\u53CA\uFF0C\n\u5C71\u9B3C\u6697\u8C1B\u98CE\u96E8\u3002\u5929\u4E5F\u5992\uFF0C\u672A\u4FE1\u4E0E\uFF0C\u83BA\u51E0\u71D5\u5B50\u4FF1\u9EC4\u571F\u3002\u5343\u79CB\u4E07\u53E4\uFF0C\u4E3A\u7559\u5F85\u9A9A\u4EBA\uFF0C\u72C2\u6B4C\u75DB\u996E\uFF0C\u6765\u8BBF\u96C1\u4E18\u5904\u3002';
	
	var Demo3 = function (_Component) {
	    _inherits(Demo3, _Component);
	
	    function Demo3() {
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, Demo3);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
	            tabs: [{
	                title: '摸鱼儿',
	                content: content
	            }],
	            activeKey: '摸鱼儿'
	        }, _this.onTabChange = function (activeKey) {
	            _this.setState({
	                activeKey: activeKey
	            });
	        }, _this.remove = function (title, e) {
	            e.stopPropagation();
	            if (_this.state.tabs.length === 1) {
	                alert('只剩一个，不能删');
	                return;
	            }
	            var foundIndex = 0;
	            var after = _this.state.tabs.filter(function (t, i) {
	                if (t.title !== title) {
	                    return true;
	                }
	                foundIndex = i;
	                return false;
	            });
	            var activeKey = _this.state.activeKey;
	            if (activeKey === title) {
	                if (foundIndex) {
	                    foundIndex--;
	                }
	                activeKey = after[foundIndex].title;
	            }
	            _this.setState({
	                tabs: after,
	                activeKey: activeKey
	            });
	        }, _this.clear = function () {
	            var tabs = _this.state.tabs;
	
	            _this.setState({
	                tabs: [tabs.shift()],
	                activeKey: '摸鱼儿'
	            });
	        }, _this.add = function (e) {
	            e.stopPropagation();
	            index++;
	            var newTab = {
	                title: '\u540D\u79F0: ' + index,
	                content: '\u5185\u5BB9: ' + content
	            };
	            _this.setState({
	                tabs: _this.state.tabs.concat(newTab),
	                activeKey: '\u540D\u79F0: ' + index
	            });
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    Demo3.prototype.construct = function construct() {
	        var _this2 = this;
	
	        var disabled = true;
	        return this.state.tabs.map(function (t) {
	            return _react2['default'].createElement(
	                TabPane,
	                {
	                    tab: _react2['default'].createElement(
	                        'span',
	                        null,
	                        t.title,
	                        _react2['default'].createElement(_beeIcon2['default'], {
	                            type: 'uf-close-c',
	                            className: 'close-icon',
	                            onClick: _this2.remove.bind(_this2, t.title)
	                        })
	                    ),
	                    key: t.title
	                },
	                _react2['default'].createElement(
	                    'div',
	                    { style: { padding: 100 } },
	                    t.content
	                )
	            );
	        }).concat([_react2['default'].createElement(TabPane, {
	            tab: _react2['default'].createElement(
	                'a',
	                { style: { color: 'black', cursor: 'pointer' }, onClick: this.add },
	                ' + \u6DFB\u52A0'
	            ),
	            disabled: disabled,
	            key: '__add'
	        })]);
	    };
	
	    // 删除
	
	
	    // 增加
	
	
	    Demo3.prototype.render = function render() {
	
	        return _react2['default'].createElement(
	            'div',
	            { style: { margin: 20 } },
	            _react2['default'].createElement(
	                _src2['default'],
	                {
	                    activeKey: this.state.activeKey,
	                    onChange: this.onTabChange,
	                    tabBarStyle: 'primary',
	                    defaultActiveKey: '\u6478\u9C7C\u513F',
	                    extraContent: _react2['default'].createElement(_beeIcon2['default'], {
	                        type: 'uf-del',
	                        className: 'clear-icon',
	                        onClick: this.clear,
	                        title: '\u6E05\u7A7A'
	                    })
	                },
	                this.construct()
	            )
	        );
	    };
	
	    return Demo3;
	}(_react.Component);
	
	exports['default'] = Demo3;
	module.exports = exports['default'];

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Icon = __webpack_require__(104);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Icon2["default"];
	module.exports = exports['default'];

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
		type: _propTypes2["default"].string
	
	};
	/**
	 *  badge 默认显示内容1
	 */
	var defaultProps = {
		clsPrefix: 'uf'
	};
	
	var Icon = function (_Component) {
		_inherits(Icon, _Component);
	
		function Icon(props) {
			_classCallCheck(this, Icon);
	
			return _possibleConstructorReturn(this, _Component.call(this, props));
		}
	
		Icon.prototype.render = function render() {
			var _props = this.props,
			    type = _props.type,
			    className = _props.className,
			    clsPrefix = _props.clsPrefix,
			    others = _objectWithoutProperties(_props, ['type', 'className', 'clsPrefix']);
	
			var clsObj = {};
	
			var classNames = (0, _classnames2["default"])(clsPrefix, type);
	
			return _react2["default"].createElement('i', _extends({}, others, { className: (0, _classnames2["default"])(classNames, className) }));
		};
	
		return Icon;
	}(_react.Component);
	
	Icon.defaultProps = defaultProps;
	Icon.propTypes = propTypes;
	
	exports["default"] = Icon;
	module.exports = exports['default'];

/***/ })
/******/ ]);
//# sourceMappingURL=demo.js.map