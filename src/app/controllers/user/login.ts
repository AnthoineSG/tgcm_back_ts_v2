import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { chechUserInfosDatamapper } from '../../models';

import { bcryptCompare } from '../../services/bcrypt/compare';

export const loginController = async (
  req: Request,
  res: Response
) => {
  try {
    // ! check body
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password) {
      return res.status(404).json({
        message: 'error il manque des informations'
      });
    }

    // ! check user existe with email and get result
    const result = await chechUserInfosDatamapper(email);
    if (!result) {
      return res.status(500).json({ message: 'user inconnu en BDD' });
    }

    // ! check password and delete
    const userPasswordToCheck = result.password;
    const checkPassword = await bcryptCompare(password, userPasswordToCheck);
    if (checkPassword === false) {
      return res.status(401).json({
        message: 'Le mot de passe est incorect !'
      });
    }
    delete result.password;

    // ! generate jsonWebToken
    const JwtAccessToken = process.env.JTW_ACCESS_TOKEN ?? '';
    const userInfosToken = {
      id: result.id,
      email: result.email,
    };
    const accessToken = jwt.sign(
      userInfosToken,
      JwtAccessToken,
      { expiresIn: '10m' }
    );

    // ! store and return result
    // req.session.user = result;
    // req.session.token = accessToken;

    return res.status(200).json({
      message: 'user connecté',
      accessToken,
      result
    });
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
