import { Request, Response } from 'express';

import { addProductInBasketDatamapper } from '../../models';

export type AddProductResponse = {
  id: number;
  user_id: number;
  product_id: number;
} | {
  error: string
}

export const addProductInBasketController = async (
  req: Request<{ id: string }, {}, { email: string }>,
  res: Response<AddProductResponse>
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
