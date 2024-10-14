import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ActiveLink } from ".";

describe("Active Link component test", () => {
  test("render", () => {
    const path = "/task-list";
    const text = "Lista de tareas";
    render(<ActiveLink path={path} text={text} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
