import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/TodoRoute.js";

const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://0.0.0.0:27017/Todo")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
