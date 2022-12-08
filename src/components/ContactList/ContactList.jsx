import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/operations';
import {
  getContacts,
  getFilterString,
  getError,
  getIsLoading,
} from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { StyledContacts, ContactsItem } from './ContactList.styled';

const getVisibleContacts = (contacts, filterString) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterString.toLowerCase())
  );
};
export const ContactList = () => {
  const isLoading = useSelector(getIsLoading);
  const contacts = useSelector(getContacts);
  const error = useSelector(getError);
  const dispatch = useDispatch();
  const filterString = useSelector(getFilterString);
  const visibleContacts = getVisibleContacts(contacts, filterString);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledContacts>
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <p>{error}</p>}
      {visibleContacts.map(contact => (
        <ContactsItem key={contact.id}>
          {contact.name}: {contact.phone}
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </ContactsItem>
      ))}
    </StyledContacts>
  );
};
