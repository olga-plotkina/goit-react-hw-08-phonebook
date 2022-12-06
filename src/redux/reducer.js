import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilterString } from './actions';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    let newContactsState;
    newContactsState = state.find(
      contact => contact.name === action.payload.name
    )
      ? alert(`${action.payload.name} is already in contacts`)
      : [...state, action.payload];
    return newContactsState;
  },
  [deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filtersInitialState = '';

export const filtersReducer = createReducer(filtersInitialState, {
  [setFilterString]: (state, action) => action.payload,
});
