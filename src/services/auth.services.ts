import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verifyIsCorrect } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name }: User) => {
  const checkUser = await UserModel.findOne({ email });
  if (checkUser) return "ALREADY_USER";
  const passHash = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: passHash,
    name,
  });
  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const checkUser = await UserModel.findOne({ email });
  if (!checkUser) return "USER_NOT_FOUND";
  const passwordHash = checkUser.password;
  const isCorrect = await verifyIsCorrect(password, passwordHash);
  if (!isCorrect) return "PASSWORD_INCORRECT";
  const token = await generateToken(checkUser.email);
  const data = {
    user: {
      name: checkUser.name,
      email: checkUser.email,
      description: checkUser.description,
    },
    token,
  };
  return data;
};

export { registerNewUser, loginUser };
