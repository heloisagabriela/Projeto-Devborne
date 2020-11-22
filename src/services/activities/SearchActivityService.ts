import Activity from "../../models/Activities";
import ActivitiesRepository from "../../repositories/ActivitiesRepository";


export default class SearchActivityService {

  private activityRepository: ActivitiesRepository;

  public async execute( page = 1 ): Promise<Activity[]> {
    this.activityRepository = new ActivitiesRepository();

    const activity = await this.activityRepository.findAll(page);

    if(!activity) {
      return [];
    }

    return activity;
  }
}