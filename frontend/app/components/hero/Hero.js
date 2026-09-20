"use client";

import { Syne, Outfit } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import Image from "next/image";
import { CornerButton } from "@/components/ui/corner-button";

const headingFont = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const bodyFont = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Hero() {
  const router = useRouter();

  const [authHoverStyle, setAuthHoverStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const authContainerRef = useRef(null);

  const handleAuthMouseEnter = (e) => {
    if (!authContainerRef.current) return;
    const { offsetLeft, offsetWidth } = e.currentTarget;
    setAuthHoverStyle({ left: offsetLeft, width: offsetWidth, opacity: 1 });
  };

  const handleAuthMouseLeave = () => {
    setAuthHoverStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  const goToLogin = () => router.push("/login");
  const goToRegister = () => router.push("/register");

  return (
    <main
      id="home"
      className={`${bodyFont.className} relative isolate min-h-[100dvh] overflow-hidden bg-[#022c22] text-white`}
    >
      {/* Base Image Layer */}
      <div className="absolute inset-0 -z-40 translate-y-[2%] scale-[1.05]">
        <Image
          src="/hero6.webp"
          alt="Hero Background"
          fill
          priority
          unoptimized={true}
          className="object-cover object-center opacity-30"
        />
      </div>

      {/* Emerald gradient overlay */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-br from-emerald-900/80 via-teal-900/60 to-green-900/70 pointer-events-none" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black/10 via-transparent to-transparent pointer-events-none" />

      <section className="relative mx-auto flex min-h-[100dvh] w-full flex-col pt-6 md:pt-10">

        {/* Navbar */}
        <header className="mx-auto w-full px-6 md:px-12 lg:px-16 flex justify-between items-center">

          {/* Left Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-400/30 flex items-center justify-center border border-emerald-300/40">
              <span className="text-emerald-200 font-bold text-sm">RV</span>
            </div>
            <p className={`${headingFont.className} text-2xl md:text-3xl font-bold tracking-tighter text-emerald-100`}>
              ResumeVault
            </p>
          </div>

          {/* Right Actions */}
          <div
            ref={authContainerRef}
            onMouseLeave={handleAuthMouseLeave}
            className="relative flex items-center gap-6"
          >
            <button
              onClick={goToRegister}
              onMouseEnter={handleAuthMouseEnter}
              className="relative z-10 hidden sm:block text-[15px] font-medium text-emerald-200 transition-colors hover:text-white"
            >
              Register
            </button>
            <button
              onClick={goToLogin}
              onMouseEnter={handleAuthMouseEnter}
              className="relative z-10 text-[15px] font-medium text-emerald-200 transition-colors hover:text-white"
            >
              Login
            </button>

            <div
              className="absolute -bottom-0.5 h-[2px] bg-emerald-300 rounded-full transition-all duration-300 ease-out"
              style={{
                left: `${authHoverStyle.left}px`,
                width: `${authHoverStyle.width}px`,
                opacity: authHoverStyle.opacity,
              }}
            />
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative mx-auto mt-2 md:mt-6 flex max-w-3xl flex-1 flex-col items-center text-center px-4">

          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-900/40 px-4 py-1.5 text-sm font-medium text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Built by Er. Pankaj Kumar
          </div>

          {/* Main Heading */}
          <h1 className={`${headingFont.className} text-balance text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] tracking-tighter text-white`}>
            The Ultimate Resume Link Generator. Your Resume Deserves a Better Link.
          </h1>

          {/* Subheading */}
          <p className="mt-4 md:mt-5 max-w-lg text-balance text-[15px] md:text-base leading-relaxed text-emerald-200/80 font-medium">
            Create one resume link, share it anywhere, and keep the same link when you update your resume.
          </p>

          {/* Primary CTA */}
          <div className="mt-6 flex flex-col items-center">
            <CornerButton
              onClick={goToLogin}
              accentColor="#6ee7b7"
              className="!px-6 !py-2 !text-[15px] text-emerald-900 font-medium"
              wrapperClassName="!p-3"
              icon={
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                  <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            >
              Get My Link
            </CornerButton>
          </div>

        </div>
      </section>
    </main>
  );
}
