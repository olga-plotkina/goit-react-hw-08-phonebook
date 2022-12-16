import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Card, TextField, Button } from '@mui/material';
import { useState } from 'react';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

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
    if (
      !event.target.elements.email.value.match(
        event.target.elements.email.pattern
      )
    ) {
      setEmailError(true);
    }
    if (
      !event.target.elements.password.value.match(
        event.target.elements.password.pattern
      )
    ) {
      setPasswordError(true);
    }
    if (
      !event.target.elements.name.value.match(
        event.target.elements.name.pattern
      )
    ) {
      setNameError(true);
    }
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
    setPasswordError(false);
    setNameError(false);
    setEmailError(false);
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
        inputProps={{
          pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        }}
        error={nameError}
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        helperText="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <TextField
        label="Email"
        variant="standard"
        color="primary"
        size="small"
        type="email"
        name="email"
        error={emailError}
        inputProps={{
          pattern: '^([0-9a-zA-Zd_.-])+@(([a-zA-Zd-])+.)+([a-zA-Zd]{2,4})+$',
        }}
        value={email}
        onChange={handleChange}
        helperText="Email must contain only latin letters, numbers, @ and dots"
        required
      />

      <TextField
        label="Password"
        variant="standard"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        error={passwordError}
        inputProps={{
          pattern: '^.{4,10}$',
        }}
        color="primary"
        size="small"
        helperText="Password must contain from 4 to 10 characters"
        required
      />

      <Button variant="contained" type="submit">
        Register
      </Button>
    </Card>
  );
};

export default RegisterPage;
