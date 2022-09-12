import { ChangeEvent, useState } from "react";
import { Trash } from "phosphor-react";

import Radio from "../../Radio";
import { Task } from "../../../types/Task";

import styles from "./TaskItem.module.css";
import EditDateTask from "../EditDateTask/EditDateTask";
import TaskItemAction from "../TaskItemAction";

type Props = {
  task: Task;
  onEditDateTask: (task: Task) => void;
  onCheckedChange: (task: Task) => void;
  onDeleteTask: (task: Task) => void;
};

export default function TaskItem({
  task,
  onEditDateTask,
  onCheckedChange,
  onDeleteTask,
}: Props) {
  const [newTaskContent, setNewTaskContent] = useState(task.content);

  function handleCheckedChange() {
    onCheckedChange(task);
  }

  function handleDeleteTask() {
    onDeleteTask(task);
  }

  function handleNewTaskContentChange(
    event: ChangeEvent<HTMLParagraphElement>
  ) {
    setNewTaskContent(event.target.textContent ?? "");
  }

  return (
    <li className={styles.taskItem}>
      <Radio checked={Boolean(task.checkedAt)} onChange={handleCheckedChange} />
      <p
        className={task.checkedAt ? styles.checked : undefined}
        contentEditable
        onInput={handleNewTaskContentChange}
        onBlur={() => onEditDateTask({ ...task, content: newTaskContent })}
        dangerouslySetInnerHTML={{ __html: newTaskContent }}
      />
      <div className={styles.actions}>
        <EditDateTask task={task} onEditDateTask={onEditDateTask} />
        <TaskItemAction
          title="Excluir tarefa"
          className={styles.deleteTask}
          onClick={handleDeleteTask}
        >
          <Trash size={16} />
        </TaskItemAction>
      </div>
    </li>
  );
}
