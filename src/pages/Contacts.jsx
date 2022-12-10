import { Form } from '../components/App.styled';
import { Filter } from '../components/Filter';
import { ContactForm } from '../components/ContactForm';
import { ContactList } from '../components/ContactList/';

const ContactsPage = () => {
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
