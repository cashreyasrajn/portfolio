import Image from "next/image";

export function ProcessSection() {
  return (
    <section className="overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-gold-dark">
            Our philosophy
          </p>
          <h2 className="mb-3 font-headline text-[32px] font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-[40px]">
            Standards worth <em className="font-light italic">following</em>
          </h2>
          <p className="font-body text-[15px] leading-relaxed text-navy/70">
            The way we work is shaped by the standard we want to set for every
            client, every engagement, and every decision.
          </p>
        </div>

        <div className="relative isolate grid min-h-[480px] overflow-hidden bg-navy lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[280px] lg:min-h-0">
            <Image
              src="/images/work-signing.jpg"
              alt="A professional reviewing and signing an agreement"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-center opacity-70"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-navy/35 lg:hidden" />
          <div className="absolute inset-y-0 left-0 -z-10 hidden w-[48%] bg-gradient-to-r from-navy/20 to-navy lg:block" />

          <div className="relative z-10 flex items-end bg-gradient-to-t from-navy via-navy/70 to-navy/10 p-8 pt-48 text-white md:p-12 md:pt-56 lg:col-start-2 lg:bg-navy lg:p-16">
            <div className="max-w-xl">
              <span className="mb-8 block h-px w-16 bg-gold" />
              <blockquote className="font-headline text-[30px] font-light leading-[1.16] tracking-[-0.02em] md:text-[42px]">
                “Whatever action a great man performs, common men follow. And
                whatever standards he sets by exemplary acts, all the world
                pursues.”
              </blockquote>
              <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">
                Bhagavad Gita · 3.21
              </p>
              <p className="mt-6 max-w-md border-l border-gold/60 pl-4 font-body text-[14px] leading-relaxed text-white/65">
                We believe trust is earned through the details: clear advice,
                timely work, and the same standard applied whether the matter
                is routine or complex.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
