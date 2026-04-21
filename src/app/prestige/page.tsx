import React from "react";
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ScrollableImage from "../components/ScrollableImage";

const metadata = [
  { label: "Client", value: "Prestige Financial Services" },
  { label: "Role", value: "UX Researcher & Designer" },
  { label: "Build", value: "Internal Case Management Application" },
  {
    label: "Deliverables",
    value:
      "Research Synthesis / Persona Development / Journey Mapping / Wireframes / Interactive Prototype / Usability Testing / Documentation",
  },
  {
    label: "Tools",
    value: "Figma, Design & Documentation (Internal: No Resources), Miro/FigJam (Workshop), Loom",
  },
];

export default function Prestige() {
  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="bg-white pt-16 pb-0">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-end justify-between gap-8 mb-12">
            <h2 className="font-serif text-[48px] font-bold text-[#020206] leading-[54px] max-w-[680px]">
              Unifying six tools into one workflow for a $1.1B collections operation
            </h2>
            <div className="text-right shrink-0">
              <p className="link-label text-[#FF2900]">Prestige Financial Services</p>
              <p className="link-label text-[#FF2900]">UX Researcher &amp; Designer</p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-8">
          <Image
            src="/images/prestige-header.png"
            alt="Prestige Financial Services"
            width={0}
            height={0}
            sizes="100vw"
            quality={90}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* ── Content ── */}
      <div className="max-w-[760px] mx-auto px-8 pt-20 pb-16 flex flex-col gap-16">

        {/* Overview */}
        <section>
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-[#020206] mb-6">
            Overview
          </h3>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
              Prestige Financial Services was an auto-finance debt collection agency servicing over
              43,000 accounts valued at more than $1 billion. Their collection agents worked across
              a fragmented ecosystem of six-plus legacy tools to manage calls, messaging, payments,
              documents, account details, and compliance requirements simultaneously. As the
              principal designer on $5 billion in serviced accounts, I was brought on to design an
              internal case management application that would replace this sprawl with a unified,
              intelligent workflow.
            </p>
            <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
              This case study covers the end-to-end UX process: contextual research in a live call
              center, synthesis and persona development, design and usability testing, and the
              organizational realities of advocating for user needs against competing business
              constraints.
            </p>
          </div>
        </section>

        {/* Context & Challenge */}
        <section>
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-[#020206] mb-6">
            Context &amp; Challenge
          </h3>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
              Collection agents at Prestige worked accounts across multiple delinquency stages —
              from 0-29 days past due through accounts headed toward repossession. Their daily work
              involved a demanding mix of outbound calls, inbound responses, text messaging, email,
              and payment processing, all while navigating strict compliance requirements around
              disclosures, contact frequency, and opt-outs.
            </p>
            <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
              The problem was that no single tool supported this workflow. Agents routinely operated
              across six or more applications simultaneously: Phoenix (core account system), MuTrak
              (phone system), Invotra (messaging), TalkDesk (another phone system), Word (letter
              templates), and Power BI (reporting). Each held a piece of the picture; none provided
              the full view an agent needed to efficiently work an account.
            </p>
            <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
              Compounding the challenge, the business was facing a scalability crisis. The existing
              spread of siloed systems, manual spreadsheets, and inconsistent information couldn&apos;t
              support the planned growth from 100 to 500+ serviced accounts. Employee turnover made
              things worse — in 2022, Prestige hired 50 new agents and only 3 remained by year-end.
              The design opportunity was to build something that was both unified and learnable
              quickly, and supportive of agents still building domain knowledge.
            </p>
          </div>
        </section>

      </div>

      {/* ── Screenshot 1 ── */}
      <div className="mx-auto" style={{ width: "954px", maxWidth: "100%", paddingLeft: "40px", paddingRight: "40px" }}>
        <ScrollableImage
          src="/images/prestige-study-01.png"
          alt="Prestige case management application UI"
        />
      </div>

      <div className="max-w-[760px] mx-auto px-8 py-16 flex flex-col gap-16">

        {/* The Core Problem */}
        <section>
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-[#020206] mb-6">
            The Core Problem
          </h3>
          <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
            Agents were skilled communicators buried under fragmented tools, redundant processes,
            and information noise. The system needed to get out of their way so they could focus on
            what they did best: resolving accounts through human conversation.
          </p>
        </section>

        {/* Discovery & Research */}
        <section>
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-[#020206] mb-6">
            Discovery &amp; Research
          </h3>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
              Given the complexity of this domain, I knew surveys or interviews alone wouldn&apos;t
              capture the full picture — I needed to see how agents actually worked, not just how
              they described their work. I prioritized contextual inquiry and job shadowing as the
              foundation of the research plan, observing agents in live work environments across the
              outbound (ICT) and inbound (INT) teams. I also conducted swim-lane/journey mapping
              with agents, team leads, and training staff.
            </p>
            <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
              The research surfaced insights that self-reporting never would have. Agents routinely
              had multiple applications open simultaneously, switching contexts almost constantly.
              The notes feature in Phoenix, universally described as the most important part of the
              tool, was also the most frustrating: system-generated notes were mingled with actual
              conversation notes, forcing agents to spend time hunting for relevant information.
              Compliance tasks required agents to manually sync across systems, and the call
              management system created entries every 30-45 minutes.
            </p>
          </div>
        </section>

      </div>

      {/* ── Screenshot 2 ── */}
      <div className="mx-auto" style={{ width: "954px", maxWidth: "100%", paddingLeft: "40px", paddingRight: "40px" }}>
        <ScrollableImage
          src="/images/prestige-study-02.png"
          alt="Prestige agent workflow UI with Coraline Jones account"
        />
      </div>

      <div className="max-w-[760px] mx-auto px-8 py-16 flex flex-col gap-16">

        {/* Navigating Business Constraints */}
        <section>
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-[#020206] mb-6">
            Navigating Business Constraints
          </h3>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
              Throughout the project, there was recurring tension between what research indicated
              would best serve agents and what the business was willing to implement. The research
              strongly supported a user-driven approach — customizable views, flexible queue
              management, agent-controlled templates. While leadership preferred a more controlled,
              streamlined experience.
            </p>
            <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
              In retrospect, I would have involved business stakeholders in research sessions from
              earlier, having leadership observe agents struggling with workarounds firsthand —
              rather than presenting findings in a slide deck after the fact. Building shared
              empathy for user needs at the organizational level is as important as the design work
              itself.
            </p>
          </div>
        </section>

      </div>

      {/* ── Screenshot 3 ── */}
      <div className="mx-auto" style={{ width: "954px", maxWidth: "100%", paddingLeft: "40px", paddingRight: "40px" }}>
        <ScrollableImage
          src="/images/prestige-study-03.png"
          alt="Prestige refined workflow design"
        />
      </div>

      <div className="max-w-[760px] mx-auto px-8 py-16 pb-20 flex flex-col gap-16">

        {/* Outcomes & Reflection */}
        <section>
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-[#020206] mb-6">
            Outcomes &amp; Reflection
          </h3>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
              The project delivered a research-informed design that addressed the core pain points
              identified through contextual inquiry, synthesis, and usability testing. Prestige
              ultimately closed its operations before the full vision could ship, but the work
              surfaced principles that continue to shape my practice: that research in context
              reveals what interviews cannot, that advocating for users requires organizational
              strategy alongside evidence, and that the most meaningful design decisions in
              enterprise UX aren&apos;t about visual design — they&apos;re about rethinking how
              information and actions are organized around the user&apos;s natural rhythm of work.
            </p>
          </div>
        </section>

        {/* Metadata */}
        <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 pt-4 border-t border-[#D0D0D0]">
          {metadata.map((item) => (
            <React.Fragment key={item.label}>
              <dt className="font-sans text-[12px] font-bold uppercase tracking-[1.6px] text-[#020206]">
                {item.label}
              </dt>
              <dd className="font-sans text-[12px] font-normal text-[#020206]">
                {item.value}
              </dd>
            </React.Fragment>
          ))}
        </dl>

      </div>

      {/* ── Blue CTA ── */}
      <section className="bg-[#4564B6] py-20 flex items-center justify-center">
        <Image
          src="/images/prestige-footer.png"
          alt="Prestige case management application"
          width={0}
          height={0}
          sizes="(max-width: 1024px) 90vw, 800px"
          className="h-auto mx-auto"
          style={{ width: "auto", maxWidth: "800px" }}
        />
      </section>

      <Footer />
    </>
  );
}
