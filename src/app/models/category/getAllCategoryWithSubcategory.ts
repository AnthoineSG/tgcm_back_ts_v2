import { pool } from '../_config';

export const getAllCategoryWithSubcategoryDatamapper = async () => {
  const query = {
    text: 'SELECT * FROM "view_category_sub_category";'
  };
  const result = await pool.query(query);
  return result.rows;
};
