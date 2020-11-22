import { Request, Response } from 'express';
import {AuthenticateService} from '../services/auth'

export default class AuthController {
  async create(request: Request, response: Response) {
    const { authKey } = request.params;
    const authenticateService = new AuthenticateService();
    
    const token = await authenticateService.execute({
      authKey: String(authKey)
    });

    return response.json(token);
  }
}
  