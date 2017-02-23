'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypesTabs = {
	clsPrefix: _react2["default"].PropTypes.string,
	nav: _react2["default"].PropTypes.string,
	cont: _react2["default"].PropTypes.string,
	suffix: _react2["default"].PropTypes.string,
	defaultActiveKey: _react2["default"].PropTypes.string
};
var defaultPropsTabs = {
	clsPrefix: 'u-tabs',
	nav: 'simple',
	cont: 'simple',
	navsuffix: '-tabs-nav',
	contsuffix: '-tabs-content',
	defaultActiveKey: "1",
	count: null
};

var Tabs = function (_Component) {
	_inherits(Tabs, _Component);

	function Tabs(props) {
		_classCallCheck(this, Tabs);

		var _this = _possibleConstructorReturn(this, _Component.call(this, props));

		_this.state = {
			content: '',
			activeKey: _this.props.defaultActiveKey
		};
		_this.formatChildren = _this.formatChildren.bind(_this);
		_this.clickHandler = _this.clickHandler.bind(_this);
		_this.ruleSelector = _this.ruleSelector.bind(_this);
		return _this;
	}

	Tabs.prototype.ruleSelector = function ruleSelector(n) {
		var count = (n - 1) * 100 + '%';
		document.querySelector('.u-tabs-tab-child').style.transform = 'translate3d(' + count + ',0,0)';
	};

	Tabs.prototype.clickHandler = function clickHandler(e) {
		this.setState({
			activeKey: e.currentTarget.dataset.id
		});
		this.ruleSelector(e.currentTarget.dataset.id);
		this.formatChildren(e.currentTarget.dataset.id);
	};

	Tabs.prototype.formatChildren = function formatChildren(v) {
		var _this2 = this;

		var arr = [];
		if (!this.props.children[0]) {
			arr.push(this.props.children);
		} else {
			arr = this.props.children;
		}

		//let width = 100/Number(this.props.children.length)+'%';
		var minWidth = "90px";
		this.setState({
			count: arr.length
		});
		var stateActiveKey = v || this.state.activeKey;
		var nav = this.props.navtype || this.props.nav,
		    cont = this.props.contenttype || this.props.cont,
		    clsname = '';
		clsname = '' + nav + this.props.navsuffix + ' ' + cont + this.props.contsuffix;

		var navArr = [];
		var contentArr = [];

		arr.forEach(function (e) {
			var key = e.key,
			    tab = e.props.tab,
			    children = e.props.children,
			    tab_active = (0, _classnames2["default"])('u-tabs-tab', _defineProperty({}, 'u-tabs-tab-active', e.key == stateActiveKey)),
			    cont_active = (0, _classnames2["default"])('u-content', _defineProperty({}, 'u-content-active', e.key == stateActiveKey));
			navArr.push(_react2["default"].createElement(
				'div',
				{ style: { minWidth: minWidth }, onClick: _this2.clickHandler, className: tab_active, 'data-id': key, key: key },
				tab
			));
			contentArr.push(_react2["default"].createElement(
				'div',
				{ className: cont_active, 'data-id': key, key: key },
				children
			));
		});
		var content = _react2["default"].createElement(
			'div',
			{ className: clsname },
			_react2["default"].createElement(
				'div',
				{ className: 'u-tabs-nav' },
				navArr,
				_react2["default"].createElement('div', { style: { minWidth: minWidth }, className: 'u-tabs-tab-child' })
			),
			_react2["default"].createElement(
				'div',
				{ className: 'u-content-list' },
				contentArr
			)
		);
		this.setState({
			content: content
		});
	};

	Tabs.prototype.componentDidMount = function componentDidMount() {
		this.formatChildren();
	};

	Tabs.prototype.render = function render() {
		return _react2["default"].createElement(
			'div',
			{ className: this.props.clsPrefix },
			this.state.content
		);
	};

	return Tabs;
}(_react.Component);

Tabs.propTypes = propTypesTabs;
Tabs.defaultProps = defaultPropsTabs;
exports["default"] = Tabs;
module.exports = exports['default'];