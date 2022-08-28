import type { Task } from "../../types/Task";

import EmptyState from "./EmptyState";
import TaskItem from "./TaskItem/TaskItem";

import styles from "./TasksList.module.css";

type Props = {
  tasks: Task[];
  onCheckedChange: (task: Task) => void;
  onDeleteTask: (task: Task) => void;
};

export default function TasksList({
  tasks,
  onCheckedChange,
  onDeleteTask,
}: Props) {
  const createdTasksCount = tasks.length;
  const completedTasksCount = tasks.filter((task) =>
    Boolean(task.checkedAt)
  ).length;

  const isEmpty = tasks.length === 0;

  return (
    <section className={styles.tasks}>
      <header>
        <strong className={styles.createdCount}>
          Tarefas criadas
          <span className={styles.countNumber}>{createdTasksCount}</span>
        </strong>
        <strong className={styles.completedCount}>
          Concluídas
          <span className={styles.countNumber}>
            {createdTasksCount === 0
              ? "0"
              : `${completedTasksCount} de ${createdTasksCount}`}
          </span>
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
              onDeleteTask={onDeleteTask}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
