import { Router } from 'express';

import { getAllTvaController, getOneTvaController } from '../../controllers';

const tvaRouter = Router();

tvaRouter
  .route('/tva')
  /**
    * @swagger
    * /api/tva:
    *  get:
    *    tags: [Tva]
    *    summary: Get all rates of tva in database
    *    responses:
    *      200:
    *        description: List of all rates of tva on json format
    *        content:
    *          application/json:
    *            schema:
    *              type: array
    *              items:
    *                $ref: '#/components/schemas/Tva'
    *      404:
    *         description: Error not found
    */
  .get(getAllTvaController);

tvaRouter
  .route('/tva/:indice')
  /**
    * @swagger
    * /api/tva/{rate}:
    *  get:
    *    tags: [Tva]
    *    summary: Get the rate of one tva
    *    parameters:
    *          - name: rate
    *            in: path
    *            required: true
    *            description: Rate of the tva
    *            schema:
    *                type: integer
    *    responses:
    *      200:
    *        description: Object of one rate of tva on json format
    *        content:
    *          application/json:
    *            schema:
    *              type: array
    *              items:
    *                $ref: '#/components/schemas/Tva'
    *      404:
    *         description: Error not found
    */
  .get(getOneTvaController);

export default tvaRouter;
