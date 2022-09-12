import { ChangeEvent, useState } from "react";

import { format, parse, parseISO } from "date-fns";
import { Calendar, FloppyDisk } from "phosphor-react";

import DateInput from "../../DateInput";
import { DATE_INPUT_MASK } from "../../DateInput/DateInput";

import styles from "./EditDateTask.module.css";

import { Task } from "../../../types/Task";
import TaskItemAction from "../TaskItemAction";

function parseDate(value: string) {
  return parse(value, "HH:mm", new Date());
}

type Props = {
  task: Task;
  onEditDateTask: (task: Task) => void;
};

export default function EditDateTask({ task, onEditDateTask }: Props) {
  const [isEditDateTask, setIsEditDateTask] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(
    task.startDate ? parseISO(task.startDate) : null
  );
  const [endDate, setEndDate] = useState<Date | null>(
    task.endDate ? parseISO(task.endDate) : null
  );

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

  function handleToggleEditDateTaskVisibility() {
    setIsEditDateTask((state) => !state);
  }

  function handleEditDateTask() {
    onEditDateTask({
      ...task,
      startDate: startDate?.toISOString(),
      endDate: endDate?.toISOString(),
    });

    setIsEditDateTask(false);
  }

  return (
    <>
      <div className={styles.editDateTask}>
        <DateInput
          required
          disabled={!isEditDateTask}
          defaultValue={startDate ? format(startDate, "HH:mm") : ""}
          placeholder="Start Date"
          onChange={handleChangeStartDate}
        />
        <DateInput
          required
          disabled={!isEditDateTask}
          defaultValue={endDate ? format(endDate, "HH:mm") : ""}
          placeholder="Due Date"
          onChange={handleChangeEndDate}
        />
      </div>
      {isEditDateTask ? (
        <TaskItemAction
          title="Salvar datas"
          className={styles.editDateTask}
          onClick={handleEditDateTask}
        >
          <FloppyDisk size={16} />
        </TaskItemAction>
      ) : (
        <TaskItemAction
          title="Editar data"
          className={styles.editDateTask}
          onClick={handleToggleEditDateTaskVisibility}
        >
          <Calendar size={16} />
        </TaskItemAction>
      )}
    </>
  );
}
