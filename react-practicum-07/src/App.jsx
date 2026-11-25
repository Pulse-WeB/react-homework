import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { TodosProvider } from "./context/TodosContext";
function App() {
  return (
    <TodosProvider>
      <TodoList></TodoList>
      <AddTodoForm></AddTodoForm>
    </TodosProvider>
  );
}

export default App;
