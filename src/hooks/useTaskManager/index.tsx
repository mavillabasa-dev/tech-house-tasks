import { useState } from "react";
import { Task } from "@/models/task.model";

interface UseTaskManagerReturn {
  tasks: Task[];
  addTask: (newTask: Task) => void;
  removeTask: (taskId: number) => void;
}

export const useTaskManager = (initialTasks: Task[]): UseTaskManagerReturn => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const addTask = (newTask: Task) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { ...newTask, completed: false, id: tasks.length + 1, userId: 1 },
    ]);
  };

  const removeTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return {
    tasks,
    addTask,
    removeTask,
  };
};
