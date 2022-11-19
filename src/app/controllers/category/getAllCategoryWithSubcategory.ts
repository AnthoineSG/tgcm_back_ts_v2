import { Request, Response } from 'express';

import { getAllCategoryWithSubcategoryDatamapper } from '../../models';

export type CategoryWithSubcategorysResponse =
  | {
      category: string;
      sub_category: string[];
    }[]
  | {
      error: string;
    };

export const getAllCategoryWithSubcategoryController = async (
  req: Request,
  res: Response<CategoryWithSubcategorysResponse>
) => {
  try {
    const result = await getAllCategoryWithSubcategoryDatamapper();

    if (!result[0]) {
      return res.status(404).json({ error: 'Category not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
