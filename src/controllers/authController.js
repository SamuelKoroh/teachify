import AuthService from '../services/authService';
import HttpResponse from '../utils/httpResponse';

export default class AuthController {
    static async login({body: {email, password }}, res){
        const user = await AuthService.findUserByEmail(email); 
        
        if(!user)
            return HttpResponse.badRequest(res, 'The user does not exists');

        const isPasswordValid  =  await AuthService.verifyPassword(user, password);

        if(!isPasswordValid)
            return HttpResponse.badRequest(res, 'The user does not exists');

       const data = await AuthService.generateAuthToken(user);

        return HttpResponse.ok(res, data);
    }

    static async register({body}, res){
        const userExists = await AuthService.findUserByEmail(body.email);

        if(userExists)
            return HttpResponse.badRequest(res, 'The user already exists');
        
        const user = await AuthService.register(body);
        const data= await AuthService.generateAuthToken(user);

        return HttpResponse.created(res, data);
    }

}