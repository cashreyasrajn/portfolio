import { firmStats } from "@/app/components/content/firm";

export function StatsBar() {
  return (
    <section className="bg-navy py-16 text-white md:py-20">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {firmStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center text-center ${
                i > 0 ? "md:border-l md:border-white/10" : ""
              } ${i % 2 === 1 ? "border-l border-white/10 md:border-l" : ""}`}
            >
              <p className="font-headline text-[30px] font-medium tracking-[-0.02em] text-white md:text-[38px]">
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
