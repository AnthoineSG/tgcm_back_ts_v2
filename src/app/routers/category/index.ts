import { Router } from 'express';

import {
  getAllCategoryController,
  getAllCategoryWithSubcategoryController,
  getAllSubcategoryController,
} from '../../controllers';

const categoryRouter = Router();

categoryRouter
  .route('/category')
  /**
    * @swagger
    * /api/category:
    *  get:
    *    tags: [Category]
    *    summary: Get all category in database
    *    responses:
    *      200:
    *        description: List of all category on json format
    *        content:
    *          application/json:
    *            schema:
    *              type: array
    *              items:
    *                $ref: '#/components/schemas/Category'
    *      404:
    *         description: Error not found
    */
  .get(getAllCategoryController);

categoryRouter
  .route('/category/sub_category')
  /**
    * @swagger
    * /api/category/sub_category:
    *  get:
    *    tags: [Category]
    *    summary: Get subCategory by category
    *    responses:
    *      200:
    *        description: List category with subCategory
    *        content:
    *          application/json:
    *            schema:
    *              type: array
    *              items:
    *                $ref: '#/components/schemas/CategoryWithSubcategory'
    *      404:
    *         description: Error not found
    */
  .get(getAllCategoryWithSubcategoryController);

categoryRouter.route('/sub_category').get(getAllSubcategoryController);

export default categoryRouter;
