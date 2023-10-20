import { Request, Response } from 'express';
import loginService from '../service/login.service';

async function postLoginController(req: Request, res: Response): Promise<void> {
  const { username, password } = req.body;
  
  const { status, data } = await loginService.postloginService(username, password);

  res.status(status).json(data);
}

export default { postLoginController };
