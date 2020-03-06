import {Router} from 'express';
import authRoute from './auth';
import instructorRoute from './instructor';
import 'dotenv/config';

const routes = Router();


routes.use('/auth', authRoute);
routes.use('/instructor', instructorRoute);


export default routes;
