import { useState } from "react";
import styles from "./NoteForm.module.css";

function NoteForm({ addNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newNote = {
      title: title,
      description: description,
      id: Math.random(),
    };
    addNote(newNote);
    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3 className={styles.title}>Мои Заметки</h3>

      <div className={styles.fields}>
        <input
          className={styles.input}
          name="note-title"
          type="text"
          placeholder="Название Заметки"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <textarea
          value={description}
          name="note-content"
          placeholder="Описание Заметки"
          onChange={(event) => setDescription(event.target.value)}
          className={styles.textarea}
        ></textarea>

        <button type="submit" className={styles.button}>
          Добавить заметку
        </button>
      </div>
    </form>
  );
}
export default NoteForm;
