import express from "express";

import { see, edit, upload, remove } from "../controllers/programController";

const programRouter = express.Router();

programRouter.get("/", see);
programRouter.get("/edit", edit);
programRouter.get("/upload", upload);
programRouter.get("/remove", remove);

export default programRouter;
