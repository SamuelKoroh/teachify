import jwt from 'jsonwebtoken';
import HttpResponse from '../utils/httpResponse';

const authenticate = async (req, res, next) =>{
   try {
    const secret = process.env.JWT_SECRET;
    var token = req.headers['token'];

    if(!token)
        return HttpResponse.badRequest(res, 'token is required to access this area')
    
    const user = await jwt.verify(token, secret);
    
    req.userId = user.id;
    
    next();
   } catch (error) {
     HttpResponse.unauthorized(res, 'You don\'t have access to this area');
   }
}

export default authenticate;