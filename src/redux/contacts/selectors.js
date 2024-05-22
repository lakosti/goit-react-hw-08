import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContact = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContact, selectNameFilter],
  (contacts, filters) => {
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filters.toLowerCase()));
  }
);
