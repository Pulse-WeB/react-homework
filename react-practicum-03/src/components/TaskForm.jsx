import { useState } from "react";
import styles from "./TaskForm.module.css";
function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newTask = {
      title: title,
      description: description,
      id: Math.random(),
    };
    addTask(newTask);
    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3 className={styles.title}>Мои задачи</h3>

      <div className={styles.fields}>
        <input
          className={styles.input}
          name="task-title"
          type="text"
          placeholder="Название Задачи"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <textarea
          value={description}
          name="task-content"
          placeholder="Описание Задачи"
          onChange={(event) => setDescription(event.target.value)}
          className={styles.textarea}
        ></textarea>

        <button type="submit" className={styles.button}>
          Добавить задачу
        </button>
      </div>
    </form>
  );
}
export default TaskForm;
