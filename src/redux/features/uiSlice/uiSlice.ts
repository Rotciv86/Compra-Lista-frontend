import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UiState } from "../../../types/types";

const uiInitialState: UiState = {
  feedback: { isOpen: false, messageFeedback: "", isError: false },
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    openSuccessFeedback: (previousUi, action: PayloadAction<UiState>) => ({
      ...previousUi,
      ...action.payload,
    }),
    openErrorFeedback: (previousUi, action: PayloadAction<UiState>) => ({
      ...previousUi,
      ...action.payload,
    }),
    closeFeedback: (previousUi) => ({
      ...previousUi,
      feedback: { isOpen: false, messageFeedback: "", isError: false },
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  openSuccessFeedback: openSuccessFeedbackActionCreator,
  openErrorFeedback: openErrorFeedbackActionCreator,
  closeFeedback: closeFeedbackActionCreator,
} = uiSlice.actions;
