import {FC, ReactNode} from 'react';

// ** MUI
import {Box, Drawer, Typography} from '@mui/material';

// ** Components
import {AlertError} from '@/components/alert-error';

// ** Types
import {DrawerProps} from '@mui/material/Drawer';

interface Props {
  children: ReactNode;
  drawerTitle: string;
  errorMessage: string;
}

export const BasicDrawer: FC<DrawerProps & Props> = ({
  open,
  onClose,
  drawerTitle,
  errorMessage,
  children,
  ...rest
}) => {
  return (
    <Drawer
      open={open}
      anchor="right"
      onClose={onClose}
      sx={{'& .MuiDrawer-paper': {width: {xs: 300, sm: 400}}}}
      {...rest}
    >
      <Box
        sx={{
          padding: 2,
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <Typography>{drawerTitle}</Typography>
      </Box>
      <Box p={2}>
        <Box mb={2}>{children}</Box>
        <AlertError message={errorMessage} />
      </Box>
    </Drawer>
  );
};
