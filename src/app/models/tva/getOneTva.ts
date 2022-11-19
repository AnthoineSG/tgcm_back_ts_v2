import { pool } from '../_config';

export const getOneTvaDatamapper = async (indice: string) => {
  const config = {
    text: 'SELECT * FROM "tva" WHERE "rate" = $1;',
    values: [indice],
  };
  const result = await pool.query(config);
  return result.rows[0];
};
