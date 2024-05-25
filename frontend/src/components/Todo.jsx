import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

function Todo({ data, updateMode, deleteMode }) {
  let { title, text, status, dueDate } = data;
  let [toggle, setToggle] = useState(false);
  return (
    <div
      className={
        "w-[90%] sm:w-[500px] p-3 mx-auto my-2 " +
        (toggle ? "bg-green-500" : "bg-zinc-600")
      }
    >
      <div className="flex justify-between text-slate-200">
        <div
          className={
            "center relative inline-block select-none whitespace-nowrap rounded-full px-3.5 py-1.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white " +
            (status == "Low"
              ? "bg-teal-500"
              : status == "completed"
              ? "bg-red-400"
              : "bg-blue-400")
          }
        >
          <div className="mx-auto mt-px">
            <p className="block font-sans text-sm font-medium capitalize leading-none text-white antialiased">
              status : {status}
            </p>
          </div>
        </div>
        {dueDate !== undefined && dueDate !== null && dueDate !== "" ? (
          <span>Due : {dueDate}</span>
        ) : null}
      </div>
      <div className="py-3 flex justify-between items-center gap-1">
        <div className="flex flex-1">
          <span
            className={`w-3 h-3 px-1 mt-[7px] mr-2 border-[1px] cursor-pointer border-black rounded-full ${
              toggle ? "bg-green-600" : "bg-white"
            }`}
            onClick={() => setToggle((prev) => !prev)}
          ></span>
          <h1
            className={`font-semibold text-wrap ${
              toggle ? "line-through" : ""
            }`}
          >
            title:{title}
          </h1>
          <h1
            className={`font-semibold text-wrap ${
              toggle ? "line-through" : ""
            }`}
          >
            description:{text}
          </h1>
        </div>
        <div className="flex gap-3">
          <BiEdit className="text-xl cursor-pointer" onClick={updateMode} />
          <AiFillDelete
            className="text-xl cursor-pointer"
            onClick={deleteMode}
          />
        </div>
      </div>
    </div>
  );
}

export default Todo;
