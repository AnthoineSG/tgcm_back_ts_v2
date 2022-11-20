import { Request, Response } from 'express';

import { addNewUserDatamapper } from '../../models';

import { bcryptChiffrage } from '../../services';

import { User, UserResponse } from '../../types';

export const addNewUserController = async (
  req: Request<{}, {}, User>,
  res: Response<UserResponse>
) => {
  try {
    const newUser = req.body;
    if (!newUser.firstname) {
      return res.status(400).json({ error: 'Le prenom est obligatoire !' });
    }
    if (!newUser.lastname) {
      return res.status(400).json({ error: 'Le nom est obligatoire !' });
    }
    if (!newUser.birthday) {
      newUser.birthday = null;
    }
    if (!newUser.email) {
      return res.status(400).json({ error: 'L\'email est obligatoire !' });
    }
    if (!newUser.password) {
      return res.status(400).json({ error: 'Le mot de passe est obligatoire !' });
    }
    if (!newUser.phone_number) {
      // eslint-disable-next-line camelcase
      newUser.phone_number = null;
    }
    if (!newUser.address) {
      newUser.address = null;
    }
    if (!newUser.city) {
      newUser.city = null;
    }
    if (!newUser.country) {
      newUser.country = null;
    }

    //* On passe le mdp en clair a la fonction bcrypt
    const newUserChiffredPassword = await bcryptChiffrage(newUser.password);
    //* On applique le mdp chiffrer a la place du mdp en clair sur les data de l'utilisateur
    newUser.password = newUserChiffredPassword;

    const result = await addNewUserDatamapper(newUser);

    if (!result) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
