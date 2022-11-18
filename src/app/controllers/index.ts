import { Request, Response } from 'express';

type HomeResponse = {
  mes: string;
};

export const homeController = (req: Request, res: Response<HomeResponse>) => {
  return res.status(200).json({ mes: 'toto' });
};
