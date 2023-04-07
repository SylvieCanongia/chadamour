import { ReactElement } from 'react';
import Link from 'next/link';
import type { NextPageWithLayout } from './_app';
import styles from './../styles/error.module.scss';

const Error500: NextPageWithLayout = () => {
  return (
    <div className={styles.error}>
      <h1 className={styles.errorTitle}>500</h1>
      <p className={styles.errorText}>
        Oups ! Le serveur a rencontré une erreur interne.
      </p>
      <Link href="/" className={styles.errorHomeLink}>
        Retourner à la page d&apos;accueil
      </Link>
    </div>
  );
};

export default Error500;

Error500.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
