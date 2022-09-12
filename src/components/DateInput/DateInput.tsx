import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import VMasker from "vanilla-masker";

import styles from "./DateInput.module.css";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const DATE_INPUT_MASK = "99:99";

function formatTypedDateToMask(value: string) {
  return VMasker.toPattern(value, DATE_INPUT_MASK);
}

export default function DateInput({
  onChange,
  defaultValue = "",
  ...rest
}: InputProps) {
  const [value, setValue] = useState<string>(defaultValue.toString());

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);

    onChange && onChange(event);
  }

  return (
    <input
      {...rest}
      type="text"
      className={styles.dateInput}
      onChange={handleChange}
      value={formatTypedDateToMask(value)}
    />
  );
}
