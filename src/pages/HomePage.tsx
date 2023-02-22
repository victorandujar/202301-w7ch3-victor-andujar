import RobotsList from "../components/RobotsList/RobotsList";
import { Form } from "react-router-dom";

const HomePage = (): JSX.Element => {
  return (
    <>
      <RobotsList />
      <Form />
    </>
  );
};

export default HomePage;
