// ** MUI
import {Button, MenuItem} from '@mui/material';

// Components
import ThreeDotMenu from '@/components/three-dot-menu';

// ** Icons
import {Edit, Delete} from '@mui/icons-material';

// ** Types
import {Expense} from '@/types/expenses';
import {GridColDef} from '@mui/x-data-grid';

export const columns: GridColDef<Expense>[] = [
  {
    field: 'name',
    headerName: 'Nombre',
    flex: 0.2,
    valueGetter: ({row}) => row.title,
  },
  {
    field: 'amount',
    headerName: 'Precio',
    flex: 0.2,
    valueGetter: ({row}) => row.amount,
  },
  {
    field: 'date',
    headerName: 'Fecha',
    flex: 0.2,
    valueGetter: ({row}) => 'Today',
  },
  {
    field: 'card',
    headerName: 'Tarjeta',
    flex: 0.2,
    valueGetter: ({row}) => row.PaymentMethod.name,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    flex: 0.2,
    renderCell: () => {
      return (
        <ThreeDotMenu
          options={[
            {
              title: 'Editar',
              onClick: () => null,
            },
            {
              title: 'Eliminar',
              onClick: () => null,
            },
          ]}
        />
      );
    },
  },
];
