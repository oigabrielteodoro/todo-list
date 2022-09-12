import { ChangeEvent, useState } from "react";
import { Trash } from "phosphor-react";

import Radio from "../../Radio";
import { Task } from "../../../types/Task";

import styles from "./TaskItem.module.css";
import EditDateTask from "../EditDateTask/EditDateTask";
import TaskItemAction from "../TaskItemAction";

type Props = {
  task: Task;
  onEditTask: (task: Task) => void;
  onDeleteTask: (task: Task) => void;
  onCheckedChange: (task: Task) => void;
};

export default function TaskItem({
  task,
  onEditTask,
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

  function handleEditTaskContent() {
    onEditTask({ ...task, content: newTaskContent });
  }

  return (
    <li className={styles.taskItem}>
      <Radio checked={Boolean(task.checkedAt)} onChange={handleCheckedChange} />
      <p
        className={task.checkedAt ? styles.checked : undefined}
        contentEditable
        onInput={handleNewTaskContentChange}
        onBlur={handleEditTaskContent}
        dangerouslySetInnerHTML={{ __html: newTaskContent }}
      />
      <div className={styles.actions}>
        <EditDateTask task={task} onEditDateTask={onEditTask} />
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
