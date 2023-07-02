import {FC, useState} from 'react';

// ** MUI Components
import {TextField, Autocomplete, InputAdornment} from '@mui/material';

// ** MUI Icons
import {AttachMoney, ReceiptLong} from '@mui/icons-material';

// ** Components
import {BasicDrawer} from '@/components/drawers/basic';
import {DrawerFooter} from '@/components/drawers/footer';

// ** Hooks
import {useCards} from '@/views/cards/hooks/useCards';
import {useCreateExpense} from '@/views/expenses/hooks/useCreateExpense';

interface Props {
  open: boolean;
  toggleOpen: () => void;
  renewExpenses: () => void;
}

export const AddExpenseDrawer: FC<Props> = ({
  toggleOpen,
  open,
  renewExpenses,
}) => {
  const {cards} = useCards();
  const {handleSubmit} = useCreateExpense();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [cardId, setCardId] = useState('');

  const handleClose = () => {
    toggleOpen();
    renewExpenses();

    setTitle('');
    setAmount(0);
    setCardId('');
  };

  const onSubmit = () => {
    handleSubmit(
      {
        cardId,
        title,
        amount,
      },
      () => {
        handleClose();
      },
    );
  };

  return (
    <BasicDrawer
      open={open}
      onClose={toggleOpen}
      errorMessage=""
      drawerTitle="Agregar un gasto"
    >
      <TextField
        value={title}
        onChange={(event) => setTitle(event.target.value)}
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
        value={amount}
        onChange={(event) => setAmount(Number(event.target.value))}
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
          if (!newValue) {
            return;
          }

          setCardId(newValue.id);
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
        handleSubmit={onSubmit}
        handleCancel={handleClose}
      />
    </BasicDrawer>
  );
};
