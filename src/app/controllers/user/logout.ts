import { Request, Response } from 'express';

export const logoutController = async (req: Request, res: Response) => {
  try {
    // if (!req.session.user) {
    //   return res.status(400).json({ message: 'user n\'est pas connecté' });
    // }
    // req.session.destroy();

    return res.status(200).json({ message: 'user deconnecté' });
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
