import { pool } from '../_config';

export const getAllTvaDatamapper = async () => {
  const config = {
    text: 'SELECT * FROM "tva";'
  };
  const result = await pool.query(config);
  return result.rows;
};
