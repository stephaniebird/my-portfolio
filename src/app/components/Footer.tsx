export default function Footer() {
  return (
    <footer className="bg-[#020206] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <nav className="flex gap-6 flex-wrap" aria-label="Social links">
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/stephanie-bird-00852328/" },
            { label: "Instagram", href: "https://www.instagram.com/stephaniejae.design" },
            { label: "Dribbble", href: "https://dribbble.com/stephaniejae" },
            { label: "Resume", href: "/resume" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="link-label text-white hover:text-[#FF2900] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-xs tracking-[0.08em] uppercase text-[#D0D0D0]">
          Copyright &copy; Stephanie Bird. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
