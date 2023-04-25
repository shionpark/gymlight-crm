import express from "express";
import { sales } from "../controllers/centerController";

const centerRouter = express.Router();

centerRouter.get("/:id/sales", sales);

export default centerRouter;
