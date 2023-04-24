import Head from 'next/head';
import { NextPageWithLayout } from './_app';
import CatCard from '@/domain/components/cards/cat/CatCard';
import Hero from '@/domain/components/hero/Hero';
import { mockCatCardProps } from '@/domain/components/cards/cat/CatCard.mock';
import styles from './../styles/home.module.scss';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Chadamour</title>
      </Head>
      <Hero />
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
