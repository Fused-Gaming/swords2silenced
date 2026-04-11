import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Sources.module.css';

export default function Sources() {
  const sources = [
    {
      category: 'Court Documents',
      items: [
        'Oakland Superior Court filings (2006-present)',
        'Injunction orders and compliance records',
        'Settlement agreements and judgments',
      ],
    },
    {
      category: 'Government Records',
      items: [
        'Oakland Housing Department code violation records',
        'Building permits and inspection reports',
        'City Ethics Commission files and findings',
        'Public contract and procurement records',
      ],
    },
    {
      category: 'Audit Reports',
      items: [
        'Oakland Measure Q Program Audit (2023)',
        'California Homelessness Program Audit (2024)',
        'City Department of Human Services reports',
      ],
    },
    {
      category: 'Journalism',
      items: [
        'East Bay Express investigation (2018)',
        'CBS News report on inspector ethics case',
        'Local Oakland press coverage',
      ],
    },
    {
      category: 'Public Databases',
      items: [
        'Oakland property records',
        'Business license records',
        'Public financial disclosures',
        'Permit tracking systems',
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Sources | Swords to Silence</title>
        <meta name="description" content="Complete list of public sources used in our research." />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/" className={styles.backLink}>
            ← Back to Home
          </Link>
          <h1>Sources</h1>
        </header>

        <main className={styles.main}>
          <section className={styles.intro}>
            <p>
              All evidence on this platform comes from public sources. Below is a categorized list of the types of records we use.
            </p>
          </section>

          <section className={styles.sourcesList}>
            {sources.map((sourceGroup, idx) => (
              <div key={idx} className={styles.sourceGroup}>
                <h2>{sourceGroup.category}</h2>
                <ul>
                  {sourceGroup.items.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className={styles.howToAccess}>
            <h2>How to Access These Sources</h2>
            <div className={styles.accessMethods}>
              <div className={styles.method}>
                <h3>Court Records</h3>
                <p>
                  Access through Oakland Superior Court Public Access, California Case Law databases, or court clerk offices.
                </p>
              </div>

              <div className={styles.method}>
                <h3>City Records</h3>
                <p>
                  Request through Oakland Public Records Act (CPRA) requests, or access public databases maintained by the City.
                </p>
              </div>

              <div className={styles.method}>
                <h3>Audit Reports</h3>
                <p>
                  Published by City Auditor and California State Auditor. Available on official city and state websites.
                </p>
              </div>

              <div className={styles.method}>
                <h3>Journalism</h3>
                <p>
                  Published in local and regional press outlets. Archives available through news databases and publication websites.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.contribute}>
            <h2>Have a Public Record to Share?</h2>
            <p>
              If you have access to public documents that are relevant to these cases or the housing-homelessness pipeline, we would like to review them.
            </p>
            <Link href="/submit">Submit Records</Link>
          </section>

          <footer className={styles.footer}>
            <nav className={styles.footerNav}>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/methodology">Methodology</Link>
            </nav>
          </footer>
        </main>
      </div>
    </>
  );
}
