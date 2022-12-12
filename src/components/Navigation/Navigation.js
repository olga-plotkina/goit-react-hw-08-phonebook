import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { StyledNavigation } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <StyledNavigation>
      <NavLink to="/" end>
        Home
      </NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </StyledNavigation>
  );
};
