import {SiteFooter,SiteHeader} from "./components";
export function LegalPage({eyebrow,title,intro,updated,children}){return <main><SiteHeader/><section className="legal-hero"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p><span>Last updated: {updated}</span></div><img src="/cretexchange-mark.jpg" alt="" aria-hidden="true"/></section><article className="legal-document">{children}</article><SiteFooter/></main>}
export function LegalSection({title,children}){return <section><h2>{title}</h2>{children}</section>}
