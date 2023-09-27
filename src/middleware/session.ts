import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface ResquestExt extends Request {
  user?: string | JwtPayload | Object;
}

const checkJwt = (req: ResquestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    const isUser = verifyToken(`${jwt}`);
    console.log(isUser);

    if (!isUser) {
      res.status(401);
      res.send("SESSION_NO_VALID");
    } else {
      req.user = isUser;
      next();
    }
  } catch (e) {
    res.status(400);
    res.send("SESSION_NO_VALID");
    console.log(e);
  }
};

export { checkJwt };
