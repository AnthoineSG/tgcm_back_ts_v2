import { ErrorMessage } from './errorTypes';

export interface Product {
  id?: number;
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
  created_at?: Date;
  updated_at?: Date | null;
}

export interface ProductCategory extends Product {
  brand_name: string;
  sub_category_name: string;
}

export interface ProductBrand extends Product {
  id: number;
  brand_name: string;
  logo: string;
  slogan: string;
  activity_field: string;
  delivery_cost: number;
}

export interface BrandWithProducts extends ProductBrand {
  company_id: number;
  price_ttc: string;
}

export type ProductInBasketResponse =
  | {
      id: number;
      user_id: number;
      product_id: number;
    }
  | ErrorMessage;

export type SubcategoryWithProductResponse =
  | {
      sub_category_name: string;
      product: ProductBrand[];
    }
  | ErrorMessage;

export type ProductResponse = ProductCategory | ErrorMessage;

export type ProductsResponse = ProductCategory[] | ErrorMessage;

export type RandomResponse = Product[] | ErrorMessage;
