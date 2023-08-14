import { Router } from 'express';
import { loginController } from './controllers/main.controller.js';

export const routes = Router()

routes.post(`/login`, loginController.login)