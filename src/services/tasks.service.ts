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
        return data.slice(0, 3);
      } else {
        throw new Error("La respuesta del API no es un array válido");
      }
    } catch (error) {
      console.error("Error al obtener las tareas:", error);
      throw error;
    }
  }
}
