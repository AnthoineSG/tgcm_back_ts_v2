import { Request, Response } from 'express';

import { addProductWithImageDatamapper } from '../../models';

export type BodyRequest = {
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
  tva_id: number;
  brand_id: number;
  sub_category_id: number;
}

export const addProductWithImageController = async (
  req: Request<{}, {}, BodyRequest>,
  res: Response
) => {
  try {
    const {
      name,
      description,
      image,
      price_ht,
      tva_id,
      brand_id,
      sub_category_id,
    } = req.body;

    let {
      location,
      barcode,
      expiration_date,
      height,
      width,
      depth,
      weight,
      size,
      price_promo,
      price_kg,
    } = req.body;

    if (
      !name ||
      !description ||
      !image ||
      !price_ht ||
      !tva_id ||
      !brand_id ||
      !sub_category_id
    ) {
      return res.status(400).json({ message: 'Il manque des infos !' });
    }
    if (!location) {
      location = null;
    }
    if (!barcode) {
      barcode = null;
    }
    if (!expiration_date) {
      expiration_date = null;
    }
    if (!height) {
      height = null;
    }
    if (!width) {
      width = null;
    }
    if (!depth) {
      depth = null;
    }
    if (!weight) {
      weight = null;
    }
    if (!size) {
      size = null;
    }
    if (!price_promo) {
      price_promo = null;
    }
    if (!price_kg) {
      price_kg = null;
    }

    const body = {
      name,
      description,
      image,
      location,
      barcode,
      expiration_date,
      height,
      width,
      depth,
      weight,
      size,
      price_ht,
      price_promo,
      price_kg,
      tva_id,
      brand_id,
      sub_category_id,
    };

    const result = await addProductWithImageDatamapper(image, body);

    if (!result[0]) {
      return res.status(404).json({ error: 'Image not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
