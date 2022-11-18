import { pool } from '../_config';

export const getOneBrandDatamapper = async (id: string) => {
  const config = {
    text: 'SELECT * FROM "brand" WHERE "id" = $1;',
    values: [id],
  };
  const result = await pool.query(config);
  return result.rows[0];
};
