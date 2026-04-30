import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/LandingPage.module.css';

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id || '']: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-fade]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const fadeClass = (id: string) => `${styles.fade} ${visibleSections[id] ? styles.visible : ''}`;

  return (
    <>
      <Head>
        <title>A System That Cannot Be Working</title>
        <meta
          name="description"
          content="Federal housing funding analysis revealing systemic failures in housing assistance programs."
        />
        <meta property="og:title" content="A System That Cannot Be Working" />
        <meta
          property="og:description"
          content="Federal housing funding analysis revealing systemic failures in housing assistance programs."
        />
        <meta property="og:url" content="https://swordstosilence.com" />
        <meta property="og:type" content="website" />
      </Head>

      <div className={styles.container}>
        {/* HERO */}
        <section id="hero" className={fadeClass('hero')} data-fade>
          <h1>A SYSTEM THAT CANNOT BE WORKING</h1>

          <p className={styles.subtitle}>
            $100M+ in federal housing funding.
            <br />
            More money. More organizations. More "success."
          </p>

          <p className={styles.highlight}>And more complaints than ever.</p>

          <p className={styles.body}>
            That combination is mathematically improbable — and demands explanation.
          </p>

          <Link href="/narrative-launch" className={styles.cta}>
            Read the Investigation
          </Link>
        </section>

        <div className={styles.divider} />

        {/* CREDIBILITY */}
        <section id="credibility" className={fadeClass('credibility')} data-fade>
          <h2>Grounded in Public Data</h2>

          <p>
            Federal expenditure records, IRS nonprofit filings, inspector general complaint logs,
            and state audit reports.
          </p>

          <p className={styles.small}>
            Analyzed using independent statistical methods including probability modeling, trend
            analysis, and system-level evaluation.
          </p>
        </section>

        <div className={styles.divider} />

        {/* PARADOX */}
        <section id="paradox" className={fadeClass('paradox')} data-fade>
          <h2>The Paradox</h2>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Expected</h3>
              <p>More funding → better outcomes → fewer complaints</p>
            </div>

            <div className={styles.card}>
              <h3>Observed</h3>
              <p>More funding → more intermediaries → more complaints</p>
            </div>
          </div>

          <p className={styles.paradoxNote}>
            These trajectories should not occur together in a functioning system.
          </p>
        </section>

        <div className={styles.divider} />

        {/* DATA */}
        <section id="data" className={fadeClass('data')} data-fade>
          <h2>The Data Signals</h2>

          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.big}>+69%</div>
              <p>Funding increase</p>
            </div>

            <div className={styles.card}>
              <div className={styles.big}>−17.5%</div>
              <p>Population change</p>
            </div>

            <div className={styles.card}>
              <div className={styles.big}>+104%</div>
              <p>Per-person spending</p>
            </div>

            <div className={styles.card}>
              <div className={styles.big}>↑</div>
              <p>Complaint volume</p>
            </div>
          </div>
        </section>

        <div className={styles.divider} />

        {/* IMPACT */}
        <section id="impact" className={fadeClass('impact')} data-fade>
          <h2>Human Impact</h2>

          <ul>
            <li>Housing instability among vulnerable populations</li>
            <li>Financial and administrative breakdowns</li>
            <li>Retaliation risks for those raising concerns</li>
          </ul>
        </section>

        <div className={styles.divider} />

        {/* SYSTEM */}
        <section id="system" className={fadeClass('system')} data-fade>
          <h2>Structural Signals</h2>

          <ul>
            <li>Limited mechanisms to report failure</li>
            <li>Weak feedback loops in oversight systems</li>
            <li>Incentives tied to expansion, not outcomes</li>
          </ul>
        </section>

        <div className={styles.divider} />

        {/* CASES */}
        <section id="cases" className={fadeClass('cases')} data-fade>
          <h2>Featured Cases</h2>

          <p>
            Explore documented cases of systemic failures in housing and homeless services. Each case represents
            real people affected by policy failures and institutional negligence.
          </p>

          <p className={styles.small}>
            Case documentation coming soon. Community submissions and verified evidence drive this archive.
          </p>
        </section>

        <div className={styles.divider} />

        {/* SUBMIT */}
        <section id="submit" className={fadeClass('submit')} data-fade>
          <h2>Submit Your Evidence</h2>

          <p>
            Have a story or evidence of housing-homelessness pipeline failures? Contribute to our growing database
            of documented accountability. Your testimony matters.
          </p>

          <p className={styles.small}>
            Submit through <Link href="/testimony">Personal Testimony</Link> or contact us with documented evidence.
          </p>
        </section>

        <div className={styles.divider} />

        {/* CTA */}
        <section id="cta" className={fadeClass('cta')} data-fade style={{ textAlign: 'center' }}>
          <h2>Explore the Evidence</h2>

          <p className={styles.small}>Review the data, methodology, and documented cases.</p>

          <Link href="/narrative-launch" className={styles.cta}>
            Read Full Report
          </Link>
        </section>

        {/* FOOTER */}
        <div className={styles.footer} id="contact">
          <p>Built on publicly available data.</p>
          <p>All claims traceable to primary sources.</p>
          <p>Transparency and verification prioritized.</p>
        </div>
      </div>
    </>
  );
}
