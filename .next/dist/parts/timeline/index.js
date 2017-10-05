'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles.js');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var markers = _ref.markers;
  return _react2.default.createElement('div', {
    'data-jsx-ext': _styles2.default.__scopedHash
  }, _react2.default.createElement(_style2.default, {
    styleId: _styles2.default.__scopedHash,
    css: _styles2.default.__scoped
  }), markers.map(function (marker, index) {
    return _react2.default.createElement('p', { key: index, 'data-jsx-ext': _styles2.default.__scopedHash
    }, marker.year, ': ', marker.label);
  }));
};