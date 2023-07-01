import {ReactElement, useState, useEffect} from 'react';

// ** MUI Components
import {Box, Alert, Button, Typography, AlertTitle} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';

// ** MUI Icons
import {Add} from '@mui/icons-material';

// ** Components
import {DeleteCardDialog} from '@/views/cards/component/delete-card-dialog';
import {Layout} from '@/components/layout';

// ** Component Views
import {AddCardDrawer} from '@/views/cards/component/add-card-drawer';
import {EditCardDrawer} from '@/views/cards/component/edit-card-drawer';

// ** Column Import
import {columns} from '@/views/cards/columns';

// ** Hooks
import {useCards} from '@/views/cards/hooks/useCards';

// ** Types
import {Card} from '@/types/cards';

const Cards = () => {
  const {cards, error, renewCards} = useCards();

  // ** Toggles
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  // ** Card
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const toggleEditOpen = () => {
    setEditOpen(!editOpen);
  };

  const toggleDelete = () => {
    setDeleteOpen(!deleteOpen);
  };

  return (
    <Box>
      {error.message && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error.message}
        </Alert>
      )}
      <Box sx={{p: 2, px: 0, display: 'flex', justifyContent: 'space-between'}}>
        <Typography component="h2" variant="h5">
          Tus Tarjetas
        </Typography>
        <Box>
          <Button onClick={toggleOpen} startIcon={<Add />} variant="contained">
            Agregar
          </Button>
        </Box>
      </Box>
      <DataGrid
        autoHeight
        rows={cards}
        columns={columns(toggleEditOpen, toggleDelete, setSelectedCard)}
        disableSelectionOnClick
      />
      <AddCardDrawer
        open={open}
        toggleOpen={toggleOpen}
        renewCards={renewCards}
      />
      <EditCardDrawer
        open={editOpen}
        card={selectedCard}
        renewCards={renewCards}
        toggleOpen={toggleEditOpen}
      />
      <DeleteCardDialog
        open={deleteOpen}
        card={selectedCard}
        renewCards={renewCards}
        toggleOpen={toggleDelete}
      />
    </Box>
  );
};

Cards.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Cards;
