import express from "express";
import morgan from "morgan";

const app = express();
const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();
const handleHome = (req, res) => res.send("Home");
globalRouter.get("/", handleHome);

const userRouter = express.Router();
const handleEditUser = (req, res) => res.send("Edit User");
userRouter.get("/edit", handleEditUser);

const centerRouter = express.Router();
const handleSalesCenter = (req, res) => res.send("Sales");
centerRouter.get("/:id/sales", handleSalesCenter);

app.use("/", globalRouter);
app.use("/centers", centerRouter);
app.use("/users", userRouter);

const PORT = 4001;

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
