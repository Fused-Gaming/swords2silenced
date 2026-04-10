import Head from 'next/head';
import Logo from '../components/atoms/Logo';
import Navbar from '../components/sections/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Swords to Silence | Exposing the Housing-Homelessness Pipeline</title>
        <meta
          name="description"
          content="Peel back the system that turns unsafe housing, weak oversight, and public suffering into a managed story."
        />
        <meta name="og:title" content="Swords to Silence" />
        <meta name="og:description" content="Exposing the housing-homelessness pipeline" />
        <meta name="og:url" content="https://swordstosilence.com" />
        <meta name="og:type" content="website" />
      </Head>

      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '100vh',
            }}
          >
            <Logo variant="full" />
          </div>
        </main>
      </div>
    </>
  );
}
