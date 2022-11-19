import { pool } from '../_config';

export const getAllCompanyDatamapper = async () => {
  const query = {
    text: 'SELECT * FROM "company";',
  };
  const result = await pool.query(query);
  return result.rows;
};
