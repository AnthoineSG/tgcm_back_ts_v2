import { Router } from 'express';

import { getAllTvaController, getOneTvaController } from '../../controllers';

const tvaRouter = Router();

tvaRouter
  .route('/tva')
  .get(getAllTvaController)
;

tvaRouter
  .route('/tva/:indice')
  .get(getOneTvaController)
;

export default tvaRouter;
