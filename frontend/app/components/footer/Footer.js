"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState("");

  const handleSubscribe = (event) => {
    event.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      setNotice("Please enter a valid email.");
      return;
    }
    setNotice("Thanks! We will keep you posted.");
    setEmail("");
  };

  return (
    <footer className="relative isolate overflow-hidden border-t border-emerald-200/40 bg-[#f0fdf4] px-4 pb-8 pt-8 text-[#064e3b] sm:px-6 md:px-10 md:pt-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(167,243,208,0.3),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(110,231,183,0.2),transparent_26%)]" />
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 border-b border-emerald-200/40 pb-8 text-[#059669] md:grid-cols-[1fr_auto_auto_1.2fr] md:items-start md:gap-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center text-white text-xs font-bold">RV</span>
              <span className="text-sm font-bold text-[#064e3b]">ResumeVault</span>
            </div>
            <p className="text-xs text-[#059669]/70 mt-1">Built by Er. Pankaj Kumar</p>
          </div>

          <div className="space-y-1 text-sm font-medium">
            {["#home", "#features", "#faqs", "#cta"].map((href, i) => (
              <a key={i} href={href} className="block w-fit text-[#059669] transition-all duration-300 hover:translate-x-1.5 hover:text-[#064e3b]">
                {href.replace("#", "").charAt(0).toUpperCase() + href.slice(2)}
              </a>
            ))}
            <a href="/privacy" className="block w-fit text-[#059669] transition-all duration-300 hover:translate-x-1.5 hover:text-[#064e3b]">Privacy</a>
            <a href="/terms" className="block w-fit text-[#059669] transition-all duration-300 hover:translate-x-1.5 hover:text-[#064e3b]">Terms</a>
            <a href="/blog" className="block w-fit text-[#059669] transition-all duration-300 hover:translate-x-1.5 hover:text-[#064e3b]">Blog</a>
          </div>

          <div className="space-y-1 text-sm font-medium">
            <a href="#" className="block w-fit text-[#059669] transition-all duration-300 hover:translate-x-1.5 hover:text-[#064e3b]">Twitter</a>
            <a href="#" className="block w-fit text-[#059669] transition-all duration-300 hover:translate-x-1.5 hover:text-[#064e3b]">Github</a>
            <a href="#" className="block w-fit text-[#059669] transition-all duration-300 hover:translate-x-1.5 hover:text-[#064e3b]">LinkedIn</a>
          </div>

          <div className="max-w-md md:justify-self-end">
            <p className="text-sm font-medium text-[#059669]">Get occasional updates on all things.</p>
            <form
              onSubmit={handleSubscribe}
              className="mt-3 flex items-center border border-emerald-200 bg-white/60 px-4 py-3 transition-all duration-300 hover:border-emerald-300 focus-within:border-emerald-400/60 focus-within:bg-white/80 focus-within:shadow-[0_4px_20px_-10px_rgba(5,150,105,0.15)]"
            >
              <input
                type="email"
                placeholder="Email here"
                aria-label="Email for updates"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent text-sm text-[#064e3b] placeholder:text-[#059669]/60 outline-none"
              />
              <button type="submit" aria-label="Subscribe" className="pl-3 text-xl leading-none text-[#059669] transition-all duration-300 hover:translate-x-1 hover:text-emerald-700">
                →
              </button>
            </form>
            {notice && <p className="mt-2 text-xs text-[#059669]">{notice}</p>}
          </div>
        </div>

        <div className="relative mt-8 pb-2 pt-4">
          <div className="select-none text-center text-[3.8rem] font-semibold leading-none tracking-tight text-emerald-700/20 sm:text-[6rem] md:text-[9.5rem] lg:text-[11rem]">
            Resume<span className="ml-2 italic">Vault</span>
          </div>
        </div>

        <div className="mt-2 flex flex-col gap-2 text-xs text-[#059669] sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} ResumeVault. Built by <strong>Er. Pankaj Kumar</strong>.
          </p>
          <p className="text-[#064e3b] text-center md:text-left text-sm md:text-base">
            Keep one link. Update anytime.
          </p>
        </div>
      </div>
    </footer>
  );
}
