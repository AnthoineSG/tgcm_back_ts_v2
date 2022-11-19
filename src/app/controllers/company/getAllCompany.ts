import { Request, Response } from 'express';

import { getAllCompanyDatamapper } from '../../models';

import { CompanysResponse } from '../types';

export const getAllCompanyController = async (
  req: Request,
  res: Response<CompanysResponse>
) => {
  try {
    const result = await getAllCompanyDatamapper();

    if (!result[0]) {
      return res.status(404).json({ error: 'Company not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
