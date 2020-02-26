"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class HttpResponse {
  static ok(res, data) {
    return res.status(200).json({
      status: 'ok',
      data
    });
  }

  static created(res, data) {
    return res.status(201).json({
      status: 'created',
      data
    });
  }

  static badRequest(res, error) {
    return res.status(400).json({
      status: 'bad request',
      error
    });
  }

  static unauthorized(res, error) {
    return res.status(401).json({
      status: 'unauthorized',
      error
    });
  }

  static notFound(res, error) {
    return res.status(404).json({
      status: 'not found',
      error
    });
  }

}

exports.default = HttpResponse;