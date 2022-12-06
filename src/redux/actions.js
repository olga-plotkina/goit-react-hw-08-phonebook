import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact', contact => {
  return {
    payload: {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    },
  };
});

export const deleteContact = createAction('contacts/deleteContact');

export const setFilterString = createAction('filter/setFilterString');
