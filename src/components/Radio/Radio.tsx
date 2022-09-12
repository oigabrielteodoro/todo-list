import { ChangeEvent, InputHTMLAttributes, useState } from "react";

import styles from "./Radio.module.css";
import CheckedIcon from "./CheckedIcon";

export default function Radio({
  onChange,
  checked: initialChecked,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  const [checked, setChecked] = useState(initialChecked);

  function handleCheckedChange(event: ChangeEvent<HTMLInputElement>) {
    setChecked((state) => !state);

    onChange && onChange(event);
  }

  return (
    <label className={styles.radioBox}>
      <input
        type="checkbox"
        className={styles.radio}
        checked={checked}
        onChange={handleCheckedChange}
        {...props}
      />
      {checked && <CheckedIcon />}
    </label>
  );
}
