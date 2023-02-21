import { UserStructure } from "../../../types/types";
import { loginUserActionCreator, usersReducer } from "./usersSlice";

describe("Given a users reducer", () => {
  describe("When it receives the curren state and the loginUser action", () => {
    test("Then it should return the new state with the user logged", () => {
      const initialState: UserStructure = {
        id: "",
        username: "",
        email: "",
        isLogged: false,
        token: "",
      };

      const user: UserStructure = {
        id: "7987786",
        username: "victor37",
        email: "victor37@gmail.com",
        isLogged: true,
        token: "saddsdasdsadsa",
      };

      const loginUser = loginUserActionCreator(user);
      const expectedUserLogged: UserStructure = user;

      const newUser = usersReducer(initialState, loginUser);

      expect(newUser).toStrictEqual(expectedUserLogged);
    });
  });
});
