// import { Form } from '../components/App.styled';
import { Box, Typography } from '@mui/material';
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
    <Box>
      <Typography component="h1">Phonebook </Typography>
      <ContactForm />
      <Typography component="h2">Contacts</Typography>
      <ContactList />
    </Box>
  );
};

export default ContactsPage;
