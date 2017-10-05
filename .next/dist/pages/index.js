'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _timeline = require('./../parts/timeline');

var _timeline2 = _interopRequireDefault(_timeline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/petragulicher/Development/petch/pages/index.js?entry',
    _this = undefined;

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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, 'My page title'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/style.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  })), _react2.default.createElement(_timeline2.default, { markers: data, __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImZldGNoIiwiSGVhZCIsIlRpbWVsaW5lIiwiZGF0YSIsInllYXIiLCJsYWJlbCIsIlBhZ2UiLCJzdGFycyIsImdldEluaXRpYWxQcm9wcyIsInJlcSIsInJlcyIsImpzb24iLCJzdGFyZ2F6ZXJzX2NvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBRVAsQUFBTzs7OztBQUNQLEFBQU8sQUFBYzs7Ozs7Ozs7O0FBRXJCLElBQU07UUFDSixBQUNRLEFBQ047U0FIUyxBQUNYLEFBRVM7QUFGVCxBQUNFLENBRlM7UUFLWCxBQUNRLEFBQ047U0FQUyxBQUtYLEFBRVM7QUFGVCxBQUNFO1FBR0YsQUFDUSxBQUNOO1NBWEosQUFBYSxBQVNYLEFBRVM7QUFGVCxBQUNFOztBQUtKLElBQU0sT0FBTyxTQUFQLEFBQU8sV0FBQTtNQUFBLEFBQUcsYUFBSCxBQUFHO3lCQUNkLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNBLDBEQUFNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO2dCQUE5QjtrQkFGRixBQUVFLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtnQkFBNUI7a0JBSkosQUFDRSxBQUdFLEFBRUY7QUFGRTt1QkFFRixBQUFDLG9DQUFTLFNBQVYsQUFBbUI7Z0JBQW5CO2tCQU5GLEFBTUUsQUFDQTtBQURBO3NCQUNBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUk7QUFBSjtBQUFBLEtBUlMsQUFDWCxBQU9FO0FBUko7O0FBWUEsS0FBQSxBQUFLLDhCQUFMO3VGQUF1Qix3QkFBQTtRQUFBLEFBQVMsWUFBVCxBQUFTO2FBQVQ7a0VBQUE7Z0JBQUE7eUNBQUE7ZUFBQTs0QkFBQTttQkFDSCx5QkFERyxBQUNILEFBQU07O2VBQWxCO0FBRGUsMkJBQUE7NEJBQUE7bUJBRUYsSUFGRSxBQUVGLEFBQUk7O2VBQWpCO0FBRmUsNEJBQUE7NkNBR2QsRUFBRSxPQUFPLEtBSEssQUFHZCxBQUFjOztlQUhBO2VBQUE7NEJBQUE7O0FBQUE7Z0JBQUE7QUFBdkI7O3VCQUFBOzZCQUFBO0FBQUE7QUFNQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGV0cmFndWxpY2hlci9EZXZlbG9wbWVudC9wZXRjaCJ9