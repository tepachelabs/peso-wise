import {ReactElement} from 'react';

import {useSession} from 'next-auth/react';

import {Layout} from '@/components/layout';

const Home = () => {
  const session = useSession();

  return (
    <>
      <h1>Welcome {session.data?.user?.name}!</h1>
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
