import { Router } from 'express';
import productsController from '../controller/products.controller';
import { priceValidate, nameValidate } from '../middlewares/productValidation';

const producstRouter = Router();

producstRouter.post('/', priceValidate, nameValidate, productsController.postProductsController);
producstRouter.get('/', productsController.getProductsController);

export default producstRouter;
