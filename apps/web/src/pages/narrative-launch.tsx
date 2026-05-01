import Head from 'next/head';
import Logo from '../components/atoms/Logo';
import styles from '../styles/NarrativeLaunch.module.css';

type StorySection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type SourceRecord = {
  id: string;
  label: string;
  note: string;
};

const sections: StorySection[] = [
  {
    id: 'part-1',
    title: 'Part I: The Property That Shouldn’t Have Housed Anyone',
    paragraphs: [
      'At 1055 72nd Avenue in Oakland, city records identify a 3-bedroom home where veterans were reportedly placed through the VA-funded SSVF program administered by Insight Housing.',
      'The narrative describes sustained habitability failures: no security, mold, compromised electrical systems, broken windows, and infestation concerns. The claim is that complaints and inspections did not produce meaningful remediation.',
      'A second veteran account, beginning in early 2025, describes similar conditions and argues the placement model prioritized occupancy and reimbursement over safety.',
    ],
  },
  {
    id: 'part-2',
    title: 'Part II: The Paper Trail of Coercion',
    paragraphs: [
      'The article alleges 96+ documented communications requesting repairs and safety fixes from both Insight Housing and the landlord, with no effective resolution.',
      'It frames this as structural behavior rather than isolated neglect, arguing that vulnerable tenants often lack the resources to force legal compliance.',
      'After escalation requests in June 2025, the author reports being removed from the program without immediate notice, then formally notified in September with no transition housing plan.',
    ],
  },
  {
    id: 'part-3',
    title: 'Part III: The Retaliation Mechanism',
    paragraphs: [
      'The narrative reports repeated police contacts regarding stalking and harassment and claims non-response despite extensive call documentation.',
      'It also alleges retaliation after raising concerns through VA channels, including restricted care access and claims that complaints were reframed as instability.',
      'After contacting the National Hotline for Homeless Veterans, the account states eviction proceedings followed quickly. By January 29, 2026, the author reports becoming homeless again.',
    ],
    bullets: [
      'Create desperation: tie housing access to compliance.',
      'Extract value: keep federal dollars flowing while minimizing delivery.',
      'Discredit dissent: pathologize complaints instead of investigating them.',
      'Escalate enforcement: eviction and exclusion as deterrence.',
    ],
  },
  {
    id: 'part-4',
    title: 'Part IV: The Code Inspection That Changed Nothing',
    paragraphs: [
      'The complaint states city code violations were sustained but not remediated in practice, and that the same property continued to receive vulnerable placements.',
      'The core argument: documented violations alone do not disrupt funding flows when contractual and regulatory consequences are weak or delayed.',
    ],
  },
  {
    id: 'part-5',
    title: 'Part V: Why Whistleblowers Get Discredited',
    paragraphs: [
      'The article argues that people exiting homelessness, incarceration, or untreated trauma are both the target population and the easiest witnesses to dismiss.',
      'It claims that credibility attacks are not incidental—they are integral to maintaining a system that can process people while minimizing accountability risk.',
    ],
  },
  {
    id: 'part-6',
    title: 'Part VI: The Pattern',
    paragraphs: [
      'The account asserts this is not a single-event dispute and references an earlier veteran displacement tied to similar habitability complaints at the same address.',
      'It describes an incentive loop where landlords, nonprofits, and public agencies each retain operational upside while participants absorb the downside of unsafe outcomes.',
    ],
  },
  {
    id: 'part-7',
    title: 'Part VII: Four-Step Whistleblower Suppression Pattern',
    paragraphs: [
      'The narrative names a repeated sequence: target vulnerable people, create dependency, diagnose dissent, and escalate exclusion when complaints persist.',
      'Its key claim is that this pattern works because affected people rarely have litigation capacity and because institutions are trained to prioritize procedural closure over participant testimony.',
    ],
  },
  {
    id: 'part-8',
    title: 'Part VIII: The $100 Million Question',
    paragraphs: [
      'The article centers on the claim that Insight Housing received $12.5M in FY2025 under SSVF and roughly $100M across grant cycles, while safety outcomes remained disputed.',
      'Its central policy question: is federal veteran-housing funding preventing homelessness, or financing a model that reproduces it under compliance pressure?',
    ],
  },
  {
    id: 'part-9',
    title: 'Part IX: Oversight as Theater',
    paragraphs: [
      'The narrative contends that code enforcement, VA oversight, and nonprofit governance can all appear active while failing to impose outcome-linked consequences.',
      'It argues the system rewards throughput metrics—how many people were processed—over durability metrics—who remained safely housed.',
    ],
  },
  {
    id: 'part-10',
    title: 'Part X: What Happens When You Speak Up',
    paragraphs: [
      'The article lists filings with city, police, VA, hotline, ethics, and legal channels and describes resulting eviction, service restrictions, and social isolation.',
      'It closes with a call for investigative media review, federal outcome audits, and protections for whistleblowers reporting fraud in veteran housing pipelines.',
    ],
  },
];

const pullQuotes = [
  'This is $100 million in federal funding — $12.5 million per year, renewed without accountability — generating negative outcomes for the exact population it was designed to serve.',
  'The system specifically targets people whose credibility is already compromised. That’s the feature, not the bug.',
  'We built a system where fraud is profitable, silence is rewarded, and speaking up gets you evicted.',
  'Oversight exists. It’s theater. Designed to reassure the public while ensuring the system operates without real accountability.',
];

const sourceRegistry: SourceRecord[] = [
  {
    id: 'S1',
    label: 'City of Oakland Code Enforcement',
    note: 'Sustained violation record for the property referenced in this narrative.',
  },
  {
    id: 'S2',
    label: 'Public complaint record',
    note: 'Bribery and conflict allegations involving inspection handling are referenced by the article.',
  },
  {
    id: 'S3',
    label: 'YouTube habitability documentation',
    note: 'Video evidence referenced as a pattern record for the same address.',
  },
  {
    id: 'S4',
    label: 'Communications log',
    note: '96+ communications cited with housing provider and landlord contacts.',
  },
  {
    id: 'S5',
    label: 'National Hotline for Homeless Veterans record',
    note: 'Complaint escalation channel cited in retaliation timeline.',
  },
  {
    id: 'S6',
    label: 'Oakland Police 911 call history',
    note: '40+ contacts described by the reporting party.',
  },
  {
    id: 'S7',
    label: 'USAspending.gov SSVF award data',
    note: 'Award totals used for $12.5M FY and cumulative ~$100M framing.',
  },
  {
    id: 'S8',
    label: 'VA SSVF NOFO FY2026 (Federal Register)',
    note: 'Program context and federal administration framework.',
  },
];

export default function NarrativeLaunchPage() {
  return (
    <>
      <Head>
        <title>
          How a $100 Million Federal Housing Program Systematized Fraud Against Veterans | Swords to
          Silenced
        </title>
        <meta
          name="description"
          content="Long-form investigative narrative on veteran housing fraud allegations, SSVF accountability gaps, and whistleblower retaliation patterns."
        />
      </Head>

      <div className={styles.page}>
        <header className={styles.topbar}>
          <div className={styles.topbarInner}>
            <div className={styles.brandWrap}>
              <Logo variant="icon" className={styles.topLogo} />
              <div className={styles.brand}>Swords to Silenced</div>
            </div>
            <nav className={styles.topnav} aria-label="Primary">
              <a href="#story">Story</a>
              <a href="#pattern">Pattern</a>
              <a href="#sources">Sources</a>
              <a href="#ask">Action</a>
            </nav>
          </div>
        </header>

        <main className={styles.siteShell}>
          <section className={styles.hero} id="top">
            <div>
              <div className={styles.eyebrow}>Investigative · Veteran Housing · Accountability</div>
              <h1>
                How a $100 Million Federal Housing Program Systematized Fraud Against Veterans
              </h1>
              <p className={styles.dek}>
                When oversight becomes complicity: a documented narrative about SSVF placements,
                sustained code violations, and alleged retaliation after escalation.
              </p>
            </div>
            <div className={styles.heroCard}>
              <div>
                <div className={styles.label}>Core allegation</div>
                <div className={styles.heroBig}>Oversight exists. Accountability doesn’t.</div>
                <div className={styles.heroSub}>
                  This page reframes the design narrative around one case pattern: unsafe housing,
                  unresolved complaints, institutional discrediting, and re-entry into homelessness.
                </div>
              </div>
              <div className={styles.heroMeta}>
                <span>Primary keyword: veteran homelessness fraud</span>
                <span>Estimated read time: 7 minutes</span>
                <span>Updated: April 2026</span>
              </div>
            </div>
          </section>

          <div className={styles.metaRow}>
            <span>By J. Lucus</span>
            <span>Oakland, California case focus</span>
            <span>SSVF / VA grant oversight narrative</span>
            <span>Whistleblower retaliation framing</span>
          </div>

          <section className={styles.layout}>
            <article id="story">
              <section className={styles.section}>
                <p className={styles.lede}>
                  The report landed with a thud nobody heard. Habitability violations were
                  sustained, funding continued, and a federally-supported placement pipeline
                  allegedly moved forward with no material correction. The thesis of this article is
                  direct: if outcomes do not trigger consequences, oversight becomes theater.
                </p>
              </section>

              {sections.map((section) => (
                <section className={styles.section} id={section.id} key={section.id}>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul className={styles.factList} id="pattern">
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <section className={styles.section} id="ask">
                <h2>What this page asks for</h2>
                <ul className={styles.factList}>
                  <li>
                    Outcome measurement that tracks durable housing retention, not only processing
                    volume.
                  </li>
                  <li>
                    Consequence windows for sustained code violations (e.g., 30-day remediation).
                  </li>
                  <li>
                    Whistleblower protection protocols linked to anti-retaliation enforcement.
                  </li>
                  <li>
                    Federal and local investigation paths that treat repeated complaints as pattern
                    risk, not isolated noise.
                  </li>
                </ul>
              </section>
            </article>

            <aside className={styles.aside}>
              <div className={styles.panel}>
                <h3>Pull quotes</h3>
                <ul className={styles.recordList}>
                  {pullQuotes.map((quote) => (
                    <li key={quote}>{quote}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.panel}>
                <h3>Article metadata</h3>
                <ul className={styles.recordList}>
                  <li>Secondary keyword: SSVF program accountability</li>
                  <li>Secondary keyword: federal housing fraud</li>
                  <li>Secondary keyword: veteran housing retaliation</li>
                  <li>Secondary keyword: whistleblower retaliation veterans</li>
                </ul>
              </div>
            </aside>
          </section>

          <footer id="sources" className={styles.footer}>
            <div className={styles.footerTop}>
              <div>
                <div className={styles.footerBrand}>
                  Source References (as provided in article brief)
                </div>
                <p className={styles.footerText}>
                  These entries mirror the documentation list supplied for this narrative and are
                  presented as reference points for follow-up verification work.
                </p>
              </div>
            </div>

            <div className={styles.sourceList}>
              {sourceRegistry.map((source) => (
                <section className={styles.sourceSection} key={source.id}>
                  <div className={styles.sourceHead}>
                    <span className={styles.sourcePill}>{source.id}</span>
                    <div>
                      <div className={styles.sourceTitle}>{source.label}</div>
                    </div>
                  </div>
                  <p className={styles.sourceDesc}>{source.note}</p>
                </section>
              ))}
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
