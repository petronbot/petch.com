'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _styles = require('./styles.js');

var _styles2 = _interopRequireDefault(_styles);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _timeline = require('./../parts/timeline');

var _timeline2 = _interopRequireDefault(_timeline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var data = [{
  year: 2007,
  label: 'Started as Web Editor at the Law Society of New South Wales'
}, {
  year: 2015,
  label: 'Joined the Fampany at ustwo'
}, {
  year: 2017,
  label: '6 month contract with Scentre Groups\'s website team'
}];

var Page = function Page(_ref) {
  var stars = _ref.stars;
  return _react2.default.createElement('div', {
    'data-jsx-ext': _styles2.default.__scopedHash
  }, _react2.default.createElement(_style2.default, {
    styleId: _styles2.default.__scopedHash,
    css: _styles2.default.__scoped
  }), _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', {
    'data-jsx-ext': _styles2.default.__scopedHash
  }, 'My page title'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', 'data-jsx-ext': _styles2.default.__scopedHash
  })), _react2.default.createElement(_timeline2.default, { markers: data }), _react2.default.createElement('p', {
    'data-jsx-ext': _styles2.default.__scopedHash
  }, stars));
};

Page.getInitialProps = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
    var req = _ref2.req;
    var res, json;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _nodeFetch2.default)('https://api.github.com/repos/zeit/next.js');

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            json = _context.sent;
            return _context.abrupt('return', { stars: json.stargazers_count });

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

exports.default = Page;