import { Request, Response } from 'express';

import { deleteUserDatamapper } from '../../models';

import { EmailParams, UserResponse } from '../_types';

export const deleteUserController = async (
  req: Request<EmailParams>,
  res: Response<UserResponse>
) => {
  try {
    const email = req.params.email;

    const result = await deleteUserDatamapper(email);

    if (!result) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
