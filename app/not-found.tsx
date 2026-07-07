import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <div className="mx-auto max-w-md px-6 text-center">
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-navy/[0.05] ring-1 ring-navy/10">
          <span className="material-symbols-outlined text-[48px] text-navy/35">
            search_off
          </span>
        </div>
        <p className="mb-1 font-body text-[11px] font-bold uppercase tracking-[0.2em] text-gold-dark">
          Error 404
        </p>
        <h1 className="mb-3 font-headline text-[36px] font-semibold tracking-tight text-navy">
          Page not found
        </h1>
        <p className="mb-10 font-body text-[15px] leading-relaxed text-navy/70">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-body text-[14px] font-semibold text-white transition-all hover:bg-navy-light active:scale-[0.97]"
          >
            <span className="material-symbols-outlined text-[18px]">home</span>
            Go Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-6 py-3 font-body text-[14px] font-semibold text-navy transition-all hover:border-gold hover:text-gold active:scale-[0.97]"
          >
            <span className="material-symbols-outlined text-[18px]">design_services</span>
            Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}
