import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { Card, Button, TextField } from '@mui/material';
// import { FormBox } from './ContactForm.styled';
import { useState } from 'react';

export function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <Card
      component="form"
      sx={{
        py: '35px',
        px: '30px',
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '350px',
        autoComplete: 'off',
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        label="Name"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        variant="standard"
        color="primary"
        size="small"
        inputProps={{
          pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        }}
        autoComplete="off"
        helperText="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
      <TextField
        label="Number"
        type="tel"
        name="number"
        value={number}
        variant="standard"
        color="primary"
        size="small"
        onChange={handleChange}
        inputProps={{
          pattern:
            '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
        }}
        helperText="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />
      <Button type="submit" variant="contained">
        Add contact
      </Button>
    </Card>
  );
}
