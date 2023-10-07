import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list-none">
      {todos.length === 0 && "No items on your to do list"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
 