export type Task = {
  id: string;
  content: string;
  checkedAt: string | null;
  endDate?: string | null;
  startDate?: string | null;
};
