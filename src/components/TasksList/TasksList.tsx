import type { Task } from "../../types/Task";

import EmptyState from "./EmptyState";
import TaskItem from "./TaskItem/TaskItem";

import styles from "./TasksList.module.css";

type Props = {
  tasks: Task[];
  onCheckedChange: (task: Task) => void;
};

export default function TasksList({ tasks, onCheckedChange }: Props) {
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
      {isEmpty ? (
        <EmptyState />
      ) : (
        <ul className={styles.tasksList}>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onCheckedChange={onCheckedChange}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
