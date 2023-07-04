// ** MUI Components
import {Button, IconButton, MenuItem} from '@mui/material';

// ** MUI Icons
import {Edit, Delete} from '@mui/icons-material';

// ** Type Imports
import {Card} from '@/types/cards';
import {GridColDef} from '@mui/x-data-grid';
import ThreeDotMenu from '@/components/three-dot-menu';

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
      <ThreeDotMenu
        options={[
          {
            title: 'Editar',
            icon: <Edit />,
            onClick: () => {
              toggle();
              onCardChange(row);
            },
          },
          {
            title: 'Eliminar',
            icon: <Delete />,
            onClick: () => {
              toggleDelete();
              onCardChange(row);
            },
          },
        ]}
      />
    ),
  },
];
