import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '@chadamour/layout';

// import Image from 'next/image';
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chadamour</title>
      </Head>
      <main>
        <h1>Bienvenue sur Chadamour, un site pour les amoureux des chats !</h1>
        <Layout />
      </main>
    </>
  );
};

export default Home;
