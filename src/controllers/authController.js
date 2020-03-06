import AuthService from '../services/authService';
import HttpResponse from '../utils/httpResponse';

export default class AuthController {
  

  static async register({ body }, res) {
    try {
      const userExists = await AuthService.findUserByEmail(body.email);

      if (userExists)
        return HttpResponse.badRequest(res, 'The user already exists');

      const result = await AuthService.register(body);

      return HttpResponse.created(res, result.data);
    } catch (error) {
      HttpResponse.badRequest(res, error);
    }
  }

  static async login({ body: { email, password } }, res) {
    try {
      const user = await AuthService.findUserByEmail(email);

      if (!user)
        return HttpResponse.badRequest(res, 'The user does not exists');

      if (!(await AuthService.verifyPassword(user.password, password)))
        return HttpResponse.badRequest(res, 'The user does not exists');

      const data = await AuthService.generateAuthToken(user);

      return HttpResponse.ok(res, data);
    } catch (error) {
      HttpResponse.badRequest(res, error);
    }
  }

  static async forgetPassword({ body: { email } }, res) {
    try {
      const user = await AuthService.findUserByEmail(email);

      if (!user)
        return HttpResponse.badRequest(res, 'The user does not exists');

      const data = await AuthService.forgetPassword(email);

      return HttpResponse.ok(res, data);
    } catch (error) {
      HttpResponse.badRequest(res, error);
    }
  }

  static async changePassword(req, res) {
    try {
      const { body, userId } = req;
      const result = await AuthService.changePassword(body, userId);

      if(!result.success)
        return HttpResponse.badRequest(res, result.message);

      return HttpResponse.ok(res, result.data);
    } catch (error) {
      HttpResponse.badRequest(res, error);
    }
  }

}
