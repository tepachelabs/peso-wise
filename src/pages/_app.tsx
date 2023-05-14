import { ReactNode, ReactElement, FC } from 'react';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import { SessionProvider } from 'next-auth/react';

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
    <SessionProvider session={session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
};

export default App;
