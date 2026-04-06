import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../components/atoms/Button';
import styles from '../styles/CaseTimeline.module.css';

export default function CaseTimeline() {
  const router = useRouter();

  const timeline = [
    {
      year: 2006,
      title: 'Lawsuit Filed',
      description: 'Oakland sues Elizabeth Ann Williams over 13 properties / 55 units',
      category: 'litigation',
    },
    {
      year: 2009,
      title: 'Injunction Issued',
      description: 'Court injunction requires safe and sanitary housing',
      category: 'litigation',
    },
    {
      year: 2013,
      title: 'Continued Violations',
      description: 'New code complaints continue around Williams properties',
      category: 'violation',
    },
    {
      year: 2015,
      title: 'Ethics Records Surface',
      description: 'City ethics records document $100,000+ in payments from Williams to city inspector, plus additional consulting/contracting work',
      category: 'ethics',
    },
    {
      year: 2018,
      title: 'Media Investigation',
      description: 'East Bay Express reports on inspector case and ties it to tenant displacement efforts',
      category: 'press',
    },
    {
      year: 2021,
      title: 'Ethics Fine',
      description: 'Inspector fined more than $300,000 for ethics violations',
      category: 'ethics',
    },
    {
      year: 2023,
      title: 'Audit Gap Revealed',
      description: 'Oakland Measure Q audit finds homelessness outcomes around parks lacked baseline/performance data',
      category: 'audit',
    },
    {
      year: 2024,
      title: 'State Audit',
      description: 'Statewide audit confirms California still cannot clearly evaluate several major homeless programs',
      category: 'audit',
    },
  ];

  const categoryColors: Record<string, string> = {
    litigation: 'var(--color-critical)',
    violation: 'var(--color-warning)',
    ethics: 'var(--color-critical)',
    press: 'var(--color-info)',
    audit: 'var(--color-warning)',
  };

  return (
    <>
      <Head>
        <title>Case Timeline | Swords to Silence</title>
        <meta name="description" content="Timeline of housing violations, corruption, and audit gaps from 2006 to 2024." />
      </Head>

      <div className={styles.container}>
        {/* Navigation Header */}
        <header className={styles.header}>
          <Link href="/" className={styles.backLink}>
            ← Back to Home
          </Link>
          <h1>Case Timeline</h1>
          <p>2006–2024: From Housing Violations to Homelessness Accountability Gaps</p>
        </header>

        <main className={styles.main}>
          {/* Timeline Display */}
          <section className={styles.timelineSection}>
            <div className={styles.timeline}>
              {timeline.map((event, index) => (
                <div key={index} className={styles.timelineEvent}>
                  <div className={styles.timelineMarker}>
                    <div
                      className={styles.dot}
                      style={{ backgroundColor: categoryColors[event.category] }}
                    />
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.year}>{event.year}</div>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    <span className={styles.category}>{event.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Patterns Section */}
          <section className={styles.patterns}>
            <h2>Key Patterns</h2>
            <div className={styles.patternGrid}>
              <div className={styles.patternCard}>
                <h3>Housing Crisis Ignored</h3>
                <p>
                  From 2006-2013, violations continued at the same properties despite court injunctions. The system was designed to enforce but did not.
                </p>
              </div>
              <div className={styles.patternCard}>
                <h3>Corruption Documented</h3>
                <p>
                  Payments and consulting fees linked code case outcomes. The inspector tasked with enforcing codes was financially benefiting from the landlord.
                </p>
              </div>
              <div className={styles.patternCard}>
                <h3>Accountability Gap</h3>
                <p>
                  By 2023-2024, audits revealed homelessness outcomes lacked measurement. The downstream crisis had no clear accountability either.
                </p>
              </div>
            </div>
          </section>

          {/* Connection to Homelessness */}
          <section className={styles.connection}>
            <h2>The Pipeline Connection</h2>
            <div className={styles.connectionFlow}>
              <div className={styles.flowBox}>
                <h4>2006-2015</h4>
                <p>Housing neglect + Inspector corruption</p>
              </div>
              <div className={styles.arrow}>→</div>
              <div className={styles.flowBox}>
                <h4>2015-2021</h4>
                <p>Tenants displaced from unsafe conditions</p>
              </div>
              <div className={styles.arrow}>→</div>
              <div className={styles.flowBox}>
                <h4>2023-2024</h4>
                <p>Homelessness systems have no outcome tracking</p>
              </div>
            </div>
            <p className={styles.connectionText}>
              The same timeline shows housing failure, corruption, and then homelessness accountability gaps. These are not separate crises—they are sequential failures of the same system.
            </p>
          </section>

          {/* Evidence & Sources */}
          <section className={styles.evidence}>
            <h2>Evidence Sources</h2>
            <div className={styles.sourceList}>
              <div className={styles.source}>
                <h4>City Litigation Records</h4>
                <p>Oakland Housing Department case files, 2006-present</p>
              </div>
              <div className={styles.source}>
                <h4>Ethics Commission Files</h4>
                <p>City Ethics Commission records, payment documentation, 2015-2021</p>
              </div>
              <div className={styles.source}>
                <h4>Audit Reports</h4>
                <p>Oakland Measure Q audit, California homelessness audit, 2023-2024</p>
              </div>
              <div className={styles.source}>
                <h4>Media Reports</h4>
                <p>East Bay Express, CBS News, local press coverage</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className={styles.ctaSection}>
            <h2>Explore the Full Cases</h2>
            <div className={styles.ctaButtons}>
              <Button
                variant="primary"
                size="large"
                onClick={() => router.push('/case/case-01')}
              >
                Case 01: The Landlord File
              </Button>
              <Button
                variant="primary"
                size="large"
                onClick={() => router.push('/case/case-02')}
              >
                Case 02: The Inspector File
              </Button>
              <Button
                variant="primary"
                size="large"
                onClick={() => router.push('/case/case-03')}
              >
                Case 03: The Budget File
              </Button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className={styles.footer}>
          <nav className={styles.footerNav}>
            <Link href="/">Home</Link>
            <Link href="/money-flow">Money Flow</Link>
            <Link href="/explore-records">Records</Link>
            <Link href="/who-benefits">Who Benefits</Link>
          </nav>
        </footer>
      </div>
    </>
  );
}
