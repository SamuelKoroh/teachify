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
        
         return result !== null ? result.dataValues : false;
    }

    static async verifyPassword(encryptedPassword, password){
        return await bcrypt.compare(password, encryptedPassword);
    }


    static async generateAuthToken(data){
        const {password, ...user} = data;
        const secret = process.env.JWT_SECRET;

        user.token = await jwt.sign(user, secret, {expiresIn: '4hr'});

        return user;
    }
}