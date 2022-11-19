import { Request, Response } from 'express';

import { deleteProductInBasketDatamapper } from '../../models';

export type DeleteProductResponse =
  | {
      id: number;
      user_id: number;
      product_id: number;
    }
  | {
      error: string;
    };

export const deleteProductInbasketController = async (
  req: Request<{}, {}, { product_id: string; user_id: string }>,
  res: Response<DeleteProductResponse>
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
