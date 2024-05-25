import axios from "axios";

const baseUrl = "http://localhost:5000";

const getAllTodo = (setTodo) => {
  axios.get(baseUrl).then(({ data }) => {
    // console.log("data---- ", data)
    setTodo(data);
  });
};

const addTodo = (details, setTodo) => {
  let { title, text, status, dueDate } = details;
  axios
    .post(`${baseUrl}/save`, { title, text, status, dueDate })
    .then((data) => {
      console.log("data---- ", data);
      getAllTodo(setTodo);
    })
    .catch((err) => console.log("Error : ", err));
};

const updateTodo = (todoId, details, setTodo) => {
  let { title, text, status, dueDate } = details;
  axios
    .post(`${baseUrl}/update`, { _id: todoId, text, title, status, dueDate })
    .then((data) => {
      console.log("data---- ", data);
      getAllTodo(setTodo);
    })
    .catch((err) => console.log("Error : ", err));
};

const deleteTodo = (_id, setTodo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      console.log("data---- ", data);
      getAllTodo(setTodo);
    })
    .catch((err) => console.log("Error : ", err));
};

export { getAllTodo, addTodo, updateTodo, deleteTodo };
