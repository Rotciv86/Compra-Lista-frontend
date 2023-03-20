import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProviderWrapper from "../../mocks/providerWrapper";
import RegisterForm from "./RegisterForm";

const mockRegisterAction = jest.fn();

jest.mock("../../hooks/useUser", () => {
  return () => ({ registerUser: mockRegisterAction });
});

describe("Given the RegisterForm ui component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a form with inputs fields 'username' and 'password'", () => {
      render(
        <ProviderWrapper>
          <RegisterForm />
        </ProviderWrapper>
      );

      const usernameInput = screen.queryByRole("textbox", {
        name: "Escribe tu nombre de usuario",
      });
      const passwordInput = screen.queryByLabelText("Crea una contraseña");

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });
  });

  describe("When it's filled in and its button 'Register' is clicked", () => {
    test("Then the form should be submited", async () => {
      render(
        <ProviderWrapper>
          <RegisterForm />
        </ProviderWrapper>
      );

      const usernameInput = screen.queryByRole("textbox", {
        name: "Escribe tu nombre de usuario",
      })!;
      await userEvent.type(usernameInput, "Jowie");
      const passwordInput = screen.queryByLabelText("Crea una contraseña")!;
      await userEvent.type(passwordInput, "julito");
      const button = screen.queryByRole("button")!;
      await userEvent.click(button);
    });
  });
});
