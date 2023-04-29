import express from "express";

import {
  see,
  edit,
  upload,
  attend,
  schedule,
} from "../controllers/trainerController";

const trainerRouter = express.Router();

trainerRouter.get("/", see);
trainerRouter.get("/edit", edit);
trainerRouter.get("/upload", upload);
trainerRouter.get("/attend", attend);
trainerRouter.get("/schedule", schedule);

export default trainerRouter;
