import { pool } from '../_config';

export const deleteProductInBasketDatamapper = async (
  productId: string,
  userId: string
) => {
  const config = {
    text:
      'DELETE FROM "buy" WHERE user_id = $1 AND product_id = $2 RETURNING *;',
    values: [userId, productId]
  };
  const result = await pool.query(config);
  return result.rows[0];
};
