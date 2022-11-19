import { Request, Response } from 'express';

import { getRandomProductDatamapper } from '../../models';

export type RandomResponse =
  | {
      id: number;
      name: string;
      description: string;
      image: string;
      location: string | null;
      barcode: string | null;
      expiration_date: string | null;
      height: string | null;
      width: string | null;
      depth: string | null;
      weight: string | null;
      size: string | null;
      price_ht: string;
      price_promo: string | null;
      price_kg: string | null;
      tva_id: number;
      brand_id: number;
      sub_category_id: number;
      created_at: Date;
      updated_at: Date | null;
    }[]
  | {
      error: string;
    };

export const getRandomProductController = async (
  req: Request,
  res: Response<RandomResponse>
) => {
  try {
    const result = await getRandomProductDatamapper();

    if (!result[0]) {
      return res.status(404).json({ error: 'Company not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
