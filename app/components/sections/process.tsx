import { process } from "@/app/components/content/firm";

export function ProcessSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-body text-[11px] font-bold uppercase tracking-[0.2em] text-gold-dark">
            How We'll Work Together
          </p>
          <h2 className="mb-3 font-headline text-[32px] font-semibold tracking-tight text-navy md:text-[40px]">
            Simple, four-step process
          </h2>
          <p className="font-body text-[15px] leading-relaxed text-navy/70">
            No retainer lock-ins, no mystery fees. Here's exactly what working
            with us looks like, start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item, i) => (
            <div key={item.step} className="relative">
              {i < process.length - 1 && (
                <div className="absolute left-12 top-12 hidden h-px w-full bg-gold/20 lg:block" />
              )}
              <div className="relative z-10 rounded-sm border border-navy/8 bg-cream p-7 transition-all hover:border-gold/40 hover:shadow-md">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-navy text-white">
                    <span className="material-symbols-outlined text-[24px]">
                      {item.icon}
                    </span>
                  </div>
                  <span className="font-headline text-[28px] font-bold text-gold/30">
                    {item.step}
                  </span>
                </div>
                <h3 className="mb-2 font-headline text-[20px] font-semibold tracking-tight text-navy">
                  {item.title}
                </h3>
                <p className="font-body text-[13px] leading-relaxed text-navy/70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
