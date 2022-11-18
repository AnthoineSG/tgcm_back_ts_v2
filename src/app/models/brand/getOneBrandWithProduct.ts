import { pool } from '../_config';

export const getOneBrandWithProductDatamapper = async (id: string) => {
  const config = {
    text: `SELECT
        "brand".*,
        "product".*,
        (SELECT * FROM "func_price_ttc_for_one"($1) AS price_ttc)
      FROM "brand"
      INNER JOIN "product" ON "product"."brand_id" = "brand"."id"
      WHERE "brand"."id" = $1;`,
    values: [id],
  };
  const result = await pool.query(config);
  return result.rows;
};
