import type { NextPage } from 'next';
import Head from 'next/head';
import { Header, type HeaderProps } from '@chadamour/header';
import { Layout } from '@chadamour/layout';

// import Image from 'next/image';
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

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

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chadamour</title>
      </Head>
      <Header logo={headerProps.logo} links={headerProps.links} />
      <main>
        <h1>Bienvenue sur Chadamour, un site pour les amoureux des chats !</h1>
        <Layout />
      </main>
    </>
  );
};

export default Home;
