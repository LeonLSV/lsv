import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renderiza el titulo principal", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /todas mis redes, apps y cursos/i,
      })
    ).toBeInTheDocument();
  });

  test("incluye links principales de cursos y apps", () => {
    render(<App />);

    expect(
      screen.getByRole("button", { name: /curso de rf/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /usar lsv stageplot/i })
    ).toHaveAttribute("href", "https://leonsonidovirtualpro.com/lsvstageplot.html");
  });
});
