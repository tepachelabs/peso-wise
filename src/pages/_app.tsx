import {ReactNode, ReactElement, FC} from 'react';

import {SnackbarProvider} from 'notistack';

import {ThemeProvider} from '@mui/material/styles';

import type {NextPage} from 'next';
import type {AppProps} from 'next/app';

import {SessionProvider} from 'next-auth/react';

import {theme} from '@/styles/theme';
import '@/styles/global.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const App: FC<AppPropsWithLayout> = ({
  Component,
  pageProps: {session, ...pageProps},
}) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={session}>
        <SnackbarProvider>
          {getLayout(<Component {...pageProps} />)}
        </SnackbarProvider>
      </SessionProvider>
    </ThemeProvider>
  );
};

export default App;
