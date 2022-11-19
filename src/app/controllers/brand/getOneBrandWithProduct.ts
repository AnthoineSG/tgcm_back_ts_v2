import { Request, Response } from 'express';

import { getOneBrandWithProductDatamapper } from '../../models/brand';

export type BrandWithProductsResponse =
  | {
      id: number;
      brand_name: string;
      slogan: string;
      logo: string;
      activity_field: string;
      delivery_cost: number;
      company_id: number;
      created_at: Date;
      updated_at: Date | null;
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
      price_kg: string | null;
      price_promo: string | null;
      price_ht: string;
      price_ttc: string;
      tva_id: number;
      brand_id: number;
      sub_category_id: number;
    }[]
  | {
      error: string;
    };

export const getOneBrandWithProductController = async (
  req: Request<{ id: string }>,
  res: Response<BrandWithProductsResponse>
) => {
  try {
    const id = req.params.id;
    const result = await getOneBrandWithProductDatamapper(id);

    if (!result) {
      return res.status(404).json({ error: 'Brand not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
