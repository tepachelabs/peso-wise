// ** MUI Components
import {IconButton} from '@mui/material';

// ** MUI Icons
import {Edit, Delete} from '@mui/icons-material';

// ** Type Imports
import {Card} from '@/types/cards';
import {GridColDef} from '@mui/x-data-grid';

export const columns = (
  toggle: () => void,
  toggleDelete: () => void,
  onCardChange: (card: Card) => void,
): GridColDef<Card>[] => [
  {
    field: 'name',
    headerName: 'Nombre',
    flex: 0.7,
    valueGetter: ({row}) => row.name,
  },
  {
    field: 'action',
    headerName: 'Actions',
    flex: 0.3,
    renderCell: ({row}) => (
      <>
        <IconButton
          onClick={() => {
            toggle();
            onCardChange(row);
          }}
        >
          <Edit />
        </IconButton>
        <IconButton
          onClick={() => {
            toggleDelete();
            onCardChange(row);
          }}
        >
          <Delete />
        </IconButton>
      </>
    ),
  },
];
