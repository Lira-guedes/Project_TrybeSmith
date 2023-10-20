import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import UserModel from '../../../src/database/models/user.model';
import app from '../../../src/app';
import loginMock from '../../mocks/login.mock';
chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Retorna um status 200 e um token se o login foi realizado com sucesso', async () => {
    const login = { username: 'Hagar', password: 'terrível'}

    const result = UserModel.findOne({ where: { username: login.username } });
    sinon.stub(UserModel, 'findOne').returns(result);

    const httpResponse = await chai.request(app).post('/login').send(login);

    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.have.key('token');
  })

});

  // it('Retorna mensagem de erro e status 401 se os dados inseridos forem inválidos', async () => {
  //   const login = {
  //     username: 'Hagar',
  //     password: 'abcdefg',
  //   }

  //   const httpResponse = await chai.request(app).post('/login').send(login);

  //   expect(httpResponse.status).to.equal(401);
  //   expect(httpResponse.body).to.deep.equal({ message: 'Username or password invalid' });
  // })

  // it('Retorna mensagem de erro e status 400 se não houver inserido algum dos dados', async () => {
  //   const user = { 
  //     username: '', 
  //     password: 'terrível',
  //   }

  //   const httpResponse = await chai.request(app).post('/login').send(user);

  //   expect(httpResponse.status).to.be.equal(400);
  //   expect(httpResponse.body).to.be.equal( "\"username\" and \"password\" are required");
  // })

