import { pool } from '../_config';

export const getAllCompanyDatamapper = async () => {
  const config = {
    text: 'SELECT * FROM "company";',
  };
  const result = await pool.query(config);
  return result.rows;
};
