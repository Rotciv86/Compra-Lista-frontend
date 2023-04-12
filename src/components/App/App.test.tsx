import { screen } from "@testing-library/react";
import mockSuccessRegister from "../../mocks/uiMocks/mockSuccessRegister";
import userInitialStateMock from "../../mocks/userMocks/userInitialStateMock";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import App from "./App";

describe("Given the App ui component", () => {
  describe("When is rendered and 'isOpen' prop is true", () => {
    test("Then it should show the feedback ui component", () => {
      const feedbackText = "¡Bienvenido a Compra Lista!";

      renderWithProviders(<App />, {
        preloadedState: { ui: mockSuccessRegister, user: userInitialStateMock },
      });

      const feedback = screen.queryByText(feedbackText);
      expect(feedback).toBeInTheDocument();
    });
  });
});
