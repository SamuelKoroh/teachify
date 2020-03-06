import { Router } from 'express';
import AuthController from '../controllers/authController';
import validator from '../middlewares/validator';
import authenticate from '../middlewares/authenticate';
import { 
    registerSchema, 
    loginSchema, 
    forgetPasswordSchema, 
    changePasswordSchema 
} from "../validations/authValidation";

const router = Router();

router.post("/register",  validator(registerSchema), AuthController.register);
router.post("/login",  validator(loginSchema), AuthController.login);
router.post("/forget-password",  validator(forgetPasswordSchema), AuthController.forgetPassword);
router.post("/change-password",  [authenticate, validator(changePasswordSchema)], AuthController.changePassword);

export default router;