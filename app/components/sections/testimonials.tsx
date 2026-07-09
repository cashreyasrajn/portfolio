import { testimonials } from "@/app/components/content/firm";

export function TestimonialsSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="mb-14 text-center">
          <p className="mb-3 font-body text-[11px] font-bold uppercase tracking-[0.2em] text-secondary/80">
            Client Voices
          </p>
          <h2 className="mb-3 font-headline text-[30px] font-semibold tracking-tight text-primary md:text-[38px]">
            What clients say about us
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col rounded-lg border border-primary/10 bg-surface-container-low p-8"
            >
              <div className="mb-4 flex gap-1 text-secondary">
                {[0, 1, 2, 3, 4].map((s) => (
                  <span
                    key={s}
                    className="material-symbols-outlined text-[18px]"
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="mb-6 flex-grow font-headline text-[16px] font-medium italic leading-relaxed text-on-surface-variant/80">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-primary/8 pt-4">
                <div className="flex h-10 w-10 items-center justify-center  bg-primary text-white">
                  <span className="material-symbols-outlined text-[20px]">
                    account_circle
                  </span>
                </div>
                <div>
                  <p className="font-body text-[14px] font-semibold text-primary">
                    {t.author}
                  </p>
                  <p className="font-body text-[12px] text-on-surface-variant/50">
                    {t.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}