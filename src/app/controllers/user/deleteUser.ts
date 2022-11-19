import { Request, Response } from 'express';

import { deleteUserDatamapper } from '../../models';

export type DeleteUser = {
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
} | {
  error: string
}

export const deleteUserController = async (
  req: Request<{ email: string }>,
  res: Response<DeleteUser>
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
