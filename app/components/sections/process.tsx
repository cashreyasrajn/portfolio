export function ProcessSection() {
  return (
    <section className="overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-gold-dark">
            Practice information
          </p>
          <h2 className="mb-3 font-headline text-[32px] font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-[40px]">
            Scope of <em className="font-light italic">practice</em>
          </h2>
          <p className="font-body text-[15px] leading-relaxed text-navy/70">
            The practice undertakes assignments in taxation, GST, audit,
            compliance, and business advisory, subject to applicable law and
            agreed engagement terms.
          </p>
        </div>

        <div className="relative isolate grid min-h-[480px] overflow-hidden bg-navy lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[240px] bg-[radial-gradient(circle_at_30%_20%,rgba(184,146,75,0.24),transparent_32%),linear-gradient(135deg,#0b1e3d,#17365f)] sm:min-h-[280px] lg:min-h-0">
            <div className="absolute inset-8 border border-gold/30 sm:inset-12" />
            <div className="absolute bottom-10 left-10 font-mono text-[10px] uppercase tracking-[0.24em] text-white/45 sm:bottom-14 sm:left-14">
              Areas of work
            </div>
          </div>
          <div className="absolute inset-0 -z-10 bg-navy/35 lg:hidden" />
          <div className="absolute inset-y-0 left-0 -z-10 hidden w-[48%] bg-gradient-to-r from-navy/20 to-navy lg:block" />

          <div className="relative z-10 flex min-w-0 items-end bg-gradient-to-t from-navy via-navy/70 to-navy/10 p-6 pt-40 text-white sm:p-8 sm:pt-48 md:p-12 md:pt-56 lg:col-start-2 lg:bg-navy lg:p-16">
            <div className="max-w-xl">
              <span className="mb-8 block h-px w-16 bg-gold" />
              <blockquote className="break-words font-headline text-[30px] font-light leading-[1.16] tracking-[-0.02em] md:text-[42px]">
                Information about the practice and its areas of work is provided
                for general reference.
              </blockquote>
              <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">
                Professional information
              </p>
              <p className="mt-6 max-w-md border-l border-gold/60 pl-4 font-body text-[14px] leading-relaxed text-white/65">
                Specific services, scope, documentation, and terms depend on the
                nature of the assignment and are confirmed before work begins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
