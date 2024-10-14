import { renderHook, act } from "@testing-library/react";
import { useModal } from "./index";

describe("useModal", () => {
  test("debe iniciar con el estado 'isOpen' en false", () => {
    const { result } = renderHook(() => useModal());

    expect(result.current.isOpen).toBe(false);
  });

  test("debe alternar el estado 'isOpen' cuando se llama a 'toggle'", () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.toggle();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.toggle();
    });
    expect(result.current.isOpen).toBe(false);
  });
});
