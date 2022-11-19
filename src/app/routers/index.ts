import { Router } from 'express';

import brandRouter from './brand';
import categoryRouter from './category';
import companyRouter from './company';
import imageRouter from './image';
import tvaRouter from './tva';

const router = Router();

router.use('/api', brandRouter);
router.use('/api', categoryRouter);
router.use('/api', companyRouter);
router.use('/api', imageRouter);
router.use('/api', tvaRouter);

router.get('*', (req, res) => {
  return res.status(404).json({ error: 'Not found' });
});

export default router;
