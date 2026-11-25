import { useState, useContext } from "react";
import { TodosContext } from "../context/TodosContext";
function TodoList() {
  const { todoList, deleteTodo, toggleTodo } = useContext(TodosContext);
  return (
    <div>
      {todoList.map((listItem) => {
        return (
          <div key={listItem.id}>
            <p>{listItem.text}</p>
            <button
              onClick={() => {
                deleteTodo(listItem.id);
              }}
            >
              Удалить задачу
            </button>
            <input
              type="checkbox"
              name="checkbox"
              checked={listItem.completed}
              onChange={() => toggleTodo(listItem.id)}
            />
          </div>
        );
      })}
    </div>
  );
}
export default TodoList;
