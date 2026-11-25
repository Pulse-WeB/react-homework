import { createContext, useState } from "react";
export const TodosContext = createContext();
export function TodosProvider({ children }) {
  const [todoList, setTodoList] = useState([]);
  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
  }
  function deleteTodo(id) {
    const newList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newList);
  }
  function toggleTodo(id) {
    const newList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodoList(newList);
  }
  return (
    <TodosContext.Provider
      value={{ todoList, addTodo, deleteTodo, toggleTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
}
