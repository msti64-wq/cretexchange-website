import { FinalCta, PageIntro, SiteFooter, SiteHeader } from "../components";

function OutcomeIcon({ type }) {
  const common = {
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (type === "connect") {
    return <svg {...common}><path d="M20 22 32 14l12 8M20 42l12 8 12-8M18 26v12M46 26v12"/><circle cx="32" cy="12" r="5"/><circle cx="17" cy="24" r="5"/><circle cx="47" cy="24" r="5"/><circle cx="17" cy="40" r="5"/><circle cx="47" cy="40" r="5"/><circle cx="32" cy="52" r="5"/></svg>;
  }

  if (type === "value") {
    return <svg {...common}><path d="M17 23a18 18 0 0 1 29-5l4 4M47 41a18 18 0 0 1-29 5l-4-4"/><path d="M50 13v9h-9M14 51v-9h9"/><path d="M36.5 25.5c-1-1-2.5-1.5-4.5-1.5-3.3 0-5.5 1.7-5.5 4.2 0 6.5 11 2.4 11 8.3 0 2.2-2 3.8-5.5 3.8-2.2 0-4.2-.7-5.6-2M32 20.5v23"/></svg>;
  }

  if (type === "reduce") {
    return <svg {...common}><path d="M14 18h13c7 0 9 5 9 10v8c0 6 3 10 10 10h4"/><path d="m44 40 6 6-6 6"/><path d="M14 28h9M14 38h7"/><path d="M12 14h17"/><path d="m19 9-5 5 5 5"/></svg>;
  }

  return <svg {...common}><path d="M13 51h39"/><path d="M18 46V31h8v15M29 46V22h8v24M40 46V13h8v33"/><path d="m16 24 11-9 9 5 14-10"/><circle cx="16" cy="24" r="2.5"/><circle cx="27" cy="15" r="2.5"/><circle cx="36" cy="20" r="2.5"/><circle cx="50" cy="10" r="2.5"/></svg>;
}

export default function About() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        eyebrow="About CreteXchange"
        title="Building tomorrow. Nothing wasted."
        copy="CreteXchange brings practical digital infrastructure to the people and facilities responsible for moving, receiving, and recovering construction materials."
        image="/cretexchange-mark.jpg"
      />

      <section className="story section">
        <div>
          <p className="eyebrow">Our mission</p>
          <h2>Make material movement more visible, valuable, and responsible.</h2>
        </div>
        <div>
          <p>Construction recovery depends on decisions made in the field: where a driver goes, what a facility accepts, and whether the right information is available in time.</p>
          <p>CreteXchange connects those decisions through verified destinations, material opportunities, recovery incentives, and operational intelligence.</p>
        </div>
      </section>

      <section className="founder-story section">
        <div className="founder-visual" aria-hidden="true">
          <img src="/icons/11_outcome_operational_intelligence.png" alt="" />
          <span>Technology + field experience</span>
        </div>
        <div className="founder-copy">
          <p className="eyebrow">Built from firsthand industry experience</p>
          <h2>A practical idea shaped in the field.</h2>
          <p>CreteXchange was founded by Michael Stiger after seeing recurring inefficiencies throughout the construction-material cycle—from contractor requests and driver coordination to material recovery and facility access.</p>
          <p>Michael’s experience includes leading large-scale technology operations, serving as a managing partner in a North Texas construction-materials business, and partnering in a 26-acre light-industrial development where he shares general-contractor responsibilities with his development partners.</p>
          <p>These experiences revealed a common problem: valuable construction materials are often wasted because drivers, facilities, contractors, and communities lack a connected way to identify recovery opportunities and document results.</p>
          <p>CreteXchange was created to close that gap—combining firsthand industry knowledge with secure digital workflows, verified recovery activity, and environmental intelligence.</p>
        </div>
      </section>

      <section className="principle">
        <img src="/icons/10_outcome_reduce_trips.png" alt="" />
        <blockquote>CreteXchange doesn’t merely tell drivers where recycling facilities are. It can create <span>economic signals</span> that actively influence where recoverable construction material flows.</blockquote>
      </section>

      <section className="outcomes section">
        <p className="eyebrow">What better infrastructure enables</p>
        <div className="outcome-grid">
          {[
            ["Connect participants and verified locations", "connect"],
            ["Recover value from construction byproducts", "value"],
            ["Reduce waste, uncertainty, and unnecessary trips", "reduce"],
            ["Improve decisions with operational intelligence", "intelligence"],
          ].map(([title, icon]) => (
            <article key={title}>
              <div className="outcome-icon"><OutcomeIcon type={icon} /></div>
              <h3>{title}</h3>
            </article>
          ))}
        </div>
      </section>

      <FinalCta />
      <SiteFooter />
    </main>
  );
}
