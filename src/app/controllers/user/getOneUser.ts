import { Request, Response } from 'express';

import { getOneUserDatamapper } from '../../models';

import { UserResponse, EmailParams } from '../../types';

export const getOneUserController = async (
  req: Request<EmailParams>,
  res: Response<UserResponse>
) => {
  try {
    const email = req.params.email;

    const result = await getOneUserDatamapper(email);

    if (!result) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
