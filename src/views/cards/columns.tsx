// ** MUI Components
import { IconButton } from '@mui/material';

// ** MUI Icons
import { Edit } from '@mui/icons-material';

// ** Type Imports
import { Card } from '../../types/cards';
import { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef<Card>[] = [
  {
    field: 'name',
    headerName: 'Nombre',
    flex: 0.9,
    valueGetter: ({ row }) => row.name,
  },
  {
    field: 'action',
    headerName: 'Edit',
    flex: 0.1,
    renderCell: () => (
      <IconButton>
        <Edit />
      </IconButton>
    )
  }
];