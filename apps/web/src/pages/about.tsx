import Head from 'next/head';
import Link from 'next/link';
import Button from '../components/atoms/Button';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Swords to Silence</title>
        <meta name="description" content="About Swords to Silence and our mission to expose the housing-homelessness pipeline." />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/" className={styles.backLink}>
            ← Back to Home
          </Link>
          <h1>About This Project</h1>
        </header>

        <main className={styles.main}>
          <section className={styles.mission}>
            <h2>Our Mission</h2>
            <p>
              Swords to Silence documents the paper trail between unsafe housing, failed enforcement, displacement, and homelessness systems with weak accountability.
            </p>
            <p>
              We believe the homelessness crisis is not random failure. It is a predictable pipeline: housing neglect creates displacement, weak enforcement enables corruption, and absence of outcome tracking allows the system to perpetuate without proof of results.
            </p>
          </section>

          <section className={styles.approach}>
            <h2>Our Approach</h2>
            <div className={styles.approachCards}>
              <div className={styles.card}>
                <h3>Document, Don&apos;t Judge</h3>
                <p>
                  We present evidence from public records, court filings, ethics commissions, and audit reports. Facts speak for themselves.
                </p>
              </div>

              <div className={styles.card}>
                <h3>Trace Relationships</h3>
                <p>
                  We map the financial and administrative connections between landlords, inspectors, government agencies, and service providers.
                </p>
              </div>

              <div className={styles.card}>
                <h3>Focus on Accountability</h3>
                <p>
                  We ask not why people are homeless, but why the system fails to prevent it—and who benefits from those failures.
                </p>
              </div>

              <div className={styles.card}>
                <h3>Make It Public</h3>
                <p>
                  We transform hard-to-find documents into searchable data, timelines, and relationship maps anyone can explore.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.scope}>
            <h2>Scope & Focus</h2>
            <p>
              This initial phase focuses on Oakland, California, and the documented relationship between housing enforcement failure, inspector corruption, and homelessness system accountability gaps.
            </p>
            <p>
              We start with Oakland because the evidence is public, documented, and instructive. The patterns revealed here—enforcement failure, corruption, weak outcome tracking—appear in other cities as well.
            </p>
          </section>

          <section className={styles.cta}>
            <h2>Start Exploring</h2>
            <div className={styles.ctaButtons}>
              <Button variant="primary" size="large">
                View the Money Flow
              </Button>
              <Button variant="secondary" size="large">
                Read the Records
              </Button>
              <Button variant="secondary" size="large">
                Map the Relationships
              </Button>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <nav className={styles.footerNav}>
            <Link href="/">Home</Link>
            <Link href="/methodology">Methodology</Link>
            <Link href="/sources">Sources</Link>
          </nav>
        </footer>
      </div>
    </>
  );
}
