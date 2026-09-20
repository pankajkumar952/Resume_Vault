import Image from "next/image";

const sampleLink = "https://drive.google.com/file/d/1L8pYOnTxKvLMETP0b9sLmkc_mQ9PbtA_/view?usp=sharing";
const sampleSlugLink = "https://www.resumevault.app/pankaj-kumar/fullstack";

export default function SharePreview() {
  return (
    <section
      id="share-preview"
      className="relative overflow-hidden bg-[#f0fdf4] px-4 py-24 text-[#064e3b] sm:px-6 md:px-10 md:py-28"
    >
      <div className="relative mx-auto w-full max-w-4xl">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#059669]">
            Link Preview
          </p>
          <h2 className="text-balance text-3xl font-medium leading-[1.03] tracking-tight text-[#064e3b] sm:text-5xl md:text-6xl">
            See Exactly What Recruiters
            <span className="ml-3 inline-block italic text-[#059669]">Open</span>
          </h2>

          <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-[#059669] md:text-lg md:leading-8">
            This is how your resume link appears when shared. Clean URL, instant
            preview, and always the latest version.
          </p>

          {/* Sample link display */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            <code className="text-sm text-emerald-700 font-mono">resumevault.app/pankaj-kumar/fullstack</code>
          </div>
        </div>

        <a
          href={sampleLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group mx-auto mt-10 block w-full max-w-[640px] overflow-hidden rounded-[1.8rem] border border-emerald-200 bg-[#f0fdf4] p-1 shadow-[0_24px_70px_-36px_rgba(5,150,105,0.4)] transition hover:border-emerald-300 sm:mt-12"
        >
          <div className="w-full overflow-hidden rounded-[1.35rem] border border-emerald-100 bg-white/90 p-6">
            {/* Simulated resume card */}
            <div className="text-left space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm">PK</div>
                <div>
                  <p className="font-bold text-[#064e3b] text-sm">Er. Pankaj Kumar</p>
                  <p className="text-xs text-[#059669]">Software Developer · Hyderabad, India</p>
                </div>
              </div>
              <div className="h-px bg-emerald-100"></div>
              <p className="text-xs text-gray-500 leading-relaxed">Java · Spring Boot · Python · REST APIs · Microservices · Kafka · AWS · React.js</p>
              <div className="flex gap-2">
                <span className="text-xs bg-emerald-50 border border-emerald-200 text-emerald-700 px-2 py-1 rounded-full">Software Developer</span>
                <span className="text-xs bg-emerald-50 border border-emerald-200 text-emerald-700 px-2 py-1 rounded-full">12+ APIs Delivered</span>
              </div>
              <p className="text-xs text-emerald-600 font-medium">📄 View Full Resume →</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
