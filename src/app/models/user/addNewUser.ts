import { pool } from '../_config';

import { User } from '../../types';

export const addNewUserDatamapper = async (user: User) => {
  const config = {
    text: `INSERT INTO "user" (
        "firstname", "lastname", "birthday", "email", "password",
        "phone_number", "address", "postal_code", "city", "country"
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10
      )
      RETURNING *;`,
    values: [
      user.firstname, user.lastname, user.birthday, user.email,
      user.password, user.phone_number, user.address,
      user.postal_code, user.city, user.country,
    ],
  };
  const savedUser = await pool.query(config);
  return savedUser.rows[0];
};
