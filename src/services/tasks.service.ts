import { CustomError } from "@/lib/exceptions";
import { Task } from "@/models/task.model";

export abstract class TaskService {
  static async getTasks(): Promise<Task[]> {
    const url = `${process.env.NEXT_PUBLIC_API}/todos`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data: Task[] = await response.json();
      if (data && Array.isArray(data)) {
        return data.slice(0, 3).map((task) => ({
          ...task,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        }));
      } else {
        throw new CustomError("La respuesta del API no es un array válido");
      }
    } catch (error) {
      console.error("Error al obtener las tareas:", error);
      throw new CustomError("Error al obtener la lista de tareas");
    }
  }
}
