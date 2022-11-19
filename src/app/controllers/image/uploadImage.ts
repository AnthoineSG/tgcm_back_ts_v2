import { Request, Response } from 'express';

import { uploadImageDatamapper } from '../../models';

export const uploadImageController = async (req: Request, res: Response) => {
  try {
    const imagePath = req.body.image;

    console.log(imagePath);

    const result = await uploadImageDatamapper(imagePath);

    if (!result[0]) {
      return res.status(404).json({ error: 'Company not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    console.log(error);

    return res.status(500).json({ error: 'Somthing went wrong' });
  }
};
