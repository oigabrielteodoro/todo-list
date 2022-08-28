import { ChangeEvent, FormEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";

import { v4 as uuid } from "uuid";

import { Task } from "../../types/Task";

import styles from "./NewTask.module.css";

type Props = {
  onCreateTask: (task: Task) => void;
};

export default function NewTask({ onCreateTask }: Props) {
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const task: Task = {
      id: uuid(),
      checkedAt: null,
      content: newTaskText,
    };

    onCreateTask(task);

    setNewTaskText("");
  }

  function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.currentTarget.value);
  }

  return (
    <form className={styles.newTaskForm} onSubmit={handleCreateTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className={styles.newTaskInput}
        value={newTaskText}
        onChange={handleNewTaskTextChange}
      />
      <button type="submit" className={styles.newTaskButton}>
        Criar <PlusCircle size={20} />
      </button>
    </form>
  );
}
