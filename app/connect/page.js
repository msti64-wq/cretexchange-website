import Link from "next/link";
import {ArrowIcon, PLATFORM_URL, SiteFooter, SiteHeader} from "../components";

export const metadata = {
  title: "Connect | CreteXchange",
  description: "Choose how you want to connect with CreteXchange: discover the ecosystem or launch the platform."
};

export default function ConnectPage(){
  return <main>
    <SiteHeader/>
    <section className="page-intro">
      <div>
        <p className="eyebrow">One connection. Two paths.</p>
        <h1>Connect with CreteXchange™</h1>
        <p>Explore the construction recycling ecosystem or go directly to the CreteXchange platform.</p>
      </div>
      <img src="/cretexchange-mark.jpg" alt="CreteXchange circular roadway and location mark"/>
    </section>

    <section className="section home-paths">
      <p className="eyebrow">Choose your path</p>
      <h2>Discover the ecosystem.<br/>Or launch the platform.</h2>
      <div className="path-grid">
        <Link href="/">
          <img src="/icons/08_outcome_connected_locations.png" alt=""/>
          <span>DISCOVER</span>
          <h3>Explore CreteXchange</h3>
          <p>Learn how facilities, drivers, contractors, producers, recyclers and public-sector partners connect across the construction-material ecosystem.</p>
        </Link>
        <a href={PLATFORM_URL}>
          <img src="/icons/03_process_verified_drop.png" alt=""/>
          <span>LAUNCH</span>
          <h3>Open the platform</h3>
          <p>Sign in, participate and manage your CreteXchange activity.</p>
        </a>
      </div>
      <div className="hero-actions">
        <Link className="button" href="/">Discover the ecosystem <ArrowIcon/></Link>
        <a className="button" href={PLATFORM_URL}>Launch the platform <ArrowIcon/></a>
      </div>
    </section>
    <SiteFooter/>
  </main>
}
