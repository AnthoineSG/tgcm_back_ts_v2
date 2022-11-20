import { Router } from 'express';

import { getAllCompanyController } from '../../controllers';

const companyRouter = Router();

companyRouter
  .route('/company')
  /**
   * @swagger
   * /api/company:
   *  get:
   *    tags: [Company]
   *    summary: Get all company in database
   *    responses:
   *      200:
   *        description: List of all company on json format
   *        content:
   *          application/json:
   *            schema:
   *              type: array
   *              items:
   *                $ref: '#/components/schemas/Company'
   *      404:
   *         description: Error not found
   */
  .get(getAllCompanyController);

export default companyRouter;
