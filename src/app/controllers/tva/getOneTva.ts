import { Request, Response } from 'express';

import { getOneTvaDatamapper } from '../../models';

export type TvaResponse =
  | {
      id: number;
      rate: number;
      created_at: Date;
      updated_at: Date | null;
    }
  | {
      error: string;
    };

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
