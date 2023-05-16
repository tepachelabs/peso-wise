import { ReactNode, ReactElement, FC } from 'react';

import { ThemeProvider } from '@mui/material/styles';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import { SessionProvider } from 'next-auth/react';

import { theme } from '@/styles/theme';
import '@/styles/global.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};


type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App: FC<AppPropsWithLayout> = ({
                             Component,
                             pageProps: { session, ...pageProps }
                           }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </ThemeProvider>
  );
};

export default App;
