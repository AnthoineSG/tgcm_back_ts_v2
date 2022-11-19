import { pool } from '../_config';

export const getAllSubcategoryDatamapper = async () => {
  const query = {
    text: 'SELECT * FROM "sub_category";'
  };
  const result = await pool.query(query);
  return result.rows;
};
