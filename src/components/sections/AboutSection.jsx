import { CoinsIcon, UsersIcon } from "../icons/AppIcons";

export default function AboutSection({ t, isDark }) {
  return (
            <section id="apropos" className="scroll-mt-28 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-[28px] shadow-xl">
            <img
              src="/propos.jpg"
              alt="Bénévolat et entraide"
              className="h-64 w-full object-cover sm:h-[420px]"
            />
          </div>

          <div>
            <p className={isDark ? "text-sm font-bold uppercase tracking-[0.2em] text-orange-300" : "text-sm font-bold uppercase tracking-[0.2em] text-orange-500"}>{t.aboutLabel}</p>
            <h3 className={isDark ? "mt-3 text-3xl font-extrabold text-white md:text-4xl" : "mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl"}>
              {t.aboutTitle}
            </h3>
            <p className={isDark ? "mt-6 text-lg leading-8 text-slate-300" : "mt-6 text-lg leading-8 text-slate-600"}>
              {t.aboutText1}
            </p>
            <p className={isDark ? "mt-4 text-lg leading-8 text-slate-300" : "mt-4 text-lg leading-8 text-slate-600"}>
              {t.aboutText2}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className={isDark ? "rounded-2xl bg-green-500/10 p-5 ring-1 ring-green-400/10" : "rounded-2xl bg-green-50 p-5"}>
                <UsersIcon className="mb-3 h-8 w-8 text-green-700" />
                <h4 className={isDark ? "font-bold text-white" : "font-bold text-slate-900"}>{t.aboutCard1}</h4>
                <p className={isDark ? "mt-2 text-sm text-slate-300" : "mt-2 text-sm text-slate-600"}>
                  {t.aboutCard1Text}
                </p>
              </div>

              <div className={isDark ? "rounded-2xl bg-orange-500/10 p-5 ring-1 ring-orange-400/10" : "rounded-2xl bg-orange-50 p-5"}>
                <CoinsIcon className="mb-3 h-8 w-8 text-orange-500" />
                <h4 className={isDark ? "font-bold text-white" : "font-bold text-slate-900"}>{t.aboutCard2}</h4>
                <p className={isDark ? "mt-2 text-sm text-slate-300" : "mt-2 text-sm text-slate-600"}>
                  {t.aboutCard2Text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
