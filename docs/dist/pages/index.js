'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var data = [{
  year: 2000,
  label: 'Launched first ever website via floppy disk'
}, {
  year: 2005,
  label: 'Signed up for an Arts degree at UNSW in Media & Communications'
}, {
  year: 2007,
  label: 'Started as Web Editor at the Law Society of New South Wales'
}, {
  year: 2011,
  label: 'Joined Tipping Point as Front End Developer'
}, {
  year: 2013,
  label: 'Creative Developer at The Monkeys'
}, {
  year: 2015,
  label: 'Joined the Fampany at ustwo'
}, {
  year: 2016,
  label: 'Spoke about the DTA Design Guide at CSSConf in Melbourne'
}, {
  year: 2017,
  label: 'Joined Scentre Groups\'s website team'
}];

var Page = function Page(_ref) {
  var stars = _ref.stars;
  return _react2.default.createElement('div', null, _react2.default.createElement(_style2.default, {
    styleId: _styles2.default.__hash,
    css: _styles2.default
  }), _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'My page title'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet' })), _react2.default.createElement('h1', { className: 'title' }, 'Petra Gulicher - Web Developer'), _react2.default.createElement('p', null, 'Full stack web developer from Sydney, Australia. Experience in leading technical teams and scrum coaching. Combining 10 years of professional experience and continuous learning in web technologies.'), _react2.default.createElement('ul', { className: 'links' }, _react2.default.createElement('li', null, _react2.default.createElement('a', { href: 'mailto:p.gulicher@gmail.com' }, _react2.default.createElement('i', { className: 'material-icons' }, 'perm_identity'), 'Email')), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: 'https://github.com/petronbot' }, _react2.default.createElement('i', { className: 'material-icons' }, 'code'), 'GitHub')), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: 'http://twitter.com/petronbot' }, _react2.default.createElement('i', { className: 'material-icons' }, 'chat_bubble_outline'), 'Twitter'))), _react2.default.createElement(_timeline2.default, { markers: data }), _react2.default.createElement('footer', { className: 'footer' }, _react2.default.createElement('small', null, 'Made with ', _react2.default.createElement('a', { href: 'https://github.com/zeit/next.js/' }, 'Next.js'), '.')));
};

exports.default = Page;