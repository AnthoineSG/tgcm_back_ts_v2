import { Router } from 'express';

import {
  getAllCategoryController,
  getAllCategoryWithSubcategoryController,
  getAllSubcategoryController,
} from '../../controllers';

const categoryRouter = Router();

categoryRouter.route('/category').get(getAllCategoryController);

categoryRouter
  .route('/category/sub_category')
  .get(getAllCategoryWithSubcategoryController);

categoryRouter.route('/sub_category').get(getAllSubcategoryController);

export default categoryRouter;
