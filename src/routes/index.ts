import { Router } from 'express';
import activitiesRouter from './actitivies.routes';
import authRouter from './auth.routes';

const routes = Router();
routes.use('/activities', activitiesRouter);
routes.use('/auth', authRouter);

export default routes;