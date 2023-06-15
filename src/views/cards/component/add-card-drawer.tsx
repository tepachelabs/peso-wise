import { useState, ChangeEvent, FC } from 'react';

// ** MUI Components
import {
  Box,
  Drawer,
  Button,
  TextField,
  Typography,
  InputAdornment,
} from '@mui/material';

// ** MUI Icons
import { CreditCard } from '@mui/icons-material';

// ** API
import { createCard } from '@/views/cards/api';

interface Props {
  open: boolean;
  toggleOpen: () => void;
}

export const AddCardDrawer: FC<Props>= ({ toggleOpen, open }) => {
  const [cardName, setCardName] = useState('');

  const handleClose = () => {
    toggleOpen();
  };

  const handleCardNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardName(e.target.value);
  };

  const handleSave = () => {
    createCard(cardName)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  return (
    <Drawer
      open={open}
      anchor="right"
      onClose={handleClose}
      sx={{'& .MuiDrawer-paper': {width: {xs: 300, sm: 400}}}}
    >
      <Box
        sx={{
          padding: 3,
          backgroundColor: theme => theme.palette.background.default,
        }}
      >
        <Typography>Agregar un gasto</Typography>
      </Box>
      <Box sx={{ p: 3 }}>
        <TextField
          value={cardName}
          onChange={handleCardNameChange}
          sx={{ width: '100%', mb: 2}}
          placeholder="Nombre de la tarjeta"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CreditCard />
              </InputAdornment>
            ),
            endAdornment: null,
          }}
        />
        <Button sx={{ mr: 2}} onClick={handleSave} variant="contained">
          Guardar
        </Button>
        <Button onClick={handleClose} variant="outlined">
          Cancelar
        </Button>
      </Box>
    </Drawer>
  )
};
