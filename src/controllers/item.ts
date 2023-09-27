import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  getCar,
  getCars,
  insertCar,
  updateCar,
  deleteCar,
} from "../services/item.services";

const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const responseItem = await getCar(id);
    const data = responseItem ? responseItem : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM", e);
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const responseItem = await getCars();
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS", e);
  }
};

const postItem = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const responseItem = await insertCar(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_CREATE_ITEM", e);
  }
};

const updateItem = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const { id } = req.params;
    const responseItem = await updateCar(id, body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM", e);
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const responseItem = await deleteCar(id);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM", e);
  }
};

export { getItem, getItems, postItem, updateItem, deleteItem };
