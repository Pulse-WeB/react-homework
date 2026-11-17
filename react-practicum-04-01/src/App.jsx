import { useState } from "react";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  function updateColor(newColor) {
    setColor(newColor);
  }
  return (
    <div style={{ backgroundColor: color }}>
      <Form updateColor={updateColor} />
    </div>
  );
}

export default App;
