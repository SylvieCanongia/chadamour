import { ReactElement } from 'react';
import Link from 'next/link';
import type { NextPageWithLayout } from './_app';
import styles from './../styles/error.module.scss';

const Error404: NextPageWithLayout = () => {
  return (
    <div className={styles.error}>
      <h1 className={styles.errorTitle}>404</h1>
      <p className={styles.errorText}>
        Oups ! La page que vous demandez n&apos;existe pas.
      </p>
      <Link href="/" className={styles.errorHomeLink}>
        Retourner à la page d&apos;accueil
      </Link>
    </div>
  );
};

export default Error404;

Error404.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
