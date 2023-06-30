import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";




let persistedUser = null;
let persistedId = null;
if (typeof window !== "undefined") {
  persistedUser = sessionStorage.getItem("username");
  persistedId = sessionStorage.getItem("id");
}
const userName = persistedUser ? persistedUser : "";
const userId = persistedId? persistedId : uuid()

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: userName,
    id: userId,
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload;
      state.id = uuid()
      sessionStorage.setItem("id", state.id);
    },
    resetUser(state) {
      state.name = "";
      state.id = ""
    },
  },
});

export const { setName, resetUser } = userSlice.actions;

export default userSlice.reducer;
