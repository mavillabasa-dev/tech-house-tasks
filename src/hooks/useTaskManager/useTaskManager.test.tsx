import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react";
import { useTaskManager } from "@/hooks/useTaskManager";
import { Task } from "@/models/task.model";

const initialTasks: Task[] = [
  { id: 1, title: "Task 1", description: "Description 1", completed: false, userId: 1 },
  { id: 2, title: "Task 2", description: "Description 2", completed: false, userId: 1 },
];

describe("useTaskManager tests", () => {
  it("should initialize correctly", () => {
    const { result } = renderHook(() => useTaskManager(initialTasks));
    expect(result.current.tasks).toEqual(initialTasks);
  });

  it("should add a new task", () => {
    const { result } = renderHook(() => useTaskManager(initialTasks));

    const newTask: Task = {
      id: 3,
      title: "Nueva tarea",
      description: "Descripción nueva",
      completed: false,
      userId: 1,
    };

    act(() => {
      result.current.addTask(newTask);
    });

    expect(result.current.tasks).toHaveLength(3);
    expect(result.current.tasks[2].title).toBe("Nueva tarea");
    expect(result.current.tasks[2].description).toBe("Descripción nueva");
  });

  it("should delete a task", () => {
    const { result } = renderHook(() => useTaskManager(initialTasks));

    act(() => {
      result.current.removeTask(1);
    });

    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0].id).toBe(2);
  });
});
