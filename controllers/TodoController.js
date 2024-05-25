import TodoModel from "../models/TodoModel.js";

export const getTodo = async (req, res) => {
  const todo = await TodoModel.find();
  res.send(todo);
};

export const saveTodo = async (req, res) => {
  const { title, text, status, dueDate } = req.body;

  TodoModel.create({ title, text, status, dueDate }).then((data) => {
    console.log("Successfully Added Todo: " + data);
    res.send(data);
  });
};

export const updateTodo = async (req, res) => {
  const { _id, title, text, status, dueDate } = req.body;
  TodoModel.findByIdAndUpdate(_id, { title, text, status, dueDate })
    .then(() => res.send("Updated Successfully!"))
    .catch((err) => console.log(err));
};

export const deleteTodo = async (req, res) => {
  const { _id } = req.body;
  TodoModel.findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully!"))
    .catch((err) => console.log(err));
};
