import { values } from "@/app/components/content/firm";

export function ValuesSection() {
  return (
    <section className="paper-dots border-y border-navy/8 bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="mb-14 text-center">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-gold-dark">
            How we'll work together
          </p>
          <h2 className="mb-3 font-headline text-[32px] font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-[40px]">
            Principles that <em className="font-light italic">guide the practice</em>
          </h2>
          <p className="mx-auto max-w-lg font-body text-[15px] leading-relaxed text-navy/70">
            The fundamentals of working with us. You'll notice them from day
            one.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <div
              key={value.title}
              className="group border border-navy/8 bg-white p-8 transition-all duration-300 hover:border-navy hover:bg-navy"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="material-symbols-outlined text-[26px] text-navy transition-colors duration-300 group-hover:text-white">
                  {value.icon}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-navy/35 transition-colors duration-300 group-hover:text-white/40">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mb-2 font-headline text-[20px] font-medium tracking-[-0.01em] text-navy transition-colors duration-300 group-hover:text-white">
                {value.title}
              </h3>
              <p className="font-body text-[13px] leading-relaxed text-navy/65 transition-colors duration-300 group-hover:text-white/65">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
