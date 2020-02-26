"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _authController = _interopRequireDefault(require("../controllers/authController"));

var _authValidation = require("../validations/authValidation");

var _validator = _interopRequireDefault(require("../middlewares/validator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.post("/register", (0, _validator.default)(_authValidation.registerSchema), _authController.default.register);
router.post("/login", (0, _validator.default)(_authValidation.loginSchema), _authController.default.login);
var _default = router;
exports.default = _default;