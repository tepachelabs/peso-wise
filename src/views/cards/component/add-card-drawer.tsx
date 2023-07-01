import {useState, ChangeEvent, FC} from 'react';

// ** Third Party
import {enqueueSnackbar} from 'notistack';

// ** MUI Components
import {
  Box,
  Drawer,
  Button,
  TextField,
  Typography,
  InputAdornment,
} from '@mui/material';

// ** Components
import {DrawerFooter} from '@/components/drawers/footer';
import {BasicDrawer} from '@/components/drawers/basic';

// ** MUI Icons
import {CreditCard} from '@mui/icons-material';

// ** Hooks
import {useCreateCard} from '@/views/cards/hooks/useCreateCard';

interface Props {
  open: boolean;
  toggleOpen: () => void;
  renewCards: () => void;
}

export const AddCardDrawer: FC<Props> = ({toggleOpen, open, renewCards}) => {
  const {error, isLoading, handleSubmit} = useCreateCard();

  const [cardName, setCardName] = useState('');

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
      enqueueSnackbar(`Your card "${cardName}" was created!`, {
        variant: 'success',
      });
      handleClose();
    });
  };

  return (
    <BasicDrawer
      open={open}
      onClose={toggleOpen}
      errorMessage={error.message}
      drawerTitle="Agregar una tarjeta"
    >
      <TextField
        value={cardName}
        onChange={handleCardNameChange}
        sx={{width: '100%', mb: 2}}
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
      <DrawerFooter
        isSubmitDisabled={isLoading || cardName === ''}
        isCancelDisabled={isLoading}
        handleSubmit={handleSave}
        handleCancel={handleClose}
      />
    </BasicDrawer>
  );
};
