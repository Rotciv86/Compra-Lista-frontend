import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Layout from "./Layout";

describe("Given the Layout ui component", () => {
  describe("When it is rendered and receives the route '/'", () => {
    test("Then it should show the Register Form component", () => {
      renderWithProviders(<Layout />, { initialEntries: ["/"] });

      const usernameInput = screen.queryByRole("textbox", {
        name: "Escribe tu nombre de usuario",
      });
      const passwordInput = screen.queryByLabelText("Crea una contraseña");

      expect(passwordInput).toBeInTheDocument();
      expect(usernameInput).toBeInTheDocument();
    });
  });
});
