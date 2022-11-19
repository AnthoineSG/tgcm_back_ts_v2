import { pool } from '../_config';

export const getOneUserDatamapper = async (userEmail: string) => {
  const config = {
    text: 'SELECT * FROM "user" WHERE email = $1',
    values: [userEmail],
  };
  const result = await pool.query(config);
  return result.rows[0];
};
