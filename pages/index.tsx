import Link from 'next/link';
import MainLayout from '../components/layouts/MainLayout';

const Home = () => {
  return (
    <MainLayout title="Home - Andres D'Amelio" description='Home Andres'>
      <h1>Home page</h1>

      <h1 className='title'>
        Ir a <Link href='/about'>About</Link>
      </h1>

      <p className='description'>
        Get started by editing <code className='code'>pages/index.js</code>
      </p>
    </MainLayout>
  );
}

export default Home;
