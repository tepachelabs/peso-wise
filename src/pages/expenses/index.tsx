import {ReactElement, useState} from 'react';

import {Box, Button, Typography} from '@mui/material';

import {Add} from '@mui/icons-material';

import {Layout} from '@/components/layout';
import {DataGrid} from '@mui/x-data-grid';

import {rows, columns} from '@/views/expenses/columns';
import {AddExpenseDrawer} from '@/views/expenses/components/add-expense-drawer';

const Expenses = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <Box sx={{p: 2, px: 0, display: 'flex', justifyContent: 'space-between'}}>
        <Typography component="h2" variant="h5">
          Tus Gastos
        </Typography>
        <Box>
          <Button onClick={toggleOpen} startIcon={<Add />} variant="contained">
            Agregar
          </Button>
        </Box>
      </Box>
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        disableSelectionOnClick
      />
      <AddExpenseDrawer open={open} toggleOpen={toggleOpen} />
    </Box>
  );
};

Expenses.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Expenses;
