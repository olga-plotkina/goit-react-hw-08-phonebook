import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/operations';
import { Card, TextField, Button } from '@mui/material';
import { useState } from 'react';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
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
    dispatch(logIn({ email, password }));
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
        label="Email"
        variant="standard"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        color="primary"
        size="small"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <TextField
        label="Password"
        variant="standard"
        color="primary"
        size="small"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button variant="contained" type="submit">
        Log in
      </Button>
    </Card>
  );
};

export default LoginPage;
