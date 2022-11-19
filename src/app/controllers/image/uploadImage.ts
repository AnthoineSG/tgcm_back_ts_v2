import { Request, Response } from 'express';

import { uploadImageDatamapper } from '../../models';

import { ImagePathParams } from '../../types';

export const uploadImageController = async (
  req: Request<{}, {}, ImagePathParams>,
  res: Response
) => {
  try {
    const imagePath = req.body.image;

    const result = await uploadImageDatamapper(imagePath);

    if (!result) {
      return res.status(404).json({ error: 'Image not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    console.log(error);

    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
