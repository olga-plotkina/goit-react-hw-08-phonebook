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
      <Typography
        component="h1"
        color="primary.light"
        variant="h2"
        textAlign="center"
        mb="20px"
      >
        Phonebook
      </Typography>
      <ContactForm />
      <Typography
        component="h2"
        variant="h4"
        color="grey.500"
        textAlign="center"
        mb="10px"
      >
        Contacts
      </Typography>
      <ContactList />
    </Box>
  );
};

export default ContactsPage;
