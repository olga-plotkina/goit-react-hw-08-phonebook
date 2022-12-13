import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Box, Typography } from '@mui/material';
import { Link } from 'components/Link/Link';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <Box
      display="flex"
      gap="20px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography fontSize="16px" component="span" color="common.white">
        {user.email}
      </Typography>

      <Link type="button" onClick={() => dispatch(logOut())} title="Logout" />
    </Box>
  );
};
