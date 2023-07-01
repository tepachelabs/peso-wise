import {FC} from 'react';

// ** MUI Components
import {TextField, Autocomplete, InputAdornment} from '@mui/material';

// ** MUI Icons
import {AttachMoney, ReceiptLong} from '@mui/icons-material';

// ** Components
import {BasicDrawer} from '@/components/drawers/basic';
import {DrawerFooter} from '@/components/drawers/footer';

// ** Hooks
import {useCards} from '@/views/cards/hooks/useCards';

interface Props {
  open: boolean;
  toggleOpen: () => void;
}

export const AddExpenseDrawer: FC<Props> = ({toggleOpen, open}) => {
  const {cards} = useCards();

  const handleClose = () => {
    toggleOpen();
  };

  return (
    <BasicDrawer
      open={open}
      onClose={toggleOpen}
      errorMessage=""
      drawerTitle="Agregar un gasto"
    >
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ReceiptLong />
            </InputAdornment>
          ),
        }}
        sx={{width: '100%', mb: 2}}
        placeholder="Nombre del gasto"
      />
      <TextField
        sx={{width: '100%', mb: 2}}
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
        onChange={(_, newValue) => {
          console.log(newValue);
        }}
        options={cards.map((card) => ({
          label: card.name,
          id: card.id,
        }))}
        sx={{width: '100%', mb: 2}}
        renderInput={(params) => <TextField {...params} label="Tarjeta" />}
      />
      <DrawerFooter
        isSubmitDisabled={false}
        isCancelDisabled={false}
        handleSubmit={handleClose}
        handleCancel={handleClose}
      />
    </BasicDrawer>
  );
};
