import { pool } from '../_config';

export const getAllProductDatamapper = async () => {
  const config = {
    text: `SELECT
        "brand"."brand_name" AS "brand_name",
        "sub_category"."name" AS "sub_category_name",
        "product".*
      FROM "product"
      INNER JOIN "brand"
        ON "brand"."id" = "product"."brand_id"
      INNER JOIN "sub_category"
        ON "sub_category"."id" = "product"."sub_category_id";`,
  };
  const result = await pool.query(config);
  return result.rows;
};
