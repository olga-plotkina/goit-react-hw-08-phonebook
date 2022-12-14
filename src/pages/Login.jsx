import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/operations';
import { Card, TextField, Button } from '@mui/material';
import { useState } from 'react';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

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
        error={emailError}
        inputProps={{
          pattern: '^([0-9a-zA-Zd_.-])+@(([a-zA-Zd-])+.)+([a-zA-Zd]{2,4})+$',
        }}
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
        error={passwordError}
        inputProps={{
          pattern: '^.{4,8}$',
        }}
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
