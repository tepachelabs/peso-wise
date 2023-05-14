import { FC } from 'react';

import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import '@/styles/global.css';

const App: FC<AppProps> = ({
                             Component,
                             pageProps: { session, ...pageProps }
                           }) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
