import { FC, ReactNode } from 'react';

import Box from '@mui/material/Box';

import { MenuAppBar } from '@/components/navbar';

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <MenuAppBar />
      <Box p={3}>
        {children}
      </Box>
    </>
  );
};
