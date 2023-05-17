"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-unused-vars, import/no-extraneous-dependencies
var _express = require('express');
var _PictureController = require('../controllers/PictureController'); var _PictureController2 = _interopRequireDefault(_PictureController);
var _loginRequire = require('../middleware/loginRequire'); var _loginRequire2 = _interopRequireDefault(_loginRequire);

const router = new (0, _express.Router)();

router.post('/', _loginRequire2.default, _PictureController2.default.store);

exports. default = router;
