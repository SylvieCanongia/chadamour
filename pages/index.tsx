import Head from 'next/head';
import { NextPageWithLayout } from './_app';

// import Image from 'next/image';
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Chadamour</title>
      </Head>
        <h1>Bienvenue sur Chadamour, un site pour les amoureux des chats !</h1>
    </>
  );
};

export default Home;
