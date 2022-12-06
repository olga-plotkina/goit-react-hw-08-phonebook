import { getContacts, getFilterString } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { StyledContacts, ContactsItem } from './ContactList.styled';

const getVisibleContacts = (contacts, filterString) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterString.toLowerCase())
  );
};
export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterString = useSelector(getFilterString);
  const visibleContacts = getVisibleContacts(contacts, filterString);

  return (
    <StyledContacts>
      {visibleContacts.map(contact => (
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
