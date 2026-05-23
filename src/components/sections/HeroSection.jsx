import { ArrowIcon, ShieldIcon } from "../icons/AppIcons";

export default function HeroSection({ t, isDark, statCardClass }) {
  return (
            <section
        id="accueil"
        className={
          isDark
            ? "scroll-mt-28 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
            : "scroll-mt-28 relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-orange-50"
        }
      >
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 md:gap-10 md:py-24">
          <div>
            <span
              className={
                isDark
                  ? "inline-flex items-center rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-300 ring-1 ring-orange-400/20"
                  : "inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700"
              }
            >
              {t.badge}
            </span>

            <h2 className={isDark ? "mt-5 text-2xl font-extrabold leading-tight text-white sm:mt-6 sm:text-4xl md:text-6xl" : "mt-5 text-2xl font-extrabold leading-tight text-slate-900 sm:mt-6 sm:text-4xl md:text-6xl"}>
              {t.heroTitle1} <span className="text-green-700">{t.heroHope}</span>,
              <span className="text-orange-500"> {t.heroHelp}</span> {t.heroTitle2}
            </h2>

            <p className={isDark ? "mt-5 max-w-xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8" : "mt-5 max-w-xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8"}>
              {t.heroText}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#don"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-green-700 px-6 py-3.5 font-semibold text-white shadow-lg shadow-green-200 transition hover:-translate-y-1 hover:bg-green-800 sm:w-auto sm:py-4"
              >
                {t.heroDonate} <ArrowIcon className="h-4 w-4" />
              </a>

              <a
                href="#apropos"
                className={
                  isDark
                    ? "inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-slate-100 transition hover:border-green-500 hover:text-green-300 sm:w-auto sm:py-4"
                    : "inline-flex w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-green-600 hover:text-green-700 sm:w-auto sm:py-4"
                }
              >
                {t.heroDiscover}
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 sm:grid-cols-3">
              <div className={statCardClass}>
                <p className="text-2xl font-bold text-green-700">500+</p>
                <p className={isDark ? "mt-1 text-sm text-slate-400" : "mt-1 text-sm text-slate-500"}>{t.stat1}</p>
              </div>
              <div className={isDark ? "rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm" : "rounded-2xl border border-orange-100 bg-white p-5 shadow-sm"}>
                <p className="text-2xl font-bold text-orange-500">120+</p>
                <p className={isDark ? "mt-1 text-sm text-slate-400" : "mt-1 text-sm text-slate-500"}>{t.stat2}</p>
              </div>
              <div className={statCardClass}>
                <p className={isDark ? "text-2xl font-bold text-white" : "text-2xl font-bold text-slate-800"}>100%</p>
                <p className={isDark ? "mt-1 text-sm text-slate-400" : "mt-1 text-sm text-slate-500"}>{t.stat3}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-orange-200/50 blur-3xl" />
            <div className="absolute -right-6 bottom-10 h-40 w-40 rounded-full bg-green-200/50 blur-3xl" />
            <div className={isDark ? "relative overflow-hidden rounded-[24px] bg-white/5 p-2.5 shadow-2xl shadow-black/30 ring-1 ring-white/10 sm:rounded-[32px] sm:p-3" : "relative overflow-hidden rounded-[24px] bg-white p-2.5 shadow-2xl shadow-slate-200 sm:rounded-[32px] sm:p-3"}>
              <img
                src="/propos.jpg"
                alt="Action caritative"
                className="h-64 w-full rounded-[18px] object-cover sm:h-[420px] sm:rounded-[24px] md:h-[520px]"
              />
              <div className={isDark ? "absolute bottom-3 left-3 right-3 rounded-2xl bg-slate-950/75 p-3.5 backdrop-blur ring-1 ring-white/10 sm:bottom-8 sm:left-8 sm:right-8 sm:rounded-3xl sm:p-5" : "absolute bottom-3 left-3 right-3 rounded-2xl bg-white/90 p-3.5 backdrop-blur sm:bottom-8 sm:left-8 sm:right-8 sm:rounded-3xl sm:p-5"}>
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-green-100 p-3 text-green-700">
                    <ShieldIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className={isDark ? "font-bold text-white" : "font-bold text-slate-900"}>{t.trustTitle}</p>
                    <p className={isDark ? "text-sm text-slate-300" : "text-sm text-slate-600"}>
                      {t.trustText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
