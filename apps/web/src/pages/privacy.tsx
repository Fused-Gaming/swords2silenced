import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Privacy.module.css';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Swords to Silence</title>
        <meta
          name="description"
          content="Privacy Policy for Swords to Silence. Learn how we collect, use, and protect your data."
        />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/" className={styles.backLink}>
            ← Back to Home
          </Link>
          <h1>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last updated: April 2026</p>
        </header>

        <main className={styles.main}>
          <section className={styles.section}>
            <h2>1. Overview</h2>
            <p>
              Swords to Silence is committed to protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            <p>
              We collect minimal information necessary to operate this public research platform. We do not sell,
              rent, or trade your personal information to any third parties.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Information We Collect</h2>

            <div className={styles.subsection}>
              <h3>2.1 Automatically Collected Information</h3>
              <p>When you visit our website, we automatically collect certain information including:</p>
              <ul className={styles.list}>
                <li>
                  <strong>Server logs:</strong> IP address, browser type, operating system, pages visited, and
                  timestamps
                </li>
                <li>
                  <strong>Cookies and tracking:</strong> Session identifiers to improve site functionality
                </li>
                <li>
                  <strong>Analytics:</strong> Aggregated usage patterns to understand how visitors interact with
                  our content
                </li>
              </ul>
              <p>
                We use this information to monitor site performance, prevent abuse, and understand how our content
                is used.
              </p>
            </div>

            <div className={styles.subsection}>
              <h3>2.2 Information You Voluntarily Provide</h3>
              <p>You may choose to provide information through:</p>
              <ul className={styles.list}>
                <li>Contact forms or feedback submissions</li>
                <li>Email inquiries or document submission requests</li>
                <li>Participation in research or testimonial programs</li>
              </ul>
              <p>
                We only collect information you explicitly provide and will use it only for the purposes you
                indicate.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>3. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className={styles.list}>
              <li>Maintain and improve our website functionality and user experience</li>
              <li>Respond to your inquiries and requests</li>
              <li>Analyze usage patterns to better serve our research mission</li>
              <li>Prevent fraud, abuse, and unauthorized access</li>
              <li>Comply with legal obligations</li>
              <li>Conduct research related to housing policy and transparency</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Data Protection & Security</h2>
            <p>
              We implement industry-standard security measures to protect your information from unauthorized access,
              alteration, disclosure, or destruction. These include:
            </p>
            <ul className={styles.list}>
              <li>Secure HTTPS encryption for all data transmissions</li>
              <li>Limited access controls for sensitive information</li>
              <li>Regular security assessments and updates</li>
              <li>Secure data storage and backup procedures</li>
            </ul>
            <p>
              However, no method of transmission over the internet is 100% secure. While we strive to protect your
              personal information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Third-Party Services</h2>
            <p>
              We may use third-party services to operate our website and support our mission. These may include:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Hosting providers:</strong> Services that store and serve our website content
              </li>
              <li>
                <strong>Analytics services:</strong> Tools to understand website usage patterns
              </li>
              <li>
                <strong>Content delivery networks:</strong> Services that ensure fast content delivery
              </li>
            </ul>
            <p>
              We only work with providers that maintain adequate privacy safeguards and are bound by data
              protection agreements.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Data Retention</h2>
            <p>
              We retain your information only as long as necessary to fulfill the purposes described in this policy,
              or as required by law. Specifically:
            </p>
            <ul className={styles.list}>
              <li>Server logs are typically retained for 30-90 days</li>
              <li>Voluntary submissions are retained for the duration of your engagement plus 1-2 years</li>
              <li>Research data is retained according to institutional and legal requirements</li>
            </ul>
            <p>You may request deletion of your personal information at any time, subject to legal obligations.</p>
          </section>

          <section className={styles.section}>
            <h2>7. Your Privacy Rights</h2>

            <div className={styles.subsection}>
              <h3>7.1 Access & Portability</h3>
              <p>You have the right to request a copy of the personal information we hold about you.</p>
            </div>

            <div className={styles.subsection}>
              <h3>7.2 Correction & Deletion</h3>
              <p>
                You may request that we correct inaccurate information or delete your personal information, subject to
                legal retention requirements.
              </p>
            </div>

            <div className={styles.subsection}>
              <h3>7.3 Data Subject Rights (EU/GDPR)</h3>
              <p>If you are located in the European Union or United Kingdom, you have additional rights under GDPR:</p>
              <ul className={styles.list}>
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to lodge a complaint with your local data protection authority</li>
              </ul>
            </div>

            <div className={styles.subsection}>
              <h3>7.4 California Privacy Rights (CCPA/CPRA)</h3>
              <p>
                If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA)
                and its successor, the California Privacy Rights Act (CPRA):
              </p>
              <ul className={styles.list}>
                <li>Right to know what personal information is collected, used, and shared</li>
                <li>Right to delete personal information collected from you</li>
                <li>Right to opt-out of the "sale" or "sharing" of personal information</li>
                <li>Right to correction of inaccurate personal information</li>
                <li>Right to non-discrimination for exercising your privacy rights</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>8. Children's Privacy</h2>
            <p>
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal
              information from children under 13. If we become aware that we have collected information from a child
              under 13, we will promptly delete such information and take steps to cease collection from that individual.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. International Data Transfers</h2>
            <p>
              Our website is hosted in the United States. If you access our website from outside the United States,
              your information may be transferred to, stored in, and processed in the United States, which may have
              different data protection laws than your country of origin.
            </p>
            <p>
              By using our website, you consent to the transfer of your information to the United States subject to
              the safeguards described in this policy.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Cookies & Similar Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience and understand how our site
              is used. You can control cookie settings through your browser, though some features may not function
              properly if cookies are disabled.
            </p>
            <p>
              We use cookies for:
            </p>
            <ul className={styles.list}>
              <li>Session management and user authentication</li>
              <li>Remembering your preferences</li>
              <li>Analytics and performance monitoring</li>
              <li>Preventing fraud and abuse</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>11. Policy Changes</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology,
              legal requirements, or other factors. We will notify you of any material changes by posting the updated
              policy on this page with a new "Last Updated" date.
            </p>
            <p>
              Your continued use of our website following the posting of changes constitutes your acceptance of those
              changes.
            </p>
          </section>

          <section className={styles.section}>
            <h2>12. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, wish to exercise your privacy rights, or have concerns
              about our privacy practices, please contact us:
            </p>
            <div className={styles.contactBox}>
              <p>
                <strong>Swords to Silence</strong>
                <br />
                Privacy Request: <a href="mailto:privacy@swordstosilence.com">privacy@swordstosilence.com</a>
                <br />
                General Inquiry: <a href="mailto:hello@swordstosilence.com">hello@swordstosilence.com</a>
              </p>
            </div>
            <p>
              We will respond to privacy requests within 30 days or as required by applicable law. For EU/UK residents,
              you also have the right to lodge a complaint with your local data protection authority.
            </p>
          </section>
        </main>

        <footer className={styles.footer}>
          <nav className={styles.footerNav}>
            <Link href="/">Home</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/methodology">Methodology</Link>
          </nav>
          <p className={styles.footerText}>
            &copy; 2026 Swords to Silence. This Privacy Policy is in the public domain.
          </p>
        </footer>
      </div>
    </>
  );
}
