import { NavLink } from 'react-router-dom';
import { Typography, Button, Box } from '@mui/material';

const HomePage = () => {
  return (
    <>
      <Typography
        component="h1"
        variant="h2"
        color="primary"
        textAlign="center"
      >
        Welcome to PhoneBook!
      </Typography>
      <Box width="300px" marginX="auto" mt="30px">
        <Button
          variant="outlined"
          component={NavLink}
          to="/login"
          color="primary"
          sx={{ display: 'block', marginX: 'auto', textAlign: 'center' }}
        >
          Get Started
        </Button>
      </Box>
    </>
  );
};

export default HomePage;
