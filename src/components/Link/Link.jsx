import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

export const Link = ({ path, title, onClick, children }) => {
  return (
    <Button
      component={NavLink}
      to={path}
      style={{ textTransform: 'none' }}
      color="primary"
      onClick={onClick}
    >
      {children}
      <Typography fontSize="16px" component="span" color="common.white">
        {title}
      </Typography>
    </Button>
  );
};
