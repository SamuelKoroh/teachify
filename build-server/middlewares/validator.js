"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _httpResponse = _interopRequireDefault(require("../utils/httpResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const validator = (schema, location = "body") => async (req, res, next) => {
  try {
    await schema.validateAsync(req[location], {
      abortEarly: false
    });
    next();
  } catch (ex) {
    const errors = ex.details.map(e => ({
      key: e.context.key,
      message: e.message
    }));

    _httpResponse.default.badRequest(res, errors);
  }
};

var _default = validator;
exports.default = _default;