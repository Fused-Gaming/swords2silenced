import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Methodology.module.css';

export default function Methodology() {
  return (
    <>
      <Head>
        <title>Methodology | Swords to Silence</title>
        <meta name="description" content="How we source, verify, and present evidence." />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/" className={styles.backLink}>
            ← Back to Home
          </Link>
          <h1>Methodology</h1>
        </header>

        <main className={styles.main}>
          <section className={styles.principles}>
            <h2>Our Principles</h2>
            <div className={styles.principleList}>
              <div className={styles.principle}>
                <h3>Use Public Records Only</h3>
                <p>
                  All evidence comes from public sources: court filings, government records, ethics commission documents, audit reports, and published journalism.
                </p>
              </div>

              <div className={styles.principle}>
                <h3>Verify Before Publishing</h3>
                <p>
                  We cross-reference multiple sources. We distinguish between documented facts and allegations. We note what is verified, what is alleged, and what is under investigation.
                </p>
              </div>

              <div className={styles.principle}>
                <h3>Transparency About Sources</h3>
                <p>
                  Every claim includes its source. Users can trace evidence back to original documents and judge credibility themselves.
                </p>
              </div>

              <div className={styles.principle}>
                <h3>Avoid Speculation</h3>
                <p>
                  We present what the record shows, not what we infer. We do not guess at motives or make claims beyond what evidence supports.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.process}>
            <h2>Research Process</h2>
            <ol className={styles.processList}>
              <li>
                <h4>Identify Case</h4>
                <p>Select a documented pattern with public records, litigation, or audit findings available.</p>
              </li>
              <li>
                <h4>Gather Records</h4>
                <p>Retrieve court filings, government documents, ethics cases, and audit reports from official sources.</p>
              </li>
              <li>
                <h4>Create Timeline</h4>
                <p>Organize events chronologically, noting dates, key actions, and evidence types.</p>
              </li>
              <li>
                <h4>Map Relationships</h4>
                <p>Identify connections between actors, payments, decisions, and outcomes.</p>
              </li>
              <li>
                <h4>Verify & Tag</h4>
                <p>Cross-reference sources, classify evidence status (verified/alleged/investigating), and note gaps.</p>
              </li>
              <li>
                <h4>Publish with Sources</h4>
                <p>Present findings with direct links to original documents so readers can verify independently.</p>
              </li>
            </ol>
          </section>

          <section className={styles.evidence}>
            <h2>Evidence Classification</h2>
            <div className={styles.classificationGrid}>
              <div className={styles.classification}>
                <h3>Verified</h3>
                <p>
                  Documented in official records. Cross-referenced by multiple sources. Court-established fact or audit finding.
                </p>
              </div>

              <div className={styles.classification}>
                <h3>Alleged</h3>
                <p>
                  Claimed in court filings or ethics cases but not yet fully established. Reported in journalism. Requires additional evidence.
                </p>
              </div>

              <div className={styles.classification}>
                <h3>Under Investigation</h3>
                <p>
                  Pattern identified but investigation ongoing. Not yet concluded by authorities. Sources documented but results pending.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.limitations}>
            <h2>Limitations & Gaps</h2>
            <p>
              We can only document what is made public. Private communications, internal decision-making, and unreleased records are beyond our scope. We note these gaps explicitly.
            </p>
            <p>
              Our initial focus is Oakland. Other cities likely experience similar patterns, but we do not generalize beyond where we have verified evidence.
            </p>
          </section>

          <footer className={styles.footer}>
            <nav className={styles.footerNav}>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/sources">Sources</Link>
            </nav>
          </footer>
        </main>
      </div>
    </>
  );
}
