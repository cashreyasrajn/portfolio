import Image from "next/image";

const frames = [
  {
    src: "/images/bengaluru-vidhana-soudha.jpg",
    alt: "Vidhana Soudha, the seat of the Karnataka legislature, Bengaluru",
    index: "01",
    title: "Vidhana Soudha",
    caption: "Dr. Ambedkar Veedhi",
    className: "md:col-span-5 md:row-span-2",
    ratio: "aspect-[4/3] md:aspect-auto md:h-full",
  },
  {
    src: "/images/bengaluru-kr-market.jpg",
    alt: "A flower seller heading home from KR Market, Bengaluru",
    index: "02",
    title: "KR Market",
    caption: "City Market, old Bengaluru",
    className: "md:col-span-4",
    ratio: "aspect-[4/3]",
  },
  {
    src: "/images/bengaluru-ub-city.jpg",
    alt: "The UB City towers rising over central Bengaluru",
    index: "03",
    title: "UB City",
    caption: "Vittal Mallya Road",
    className: "md:col-span-3",
    ratio: "aspect-[4/3]",
  },
];

export function CityStrip() {
  return (
    <section className="border-y border-navy/8 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-gold-dark">
              The city we practice in
            </p>
            <h2 className="font-headline text-[32px] font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-[40px]">
              Rooted in <em className="font-light italic">Bengaluru</em>,
              <br />
              serving clients everywhere
            </h2>
          </div>
          <p className="max-w-sm font-body text-[14px] leading-relaxed text-navy/60">
            From the legislature at Vidhana Soudha to the trading floors of old
            City Market ,  this is the city that taught us how business really
            works.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {frames.map((f) => (
            <figure key={f.title} className={`group ${f.className}`}>
              <div
                className={`relative overflow-hidden border border-navy/10 bg-navy/[0.03] ${f.ratio}`}
              >
                <Image
                  src={f.src}
                  alt={f.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between border-t border-navy/10 pt-3">
                <span className="font-body text-[13px] font-semibold text-navy">
                  {f.title}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-navy/45">
                  {f.index} ,  {f.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
