import type { Task } from "../../types/Task";

import EmptyState from "./EmptyState";

import styles from "./TasksList.module.css";

type Props = {
  tasks: Task[];
};

export default function TasksList({ tasks }: Props) {
  const isEmpty = tasks.length === 0;

  return (
    <section className={styles.tasks}>
      <header>
        <strong className={styles.createdCount}>
          Tarefas criadas <span className={styles.countNumber}>0</span>
        </strong>
        <strong className={styles.completedCount}>
          Concluídas <span className={styles.countNumber}>0</span>
        </strong>
      </header>
      <hr />
      {isEmpty ? (
        <EmptyState />
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.content}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
