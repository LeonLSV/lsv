import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renderiza el titulo principal", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /cursos de audio en vivo/i,
      })
    ).toBeInTheDocument();
  });

  test("incluye links principales de cursos y apps", () => {
    render(<App />);

    expect(
      screen.getByRole("link", { name: /curso de rf/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /lsv stageplot/i })
    ).toHaveAttribute("href", "https://leonsonidovirtualpro.com/lsvstageplot.html");
  });
});
