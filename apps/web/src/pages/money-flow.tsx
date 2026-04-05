import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../components/atoms/Button';
import styles from '../styles/MoneyFlow.module.css';

export default function MoneyFlow() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Follow the Money | Swords to Silence</title>
        <meta name="description" content="Trace the financial pipeline from rental property income through housing neglect, corruption, displacement, and into homelessness systems." />
      </Head>

      <div className={styles.container}>
        {/* Navigation Header */}
        <header className={styles.header}>
          <Link href="/" className={styles.backLink}>
            ← Back to Home
          </Link>
          <h1>Follow the Money</h1>
          <p>The financial pipeline from property income to public spending with no accountability</p>
        </header>

        <main className={styles.main}>
          {/* Main Flow Diagram */}
          <section className={styles.flowSection}>
            <h2>The Pipeline</h2>
            <div className={styles.flowDiagram}>
              <div className={styles.flowNode}>
                <h3>Rental Property Income</h3>
                <p>Income from properties with known code violations</p>
              </div>
              <div className={styles.connector}>↓</div>

              <div className={styles.flowNode}>
                <h3>Blight / Code Case</h3>
                <p>Building violations, safety hazards, tenant complaints</p>
              </div>
              <div className={styles.connector}>↓</div>

              <div className={styles.flowNode}>
                <h3>Inspector / Passes</h3>
                <p>Properties pass despite violations</p>
                <em>Alleged: bribes, favors, consulting payments</em>
              </div>
              <div className={styles.connector}>↓</div>

              <div className={styles.flowNode}>
                <h3>Tenant Harm / Exit</h3>
                <p>Residents forced out or flee unsafe conditions</p>
              </div>
              <div className={styles.connector}>↓</div>

              <div className={styles.flowNode}>
                <h3>Homeless Services</h3>
                <p>Displaced residents enter shelter and support systems</p>
              </div>
              <div className={styles.connector}>↓</div>

              <div className={styles.flowNode}>
                <h3>Public Funding</h3>
                <p>Billions in grants, contracts, and programs</p>
                <em>Problem: Outcomes often not well tracked</em>
              </div>
            </div>
          </section>

          {/* Key Insights */}
          <section className={styles.insights}>
            <h2>Key Insights</h2>
            <div className={styles.insightGrid}>
              <div className={styles.insightCard}>
                <h3>The Cycle Never Closes</h3>
                <p>
                  Weak tracking and vague metrics mean problems cycle repeatedly. The same neighborhoods experience housing failures again and again, creating predictable homelessness pipelines while spending increases without clear outcomes.
                </p>
              </div>
              <div className={styles.insightCard}>
                <h3>Multiple Incentive Failures</h3>
                <p>
                  Landlords benefit from collecting rent while delaying repairs. Inspectors may benefit from corruption. Cities manage spending without proving results. The system is designed to perpetuate itself.
                </p>
              </div>
              <div className={styles.insightCard}>
                <h3>The Accountability Gap</h3>
                <p>
                  2023 audits revealed homelessness outcome data often lacked baselines. 2024 statewide audits confirmed California cannot clearly evaluate major homeless programs. This gap allows the cycle to continue.
                </p>
              </div>
            </div>
          </section>

          {/* Case Example Section */}
          <section className={styles.caseExample}>
            <h2>Case Example: Oakland</h2>
            <div className={styles.timeline}>
              <div className={styles.timelineBlock}>
                <h4>2006</h4>
                <p>Oakland sues landlord for 13 properties with 55 unsafe units</p>
              </div>
              <div className={styles.timelineBlock}>
                <h4>2009</h4>
                <p>Court issues injunction requiring safe and sanitary housing</p>
              </div>
              <div className={styles.timelineBlock}>
                <h4>2013+</h4>
                <p>New code complaints continue around same properties</p>
              </div>
              <div className={styles.timelineBlock}>
                <h4>2015</h4>
                <p>City ethics records document $100,000+ in payments to city inspector</p>
              </div>
              <div className={styles.timelineBlock}>
                <h4>2021</h4>
                <p>Inspector fined $300,000+ for ethics violations</p>
              </div>
            </div>
          </section>

          {/* CTA to Explore Cases */}
          <section className={styles.ctaSection}>
            <h2>Explore the Full Documentation</h2>
            <div className={styles.ctaButtons}>
              <Button
                variant="primary"
                size="large"
                onClick={() => router.push('/case/case-01')}
              >
                The Landlord File
              </Button>
              <Button
                variant="primary"
                size="large"
                onClick={() => router.push('/case/case-02')}
              >
                The Inspector File
              </Button>
              <Button
                variant="primary"
                size="large"
                onClick={() => router.push('/case/case-03')}
              >
                The Budget File
              </Button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className={styles.footer}>
          <nav className={styles.footerNav}>
            <Link href="/">Home</Link>
            <Link href="/explore-records">Explore Records</Link>
            <Link href="/case-timeline">Timeline</Link>
            <Link href="/who-benefits">Who Benefits</Link>
          </nav>
        </footer>
      </div>
    </>
  );
}
