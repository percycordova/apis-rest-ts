import { Router } from "express";
import multerMiddleware from "../middleware/file";
import { checkJwt } from "../middleware/session";
import { getFile } from "../controllers/upload";

const router = Router();

router.post("/", checkJwt, multerMiddleware.single("myfile"), getFile);

export { router };
