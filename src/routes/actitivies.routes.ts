import { Router } from 'express';
import ActivitiesController from '../controllers/ActivitiesController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';


const activitiesRouter = Router();
const activitiesController = new ActivitiesController();

activitiesRouter.get('/',ensureAuthenticated, activitiesController.index)

activitiesRouter.post('/', ensureAuthenticated, activitiesController.create);

activitiesRouter.put('/:id', ensureAuthenticated, activitiesController.update);

activitiesRouter.delete('/:name', ensureAuthenticated, activitiesController.destroy);

export default activitiesRouter;