'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // export default from './Tabs';


var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tabs = require('./Tabs');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 之前animated，scrollAnimated（ScrollableTabBarMixin），inkBarAnimated（InkTabBarMixin）都是默认为true的
// 针对ie9等不支持transform等需要设置为false
var Tabs = (0, _createReactClass2["default"])({
    render: function render() {
        var disableProps = {
            animated: false,
            scrollAnimated: false,
            inkBarAnimated: false
        };
        if ((0, _utils.isTransformSupported)(document.documentElement.style)) {
            return _react2["default"].createElement(
                'div',
                null,
                _react2["default"].createElement(_Tabs.Tabs, this.props)
            );
        } else {
            // 不支持transform和translate3d的就讓animated是false
            return _react2["default"].createElement(
                'div',
                null,
                _react2["default"].createElement(_Tabs.Tabs, _extends({}, this.props, disableProps))
            );
        }
    }
});
Tabs.TabPane = _Tabs.Tabs.TabPane;
exports["default"] = Tabs;
module.exports = exports['default'];