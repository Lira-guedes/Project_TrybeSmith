import { Request, Response } from 'express';
import productsService from '../service/products.service';

async function postProductsController(req: Request, res: Response): Promise<void> {
  const { name, price, orderId } = req.body;

  const postProducts = await productsService.postProductsService({ name, price, orderId });

  res.status(201).json(postProducts);
}

async function getProductsController(req: Request, res: Response): Promise<void> {
  const allProducts = await productsService.getProductsService();
  res.status(200).json(allProducts);
}

export default { postProductsController, getProductsController };