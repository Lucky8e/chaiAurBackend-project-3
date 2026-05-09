import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();
console.log("User routes file loaded");
router.route("/register").post(registerUser);

export default router;
