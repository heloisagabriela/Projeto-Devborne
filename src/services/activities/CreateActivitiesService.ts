import AppError from "../../errors/AppError";
import Activity from "../../models/Activities";
import ActivitiesRepository from "../../repositories/ActivitiesRepository";

interface IRequest {
  name: string;
  description: string;
  subdescription: string;
  assign: string;
  initial_date: Date;
  final_date: Date;
}
export default class CreateActivityService {

  private activityRepository: ActivitiesRepository;

  public async execute(data: IRequest): Promise<Activity> {
    this.activityRepository = new ActivitiesRepository();

    const activity = await this.activityRepository.create(data);

    if(!activity) {
      throw new AppError('Occorred an error while saving the activity');
    }

    return activity;
  }
}