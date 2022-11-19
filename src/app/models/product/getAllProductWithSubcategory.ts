import { pool } from '../_config';

export const getAllProductWithSubcategoryDatamapper = async (name: string) => {
  const config = {
    text: `SELECT
        "sub_category"."name" AS "sub_category_name",
        json_agg(to_jsonb("brand") || to_jsonb("product".*)) AS "product"
      FROM "product"
      INNER JOIN "brand"
        ON "brand"."id" = "product"."brand_id"
      INNER JOIN "sub_category"
        ON "sub_category"."id" = "product"."sub_category_id"
      WHERE "sub_category"."name" = $1
      GROUP BY "sub_category"."name";`,
    values: [name],
  };
  const result = await pool.query(config);
  return result.rows[0];
};
