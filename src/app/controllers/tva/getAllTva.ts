import { Request, Response } from 'express';

import { getAllTvaDatamapper } from '../../models';

import { TvasResponse } from '../../types';

export const getAllTvaController = async (
  req: Request,
  res: Response<TvasResponse>
) => {
  try {
    const result = await getAllTvaDatamapper();

    if (!result[0]) {
      return res.status(404).json({ error: 'Tva not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
