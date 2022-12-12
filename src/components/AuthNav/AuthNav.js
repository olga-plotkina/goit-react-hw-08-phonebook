import { NavLink } from 'react-router-dom';
import { StyledAuthNav } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <StyledAuthNav>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </StyledAuthNav>
  );
};
