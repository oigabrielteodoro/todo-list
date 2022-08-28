import clipboardIcon from "../../assets/clipboard.png";

import styles from "./TasksList.module.css";

export default function TasksList() {
  return (
    <section className={styles.tasks}>
      <header>
        <strong className={styles.createdCount}>
          Tarefas criadas <span className={styles.countNumber}>0</span>
        </strong>
        <strong className={styles.completedCount}>
          Concluídas <span className={styles.countNumber}>0</span>
        </strong>
      </header>
      <hr />
      <div className={styles.emptyState}>
        <img
          src={clipboardIcon}
          alt="Ícone de prancheta na cor cinza escuro para representar sua lista de tarefas vazia"
        />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </section>
  );
}
