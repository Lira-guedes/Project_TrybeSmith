import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';

async function postProductsService(product: ProductInputtableTypes): 
Promise<ProductInputtableTypes> {
  const createdProduct = await ProductModel.create(product);
  return createdProduct.dataValues;
} 

async function getProductsService(): Promise<ProductInputtableTypes[]> {
  const allProducts = await ProductModel.findAll();
  return allProducts.map((elem) => elem.dataValues);
}

export default { postProductsService, getProductsService };