import { Request, Response } from 'express';

import { getAllProductDatamapper } from '../../models';

export type ProductsResponse = {
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
}[] | {
  error: string
}

export const getAllProductController = async (
  req: Request,
  res: Response<ProductsResponse>
) => {
  try {
    const result = await getAllProductDatamapper();

    if (!result[0]) {
      return res.status(404).json({ error: 'Company not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
