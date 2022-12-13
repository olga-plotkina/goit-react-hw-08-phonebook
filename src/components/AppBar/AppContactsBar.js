import { AppBar, Container, Box } from '@mui/material';
import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';
import { useAuth } from 'hooks';
import { Navigation } from 'components/Navigation';

export const AppContactsBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AppBar color="primary" position="sticky">
      <Container maxWidth="md">
        <Box
          display="flex"
          gap="20px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>
      </Container>
    </AppBar>
  );
};
