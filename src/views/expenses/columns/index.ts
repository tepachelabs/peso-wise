import { GridColDef } from '@mui/x-data-grid';

export const rows = [
  {
    id: 1,
    name: 'Tacos al pastor',
    amount: 45.22,
    date: 'Today',
    card: 'AMEX',
  },
  {
    id: 2,
    name: 'Culto al perro cafe',
    amount: 85.01,
    date: 'Today',
    card: 'BBVA',
  },
  {
    id: 3,
    name: 'Comida china EL CANTON',
    amount: 452.10,
    date: 'Today',
    card: 'AMEX'
  },
];

export const columns: GridColDef [] = [
  { field: 'name', headerName: 'Nombre', flex: 0.2,},
  { field: 'amount', headerName: 'Cantidad', flex: 0.2, },
  { field: 'date', headerName: 'Fecha', flex: 0.2, },
  { field: 'card', headerName: 'Tarjeta', flex: 0.2, },
];