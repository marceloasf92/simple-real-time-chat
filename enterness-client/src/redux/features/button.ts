import { createSlice } from "@reduxjs/toolkit";

let persistedUser = null;
if (typeof window !== "undefined") {
  persistedUser = sessionStorage.getItem("username");
}
const userName = persistedUser ? persistedUser : "";

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
