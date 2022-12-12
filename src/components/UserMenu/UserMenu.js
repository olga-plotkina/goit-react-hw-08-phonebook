import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { StyledUserMenu } from './UserMenu.styled';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <StyledUserMenu>
      <p>{user.email} </p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </StyledUserMenu>
  );
};
