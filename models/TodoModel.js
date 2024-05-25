import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
  dueDate: {
    type: String,
  },
  toggleComplete: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Todo", todoSchema);
