import { Router } from 'express';
import productsController from '../controller/products.controller';

const producstRouter = Router();

producstRouter.post('/', productsController.postProductsController);

export default producstRouter;
