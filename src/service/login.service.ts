import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import jwtUtil from '../utils/jwt.util';

type LoginResponse = {
  status: number;
  data: {
    token: string;
  };
};
type MessageResponse = {
  status: number;
  data: {
    message: string;
  };
};

async function postloginService(username: string, password: string): 
Promise<LoginResponse | MessageResponse> {
  if (!username || !password) {
    return { status: 400, data: { message: '"username" and "password" are required' } };
  }
  const getLogin = await UserModel.findOne({ where: { username } });
  if (!getLogin || !bcrypt.compareSync(password, getLogin.dataValues.password)) {
    return { status: 401, data: { message: 'Username or password invalid' } };
  }

  const { id } = getLogin.dataValues;
  const token = jwtUtil.sign({ id, username });
  return { status: 200, data: { token } };
}

export default { postloginService };