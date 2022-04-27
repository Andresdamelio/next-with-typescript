import Link from 'next/link';
import MainLayout from '../components/layouts/MainLayout';
import DarkLayout from '../components/layouts/DarkLayout';
import { ReactElement } from 'react';

const About = () => {
  return (
    <>
      <h1>Home page</h1>

      <h1 className='title'>
        Ir a <Link href='/'>Home</Link>
      </h1>

      <p className='description'>
        Get started by editing <code className='code'>pages/about.js</code>
      </p>
    </>
  );
};

About.getLayout = (page: ReactElement ) => {
  return (
    <MainLayout title="About - Andres D'Amelio" description='About Andres'>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default About;
