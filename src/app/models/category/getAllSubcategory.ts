import { pool } from '../_config';

export const getAllSubcategoryDatamapper = async () => {
  const config = {
    text: 'SELECT * FROM "sub_category";',
  };
  const result = await pool.query(config);
  return result.rows;
};
