import { Request, Response } from 'express';

import { getOneBrandDatamapper } from '../../models';

import { IdParams, BrandResponse } from '../../types';

export const getOneBrandController = async (
  req: Request<IdParams>,
  res: Response<BrandResponse>
) => {
  try {
    const id = req.params.id;
    const result = await getOneBrandDatamapper(id);

    if (!result) {
      return res.status(404).json({ error: 'Brand not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
