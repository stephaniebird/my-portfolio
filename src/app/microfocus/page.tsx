import React from "react";
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ScrollableImage from "../components/ScrollableImage";

const metadata = [
  { label: "Client", value: "Micro Focus (formerly Novell, Web, Novell)" },
  { label: "Product", value: "Unified Enterprise Software Marketing Website" },
  { label: "Domain", value: "Enterprise Software / Marketing Website" },
  { label: "My Role", value: "Lead UI/UX Designer" },
  { label: "Methods", value: "User Surveys, Moderated Usability Testing, Wireframing, Prototyping" },
  { label: "Tools", value: "Sketch, InVision" },
];

export default function MicroFocus() {
  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="bg-white pt-8 md:pt-16 pb-0">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8 mb-8 md:mb-12">
            <h2 className="font-serif text-[28px] md:text-[48px] font-bold text-[#020206] leading-tight md:leading-[54px] max-w-[680px]">
              Consolidating four legacy websites into a single enterprise platform
            </h2>
            <div className="md:text-right shrink-0">
              <p className="link-label text-[#FF2900]">Micro Focus</p>
              <p className="link-label text-[#FF2900]">Lead UI/UX Designer</p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-8">
          <Image
            src="/images/mf-header.png"
            alt="Micro Focus enterprise platform"
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
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-[#020206] mb-6">
            Overview
          </h3>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
              In 2015, I joined DXC as a contract designer placed at Novell. Within a few months,
              Novell was acquired by Micro Focus — a merger that created the world&apos;s largest
              enterprise software company. Before the merger, Micro Focus and its acquisitions had
              accumulated four separate websites selling overlapping products to overlapping
              audiences, each with its own brand, content strategy, and technical foundation. I was
              brought on as the sole designer to lead the consolidation effort. By the end of the
              two-year project, I was leading a team of four designers and had helped establish the
              design language, page templates, and component system that unified the experience.
            </p>
            <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
              This case study covers a multi-year UI engagement: research across four existing user
              bases, layouts across extensive IA and marketing priorities, a component-based system
              to resolve competing design directions, and the templatized component system that made
              it possible to launch and maintain a website with thousands of pages.
            </p>
          </div>
        </section>
      </div>

      {/* ── Screenshot 1 ── */}
      <div className="w-full max-w-[954px] mx-auto px-4 md:px-10">
        <ScrollableImage
          src="/images/mf-study-01.png"
          alt="Micro Focus product page template"
        />
      </div>

      {/* ── Content: Context & Challenge ── */}
      <div className="max-w-[760px] mx-auto px-8 py-16 flex flex-col gap-16">
        <section>
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-[#020206] mb-6">
            Context &amp; Challenge
          </h3>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
              Before the merger, Novell had been acquired multiple times, and each acquisition had
              brought along its own product line and corresponding website. By the time Micro Focus
              came into the picture, four separate marketing sites were competing for attention,
              confusing customers, and creating duplicated work for content, marketing, and
              engineering teams. Some products were sold across multiple sites. Content was
              frequently duplicated. There was site-level navigation that no longer reflected how
              customers searched for solutions.
            </p>
            <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
              The newly merged company also needed a unified brand identity, which meant the website
              consolidation had to happen alongside a full rebrand — two major projects in parallel,
              working with thousands of existing pages that needed to be migrated, redesigned, or
              retired.
            </p>
          </div>
        </section>
      </div>

      {/* ── Screenshot 2 ── */}
      <div className="w-full max-w-[954px] mx-auto px-4 md:px-10">
        <ScrollableImage
          src="/images/mf-study-02.png"
          alt="Micro Focus website consolidation exploration"
        />
      </div>

      {/* ── Content: Core Problem + Research & Solution + Process + Results ── */}
      <div className="max-w-[760px] mx-auto px-8 py-16 flex flex-col gap-16">

        <section>
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-[#020206] mb-6">
            The Core Problem
          </h3>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
              How do you merge four established websites — each with its own loyal users, content,
              and conversion patterns — into a single unified platform without losing what was
              working on each? And how do you do it while simultaneously rolling out a new brand
              identity and scaling from one designer to a team of four?
            </p>
            <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
              The challenge wasn&apos;t just visual consolidation — it was figuring out which
              features and patterns from each legacy site actually served users, which were
              holdovers from past acquisitions, and which needed to be reimagined entirely for the
              merged audience.
            </p>
          </div>
        </section>

        <section>
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-[#020206] mb-6">
            Research &amp; Solution
          </h3>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
              Rather than relying on stakeholder opinions about which legacy site performed best, I
              built a user validation strategy around real user feedback. I designed and ran
              moderated user research sessions, watching users navigate prototypes to understand
              which content patterns resonated most. From those respondents, I selected a subset for
              moderated video sessions, watching users navigate through existing tasks to understand
              where the existing sites supported their workflow and where they got stuck.
            </p>
            <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
              The synthesis from this research drove the feature decisions for the new unified site.
              When research surfaced clear winners, those patterns became the foundation. When two
              or three viable directions emerged, I designed variations and ran additional usability
              tests to identify the strongest option. For decisions where qualitative testing
              didn&apos;t produce a clear answer, we built both versions and resolved the question
              through A/B testing post launch.
            </p>
          </div>
        </section>

      </div>

      {/* ── Screenshot 3 ── */}
      <div className="w-full max-w-[954px] mx-auto px-4 md:px-10">
        <ScrollableImage
          src="/images/mf-study-03.png"
          alt="Micro Focus unified design system"
        />
      </div>

      {/* ── Content: Process + Results + Metadata ── */}
      <div className="max-w-[760px] mx-auto px-8 py-16 pb-20 flex flex-col gap-16">

        <section>
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-[#020206] mb-6">
            Process
          </h3>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
              Every problem started in low-fidelity wireframes. With a rebrand happening in
              parallel, low-fidelity was the only way to evaluate structure and flow without getting
              tangled up in evolving visual decisions. Wireframes were also easier to walk
              stakeholders and users through, which kept iteration fast.
            </p>
            <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
              Once a wireframe direction was validated, I moved into clickable prototypes so
              engineering could begin scoping the build in parallel with the continued design work.
              After usability testing, I produced high-fidelity responsive designs in Sketch and
              reviewed them closely with the development team — keeping framework constraints in
              mind so the engineering handoff would be clean.
            </p>
            <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
              With thousands of pages in scope, templating was non-negotiable. I built a system of
              reusable page templates and components that covered the full range of content types on
              the site. That system allowed the design team to maintain consistency at scale —
              patterns that were still in use long after the project ended.
            </p>
          </div>
        </section>

        <section>
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-[#020206] mb-6">
            Results
          </h3>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
              Four separate websites were successfully consolidated into a single unified platform
              under the new Micro Focus brand. The templatized design system became the handoff tool
              for the 40+ person content migration team, and the cross-functional working patterns
              we established between design and engineering became the team&apos;s default operating
              model — still in use today, even after most of the original team has moved on.
            </p>
            <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
              This project also fundamentally shaped my design practice. Watching the real-world
              problems with real user feedback taught me that I wanted to go deeper into UX, not
              just UI. After the project wrapped, I enrolled in General Assembly&apos;s UX program
              to formalize that side of my practice. Looking back, this was the project that taught
              me how research transforms design from subjective opinion into a defensible strategy —
              and how the right collaboration patterns between design and engineering can outlast any
              individual contributor.
            </p>
          </div>
        </section>

        {/* Metadata */}
        <dl className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-8 gap-y-3 pt-4 border-t border-[#D0D0D0]">
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

      {/* ── CTA ── */}
      <section className="bg-[#F0F0F0] py-20 flex items-center justify-center">
        <Image
          src="/images/mf-footer.png"
          alt="Micro Focus unified platform"
          width={0}
          height={0}
          sizes="(max-width: 1024px) 90vw, 800px"
          quality={90}
          className="h-auto mx-auto"
          style={{ width: "auto", maxWidth: "800px" }}
        />
      </section>

      <Footer />
    </>
  );
}
