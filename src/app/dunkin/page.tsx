import React from "react";
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ScrollableImage from "../components/ScrollableImage";

const metadata = [
  { label: "Client", value: "Dunkin' Donuts" },
  { label: "Product", value: "Employee & Franchisee Training Platform" },
  { label: "Domain", value: "Quick Service Restaurant / Franchise Operations" },
  { label: "My Role", value: "UI Designer" },
  { label: "Team", value: "Nacy McClellan (Design)" },
  { label: "Tools", value: "Adobe XD (Design), Adobe AEM (Build)" },
];

export default function Dunkin() {
  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="bg-white pt-8 md:pt-16 pb-0">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8 mb-8 md:mb-12">
            <h2 className="font-serif text-[28px] md:text-[48px] font-bold text-[#020206] leading-tight md:leading-[54px] max-w-[680px]">
              A unified training platform for 12,000+ franchise locations
            </h2>
            <div className="md:text-right shrink-0">
              <p className="link-label text-[#FF2900]">Dunkin&apos; Donuts</p>
              <p className="link-label text-[#FF2900]">UI Design</p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-8">
          <Image
            src="/images/dunkin-header.png"
            alt="Dunkin' Donuts training platform"
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
              Dunkin&apos; Donuts needed a centralized training platform to serve employees across
              their franchise network. Their existing training site was disorganized, difficult to
              navigate, and not built to scale. The challenge was made more complex by the need to
              serve both Dunkin&apos; Donuts and Baskin Robbins under one roof, with employees who
              needed training for both brands. I was brought on as part of a two-person design team
              to rethink the training experience from the ground up — designing solutions for
              individual brand locations, combination stores, and multiple levels of franchise
              ownership.
            </p>
            <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
              This case study covers the UI design process across a six-month engagement: defining
              the information architecture for three branded experiences, designing role-based views
              for employees and franchisees, and validating the approach through user testing.
            </p>
          </div>
        </section>

        {/* Context & Challenge */}
        <section>
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-[#020206] mb-6">
            Context &amp; Challenge
          </h3>
          <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
            Franchise employees at Dunkin&apos; Donuts needed to access required training at any
            point during their shift — video modules, step-by-step recipes, and equipment
            maintenance procedures. But the existing platform treated all users the same, regardless
            of whether they worked at a standalone Dunkin&apos;, a standalone Baskin Robbins, or a
            combination of both brands. There was no differentiation between a frontline employee
            checking a recipe and a franchisee reviewing compliance training across multiple
            locations.
          </p>
        </section>

      </div>

      {/* ── Screenshot 1 ── */}
      <div className="w-full max-w-[954px] mx-auto px-4 md:px-10">
        <ScrollableImage
          src="/images/dunkin-study-01.png"
          alt="Dunkin' Donuts training platform dashboard"
        />
      </div>

      <div className="max-w-[760px] mx-auto px-8 py-16 flex flex-col gap-16">

        {/* The Core Problem */}
        <section>
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-[#020206] mb-6">
            The Core Problem
          </h3>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
              Employees needed fast, frictionless access to training content that was relevant to
              their brand, their role, and their current task. The existing system buried that
              content behind a one-size-fits-all interface that didn&apos;t reflect how franchise
              operations actually worked — and it certainly didn&apos;t scale across the three
              distinct branded experiences the business required.
            </p>
            <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
              The scope also grew significantly over the six-month engagement. What began as an
              employee training redesign expanded to include franchisee-specific views and tiered
              ownership levels, each with different content needs and permissions.
            </p>
          </div>
        </section>

      </div>

      {/* ── Screenshot 2 ── */}
      <div className="w-full max-w-[954px] mx-auto px-4 md:px-10">
        <ScrollableImage
          src="/images/dunkin-study-02.png"
          alt="Dunkin' training platform wireframe exploration"
        />
      </div>

      <div className="max-w-[760px] mx-auto px-8 py-16 flex flex-col gap-16">

        {/* Solution */}
        <section>
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-[#020206] mb-6">
            Solution
          </h3>
          <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
            Across three branded training experiences (Dunkin&apos; Donuts, Baskin Robbins, and a
            combined experience), we designed a centralized dashboard that gave users everything
            they needed in one place: an upcoming training agenda, new and trending content
            (recipes, videos, company updates), and an active list of required training modules.
            The dashboard served as a single entry point regardless of role, with content tailored
            to whether the user was an employee or a franchise owner.
          </p>
        </section>

      </div>

      {/* ── Screenshot 3 ── */}
      <div className="w-full max-w-[954px] mx-auto px-4 md:px-10">
        <ScrollableImage
          src="/images/dunkin-study-03.png"
          alt="Dunkin' training platform learning path"
        />
      </div>

      <div className="max-w-[760px] mx-auto px-8 py-16 pb-20 flex flex-col gap-16">

        {/* Results */}
        <section>
          <h3 className="font-serif text-[28px] font-normal leading-[32px] text-[#020206] mb-6">
            Results
          </h3>
          <p className="font-sans text-[16px] font-normal leading-relaxed text-[#020206]">
            User testing with a small sample validated that the training modules and overall
            experience were effective and easy to navigate. The proof of concept was completed for
            all three branded experiences, the combination flow, and the individual Dunkin&apos;
            Donuts and Baskin Robbins flows. The project then moved into build with Adobe AEM and
            continued with the client.
          </p>
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

      {/* ── Pink CTA ── */}
      <section className="bg-[#E8417C] py-20 flex items-center justify-center">
        <Image
          src="/images/dunkin-footer.png"
          alt="Dunkin' training platform on mobile"
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
