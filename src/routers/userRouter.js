import express from "express";

import {
  see,
  edit,
  upload,
  lockers,
  attendance,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", see);
userRouter.get("/edit", edit);
userRouter.get("/upload", upload);
userRouter.get("/lockers", lockers);
userRouter.get("/attend", attendance);

export default userRouter;
