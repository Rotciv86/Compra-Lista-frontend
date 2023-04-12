import { renderHook } from "@testing-library/react";
import ProviderWrapper from "../mocks/providerWrapper";
import mockLoginUser from "../mocks/userMocks/mockLoginUser";
import { openFeedbackActionCreator } from "../redux/features/uiSlice/uiSlice";
import { loginUserActionCreator } from "../redux/features/userSlice/userSlice";
import { store } from "../redux/store";
import {
  JwtPayload,
  OpenFeedbackActionPayload,
  UserData,
} from "../types/types";
import useUser from "./useUser";

beforeEach(() => {
  jest.clearAllMocks();
});

const dispatchSpy = jest.spyOn(store, "dispatch");

jest.mock("jwt-decode", () => {
  return () => ({ id: "333", username: "Benja" } as JwtPayload);
});

describe("Given the useUser custom hook", () => {
  const {
    result: {
      current: { registerUser, loginUser },
    },
  } = renderHook(() => useUser(), {
    wrapper: ProviderWrapper,
  });

  describe("When its method registerUser is invoked with username 'jesus', password '1234'", () => {
    test("Then it should invoke dispatch with openFeedbackActionCreator", async () => {
      const newUser: UserData = {
        username: "jesus",
        password: "1234",
      };
      const feedbackSuccessPayload: OpenFeedbackActionPayload = {
        messageFeedback: `User ${newUser.username} registered successfully`,
        isError: false,
      };

      await registerUser(newUser);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openFeedbackActionCreator(feedbackSuccessPayload)
      );
    });
  });

  describe("When its method registerUser is invoked with username 'Bertin Ousbourne'", () => {
    test("Then it should invoke dispatch with openModalAction creator with text 'It was not possible to register: This username is already registered'", async () => {
      const newUser: UserData = {
        username: "Bertin Ousbourne",
        password: "",
      };
      const feedbackErrorPayload: OpenFeedbackActionPayload = {
        messageFeedback:
          "It was not possible to register: This username is already registered",
        isError: true,
      };

      await registerUser(newUser);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openFeedbackActionCreator(feedbackErrorPayload)
      );
    });
  });

  describe("When its method loginUser is invoked with a correct username 'Benja' and password '1234'", () => {
    test("Then it should invoke dispatch with openFeedbackActionCreator with text 'Bienvenido de nuevo benja!'", async () => {
      const user = mockLoginUser;
      const loginActionPayload = {
        username: "Benja",
        id: "333",
        token: "tokenomics",
      };

      const feedbackPayload: OpenFeedbackActionPayload = {
        isError: false,
        messageFeedback: `Bienvenido de nuevo ${user.username}!`,
      };

      await loginUser(user);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openFeedbackActionCreator(feedbackPayload)
      );

      expect(dispatchSpy).toHaveBeenCalledWith(
        loginUserActionCreator(loginActionPayload)
      );
    });
  });

  describe("When its method loginUser is invoked with correct username 'Geri' and incorrect password '3333'", () => {
    test("Then it should invoke dispathc with openFeedbackActionCreator and text 'Credenciales erroneas'", async () => {
      const user = { ...mockLoginUser, password: "3333" };

      const feedbackPayload: OpenFeedbackActionPayload = {
        isError: true,
        messageFeedback: "Credenciales erroneas",
      };

      await loginUser(user);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openFeedbackActionCreator(feedbackPayload)
      );
    });
  });
});
