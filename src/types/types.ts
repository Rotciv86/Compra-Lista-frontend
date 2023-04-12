export interface UserData {
  username: string;
  password: string;
}

export interface JwtPayload {
  id: string;
  username: string;
}

export interface UiState {
  feedback: {
    isOpen: boolean;
    messageFeedback: string;
    isError: boolean;
  };
  isLoading: boolean;
}
export interface OpenFeedbackActionPayload {
  messageFeedback: string;
  isError: boolean;
}

export interface UserLoginData {
  username: string;
  id: string;
  token: string;
}

export interface UserState extends UserLoginData {
  isLogged: boolean;
}
