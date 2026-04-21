import Nav from "../components/Nav";
import Footer from "../components/Footer";

const experience = [
  {
    company: "Tech9",
    title: "Senior Product Designer",
    location: "Lehi, UT",
    dates: "May 2023 – Present",
    bullets: [
      "Lead designer for enterprise TMS platform—own end-to-end design of data-heavy desktop workflows for dispatch, cash receipts, settlements, and alert configuration.",
      "Built a scalable design system using Atomic Design: component docs, design tokens, naming conventions, and a 28-week adoption roadmap across the product suite.",
      "Wrote design specs for each feature, defining interaction patterns, business rules, and acceptance criteria before development.",
      "Partner with frontend engineers to align Figma components with code, ensuring token parity and consistent handoff.",
      "Developed an accessible color system resolving WCAG AA contrast failures across all semantic colors, with extended shade scales for light and dark modes.",
      "Run user interviews and heuristic evaluations to drive iteration on transaction flows and operational tools.",
      "Mentor junior designers on systems thinking, accessibility, and product-focused process.",
    ],
  },
  {
    company: "Vivint",
    title: "UI/UX Team Manager",
    location: "Provo, UT",
    dates: "September 2019 – May 2023",
    bullets: [
      "Designed cross-platform experiences for home automation, billing, and service management—translating complex device logic into approachable, task-oriented interfaces.",
      "Built high-fidelity prototypes and interaction specs for data-driven transactional flows across iOS, Android, and web.",
      "Contributed to a unified component library that reduced design debt and improved team velocity.",
      "Partnered with engineering to resolve implementation edge cases and ensure consistent pattern adoption.",
    ],
  },
  {
    company: "Merkle",
    title: "Senior UI Designer",
    location: "SLC, UT",
    dates: "Oct. 2020 – April 2021",
    bullets: [
      "Designed responsive web interfaces for enterprise clients including Dunkin’ Donuts and a fintech platform.",
      "Created a multi-brand design system unifying visual language and accelerating cross-team delivery.",
      "Ran usability tests and A/B experiments to validate decisions and improve conversion metrics.",
    ],
  },
];

const skills = [
  {
    label: "Design",
    value:
      "Product design, interaction design, information architecture, layout & navigation, visual design craft, design system architecture (Atomic Design), component documentation, design tokens, accessibility (WCAG AA)",
  },
  {
    label: "Tools",
    value:
      "Figma (components, variables, prototyping), Procreate, HTML/CSS prototyping, Vibe Coding, Claude, V.0",
  },
  {
    label: "Process",
    value:
      "Design specs & documentation, user research & interviews, heuristic evaluation, usability testing, stakeholder alignment, engineering collaboration, mentorship",
  },
  {
    label: "Domains",
    value: "Enterprise SaaS, fintech, logistics/TMS, IoT, B2B workflow tools",
  },
];

const education = [
  {
    school: "User Interviews",
    detail: "AI for User Research 101",
    date: "March 2026",
  },
  {
    school: "General Assembly",
    detail: "User Experience Circuit",
    date: "February 2017",
  },
  {
    school: "Utah Valley University",
    detail: "BFA in Graphic Design",
    date: "April 2012",
  },
];

export default function Resume() {
  return (
    <>
      <Nav />

      <main className="bg-white">
        <div className="max-w-[820px] mx-auto px-8 pt-16 pb-20">

          {/* ── Header ── */}
          <div className="mb-8">
            <h1 className="font-serif text-[52px] font-bold text-[#FF2900] leading-tight mb-2">
              Stephanie Bird
            </h1>
            <p className="font-sans text-[11px] font-bold uppercase tracking-[1.6px] text-[#020206] mb-5">
              Senior Product Designer&nbsp;&nbsp;|&nbsp;&nbsp;Design Systems&nbsp;&nbsp;|&nbsp;&nbsp;Desktop SaaS &amp; Enterprise Software
            </p>
            <p className="font-sans text-[14px] font-normal leading-relaxed text-[#020206] max-w-[540px] mb-6">
              Product designer with 8+ years in enterprise SaaS, fintech, and logistics. Specialized in
              design system architecture, complex desktop workflows, and end-to-end feature ownership.
              Strong writer and documenter who operates autonomously and thinks from first principles.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-sans text-[11px] font-bold uppercase tracking-[1.4px] text-[#020206]">801.310.5394</span>
              <span className="text-[#D0D0D0] select-none">|</span>
              <a
                href="mailto:stephaniejae.design@gmail.com"
                className="font-sans text-[11px] font-bold uppercase tracking-[1.4px] text-[#020206] hover:text-[#FF2900] transition-colors"
              >
                stephaniejae.design@gmail.com
              </a>
            </div>
          </div>

          <hr className="border-[#D0D0D0] mb-8" />

          {/* ── Experience ── */}
          <div className="flex flex-col">
            {experience.map((job, i) => (
              <div key={job.company}>
                <div className="grid gap-8" style={{ gridTemplateColumns: "188px 1fr" }}>
                  {/* Left */}
                  <div className="pt-1">
                    <h2 className="font-serif text-[26px] font-bold text-[#FF2900] leading-tight mb-2">
                      {job.company}
                    </h2>
                    <p className="font-sans text-[11px] font-bold uppercase tracking-[1.2px] text-[#020206] mb-2">
                      {job.title}
                    </p>
                    <p className="font-sans text-[12px] text-[#020206] leading-snug">{job.location}</p>
                    <p className="font-sans text-[12px] text-[#020206] leading-snug uppercase tracking-[0.6px]">
                      {job.dates}
                    </p>
                  </div>
                  {/* Right */}
                  <ul className="flex flex-col gap-[10px] pt-1">
                    {job.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 items-start">
                        <span className="mt-[7px] shrink-0 w-[5px] h-[5px] rounded-full bg-[#020206]" />
                        <span className="font-sans text-[14px] font-normal leading-relaxed text-[#020206]">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <hr className="border-[#D0D0D0] my-8" />
              </div>
            ))}
          </div>

          {/* ── Skills ── */}
          <div className="grid gap-8 mb-8" style={{ gridTemplateColumns: "188px 1fr" }}>
            <div className="pt-1">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[1.6px] text-[#FF2900]">
                Skills
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {skills.map((s) => (
                <p key={s.label} className="font-sans text-[14px] text-[#020206] leading-relaxed">
                  <span className="font-bold uppercase tracking-[0.8px]">{s.label}:</span>{" "}
                  {s.value}
                </p>
              ))}
            </div>
          </div>

          <hr className="border-[#D0D0D0] mb-8" />

          {/* ── Education ── */}
          <div className="grid gap-8" style={{ gridTemplateColumns: "188px 1fr" }}>
            <div className="pt-1">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[1.6px] text-[#FF2900]">
                Education
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {education.map((e) => (
                <p key={e.school} className="font-sans text-[14px] text-[#020206] leading-relaxed">
                  <span className="font-bold uppercase tracking-[0.8px]">{e.school}</span>{" "}
                  {e.detail}, {e.date}
                </p>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
