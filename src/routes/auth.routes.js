import  express  from 'express'; 
import { authController } from '../controllers/main.controller.js';
import { authValidators } from '../validators/main.validators.js';
import { validateRequestMiddleware } from '../middleware/main.middleware.js'
export const auth = express.Router();


auth.post(`/login`, validateRequestMiddleware.validateRequest, validateRequestMiddleware.validateRequest, authController.login)
auth.post(`/register`, authValidators.createUserValidator, validateRequestMiddleware.validateRequest, validateRequestMiddleware.validateRequest, authController.register )