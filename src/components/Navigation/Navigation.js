import { useAuth } from 'hooks';
import { Toolbar } from '@mui/material';
import { Link } from 'components/Link/Link';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Toolbar component="nav">
      <Link path="/" title="Home" />
      {isLoggedIn && <Link path="/contacts" title="Contacts" />}
    </Toolbar>
  );
};
