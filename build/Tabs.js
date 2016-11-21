'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypesTabs = {
	cls: _react2["default"].PropTypes.string,
	defaultActiveKey: _react2["default"].PropTypes.string
};
var defaultPropsTabs = {
	cls: 'cls',
	defaultActiveKey: "2"
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
		return _this;
	}

	Tabs.prototype.clickHandler = function clickHandler(e) {
		console.log(e.currentTarget.dataset.id);
		this.setState({
			activeKey: e.currentTarget.dataset.id
		});
		console.log(this.state.activeKey);
		this.formatChildren(e.currentTarget.dataset.id);
	};

	Tabs.prototype.formatChildren = function formatChildren(v) {
		var _this2 = this;

		var arr = this.props.children;
		var stateActiveKey = v || this.state.activeKey;
		var navArr = [];
		var contentArr = [];
		arr.forEach(function (e) {
			var key = e.key,
			    tab = e.props.tab,
			    children = e.props.children,
			    tab_active = e.key == stateActiveKey ? 'bee-tabs-tab bee-tabs-tab-active' : 'bee-tabs-tab',
			    cont_active = e.key == stateActiveKey ? 'bee-content bee-content-active' : 'bee-content';
			navArr.push(_react2["default"].createElement(
				'div',
				{ onClick: _this2.clickHandler, className: tab_active, 'data-id': key, key: key },
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
			{ className: 'simple-tabs-nav simple-tabs-content' },
			_react2["default"].createElement(
				'div',
				{ className: 'bee-tabs-nav' },
				navArr
			),
			_react2["default"].createElement(
				'div',
				{ className: 'bee-content-list' },
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
			{ className: this.props.cls },
			this.state.content
		);
	};

	return Tabs;
}(_react.Component);

Tabs.propTypes = propTypesTabs;
Tabs.defaultProps = defaultPropsTabs;
exports["default"] = Tabs;
module.exports = exports['default'];