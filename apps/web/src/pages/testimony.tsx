import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Testimony.module.css';

export default function TestimonyPage() {
  return (
    <>
      <Head>
        <title>Personal Testimony | Swords to Silenced</title>
        <meta
          name="description"
          content="A structured personal testimony documenting housing instability, safety concerns, and requests for accountability."
        />
      </Head>

      <main className={styles.page}>
        <div className={styles.container}>
          <header className={styles.header}>
            <p className={styles.kicker}>Secondary Statement</p>
            <h1>Personal Testimony</h1>
            <p>
              This page presents my account in a clear and professional format, based on a message I sent to the Alameda County
              District Attorney Real Estate Fraud Unit.
            </p>
            <Link className={styles.backLink} href="/">
              ← Return to main page
            </Link>
          </header>

          <section className={styles.section}>
            <h2>Overview</h2>
            <p>
              I am reporting a pattern of housing misrepresentation, unsafe living conditions, retaliation after protected complaints,
              and ongoing harassment. I believe vulnerable residents, including veterans, are being exposed to preventable harm while
              institutions and partners avoid accountability.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Housing Placement and Program Concerns</h2>
            <p>
              I was placed into the SSVF program through Insight Housing after a referral from the local VA office. I believe I was
              pressured to provide inaccurate financial disclosures to meet eligibility requirements.
            </p>
            <ul>
              <li>Property address: 1055 72nd Avenue, Oakland (Apartment 4).</li>
              <li>City and listing records indicate a 3-bedroom house configuration.</li>
              <li>
                I allege that the property was misrepresented and used to place vulnerable tenants in unsafe conditions while public
                funding continued.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Habitability and Safety Failures</h2>
            <p>
              On the day I moved in, a car was stolen from outside the property. I documented repeated concerns about trash,
              infestations, poor sanitation, and lack of security. I made dozens of direct requests for repairs and safety measures by
              phone and text.
            </p>
            <p>
              After requesting legal contact information from Insight Housing, communication stopped. I later learned I had been
              removed from the program without timely notice.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Harassment, Policing, and Ongoing Risk</h2>
            <p>
              I have experienced sustained stalking and electronic harassment, including repeated threatening communications and
              self-harm prompts directed at me. I contacted emergency services many times and attempted to preserve records through
              text-based 911 reporting.
            </p>
            <p>
              Despite these reports, I believe enforcement actions have been inconsistent, and I remain in a high-risk situation with
              continuing threats.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Retaliation and Care Access Concerns</h2>
            <p>
              I reported these issues through local and national channels, including the homeless veterans hotline. Shortly after those
              actions, I was summoned and evicted, and I became homeless again by January 29.
            </p>
            <p>
              I also raised concerns through my VA care network and chain of command. I allege retaliation, reduced access to care,
              and harmful characterizations that were used to discredit me after I continued escalating complaints.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Current Status and Request</h2>
            <p>
              A recent housing habitability complaint was sustained, and the property remains in violation. I am still vulnerable,
              still facing persistent harassment, and still seeking immediate protective action.
            </p>
            <p>
              I am requesting accountability for all parties involved, enforcement action where legally supported, and emergency steps
              to prevent further harm to me and other vulnerable residents.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Referenced Materials</h2>
            <ul className={styles.linksList}>
              <li><a href="https://drive.google.com/file/d/1l9K_JXz0Pjqac-x2JmJ0rZOg3LaGVGXX/view?usp=drivesdk">SSVF-related disclosure record</a></li>
              <li><a href="https://www.zillow.com/b/1055-72nd-ave-oakland-ca-9hhKyN/">Zillow listing for 1055 72nd Ave</a></li>
              <li><a href="https://youtu.be/maOeHw8h7MU?si=1yXpUdHn-ZZUkpuA">Video testimony reference</a></li>
              <li><a href="https://cao-94612.s3.amazonaws.com/documents/Complete-Merged-Agenda-1-4-2021.pdf">Oakland agenda document</a></li>
              <li><a href="https://eastbayexpress.com/corruption-probe-into-oaklands-code-enforcement-inspectors-widens-2-1/?fbclid=IwAR1_R4bjtHMxl8fiHQK9SYGU8TylL2bQTXTMBx5PCZRuKCzuAwUwx0ibLtU">East Bay Express investigation article</a></li>
              <li><a href="https://drive.google.com/file/d/130LTQXOQV1kDhaEiOmTOu6tt9Y-Mone-/view?usp=drivesdk">National hotline complaint record</a></li>
              <li><a href="https://drive.google.com/file/d/1I4boA9kyO_UbFw2tKy0_XKGch6x08Wjt/view?usp=drivesdk">Eviction document</a></li>
              <li><a href="https://aca-prod.accela.com/OAKLAND/Cap/CapDetail.aspx?Module=Enforcement&TabName=Enforcement&capID1=26CAP&capID2=00000&capID3=08047&agencyCode=OAKLAND&IsToShowInspection=">City enforcement case details</a></li>
              <li><a href="https://drive.google.com/file/d/19MEM8wlYwLUunVf9xUcePGli0Ya54iMc/view?usp=drivesdk">Hotline report from same-day incident</a></li>
              <li><a href="https://drive.google.com/file/d/1slyBYzliK-F5jftKAS58kzvdOJcAImgh/view?usp=drivesdk">Community meeting cancellation record</a></li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
