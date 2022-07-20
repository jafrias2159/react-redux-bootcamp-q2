import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  validCrendetials: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials(state, action) {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.validCrendetials = action.payload.validCrendetials;
    },
  },
});

export const { setCredentials } = userSlice.actions;

export const selectCredentials = (state) => state.user;

export default userSlice.reducer;
