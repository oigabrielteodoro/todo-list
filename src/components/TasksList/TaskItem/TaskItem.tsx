import { Trash } from "phosphor-react";

import { Task } from "../../../types/Task";
import Radio from "../../Radio";

import styles from "./TaskItem.module.css";

type Props = {
  task: Task;
  onCheckedChange: (task: Task) => void;
};

export default function TaskItem({ task, onCheckedChange }: Props) {
  function handleCheckedChange() {
    onCheckedChange(task);
  }

  console.log(task);

  return (
    <li className={styles.taskItem}>
      <Radio checked={Boolean(task.checkedAt)} onClick={handleCheckedChange} />
      <p className={task.checkedAt ? styles.checked : undefined}>
        {task.content}
      </p>
      <button title="Excluir tarefa" className={styles.deleteTask}>
        <Trash size={16} />
      </button>
    </li>
  );
}
