import { Request, Response } from 'express';

import { getAllProductWithSubcategoryDatamapper } from '../../models';

export type Product = {
  id: number;
  brand_name: string;
  logo: string;
  slogan: string;
  activity_field: string;
  delivery_cost: number;
  name: string;
  description: string;
  image: string;
  location: string;
  barcode: string | null;
  size: string | null;
  depth: string | null;
  width: string | null;
  height: string | null;
  weight: string | null;
  expiration_date: string | null;
  price_promo: number;
  price_kg: string | null;
  price_ht: number;
  tva_id: number;
  brand_id: number;
  company_id: number;
  sub_category_id: number;
  created_at: Date;
  updated_at: Date | null;
};

export type SubcategoryWithProductResponse =
  | {
      sub_category_name: string;
      product: Product[];
    }
  | {
      error: string;
    };

export const getAllProductWithSubcategoryController = async (
  req: Request<{ name: string }>,
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
