import { Router } from "express";
import { loginController, registerController } from "../controllers/auth";

const router = Router();

router.post("/login", loginController);
router.post("/register", registerController);

module.exports = { router };
