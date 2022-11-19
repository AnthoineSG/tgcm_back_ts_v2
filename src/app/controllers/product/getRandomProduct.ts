import { Request, Response } from 'express';

import { getRandomProductDatamapper } from '../../models';

import { RandomResponse } from '../types';

export const getRandomProductController = async (
  req: Request,
  res: Response<RandomResponse>
) => {
  try {
    const result = await getRandomProductDatamapper();

    if (!result[0]) {
      return res.status(404).json({ error: 'Company not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
