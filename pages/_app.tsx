import type { AppProps } from 'next/app';
import { Context as ResponsiveContext } from 'react-responsive';
import GlobalStyle from '../src/components/globalstyles';
import Layout from '../src/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ResponsiveContext.Provider value={{ width: 500 }}>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </ResponsiveContext.Provider>
  );
}

export default MyApp;
