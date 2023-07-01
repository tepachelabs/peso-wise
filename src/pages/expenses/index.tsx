import {ReactElement, useState} from 'react';

// ** MUI
import {DataGrid} from '@mui/x-data-grid';
import {Box, Button, Typography} from '@mui/material';

// ** MUI Icons
import {Add} from '@mui/icons-material';

// ** Components
import {Layout} from '@/components/layout';

// ** View Components
import {AddExpenseDrawer} from '@/views/expenses/components/add-expense-drawer';

// ** Hooks
import {useExpenses} from '@/views/expenses/hooks/useExpenses';

// ** Columns
import {columns} from '@/views/expenses/columns';

const Expenses = () => {
  const {expenses} = useExpenses();

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  console.log(expenses);

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
        rows={expenses}
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
