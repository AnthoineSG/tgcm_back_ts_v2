import { Request, Response } from 'express';

import { getAllCategoryDatamapper } from '../../models';

export type CategorysResponse =
  | {
      id: number;
      name: string;
      created_at: Date;
      updated_at: Date | null;
    }[]
  | {
      error: string;
    };

export const getAllCategoryController = async (
  req: Request,
  res: Response<CategorysResponse>
) => {
  try {
    const result = await getAllCategoryDatamapper();

    if (!result[0]) {
      return res.status(404).json({ error: 'Category not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
