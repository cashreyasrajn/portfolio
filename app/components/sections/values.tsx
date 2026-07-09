import { values } from "@/app/components/content/firm";

export function ValuesSection() {
  return (
    <section className="border-y border-navy/8 bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="mb-14 text-center">
          <p className="mb-3 font-body text-[11px] font-bold uppercase tracking-[0.2em] text-gold-dark">
            How We Work
          </p>
          <h2 className="mb-3 font-headline text-[32px] font-semibold tracking-tight text-navy md:text-[40px]">
            Principles that guide the practice
          </h2>
          <p className="mx-auto max-w-lg font-body text-[15px] leading-relaxed text-navy/70">
            The fundamentals of working with us. You'll notice them from day
            one.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="group rounded-sm border border-navy/8 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg hover:shadow-navy/[0.04]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-sm bg-navy/[0.04] text-gold transition-all duration-300 group-hover:bg-navy group-hover:text-white">
                <span className="material-symbols-outlined text-[28px]">
                  {value.icon}
                </span>
              </div>
              <h3 className="mb-2 font-headline text-[20px] font-semibold tracking-tight text-navy">
                {value.title}
              </h3>
              <p className="font-body text-[13px] leading-relaxed text-navy/70">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
