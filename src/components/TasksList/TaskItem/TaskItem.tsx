import { Calendar, Trash } from "phosphor-react";
import cn from "classnames";

import Radio from "../../Radio";
import { Task } from "../../../types/Task";

import styles from "./TaskItem.module.css";

type Props = {
  task: Task;
  onCheckedChange: (task: Task) => void;
  onDeleteTask: (task: Task) => void;
};

export default function TaskItem({
  task,
  onCheckedChange,
  onDeleteTask,
}: Props) {
  function handleCheckedChange() {
    onCheckedChange(task);
  }

  function handleDeleteTask() {
    onDeleteTask(task);
  }

  return (
    <li className={styles.taskItem}>
      <Radio checked={Boolean(task.checkedAt)} onClick={handleCheckedChange} />
      <p className={task.checkedAt ? styles.checked : undefined}>
        {task.content}
      </p>
      <div className={styles.actions}>
        <button
          title="Editar data"
          className={cn([styles.actionButton, styles.editDateTask])}
          onClick={handleDeleteTask}
        >
          <Calendar size={16} />
        </button>
        <button
          title="Excluir tarefa"
          className={cn([styles.actionButton, styles.deleteTask])}
          onClick={handleDeleteTask}
        >
          <Trash size={16} />
        </button>
      </div>
    </li>
  );
}
