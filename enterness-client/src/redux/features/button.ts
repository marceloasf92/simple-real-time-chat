import { createSlice } from "@reduxjs/toolkit";

let persistedUser = sessionStorage.getItem("username");
const userName = persistedUser ? persistedUser : null;

const buttonSlice = createSlice({
  name: "button",
  initialState: {
    showButton: userName ? true : false,
  },
  reducers: {
    setShowButton(state, action) {
      state.showButton = action.payload;
    },
  },
});

export const { setShowButton } = buttonSlice.actions;
export default buttonSlice.reducer;
