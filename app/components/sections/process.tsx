import { process } from "@/app/components/content/firm";

export function ProcessSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-gold-dark">
            How we'll work together
          </p>
          <h2 className="mb-3 font-headline text-[32px] font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-[40px]">
            A simple, <em className="font-light italic">four-step</em> process
          </h2>
          <p className="font-body text-[15px] leading-relaxed text-navy/70">
            Here's exactly what working with us looks like, start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item, i) => (
            <div key={item.step} className="relative">
              {i < process.length - 1 && (
                <div className="absolute -right-3 top-14 hidden h-px w-6 bg-navy/15 lg:block" />
              )}
              <div className="group relative z-10 flex h-full flex-col border border-navy/8 bg-cream p-7 transition-all duration-300 hover:border-navy hover:bg-white">
                <span className="text-outline mb-8 font-headline text-[56px] font-semibold leading-none transition-all duration-300 group-hover:text-navy">
                  {item.step}
                </span>
                <h3 className="mb-2 font-headline text-[20px] font-medium tracking-[-0.01em] text-navy">
                  {item.title}
                </h3>
                <p className="font-body text-[13px] leading-relaxed text-navy/65">
                  {item.description}
                </p>
                <span className="material-symbols-outlined mt-auto block pt-6 text-[20px] text-navy/30 transition-colors group-hover:text-navy">
                  {item.icon}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
