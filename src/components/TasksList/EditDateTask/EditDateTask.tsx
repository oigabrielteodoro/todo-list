import { ChangeEvent, useState } from "react";

import { format, parse, parseISO } from "date-fns";

import DateInput from "../../DateInput";
import { Task } from "../../../types/Task";
import { DATE_INPUT_MASK } from "../../DateInput/DateInput";

import styles from "./EditDateTask.module.css";

function parseDate(value: string) {
  return parse(value, "HH:mm", new Date());
}

type Props = {
  task: Task;
  onEditDateTask: (task: Task) => void;
};

export default function EditDateTask({ task, onEditDateTask }: Props) {
  const [startDate, setStartDate] = useState<Date | null>(
    task.startDate ? parseISO(task.startDate) : null
  );
  const [endDate, setEndDate] = useState<Date | null>(
    task.endDate ? parseISO(task.endDate) : null
  );

  const isOverdue = task.endDate
    ? parseISO(task.endDate).getTime() < new Date().getTime()
    : false;

  function handleChangeStartDate(event: ChangeEvent<HTMLInputElement>) {
    if (event.currentTarget.value.length === 0) {
      setStartDate(null);
    }

    if (event.currentTarget.value.length === DATE_INPUT_MASK.length) {
      const parsedDate = parseDate(event.currentTarget.value);

      setStartDate(parsedDate);
    }
  }

  function handleChangeEndDate(event: ChangeEvent<HTMLInputElement>) {
    if (event.currentTarget.value.length === 0) {
      setEndDate(null);
    }

    if (event.currentTarget.value.length === DATE_INPUT_MASK.length) {
      const parsedDate = parseDate(event.currentTarget.value);

      setEndDate(parsedDate);
    }
  }

  function handleEditDateTask() {
    onEditDateTask({
      ...task,
      startDate: startDate?.toISOString(),
      endDate: endDate?.toISOString(),
    });
  }

  return (
    <div className={styles.editDateTask}>
      <DateInput
        required
        defaultValue={startDate ? format(startDate, "HH:mm") : ""}
        placeholder="hh:mm"
        onChange={handleChangeStartDate}
        onBlur={handleEditDateTask}
      />
      -
      <DateInput
        required
        checkedAt={task.checkedAt}
        overDue={isOverdue}
        defaultValue={endDate ? format(endDate, "HH:mm") : ""}
        placeholder="hh:mm"
        onChange={handleChangeEndDate}
        onBlur={handleEditDateTask}
      />
    </div>
  );
}
