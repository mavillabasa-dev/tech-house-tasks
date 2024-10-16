import { useEffect, useState } from "react";
import { TaskService } from "@/services/tasks.service";
import { Task } from "@/models/task.model";
import { CustomError } from "@/lib/exceptions";

export const useTasks = (initialPage: number = 1, limit: number = 3) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchTasks = async (page: number) => {
    setLoading(true);
    try {
      const data = await TaskService.getTasks(page, limit);
      setTasks(data.todos);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error al obtener tareas", error);
      throw new CustomError("Error al obtener tareas");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks(currentPage);
  }, [currentPage]);

  const addTask = async (newTask: Omit<Task, "id" | "userId">) => {
    try {
      await TaskService.addTask(newTask);

      fetchTasks(currentPage);

      if (tasks.length % limit === 0) {
        setTotalPages((prevTotal) => prevTotal + 1);
      }
    } catch (error) {
      console.error("Error al agregar la tarea:", error);
      throw new CustomError("Error al agregar la tarea");
    }
  };

  const removeTask = async (id: number) => {
    try {
      await TaskService.removeTask(id);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      if (tasks.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    } catch (error) {
      console.error("Error al eliminar la tarea:", error);
      throw new CustomError("Error al eliminar la tarea");
    }
  };

  return {
    tasks,
    currentPage,
    totalPages,
    loading,
    setCurrentPage,
    addTask,
    removeTask,
  };
};
