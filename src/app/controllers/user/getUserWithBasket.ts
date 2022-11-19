import { Request, Response } from 'express';

import { getUserWithBasketDatamapper } from '../../models';

export type ProductBasket = {
  id: number;
  name: string;
  description: string;
  image: string;
  location: string | null;
  expiration_date: string | null;
  barcode: string | null;
  size: string | null;
  depth: string | null;
  width: string | null;
  height: string | null;
  weight: string | null;
  price_kg: number | null;
  price_promo: string | null;
  price_ht: number;
  tva_id: number;
  brand_id: number;
  sub_category_id: number;
  created_at: Date;
  updated_at: Date | null;
};

export type UserBasket =
  | {
      random_id: string;
      user_id: number;
      firstname: string;
      lastname: string;
      email: string;
      total_delivery: string;
      total_ttc: string;
      final_price: string;
      product: ProductBasket[];
    }
  | {
      error: string;
    };

export const getUserWithBasketController = async (
  req: Request<{ email: string }>,
  res: Response<UserBasket>
) => {
  try {
    const email = req.params.email;

    const result = await getUserWithBasketDatamapper(email);

    if (!result) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
