import { Request, Response } from 'express';

import { findPublicIdDatamapper } from '../../models';

import { PublicIdParams } from '../../types';

export const findProductIdController = async (
  req: Request<{}, {}, PublicIdParams>,
  res: Response
) => {
  try {
    const publicId = req.body.public_id;

    const result = await findPublicIdDatamapper(publicId);

    if (!result[0]) {
      return res.status(404).json({ error: 'Image not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
