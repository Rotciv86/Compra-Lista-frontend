import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import { useAppSelector } from "../../redux/hooks";
import Loader from "../Loader/Loader";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  const { isLoading } = useAppSelector(({ ui }) => ui);
  return (
    <LayoutStyled>
      {isLoading && <Loader />}
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </LayoutStyled>
  );
};

export default Layout;
