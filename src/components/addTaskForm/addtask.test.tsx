import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { AddTaskForm } from ".";

const mockOnSubmit = jest.fn();
const mockOnCancel = jest.fn();
const mockCloseModal = jest.fn();

describe("AddTaskForm Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should be render form", () => {
    const { getByTestId } = render(
      <AddTaskForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} closeModal={mockCloseModal} />
    );

    expect(getByTestId(/name-input-add/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Descripción/i)).toBeInTheDocument();
    expect(screen.getByText("Guardar")).toBeDisabled();
  });
  //     render(
  //       <AddTaskForm
  //         onSubmit={mockOnSubmit}
  //         onCancel={mockOnCancel}
  //         closeModal={mockCloseModal}
  //       />
  //     );

  //     const titleInput = screen.getByLabelText(/Nombre/i);
  //     const descriptionInput = screen.getByLabelText(/Descripción/i);

  //     // Simular la escritura en los campos
  //     fireEvent.change(titleInput, { target: { value: "Nueva tarea" } });
  //     fireEvent.change(descriptionInput, { target: { value: "Descripción de tarea" } });

  //     // Simular el envío del formulario
  //     const submitButton = screen.getByText("Guardar");
  //     fireEvent.click(submitButton);

  //     // Verificar que onSubmit y closeModal han sido llamados
  //     expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  //     expect(mockOnSubmit).toHaveBeenCalledWith({ title: "Nueva tarea", description: "Descripción de tarea" });
  //     expect(mockCloseModal).toHaveBeenCalledTimes(1);
  //   });

  //   test("debería llamar a onCancel cuando se hace clic en el botón cancelar", () => {
  //     render(
  //       <AddTaskForm
  //         onSubmit={mockOnSubmit}
  //         onCancel={mockOnCancel}
  //         closeModal={mockCloseModal}
  //       />
  //     );

  //     const cancelButton = screen.getByText(/Cancelar/i);
  //     fireEvent.click(cancelButton);

  //     // Verificar que onCancel y closeModal fueron llamados
  //     expect(mockOnCancel).toHaveBeenCalledTimes(1);
  //     expect(mockCloseModal).toHaveBeenCalledTimes(1);
  //   });
});
