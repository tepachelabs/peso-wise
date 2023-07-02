// ** Types
import {GridColDef} from '@mui/x-data-grid';
import {Expense} from '@/types/expenses';

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
];
