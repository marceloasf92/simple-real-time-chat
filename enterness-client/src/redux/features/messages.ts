import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Message {
  username?: string;
  id: string;
  message: string;
}

let persistedMessages = null
if (typeof window !== "undefined") {
  persistedMessages = sessionStorage.getItem("mensagens");
}
const initialState: Message[] = persistedMessages ? JSON.parse(persistedMessages) : [];

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage(state, action: PayloadAction<Message>) {
      state.push(action.payload);
    }
  },
});

export const { setMessage } = messageSlice.actions;
export default messageSlice.reducer;
