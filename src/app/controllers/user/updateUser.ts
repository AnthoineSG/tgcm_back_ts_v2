import { Request, Response } from 'express';

import { updateUserDatamapper } from '../../models';

import { bcryptChiffrage } from '../../services';

import { EmailParams, User, UserResponse } from '../../types';

export const updateUserController = async (
  req: Request<EmailParams, {}, User>,
  res: Response<UserResponse>
) => {
  try {
    const email = req.params.email;
    const newUser = req.body;

    if (newUser.password) {
      //* On passe le mdp en clair a la fonction bcrypt
      const newUserChiffredPassword = await bcryptChiffrage(newUser.password);
      //* On applique le mdp chiffrer a la place du mdp en clair sur les data de l'utilisateur
      newUser.password = newUserChiffredPassword;
    }

    const result = await updateUserDatamapper(email, newUser);

    if (!result) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
