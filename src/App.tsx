import { useEffect, useState } from "react";

import Logo from "./components/Logo";
import NewTask from "./components/NewTask";
import TasksList from "./components/TasksList";
import { Task } from "./types/Task";

import styles from "./App.module.css";

import "./global.css";

function getStoragedTasks() {
  const storagedTasks = localStorage.getItem("@tasks-list:tasks");

  if (!storagedTasks) {
    return [];
  }

  return JSON.parse(storagedTasks);
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(getStoragedTasks());

  useEffect(() => {
    localStorage.setItem("@tasks-list:tasks", JSON.stringify(tasks));
  }, [tasks]);

  function createTask(task: Task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function toggleCheckedTask(taskToUpdate: Task) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === taskToUpdate.id
          ? {
              ...task,
              checkedAt: task.checkedAt ? null : new Date().toISOString(),
            }
          : task
      )
    );
  }

  function editTask(taskToUpdate: Task) {
    setTasks((tasks) =>
      tasks.map((task) => (task.id === taskToUpdate.id ? taskToUpdate : task))
    );
  }

  function deleteTask(taskToDelete: Task) {
    setTasks((tasks) => tasks.filter((task) => task.id !== taskToDelete.id));
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
          onEditTask={editTask}
          onCheckedChange={toggleCheckedTask}
          onDeleteTask={deleteTask}
        />
      </main>
    </>
  );
}
