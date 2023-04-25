import express from "express";
import {
  center,
  locker,
  attendance,
  accounting,
} from "../controllers/centerController";

const centerRouter = express.Router();

centerRouter.get("/:id", center);
centerRouter.get("/:id/lockers", locker);
centerRouter.get("/:id/attend", attendance);
centerRouter.get("/:id/accounting", accounting);

export default centerRouter;
