import InstructorService from '../services/instructorService';
import HttpResponse from '../utils/httpResponse';

export default class InstructorController{
    static async becomeInstructor(req, res){
        try {
            const { body, userId } = req;
            const result = await InstructorService.becomeInstructor(body, userId);
            
            if(!result.success)
                return HttpResponse.badRequest(res, result.message);

            return HttpResponse.ok(res, result.data);
        } catch (error) {
            console.log(error);
        }
    }

    static async getAllInstructor(req, res){
        try {
            const result = await InstructorService.getAllInstructor();

            return HttpResponse.ok(res, result);
        } catch (error) {
            console.log(error);
        }
    }

    static async getInstructorById(req, res){
        try {
            const { params: { id} } = req;
            const result = await InstructorService.getInstructorById(id);

            return HttpResponse.ok(res, result);
        } catch (error) {
            console.log(error);
        }
    }
}