import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Terms.module.css';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service | Swords to Silence</title>
        <meta
          name="description"
          content="Terms of Service for Swords to Silence. Legal terms governing use of our website and content."
        />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/" className={styles.backLink}>
            ← Back to Home
          </Link>
          <h1>Terms of Service</h1>
          <p className={styles.lastUpdated}>Last updated: April 2026</p>
        </header>

        <main className={styles.main}>
          <section className={styles.section}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Swords to Silence website ("the Site"), you accept and agree to be bound
              by the terms and provision of this agreement. If you do not agree to abide by the above, please do
              not use this service.
            </p>
            <p>
              We reserve the right to modify these Terms of Service at any time without notice. Your continued use
              of the Site following any changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on
              the Swords to Silence website for personal, non-commercial transitory viewing only. This is the grant
              of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className={styles.list}>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the Site</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>
                Transfer the materials to another person or "mirror" the materials on any other server
              </li>
              <li>Violate any applicable laws or regulations in your use of the materials</li>
              <li>
                Use the materials in a way that infringes the intellectual property rights of any party
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Disclaimer of Warranties</h2>
            <p>
              The materials on the Swords to Silence website are provided on an "as is" basis. Swords to Silence
              makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties
              including, without limitation, implied warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p>
              Further, Swords to Silence does not warrant or make any representations concerning the accuracy,
              likely results, or reliability of the use of the materials on its website or otherwise relating to
              such materials or on any sites linked to this site.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Limitations of Liability</h2>
            <p>
              In no event shall Swords to Silence or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising out of the
              use or inability to use the materials on the Swords to Silence website, even if Swords to Silence or
              a representative has been notified of the possibility of such damage.
            </p>
            <p>
              Some jurisdictions do not allow the limitation of liability for consequential or incidental damages,
              so the above limitations may not apply to you.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Accuracy of Materials</h2>
            <p>
              The materials appearing on the Swords to Silence website could include technical, typographical, or
              photographic errors. Swords to Silence does not warrant that any of the materials on the website are
              accurate, complete, or current. Swords to Silence may make changes to the materials contained on the
              website at any time without notice.
            </p>
            <p>
              However, Swords to Silence does not make any commitment to update the materials. All materials are
              presented with original sources cited and verifiable. We encourage independent verification of all
              claims and data presented.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Links</h2>
            <p>
              Swords to Silence has not reviewed all of the sites linked to its website and is not responsible for
              the contents of any such linked site. The inclusion of any link does not imply endorsement by Swords
              to Silence of the site. Use of any such linked website is at the user's own risk.
            </p>
            <p>
              If you believe a linked site violates our values or contains misleading information, please contact
              us at: <a href="mailto:hello@swordstosilence.com">hello@swordstosilence.com</a>
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Modifications</h2>
            <p>
              Swords to Silence may revise these Terms of Service for the website at any time without notice. By
              using this website, you are agreeing to be bound by the then-current version of these Terms of
              Service.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Intellectual Property Rights</h2>

            <div className={styles.subsection}>
              <h3>8.1 Original Content</h3>
              <p>
                Original content created by Swords to Silence, including but not limited to written narratives,
                timelines, relationship maps, and research compilations, is the intellectual property of Swords to
                Silence. You may view, reference, and share this content for educational and research purposes
                with proper attribution.
              </p>
            </div>

            <div className={styles.subsection}>
              <h3>8.2 Public Records</h3>
              <p>
                Content sourced from public records, court filings, government documents, and published materials
                remains in the public domain or is subject to the original copyright holder's terms. Swords to
                Silence presents these materials for transparency and verification purposes.
              </p>
            </div>

            <div className={styles.subsection}>
              <h3>8.3 Attribution Requirements</h3>
              <p>
                When citing or republishing our original research, analysis, or compilations, you must:
              </p>
              <ul className={styles.list}>
                <li>Provide clear attribution to Swords to Silence</li>
                <li>Link to the original source material when possible</li>
                <li>Maintain the integrity of cited data and context</li>
                <li>Not misrepresent our findings or use them out of context</li>
              </ul>
            </div>

            <div className={styles.subsection}>
              <h3>8.4 Prohibited Uses</h3>
              <p>You may not:</p>
              <ul className={styles.list}>
                <li>
                  Claim ownership of Swords to Silence content or present it as your own creation
                </li>
                <li>
                  Use our research or data to make false or misleading claims about individuals or organizations
                </li>
                <li>Alter or manipulate our content to misrepresent findings</li>
                <li>
                  Use our data or research for commercial purposes without explicit permission and agreement
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>9. Acceptable Use</h2>
            <p>
              You agree that you will not use the Site in any way that:
            </p>
            <ul className={styles.list}>
              <li>Is illegal or promotes illegal activity</li>
              <li>
                Violates any applicable laws, regulations, or rights of third parties including privacy, publicity,
                or intellectual property rights
              </li>
              <li>Harasses, threatens, defames, or abuses anyone</li>
              <li>Disrupts the normal flow of dialogue within our website</li>
              <li>Introduces viruses, malware, or any malicious code</li>
              <li>Constitutes spam, automated solicitation, or commercial activity</li>
              <li>
                Attempts to gain unauthorized access to any part of the Site or its systems
              </li>
              <li>Impersonates or misrepresents affiliation with any person or entity</li>
              <li>
                Uses data collection or automated tools (bots, scrapers) without explicit permission
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>10. User-Submitted Information</h2>
            <p>
              If you submit comments, feedback, testimonies, documents, or other information to Swords to Silence,
              you grant us a non-exclusive, royalty-free, perpetual license to use, reproduce, modify, and distribute
              such information for our research and educational mission.
            </p>
            <p>
              You represent and warrant that:
            </p>
            <ul className={styles.list}>
              <li>
                You own or have the right to submit the information
              </li>
              <li>The information does not infringe any third-party rights</li>
              <li>
                The information is accurate to the best of your knowledge
              </li>
              <li>
                Submission does not violate any laws or regulations
              </li>
            </ul>
            <p>
              We will honor requests for anonymity or confidentiality where legally possible and appropriate to our
              mission.
            </p>
          </section>

          <section className={styles.section}>
            <h2>11. Privacy</h2>
            <p>
              Your use of the Site is also governed by our Privacy Policy. Please review the Privacy Policy to
              understand our practices with respect to the collection and use of your information.
            </p>
          </section>

          <section className={styles.section}>
            <h2>12. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Swords to Silence and its officers, directors, employees,
              agents, and successors from any and all claims, damages, losses, costs, and expenses (including
              reasonable attorneys' fees) arising out of your use of the Site or any violation of these Terms of
              Service.
            </p>
          </section>

          <section className={styles.section}>
            <h2>13. Governing Law</h2>
            <p>
              These Terms of Service and any dispute relating to the Site shall be governed by and construed in
              accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className={styles.section}>
            <h2>14. Dispute Resolution</h2>
            <p>
              Before initiating legal proceedings, we encourage you to contact us to attempt to resolve any disputes
              informally. If a dispute cannot be resolved through negotiation, you agree to submit the matter to
              binding arbitration or litigation, as permitted by law.
            </p>
          </section>

          <section className={styles.section}>
            <h2>15. Severability</h2>
            <p>
              If any provision of these Terms of Service is found to be invalid or unenforceable, the remaining
              provisions shall continue in full force and effect, and the invalid provision shall be modified to the
              minimum extent necessary to make it valid and enforceable.
            </p>
          </section>

          <section className={styles.section}>
            <h2>16. Contact for Legal Notices</h2>
            <p>
              If you have any questions about these Terms of Service or need to provide a legal notice, please
              contact us:
            </p>
            <div className={styles.contactBox}>
              <p>
                <strong>Swords to Silence</strong>
                <br />
                Legal Inquiry: <a href="mailto:legal@swordstosilence.com">legal@swordstosilence.com</a>
                <br />
                General Inquiry: <a href="mailto:hello@swordstosilence.com">hello@swordstosilence.com</a>
              </p>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <nav className={styles.footerNav}>
            <Link href="/">Home</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/methodology">Methodology</Link>
          </nav>
          <p className={styles.footerText}>
            &copy; 2026 Swords to Silence. These Terms of Service are in the public domain.
          </p>
        </footer>
      </div>
    </>
  );
}
