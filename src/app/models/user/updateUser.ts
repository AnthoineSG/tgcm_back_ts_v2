import { pool } from '../_config';

import { User } from '../../types';

export const updateUserDatamapper = async (email: string, newUser: User) => {
  const oldConfig = {
    text: `SELECT * FROM "public"."user"
      WHERE "email" = $1;`,
    values: [email],
  };
  const oldUser = await pool.query(oldConfig);
  if (oldUser.rowCount === 0) {
    // eslint-disable-next-line quotes
    throw new Error("L'utilisateur n'existe pas !");
  }

  let oldFirstname = oldUser.rows[0].firstname;
  if (newUser.firstname) {
    oldFirstname = newUser.firstname;
  }
  let oldLastname = oldUser.rows[0].lastname;
  if (newUser.lastname) {
    oldLastname = newUser.lastname;
  }
  let oldBirthday = oldUser.rows[0].birthday;
  if (newUser.birthday) {
    oldBirthday = newUser.birthday;
  }
  let oldPassword = oldUser.rows[0].password;
  if (newUser.password) {
    oldPassword = newUser.password;
  }
  let oldPhoneNumber = oldUser.rows[0].phone_number;
  if (newUser.phone_number) {
    oldPhoneNumber = newUser.phone_number;
  }
  let oldAddress = oldUser.rows[0].address;
  if (newUser.address) {
    oldAddress = newUser.address;
  }
  let oldPostalCode = oldUser.rows[0].postal_code;
  if (newUser.postal_code) {
    oldPostalCode = newUser.postal_code;
  }
  let oldCity = oldUser.rows[0].city;
  if (newUser.city) {
    oldCity = newUser.city;
  }
  let oldCountry = oldUser.rows[0].country;
  if (newUser.country) {
    oldCountry = newUser.country;
  }

  const config = {
    text: `UPDATE public."user" SET
        "firstname" = $1, "lastname" = $2, "birthday" = $3,
        "password" = $4, "phone_number" = $5, "address" = $6,
        "postal_code" = $7, "city" = $8, "country" = $9
      WHERE "user"."email" = $10
      RETURNING *;`,
    values: [
      oldFirstname, oldLastname, oldBirthday, oldPassword, oldPhoneNumber,
      oldAddress, oldPostalCode, oldCity, oldCountry, email,
    ],
  };
  const result = await pool.query(config);
  return result.rows[0];
};
