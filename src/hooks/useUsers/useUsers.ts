import { useAppDispatch } from "../../store/hooks";
import {
  CustomTokenPayload,
  LoginResponse,
  UserCredentials,
} from "../../types/types";
import decodeToken from "jwt-decode";
import { loginUserActionCreator } from "../../store/features/usersSlice/usersSlice";

interface UseUsersStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

const useUsers = (): UseUsersStructure => {
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    const users = "users";
    const login = "/login";
    const apiUrl = process.env.REACT_APP_URL_API;

    const response = await fetch(`${apiUrl}${users}${login}`, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: {
        "Content-type": "application/json",
      },
    });

    const { token } = (await response.json()) as LoginResponse;

    const tokenPayload: CustomTokenPayload = decodeToken(token);

    const { username, id } = tokenPayload;

    dispatch(loginUserActionCreator({ username, id, token }));
    localStorage.setItem("token", token);
  };

  return { loginUser };
};

export default useUsers;
