import { NextFunction, Request, Response } from 'express';

import { patchUserSchema, userSchema } from '../../services';

/**
 * Middleware qui verifie que les data du formulaire sont valide
 * @param {*} req Recupere le body du formulaire et le compare avec le schema predefinie
 * @param {*} next Si tout est ok passe a la suite
 * @returns Retourne en cas d'erreur
 */
export const userValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // On envoi le formulaire a notre schema
    const body = userSchema.validate(req.body);
    // Si Joi nous renvoie une erreur on arrete la fonction
    if (body.error) {
      throw new Error('Le schema du user est invalide');
    } else {
      // Si Joi valide et on passe a la suite
      next();
    }
  } catch (error) {
    return res.status(400).json({ error: 'Validator schema invalide' });
  }
};

/**
 * Middleware qui verifie que les data du formulaire sont valide
 * @param {*} req Recupere le body du formulaire et le compare avec le schema predefinie
 * @param {*} next Si tout est ok passe a la suite
 * @returns Retourne en cas d'erreur
 */
export const patchUserValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = patchUserSchema.validate(req.body);
    if (body.error) {
      throw new Error('Le schema du patch est invalide');
    } else {
      next();
    }
  } catch (error) {
    return res.status(400).json({ error: 'Validator schema invalide' });
  }
};
