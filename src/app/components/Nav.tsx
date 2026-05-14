"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const caseStudies = [
  { label: "Dunkin' Donuts", href: "/dunkin" },
  { label: "McLeod", href: "/mcleod" },
  { label: "Micro Focus", href: "/microfocus" },
  { label: "Prestige", href: "/prestige" },
  { label: "Vivint", href: "/vivint" },
];

const extras = [
  { label: "Resume", href: "/resume" },
];

function HomeIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M12 29.3337V16.0003H20V29.3337M4 12.0003L16 2.66699L28 12.0003V26.667C28 27.3742 27.719 28.0525 27.219 28.5526C26.7189 29.0527 26.0406 29.3337 25.3333 29.3337H6.66667C5.95942 29.3337 5.28115 29.0527 4.78105 28.5526C4.28095 28.0525 4 27.3742 4 26.667V12.0003Z"
        stroke="#FF2900"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M8.33341 19.9997L31.6667 19.9997M31.6667 19.9997L20.0001 8.33301M31.6667 19.9997L20.0001 31.6663"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <a href="/">
            <h1 className="font-sans text-[18px] font-bold text-foreground uppercase tracking-[1.8px] leading-normal">
              Stephanie Jae&nbsp;•&nbsp;Design
            </h1>
          </a>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="cursor-pointer p-1 z-[60] relative text-foreground"
            >
              {open ? (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <line y1="-1" x2="42.9203" y2="-1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 36 4.5)" stroke="currentColor" strokeWidth="2" />
                  <line x1="4.70711" y1="3.79289" x2="35.0563" y2="34.1421" stroke="currentColor" strokeWidth="2" />
                </svg>
              ) : (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <line x1="3" y1="9" x2="37" y2="9" stroke="currentColor" strokeWidth="2" />
                  <line x1="3" y1="19" x2="37" y2="19" stroke="currentColor" strokeWidth="2" />
                  <line x1="3" y1="29" x2="37" y2="29" stroke="currentColor" strokeWidth="2" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-in menu — always dark */}
      <nav
        aria-label="Site navigation"
        className={`fixed top-0 right-0 h-full z-50 bg-[#020206] w-[280px] flex flex-col px-6 py-8 gap-6 transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a href="/" onClick={() => setOpen(false)} aria-label="Home">
          <HomeIcon />
        </a>

        <div className="flex flex-col gap-3">
          <span className="font-sans text-[10px] font-bold uppercase tracking-[1.6px] text-[#D0D0D0]/60">
            Case Studies
          </span>
          {caseStudies.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between group"
            >
              <span className="link-label text-white group-hover:text-[#FF2900] transition-colors">
                {item.label}
              </span>
              <ArrowIcon />
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-sans text-[10px] font-bold uppercase tracking-[1.6px] text-[#D0D0D0]/60">
            Extras
          </span>
          {extras.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between group"
            >
              <span className="link-label text-white group-hover:text-[#FF2900] transition-colors">
                {item.label}
              </span>
              <ArrowIcon />
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
