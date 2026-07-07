import { values } from "@/app/components/content/firm";

export function ValuesSection() {
  return (
    <section className="border-y border-primary/8 bg-surface-container-low py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="mb-14 text-center">
          <p className="mb-3 font-body text-[11px] font-bold uppercase tracking-[0.2em] text-secondary/80">
            What You Can Expect
          </p>
          <h2 className="mb-3 font-headline text-[30px] font-semibold tracking-tight text-primary md:text-[38px]">
            Four things we don't compromise on
          </h2>
          <p className="mx-auto max-w-lg font-body text-[15px] leading-relaxed text-on-surface-variant/60">
            The fundamentals of working with us. You'll notice them from day
            one.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <div
              key={value.title}
              className="group rounded-lg border border-primary/10 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/[0.04]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/[0.05] text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <span className="material-symbols-outlined text-[28px]">
                  {value.icon}
                </span>
              </div>
              <h3 className="mb-2 font-headline text-[17px] font-semibold tracking-tight text-primary">
                {value.title}
              </h3>
              <p className="font-body text-[13px] leading-relaxed text-on-surface-variant/60">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}