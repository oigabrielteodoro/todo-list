export type Task = {
  id: string;
  content: string;
  checkedAt: Date | null;
  endAt: Date | null;
  startAt: Date | null;
};
