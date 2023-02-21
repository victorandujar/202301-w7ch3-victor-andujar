import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState, UserStructure } from "../../../types/types";

export const initialState: UserStructure = {
  id: "",
  username: "",
  isLogged: false,
  token: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginUser: (currentUserState, action: PayloadAction<UserState>) => ({
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const usersReducer = usersSlice.reducer;
export const { loginUser: loginUserActionCreator } = usersSlice.actions;
