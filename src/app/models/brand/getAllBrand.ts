import { pool } from '../_config';

export const getAllBrandDatamapper = async () => {
  const config = {
    text: 'SELECT * FROM "brand";',
  };
  const result = await pool.query(config);
  return result.rows;
};
