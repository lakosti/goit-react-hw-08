import { filterReducer } from "./filters/filtersSlice";
import { contactsReducer } from "./contacts/contactsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
