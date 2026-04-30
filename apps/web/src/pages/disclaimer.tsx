import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Disclaimer.module.css';

export default function Disclaimer() {
  return (
    <>
      <Head>
        <title>Legal Disclaimer | Swords to Silence</title>
        <meta
          name="description"
          content="Legal disclaimer for Swords to Silence. Important information about how to use our research and content."
        />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/" className={styles.backLink}>
            ← Back to Home
          </Link>
          <h1>Legal Disclaimer</h1>
          <p className={styles.lastUpdated}>Last updated: April 2026</p>
        </header>

        <main className={styles.main}>
          <section className={styles.warningBox}>
            <h2>IMPORTANT LEGAL NOTICE</h2>
            <p>
              <strong>
                This website presents publicly sourced research and documentation for informational and
                educational purposes only. It is not a substitute for professional legal, medical, financial,
                or other expert advice.
              </strong>
            </p>
          </section>

          <section className={styles.section}>
            <h2>1. Educational and Research Purpose</h2>
            <p>
              Swords to Silence is an independent research platform that documents, analyzes, and presents publicly
              available information related to housing enforcement, corruption allegations, and homelessness policy.
            </p>
            <p>
              All content is presented for:
            </p>
            <ul className={styles.list}>
              <li>Historical documentation</li>
              <li>Journalistic and scholarly research</li>
              <li>Public policy analysis and transparency</li>
              <li>Educational purposes</li>
              <li>Community awareness and accountability</li>
            </ul>
            <p>
              Our research is intended to inform public discourse, support investigative journalism, and encourage
              systemic accountability.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. NOT Medical, Legal, or Professional Advice</h2>

            <div className={styles.subsection}>
              <h3>2.1 Not Legal Advice</h3>
              <p>
                Nothing on this website constitutes legal advice. Swords to Silence is not a law firm, and information
                presented here should not be relied upon as a substitute for legal advice from a qualified attorney.
              </p>
              <p>
                If you require legal advice regarding housing rights, tenant protections, veterans benefits, or any
                other legal matter, please consult with a licensed attorney in your jurisdiction.
              </p>
            </div>

            <div className={styles.subsection}>
              <h3>2.2 Not Medical Advice</h3>
              <p>
                Information related to homelessness, housing insecurity, trauma, mental health, or medical conditions
                is presented for context and educational purposes only.
              </p>
              <p>
                This is not medical advice. If you or someone you know is experiencing a medical or mental health
                crisis, please contact emergency services or appropriate healthcare providers immediately.
              </p>
            </div>

            <div className={styles.subsection}>
              <h3>2.3 Not Financial Advice</h3>
              <p>
                Analysis of funding, budgets, and financial flows presented on this website is provided for research
                and transparency purposes. This is not financial advice.
              </p>
              <p>
                Do not make financial, investment, or tax decisions based on information presented here without
                consulting a qualified financial advisor.
              </p>
            </div>

            <div className={styles.subsection}>
              <h3>2.4 Not Policy Guidance</h3>
              <p>
                While we analyze housing policy and homelessness systems, we are not a government agency and cannot
                provide official policy guidance. For official information, please contact relevant government agencies
                directly.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>3. Source Accuracy & Verification</h2>

            <div className={styles.subsection}>
              <h3>3.1 Public Records Basis</h3>
              <p>
                All claims presented on this website are sourced from publicly available records including:
              </p>
              <ul className={styles.list}>
                <li>Court filings and legal documents</li>
                <li>Government records and reports</li>
                <li>Ethics commission findings</li>
                <li>Published journalism and investigations</li>
                <li>Official regulatory documents</li>
                <li>Audit reports and inspector findings</li>
              </ul>
            </div>

            <div className={styles.subsection}>
              <h3>3.2 Source Citation</h3>
              <p>
                We provide citations and links to original source materials so readers can verify claims independently.
                You are encouraged to review original documents and form your own conclusions.
              </p>
            </div>

            <div className={styles.subsection}>
              <h3>3.3 No Guarantee of Accuracy</h3>
              <p>
                While we strive for accuracy and cross-reference multiple sources, we make no guarantee that all
                information is current, complete, or free from error. Public records themselves may contain errors,
                omissions, or disputed facts.
              </p>
              <p>
                We distinguish between verified facts, allegations, and ongoing investigations. We encourage critical
                review and additional verification.
              </p>
            </div>

            <div className={styles.subsection}>
              <h3>3.4 Corrections</h3>
              <p>
                If you identify an inaccuracy or error in our research, please contact us immediately at:
              </p>
              <p>
                <a href="mailto:corrections@swordstosilence.com">corrections@swordstosilence.com</a>
              </p>
              <p>
                We will investigate and make corrections promptly, noting the correction and original information
                for transparency.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>4. No Professional Relationship</h2>
            <p>
              Your use of this website does not create a professional relationship between you and Swords to Silence.
              We are not your attorney, doctor, financial advisor, counselor, or service provider.
            </p>
            <p>
              If you require professional services, please seek qualified practitioners in your jurisdiction.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Limitations on Use</h2>
            <p>
              You agree that you will not use the information on this website to:
            </p>
            <ul className={styles.list}>
              <li>Make false accusations against individuals or organizations</li>
              <li>Defame, harass, or harm any person</li>
              <li>Impersonate government agencies or officials</li>
              <li>Misrepresent our research or findings</li>
              <li>Violate anyone's privacy, publicity, or other legal rights</li>
              <li>Engage in fraud, deception, or illegal activity</li>
              <li>Provide false testimony or misleading statements to authorities</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>6. Allegations vs. Proven Facts</h2>
            <p>
              Swords to Silence carefully distinguishes between:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Verified facts:</strong> Information established through court findings, audit conclusions, or
                multiple independent sources
              </li>
              <li>
                <strong>Allegations:</strong> Claims made in legal filings, complaints, or investigations that are not
                yet proven
              </li>
              <li>
                <strong>Under investigation:</strong> Matters being examined by authorities with no final determination
              </li>
            </ul>
            <p>
              Allegations are not proof. A person or organization being alleged to have engaged in wrongdoing is not
              legally liable unless proven guilty by a court of law or established through final administrative findings.
            </p>
            <p>
              Do not assume guilt based on our presentation of allegations. Always consider the evidence presented and
              the status of any investigations.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Your Responsibility</h2>
            <p>
              You are responsible for:
            </p>
            <ul className={styles.list}>
              <li>
                Independently verifying any information before relying on it for important decisions
              </li>
              <li>Consulting with qualified professionals (legal, medical, financial) before taking action</li>
              <li>Understanding your own jurisdiction's laws and regulations</li>
              <li>Using information ethically and legally</li>
              <li>Not using our research to harm, harass, or defame anyone</li>
              <li>Properly citing and attributing our work</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>8. External Links</h2>
            <p>
              This website may contain links to external websites and resources. We are not responsible for the
              accuracy, completeness, legality, or appropriateness of external content. Inclusion of a link does not
              constitute endorsement.
            </p>
            <p>
              Review any external website's terms of service and privacy policy before using it.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. No Warranties</h2>
            <p>
              This website and all information presented is provided "as is" without warranty of any kind, express or
              implied, including but not limited to:
            </p>
            <ul className={styles.list}>
              <li>Warranties of merchantability or fitness for a particular purpose</li>
              <li>
                Accuracy, completeness, or usefulness of information
              </li>
              <li>
                Absence of viruses or malicious code
              </li>
              <li>
                Uninterrupted access or service
              </li>
            </ul>
            <p>
              We do not warrant that use of our website will result in any particular outcome or benefit.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Swords to Silence shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, or for loss of profits, revenue, data, or use,
              whether or not based on warranty, contract, tort, or any other legal theory.
            </p>
            <p>
              This includes liability arising from reliance on information presented on this website or use of content
              in violation of this disclaimer.
            </p>
          </section>

          <section className={styles.section}>
            <h2>11. Methodology Transparency</h2>
            <p>
              To understand how we research, verify, and present information, please review our{' '}
              <Link href="/methodology">Methodology page</Link>.
            </p>
            <p>
              We are committed to transparency about our process, limitations, and the distinction between different
              types of evidence.
            </p>
          </section>

          <section className={styles.section}>
            <h2>12. Seeking Help or Services</h2>
            <p>
              If you are experiencing homelessness, housing insecurity, or related crises, please contact appropriate
              services:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>National Homeless Hotline:</strong> 1-800-799-7233 (TTY: 1-888-352-4623)
              </li>
              <li>
                <strong>Veterans in Crisis:</strong> Veterans Crisis Line 988 then press 1
              </li>
              <li>
                <strong>Legal Aid:</strong> Your state or local legal aid society for free legal assistance
              </li>
              <li>
                <strong>Tenant Rights:</strong> Your local housing authority or tenant rights organization
              </li>
              <li>
                <strong>Mental Health Crisis:</strong> 988 Suicide & Crisis Lifeline (call or text)
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>13. Changes to Disclaimer</h2>
            <p>
              We may update this disclaimer at any time. Your continued use of the website following changes
              constitutes your acceptance of those changes.
            </p>
          </section>

          <section className={styles.section}>
            <h2>14. Questions or Concerns</h2>
            <p>
              If you have questions about this disclaimer or concerns about information presented on our website,
              please contact us:
            </p>
            <div className={styles.contactBox}>
              <p>
                <strong>Swords to Silence</strong>
                <br />
                Email: <a href="mailto:hello@swordstosilence.com">hello@swordstosilence.com</a>
                <br />
                Corrections: <a href="mailto:corrections@swordstosilence.com">corrections@swordstosilence.com</a>
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Acknowledgment</h2>
            <p>
              By using this website, you acknowledge that you have read and understood this disclaimer and agree to be
              bound by its terms.
            </p>
            <p>
              You further acknowledge that you are responsible for seeking professional advice and conducting
              independent verification before relying on information presented here for any important decision.
            </p>
          </section>
        </main>

        <footer className={styles.footer}>
          <nav className={styles.footerNav}>
            <Link href="/">Home</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/methodology">Methodology</Link>
          </nav>
          <p className={styles.footerText}>
            &copy; 2026 Swords to Silence. This Disclaimer is in the public domain.
          </p>
        </footer>
      </div>
    </>
  );
}
