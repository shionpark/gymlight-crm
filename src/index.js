import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import centerRouter from "./routers/centerRouter";
import userRouter from "./routers/userRouter";

const app = express();
const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);
app.use("/centers", centerRouter);
app.use("/users", userRouter);

const PORT = 4001;

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
