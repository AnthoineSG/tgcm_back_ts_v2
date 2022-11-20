import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

/**
  * Middleware qui verifie qu'un utilisateur est connecter avec de passer au controller
  * @param {*} req Recupere la session de l'utilisateur
  * @param {*} next Si l'utilisateur est connecter passe a la suite (au controller)
  * @returns Retourne si l'utilisateur n'est pas connecter
  */
export const userConnect = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers['authorization'];
    console.log(authHeader);
    const token = authHeader && authHeader.split(' ')[1] || '';
    if (token === null) return res.sendStatus(401);
    const JwtAccessToken = process.env.JTW_ACCESS_TOKEN || '';
    jwt.verify(token, JwtAccessToken);
    next();
  } catch (error) {
    return res.status(403).json({ error });
  }
};
