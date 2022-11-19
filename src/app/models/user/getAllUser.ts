import { pool } from '../_config';

export const getAllUserDatamapper = async () => {
  const config = {
    text: 'SELECT * FROM "user";',
  };
  const result = await pool.query(config);
  return result.rows;
};
