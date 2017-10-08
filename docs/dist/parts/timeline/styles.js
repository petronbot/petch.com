'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var __styledJsxDefaultExport = new String([1, 2, 3, 4, 5, 6, 7, 8].map(function (i) {
  return '\n      .marker:nth-of-type(' + i + '):before {\n        -webkit-filter: brightness(' + (100 - i * 8) + '%);\n      }\n      .marker:nth-of-type(' + i + ') {\n        color: rgba(255, 255, 255, ' + (1 - i * 0.05) + ');\n      }\n    ';
}).join('') + ' .marker{position:relative;margin:0;padding:.75em .5em .85em}.marker:before{content:\'\';z-index:-1;position:absolute;left:0;right:0;top:0;bottom:0;background-color:pink}.marker span{margin-right:.25em}');

__styledJsxDefaultExport.__hash = '13117883231';
__styledJsxDefaultExport.__scoped = [1, 2, 3, 4, 5, 6, 7, 8].map(function (i) {
  return '\n      .marker:nth-of-type(' + i + '):before {\n        -webkit-filter: brightness(' + (100 - i * 8) + '%);\n      }\n      .marker:nth-of-type(' + i + ') {\n        color: rgba(255, 255, 255, ' + (1 - i * 0.05) + ');\n      }\n    ';
}).join('') + ' .marker[data-jsx-ext~="23117883231"]{position:relative;margin:0;padding:.75em .5em .85em}.marker[data-jsx-ext~="23117883231"]:before{content:\'\';z-index:-1;position:absolute;left:0;right:0;top:0;bottom:0;background-color:pink}.marker[data-jsx-ext~="23117883231"] span[data-jsx-ext~="23117883231"]{margin-right:.25em}';
__styledJsxDefaultExport.__scopedHash = '23117883231';
exports.default = __styledJsxDefaultExport;