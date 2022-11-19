import bcrypt from 'bcrypt';

export const bcryptCompare = async (
  password: string,
  userPasswordToCheck: string
) => {
  // ? Compare les 2 mots de passe et retourne === true // false
  return await bcrypt.compare(
    password.toString(),
    userPasswordToCheck.toString()
  );
};
