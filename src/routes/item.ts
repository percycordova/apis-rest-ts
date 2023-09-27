import { Request, Response, Router } from "express";
import {
  postItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from "../controllers/item";
import { logMiddleware } from "../middleware/log";

const router = Router();

// http://localhost:3001/item [GET]

router.get("/", getItems);
router.get("/:id", logMiddleware, getItem);
router.post("/", postItem);
router.delete("/:id", deleteItem);
router.put("/:id", updateItem);

export { router };
