import { Request, Response } from 'express';

import { getOneProductDatamapper } from '../../models';

import { ProductResponse } from '../types';

export const getOneProductController = async (
  req: Request<{ id: string }>,
  res: Response<ProductResponse>
) => {
  try {
    const id = req.params.id;

    const result = await getOneProductDatamapper(id);

    if (!result) {
      return res.status(404).json({ error: 'Company not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
