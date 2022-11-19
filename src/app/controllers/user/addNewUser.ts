import { Request, Response } from 'express';

import { addNewUserDatamapper } from '../../models';

import { User, UserResponse } from '../_types';

export const addNewUserController = async (
  req: Request<{}, {}, User>,
  res: Response<UserResponse>
) => {
  try {
    const user = req.body;

    const result = await addNewUserDatamapper(user);

    if (!result) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
