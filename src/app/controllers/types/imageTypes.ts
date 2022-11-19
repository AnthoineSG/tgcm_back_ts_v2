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
};
