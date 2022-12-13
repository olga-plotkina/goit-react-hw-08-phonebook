import { Link } from 'components/Link/Link';
import { Box } from '@mui/material';
export const AuthNav = () => {
  return (
    <Box>
      <Link path="/register" title="Register" />
      <Link path="/login" title="Log in" />
    </Box>
  );
};
