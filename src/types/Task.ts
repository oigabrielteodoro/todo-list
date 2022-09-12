export type Task = {
  id: string;
  content: string;
  checkedAt: Date | null;
  endDate?: string | null;
  startDate?: string | null;
};
