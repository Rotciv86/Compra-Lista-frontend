import RegisterForm from "../components/RegisterForm/RegisterForm";

const RegisterPage = (): JSX.Element => {
  return (
    <>
      <h1 className="register-heading">
        ¡BIENVENIDO A COMPRA LISTA, HAZ LA COMPRA MAS EFICIENTEMENTE!
      </h1>
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
