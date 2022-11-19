import { pool } from '../_config';

export const chechUserInfosDatamapper = async (email: string) => {
  const config = {
    text: 'SELECT * FROM "user" WHERE email = $1;',
    values: [email]
  };
  const result = await pool.query(config);
  return result.rows[0];
};
