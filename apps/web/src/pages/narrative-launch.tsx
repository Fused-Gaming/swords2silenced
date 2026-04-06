import Head from 'next/head';
import { Inter, Playfair_Display, Source_Serif_4 } from 'next/font/google';
import Logo from '../components/atoms/Logo';
import styles from '../styles/NarrativeLaunch.module.css';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['600', '700', '800', '900'] });
const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

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
      'S4-S6 placeholders in thesis-related content should be replaced with primary records and mirrored archival links.',
    directive:
      'Assign a content-records agent to replace placeholders, add citation metadata fields, and mark unsourced claims as investigating.',
  },
];

type SourceRecord = {
  id: string;
  sourceTitle: string;
  publicationDate: string;
  retrievalDate: string;
  primaryUrl: string;
  archiveUrl: string;
  summary: string;
};

type ClaimRecord = {
  id: string;
  statement: string;
  sourceIds: string[];
};

const sourceRegistry: SourceRecord[] = [
  {
    id: 'S1',
    sourceTitle: 'California State Auditor · Report 2023-102.1',
    publicationDate: '2024-04-09',
    retrievalDate: '2026-04-06',
    primaryUrl: 'https://www.auditor.ca.gov/reports/2023-102.1/index.html',
    archiveUrl:
      'https://web.archive.org/web/*/https://www.auditor.ca.gov/reports/2023-102.1/index.html',
    summary:
      'Primary audit record on California homelessness spending, cost-effectiveness oversight, and statewide measurement gaps.',
  },
  {
    id: 'S2',
    sourceTitle: 'California State Auditor · Homelessness in California Fact Sheet',
    publicationDate: '2024-04-09',
    retrievalDate: '2026-04-06',
    primaryUrl: 'https://www.auditor.ca.gov/reports/2023-102/factsheet.html',
    archiveUrl:
      'https://web.archive.org/web/*/https://www.auditor.ca.gov/reports/2023-102/factsheet.html',
    summary:
      "Condensed statewide findings with topline figures referenced in the auditor's homelessness review.",
  },
  {
    id: 'S3',
    sourceTitle: 'City of Los Angeles Controller · Interim Housing and Shelter Bed Data Audit',
    publicationDate: '2023-12-15',
    retrievalDate: '2026-04-06',
    primaryUrl: 'https://controller.lacity.gov/audits/interim-housing-and-shelter-bed-data-audit',
    archiveUrl:
      'https://web.archive.org/web/*/https://controller.lacity.gov/audits/interim-housing-and-shelter-bed-data-audit',
    summary:
      'Municipal audit documentation on data quality issues, shelter bed tracking weaknesses, and reliability concerns in the interim housing system.',
  },
  {
    id: 'S4',
    sourceTitle: 'LAHSA · Data Dashboards (including Greater Los Angeles Homeless Count)',
    publicationDate: '2025-07-14',
    retrievalDate: '2026-04-06',
    primaryUrl: 'https://www.lahsa.org/dashboards',
    archiveUrl: 'https://web.archive.org/web/*/https://www.lahsa.org/dashboards',
    summary:
      'Primary LAHSA data portal showing published homeless count and supporting dashboard records.',
  },
  {
    id: 'S5',
    sourceTitle:
      'U.S. DOJ (Central District of California) · Homelessness Fraud and Corruption Task Force announcement',
    publicationDate: '2025-04-08',
    retrievalDate: '2026-04-06',
    primaryUrl:
      'https://www.justice.gov/usao-cdca/pr/united-states-attorney-bill-essayli-announces-criminal-task-force-investigate-fraud',
    archiveUrl:
      'https://web.archive.org/web/*/https://www.justice.gov/usao-cdca/pr/united-states-attorney-bill-essayli-announces-criminal-task-force-investigate-fraud',
    summary:
      'Primary federal announcement documenting anti-fraud enforcement posture tied to homelessness funding oversight.',
  },
  {
    id: 'S6',
    sourceTitle:
      'HUD Office of Inspector General · Audit Report 2022-LA-1001 (LAHSA Continuum of Care)',
    publicationDate: '2022-01-20',
    retrievalDate: '2026-04-06',
    primaryUrl: 'https://www.hudoig.gov/sites/default/files/2022-01/2022-LA-1001.pdf',
    archiveUrl:
      'https://web.archive.org/web/*/https://www.hudoig.gov/sites/default/files/2022-01/2022-LA-1001.pdf',
    summary:
      'Primary HUD OIG audit report documenting federal findings on LAHSA program-administration compliance and controls.',
  },
];

const claims: ClaimRecord[] = [
  {
    id: 'C1',
    statement:
      'California allocated roughly $24 billion across homelessness programs between FY 2018-19 and FY 2022-23.',
    sourceIds: ['S1', 'S2'],
  },
  {
    id: 'C2',
    statement:
      'State agencies lacked consistent data needed to evaluate major parts of that spending.',
    sourceIds: ['S1'],
  },
  {
    id: 'C3',
    statement:
      'Federal enforcement activity now explicitly targets fraud and corruption in homelessness funds.',
    sourceIds: ['S5', 'S6'],
  },
  {
    id: 'C4',
    statement:
      'The dashboard layer remains incomplete for cross-jurisdiction, outcome-level comparability.',
    sourceIds: [],
  },
];

export default function NarrativeLaunchPage() {
  const sourceMap = new Map(sourceRegistry.map((item) => [item.id, item]));

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
        className={`${styles.page} ${inter.className}`}
        style={{
          ['--display-font' as string]: playfair.style.fontFamily,
          ['--serif-font' as string]: sourceSerif.style.fontFamily,
          ['--sans-font' as string]: inter.style.fontFamily,
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
                  roughly
                  <strong> $24 billion</strong> across homelessness programs between fiscal years
                  2018-19 and 2022-23 and that state agencies still lacked the consistent data
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
              </section>

              <section className={styles.section} id="records">
                <h2>Findings of fact in the public record</h2>
                <ul className={styles.factList}>
                  {claims.map((claim) => {
                    const sourceCount = claim.sourceIds.filter((id) => sourceMap.has(id)).length;
                    const status = sourceCount > 0 ? 'verified' : 'investigating';

                    return (
                      <li key={claim.id}>
                        {claim.statement}{' '}
                        <em>
                          Status: {status}. Sources:{' '}
                          {sourceCount > 0 ? claim.sourceIds.join(', ') : 'none linked'}.
                        </em>
                      </li>
                    );
                  })}
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
                <h3>Record index</h3>
                <ul className={styles.recordList}>
                  {sourceRegistry.map((source) => (
                    <li key={source.id}>
                      <span className={styles.sourcePill}>{source.id}</span> {source.sourceTitle}
                    </li>
                  ))}
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
            </div>

            <div className={styles.sourceList}>
              {sourceRegistry.map((source) => (
                <section
                  className={styles.sourceSection}
                  id={`src-${source.id.toLowerCase()}`}
                  key={source.id}
                >
                  <div className={styles.sourceHead}>
                    <span className={styles.sourcePill}>{source.id}</span>
                    <div>
                      <div className={styles.sourceTitle}>{source.sourceTitle}</div>
                      <div className={styles.sourceMeta}>
                        Publication date: {source.publicationDate} · Retrieved:{' '}
                        {source.retrievalDate}
                      </div>
                    </div>
                  </div>
                  <p className={styles.sourceDesc}>{source.summary}</p>
                  <a
                    className={styles.sourceLink}
                    href={source.primaryUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Primary record
                  </a>
                  <a
                    className={styles.sourceLink}
                    href={source.archiveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Archive mirror
                  </a>
                </section>
              ))}
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
