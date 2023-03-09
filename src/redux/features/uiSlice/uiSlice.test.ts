import { emptyFeedbackMock, mockInitialUiState } from "../../../mocks/uiMocks";
import { UiState } from "../../../types/types";
import {
  closeFeedbackActionCreator,
  openErrorFeedbackActionCreator,
  uiReducer,
} from "./uiSlice";

export {};

describe("Given the uiReducer", () => {
  describe("When it receives an initial state with an empty feedback and 'unknown' action", () => {
    test("Then it should return a new state with a copy of the empty feedback", () => {
      const unknownAction = {
        type: "unknownAction",
        payload: emptyFeedbackMock,
      };

      const currentUiState = emptyFeedbackMock;

      const newUiState = uiReducer(currentUiState, unknownAction);

      expect(newUiState).toStrictEqual(currentUiState);
    });
  });

  describe("When it receives an initial state and 'openSuccessFeedback' action with a messageFeedback with 'Register was successful'", () => {
    test("Then it should return a new state with the feedback received", () => {
      const currentUiState: UiState = emptyFeedbackMock;

      const newFeedback = {
        feedback: {
          isOpen: true,
          messageFeedback: "There was an error on registration",
          isError: true,
        },
        isLoading: false,
      };

      const newUiState = uiReducer(
        currentUiState,
        openErrorFeedbackActionCreator(newFeedback)
      );

      expect(newUiState).toStrictEqual(newFeedback);
    });
  });

  describe("When it receives an initial state and 'closeFeedback' action", () => {
    test("Then it should return a new state with the feedback received", () => {
      const currentUiState: UiState = mockInitialUiState;

      const newFeedback = {
        feedback: {
          isOpen: false,
          messageFeedback: "",
          isError: false,
        },
        isLoading: false,
      };

      const newUiState = uiReducer(currentUiState, closeFeedbackActionCreator);

      expect(newUiState).toStrictEqual(newFeedback);
    });
  });
});
