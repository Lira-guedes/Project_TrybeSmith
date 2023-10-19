import express from 'express'; 
import productsRouter from './router/products.router';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

export default app;
