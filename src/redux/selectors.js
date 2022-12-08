export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilterString = state => state.filter;

export const selectVisibleContacts = state => {
  const contacts = selectContacts(state);
  const filterString = selectFilterString(state);

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterString.toLowerCase())
  );
};
