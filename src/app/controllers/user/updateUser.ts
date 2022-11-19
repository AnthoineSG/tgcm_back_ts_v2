import { Request, Response } from 'express';

import { updateUserDatamapper } from '../../models';

import { UpdateUserResponse, NewUser } from '../types';

export const updateUserController = async (
  req: Request<{ email: string }, {}, NewUser>,
  res: Response<UpdateUserResponse>
) => {
  try {
    const email = req.params.email;
    const oldUser = req.body;

    const result = await updateUserDatamapper(email, oldUser);

    if (!result) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
