import { Request, Response } from 'express';

import { getOneBrandWithProductDatamapper } from '../../models/brand';

import { IdParams, BrandWithProductsResponse } from '../../types';

export const getOneBrandWithProductController = async (
  req: Request<IdParams>,
  res: Response<BrandWithProductsResponse>
) => {
  try {
    const id = req.params.id;
    const result = await getOneBrandWithProductDatamapper(id);

    if (!result) {
      return res.status(404).json({ error: 'Brand not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
