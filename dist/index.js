'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _lodash=require('lodash'),_lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}exports.default={match:function match(a,b){var c=a.custom;return c&&b&&_lodash2.default.has(c,b)},value:function value(a,b){var c=a.custom;return c[b]}};