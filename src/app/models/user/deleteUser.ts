import { pool } from '../_config';

export const deleteUserDatamapper = async (userEmail: string) => {
  const config = {
    text:
      `DELETE FROM "user" WHERE "email" = $1
      RETURNING
        "firstname",
        "lastname",
        "birthday",
        "email",
        "password",
        "phone_number",
        "address",
        "postal_code",
        "city",
        "country";`,
    values: [userEmail]
  };
  const result = await pool.query(config);
  return result.rows[0];
};
