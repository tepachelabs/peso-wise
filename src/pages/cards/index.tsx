import { ReactElement } from 'react';

import { Layout } from '@/components/layout';

const Cards = () => {
  return <h1>this is the cards page!</h1>
}

Cards.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Cards;
