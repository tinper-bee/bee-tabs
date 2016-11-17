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
	cls: _react2["default"].PropTypes.string
};
var defaultPropsTabs = {
	cls: 'cls'
};

var Tabs = function (_Component) {
	_inherits(Tabs, _Component);

	function Tabs(props) {
		_classCallCheck(this, Tabs);

		var _this = _possibleConstructorReturn(this, _Component.call(this, props));

		_this.state = {
			content: ''
		};
		_this.formatChildren = _this.formatChildren.bind(_this);
		return _this;
	}

	Tabs.prototype.formatChildren = function formatChildren() {
		var arr = this.props.children;
		var content = void 0;
		var navList = '<div className="bee-tabs-nav">';
		var contentList = '<div className="bee-content-list">';
		arr.forEach(function (e) {
			navList += '<div key=' + e.key + '>' + e.props.tab + '</div>';
			contentList += '<div>' + e.props.children + '</div>';
		});
		navList += '</div>';
		contentList += '</div>';
		content = navList + contentList;
		this.setState({
			content: content
		});
	};

	Tabs.prototype.componentDidMount = function componentDidMount() {
		this.formatChildren();
	};

	Tabs.prototype.render = function render() {
		var content = this.state.content;
		console.log(content);
		return _react2["default"].createElement('div', { className: this.props.cls, dangerouslySetInnerHTML: { __html: content } });
	};

	return Tabs;
}(_react.Component);

Tabs.propTypes = propTypesTabs;
Tabs.defaultProps = defaultPropsTabs;
exports["default"] = Tabs;
module.exports = exports['default'];