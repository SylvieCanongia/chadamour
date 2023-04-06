import type { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { Layout } from '@chadamour/layout';
import '@/styles/globals.scss';

// With TypeScript, we must first create a new type for your pages which includes a getLayout function.
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (_page: ReactElement) => ReactNode;
};

// Then, we must create a new type for your AppProps which overrides the Component property to use the previously created type.
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  // operator ?? can be used to provide a fallback value in case another value is null or undefined (here Component.getLayout)
  // const getLayout = Component.getLayout ?? (page => page);
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
