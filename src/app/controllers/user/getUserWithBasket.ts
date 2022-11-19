import { Request, Response } from 'express';

import { getUserWithBasketDatamapper } from '../../models';

import { UserBasket, EmailParams } from '../../types';

export const getUserWithBasketController = async (
  req: Request<EmailParams>,
  res: Response<UserBasket>
) => {
  try {
    const email = req.params.email;

    const result = await getUserWithBasketDatamapper(email);

    if (!result) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
