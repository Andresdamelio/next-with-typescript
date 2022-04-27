import Head from 'next/head';
import React, { FC } from 'react';
import NavBar from '../Navbar';
import styles from './MainLayout.module.css';

type Props = {
  title: string;
  description: string;
  children: JSX.Element | JSX.Element[];
}

const MainLayout: FC<Props> = ({ title, description, children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default MainLayout;
