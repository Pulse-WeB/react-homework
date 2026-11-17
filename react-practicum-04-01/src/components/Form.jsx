import { useState } from "react";
import "./Form.css";
function Form({ updateColor }) {
  const [newColor, setNewColor] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    updateColor(newColor);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="color-input"
        type="color"
        placeholder="Введите Цвет"
        value={newColor}
        onChange={(event) => setNewColor(event.target.value)}
      />
      <button type="submit">Выбрать</button>
    </form>
  );
}
export default Form;
