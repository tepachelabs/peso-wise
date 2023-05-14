const Home = () => {
  const session = useSession();

  if (!session.data) {
    return null;
  }

  return(
    <>
      <MenuAppBar />
      <h1>Welcome {session.data.user?.name}!</h1>
    </>
)
};

import { useSession } from 'next-auth/react';

import { MenuAppBar } from '@/components/navbar';

export default Home;
