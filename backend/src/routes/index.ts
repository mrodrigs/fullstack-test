import { Router } from 'express';
import moodRouter from './mood.routes';

const routes = Router();

routes.use('/mood', moodRouter);

export default routes;
