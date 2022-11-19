import { pool } from '../_config';

export const getRandomProductDatamapper = async () => {
  const config = {
    text: 'SELECT * FROM product ORDER BY RANDOM() LIMIT 5;',
  };
  const result = await pool.query(config);
  return result.rows;
};
