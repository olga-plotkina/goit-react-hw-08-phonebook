import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import {
  selectVisibleContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { StyledContacts, ContactsItem } from './ContactList.styled';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectVisibleContacts);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledContacts>
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <p>{error}</p>}
      {contacts.map(contact => (
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
