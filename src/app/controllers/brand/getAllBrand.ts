import { Request, Response } from 'express';

import { getAllBrandDatamapper } from '../../models/brand/getAllBrand';

type BrandResponse = {
  id: number;
  brand_name: string;
  slogan: string;
  logo: string;
  activity_field: string;
  delivery_cost: number;
  company_id: number;
  created_at: Date;
  updated_at?: string | null;
}

export const brandController = async (req: Request, res: Response<BrandResponse[]>) => {
  const result = await getAllBrandDatamapper();
  return res.status(200).json(result);
};
