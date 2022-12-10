import { Router } from "npm:express";
import { deleteTask, getTaskById, getTasks, saveTask, updateTask } from "../controllers/tasks.controller.ts";
const router = Router();

router.get("/tasks", getTasks);
router.get("/tasks/:id", getTaskById);
router.post("/tasks", saveTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

export default router;
