import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../components/atoms/Button';
import styles from '../styles/WhoBenefits.module.css';

export default function WhoBenefits() {
  const router = useRouter();

  const actors = [
    {
      id: 'landlords',
      name: 'Landlords',
      role: 'Property owners receiving rental income',
      benefits: ['Collecting rent while deferring repairs', 'Evicting tenants without accountability', 'Benefiting from corruption in inspection process'],
      example: 'Elizabeth Ann Williams: 13 properties, 55 units, decades of violations',
    },
    {
      id: 'inspectors',
      name: 'Corrupt Inspectors',
      role: 'City enforcement officials',
      benefits: ['Direct payments from landlords', 'Consulting fees for "property management"', 'Leverage over landlords for stops/starts'],
      example: '$100,000+ in payments documented; $300,000+ in fines assessed',
    },
    {
      id: 'city',
      name: 'City Government',
      role: 'Enforcement and service providers',
      benefits: ['Appearance of enforcement without results', 'Managing homeless services contracts', 'Weak outcome tracking = no accountability'],
      example: 'Audits reveal homelessness spending lacks baseline data',
    },
    {
      id: 'homeless-services',
      name: 'Homeless Services Industry',
      role: 'Non-profits and contractors',
      benefits: ['Recurring contracts for services', 'Weak outcome requirements', 'Predictable demand from ongoing pipeline'],
      example: 'Billions in spending with vague metrics and limited result tracking',
    },
  ];

  const relationships = [
    {
      from: 'Landlords',
      to: 'Inspectors',
      connection: 'Payments / Favors',
      impact: 'Code violations go unpunished; properties pass inspection',
    },
    {
      from: 'Inspectors',
      to: 'City',
      connection: 'False Enforcement',
      impact: 'City claims enforcement success; problem hides from public',
    },
    {
      from: 'Tenants',
      to: 'Landlords',
      connection: 'Unsafe Conditions',
      impact: 'Residents displaced from housing',
    },
    {
      from: 'Displaced Tenants',
      to: 'Homeless Services',
      connection: 'Enter System',
      impact: 'Predictable demand for services',
    },
    {
      from: 'City',
      to: 'Homeless Services',
      connection: 'Contracts / Audits',
      impact: 'Funds flow with weak outcome requirements',
    },
    {
      from: 'Public',
      to: 'All',
      connection: 'Tax Dollars / Exposure',
      impact: 'Pays for both housing failures and homeless services',
    },
  ];

  return (
    <>
      <Head>
        <title>Who Benefits | Swords to Silence</title>
        <meta name="description" content="Map of how the housing-homelessness pipeline creates financial incentives and accountability failures." />
      </Head>

      <div className={styles.container}>
        {/* Navigation Header */}
        <header className={styles.header}>
          <Link href="/" className={styles.backLink}>
            ← Back to Home
          </Link>
          <h1>Who Benefits?</h1>
          <p>The incentive structures that create and sustain the pipeline</p>
        </header>

        <main className={styles.main}>
          {/* Actor Profiles */}
          <section className={styles.actors}>
            <h2>The Actors</h2>
            <div className={styles.actorGrid}>
              {actors.map((actor) => (
                <div key={actor.id} className={styles.actorCard}>
                  <h3>{actor.name}</h3>
                  <p className={styles.role}>{actor.role}</p>

                  <h4>How They Benefit:</h4>
                  <ul className={styles.benefits}>
                    {actor.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>

                  <div className={styles.example}>
                    <strong>Example from case:</strong>
                    <p>{actor.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Relationship Map */}
          <section className={styles.relationshipSection}>
            <h2>How They Connect</h2>
            <div className={styles.relationshipMap}>
              <div className={styles.mapDiagram}>
                <div className={`${styles.node} ${styles.nodeA}`}>
                  <div className={styles.nodeLabel}>Landlords</div>
                </div>

                <div className={`${styles.node} ${styles.nodeB}`}>
                  <div className={styles.nodeLabel}>Inspectors</div>
                </div>

                <div className={`${styles.node} ${styles.nodeC}`}>
                  <div className={styles.nodeLabel}>Tenants</div>
                </div>

                <div className={`${styles.node} ${styles.nodeD}`}>
                  <div className={styles.nodeLabel}>City</div>
                </div>

                <div className={`${styles.node} ${styles.nodeE}`}>
                  <div className={styles.nodeLabel}>Homeless Services</div>
                </div>

                {/* Connections */}
                <div className={styles.connections}>
                  <div className={styles.connectionArrow + ' ' + styles.arrow1}>Payments</div>
                  <div className={styles.connectionArrow + ' ' + styles.arrow2}>False enforcement</div>
                  <div className={styles.connectionArrow + ' ' + styles.arrow3}>Unsafe conditions</div>
                  <div className={styles.connectionArrow + ' ' + styles.arrow4}>Displacement</div>
                  <div className={styles.connectionArrow + ' ' + styles.arrow5}>Contracts</div>
                </div>
              </div>

              {/* Relationship Details */}
              <div className={styles.relationshipList}>
                {relationships.map((rel, idx) => (
                  <div key={idx} className={styles.relationshipItem}>
                    <div className={styles.relHeader}>
                      <strong>{rel.from}</strong>
                      <span className={styles.connector}>—</span>
                      <strong>{rel.to}</strong>
                    </div>
                    <div className={styles.relConnection}>{rel.connection}</div>
                    <div className={styles.relImpact}>Impact: {rel.impact}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* The Problem */}
          <section className={styles.problem}>
            <h2>Why This System Persists</h2>
            <div className={styles.problemCards}>
              <div className={styles.problemCard}>
                <h3>Incentive Misalignment</h3>
                <p>
                  Everyone in the system benefits from the status quo except tenants. Landlords profit from cheap housing without maintenance. Inspectors profit from corruption. Cities profit from the appearance of enforcement without real costs. Homeless services have predictable funding.
                </p>
              </div>

              <div className={styles.problemCard}>
                <h3>Accountability Vacuum</h3>
                <p>
                  Housing violations take years to prosecute. Corruption is caught by accident. Homeless program outcomes are not measured. No one asks: why do the same buildings create the same displacement decade after decade?
                </p>
              </div>

              <div className={styles.problemCard}>
                <h3>Predictable Pipeline</h3>
                <p>
                  The system is so reliable that it creates funding certainty. If housing failures are predictable, homelessness is predictable. And if homelessness is predictable, government contracts are predictable. The cycle self-sustains.
                </p>
              </div>
            </div>
          </section>

          {/* What Would Change It */}
          <section className={styles.solutions}>
            <h2>What Would Change This?</h2>
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <h3>Enforcement with Teeth</h3>
                <p>Real consequences for code violations, not just paper orders. Fast-track litigation. Mandatory repairs or property seizure.</p>
              </div>

              <div className={styles.solutionCard}>
                <h3>Corruption Prosecution</h3>
                <p>Regular audits of inspector-landlord relationships. Financial transparency. Prosecution of bribes as crimes, not ethics violations.</p>
              </div>

              <div className={styles.solutionCard}>
                <h3>Outcome Tracking</h3>
                <p>Require homeless programs to track outcomes with baseline data. End funding without measurement. Trace long-term results, not just service counts.</p>
              </div>

              <div className={styles.solutionCard}>
                <h3>Prevention Over Service</h3>
                <p>Fund housing preservation, not just housing rescue. Make enforcement cheaper than homelessness management. Break the pipeline, not just the symptom.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className={styles.ctaSection}>
            <h2>Understand the Full Picture</h2>
            <div className={styles.ctaButtons}>
              <Button
                variant="primary"
                size="large"
                onClick={() => router.push('/money-flow')}
              >
                Follow the Money Flow
              </Button>
              <Button
                variant="primary"
                size="large"
                onClick={() => router.push('/case-timeline')}
              >
                View the Timeline
              </Button>
              <Button
                variant="primary"
                size="large"
                onClick={() => router.push('/explore-records')}
              >
                Search the Records
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
            <Link href="/case-timeline">Timeline</Link>
          </nav>
        </footer>
      </div>
    </>
  );
}
