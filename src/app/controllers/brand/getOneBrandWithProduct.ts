import { Request, Response } from 'express';

import { getOneBrandWithProductDatamapper } from '../../models/brand';

export const getOneBrandWithProductController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const id = req.params.id;
    const result = await getOneBrandWithProductDatamapper(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
