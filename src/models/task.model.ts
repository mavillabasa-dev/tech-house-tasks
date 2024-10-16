export interface Task {
  userId: number;
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export interface Tasks {
  todos: Task[];
  currentPage: number;
  totalPages: number;
  totalTodos: number;
}
