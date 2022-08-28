import { useState } from "react";

import Logo from "./components/Logo";
import NewTask from "./components/NewTask";
import TasksList from "./components/TasksList";
import { Task } from "./types/Task";

import styles from "./App.module.css";

import "./global.css";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function createTask(task: Task) {
    setTasks([...tasks, task]);
  }

  return (
    <>
      <header className={styles.header}>
        <Logo />
      </header>
      <main className={styles.content}>
        <NewTask onCreateTask={createTask} />
        <TasksList tasks={tasks} />
      </main>
    </>
  );
}
