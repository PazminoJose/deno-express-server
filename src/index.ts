import express from "npm:express";
import tasksRouter from "./routes/tasks.routes.ts";

const app = express();
app.use(express.json());
app.use(tasksRouter);
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
