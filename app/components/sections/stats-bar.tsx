import { firmStats } from "@/app/components/content/firm";

export function StatsBar() {
  return (
    <section className="bg-primary py-16 text-white">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {firmStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center text-center"
            >
              <p className="font-headline text-[36px] font-bold tracking-tight text-white md:text-[44px]">
                {stat.value}
              </p>
              <p className="mt-1 font-body text-[11px] font-semibold uppercase tracking-[0.125em] text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}