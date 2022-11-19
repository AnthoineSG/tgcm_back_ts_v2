import { Request, Response } from 'express';

import { addProductInBasketDatamapper } from '../../models';

import { IdParams, EmailParams, ProductInBasketResponse } from '../_types';

export const addProductInBasketController = async (
  req: Request<IdParams, {}, EmailParams>,
  res: Response<ProductInBasketResponse>
) => {
  try {
    const productId = req.params.id;
    const email = req.body.email;

    const result = await addProductInBasketDatamapper(productId, email);

    if (!result) {
      return res.status(404).json({ error: 'Company not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
