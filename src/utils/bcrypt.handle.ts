import { hash, compare } from "bcryptjs";

const encrypt = async (pass: string) => {
  const passwordHash = await hash(pass, 10);
  return passwordHash;
};

const verifyIsCorrect = async (pass: string, passHash: string) => {
  const isCorrect = await compare(pass, passHash);
  return isCorrect;
};

export { encrypt, verifyIsCorrect };
