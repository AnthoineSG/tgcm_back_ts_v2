import { Router } from 'express';

import brandRouter from './brand';
import categoryRouter from './category';

const router = Router();

router.use('/api', brandRouter);
router.use('/api', categoryRouter);

router.get('*', (req, res) => {
  return res.status(404).json({ error: 'Not found' });
});

export default router;
