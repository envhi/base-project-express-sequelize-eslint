import { Router } from 'express';
import users from './app/controllers/UsersController';

const routes = new Router();

routes.get('/users', users.index);

export default routes;
