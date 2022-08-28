import Logo from "./components/Logo";
import NewTask from "./components/NewTask";

import styles from "./App.module.css";

import "./global.css";

export default function App() {
  function createTask() {
    console.log("Task created");
  }

  return (
    <>
      <header className={styles.header}>
        <Logo />
      </header>
      <main className={styles.content}>
        <NewTask onCreateTask={createTask} />
      </main>
    </>
  );
}
