import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Card } from "./index";
import { Task } from "@/models/task.model";

describe("Card component", () => {
  const mockTask: Task = {
    id: 1,
    userId: 1,
    title: "Tarea de prueba",
    description: "Esta es una descripción de prueba",
    completed: false,
  };

  const mockRemoveTask = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("shpuld be render correctly", () => {
    const { getByText } = render(<Card task={mockTask} removeTask={mockRemoveTask} />);

    expect(getByText("Tarea de prueba")).toBeInTheDocument();
    expect(getByText("Esta es una descripción de prueba")).toBeInTheDocument();
  });

  test("should be cal removeTask with the tast id", () => {
    render(<Card task={mockTask} removeTask={mockRemoveTask} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockRemoveTask).toHaveBeenCalledTimes(1);
    expect(mockRemoveTask).toHaveBeenCalledWith(mockTask.id);
  });
});
