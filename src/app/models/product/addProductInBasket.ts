import { pool } from '../_config';

export const addProductInBasketDatamapper = async (
  productId: string,
  email: string
) => {
  const configUser = {
    text: 'SELECT "user".id FROM "user" WHERE "email" = $1;',
    values: [email]
  };
  const resultUser = await pool.query(configUser);
  const idUser = resultUser.rows[0].id;

  const configInsertIntoBuy = {
    text:
      'INSERT INTO buy("user_id", "product_id") VALUES ($1, $2) RETURNING *;',
    values: [idUser, productId]
  };
  const resultAddToBasket = await pool.query(configInsertIntoBuy);
  return resultAddToBasket.rows[0];
};
