import Head from 'next/head';
import Logo from '../components/atoms/Logo';
import styles from '../styles/NarrativeLaunch.module.css';

const topPriorities = [
  {
    priority: 'P0',
    title: 'Repair auth chain',
    detail:
      'GitHub auth, Telegram auth, and admin-password auth are currently broken and should be restored first to unblock secure operations.',
    directive:
      'Assign a platform/auth agent to implement token validation, startup diagnostics, and secret rotation checks.',
  },
  {
    priority: 'P1',
    title: 'Restore /status endpoint',
    detail:
      'Status checks need to expose integration readiness so deploy health and incident triage are observable.',
    directive:
      'Assign a reliability agent to maintain endpoint contract and degraded-state behavior.',
  },
  {
    priority: 'P2',
    title: 'Finish source expansion',
    detail:
      'S1-S3 are scaffolded and S4-S6 should be fully linked with archival mirrors for durable evidence trails.',
    directive:
      'Assign a content-records agent to replace placeholders with primary records and citations.',
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
          content="Dark-system investigative landing page for Swords to Silenced focused on homelessness spending, narrative framing, and public records."
        />
      </Head>

      <div
        className={styles.page}
        style={{
          ['--display-font' as string]: '"Playfair Display", Georgia, serif',
          ['--serif-font' as string]: '"Source Serif 4", Georgia, serif',
          ['--sans-font' as string]:
            '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <header className={styles.topbar}>
          <div className={styles.topbarInner}>
            <div className={styles.brandWrap}>
              <Logo variant="icon" className={styles.topLogo} />
              <div className={styles.brand}>Swords to Silenced</div>
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
                  needed to evaluate major parts of that spending. That is not merely a bookkeeping
                  flaw. It is a governance warning.
                </p>
                <p>
                  When billions move through fragmented programs without a consistent statewide
                  outcome framework, the public does not just lose visibility into efficiency. It
                  loses the ability to ask the most basic question:{' '}
                  <strong>
                    what, exactly, changed for the people the money was supposed to house?
                  </strong>
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

                <div className={styles.pullquote}>
                  <p>
                    When the story shifts from measurable exits to permanent complexity, public
                    systems gain room to spend without proving resolution.
                  </p>
                  <small>Pull quote · supported by the audit pattern, not conjecture</small>
                </div>
              </section>

              <section className={styles.section} id="narrative">
                <h2>The narrative problem</h2>
                <p>
                  Public discussion of homelessness is often dominated by individual pathology:
                  mental illness, addiction, instability, refusal, personal collapse. Those factors
                  matter. But once they become the entire story, they also begin to perform
                  institutional work.
                </p>
                <p>
                  That shift changes the standard of judgment. The question stops being{' '}
                  <strong>did the system reduce homelessness?</strong> and becomes{' '}
                  <strong>did the system provide services to a difficult population?</strong>
                </p>
              </section>

              <section className={styles.section} id="architecture">
                <h2>The conflict architecture</h2>
                <p>
                  It is usually easier to prove incentives than intent. You may not always be able
                  to show that institutions want homelessness to persist. You can, however, show how
                  fragmented funding and weak data architecture make continuation easier than
                  resolution.
                </p>
                <div className={styles.flow}>
                  {[1, 2, 3, 4, 5].map((step, i) => (
                    <div className={styles.flowStep} key={step}>
                      <span className={styles.dot}>{step}</span>
                      <div>
                        {
                          [
                            'Government allocates large sums across multiple homelessness programs and operators.',
                            'Outcome reporting is inconsistent, delayed, fragmented, or impossible to compare.',
                            'Operational failure is reframed as complexity, privacy constraints, or client fragility.',
                            'Political pressure shifts from measurable exits to visible activity and crisis management.',
                            'The structure keeps funding moving without forcing clean public answers.',
                          ][i]
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className={styles.section} id="records">
                <h2>Findings of fact in the public record</h2>
                <ul className={styles.factList}>
                  <li>
                    The State must do more to assess cost-effectiveness and improve data needed to
                    understand results.
                  </li>
                  <li>More than 180,000 Californians experienced homelessness in 2023.</li>
                  <li>
                    Los Angeles audit findings identified interim bed data quality and reliability
                    risks.
                  </li>
                  <li>
                    Public count releases and dashboards provide direct data streams for
                    verification.
                  </li>
                  <li>
                    Federal charging announcements and housing audits expand fraud-risk records.
                  </li>
                </ul>
              </section>

              <section className={styles.section} id="solutions">
                <h2>What accountability would actually require</h2>
                <p>
                  Outcome tracking that survives politics: placements, retention, production,
                  time-to-placement, shelter utilization, and independent audit access.
                </p>
                <div className={styles.tags}>
                  {[
                    'Homelessness Policy',
                    'Housing First',
                    'Public Accountability',
                    'Los Angeles',
                    'California',
                    'Public Records',
                  ].map((tag) => (
                    <span className={styles.tag} key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </section>

              <section className={styles.section} id="operations">
                <h2>Roadmap snapshot · blockers and active steps</h2>
                <ul className={styles.factList}>
                  {topPriorities.map((item) => (
                    <li key={item.priority}>
                      <strong>
                        {item.priority}: {item.title}.
                      </strong>{' '}
                      {item.detail} <em>Directive:</em> {item.directive}
                    </li>
                  ))}
                </ul>
              </section>
            </article>

            <aside className={styles.aside}>
              <div className={styles.panel}>
                <h3>On this page</h3>
                <nav aria-label="Section bookmarks">
                  <ul className={styles.bookmarkList}>
                    <li>
                      <a href="#story">Opening thesis</a>
                    </li>
                    <li>
                      <a href="#findings">Spending story</a>
                    </li>
                    <li>
                      <a href="#narrative">Narrative problem</a>
                    </li>
                    <li>
                      <a href="#architecture">Conflict architecture</a>
                    </li>
                    <li>
                      <a href="#records">Findings of fact</a>
                    </li>
                    <li>
                      <a href="#solutions">Accountability standard</a>
                    </li>
                    <li>
                      <a href="#sources">Source registry</a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className={styles.panel}>
                <h3>Record index</h3>
                <ul className={styles.recordList}>
                  <li>
                    <span className={styles.sourcePill}>S1</span> California State Auditor report
                  </li>
                  <li>
                    <span className={styles.sourcePill}>S2</span> Auditor fact sheet / statewide
                    summary
                  </li>
                  <li>
                    <span className={styles.sourcePill}>S3</span> L.A. Controller audit landing page
                  </li>
                  <li>
                    <span className={styles.sourcePill}>S4</span> LAHSA data release and dashboards
                  </li>
                  <li>
                    <span className={styles.sourcePill}>S5</span> U.S. DOJ charging announcement
                  </li>
                  <li>
                    <span className={styles.sourcePill}>S6</span> HUD OIG audit report
                  </li>
                </ul>
              </div>
            </aside>
          </section>

          <footer id="sources" className={styles.footer}>
            <div className={styles.footerTop}>
              <div>
                <div className={styles.footerBrand}>
                  Source Registry · Public Records / Data Streams / Government Records
                </div>
                <p className={styles.footerText}>
                  This page is structured to privilege primary-source material over commentary.
                </p>
              </div>
              <nav aria-label="Footer navigation">
                <ul className={styles.footerNav}>
                  <li>
                    <a href="#top">Back to top</a>
                  </li>
                  <li>
                    <a href="#story">Story</a>
                  </li>
                  <li>
                    <a href="#records">Findings</a>
                  </li>
                  <li>
                    <a href="#sources">Sources</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className={styles.sourceList}>
              <section className={styles.sourceSection} id="src-s1">
                <div className={styles.sourceHead}>
                  <span className={styles.sourcePill}>S1</span>
                  <div>
                    <div className={styles.sourceTitle}>
                      California State Auditor · Report 2023-102.1
                    </div>
                    <div className={styles.sourceMeta}>State audit record · April 2024</div>
                  </div>
                </div>
                <p className={styles.sourceDesc}>
                  Primary audit record on California homelessness spending, cost-effectiveness
                  oversight, and statewide measurement gaps.
                </p>
                <a className={styles.sourceLink} href="#">
                  Audit link placeholder
                </a>
              </section>

              <section className={styles.sourceSection} id="src-s2">
                <div className={styles.sourceHead}>
                  <span className={styles.sourcePill}>S2</span>
                  <div>
                    <div className={styles.sourceTitle}>
                      California State Auditor · Homelessness in California Fact Sheet
                    </div>
                    <div className={styles.sourceMeta}>
                      State fact sheet / summary record · April 2024
                    </div>
                  </div>
                </div>
                <p className={styles.sourceDesc}>
                  Condensed statewide findings with topline figures referenced in the auditor&apos;s
                  homelessness review.
                </p>
                <a className={styles.sourceLink} href="#">
                  Fact sheet link placeholder
                </a>
              </section>

              <section className={styles.sourceSection} id="src-s3">
                <div className={styles.sourceHead}>
                  <span className={styles.sourcePill}>S3</span>
                  <div>
                    <div className={styles.sourceTitle}>
                      City of Los Angeles Controller · Interim Housing &amp; Shelter Bed Data Audit
                    </div>
                    <div className={styles.sourceMeta}>
                      Municipal audit / operations record · December 2023
                    </div>
                  </div>
                </div>
                <p className={styles.sourceDesc}>
                  City audit documentation on data quality issues, shelter bed tracking weaknesses,
                  and reliability concerns in the interim housing system.
                </p>
                <a className={styles.sourceLink} href="#">
                  Controller audit link placeholder
                </a>
              </section>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
