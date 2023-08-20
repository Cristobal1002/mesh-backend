import  express  from 'express'; 
import { authController } from '../controllers/main.controller.js';
export const auth = express.Router();


auth.post(`/login`, authController.login)
auth.post(`/register`, authController.register )