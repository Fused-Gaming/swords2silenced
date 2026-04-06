import Head from 'next/head';
import styles from '../styles/NarrativeLaunch.module.css';

const priorityItems = [
  {
    title: 'Restore authentication chain',
    detail:
      'GitHub integration auth, Telegram bot auth, and admin auth should be triaged first because they block deploy confidence, operational alerting, and protected admin workflows.',
    directive:
      'Assign platform/auth agent to implement token validation checks, rotation workflow, and environment-variable boot diagnostics.',
  },
  {
    title: 'Repair /status availability',
    detail:
      'A broken status endpoint weakens observability and creates blind spots for incident response and deployment checks.',
    directive:
      'Assign reliability agent to ship a typed status contract plus probes for health, auth integrations, and runtime metadata.',
  },
  {
    title: 'Promote source-linked launch page',
    detail:
      'This long-form narrative is now structured for citation-first publishing but still needs source expansion for S4-S6 and archival references.',
    directive:
      'Assign content systems agent to convert placeholder sources into verified records and attach exhibit mirrors.',
  },
];

export default function NarrativeLaunchPage() {
  return (
    <>
      <Head>
        <title>
          $24 Billion. More Homeless. The Narrative That Made It Possible | Swords to Silenced
        </title>
        <meta
          name="description"
          content="A dark-system launch page for Swords to Silenced: public-record-forward coverage of homelessness spending, accountability, and narrative framing."
        />
      </Head>

      <div className={styles.page}>
        <header className={styles.topbar}>
          <div className={styles.topbarInner}>
            <div className={styles.brand}>
              <span className={styles.brandMark}>SS</span>
              Swords to Silenced
            </div>
            <nav className={styles.topnav} aria-label="Primary">
              <a href="#story">Story</a>
              <a href="#findings">Findings</a>
              <a href="#records">Records</a>
              <a href="#sources">Sources</a>
            </nav>
          </div>
        </header>

        <main className={styles.siteShell}>
          <section className={styles.hero} id="top">
            <div>
              <div className={styles.eyebrow}>Investigative · Housing · Public Accountability</div>
              <h1>$24 Billion. More Homeless. The Narrative That Made It Possible.</h1>
              <p className={styles.dek}>
                California&apos;s homelessness crisis is not just a spending story. It is also a
                measurement story, an accountability story, and a narrative story — one that can
                keep money moving even when outcomes remain difficult to audit.
              </p>
            </div>
            <div className={styles.heroCard}>
              <div>
                <div className={styles.label}>Core question</div>
                <div className={styles.heroBig}>
                  What becomes politically acceptable when outcomes stay vague?
                </div>
                <div className={styles.heroSub}>
                  A dark-system launch page designed for swordstosilenced.com with a controlled red,
                  white, and blue signal palette, deep glass panels, and public-record-forward
                  presentation.
                </div>
              </div>
              <div className={styles.heroMeta}>
                <span>Launch draft · April 2026</span>
                <span>Long-form investigation</span>
                <span>Public record linked</span>
              </div>
            </div>
          </section>

          <div className={styles.metaRow}>
            <span>By J. Lucus</span>
            <span>Swords to Silenced</span>
            <span>California / Los Angeles</span>
            <span>Audit, data, and court-record supported</span>
          </div>

          <section className={styles.layout}>
            <article id="story">
              <section className={styles.section}>
                <p className={styles.lede}>
                  The most alarming detail in California&apos;s homelessness debate may not be the
                  spending alone. It may be how easily public systems can continue operating without
                  proving that the spending materially reduces homelessness. Once failure is
                  reframed as inevitable complexity, accountability becomes optional.
                </p>
              </section>

              <section className={styles.section} id="findings">
                <h2>The spending story is also a records story</h2>
                <p>
                  In April 2024, the California State Auditor reported that the state had allocated
                  roughly <strong>$24 billion</strong> across homelessness programs between fiscal
                  years 2018-19 and 2022-23 and that state agencies still lacked the consistent data
                  needed to evaluate major parts of that spending.
                </p>
                <div className={styles.statGrid}>
                  <div className={styles.stat}>
                    <div className={styles.statNum}>$24B</div>
                    <div className={styles.statLabel}>
                      Homelessness-related funding allocated statewide across the auditor&apos;s
                      review period.
                    </div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNum}>180K+</div>
                    <div className={styles.statLabel}>
                      People experiencing homelessness in California in 2023, as cited in the
                      auditor&apos;s fact sheet.
                    </div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNum}>16,100</div>
                    <div className={styles.statLabel}>
                      Approximate interim housing beds cited by the L.A. Controller against a city
                      homeless count above that level by nearly three times.
                    </div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNum}>43,000+</div>
                    <div className={styles.statLabel}>
                      People counted in the 2025 Greater Los Angeles homeless count data release.
                    </div>
                  </div>
                </div>
              </section>

              <section className={styles.section} id="records">
                <h2>Additional context: blockers and current steps</h2>
                <p>
                  Roadmap review and current-state checks indicate immediate execution blockers in
                  authentication and observability. The top three priorities below are sequenced to
                  recover operational control before broader narrative-scale publication.
                </p>
                <ul className={styles.factList}>
                  {priorityItems.map((item) => (
                    <li key={item.title}>
                      <strong>{item.title}.</strong> {item.detail} <em>Directive:</em>{' '}
                      {item.directive}
                    </li>
                  ))}
                </ul>
              </section>
            </article>

            <aside className={styles.aside}>
              <div className={styles.panel}>
                <h3>On this page</h3>
                <ul className={styles.bookmarkList}>
                  <li>
                    <a href="#story">Opening thesis</a>
                  </li>
                  <li>
                    <a href="#findings">Spending story</a>
                  </li>
                  <li>
                    <a href="#records">Blockers & directives</a>
                  </li>
                  <li>
                    <a href="#sources">Source registry</a>
                  </li>
                </ul>
              </div>
            </aside>
          </section>

          <footer id="sources" className={styles.footer}>
            <h3>Source registry</h3>
            <div className={styles.sourceList}>
              <a
                className={styles.sourceLink}
                href="https://www.auditor.ca.gov/reports/2023-102.1/"
              >
                S1 · California State Auditor · Report 2023-102.1
              </a>
              <a
                className={styles.sourceLink}
                href="https://www.auditor.ca.gov/reports/2023-102.2/"
              >
                S2 · California State Auditor · Homelessness in California fact sheet
              </a>
              <a
                className={styles.sourceLink}
                href="https://controller.lacity.gov/landings/interim-housing-audit"
              >
                S3 · L.A. Controller · Interim Housing & Shelter Bed Data Audit
              </a>
              <a
                className={styles.sourceLink}
                href="https://www.lahsa.org/news?article=1000-lahsa-releases-2025-greater-los-angeles-homeless-count-results"
              >
                S4 · LAHSA · 2025 Greater Los Angeles homeless count release
              </a>
              <a
                className={styles.sourceLink}
                href="https://www.justice.gov/usao-cdca/pr/former-la-homeless-services-nonprofit-executive-and-attorney-agree-plead-guilty-federal"
              >
                S5 · U.S. DOJ charging announcement (example fraud exposure record)
              </a>
              <a
                className={styles.sourceLink}
                href="https://www.hudoig.gov/reports-publications/audit-reports"
              >
                S6 · HUD OIG audit archive (federal housing oversight records)
              </a>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
