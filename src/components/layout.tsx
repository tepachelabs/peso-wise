import {FC, ReactNode, useEffect, useState} from 'react';

// ** Third Party Imports
import {useRouter} from 'next/router';
import {useSession} from 'next-auth/react';

// ** MUI Components
import {Box} from '@mui/material';

// ** Components Imports
import {MenuAppBar} from '@/components/navbar';

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({children}) => {
  const {data: session, status} = useSession();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Wait for session data to load

    if (!session) {
      // User is not authenticated, redirect to login page
      router.push('/login');
    } else {
      setLoading(false);
    }
  }, [session, status, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MenuAppBar />
      <Box p={3}>{children}</Box>
    </>
  );
};
