import express from "express";
import morgan from "morgan";

const app = express();
const logger = morgan("dev");
app.use(logger);

const PORT = 4001;

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
