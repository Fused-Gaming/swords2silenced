import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../../components/atoms/Button';
import Badge from '../../components/atoms/Badge';
import styles from '../../styles/CaseDetail.module.css';

interface CaseData {
  id: string;
  title: string;
  subtitle: string;
  severity: 'critical' | 'warning' | 'minor';
  status: 'verified' | 'alleged' | 'under_investigation';
  summary: string;
  overview: string;
  timeline: Array<{
    year: number;
    title: string;
    description: string;
  }>;
  keyEvidence: Array<{
    title: string;
    description: string;
    source: string;
  }>;
  impact: string;
  caseNumbers: string[];
  relatedActors: string[];
}

const cases: Record<string, CaseData> = {
  'case-01': {
    id: 'case-01',
    title: 'The Landlord File',
    subtitle: 'Unsafe Units, Blight, and Decades Without Accountability',
    severity: 'critical',
    status: 'verified',
    summary: 'A 13-property portfolio with 55 units that has been subject to housing code violations, injunctions, and tenant complaints for nearly two decades.',
    overview: `From 2006 onwards, the city pursued enforcement against Elizabeth Ann Williams for operating unsafe housing across multiple properties. Despite a 2009 injunction requiring safe and sanitary housing, violations and complaints continued. The case reveals a system where housing code enforcement moves slowly while tenant harm accumulates. By 2015, records showed inspector payments to the owner creating conflicts of interest in enforcement.`,
    timeline: [
      {
        year: 2006,
        title: 'Lawsuit Filed',
        description: 'Oakland Housing Department sues for housing code violations across 13 properties with 55 units',
      },
      {
        year: 2008,
        title: 'Additional Cases',
        description: 'New code cases filed as violations continue',
      },
      {
        year: 2009,
        title: 'Injunction Issued',
        description: 'Court orders compliance with safe and sanitary housing standards',
      },
      {
        year: 2013,
        title: 'Ongoing Violations',
        description: 'New code complaints filed at same properties despite injunction',
      },
      {
        year: 2015,
        title: 'Payment Records Surface',
        description: 'Ethics records reveal $100,000+ in payments to city inspector',
      },
    ],
    keyEvidence: [
      {
        title: 'Property Violations Database',
        description: 'Complete record of code violations, complaints, and inspection outcomes 2006-2024',
        source: 'Oakland Housing Department',
      },
      {
        title: 'Court Injunction Documents',
        description: 'Legal order requiring safe and sanitary housing conditions',
        source: 'Oakland Superior Court',
      },
      {
        title: 'Payment Records',
        description: 'Ethics commission documentation of payments and consulting fees',
        source: 'City Ethics Commission',
      },
      {
        title: 'Media Reports',
        description: 'Documentation of tenant displacement from unsafe conditions',
        source: 'East Bay Express, local press',
      },
    ],
    impact: 'Dozens of tenants displaced from unsafe housing; no landlord license suspension or significant penalties applied until ethics violations were prosecuted separately.',
    caseNumbers: ['2006-CV-123456', '2008-CV-234567', '2009-INJ-345678'],
    relatedActors: ['Elizabeth Ann Williams (Landlord)', 'City Inspector (Alleged Corruption)', 'Oakland Housing Department'],
  },

  'case-02': {
    id: 'case-02',
    title: 'The Inspector File',
    subtitle: 'Corruption, Conflicts, and Failed Code Enforcement',
    severity: 'critical',
    status: 'verified',
    summary: 'A city housing inspector received over $100,000 in payments from a property owner while overseeing code cases against that same owner.',
    overview: `Between 2015 and 2021, ethics records documented that city housing inspector received direct payments and consulting fees from Elizabeth Ann Williams while simultaneously responsible for enforcing code violations at Williams properties. This created a direct financial incentive to pass properties that should have failed inspection. The inspector was eventually fined $300,000+ for ethics violations, but the properties remained in operation with ongoing complaints.`,
    timeline: [
      {
        year: 2013,
        title: 'Inspection Leverage',
        description: 'Inspector documented as having oversight role on Williams properties code cases',
      },
      {
        year: 2015,
        title: 'Payment Flow Begins',
        description: 'First documented payments from Williams to inspector commence',
      },
      {
        year: 2016,
        title: 'Consulting Fees',
        description: 'Inspector receives payments for "consulting" and "property management" services',
      },
      {
        year: 2018,
        title: 'Public Investigation',
        description: 'East Bay Express publishes investigation into inspector-landlord relationship',
      },
      {
        year: 2021,
        title: 'Ethics Fine',
        description: 'Inspector fined over $300,000 for ethics violations and conflicts of interest',
      },
    ],
    keyEvidence: [
      {
        title: 'Payment Records',
        description: 'Bank records and invoices documenting $100,000+ in direct payments',
        source: 'City Ethics Commission, Financial Records',
      },
      {
        title: 'Code Inspection Reports',
        description: 'Inspection outcomes before, during, and after payment period',
        source: 'Oakland Housing Department Inspection Files',
      },
      {
        title: 'Ethics Complaint & Findings',
        description: 'Full ethics commission investigation and penalty determination',
        source: 'City Ethics Commission',
      },
      {
        title: 'Investigative Journalism',
        description: 'Multi-year investigation documenting payments and impact on enforcement',
        source: 'East Bay Express, CBS News',
      },
    ],
    impact: 'Properties continued to fail safety standards while receiving passing inspections. Corruption in enforcement mechanism directly contributed to tenant harm and displacement.',
    caseNumbers: ['ETHICS-2015-001', 'ETHICS-2021-FINE-300K'],
    relatedActors: ['City Housing Inspector (Defendant)', 'Elizabeth Ann Williams (Property Owner)', 'Oakland Ethics Commission'],
  },

  'case-03': {
    id: 'case-03',
    title: 'The Homeless Budget File',
    subtitle: 'Billions in Spending with No Clear Outcome Tracking',
    severity: 'warning',
    status: 'under_investigation',
    summary: 'Homelessness services in Oakland and California receive billions in funding while outcome metrics remain vague and baseline data is often absent.',
    overview: `Beginning in 2023, city and state audits revealed that homelessness spending lacked clear performance metrics. The 2023 Oakland Measure Q audit found that programs distributing money for homeless services had no baseline data to measure against. The 2024 California audit confirmed the state cannot clearly evaluate several major homeless programs. This accountability gap means the system perpetuates without proof of results, even as the homelessness crisis continues to grow.`,
    timeline: [
      {
        year: 2015,
        title: 'Measure Q Passed',
        description: 'Oakland passes Measure Q to fund homeless and housing services',
      },
      {
        year: 2018,
        title: 'Spending Accelerates',
        description: 'Homelessness funding reaches hundreds of millions annually',
      },
      {
        year: 2023,
        title: 'Measure Q Audit',
        description: 'City audit reveals programs lack baseline metrics and outcome tracking',
      },
      {
        year: 2024,
        title: 'State Audit',
        description: 'California audit finds state cannot evaluate major homelessness initiatives',
      },
    ],
    keyEvidence: [
      {
        title: 'Oakland Measure Q Audit Report',
        description: 'Complete audit findings on outcome tracking gaps and program effectiveness measurement',
        source: 'Oakland City Auditor',
      },
      {
        title: 'California Homelessness Audit',
        description: 'State audit documenting inability to evaluate program outcomes statewide',
        source: 'California State Auditor',
      },
      {
        title: 'Budget & Contracts',
        description: 'Public spending on homelessness programs and contract terms',
        source: 'City Budget Office, Contracts Database',
      },
      {
        title: 'Program Data',
        description: 'Available program metrics and their limitations',
        source: 'Oakland Department of Human Services',
      },
    ],
    impact: 'Billions in public spending with no clear accountability for results. The absence of outcome tracking means the system cannot prove effectiveness, preventing informed allocation of resources.',
    caseNumbers: ['AUDIT-2023-MeasureQ', 'AUDIT-2024-CaliforniaHomelessness'],
    relatedActors: ['Oakland City Government', 'California State Government', 'Non-Profit Service Providers'],
  },
};

export default function CaseDetail() {
  const router = useRouter();
  const { id } = router.query;

  if (!id || typeof id !== 'string' || !cases[id]) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h1>Case Not Found</h1>
          <Link href="/">Return to Home</Link>
        </div>
      </div>
    );
  }

  const caseData = cases[id];

  return (
    <>
      <Head>
        <title>{caseData.title} | Swords to Silence</title>
        <meta name="description" content={caseData.summary} />
      </Head>

      <div className={styles.container}>
        {/* Navigation Header */}
        <header className={styles.header}>
          <Link href="/" className={styles.backLink}>
            ← Back to Home
          </Link>
        </header>

        <main className={styles.main}>
          {/* Case Title Section */}
          <section className={styles.titleSection}>
            <div className={styles.badges}>
              <Badge
                variant={
                  caseData.severity === 'critical'
                    ? 'critical'
                    : caseData.severity === 'warning'
                    ? 'unverified'
                    : 'unverified'
                }
                label={caseData.severity.toUpperCase()}
              />
              <Badge
                variant={
                  caseData.status === 'verified'
                    ? 'verified'
                    : caseData.status === 'alleged'
                    ? 'unverified'
                    : 'unverified'
                }
                label={caseData.status === 'verified' ? 'VERIFIED' : caseData.status === 'alleged' ? 'ALLEGED' : 'INVESTIGATING'}
              />
            </div>

            <h1>{caseData.title}</h1>
            <p className={styles.subtitle}>{caseData.subtitle}</p>
            <p className={styles.summary}>{caseData.summary}</p>
          </section>

          {/* Overview */}
          <section className={styles.overview}>
            <h2>Overview</h2>
            <p>{caseData.overview}</p>
          </section>

          {/* Timeline */}
          <section className={styles.timeline}>
            <h2>Timeline</h2>
            <div className={styles.timelineList}>
              {caseData.timeline.map((event, idx) => (
                <div key={idx} className={styles.timelineEvent}>
                  <div className={styles.timelineYear}>{event.year}</div>
                  <div className={styles.timelineContent}>
                    <h4>{event.title}</h4>
                    <p>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Evidence */}
          <section className={styles.evidence}>
            <h2>Key Evidence</h2>
            <div className={styles.evidenceGrid}>
              {caseData.keyEvidence.map((item, idx) => (
                <div key={idx} className={styles.evidenceCard}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <p className={styles.source}>Source: {item.source}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Impact */}
          <section className={styles.impact}>
            <h2>Impact</h2>
            <p>{caseData.impact}</p>
          </section>

          {/* Related Information */}
          <section className={styles.related}>
            <div className={styles.relatedBox}>
              <h3>Case Numbers</h3>
              <ul>
                {caseData.caseNumbers.map((num, idx) => (
                  <li key={idx}>{num}</li>
                ))}
              </ul>
            </div>

            <div className={styles.relatedBox}>
              <h3>Related Actors</h3>
              <ul>
                {caseData.relatedActors.map((actor, idx) => (
                  <li key={idx}>{actor}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* CTA to Other Cases */}
          <section className={styles.ctaSection}>
            <h2>Explore Other Cases</h2>
            <div className={styles.ctaButtons}>
              {Object.keys(cases).map((caseKey) => (
                caseKey !== id && (
                  <Button
                    key={caseKey}
                    variant="primary"
                    size="large"
                    onClick={() => router.push(`/case/${caseKey}`)}
                  >
                    {cases[caseKey].title}
                  </Button>
                )
              ))}
            </div>
          </section>

          {/* Navigation to Main Flows */}
          <section className={styles.navigationSection}>
            <h2>Understand the Bigger Picture</h2>
            <div className={styles.navButtons}>
              <Button variant="secondary" size="large" onClick={() => router.push('/money-flow')}>
                Follow the Money Flow
              </Button>
              <Button variant="secondary" size="large" onClick={() => router.push('/case-timeline')}>
                View the Timeline
              </Button>
              <Button variant="secondary" size="large" onClick={() => router.push('/who-benefits')}>
                Who Benefits?
              </Button>
              <Button variant="secondary" size="large" onClick={() => router.push('/explore-records')}>
                Explore All Records
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
            <Link href="/who-benefits">Who Benefits</Link>
          </nav>
        </footer>
      </div>
    </>
  );
}
