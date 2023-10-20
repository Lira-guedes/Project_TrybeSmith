import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock'
chai.use(chaiHttp);

describe('GET /products', function () {
  beforeEach(function () { sinon.restore(); });
  const allProducts = productsMock.allProducts;
  it('Lista todos os produtos com sucesso', async () => {
    sinon.stub(ProductModel, 'findAll').resolves(allProducts.map(
      (elem) => ProductModel.build(elem)
    ));

    const httpResponse = await chai.request(app).get('/products');
    expect(httpResponse.body).to.deep.equal(allProducts);
  })
    it('Retorna status 200 se os produtos foram listados com sucesso', async () => {
    sinon.stub(ProductModel, 'findAll').resolves(allProducts.map(
      (elem) => ProductModel.build(elem)
    ));

    const httpResponse = await chai.request(app).get('/products');
    expect(httpResponse.status).to.equal(200);
  })
});
