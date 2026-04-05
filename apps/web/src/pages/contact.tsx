import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Button from '../components/atoms/Button';
import Input from '../components/atoms/Input';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    console.log('Contact form submitted:', formData);
  };

  return (
    <>
      <Head>
        <title>Contact | Swords to Silence</title>
        <meta name="description" content="Contact Swords to Silence with questions, feedback, or information." />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/" className={styles.backLink}>
            ← Back to Home
          </Link>
          <h1>Contact</h1>
        </header>

        <main className={styles.main}>
          <section className={styles.intro}>
            <p>
              Have questions about our research? Found an error? Want to discuss a potential case? We'd like to hear from you.
            </p>
          </section>

          <section className={styles.content}>
            <div className={styles.formSection}>
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <Input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows={8}
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                  />
                </div>

                <Button variant="primary" size="large" type="submit">
                  Send Message
                </Button>
              </form>
            </div>

            <div className={styles.infoSection}>
              <h2>Other Ways to Reach Us</h2>

              <div className={styles.infoBox}>
                <h3>Email</h3>
                <p>
                  <a href="mailto:contact@swordstosilence.com">contact@swordstosilence.com</a>
                </p>
              </div>

              <div className={styles.infoBox}>
                <h3>Submit Public Records</h3>
                <p>
                  Have a public document to share? Visit our{' '}
                  <Link href="/submit">Records Submission Page</Link>.
                </p>
              </div>

              <div className={styles.infoBox}>
                <h3>Report an Issue</h3>
                <p>
                  Found an error or inaccuracy in our research? Please let us know using the contact form above.
                </p>
              </div>

              <div className={styles.infoBox}>
                <h3>Press Inquiries</h3>
                <p>
                  Journalists and media outlets interested in our research should contact us at{' '}
                  <a href="mailto:press@swordstosilence.com">press@swordstosilence.com</a>.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.faq}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              <div className={styles.faqItem}>
                <h3>Is all the information on this site verified?</h3>
                <p>
                  We classify evidence as verified, alleged, or under investigation. See our{' '}
                  <Link href="/methodology">methodology page</Link> for details.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3>Can I submit confidential information?</h3>
                <p>
                  Only public records and publicly available information. We cannot accept private, confidential, or protected information.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3>How do you source your data?</h3>
                <p>
                  All evidence comes from public records: court filings, government documents, ethics cases, and audit reports. See{' '}
                  <Link href="/sources">sources page</Link> for details.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3>Are there plans to cover other cities?</h3>
                <p>
                  Currently focused on Oakland. We plan to expand to other cities where similar patterns are documented in public records.
                </p>
              </div>
            </div>
          </section>

          <footer className={styles.footer}>
            <nav className={styles.footerNav}>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/submit">Submit Records</Link>
            </nav>
          </footer>
        </main>
      </div>
    </>
  );
}
