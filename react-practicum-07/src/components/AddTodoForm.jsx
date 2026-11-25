import { useState, useContext } from "react";
import { TodosContext } from "../context/TodosContext";

function AddTodoForm() {
  const { addTodo } = useContext(TodosContext);
  const [inputText, setInputText] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    if (inputText === "") {
      return alert("форма пустая!");
    } else {
      addTodo(inputText);
      setInputText("");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={inputText}
        name="text"
        id="textarea"
        placeholder="Write your text"
        onChange={(event) => setInputText(event.target.value)}
      ></textarea>
      <button type="submit">Отправить</button>
    </form>
  );
}
export default AddTodoForm;
