import { ReactElement } from 'react';

import { Layout } from '@/components/layout';

const Expenses = () => {
  return <h1>this is the expenses page!</h1>
}

Expenses.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Expenses;
