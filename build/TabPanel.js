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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

//nav 
var propTypesNav = {};
var defaultPropsNav = {};

var Nav = function (_Component) {
  _inherits(Nav, _Component);

  function Nav(props) {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  Nav.prototype.render = function render() {
    return _react2["default"].createElement(
      'div',
      null,
      this.props.tab
    );
  };

  return Nav;
}(_react.Component);

Nav.propTypes = propTypesNav;
Nav.defaultProps = defaultPropsNav;
//content
var propTypesContent = {};
var defaultPropsContent = {};

var Content = function (_Component2) {
  _inherits(Content, _Component2);

  function Content(props) {
    _classCallCheck(this, Content);

    return _possibleConstructorReturn(this, _Component2.call(this, props));
  }

  Content.prototype.render = function render() {
    return _react2["default"].createElement(
      'div',
      null,
      this.props.content
    );
  };

  return Content;
}(_react.Component);

Content.propTypes = propTypesContent;
Content.defaultProps = defaultPropsContent;
//control
var propTypesTabPanel = {};
var defaultPropsTabPanel = {};

var TabPanel = function (_Component3) {
  _inherits(TabPanel, _Component3);

  function TabPanel(props) {
    _classCallCheck(this, TabPanel);

    return _possibleConstructorReturn(this, _Component3.call(this, props));
  }

  TabPanel.prototype.render = function render() {
    return _react2["default"].createElement(
      'div',
      null,
      _react2["default"].createElement(Nav, { tab: this.props.tab, key: this.props.key }),
      _react2["default"].createElement(Content, { content: this.props.children })
    );
  };

  return TabPanel;
}(_react.Component);

TabPanel.propTypes = propTypesTabPanel;
TabPanel.defaultProps = defaultPropsTabPanel;
exports["default"] = TabPanel;
module.exports = exports['default'];