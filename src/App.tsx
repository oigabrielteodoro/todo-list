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

  function toggleCheckedTask(taskToUpdate: Task) {
    setTasks((state) =>
      state.map((task) =>
        task.id === taskToUpdate.id
          ? { ...task, checkedAt: task.checkedAt ? null : new Date() }
          : task
      )
    );
  }

  function deleteTask(taskToDelete: Task) {
    setTasks((state) => state.filter((task) => task.id !== taskToDelete.id));
  }

  return (
    <>
      <header className={styles.header}>
        <Logo />
      </header>
      <main className={styles.content}>
        <NewTask onCreateTask={createTask} />
        <TasksList
          tasks={tasks}
          onCheckedChange={toggleCheckedTask}
          onDeleteTask={deleteTask}
        />
      </main>
    </>
  );
}
