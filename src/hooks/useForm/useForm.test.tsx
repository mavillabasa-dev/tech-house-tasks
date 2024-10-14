import { renderHook, act } from "@testing-library/react";
import { useForm } from "./index";
import { validateAddTask } from "../../utils/validations";
import { ChangeEvent } from "react";

jest.mock("../../utils/validations");

describe("useForm test", () => {
  const initialFormState = {
    title: "",
    description: "",
  };

  beforeEach(() => {
    (validateAddTask as jest.Mock).mockClear();
  });
  test("Should be correct when useform is initialized", () => {
    const { result } = renderHook(() => useForm(initialFormState));

    expect(result.current.form).toEqual(initialFormState);
  });

  test("should set the errors when mounting", () => {
    const initialErrors = { title: "El título es requerido" };
    (validateAddTask as jest.Mock).mockReturnValue(initialErrors);

    const { result } = renderHook(() => useForm(initialFormState));

    expect(validateAddTask).toHaveBeenCalledWith(initialFormState);
    expect(result.current.errors).toEqual(initialErrors);
  });

  test("should update the form and validate errors when handleChange is called", () => {
    const mockErrors = { description: "La descripción es requerida" };
    (validateAddTask as jest.Mock).mockReturnValue(mockErrors);

    const { result } = renderHook(() => useForm(initialFormState));

    act(() => {
      result.current.handleChange({
        target: { name: "description", value: "Nueva tarea" }
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.form.description).toBe("Nueva tarea");
    expect(result.current.errors).toEqual(mockErrors);
    expect(validateAddTask).toHaveBeenCalledWith({
      ...initialFormState,
      description: "Nueva tarea"
    });
  });
});
