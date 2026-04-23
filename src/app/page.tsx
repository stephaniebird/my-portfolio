import Image from "next/image";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const caseStudies = [
  {
    id: 1,
    title: "Multi-Product Logistics Design System",
    description:
      "From no reusable components to a fully usable component library across a multi-product logistics ecosystem, for one single-source of truth.",
    bg: "bg-[#D0D0D0]",
    titleColor: "text-[#020206]",
    descColor: "text-[#020206]",
    readMoreColor: "text-[#020206]",
    arrowStroke: "#020206",
    image: "/images/mcleod-home.png",
    imageAlt: "McLeod logistics design system screenshot",
    href: "/mcleod",
  },
  {
    id: 2,
    title: "A Unified Training Platform for Franchise Locations",
    description:
      "Dunkin' Donuts needed a centralized training platform to serve employees across their franchise network. Learn how I helped build them a proof of concept.",
    bg: "bg-[#4564B6]",
    titleColor: "text-white",
    descColor: "text-white/80",
    readMoreColor: "text-white",
    arrowStroke: "#ffffff",
    image: "/images/dunkin-home.png",
    imageAlt: "Dunkin training platform mobile screens",
    href: "/dunkin",
  },
  {
    id: 3,
    title: "Internal Case Management Application",
    description:
      "This case study walks through the end-to-end UX process: from contextual research in a live call center environment through synthesis, design, and usability testing.",
    bg: "bg-[#D0D0D0]",
    titleColor: "text-[#020206]",
    descColor: "text-[#020206]",
    readMoreColor: "text-[#020206]",
    arrowStroke: "#020206",
    image: "/images/prestige-home.png",
    imageAlt: "Prestige case management application screenshot",
    href: "/prestige",
  },
];

function ArrowCircleIcon({ stroke }: { stroke: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16.0001 21.3337L21.3334 16.0003M21.3334 16.0003L16.0001 10.667M21.3334 16.0003L10.6667 16.0003M29.3334 16.0003C29.3334 23.3641 23.3639 29.3337 16.0001 29.3337C8.63628 29.3337 2.66675 23.3641 2.66675 16.0003C2.66675 8.63653 8.63628 2.66699 16.0001 2.66699C23.3639 2.66699 29.3334 8.63653 29.3334 16.0003Z"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-8 py-20 flex items-start justify-between gap-12">
          <div className="max-w-sm">
            <h2 className="font-serif text-[56px] font-normal text-[#FF2900] mb-5 leading-normal">
              Hello.
            </h2>
            <p className="font-serif text-[18px] font-light text-[#020206] leading-normal w-[530px]">
              I've watched real humans use real software in real time and let me
              tell you — we need all the help we can get. That's where I come
              in. Design systems, AI workflows, and a borderline obsessive
              interest in how people actually do their jobs.
            </p>
          </div>
          <div className="flex gap-3 pt-2 shrink-0">
            <a
              href="/resume"
              className="px-6 py-2 text-xs tracking-[0.15em] uppercase font-semibold bg-[#FF2900] text-white rounded-full hover:bg-[#cc2000] transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="bg-[#F0F0F0] py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {caseStudies.map((study) => (
              <a
                key={study.id}
                href={study.href}
                className={`${study.bg} rounded-2xl p-7 flex flex-col justify-between min-h-[500px] group`}
              >
                <div>
                  <h3
                    className={`font-serif text-[28px] font-normal leading-[32px] mb-4 ${study.titleColor}`}
                  >
                    {study.title}
                  </h3>
                  <p className={`font-sans text-[16px] font-normal leading-normal ${study.descColor}`}>
                    {study.description}
                  </p>
                </div>

                <div className="relative my-8 w-full h-48">
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span
                    className={`link-label ${study.readMoreColor}`}
                  >
                    Read More
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    <ArrowCircleIcon stroke={study.arrowStroke} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
