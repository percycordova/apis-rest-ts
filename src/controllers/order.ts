import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getOrders } from "../services/order.services";
import { JwtPayload } from "jsonwebtoken";

interface ResquestExt extends Request {
  user?: string | JwtPayload | Object;
}

const getItems = async (req: ResquestExt, res: Response) => {
  try {
    res.send({
      data: "ESTO SOLO LO VE LAS PERSONAS CON SESSION / JWT",
      user: req.user,
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS", e);
  }
};

export { getItems };
