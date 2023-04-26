import express from "express";

import {
  see,
  search,
  attendance,
  oneSee,
  oneSearch,
  oneAttendance,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", see);
userRouter.get("/search", search);
userRouter.get("/attend", attendance);
userRouter.get("/:id", oneSee);
userRouter.get("/:id/search", oneSearch);
userRouter.get("/:id/attend", oneAttendance);

export default userRouter;
