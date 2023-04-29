import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import trainerRouter from "./routers/trainerRouter";
import userRouter from "./routers/userRouter";

const app = express();
const logger = morgan("dev");
app.use(logger);

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use("/", globalRouter);
app.use("/:id/users", userRouter);
app.use("/:id/trainers", trainerRouter);

export default app;
