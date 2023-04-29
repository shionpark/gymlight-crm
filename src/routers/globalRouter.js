import express from "express";

import { home, join } from "../controllers/userController";

import { sales, accounting } from "../controllers/centerController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/logout", logout);
globalRouter.get("/sales", sales);
globalRouter.get("/:id/sales", totalSales);
globalRouter.get("/:id/accounting", accounting);

export default globalRouter;
