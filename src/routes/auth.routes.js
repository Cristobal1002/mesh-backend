import  express  from 'express'; 
import { authController } from '../controllers/main.controller.js';
import { authValidators } from '../validators/main.validators.js';
import { validateRequestMiddleware, validateToken } from '../middleware/main.middleware.js'
export const auth = express.Router();


auth.post(`/login`, authValidators.loginValidator, validateRequestMiddleware.validateRequest, authController.login)
auth.post(`/register`, authValidators.createUserValidator, validateRequestMiddleware.validateRequest, validateRequestMiddleware.validateRequest, authController.register )
auth.post(`/test`,validateToken.checkToken, authController.test)