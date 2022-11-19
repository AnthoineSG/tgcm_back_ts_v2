import { Router } from 'express';

import {
  uploadImageController,
  findProductIdController,
  addProductWithImageController,
} from '../../controllers';

const imageRouter = Router();

imageRouter.route('/image/upload').post(uploadImageController);

imageRouter.route('/image/find').post(findProductIdController);

imageRouter.route('/image/upload/product').post(addProductWithImageController);

export default imageRouter;
