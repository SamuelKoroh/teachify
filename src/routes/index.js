import {Router} from 'express';
import authRoute from './auth';
import 'dotenv/config';

const routes = Router();


routes.use('/auth', authRoute);


export default routes;
