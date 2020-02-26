"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginSchema = exports.registerSchema = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const registerSchema = _joi.default.object({
  firstName: _joi.default.string().required().label('First Name'),
  lastName: _joi.default.string().required().label('Last Name'),
  gender: _joi.default.string().required().label('Gender'),
  phone: _joi.default.string().required().label('Phone Number'),
  email: _joi.default.string().required().label('Email').email({
    minDomainSegments: 2,
    tlds: {
      allow: ['com', 'net']
    }
  }),
  password: _joi.default.string().required().label('Password').pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
});

exports.registerSchema = registerSchema;

const loginSchema = _joi.default.object({
  email: _joi.default.string().required().label('Email').email({
    minDomainSegments: 2,
    tlds: {
      allow: ['com', 'net']
    }
  }),
  password: _joi.default.string().required().label('Password').pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
});

exports.loginSchema = loginSchema;