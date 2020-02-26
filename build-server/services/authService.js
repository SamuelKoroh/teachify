"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../models");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AuthService {
  static async register(user) {
    const salt = await _bcrypt.default.genSalt(10);
    user.password = await _bcrypt.default.hash(user.password, salt);
    const {
      dataValues
    } = await _models.User.create(user);
    return dataValues;
  }

  static async findUserByEmail(email) {
    const result = await _models.User.findOne({
      where: {
        email
      }
    });
    return result !== null ? result.dataValues : result;
  }

  static async verifyPassword(user, password) {
    return await _bcrypt.default.compare(password, user.password);
  }

  static async generateAuthToken(user) {
    const {
      password,
      ...data
    } = user;
    const secret = process.env.JWT_SECRET;
    data.token = await _jsonwebtoken.default.sign(data, secret, {
      expiresIn: '4hr'
    });
    return data;
  }

}

exports.default = AuthService;