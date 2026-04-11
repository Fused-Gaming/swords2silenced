import Head from 'next/head';
import Link from 'next/link';
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
        <header className={styles.header}>
          <div className={styles.logo}>
            <h1>Swords to Silenced</h1>
          </div>
          <nav className={styles.nav}>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
            <Link href="/testimony">Testimony</Link>
          </nav>
        </header>

        <main className={styles.main}>
          <section className={styles.hero}>
            <h2>Transform Your Message</h2>
            <p>Empower your voice. Make an impact. Join the movement.</p>
            <Link className={styles.cta} href="/testimony">Read Personal Testimony</Link>
          </section>

          <section id="features" className={styles.features}>
            <h3>Features</h3>
            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <h4>Powerful</h4>
                <p>Built on modern, scalable architecture</p>
              </div>
              <div className={styles.featureCard}>
                <h4>Fast</h4>
                <p>Lightning-quick performance across all devices</p>
              </div>
              <div className={styles.featureCard}>
                <h4>Secure</h4>
                <p>Enterprise-grade security and privacy</p>
              </div>
            </div>
          </section>

          <section id="about" className={styles.about}>
            <h3>About Us</h3>
            <p>
              Swords to Silenced is a platform dedicated to empowering voices and transforming messages into meaningful change.
              We believe in the power of communication and the impact that authentic voices can have.
            </p>
          </section>
        </main>

        <footer className={styles.footer}>
          <p>&copy; 2024 Swords to Silenced. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="#contact">Contact</a>
            <Link href="/testimony">Testimony</Link>
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
