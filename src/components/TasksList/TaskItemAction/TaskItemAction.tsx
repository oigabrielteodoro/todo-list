import { ButtonHTMLAttributes } from "react";
import cn from "classnames";

import styles from "./TaskItemAction.module.css";

type TaskItemActionProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function TaskItemAction({
  children,
  className,
  ...rest
}: TaskItemActionProps) {
  return (
    <button className={cn([styles.button, className])} {...rest}>
      {children}
    </button>
  );
}
