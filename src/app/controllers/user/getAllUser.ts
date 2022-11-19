import { Request, Response } from 'express';

import { getAllUserDatamapper } from '../../models';

export type UsersResponse = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  birthday: string | null;
  phone_number: string | null;
  address: string | null;
  postal_code: string | null;
  city: string | null;
  country: string | null;
  created_at: Date;
  updated_at: Date | null;
}[] | {
  error: string
}

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
