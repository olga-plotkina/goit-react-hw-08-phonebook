import { deleteContact } from 'redux/contacts/operations';
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

  return (
    <StyledContacts>
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <p>{error}</p>}
      {contacts.map(contact => (
        <ContactsItem key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </ContactsItem>
      ))}
    </StyledContacts>
  );
};
