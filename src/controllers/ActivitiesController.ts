import { Request, Response } from 'express';


import { CreateActivitiesService,ListActivitiesService, UpdateActivitiesService, DeleteActivitiesService } from '../services/activities'

export default class ActivitiesController {

  async index(request: Request, response: Response) {
    const { page } = request.headers;

    const listActivitiesService = new ListActivitiesService();
    const activities = await listActivitiesService.execute(Number(page));

    return response.json(activities);
  }

  async create(request: Request, response: Response) {
    const createActivityService = new CreateActivitiesService();
    const { name, description, subdescription, assign, initial_date, final_date } = request.body;

    const activity = await createActivityService.execute({
      name,
      description, 
      subdescription, 
      assign, 
      initial_date, 
      final_date
    });
    

    return response.json(activity);
  }

  async update(request: Request, response: Response) {
    const updateActivitiesService = new UpdateActivitiesService();
    const { name, description, subdescription, assign, initial_date, final_date } = request.body;
    const { id } = request.params;

    const activity = await updateActivitiesService.execute({
      id: Number(id),
      name,
      description, 
      subdescription, 
      assign, 
      initial_date, 
      final_date
    });
    

    return response.json(activity);
  }

  async destroy(request: Request, response: Response) {
    const { name } = request.params;

    const deleteActivitiesService = new DeleteActivitiesService();

    await deleteActivitiesService.execute({ name });

    return response.status(204).send();
  }
  
  // async show(request: Request, response: Response) {
  //   const { page } = request.headers;

    
  // }
}