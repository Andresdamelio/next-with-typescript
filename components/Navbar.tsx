import React from 'react';
import styles from './Navbar.module.css';
import ActiveLink from './ActiveLink';


type MenuItem = {
  text: string;
  href: string;
}

const menuItems: MenuItem[] = [
  {
    text: 'Inicio',
    href: '/'
  },
  {
    text: 'Sobre nosotros',
    href: '/about'
  },
  {
    text: 'Contacto',
    href: '/contact'
  },
  {
    text: 'Precios',
    href: '/pricing'
  }
];

const NavBar = () => {
  return (
    <nav className={styles.container}>
      {menuItems.map((item, index) => {
        return <ActiveLink key={index} text={item.text} href={item.href} />;
      })}
    </nav>
  );
};

export default NavBar;
