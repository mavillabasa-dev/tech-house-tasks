import { CustomError } from "@/lib/exceptions";
import { Task, Tasks } from "@/models/task.model";

export abstract class TaskService {
  static async getTasks(page: number = 1, limit: number = 3): Promise<Tasks> {
    const url = `${process.env.NEXT_PUBLIC_API}/task?page=${page}&limit=${limit}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new CustomError(`Error en la solicitud: ${response.statusText}`);
      }

      const data: Tasks = await response.json();

      if (data && Array.isArray(data.todos)) {
        return data;
      } else {
        throw new CustomError("La respuesta del API no contiene un array de tareas válido");
      }
    } catch (error) {
      console.error("Error al obtener las tareas:", error);
      throw new CustomError("Error al obtener la lista de tareas");
    }
  }

  static async addTask(newTask: Omit<Task, "id" | "userId">): Promise<Task> {
    const url = `${process.env.NEXT_PUBLIC_API}/task`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new CustomError(`Error al agregar la tarea: ${response.statusText}`);
      }

      const task: Task = await response.json();
      return task;
    } catch (error) {
      console.error("Error al agregar la tarea:", error);
      throw new CustomError("Error al agregar la tarea");
    }
  }

  static async removeTask(id: number): Promise<void> {
    const url = `${process.env.NEXT_PUBLIC_API}/task/${id}`;

    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new CustomError(`Error al eliminar la tarea: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error al eliminar la tarea:", error);
      throw new CustomError("Error al eliminar la tarea");
    }
  }
}
