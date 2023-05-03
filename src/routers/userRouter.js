import express from "express";

import {
  edit,
  upload,
  remove,
  attend,
  lockers,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/upload", upload);
userRouter.get("/remove", remove);
userRouter.get("/attend", attend);
userRouter.get("/lockers", lockers);

export default userRouter;
