import { User } from '../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default class AuthService{
    static async register(user){
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(user.password, salt);

        const {dataValues} = await User.create(user);

        return dataValues;
    }
    
    static async findUserByEmail(email){
         const result = await User.findOne({where: {email }});
        
         return result;
    }

    static async verifyPassword(user, password){
        return await bcrypt.compare(password, user.password);
    }


    static async generateAuthToken(user){
        const {password, ...data} = user;
        const secret = process.env.JWT_SECRET;

        data.token = await jwt.sign(data, secret, {expiresIn: '4hr'});

        return data;
    }
}