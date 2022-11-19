import { Request, Response } from 'express';

import { updateUserDatamapper } from '../../models';

export type NewUser = {
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
}

export type UpdateUserResponse = {
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
