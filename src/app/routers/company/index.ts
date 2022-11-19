import { Router } from 'express';

import { getAllCompanyController } from '../../controllers';

const companyRouter = Router();

companyRouter.route('/company').get(getAllCompanyController);

export default companyRouter;
