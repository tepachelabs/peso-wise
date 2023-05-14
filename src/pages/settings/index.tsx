import { ReactElement } from 'react';

import { Layout } from '@/components/layout';

const Settings = () => {
  return <h1>this is the settings page!</h1>
}

Settings.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Settings;
