import express from "express";
import router from "./routes";
import { requestLogger, errorHandler } from "./middleware/middleware";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(requestLogger);
app.use("/api", router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
