import express from "express";
import {
  see,
  edit,
  logout,
  remove,
  attendance,
  schedule,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/delete", remove);
userRouter.get("/logout", logout);
userRouter.get("/:id(\\d+)", see);
userRouter.get("/:id(\\d+)/attend", attendance);
userRouter.get("/:id(\\d+)/schedule", schedule);

export default userRouter;
