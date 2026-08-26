import { FinalCta, PageIntro, SiteFooter, SiteHeader } from "../components";

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
            ["Connect participants and verified locations", "08_outcome_connected_locations.png"],
            ["Recover value from construction byproducts", "09_outcome_recover_value.png"],
            ["Reduce waste, uncertainty, and unnecessary trips", "10_outcome_reduce_trips.png"],
            ["Improve decisions with operational intelligence", "11_outcome_operational_intelligence.png"],
          ].map(([title, image]) => (
            <article key={title}>
              <img src={`/icons/${image}`} alt="" />
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
