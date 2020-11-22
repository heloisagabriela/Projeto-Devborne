import AppError from "../../errors/AppError";
import Activity from "../../models/Activities";
import ActivitiesRepository from "../../repositories/ActivitiesRepository";

interface IRequest {
  id: number;
  name: string;
  description: string;
  subdescription: string;
  assign: string;
  initial_date: Date;
  final_date: Date;
}
export default class UpdateActivityService {

  private activityRepository: ActivitiesRepository;


  public async execute(data: IRequest): Promise<Activity> {
    this.activityRepository = new ActivitiesRepository();
    const { id, name, description, subdescription, assign, initial_date, final_date } = data;

    if(!name) {
      throw new  AppError('Name is Required');
    }
    
    const activity = await this.activityRepository.findById(id);

    if(!activity) {
      throw new  AppError('There is no activity with provided id');
    }

    if(name) {
      activity.name = name;
    }

    if(description) {
      activity.description = description;
    }

    if(subdescription) {
      activity.subdescription = subdescription;
    }

    if(assign) {
      activity.assign = assign;
    }

    if(initial_date) {
      activity.initial_date = initial_date;
    }

    if(final_date) {
      activity.final_date = final_date;
    }

    await this.activityRepository.save(activity);

    return activity;
  }
}