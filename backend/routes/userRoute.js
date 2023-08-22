import express from "express";
import { registerUser,loginUser, logout } from "../controllers/userController";

const userRouter = express.Router();

userRouter.post("/register",registerUser);
userRouter.get("/login",loginUser);
userRouter.get("/logout",logout)
export default userRouter;


