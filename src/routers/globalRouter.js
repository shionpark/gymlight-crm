import express from "express";

import {
  home,
  sales,
  locker,
  accounting,
} from "../controllers/centerController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/sales", sales);
globalRouter.get("/:id/lockers", locker);
globalRouter.get("/:id/accounting", accounting);
// globalRouter.get("/join", join);
// globalRouter.get("/login", login);
// globalRouter.get("/logout", logout);

export default globalRouter;
