import styles from "./Task.module.css";

function Task({ task, deleteTask }) {
  return (
    <div className={styles.task}>
      <h3 className={styles.title}>{task.title}</h3>
      <p className={styles.description}>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Удалить</button>
    </div>
  );
}

export default Task;
