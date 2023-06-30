import { configureStore } from '@reduxjs/toolkit'

import userSlice from "../features/user"
import messageSlice from "../features/messages"
import buttonSlice from "../features/button"


export const store = configureStore({
    reducer: {
        user: userSlice,
        message: messageSlice,
        button: buttonSlice
    }
})

export type RootState = ReturnType<typeof store.getState>