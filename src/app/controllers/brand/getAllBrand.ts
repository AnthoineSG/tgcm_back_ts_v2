import { Request, Response } from 'express';

import { getAllBrandDatamapper } from '../../models/brand/getAllBrand';

import { BrandsResponse } from '../types';

export const getAllBrandController = async (
  req: Request,
  res: Response<BrandsResponse>
) => {
  try {
    const result = await getAllBrandDatamapper();

    if (!result[0]) {
      return res.status(404).json({ error: 'Brand not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
