import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Button from "./Button";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Given the component Button", () => {
  describe("When it is rendered with the text 'Register'", () => {
    test("Then it should show the text 'Register' in it", () => {
      const expectedText = "Register";

      renderWithProviders(<Button text={"Register"} action={function () {}} />);

      const button = screen.queryByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent(expectedText);
    });
  });

  describe("When it receives a concrete action", () => {
    test("Then it should call this action on click", async () => {
      const expectedButtonAction = jest.fn();

      renderWithProviders(<Button action={expectedButtonAction} text="" />);

      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(expectedButtonAction).toHaveBeenCalled();
    });
  });
});
