import { filterReducer } from "./filters/slice";
import { contactsReducer } from "./contacts/slice";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/slice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authSlice,
  },
});
