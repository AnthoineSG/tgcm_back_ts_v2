import { ErrorMessage } from './errorTypes';
import { BrandWithProducts } from './productTypes';

export type Brand = {
  id: number;
  brand_name: string;
  slogan: string;
  logo: string;
  activity_field: string;
  delivery_cost: number;
  company_id: number;
  created_at: Date;
  updated_at: Date | null;
};

export type BrandResponse = Brand | ErrorMessage;

export type BrandsResponse = Brand[] | ErrorMessage;

export type BrandWithProductsResponse = BrandWithProducts[] | ErrorMessage;
