import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WelcomeTitle = styled.h1`
  text-align: center;
`;

export const Link = styled(NavLink)`
  display: block;
  color: black;
  font-size: 20px;
  margin-left: 45%;
`;
