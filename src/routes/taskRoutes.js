import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  createTask,
  deleteTask,
  getTasks,
} from "../controllers/taskController.js";

const router = express.Router();

// Apply auth middleware
router.use(authMiddleware);

// POST /api/tasks
router.post("/", async (req, res) => {
  // - Create task
  // - Attach owner = req.user._id
  return createTask(req, res);
});

// GET /api/tasks
router.get("/", async (req, res) => {
  // - Return only tasks belonging to req.user
  return getTasks(req, res);
});

// DELETE /api/tasks/:id
router.delete("/:id", async (req, res) => {
  // - Check ownership
  // - Delete task
  return deleteTask(req, res);
});

export default router;
