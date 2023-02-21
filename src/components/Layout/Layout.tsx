import useUsers from "../../hooks/useUsers/useUsers";
import Form from "../Form/Form";
import RobotsList from "../RobotsList/RobotsList";
import LayoutStyled from "./LayoutStyled";
import { useEffect } from "react";

const userCredentials = {
  username: "marc4",
  password: "marc1234",
};

const Layout = (): JSX.Element => {
  const { loginUser } = useUsers();

  useEffect(() => {
    loginUser(userCredentials);
  }, [loginUser]);

  return (
    <LayoutStyled>
      <header className="main-header">
        <h1 className="main-header__title">Robots collection</h1>
      </header>

      <RobotsList />
      <Form />
    </LayoutStyled>
  );
};

export default Layout;
