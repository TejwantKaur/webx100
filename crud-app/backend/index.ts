import express from "express";
import cors from "cors";
import authMiddleware from "./middleware/user.js";
import authRoutes from './routes/auth.ts'
import todoRoutes from './routes/todo.ts';

const app = express();
app.use(express.json());

app.use(cors({ origin: "http://localhost:5173" }))

app.use('/auth', authRoutes)
app.use('/todos', authMiddleware, todoRoutes);

app.listen(3000, () => 
  console.log("Server running on port 3000"));
