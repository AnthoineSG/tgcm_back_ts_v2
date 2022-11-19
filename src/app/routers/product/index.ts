import { Router } from 'express';

import {
  getAllProductController,
  getOneProductController,
  getAllProductWithSubcategoryController,
  addProductInBasketController,
  deleteProductInbasketController,
  getRandomProductController,
} from '../../controllers';

const productRouter = Router();

productRouter.route('/product').get(getAllProductController);

productRouter.route('/product/:id').get(getOneProductController);

productRouter.route('/product/:id/user').post(addProductInBasketController);

productRouter.route('/product/user').delete(deleteProductInbasketController);

productRouter
  .route('/product/sub_category/:name')
  .get(getAllProductWithSubcategoryController);

productRouter
  .route('/product/favorites/random')
  .get(getRandomProductController);

export default productRouter;
