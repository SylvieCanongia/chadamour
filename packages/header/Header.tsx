import React from 'react';
import Link from 'next/link';
import { HeaderNavLink, NavLink } from '@/components/HeaderNavLink';
import styles from './header.module.scss';

// define our Header properties that will be passed into the component
export type HeaderProps = {
  logo: string;
  links: NavLink[];
};

// create React Functional Component variable that will render our code for our header.
// React.FC takes a type of the props that can be passed into the component
export const Header: React.FC<HeaderProps> = ({ logo, links }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo__container}>
          <div className={styles.header__logo}>
            <Link href="/">{logo}</Link>
          </div>
        </div>

        <nav className={styles.header__nav__container}>
          {links &&
            links.map((link: NavLink) => (
              <ul key={link.label}>
                <HeaderNavLink label={link.label} route={link.route} />
              </ul>
            ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
