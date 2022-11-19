import { Request, Response } from 'express';

import { getAllProductDatamapper } from '../../models';

import { ProductsResponse } from '../_types';

export const getAllProductController = async (
  req: Request,
  res: Response<ProductsResponse>
) => {
  try {
    const result = await getAllProductDatamapper();

    if (!result[0]) {
      return res.status(404).json({ error: 'Company not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
