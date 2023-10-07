import { useState } from "react";

function TodoForm({onSubmit}) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if(newItem ==='') return
    onSubmit(newItem)
    setNewItem("")
  }

  return (
    <div className="my-5">
      <form onSubmit={handleSubmit}>
        <div className="w-full">
          <label htmlFor="item" className="w-full font-bold text-3xl ">New Item</label>
          <input
          className="w-full my-3 rounded text-black drop-shadow-2xl"
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Enter the item"
          ></input>
        </div>
        <div className="flex justify-center">
        <button className="rounded w-20 bg-green-600 shadow font-semibold text-lg drop-shadow-2xl">Add</button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
