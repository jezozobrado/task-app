export interface Task {
  title: string;
  content: string;
  dueDate: Date;
  isAccomplished: boolean;
  tags: string[];
}
export enum ACTION {
  Add,
  Edit,
}
