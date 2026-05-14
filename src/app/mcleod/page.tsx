import React from "react";
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ScrollableImage from "../components/ScrollableImage";

const metadata = [
  { label: "Client", value: "McLeod Software" },
  { label: "Role", value: "Design System Lead" },
  { label: "Build", value: "Transportation Management / Enterprise Logistics" },
  {
    label: "Deliverables",
    value:
      "Full Design System / Token Architecture / Figma Library / WCAG AA Color System / Typography System / Icon System / Spacing System / Component Library / Documentation",
  },
  {
    label: "Tools",
    value: "Figma, Design & Documentation, Component Sandbox (Engineering)",
  },
];

export default function McLeod() {
  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="bg-background pt-8 md:pt-16 pb-0">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8 mb-8 md:mb-12">
            <h2 className="font-serif text-[28px] md:text-[48px] font-bold text-foreground leading-tight md:leading-[54px] max-w-[680px]">
              Building a design system from zero for enterprise logistics software
            </h2>
            <div className="md:text-right shrink-0">
              <p className="link-label text-[#FF2900]">McLeod Software</p>
              <p className="link-label text-[#FF2900]">Design System Lead</p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-8">
          <Image
            src="/images/mcleod-header.png"
            alt="McLeod Software design system"
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
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-foreground mb-6">
            Overview
          </h3>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[16px] font-normal leading-relaxed text-foreground">
              When I joined the team at McLeod, the product ecosystem spanned multiple logistics
              applications with a small design system already in place. The existing system provided
              a starting point — there were some base components to build from — but it lacked the
              token architecture, naming conventions, documentation, and cross-product consistency
              needed to scale across the full product suite. Designers were often rebuilding patterns
              that already existed in slightly different forms, development didn&apos;t always have
              clear design specs to work from, and Product Owners and BAs didn&apos;t have a single
              source of truth for UI decisions. The foundation was there, but it needed structure,
              governance, and a strategy to grow into something the entire organization could rely
              on. I led the initiative to take what existed and build it into a proper, scalable
              design system.
            </p>
            <p className="font-sans text-[16px] font-normal leading-relaxed text-foreground">
              This case study covers the full arc: auditing the existing ecosystem, establishing
              foundational principles, building a scalable token and component architecture,
              partnering with engineering on implementation, and creating the governance model that
              keeps the system alive.
            </p>
          </div>
        </section>

        {/* Discovery & Audit */}
        <section>
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-foreground mb-6">
            Discovery &amp; Audit
          </h3>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[16px] font-normal leading-relaxed text-foreground">
              I started with a cross-product audit to understand what we were working with — both
              what the existing system covered and where the gaps were. The audit revealed over
              seven versions of the same patterns across products, with tables, modals, buttons, and
              form elements all built slightly differently depending on the product and who had
              designed them. The base components gave us a starting point, but there was significant
              inconsistency layered on top. The audit helped identify high-frequency components that
              needed standardization first, gaps where no patterns existed at all, inconsistencies
              causing dev rework, and the areas where UX debt was highest.
            </p>
            <p className="font-sans text-[16px] font-normal leading-relaxed text-foreground">
              I also interviewed designers, developers, POs, and BAs to understand workflow pain
              points. This turned out to be critical context — logistics software is operationally
              complex, and the people closest to the product had strong opinions about what was and
              wasn&apos;t working. Their input shaped the prioritization from day one.
            </p>
          </div>
        </section>

      </div>

      {/* ── Scrollable screenshot ── */}
      <div className="w-full max-w-[954px] mx-auto px-4 md:px-10">
        <ScrollableImage
          src="/images/mcleod-study-01.jpg"
          alt="McLeod detention definition UI screenshot"
        />
      </div>

      <div className="max-w-[760px] mx-auto px-8 py-16 flex flex-col gap-16">

        {/* Building the System */}
        <section>
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-foreground mb-6">
            Building the System
          </h3>
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-sans text-[16px] font-bold leading-relaxed text-foreground">
                Tokens
              </p>
              <p className="font-sans text-[16px] font-normal leading-relaxed text-foreground">
                I built foundational tokens for color, typography, spacing, elevation, and
                icon/icon states — the consistency layer McLeod had never had. This included a
                WCAG AA-compliant color system with semantic colors, seven-shade scales, and dark
                mode variants anchored to primary Blue.
              </p>
            </div>
            <div>
              <p className="font-sans text-[16px] font-bold leading-relaxed text-foreground">
                Component Architecture
              </p>
              <p className="font-sans text-[16px] font-normal leading-relaxed text-foreground">
                This is the area I&apos;m most proud of. Every component is built with systemized
                naming (kebab-case), clear variants and properties, responsive considerations, and
                documented usage guidelines. I took hundreds of inconsistent, mismatched icons into
                a single token-aligned library with consistent stroke, grid, sizing, and naming
                conventions.
              </p>
            </div>
            <div>
              <p className="font-sans text-[16px] font-bold leading-relaxed text-foreground">
                Documentation
              </p>
              <p className="font-sans text-[16px] font-normal leading-relaxed text-foreground">
                This was the MVP of the project. Every component ships with documentation including
                usage, behavior, content guidance, edge cases, dos and don&apos;ts, and live
                component embedding. This became the reference point for designers, PMs, and BAs —
                and it fundamentally changed how cross-functional teams made decisions. Before the
                system, every conversation about UI was a negotiation. After, it was a reference
                check.
              </p>
            </div>
            <div>
              <p className="font-sans text-[16px] font-bold leading-relaxed text-foreground">
                Engineering Partnership
              </p>
              <p className="font-sans text-[16px] font-normal leading-relaxed text-foreground">
                I worked closely with devs to align our Internal Component Demo architecture
                alongside Figma. We reviewed components together, made decisions together, and
                validated behavior before anything was finalized. This partnership is one of the
                system&apos;s biggest strengths — even though adoption is still a work in progress,
                the alignment and trust are strong.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* ── Iconography screenshot ── */}
      <div className="w-full max-w-[954px] mx-auto px-4 md:px-10">
        <ScrollableImage
          src="/images/mcleod-study-02.jpg"
          alt="McLeod iconography library"
        />
      </div>

      <div className="max-w-[760px] mx-auto px-8 py-16 flex flex-col gap-16">

        {/* Rollout & Governance */}
        <section>
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-foreground mb-6">
            Rollout &amp; Governance
          </h3>
          <p className="font-sans text-[16px] font-normal leading-relaxed text-foreground">
            We created a governance model that was lightweight enough to actually work: designers or
            teams submit component requests, we evaluate based on frequency, need, and feasibility,
            decisions run through a design committee, and approved components are added to the
            system. We also run quarterly design brainstorms for ongoing support and alignment. We
            didn&apos;t want a heavyweight process — but we needed clarity and consistency.
          </p>
        </section>

      </div>

      {/* ── Mitochondria screenshot ── */}
      <div className="w-full max-w-[954px] mx-auto px-4 md:px-10">
        <ScrollableImage
          src="/images/mcleod-study-03.jpg"
          alt="McLeod Mitochondria component demo"
        />
      </div>

      <div className="max-w-[760px] mx-auto px-8 py-16 pb-20 flex flex-col gap-16">

        {/* Impact */}
        <section>
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-foreground mb-6">
            Impact
          </h3>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[16px] font-normal leading-relaxed text-foreground">
              Even with adoption still growing, the results have been clear: Designers move
              significantly faster. There&apos;s far less time spent recreating UI from scratch.
              Consistency across products has improved dramatically. The UX team has stronger
              foundational trust with stakeholders. Dev rework and handoff friction has decreased.
              And PMs and BAs finally have one place to reference patterns and decisions.
            </p>
            <p className="font-sans text-[16px] font-normal leading-relaxed text-foreground">
              Most importantly, we shifted the organization from everyone designing separately to
              teams working from a shared system and language. That&apos;s not a Figma library —
              that&apos;s a culture change.
            </p>
          </div>
        </section>

        {/* What I'd Improve Next */}
        <section>
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-foreground mb-6">
            What I&apos;d Improve Next
          </h3>
          <p className="font-sans text-[16px] font-normal leading-relaxed text-foreground">
            Increase developer adoption by building more components into the code library, embed
            accessibility standards deeper into the token structure, build more pattern-level
            documentation beyond individual components, expand mobile support as products evolve,
            and build out a consistent approach to accessibility and dark mode. The system is
            strong, but there is significant room for continued maturity.
          </p>
        </section>

        {/* Metadata */}
        <dl className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-8 gap-y-3 pt-4 border-t border-border">
          {metadata.map((item) => (
            <React.Fragment key={item.label}>
              <dt className="font-sans text-[12px] font-bold uppercase tracking-[1.6px] text-foreground">
                {item.label}
              </dt>
              <dd className="font-sans text-[12px] font-normal text-foreground">
                {item.value}
              </dd>
            </React.Fragment>
          ))}
        </dl>

      </div>

      {/* ── Red CTA ── */}
      <section className="bg-[#FF2900] py-20 flex items-center justify-center">
        <Image
          src="/images/mcleod-footer.png"
          alt="McLeod design system in use"
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
