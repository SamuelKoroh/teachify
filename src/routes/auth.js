import {Router} from 'express';
import AuthController from '../controllers/authController';
import { registerSchema, loginSchema } from "../validations/authValidation";
import validator from '../middlewares/validator';
import authenticate from '../middlewares/authenticate';

const router = Router();

router.post("/register",  validator(registerSchema), AuthController.register);
router.post("/login",  validator(loginSchema), AuthController.login);


export default router;