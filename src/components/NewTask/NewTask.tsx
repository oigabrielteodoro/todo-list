import { PlusCircle } from "phosphor-react";
import { FormEvent } from "react";

import styles from "./NewTask.module.css";

type Props = {
  onCreateTask: () => void;
};

export default function NewTask({ onCreateTask }: Props) {
  function handleCreateTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onCreateTask();
  }

  return (
    <form className={styles.newTaskForm} onSubmit={handleCreateTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className={styles.newTaskInput}
      />
      <button type="submit" className={styles.newTaskButton}>
        Criar <PlusCircle size={20} />
      </button>
    </form>
  );
}
