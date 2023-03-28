import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import RegisterPage from "./RegisterPage";

describe("Given a RegisterPage", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading level 2 with text 'REGISTER'", () => {
      const headingText = "¡BIENVENIDO A COMPRA LISTA, LA COMPRA MÁS FACIL!";

      renderWithProviders(<RegisterPage />);

      const heading = screen.queryByRole("heading", { level: 2 });

      expect(heading).toHaveTextContent(headingText);
    });
  });
});
