import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';

async function postProductsService(product: ProductInputtableTypes): 
Promise<ProductInputtableTypes> {
  const createdProduct = await ProductModel.create(product);
  return createdProduct.dataValues;
} 

export default { postProductsService };