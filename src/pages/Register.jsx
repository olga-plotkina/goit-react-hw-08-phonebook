import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Card, TextField, Button } from '@mui/material';
import { useState } from 'react';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Card
      component="form"
      sx={{
        py: '35px',
        px: '30px',
        mx: 'auto',
        mb: '30px',
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
        variant="standard"
        color="primary"
        size="small"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <TextField
        label="Email"
        variant="standard"
        color="primary"
        size="small"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <TextField
        label="Password"
        variant="standard"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        color="primary"
        size="small"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button variant="contained" type="submit">
        Register
      </Button>
    </Card>
  );
};

export default RegisterPage;
