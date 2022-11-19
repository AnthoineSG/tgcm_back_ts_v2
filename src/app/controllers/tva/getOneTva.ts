import { Request, Response } from 'express';

import { getOneTvaDatamapper } from '../../models';

import { TvaResponse } from '../_types';

export const getOneTvaController = async (
  req: Request,
  res: Response<TvaResponse>
) => {
  try {
    const indice = req.params.indice;

    const result = await getOneTvaDatamapper(indice);

    if (!result) {
      return res.status(404).json({ error: 'Company not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
