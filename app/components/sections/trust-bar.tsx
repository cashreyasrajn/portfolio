import Link from "next/link";

export function TrustBar() {
  const logos = [
    { name: "Manufacturer Co.", letter: "M" },
    { name: "TechCorp", letter: "T" },
    { name: "Finance Group", letter: "F" },
    { name: "AgriExport Ltd", letter: "A" },
    { name: "RetailChain India", letter: "R" },
    { name: "Healthcare Pvt Ltd", letter: "H" },
  ];

  return (
    <section className="border-y border-navy/8 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <p className="mb-10 text-center font-body text-[11px] font-bold uppercase tracking-[0.2em] text-navy/55">
          Trusted By Enterprises Across India
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 opacity-30 grayscale transition-all duration-500 hover:opacity-60 hover:grayscale-0">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-16 w-32 items-center justify-center rounded-sm border border-navy/10 bg-cream"
              title={logo.name}
            >
              <span className="font-headline text-[22px] font-semibold text-navy/30">
                {logo.letter}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
