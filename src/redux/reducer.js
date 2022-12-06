import { addContact, deleteContact, setFilterString } from './actions';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsReducer = (state = contactsInitialState, action) => {
  let newContactsState;
  switch (action.type) {
    case addContact.type:
      newContactsState = state.find(
        contact => contact.name === action.payload.name
      )
        ? alert(`${action.payload.name} is already in contacts`)
        : [...state, action.payload];
      return newContactsState;
    case deleteContact.type:
      return state.filter(contact => contact.id !== action.payload);

    default:
      return state;
  }
};

const filtersInitialState = '';

export const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case setFilterString.type:
      return action.payload;
    default:
      return state;
  }
};
