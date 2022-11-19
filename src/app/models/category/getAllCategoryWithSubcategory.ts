import { pool } from '../_config';

export const getAllCategoryWithSubcategoryDatamapper = async () => {
  const config = {
    text: 'SELECT * FROM "view_category_sub_category";',
  };
  const result = await pool.query(config);
  return result.rows;
};
