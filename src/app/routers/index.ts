import { Router, Request, Response } from 'express';

import brandRouter from './brand';
import categoryRouter from './category';
import companyRouter from './company';
import imageRouter from './image';
import productRouter from './product';
import tvaRouter from './tva';
import userRouter from './user';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  return res.status(200).render('homepage');
});

router.use('/api', brandRouter);
router.use('/api', categoryRouter);
router.use('/api', companyRouter);
router.use('/api', imageRouter);
router.use('/api', productRouter);
router.use('/api', tvaRouter);
router.use('/api', userRouter);

router.get('*', (req: Request, res: Response) => {
  return res.status(404).json({ error: 'Not found' });
});

export default router;
