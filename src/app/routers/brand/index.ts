import { Router } from 'express';

import {
  getAllBrandController,
  getOneBrandController,
  getOneBrandWithProductController,
} from '../../controllers';

const brandRouter = Router();

brandRouter
  .route('/brand')
  /**
    * @swagger
    * /api/brand:
    *  get:
    *    tags: [Brand]
    *    summary: Get all brand in database
    *    responses:
    *      200:
    *        description: List of all brand on json format
    *        content:
    *          application/json:
    *            schema:
    *              type: array
    *              items:
    *                $ref: '#/components/schemas/Brand'
    *      404:
    *         description: Error not found
    */
  .get(getAllBrandController);

brandRouter
  .route('/brand/:id')
  /**
    * @swagger
    * /api/brand/{id}:
    *  get:
    *    tags: [Brand]
    *    summary: Get all infos of one brand
    *    parameters:
    *          - name: id
    *            in: path
    *            required: true
    *            description: id of brand
    *            schema:
    *                type: string
    *    responses:
    *      200:
    *        description: Object of one brand on json format
    *        content:
    *          application/json:
    *            schema:
    *              type: array
    *              items:
    *                $ref: '#/components/schemas/Brand'
    *      404:
    *         description: Error not found
    */
  .get(getOneBrandController);

brandRouter
  .route('/brand/:id/product')
  /**
    * @swagger
    * /api/brand/{name}/product:
    *  get:
    *    tags: [Brand]
    *    summary: Get infos of product of one brand
    *    parameters:
    *          - name: id
    *            in: path
    *            required: true
    *            description: Name of brand
    *            schema:
    *                type: integer
    *    responses:
    *      200:
    *        description: Object of one brand on json format
    *        content:
    *          application/json:
    *            schema:
    *              type: array
    *              items:
    *                $ref: '#/components/schemas/BrandWitchProduct'
    *      404:
    *         description: Error not found
    */
  .get(getOneBrandWithProductController);

export default brandRouter;
