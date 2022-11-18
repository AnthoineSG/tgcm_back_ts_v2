import { Request, Response } from 'express';

import { getOneBrandDatamapper } from '../../models';

export type BrandResponse =
  | {
      id: number;
      brand_name: string;
      slogan: string;
      logo: string;
      activity_field: string;
      delivery_cost: number;
      company_id: number;
      created_at: Date;
      updated_at?: string | null;
    }
  | {
      error: string;
    };

export const getOneBrandController = async (
  req: Request<{ id: string }>,
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
