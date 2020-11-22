import Activity from '../models/Activities'

export default interface ICreateActivityDTO {

  name: string;

  description: string;

  subdescription: string;

  assign: string;

  initial_date: Date;

  final_date: Date;

}