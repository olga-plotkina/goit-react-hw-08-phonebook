import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppContactsBar } from './AppBar';
import { Box } from '@mui/material';

export const SharedLayout = () => {
  return (
    <div>
      <AppContactsBar />
      <Box component="main">
        <Box component="section" pt="50px">
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Box>
      </Box>
    </div>
  );
};
