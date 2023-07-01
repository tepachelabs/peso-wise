import {useState, useEffect, ChangeEvent, FC} from 'react';

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
import {BasicDrawer} from '@/components/drawers/basic';
import {DrawerFooter} from '@/components/drawers/footer';

// ** MUI Icons
import {CreditCard} from '@mui/icons-material';

// ** Hooks
import {useUpdateCard} from '@/views/cards/hooks/useUpdateCard';

// ** Types
import {Card} from '@/types/cards';

interface Props {
  open: boolean;
  toggleOpen: () => void;
  renewCards: () => void;
  card: Card | null;
}

export const EditCardDrawer: FC<Props> = ({
  toggleOpen,
  open,
  renewCards,
  card,
}) => {
  const {error, isLoading, handleSubmit} = useUpdateCard(card?.id ?? '');

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
      enqueueSnackbar(`Your card "${cardName}" was updated!`, {
        variant: 'success',
      });
      handleClose();
    });
  };

  useEffect(() => {
    setCardName(card?.name ?? '');
  }, [card?.name]);

  return (
    <BasicDrawer
      open={open}
      onClose={toggleOpen}
      errorMessage={error.message}
      drawerTitle="Editando tarjeta"
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
