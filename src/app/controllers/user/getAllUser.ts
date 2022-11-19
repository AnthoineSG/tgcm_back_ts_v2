import { Request, Response } from 'express';

import { getAllUserDatamapper } from '../../models';

import { UsersResponse } from '../types';

export const getAllUserController = async (
  req: Request,
  res: Response<UsersResponse>
) => {
  try {
    const result = await getAllUserDatamapper();

    if (!result[0]) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
