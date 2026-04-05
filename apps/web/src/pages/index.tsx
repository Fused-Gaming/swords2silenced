import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../components/atoms/Button';
import Logo from '../components/atoms/Logo';
import CaseCard from '../components/composites/CaseCard';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const cases = [
    {
      id: 'case-01',
      title: 'The Landlord File',
      summary: 'Unsafe units, injunctions, fires, and complaints spanning decades without accountability.',
      tags: ['housing', 'enforcement', 'displacement'],
      severity: 'critical' as const,
      status: 'verified' as const,
      evidenceCount: 12,
      sourceCount: 8,
    },
    {
      id: 'case-02',
      title: 'The Inspector File',
      summary: 'Bribes, conflicts of interest, and leverage used to pass properties that should have failed inspection.',
      tags: ['corruption', 'enforcement-failure', 'permits'],
      severity: 'critical' as const,
      status: 'verified' as const,
      evidenceCount: 18,
      sourceCount: 12,
    },
    {
      id: 'case-03',
      title: 'The Homeless Budget File',
      summary: 'Billions in spending with weak outcome tracking and accountability gaps in the entire system.',
      tags: ['public-spending', 'audit-gaps', 'accountability'],
      severity: 'warning' as const,
      status: 'under_investigation' as const,
      evidenceCount: 24,
      sourceCount: 15,
    },
  ];

  const thesis = [
    {
      number: 1,
      title: 'Housing Neglect',
      description: 'Unsafe units, blight, fires, unlivable conditions',
    },
    {
      number: 2,
      title: 'Enforcement Failure',
      description: 'Code cases softened, permits passed, accountability weakened',
    },
    {
      number: 3,
      title: 'Displacement',
      description: 'Tenants pushed out, survival crisis',
    },
    {
      number: 4,
      title: 'Homelessness Narrative',
      description: 'Crisis framed as individual failure, not systems failure',
    },
    {
      number: 5,
      title: 'Public Money',
      description: 'Grants, contracts, programs, audits',
    },
    {
      number: 6,
      title: 'No Real Outcome Loop',
      description: 'Weak tracking, vague metrics, recurring need, recurring spend',
    },
  ];

  return (
    <>
      <Head>
        <title>Swords to Silence | Exposing the Housing-Homelessness Pipeline</title>
        <meta name="description" content="Peel back the system that turns unsafe housing, weak oversight, and public suffering into a managed story." />
        <meta name="og:title" content="Swords to Silence" />
        <meta name="og:description" content="Exposing the housing-homelessness pipeline" />
        <meta name="og:url" content="https://swordstosilence.com" />
        <meta name="og:type" content="website" />
      </Head>

      <div className={styles.container}>
        {/* Navigation Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <Logo variant="full" />
            <nav className={styles.navBar}>
              <button
                className={styles.navBtn}
                onClick={() => handleNavigation('/money-flow')}
              >
                View the Money Flow
              </button>
              <button
                className={styles.navBtn}
                onClick={() => handleNavigation('/explore-records')}
              >
                Explore Records
              </button>
              <button
                className={styles.navBtn}
                onClick={() => handleNavigation('/case-timeline')}
              >
                Case Timeline
              </button>
              <button
                className={styles.navBtn}
                onClick={() => handleNavigation('/who-benefits')}
              >
                Who Benefits?
              </button>
            </nav>
          </div>
        </header>

        <main className={styles.main}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <h2>The Homeless Crisis Is Not Just a Street Story.</h2>
              <p className={styles.heroSubtitle}>
                It can start in buildings, permits, inspections, courts, contracts, and the people paid to look the other way.
              </p>
              <p className={styles.heroBody}>
                When a tenant lives in dangerous housing, when enforcement fails, when repairs are papered over, when displacement follows, and when billions later move through homeless systems with weak accountability — that is not random failure. That is a pipeline worth exposing.
              </p>
              <div className={styles.heroCTA}>
                <Button
                  variant="primary"
                  size="large"
                  onClick={() => handleNavigation('/money-flow')}
                >
                  Start With Oakland
                </Button>
                <Button
                  variant="secondary"
                  size="large"
                  onClick={() => handleNavigation('/explore-records')}
                >
                  Read the Records
                </Button>
                <Button
                  variant="secondary"
                  size="large"
                  onClick={() => handleNavigation('/who-benefits')}
                >
                  Map the Relationships
                </Button>
              </div>
            </div>
          </section>

          {/* Central Thesis */}
          <section className={styles.thesis}>
            <h3>The Central Thesis</h3>
            <div className={styles.thesisGrid}>
              {thesis.map((item) => (
                <div key={item.number} className={styles.thesisCard}>
                  <div className={styles.thesisNumber}>[{item.number}]</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Money Flow */}
          <section className={styles.moneyFlow}>
            <h3>Follow the Money</h3>
            <div className={styles.moneyFlowDiagram}>
              <div className={styles.flowStep}>
                <h4>Rental Property Income</h4>
              </div>
              <div className={styles.flowArrow}>↓</div>
              <div className={styles.flowStep}>
                <h4>Blight / Code Case</h4>
              </div>
              <div className={styles.flowArrow}>↓</div>
              <div className={styles.flowStep}>
                <h4>Inspector / Passes</h4>
                <p>alleged bribes / favors / consulting payments</p>
              </div>
              <div className={styles.flowArrow}>↓</div>
              <div className={styles.flowStep}>
                <h4>Tenant Harm / Exit</h4>
              </div>
              <div className={styles.flowArrow}>↓</div>
              <div className={styles.flowStep}>
                <h4>Homeless Services</h4>
              </div>
              <div className={styles.flowArrow}>↓</div>
              <div className={styles.flowStep}>
                <h4>Public Funding</h4>
                <p>audits say outcomes often not well tracked</p>
              </div>
            </div>
            <div className={styles.moneyFlowCTA}>
              <Button
                variant="primary"
                onClick={() => handleNavigation('/money-flow')}
              >
                Explore the Full Flow
              </Button>
            </div>
          </section>

          {/* Case Modules */}
          <section className={styles.casesSection}>
            <h3>Case Modules</h3>
            <div className={styles.casesGrid}>
              {cases.map((caseItem) => (
                <div key={caseItem.id} className={styles.caseCardWrapper}>
                  <CaseCard
                    {...caseItem}
                    onViewDetails={() => handleNavigation(`/case/${caseItem.id}`)}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Relationship Map Preview */}
          <section className={styles.relationshipSection}>
            <h3>Documented Relationships</h3>
            <div className={styles.timelinePreview}>
              <div className={styles.timelineItem}>
                <span className={styles.year}>2006</span>
                <p>Oakland sues Elizabeth Ann Williams over 13 properties / 55 units</p>
              </div>
              <div className={styles.timelineItem}>
                <span className={styles.year}>2009</span>
                <p>Injunction requires safe and sanitary housing</p>
              </div>
              <div className={styles.timelineItem}>
                <span className={styles.year}>2015</span>
                <p>Ethics records document $100,000+ in payments from Williams</p>
              </div>
              <div className={styles.timelineItem}>
                <span className={styles.year}>2021</span>
                <p>Inspector fined $300,000+ for ethics violations</p>
              </div>
              <div className={styles.timelineItem}>
                <span className={styles.year}>2023</span>
                <p>Audit reveals homelessness program outcomes lacked baseline data</p>
              </div>
              <div className={styles.timelineItem}>
                <span className={styles.year}>2024</span>
                <p>Statewide audit confirms states cannot evaluate major homeless programs</p>
              </div>
            </div>
            <div className={styles.relationshipCTA}>
              <Button
                variant="primary"
                onClick={() => handleNavigation('/case-timeline')}
              >
                View Full Timeline
              </Button>
              <Button
                variant="secondary"
                onClick={() => handleNavigation('/who-benefits')}
              >
                Map All Relationships
              </Button>
            </div>
          </section>

          {/* Primary CTA Band */}
          <section className={styles.ctaBand}>
            <div className={styles.ctaBandContent}>
              <h3>This Platform Does Not Ask You to Feel Bad.</h3>
              <p>It Asks You to Trace Responsibility.</p>
              <div className={styles.searchCTA}>
                <Button variant="primary" size="large">
                  Search Addresses
                </Button>
                <Button variant="primary" size="large">
                  Search Names
                </Button>
                <Button variant="primary" size="large">
                  Search Payments
                </Button>
                <Button variant="primary" size="large">
                  Search City Records
                </Button>
              </div>
            </div>
          </section>

          {/* Source Strip */}
          <section className={styles.sources}>
            <h3>Sources</h3>
            <div className={styles.sourceCategories}>
              <div className={styles.sourceCategory}>
                <h4>News</h4>
                <p>Oakland press reports</p>
              </div>
              <div className={styles.sourceCategory}>
                <h4>Records</h4>
                <p>City PDFs and exhibits</p>
              </div>
              <div className={styles.sourceCategory}>
                <h4>Ethics Cases</h4>
                <p>Inspector cases and findings</p>
              </div>
              <div className={styles.sourceCategory}>
                <h4>Audits</h4>
                <p>Measure Q + CA audit</p>
              </div>
              <div className={styles.sourceCategory}>
                <h4>Video</h4>
                <p>Testimony clips</p>
              </div>
              <div className={styles.sourceCategory}>
                <h4>Timelines</h4>
                <p>Displacement path from unit to street</p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerMain}>
              <h4>swordstosilence.com</h4>
              <p>Exposing the paper trail between unsafe housing, failed enforcement, displacement, and unaccountable systems</p>
            </div>
            <nav className={styles.footerLinks}>
              <Link href="/about">About</Link>
              <Link href="/methodology">Methodology</Link>
              <Link href="/sources">Sources</Link>
              <Link href="/submit">Submit Records</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2024 Swords to Silence. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
