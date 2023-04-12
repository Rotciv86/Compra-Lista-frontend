import { useState } from "react";
import useUser from "../../hooks/useUser";
import { UserData } from "../../types/types";
import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";

const initialFormData: UserData = {
  username: "",
  password: "",
};

const RegisterForm = (): JSX.Element => {
  const [formData, setFormData] = useState(initialFormData);
  const { registerUser } = useUser();

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const isNotEmpty = formData.username !== "" && formData.password !== "";

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formSubmitData: UserData = {
      username: formData.username,
      password: formData.password,
    };

    registerUser(formSubmitData);
  };

  return (
    <RegisterFormStyled className="register-form" onSubmit={handleSubmit}>
      <div className="register-form__container">
        <div className="register-form__form-group">
          <label htmlFor="username">Escribe tu nombre de usuario</label>
          <input
            className="register-form__input"
            type="text"
            id="username"
            autoComplete="off"
            onChange={handleFormChange}
            value={formData.username}
            required
          />
        </div>

        <div className="register-form__form-group">
          <label htmlFor="password">Crea una contraseña</label>
          <input
            className="register-form__input"
            type="password"
            id="password"
            autoComplete="off"
            minLength={4}
            onChange={handleFormChange}
            value={formData.password}
            required
          />
        </div>
      </div>
      <Button
        text="REGÍSTRATE"
        className="register-button"
        action={function () {}}
        isDisabled={!isNotEmpty}
      />
    </RegisterFormStyled>
  );
};

export default RegisterForm;
