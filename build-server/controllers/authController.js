"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _authService = _interopRequireDefault(require("../services/authService"));

var _httpResponse = _interopRequireDefault(require("../utils/httpResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AuthController {
  static async login({
    body: {
      email,
      password
    }
  }, res) {
    const user = await _authService.default.findUserByEmail(email);
    if (!user) return _httpResponse.default.badRequest(res, 'The user does not exists');
    const isPasswordValid = await _authService.default.verifyPassword(user, password);
    if (!isPasswordValid) return _httpResponse.default.badRequest(res, 'The user does not exists');
    const data = await _authService.default.generateAuthToken(user);
    return _httpResponse.default.ok(res, data);
  }

  static async register({
    body
  }, res) {
    const userExists = await _authService.default.findUserByEmail(body.email);
    if (userExists) return _httpResponse.default.badRequest(res, 'The user already exists');
    const user = await _authService.default.register(body);
    const data = await _authService.default.generateAuthToken(user);
    return _httpResponse.default.created(res, data);
  }

}

exports.default = AuthController;