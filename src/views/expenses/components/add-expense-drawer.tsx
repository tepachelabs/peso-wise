import { FC } from 'react';

// ** MUI Components
import {
  Box,
  Drawer,
  Button,
  TextField,
  Typography,
  Autocomplete,
  InputAdornment,
} from '@mui/material';

// ** MUI Icons
import { AttachMoney, ReceiptLong, CreditCard } from '@mui/icons-material';

interface Props {
  open: boolean;
  toggleOpen: () => void;
}

export const AddExpenseDrawer: FC<Props>= ({ toggleOpen, open }) => {

  const handleClose = () => {
    toggleOpen();
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
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ReceiptLong />
              </InputAdornment>
            )
          }}
          sx={{ width: '100%', mb: 2}}
          placeholder="Nombre del gasto"
        />
        <TextField
          sx={{ width: '100%', mb: 2}}
          type="number"
          placeholder="Precio"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AttachMoney />
              </InputAdornment>
            ),
            endAdornment: null,
          }}
        />
        <Autocomplete
          disablePortal
          id="credit-card"
          options={['Efectivo', 'AMEX', 'BBVA', 'HSBC']}
          sx={{ width: '100%', mb: 2 }}
          renderInput={(params) => (
            <TextField {...params} label="Tarjeta" />
          )}
        />
        <Button sx={{ mr: 2}} onClick={handleClose} variant="contained">
          Guardar
        </Button>
        <Button onClick={handleClose} variant="outlined">
          Cancelar
        </Button>
      </Box>
    </Drawer>
  )
};
