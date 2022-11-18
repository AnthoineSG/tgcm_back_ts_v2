import { Router } from 'express';

import { brandController } from '../../controllers';

const brandRouter = Router();

brandRouter
  .route('/brand')
  .get(brandController)
;

export default brandRouter;
