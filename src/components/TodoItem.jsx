import React from "react";

function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li className="w-full my-3 flex flex-wrap justify-between drop-shadow-2xl  rounded bg-fuchsia-800 p-2">
      <div className="w-3/4 flex justify-start bg-red">
        <label className="text-xl w-full">
          <p className="text-ellipsis overflow-hidden w-full">{title}</p>
        </label>
      </div>
      <div className="w-1/8 mx-2 flex justify-center ">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
      </div>
      <div className="w-1/8 flex justify-center">
        <button
          className="rounded w-20 bg-red-600 shadow font-semibold text-lg drop-shadow-2xl"
          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
