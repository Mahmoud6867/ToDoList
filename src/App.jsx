import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() =>{
    const localValue = localStorage.getItem('ITEMS')
    if(localValue == null) return []
    
    return JSON.parse(localValue)
  });

  useEffect(()=>{
    localStorage.setItem('ITEMS', JSON.stringify(todos));
  },[todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="flex justify-center bg-slate-700 text-white h-full">
    <div className="w-full lg:w-[1024px] bg-slate-800 p-5 drop-shadow-2xl">
      <TodoForm onSubmit={addTodo} />
      <h1 className="font-bold text-3xl my-5">To do list</h1>
      <TodoList todos={todos}  toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
    </div>
  );
}

export default App;
