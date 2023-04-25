import express from "express";
import { home } from "../controllers/centerController";

const globalRouter = express.Router();

globalRouter.get("/", home);

export default globalRouter;
