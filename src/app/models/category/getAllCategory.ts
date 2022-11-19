import { pool } from '../_config';

export const getAllCategoryDatamapper = async () => {
  const config = {
    text: 'SELECT * FROM "category";',
  };
  const result = await pool.query(config);
  return result.rows;
};
