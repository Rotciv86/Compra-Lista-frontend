import { screen } from "@testing-library/react";
import renderWithProviders from "../utils/testUtils/renderWithProviders";
import RegisterPage from "./RegisterPage";

describe("Given a RegisterPage", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading level 1 with text 'REGISTER'", () => {
      const headingText =
        "¡BIENVENIDO A COMPRA LISTA, HAZ LA COMPRA MAS EFICIENTEMENTE!";

      renderWithProviders(<RegisterPage />);

      const heading = screen.queryByRole("heading", { level: 1 });

      expect(heading).toHaveTextContent(headingText);
    });
  });
});
