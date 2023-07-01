import { ReactElement, useState, useEffect } from 'react';

// ** MUI Components
import {
  Box,
  Button,
  Typography,
  Alert,
  AlertTitle,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// ** MUI Icons
import { Add } from '@mui/icons-material';

// ** Layout Imports
import { Layout } from '@/components/layout';

// ** Component Imports
import { AddCardDrawer } from '@/views/cards/component/add-card-drawer';
import { EditCardDrawer } from '@/views/cards/component/edit-card-drawer';

// ** Column Import
import { columns } from '@/views/cards/columns';

// ** Hooks
import { useCards } from '@/views/cards/hooks/useCards';

// ** Types
import {Card } from '@/types/cards';

const Cards = () => {
  const { cards, error, renewCards } = useCards();

  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null)

  const toggleOpen = () => {
    setOpen(!open);
  }

  const toggleEditOpen = () => {
    setEditOpen(!editOpen);
  }
  
  return (
    <Box>
      {
        error.message && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error.message}
          </Alert>
        )
      }
      <Box sx={{ p: 2, px: 0, display: 'flex', justifyContent: 'space-between'}}>
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
        columns={columns(toggleEditOpen, setSelectedCard)}
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
    </Box>
  )
}

Cards.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Cards;
