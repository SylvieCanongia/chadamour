import React from 'react';
import Head from 'next/head';
import { Header, type HeaderProps } from '@chadamour/header';

export interface ILayout {
  children?: React.ReactNode;
}

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

export const Layout: React.FC<ILayout> = ({ children }) => {
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
        {children}
    </>
  );
};

// export default Layout;
