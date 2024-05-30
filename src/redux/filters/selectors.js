import { createSelector } from "@reduxjs/toolkit";
import { selectContact } from "../contacts/selectors";

export const selectNameFilter = (state) => state.filter.name;

export const selectFilteredContacts = createSelector(
  [selectContact, selectNameFilter],
  (contacts, filters) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filters.toLowerCase()) ||
        contact.number.toLowerCase().includes(filters.toLowerCase())
    );
  }
);
