'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TabPane = _react2["default"].createClass({
  displayName: 'TabPane',

  propTypes: {
    className: _react.PropTypes.string,
    active: _react.PropTypes.bool,
    style: _react.PropTypes.any,
    destroyInactiveTabPane: _react.PropTypes.bool,
    forceRender: _react.PropTypes.bool,
    placeholder: _react.PropTypes.node
  },
  getDefaultProps: function getDefaultProps() {
    return { placeholder: null };
  },
  render: function render() {
    var _classnames;

    var props = this.props;
    var className = props.className;
    var destroyInactiveTabPane = props.destroyInactiveTabPane;
    var active = props.active;
    var forceRender = props.forceRender;

    this._isActived = this._isActived || active;
    var prefixCls = props.rootPrefixCls + '-tabpane';
    var cls = (0, _classnames3["default"])((_classnames = {}, _defineProperty(_classnames, prefixCls, 1), _defineProperty(_classnames, prefixCls + '-inactive', !active), _defineProperty(_classnames, prefixCls + '-active', active), _defineProperty(_classnames, className, className), _classnames));
    var isRender = destroyInactiveTabPane ? active : this._isActived;
    return _react2["default"].createElement(
      'div',
      {
        style: props.style,
        role: 'tabpanel',
        'aria-hidden': props.active ? 'false' : 'true',
        className: cls
      },
      isRender || forceRender ? props.children : props.placeholder
    );
  }
});

exports["default"] = TabPane;
module.exports = exports['default'];