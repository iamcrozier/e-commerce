import express from "express";
import { signUp, login } from "../controllers/UserController.js";

const userRouter = express.Router();

userRouter.post("/signup", signUp);
userRouter.post("/login", login);

export default userRouter;
