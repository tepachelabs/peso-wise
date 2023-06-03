// ** MUI Components
import { IconButton } from '@mui/material';

// ** MUI Icons
import { Edit } from '@mui/icons-material';

// ** Type Imports
import { GridColDef } from '@mui/x-data-grid';

export const rows = [
  {
    id: 1,
    name: 'Efectivo',
  },
  {
    id: 2,
    name: 'Amex',
  },
  {
    id: 3,
    name: 'BBVA',
  },
  {
    id: 4,
    name: 'HSBC',
  },
];

export const columns: GridColDef [] = [
  {
    field: 'name',
    headerName: 'Nombre',
    flex: 0.9,
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