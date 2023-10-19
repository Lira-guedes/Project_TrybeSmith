import { Router } from 'express';
import productsController from '../controller/products.controller';

const producstRouter = Router();

producstRouter.post('/', productsController.postProductsController);
producstRouter.get('/', productsController.getProductsController);

export default producstRouter;
