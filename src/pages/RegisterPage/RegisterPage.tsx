import RegisterForm from "../../components/RegisterForm/RegisterForm";
import RegisterPageStyled from "./RegisterPageStyled";

const RegisterPage = (): JSX.Element => {
  return (
    <RegisterPageStyled>
      <h2 className="register-heading">
        ¡BIENVENIDO A COMPRA LISTA, LA COMPRA MÁS FACIL!
      </h2>
      <RegisterForm />
    </RegisterPageStyled>
  );
};

export default RegisterPage;
