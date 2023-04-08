import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { HeaderNavLink, NavLink } from '@/domain/components/HeaderNavLink';
import styles from './Header.module.scss';

export type ImageProps = {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
};

// define our Header properties that will be passed into the component
export type HeaderProps = {
  logo: ImageProps;
  links: NavLink[];
};

// create React Functional Component variable that will render our code for our header.
// React.FC takes a type of the props that can be passed into the component
export const Header: React.FC<HeaderProps> = ({ logo, links }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <Link href="/">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          </Link>
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
