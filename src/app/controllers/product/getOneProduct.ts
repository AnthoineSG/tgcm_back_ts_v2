import { Request, Response } from 'express';

import { getOneProductDatamapper } from '../../models';

export type ProductResponse =
  | {
      brand_name: string;
      sub_category_name: string;
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
      price_ht: string | null;
      price_promo: string | null;
      price_kg: string | null;
      tva_id: number;
      brand_id: number;
      sub_category_id: number;
      created_at: Date;
      updated_at: Date | null;
    }
  | {
      error: string;
    };

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
