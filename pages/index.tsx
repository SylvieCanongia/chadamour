import Head from 'next/head';
// import Image from 'next/image';
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Une application pour les amoureux des chats"
        />

        <link rel="icon" href="/favicon.ico" />
        <title>Chadamour</title>
      </Head>
      <main>
        <h1>Bienvenue sur Chadamour, un site pour les amoureux des chats !</h1>
      </main>
    </>
  );
}
