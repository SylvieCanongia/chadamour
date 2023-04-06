import { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

const About: NextPageWithLayout = () => {
  return <h1>Page A propos</h1>;
};

export default About;

About.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
