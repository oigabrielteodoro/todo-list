import { InputHTMLAttributes, MouseEvent, useState } from "react";

import styles from "./Radio.module.css";
import CheckedIcon from "./CheckedIcon";

export default function Radio({
  onClick,
  checked: initialChecked,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  const [checked, setChecked] = useState(initialChecked);

  function handleCheckedChange(event: MouseEvent<HTMLInputElement>) {
    setChecked((state) => !state);

    onClick && onClick(event);
  }

  return (
    <label className={styles.radioBox}>
      <input
        type="radio"
        className={styles.radio}
        checked={checked}
        onClick={handleCheckedChange}
        {...props}
      />
      {checked && <CheckedIcon />}
    </label>
  );
}
