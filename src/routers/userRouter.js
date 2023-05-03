import express from "express";

import { edit, upload, remove } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/upload", upload);
userRouter.get("/remove", remove);

export default userRouter;
