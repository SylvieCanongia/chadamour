import Head from 'next/head';
import { NextPageWithLayout } from './_app';
import CatCard from '@/domain/components/cards/cat/CatCard';
import { mockCatCardProps } from '@/domain/components/cards/cat/CatCard.mock';
import styles from './../styles/home.module.scss';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Chadamour</title>
      </Head>
      <h1>Bienvenue sur Chadamour, un site pour les amoureux des chats !</h1>
      <div className={styles.container}>
        <CatCard {...mockCatCardProps.base} />
        <CatCard {...mockCatCardProps.base} />
        <CatCard {...mockCatCardProps.base} />
        <CatCard {...mockCatCardProps.base} />
        <CatCard {...mockCatCardProps.base} />
        <CatCard {...mockCatCardProps.base} />
        <CatCard {...mockCatCardProps.base} />
        <CatCard {...mockCatCardProps.base} />
      </div>
    </>
  );
};

export default Home;
