import Link from 'next/link';
import MainLayout from '../components/layouts/MainLayout';

export default function Contact() {
  return (
    <MainLayout title="Contact - Andres D'Amelio" description='Contact Andres'>
      <h1>Home page</h1>

      <h1 className='title'>
        Ir a <Link href='/'>Home</Link>
      </h1>

      <p className='description'>
        Get started by editing <code className='code'>pages/contact.js</code>
      </p>
    </MainLayout>
  );
}
