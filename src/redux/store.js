import { filterReducer } from "./filters/filtersSlice";
import { contactsReducer } from "./contacts/contactsSlice";
import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "./auth/slice"; // ! перевірити чи правильнрй імпорт

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    // auth: authSlice,
  },
});
