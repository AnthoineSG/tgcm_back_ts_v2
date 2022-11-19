import { pool } from '../_config';

export const getUserWithBasketDatamapper = async (userEmail: string) => {
  const config = {
    text: 'SELECT * FROM "func_basket_final_price"($1);',
    values: [userEmail]
  };
  const result = await pool.query(config);
  return result.rows[0];
};
