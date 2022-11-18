import { Router } from 'express';

import {
  getAllBrandController,
  getOneBrandController,
  getOneBrandWithProductController,
} from '../../controllers';

const brandRouter = Router();

brandRouter.route('/brand').get(getAllBrandController);

brandRouter.route('/brand/:id').get(getOneBrandController);

brandRouter.route('/brand/:id/product').get(getOneBrandWithProductController);

export default brandRouter;
