import express from "express";

import {
  see,
  search,
  attendance,
  schedule,
  oneSee,
  oneSearch,
  oneAttendance,
  oneSchedule,
} from "../controllers/trainerController";

const trainerRouter = express.Router();

trainerRouter.get("/", see);
trainerRouter.get("/search", search);
trainerRouter.get("/attend", attendance);
trainerRouter.get("/schedule", schedule);
trainerRouter.get("/:id", oneSee);
trainerRouter.get("/:id/search", oneSearch);
trainerRouter.get("/:id/attend", oneAttendance);
trainerRouter.get("/:id/schedule", oneSchedule);

export default trainerRouter;
