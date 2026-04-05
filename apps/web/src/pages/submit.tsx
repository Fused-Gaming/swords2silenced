import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Button from '../components/atoms/Button';
import Input from '../components/atoms/Input';
import styles from '../styles/Submit.module.css';

export default function Submit() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    recordType: '',
    description: '',
    documentReference: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    // eslint-disable-next-line no-console
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Head>
        <title>Submit Records | Swords to Silence</title>
        <meta
          name="description"
          content="Submit public records or information about the housing-homelessness pipeline."
        />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/" className={styles.backLink}>
            ← Back to Home
          </Link>
          <h1>Submit Records</h1>
        </header>

        <main className={styles.main}>
          <section className={styles.intro}>
            <p>
              If you have access to public records, documents, or information relevant to the
              housing-homelessness pipeline, we want to review them.
            </p>
            <p>
              <strong>Important:</strong> Please only submit publicly available records or
              information you are authorized to share.
            </p>
          </section>

          <section className={styles.form}>
            <form onSubmit={handleSubmit} className={styles.submitForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name (Optional)</label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address (Optional)</label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="recordType">Type of Record</label>
                <select
                  id="recordType"
                  name="recordType"
                  value={formData.recordType}
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option value="">Select a category...</option>
                  <option value="court">Court Document</option>
                  <option value="building">Building Violation / Code Case</option>
                  <option value="permit">Permit or License Record</option>
                  <option value="ethics">Ethics Commission Filing</option>
                  <option value="contract">Contract or Agreement</option>
                  <option value="audit">Audit Report or Finding</option>
                  <option value="payment">Payment or Financial Record</option>
                  <option value="other">Other Public Document</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="documentReference">Document Reference or Citation</label>
                <Input
                  id="documentReference"
                  type="text"
                  name="documentReference"
                  placeholder="e.g., Case No. 2006-CV-123456 or Oakland Measure Q Audit 2023"
                  value={formData.documentReference}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="description">What record is this and why is it relevant?</label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Describe the document and its relevance to the housing-homelessness pipeline..."
                  rows={6}
                  value={formData.description}
                  onChange={handleChange}
                  className={styles.textarea}
                />
              </div>

              <Button variant="primary" size="large" type="submit">
                Submit Record Information
              </Button>
            </form>
          </section>

          <section className={styles.guidelines}>
            <h2>Guidelines</h2>
            <div className={styles.guidelineList}>
              <div className={styles.guideline}>
                <h3>Public Records Only</h3>
                <p>
                  Please only submit documents that are publicly available or that you have
                  authorization to share.
                </p>
              </div>

              <div className={styles.guideline}>
                <h3>Include References</h3>
                <p>
                  Provide case numbers, URLs, publication dates, or other reference information so
                  we can locate and verify the record.
                </p>
              </div>

              <div className={styles.guideline}>
                <h3>Explain Relevance</h3>
                <p>
                  Help us understand how this document relates to the housing enforcement,
                  corruption, or homelessness accountability gaps we are investigating.
                </p>
              </div>

              <div className={styles.guideline}>
                <h3>No Confidential Information</h3>
                <p>
                  Do not submit private health information, social security numbers, confidential
                  addresses, or other protected personal data.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.support}>
            <h2>Need Help?</h2>
            <p>
              Have questions about what records might be helpful? Want to discuss a potential case?
              Contact us at{' '}
              <a href="mailto:contact@swordstosilence.com">contact@swordstosilence.com</a>.
            </p>
          </section>

          <footer className={styles.footer}>
            <nav className={styles.footerNav}>
              <Link href="/">Home</Link>
              <Link href="/sources">Sources</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </footer>
        </main>
      </div>
    </>
  );
}
