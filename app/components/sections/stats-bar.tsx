import { firmStats } from "@/app/components/content/firm";

export function StatsBar() {
  return (
    <section className="bg-navy py-16 text-white md:py-20">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-3">
          {firmStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center text-center ${
                i > 0 ? "sm:border-l sm:border-white/10" : ""
              }`}
            >
              <p className="font-headline text-[32px] font-medium tracking-[-0.02em] text-white md:text-[40px]">
                {stat.value}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
