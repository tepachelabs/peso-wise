import { useState, useEffect, ChangeEvent, FC } from 'react';

// ** Third Party
import { enqueueSnackbar } from 'notistack';

// ** MUI Components
import {
  Box,
  Drawer,
  Button,
  TextField,
  Typography,
  InputAdornment,
  Alert,
  AlertTitle,
} from '@mui/material';

// ** MUI Icons
import { CreditCard } from '@mui/icons-material';

// ** Hooks
import { useUpdateCard } from '@/views/cards/hooks/useUpdateCard';

// ** Types
import {Card } from '@/types/cards';

interface Props {
  open: boolean;
  toggleOpen: () => void;
  renewCards: () => void;
  card: Card | null;
}

export const EditCardDrawer: FC<Props>= ({ toggleOpen, open, renewCards, card }) => {
  const {
    error,
    isLoading,
    handleSubmit,
  } = useUpdateCard(card?.id ?? '');

  const [cardName, setCardName] = useState<string>(card?.name ?? '');

  const handleClose = () => {
    toggleOpen();
    renewCards();
    setCardName('');
  };

  const handleCardNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardName(e.target.value);
  };

  const handleSave = () => {
    handleSubmit(cardName, () => {
      enqueueSnackbar(`Your card "${cardName}" was updated!`, { variant: 'success' });
      handleClose();
    });
  };

  useEffect(() => {
    setCardName(card?.name ?? '');
  }, [card?.name]);

  return (
    <Drawer
      open={open}
      anchor="right"
      onClose={handleClose}
      sx={{'& .MuiDrawer-paper': {width: {xs: 300, sm: 400}}}}
    >
      <Box
        sx={{
          padding: 2,
          backgroundColor: theme => theme.palette.background.default,
        }}
      >
        <Typography>Editar tarjeta</Typography>
      </Box>
      <Box p={2}>
        <Box mb={2}>
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
          <Button disabled={isLoading || cardName === ''} sx={{ mr: 2}} onClick={handleSave} variant="contained">
            Guardar
          </Button>
          <Button disabled={isLoading} onClick={handleClose} variant="outlined">
            Cancelar
          </Button>
        </Box>
        {
          error.message !== '' && (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {error.message}
            </Alert>
          )
        }
      </Box>
    </Drawer>
  )
};
