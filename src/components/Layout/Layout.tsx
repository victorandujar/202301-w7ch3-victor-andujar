import useUsers from "../../hooks/useUsers/useUsers";
import { Link } from "react-router-dom";
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
        <nav className="header__nav-bar nav-bar">
          <div className="nav-bar__element">
            <Link to="/" className="nav-bar__icon">
              <span className="nav-bar__text">Home</span>
            </Link>
          </div>

          <div className="nav-bar__element">
            <Link to="/Create-form" className="nav-bar__icon">
              <span className="nav-bar__text">Create</span>
            </Link>
          </div>

          <div className="nav-bar__element">
            <Link to="/login" className="nav-bar__icon">
              <span className="nav-bar__text">Login</span>
            </Link>
          </div>
        </nav>
      </header>
    </LayoutStyled>
  );
};

export default Layout;
