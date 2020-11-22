import { getRepository, Repository } from 'typeorm';
import IActivityDTO from '../dtos/IActivityDto';
import Activities from '../models/Activities';


class ActivitiesRepository {
  private ormRepository: Repository<Activities>;

  constructor() {
    this.ormRepository = getRepository(Activities);
  }


  public async findById(id: number): Promise<Activities | undefined> {
    const activity = await this.ormRepository.findOne({
      where: { id }
    });

    return activity || undefined;
  }

  public async findByName(name: string): Promise<Activities | undefined> {
    const activity = await this.ormRepository.findOne({
      where: { name }
    });

    return activity || undefined;
  }

  public async findAll(page: number): Promise<Activities[] | undefined> {
    return this.ormRepository.find({
      skip: page === 1 ? 0 : (page - 1) * 10,
      take: 10,
      order: { id: 'ASC' }
    });
  }

  public async create(data: IActivityDTO): Promise<Activities> {
      const activity = await this.ormRepository.create(data);

      await this.save(activity);
      return activity;
  }


  public async save(activity: Activities): Promise<Activities> {
      return this.ormRepository.save(activity);
  }


  public async delete(activity: Activities): Promise<Activities> {
    await this.ormRepository.delete({
      id: activity.id
    });
    return activity;
  }
}

export default ActivitiesRepository;