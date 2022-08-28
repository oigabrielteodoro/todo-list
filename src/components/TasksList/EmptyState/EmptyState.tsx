import clipboardIcon from "../../../assets/clipboard.png";

import styles from "./EmptyState.module.css";

export default function EmptyState() {
  return (
    <div className={styles.emptyState}>
      <img
        src={clipboardIcon}
        alt="Ícone de prancheta na cor cinza escuro para representar sua lista de tarefas vazia"
      />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
