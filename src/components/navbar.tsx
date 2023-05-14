import {
  useState,
  MouseEvent,
  ChangeEvent,
  FC,
} from 'react';

import { useRouter } from 'next/router';

import { useSession, signOut } from 'next-auth/react';

import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import ListItem from '@mui/material/ListItem';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import { urls } from '@/utils/constants';

interface DrawerContentProps {
  toggleDrawer: () => void;
}

const DrawerContent: FC<DrawerContentProps> = ({ toggleDrawer }) => {
  const router = useRouter();

  const navigateTo = (url: string) => {
    router
      .push(url)
      .then(() => toggleDrawer());
  }

  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigateTo(urls.home)}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigateTo(urls.expenses)}>
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Expenses" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigateTo(urls.cards)}>
            <ListItemIcon>
              <CreditCardIcon />
            </ListItemIcon>
            <ListItemText primary="Cards" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigateTo(urls.settings)}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}


export const MenuAppBar = () => {
  const session = useSession();

  const [open, setOpen] = useState(false);
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    signOut({
      redirect: true,
      callbackUrl: '/login',
    });
    handleClose()
  }

  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Pesowise
          </Typography>
          {auth && (
            <div>
              <Stack
                alignItems="center"
                direction="row"
              >
                <Typography>
                  {session.data?.user?.name}
                </Typography>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleMenu}
                  color='inherit'
                >
                  <AccountCircle />
                </IconButton>
              </Stack>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        onClose={toggleDrawer}
      >
        <DrawerContent toggleDrawer={toggleDrawer} />
      </Drawer>
    </Box>
  );
}
