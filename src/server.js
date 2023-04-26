import "./db";
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import trainerRouter from "./routers/trainerRouter";
import userRouter from "./routers/userRouter";

const app = express();
const logger = morgan("dev");
app.use(logger);

// console.log(process.cwd() + "/src/views");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use("/", globalRouter);
app.use("/trainers", trainerRouter);
app.use("/users", userRouter);

const PORT = 4001;

const handleListening = () =>
  console.log(`✅ Server listening on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
