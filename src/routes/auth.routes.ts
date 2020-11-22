import { Router } from 'express';
import AuthController from '../controllers/AuthController';


const authRouter = Router();
const authCOntroller = new AuthController();

authRouter.post('/:authKey', authCOntroller.create);


export default authRouter;