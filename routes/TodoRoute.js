// const {
//   getTodo,
//   saveTodo,
//   updateTodo,
//   deleteTodo,
// } = require("../controllers/TodoController.js");
import { Router } from "express";
import {
  getTodo,
  saveTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/TodoController.js";
const routes = Router();

routes.get("/", getTodo);
routes.post("/save", saveTodo);
routes.post("/update", updateTodo);
routes.post("/delete", deleteTodo);

export default routes;
