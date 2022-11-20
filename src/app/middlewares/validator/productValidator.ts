import { NextFunction, Request, Response } from 'express';
import { productSchema } from '../../services';

/**
 * Middleware qui verifie que les data du formulaire sont valide
 * @param {*} req Recupere le body du formulaire et le compare avec le schema predefinie
 * @param {*} next Si tout est ok passe a la suite
 * @returns Retourne en cas d'erreur
 */
export const productValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = productSchema.validate(req.body);
    if (body.error) {
      throw new Error('Le schema du product est invalide');
    } else {
      next();
    }
  } catch (error) {
    return res.status(400).json({ error: 'Validator schema invalide' });
  }
};
