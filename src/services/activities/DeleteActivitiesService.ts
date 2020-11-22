import AppError from "../../errors/AppError";
import Activity from "../../models/Activities";
import ActivitiesRepository from "../../repositories/ActivitiesRepository";

interface IRequest {
  name: string;
}
export default class DeleteActivityService {

  private activityRepository: ActivitiesRepository;


  public async execute(data: IRequest): Promise<boolean> {
    this.activityRepository = new ActivitiesRepository();
    const { name } = data;

    if(!name) {
      throw new AppError('Name is Required to delete an activity');
    }
    
    const activity = await this.activityRepository.findByName(name);

    if(!activity) {
      throw new AppError('There is no activity with provided id');
    }

    await this.activityRepository.delete(activity);

    return true;
  }
}