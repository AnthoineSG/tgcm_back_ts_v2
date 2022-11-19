import { pool } from '../_config';

export const getOneProductDatamapper = async (id: string) => {
  const config = {
    text: 'SELECT * FROM "func_product_price_ttc"($1)',
    values: [id],
  };
  const result = await pool.query(config);
  return result.rows[0];
};
