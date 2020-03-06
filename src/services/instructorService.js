import { User, InstructorProfile  } from "../models";
export default class InstructorService{
    static async becomeInstructor(body, userId){
        const result = await InstructorProfile.findOne({ where: { userId }});
       
        if(result)
            return { success: false, message: 'This profile already exists!' }

        const profile = await InstructorProfile.create({...body, userId });

        await User.update({ userType: 'instructor' }, { where: {id: userId }})

        return { success: true, data: profile.dataValues };
    }

    static async getAllInstructor(){
        const result = await User.findAll({ include: [InstructorProfile] });
        return result;
    }

    static async getInstructorById(userId){
        const profile = await User.findOne({ 
            where: { id: userId }, 
            include: [InstructorProfile] 
        });
    
        return profile;
    }
}