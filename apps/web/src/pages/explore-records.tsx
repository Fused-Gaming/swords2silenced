import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import type { FormEvent } from 'react';
import Button from '../components/atoms/Button';
import Input from '../components/atoms/Input';
import styles from '../styles/ExploreRecords.module.css';

export default function ExploreRecords() {
  const [searchType, setSearchType] = useState<'address' | 'name' | 'payment'>('address');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    // eslint-disable-next-line no-console
    console.log(`Searching by ${searchType}: ${searchQuery}`);
  };

  return (
    <>
      <Head>
        <title>Explore Records | Swords to Silence</title>
        <meta
          name="description"
          content="Search through city records, permits, violations, ethics cases, and audit findings."
        />
      </Head>

      <div className={styles.container}>
        {/* Navigation Header */}
        <header className={styles.header}>
          <Link href="/" className={styles.backLink}>
            ← Back to Home
          </Link>
          <h1>Explore Records</h1>
          <p>Search city records, permits, violations, ethics cases, and audit findings</p>
        </header>

        <main className={styles.main}>
          {/* Search Section */}
          <section className={styles.searchSection}>
            <h2>What Are You Looking For?</h2>

            {/* Search Type Tabs */}
            <div className={styles.searchTabs}>
              <button
                className={`${styles.tab} ${searchType === 'address' ? styles.active : ''}`}
                onClick={() => setSearchType('address')}
              >
                Search Addresses
              </button>
              <button
                className={`${styles.tab} ${searchType === 'name' ? styles.active : ''}`}
                onClick={() => setSearchType('name')}
              >
                Search Names
              </button>
              <button
                className={`${styles.tab} ${searchType === 'payment' ? styles.active : ''}`}
                onClick={() => setSearchType('payment')}
              >
                Search Payments
              </button>
            </div>

            {/* Search Form */}
            <form onSubmit={handleSearch} className={styles.searchForm}>
              <Input
                type="text"
                placeholder={
                  searchType === 'address'
                    ? 'Enter address (e.g., 123 Main St, Oakland, CA)'
                    : searchType === 'name'
                      ? 'Enter person or company name'
                      : 'Enter payment amount or reference'
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              <Button variant="primary" size="large">
                Search Records
              </Button>
            </form>

            <p className={styles.searchHint}>
              {searchType === 'address'
                ? 'Find all code violations, permits, complaints, and displacement history for a property'
                : searchType === 'name'
                  ? 'Find ethics cases, payments, contracts, and involvement in the housing-homelessness pipeline'
                  : 'Trace payment flows between landlords, inspectors, contractors, and city agencies'}
            </p>
          </section>

          {/* Record Categories */}
          <section className={styles.categories}>
            <h2>Record Categories</h2>
            <div className={styles.categoryGrid}>
              <div className={styles.categoryCard}>
                <h3>Code Violations</h3>
                <p>Building code cases, violations, inspection reports, and enforcement actions</p>
              </div>
              <div className={styles.categoryCard}>
                <h3>Permits & Licenses</h3>
                <p>Property permits, business licenses, renovations, and compliance records</p>
              </div>
              <div className={styles.categoryCard}>
                <h3>Litigation</h3>
                <p>Lawsuits, injunctions, court filings, and settlement agreements</p>
              </div>
              <div className={styles.categoryCard}>
                <h3>Ethics Cases</h3>
                <p>Government ethics violations, bribes, conflicts of interest, and penalties</p>
              </div>
              <div className={styles.categoryCard}>
                <h3>Public Contracts</h3>
                <p>Government contracts, grants, consulting arrangements, and public spending</p>
              </div>
              <div className={styles.categoryCard}>
                <h3>Audit Findings</h3>
                <p>Performance audits, financial reviews, and outcome tracking reports</p>
              </div>
            </div>
          </section>

          {/* Featured Records */}
          <section className={styles.featured}>
            <h2>Featured Records</h2>
            <div className={styles.recordsList}>
              <div className={styles.record}>
                <div className={styles.recordMeta}>
                  <span className={styles.label}>Code Violation</span>
                  <span className={styles.date}>2013</span>
                </div>
                <h4>Williams Properties - Building Code Case</h4>
                <p>Continued violations at properties under injunction since 2009</p>
                <a href="#" className={styles.recordLink}>
                  View Full Record →
                </a>
              </div>

              <div className={styles.record}>
                <div className={styles.recordMeta}>
                  <span className={styles.label}>Ethics Case</span>
                  <span className={styles.date}>2015-2021</span>
                </div>
                <h4>Inspector Ethics Violation - Payment Records</h4>
                <p>$100,000+ in payments and consulting fees from property owner under code case</p>
                <a href="#" className={styles.recordLink}>
                  View Full Record →
                </a>
              </div>

              <div className={styles.record}>
                <div className={styles.recordMeta}>
                  <span className={styles.label}>Audit Finding</span>
                  <span className={styles.date}>2023</span>
                </div>
                <h4>Measure Q Audit - Outcome Tracking Gap</h4>
                <p>Homeless services spending lacked baseline metrics and performance data</p>
                <a href="#" className={styles.recordLink}>
                  View Full Record →
                </a>
              </div>

              <div className={styles.record}>
                <div className={styles.recordMeta}>
                  <span className={styles.label}>Statewide Audit</span>
                  <span className={styles.date}>2024</span>
                </div>
                <h4>California Cannot Evaluate Major Homeless Programs</h4>
                <p>
                  State unable to clearly measure outcomes across major homelessness initiatives
                </p>
                <a href="#" className={styles.recordLink}>
                  View Full Record →
                </a>
              </div>
            </div>
          </section>

          {/* CTA to Cases */}
          <section className={styles.ctaSection}>
            <h2>Or Explore Complete Case Dossiers</h2>
            <p>Fully documented investigations with all evidence and source materials</p>
            <div className={styles.ctaButtons}>
              <Button variant="primary" size="large">
                Case 01: The Landlord File
              </Button>
              <Button variant="primary" size="large">
                Case 02: The Inspector File
              </Button>
              <Button variant="primary" size="large">
                Case 03: The Budget File
              </Button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className={styles.footer}>
          <nav className={styles.footerNav}>
            <Link href="/">Home</Link>
            <Link href="/money-flow">Money Flow</Link>
            <Link href="/case-timeline">Timeline</Link>
            <Link href="/who-benefits">Who Benefits</Link>
          </nav>
        </footer>
      </div>
    </>
  );
}
