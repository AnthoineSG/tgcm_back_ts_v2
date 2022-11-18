import { Router } from 'express';

import brandRouter from './brand';

const router = Router();

router.use('/api', brandRouter);

router.get('*', (req, res) => {
  return res.status(404).json({ error: 'Not found' });
});

export default router;
