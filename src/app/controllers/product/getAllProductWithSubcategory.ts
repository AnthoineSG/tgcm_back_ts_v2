import { Request, Response } from 'express';

import { getAllProductWithSubcategoryDatamapper } from '../../models';

import {
  SubcategoryNameParams,
  SubcategoryWithProductResponse,
} from '../../types';

export const getAllProductWithSubcategoryController = async (
  req: Request<SubcategoryNameParams>,
  res: Response<SubcategoryWithProductResponse>
) => {
  try {
    const name = req.params.name;

    const result = await getAllProductWithSubcategoryDatamapper(name);

    if (!result) {
      return res.status(404).json({ error: 'Company not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
