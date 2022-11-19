export type AddProductResponse =
  | {
      id: number;
      user_id: number;
      product_id: number;
    }
  | {
      error: string;
    };

export type DeleteProductResponse =
  | {
      id: number;
      user_id: number;
      product_id: number;
    }
  | {
      error: string;
    };

export type ProductsResponse =
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
    }[]
  | {
      error: string;
    };

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
