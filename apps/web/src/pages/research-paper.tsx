import Head from 'next/head';
import Link from 'next/link';
import PDFViewer from '../components/composites/PDFViewer';
import styles from '../styles/ResearchPaper.module.css';

export default function ResearchPaper() {
  const pdfUrl = '/research-papers/Veteran_Service_Paradox.pdf';
  const paperTitle = 'The Veteran Services Paradox: Marketing Speech for Political Gains';

  return (
    <>
      <Head>
        <title>Research Paper | Swords to Silence</title>
        <meta name="description" content="Research papers and supplemental analysis for Swords to Silence." />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/" className={styles.backLink}>
            ← Back to Home
          </Link>
          <h1>Research & Analysis</h1>
        </header>

        <main className={styles.main}>
          <section className={styles.intro}>
            <h2>Featured Research</h2>
            <p>
              The research below uses mathematical analysis to examine structural patterns in systems designed to serve a public purpose but functioning with inverted feedback loops and captured incentives.
            </p>
            <p>
              All analysis is published under the Hybrid Prosecutorial Research Standard (HPRS) Version 1.0, with full falsifiability criteria documented in each work.
            </p>
          </section>

          <section className={styles.paperSection}>
            <article className={styles.paperCard}>
              <div className={styles.paperMeta}>
                <h3>{paperTitle}</h3>
                <div className={styles.meta}>
                  <span className={styles.author}>C. B. Tinker · Independent Researcher</span>
                  <span className={styles.date}>April 2026</span>
                  <span className={styles.doi}>DOI: 10.5281/zenodo.19302778</span>
                </div>
              </div>

              <div className={styles.abstract}>
                <h4>Abstract</h4>
                <p>
                  A measurable paradox now exists in the California veteran services system and, to a demonstrable extent, in the federal veteran services system as a whole. Between fiscal year 2015 and fiscal year 2023, federal expenditure on veterans attributable to California rose approximately 69 percent while the California veteran population fell 17.5 percent. Total federal spending per California veteran more than doubled. Simultaneously, the VA Office of Inspector General Hotline received increasing numbers of contacts—rising from approximately 18,500 in the six months ending September 2015 to approximately 24,800 in the six months ending September 2025.
                </p>
                <p>
                  This essay presents six independent mathematical methods for analyzing that paradox: Bayes' theorem, compounded probability analysis, signal detection theory (d-prime), Benford's Law analysis, Mann-Kendall trend testing, and Hilbert-Schmidt Independence Criterion adaptation.
                </p>
              </div>

              <div className={styles.methodsHighlight}>
                <h4>Methods Employed</h4>
                <ul className={styles.methodsList}>
                  <li>Method 1: Bayesian Framework for Competing Hypotheses</li>
                  <li>Method 2: Compounded Probability Under Independence Assumption</li>
                  <li>Method 3: Signal Detection Theory (d-prime) Analysis</li>
                  <li>Method 4: Benford's Law Applied to Financial Data</li>
                  <li>Method 5: Mann-Kendall Trend Test with Chow Structural Break</li>
                  <li>Method 6: Hilbert-Schmidt Independence Criterion (HSIC)</li>
                </ul>
              </div>

              <div className={styles.details}>
                <div className={styles.detailItem}>
                  <strong>Publication Status:</strong> Pre-Publication Draft
                </div>
                <div className={styles.detailItem}>
                  <strong>Research Standard:</strong> Hybrid Prosecutorial Research Standard (HPRS) v1.0
                </div>
                <div className={styles.detailItem}>
                  <strong>Data Sources:</strong> Tier 1 (Government & IRS Published Data)
                </div>
                <div className={styles.detailItem}>
                  <strong>Scope:</strong> California Veteran Services System with Federal Architecture Analysis
                </div>
              </div>
            </article>

            <PDFViewer
              pdfUrl={pdfUrl}
              title={paperTitle}
            />
          </section>

          <section className={styles.methodology}>
            <h2>Research Methodology</h2>
            <div className={styles.methodCard}>
              <h3>Data Transparency</h3>
              <p>
                All numerical findings are drawn from published government sources. The VA Geographic Distribution of VA Expenditures, the VA Office of Inspector General Semiannual Reports, and the Veteran Population Projection Model are the authoritative sources cited. Every claim is mapped to a specific falsification condition that a reader can verify independently.
              </p>
            </div>

            <div className={styles.methodCard}>
              <h3>Multiple Convergent Methods</h3>
              <p>
                Rather than relying on a single statistical test, the essay employs six mathematically independent methods. Each operates under different assumption sets; an objection to one does not propagate to the others. The convergence across all six methods toward the same directional conclusion strengthens the finding beyond what any single method alone could establish.
              </p>
            </div>

            <div className={styles.methodCard}>
              <h3>Falsifiability Register</h3>
              <p>
                Each method includes explicit falsification criteria (FR-VSP-01 through FR-VSP-06). The research identifies which specific conditions would require revision of the analysis. This applies the Popperian standard: a claim that cannot be falsified is not a scientific claim.
              </p>
            </div>
          </section>

          <section className={styles.sources}>
            <h2>Source Materials & References</h2>
            <div className={styles.sourceList}>
              <div className={styles.source}>
                <h4>Government Data (Tier 1)</h4>
                <ul>
                  <li>VA Geographic Distribution of VA Expenditures (FY2015–FY2023)</li>
                  <li>VetPop2023: Veteran Population Projection Model</li>
                  <li>VA OIG Semiannual Reports to Congress (FY2015–FY2025)</li>
                  <li>California State Auditor Reports on CDVA</li>
                  <li>Federal Audit Clearinghouse Single Audits</li>
                </ul>
              </div>

              <div className={styles.source}>
                <h4>Methodological References</h4>
                <ul>
                  <li>Jaynes, E. T. Probability Theory: The Logic of Science (2003)</li>
                  <li>Gretton et al. "Measuring Statistical Dependence with Hilbert-Schmidt Norms" (2005)</li>
                  <li>Nigrini, M. J. Benford's Law: Applications for Forensic Accounting (2012)</li>
                  <li>Popper, K. R. The Logic of Scientific Discovery (1959)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.citations}>
            <h2>Citation</h2>
            <div className={styles.citationBox}>
              <code>
                Tinker, C. B. (2026). The Veteran Services Paradox: Marketing Speech for Political Gains.
                Pre-Publication Draft. DOI 10.5281/zenodo.19302778
              </code>
            </div>
          </section>

          <footer className={styles.footer}>
            <nav className={styles.footerNav}>
              <Link href="/">Home</Link>
              <Link href="/methodology">Methodology</Link>
              <Link href="/about">About</Link>
            </nav>
          </footer>
        </main>
      </div>
    </>
  );
}
