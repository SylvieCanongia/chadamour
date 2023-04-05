import React from 'react';
// import Head from 'next/head';

export interface ILayout {
  children?: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      {/* <Head>
        <title>Modèle de layout</title>
      </Head> */}
      <section>
        {children}
        Coucou
      </section>
    </>
  );
};

// export default Layout;
