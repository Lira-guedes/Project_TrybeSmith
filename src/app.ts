import express from 'express'; 
import productsRouter from './router/products.router';
import ordersRouter from './router/orders.router';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

export default app;
