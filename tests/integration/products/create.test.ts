import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock'

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Retorna statos 201 se o produto foi criado com sucesso', async () => {
    sinon.stub(ProductModel, 'create').resolves(ProductModel.build(productsMock.createdProduct))

    const httpResponse = await chai.request(app).post('/products').send(productsMock.body);

    expect(httpResponse.status).to.equal(201);
  })
});
