import { Router } from 'express';
import InstructorController from '../controllers/instructorController';
import authenticate from '../middlewares/authenticate';
import validator from '../middlewares/validator';
import { becomeInstructorSchema } from '../validations/instructorValidation'
const router = Router();

router.post("/",[authenticate, validator(becomeInstructorSchema)],
 InstructorController.becomeInstructor);
router.get("/", authenticate,  InstructorController.getAllInstructor);
router.get("/:id", authenticate, InstructorController.getInstructorById);

export default router;