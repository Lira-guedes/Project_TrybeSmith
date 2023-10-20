import express from 'express'; 
import productsRouter from './router/products.router';
import ordersRouter from './router/orders.router';
import loginRouter from './router/login.router';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/login', loginRouter);

export default app;
