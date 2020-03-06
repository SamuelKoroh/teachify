import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { User } from '../models';
import { HOST_URL, emailSenders } from '../utils/constants';
import EmailService from './emailService';
import { emailTemplate } from '../utils/email-template';


const emailToken = crypto.randomBytes(40).toString("hex");

export default class AuthService{

    static async register(user){
        user.password = await this.generatePasswordHash(user.password);

        await User.create(user);

        return { success: true, data: 'The account has been created successfully' };
    }
    
    static async forgetPassword(email){

        const plain_pass = crypto.randomBytes(8).toString('hex');
        
        const password = await this.generatePasswordHash(plain_pass);

        const result = await User.update({ password }, { where: { email }, returning: true });
        
        const user = result[1][0].dataValues;

        const template_data ={ name: user.firstName, password: plain_pass };

        const response = await  EmailService.sendMailByTemplate( user.email, 
            emailSenders.no_reply, emailTemplate.forget_password, template_data );

        return response && 'Please check your mail in order to login';
    }
    static async changePassword(body, userId){
        const { dataValues: user } = await User.findOne({ where: {id: userId }});
        const isPasswordValid = await this.verifyPassword( user.password, body.oldPassword );

        if(!isPasswordValid)
            return {success: false, message: 'old password is not valid'};

        const hasedPassword = await this.generatePasswordHash(body.password);
        
        await User.update({ password: hasedPassword }, { where: { id: userId }, returning: true });
     

        return { success: true, data: 'Your password has been updated' };
    }

    static async findUserByEmail(email){
         const result = await User.findOne({where: {email }, raw: true });
        
         return result;
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

    static async generatePasswordHash(password){
        const salt = await bcrypt.genSalt(10);

        return await bcrypt.hash(password, salt);
    }
}