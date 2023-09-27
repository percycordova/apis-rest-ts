import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth.services";

const registerController = async (req: Request, res: Response) => {
  const { body } = req;
  const responseUser = await registerNewUser(body);
  res.send(responseUser);
};

const loginController = async (req: Request, res: Response) => {
  const { body } = req;
  const { email, password } = body;
  const responseUser = await loginUser({ email, password });
  if (responseUser === "USER_NOT_FOUND") {
    res.status(404).send("USER_NOT_FOUND");
  } else if (responseUser === "PASSWORD_INCORRECT") {
    res.status(404).send("PASSWORD_INCORRECT");
  } else {
    res.send(responseUser);
  }
};

export { registerController, loginController };
