import React from 'react';
import Link from 'next/link';

// define a Navigation Link type for our links
export type NavLink = {
  label: string;
  route: string;
};

export const HeaderNavLink: React.FC<NavLink> = React.memo(
  ({ label, route }) => {
    return (
      <li className="headerNavLink">
        <Link href={route}>{label}</Link>
      </li>
    );
  }
);
// When wrapping a component with React.memo, the displayName property is no longer inferred by React. So, we need to set it
HeaderNavLink.displayName = 'HeaderNavLink';
