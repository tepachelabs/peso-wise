import { FC, useState, forwardRef, ReactElement, Ref } from 'react';

// ** Third Party
import { enqueueSnackbar } from 'notistack';

// ** MUI
import {
  Slide,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Alert,
  AlertTitle,
} from '@mui/material';

import { TransitionProps } from '@mui/material/transitions';

// ** Hooks
import { useDeleteCard } from '@/views/cards/hooks/useDeleteCard';

// ** Types
import { Card } from '@/types/cards';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
  open: boolean;
  card: Card | null;
  renewCards: () => void;
  toggleOpen: () => void;
}

export const DeleteCardDialog: FC<Props> = ({ open, toggleOpen, card, renewCards }) => {
  const {
    error,
    isLoading,
    handleSubmit: handleSubmitDelete,
  } = useDeleteCard(card?.id ?? '');

  const handleClose = () => {
    toggleOpen();
    renewCards();
  }

  const handleSubmit = () => {
    handleSubmitDelete(card?.name ?? '', () => {
      enqueueSnackbar(`Your card "${card?.name ?? ''}" was deleted!`, { variant: 'success' });
      handleClose();
    });
  }

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Estas eliminando la tarjeta {card?.name ?? ''}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Una vez eliminada, esta tarjeta se eliminara toda la informacion asociada
          a esta.
        </DialogContentText>
        {
          error.message !== '' && (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {error.message}
            </Alert>
          )
        }
      </DialogContent>
      <DialogActions>
        <Button disabled={isLoading} variant="contained" onClick={handleSubmit}>Confirmar</Button>
        <Button disabled={isLoading} variant="outlined" onClick={handleClose}>Cancelar</Button>
      </DialogActions>
    </Dialog>
  );
}