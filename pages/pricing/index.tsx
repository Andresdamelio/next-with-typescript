import Link from 'next/link';
import React from 'react';
import MainLayout from '../../components/layouts/MainLayout';

const index = () => {
  return (
    <MainLayout title="Pricing - Andres D'Amelio" description='Pricing Andres'>
      <h1>Pricing page</h1>

      <h1 className='title'>
        Ir a <Link href='/about'>Home</Link>
      </h1>

      <p className='description'>
        Get started by editing{' '}
        <code className='code'>pages/pricing/index.js</code>
      </p>
    </MainLayout>
  );
};

export default index;
