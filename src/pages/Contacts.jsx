import { Form } from '../components/App.styled';
import { Filter } from '../components/Filter';
import { ContactForm } from '../components/ContactForm';
import { ContactList } from '../components/ContactList/';
import { fetchContacts } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Form>
      <h1>Phonebook </h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Form>
  );
};

export default ContactsPage;
