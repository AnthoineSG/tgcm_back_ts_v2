import { Request, Response } from 'express';

import { deleteProductInBasketDatamapper } from '../../models';

import { BasketBody, ProductInBasketResponse } from '../_types';

export const deleteProductInbasketController = async (
  req: Request<{}, {}, BasketBody>,
  res: Response<ProductInBasketResponse>
) => {
  try {
    const { product_id, user_id } = req.body;

    const result = await deleteProductInBasketDatamapper(product_id, user_id);

    if (!result) {
      return res.status(404).json({ error: 'Company not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
