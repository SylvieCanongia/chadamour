import React from 'react';
import Head from 'next/head';
import { Header, type HeaderProps } from '@chadamour/header';
import styles from './Layout.module.scss';
import logoImage from './logo-cat-3-250x49.png';

export interface ILayout {
  children?: React.ReactNode;
}

// build an instance of our HeaderProps to pass to the Header component
const headerProps: HeaderProps = {
  logo: {
    src: logoImage,
    alt: 'Logo de Chadamour',
    width: 250,
    height: 49,
  },
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
      <div id={styles.app}>
        <Header logo={headerProps.logo} links={headerProps.links} />
        {children}
      </div>
    </>
  );
};

export default Layout;
