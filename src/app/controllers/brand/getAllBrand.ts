import { Request, Response } from 'express';

import { getAllBrandDatamapper } from '../../models/brand/getAllBrand';

export type BrandsResponse =
  | {
      id: number;
      brand_name: string;
      slogan: string;
      logo: string;
      activity_field: string;
      delivery_cost: number;
      company_id: number;
      created_at: Date;
      updated_at: string | null;
    }[]
  | {
      error: string;
    };

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
