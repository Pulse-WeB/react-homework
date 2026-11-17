import styles from "./Note.module.css";
import { useState } from "react";

function Note({ note }) {
  const [isDone, setIsDone] = useState(false);
  function checkStatus(event) {
    if (event === true) {
      setIsDone(true);
    } else {
      setIsDone(false);
    }
  }
  return (
    <div className={`${styles.note} ${isDone ? styles.completed : ""}`}>
      <h3 className={styles.title}>{note.title}</h3>
      <p className={styles.description}>{note.description}</p>
      <input
        type="checkbox"
        name="checkbox"
        id="2"
        onChange={(event) => checkStatus(event.target.checked)}
      />
    </div>
  );
}

export default Note;
