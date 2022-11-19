import { Request, Response } from 'express';

import { getAllSubcategoryDatamapper } from '../../models';

export const getAllSubcategoryController = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await getAllSubcategoryDatamapper();

    if (!result[0]) {
      return res.status(404).json({ error: 'Category not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
