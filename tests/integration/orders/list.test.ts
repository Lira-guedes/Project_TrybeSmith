// import sinon from 'sinon';
// import chai, { expect } from 'chai';
// import chaiHttp from 'chai-http';
// import app from '../../../src/app';
// import OrderModel from '../../../src/database/models/order.model';

// chai.use(chaiHttp);

// describe('GET /orders', function () { 
//   beforeEach(function () { sinon.restore(); });
//   const allOrders = ordersMock.allOrders;
//   it('Lista todos os produtos com sucesso', async () => {
//     sinon.stub(OrderModel, 'findAll').resolves(allOrders.map(
//       (elem) => OrderModel.build(elem)
//     ));

//     const httpResponse = await chai.request(app).get('/orders');
//     expect(httpResponse.body).to.deep.equal(allOrders);
//   })
//     it('Retorna status 200 se os produtos foram listados com sucesso', async () => {
//     sinon.stub(OrderModel, 'findAll').resolves(allOrders.map(
//       (elem) => OrderModel.build(elem)
//     ));

//     const httpResponse = await chai.request(app).get('/orders');
//     expect(httpResponse.status).to.equal(200);
//   })
// });
