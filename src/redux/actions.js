import { nanoid } from 'nanoid';
export const addContact = contact => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    },
  };
};
export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

export const setFilterString = string => {
  return {
    type: 'filter/setFilterString',
    payload: string,
  };
};
