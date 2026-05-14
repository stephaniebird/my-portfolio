import React from "react";
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ScrollableImage from "../components/ScrollableImage";

const metadata = [
  { label: "Client", value: "Vivint" },
  { label: "Product", value: "Marketing and Lead Generation Website — Vivint.com" },
  { label: "Domain", value: "Smart Home Security / E-Commerce" },
  { label: "My Role", value: "UI/UX Designer, Design System Owner" },
  { label: "Tools", value: "Figma (Design), OptimalIQ" },
];

export default function Vivint() {
  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="bg-background pt-8 md:pt-16 pb-0">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8 mb-8 md:mb-12">
            <h2 className="font-serif text-[28px] md:text-[48px] font-bold text-foreground leading-tight md:leading-[54px] max-w-[680px]">
              Rebuilding a flagship e-commerce experience — one A/B test at a time
            </h2>
            <div className="md:text-right shrink-0">
              <p className="link-label text-[#FF2900]">Vivint</p>
              <p className="link-label text-[#FF2900]">UI/UX Design</p>
              <p className="link-label text-[#FF2900]">Vivint.com</p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-8">
          <Image
            src="/images/vivint-header.png"
            alt="Vivint website redesign"
            width={0}
            height={0}
            sizes="100vw"
            quality={90}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* ── Content: Overview ── */}
      <div className="max-w-[760px] mx-auto px-8 pt-20 pb-16 flex flex-col gap-16">
        <section>
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-foreground mb-6">
            Overview
          </h3>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[16px] font-normal leading-relaxed text-foreground">
              Vivint brought me on after a failed website rebrand with an outside agency had tanked
              conversion rates. The team realized they needed a dedicated in-house UX designer to
              salvage the project. I was hired as the sole UX designer on a cross-functional team,
              embedded with the Conversion Rate Optimization (CRO) team, working across design,
              development, and analytics to revive vivint.com as the primary lead-generation engine
              for the National Inside Sales (NIS) team.
            </p>
            <p className="font-sans text-[16px] font-normal leading-relaxed text-foreground">
              I led the design through many months of iterative redesign work: covering a failed
              rebrand, leading two full brand refreshes, establishing a component-based design
              system, and running continuous A/B testing to validate every change before it shipped.
            </p>
          </div>
        </section>
      </div>

      {/* ── Screenshot 1 ── */}
      <div className="w-full max-w-[954px] mx-auto px-4 md:px-10">
        <ScrollableImage
          src="/images/vivint-study-01.png"
          alt="Vivint website redesign — homepage"
        />
      </div>

      {/* ── Content: Context & Challenge + Core Problem ── */}
      <div className="max-w-[760px] mx-auto px-8 py-16 flex flex-col gap-16">

        <section>
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-foreground mb-6">
            Context &amp; Challenge
          </h3>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[16px] font-normal leading-relaxed text-foreground">
              When I joined Vivint, the website was in recovery mode. A recent rebrand attempt had
              gone live without sufficient testing, and the result was an immediate and significant
              drop in leads and sales — a major problem for a company where vivint.com is the
              primary lead-generation engine for the Inside sales team. The rebrand still needed to
              happen, but the previous approach — ship everything at once and hope for the best —
              had proven catastrophic.
            </p>
            <p className="font-sans text-[16px] font-normal leading-relaxed text-foreground">
              Compounding the challenge, Vivint operated in an emerging category. Smart home
              security was still new enough that most visitors arrived at the site without a clear
              understanding of what the product did or why they needed it. Every design decision had
              to balance brand storytelling with customer education, all while protecting conversion
              performance.
            </p>
          </div>
        </section>

      </div>

      {/* ── Screenshot 2 ── */}
      <div className="w-full max-w-[954px] mx-auto px-4 md:px-10">
        <ScrollableImage
          src="/images/vivint-study-02.png"
          alt="Vivint website component exploration"
        />
      </div>

      {/* ── Content: Core Problem + Solution + Design System + Results ── */}
      <div className="max-w-[760px] mx-auto px-8 py-16 pb-20 flex flex-col gap-16">

        <section>
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-foreground mb-6">
            The Core Problem
          </h3>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[16px] font-normal leading-relaxed text-foreground">
              How do you successfully rebrand a high-traffic e-commerce site without losing the
              leads and sales that fund the business? And how do you educate a customer base on an
              unfamiliar product category without overwhelming them with information?
            </p>
            <p className="font-sans text-[16px] font-normal leading-relaxed text-foreground">
              In 2020, Vivint launched a major corporate rebrand — shifting from &ldquo;Vivint Smart
              Home&rdquo; to simply &ldquo;Vivint.&rdquo; The homepage and all major components
              needed to reflect the new brand, but the team couldn&apos;t afford a repeat of the
              previous failed rebrand. Any change that touched conversion had to be proven before it
              shipped.
            </p>
          </div>
        </section>

        <section>
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-foreground mb-6">
            Solution
          </h3>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[16px] font-normal leading-relaxed text-foreground">
              I rebuilt the site one component at a time, using A/B testing as the gate for every
              meaningful change. Instead of a big-bang rebrand, I worked closely with the CRO team
              to test new versions of hero modules, product cards, navigation, and CTAs against
              their existing counterparts — only shipping changes that demonstrated statistical
              significance and positive performance. This methodical approach meant the full rebrand
              rolled out over six months, but with zero negative impact to leads.
            </p>
            <p className="font-sans text-[16px] font-normal leading-relaxed text-foreground">
              I also partnered with the copy team to develop a stronger user narrative, aligning
              visual design with messaging that better addressed customer uncertainty about the
              smart home category. Toward the end of 2021, we tested two new video components
              designed to educate visitors and showcase brand assets in action.
            </p>
          </div>
        </section>

        <section>
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-foreground mb-6">
            Design System
          </h3>
          <p className="font-sans text-[16px] font-normal leading-relaxed text-foreground">
            Beyond individual campaigns, I own and maintain the component library for vivint.com.
            Every component is built in Figma with auto-layout, documented with usage notes, and
            organized by page module type and product category. This system makes it possible to
            design new pages quickly, make modifications with confidence, and collaborate closely
            with the engineering team during handoff. Documentation is the unglamorous part of
            design system work, but it&apos;s where the real leverage lives — and it&apos;s my
            favorite part of the job.
          </p>
        </section>

        <section>
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-foreground mb-6">
            Results
          </h3>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[16px] font-normal leading-relaxed text-foreground">
              The rebrand rolled out successfully over six months with no decline in leads or sales
              — a direct reversal of the previous agency-led attempt. The video component test
              delivered a 21.5% lift in conversion rate, moving from 1.09% to 1.33% within days of
              launch.
            </p>
            <p className="font-sans text-[16px] font-normal leading-relaxed text-foreground">
              More broadly, the shift from big-bang redesigns to component-level A/B testing
              fundamentally changed how the team approached website changes. Every update now runs
              through validation before shipping, and the design system ensures consistency across
              the hundreds of pages and campaigns that live on vivint.com. The site is constantly
              evolving, which keeps the work fresh — and keeps discovering how customers actually
              engage with a brand in a category that&apos;s still defining itself.
            </p>
          </div>
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

      {/* ── Dark CTA ── */}
      <section className="bg-[#E4E8E9] flex items-center justify-center h-[340px] md:h-[678px]">
        <Image
          src="/images/vivint-footer.jpg"
          alt="Vivint website on mobile"
          width={0}
          height={0}
          sizes="100vw"
          quality={90}
          className="h-full w-auto max-w-full block"
        />
      </section>

      <Footer />
    </>
  );
}
