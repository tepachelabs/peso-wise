// ** MUI Components
import { IconButton } from '@mui/material';

// ** MUI Icons
import { Edit } from '@mui/icons-material';

// ** Type Imports
import { GridColDef } from '@mui/x-data-grid';

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