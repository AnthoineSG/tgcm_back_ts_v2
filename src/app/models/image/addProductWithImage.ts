import { cloud, pool } from '../_config';

export type Body = {
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

export const addProductWithImageDatamapper = async (
  imagePath: string,
  body: Body
) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };
  const { url } = await cloud.uploader.upload(imagePath, options);

  const config = {
    text: `INSERT INTO "public"."product" (
            "name",
            "description",
            "image",
            "location",
            "barcode",
            "expiration_date",
            "height",
            "width",
            "depth",
            "weight",
            "size",
            "price_ht",
            "price_promo",
            "price_kg",
            "tva_id",
            "brand_id",
            "sub_category_id"
          ) VALUES (
            $1,
            $2,
            $3,
            $4,
            $5,
            $6,
            $7,
            $8,
            $9,
            $10,
            $11,
            $12,
            $13,
            $14,
            $15,
            $16,
            $17
          )
          RETURNING *;`,
    values: [
      body.name,
      body.description,
      url,
      body.location,
      body.barcode,
      body.expiration_date,
      body.height,
      body.width,
      body.depth,
      body.weight,
      body.size,
      body.price_ht,
      body.price_promo,
      body.price_kg,
      body.tva_id,
      body.brand_id,
      body.sub_category_id,
    ],
  };
  const result = await pool.query(config);

  return result.rows[0];
};
