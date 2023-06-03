import { ReactElement, useState } from 'react';

import {
  Card,
  Box,
  Button,
  Divider,
  CardHeader,
} from '@mui/material';

import SendIcon from '@mui/icons-material/Add';

import { Layout } from '@/components/layout';
import { DataGrid } from '@mui/x-data-grid';

import { rows, columns } from '@/views/expenses/columns';
import { AddExpenseDrawer } from '@/views/expenses/add-expense-drawer';

const Expenses = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  }

  return (
    <Card>
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between'}}>
        <CardHeader sx={{ p: 0 }} title="Gastos"/>
        <Box>
          <Button onClick={toggleOpen} startIcon={<SendIcon />} variant="contained">
            Agregar
          </Button>
        </Box>
      </Box>
      <DataGrid
        rows={rows}
        columns={columns}
      />
      <AddExpenseDrawer open={open} toggleOpen={toggleOpen} />
    </Card>
  )
}

Expenses.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Expenses;
