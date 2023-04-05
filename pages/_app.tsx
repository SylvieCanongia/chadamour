import Head from 'next/head';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Header, type HeaderProps } from '@chadamour/header';

// build an instance of our HeaderProps to pass to the Header component
const headerProps: HeaderProps = {
  logo: 'Mon logo',
  links: [
    {
      label: 'Les Chats',
      route: '/chats',
    },
    {
      label: 'A propos',
      route: '/a-propos',
    },
  ],
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Une application pour les amoureux des chats"
        />
      </Head>
      <Header logo={headerProps.logo} links={headerProps.links} />
      <Component {...pageProps} />;
    </>
  );
}
