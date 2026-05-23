import { BankIcon, CopyIcon } from "../icons/AppIcons";

export default function DonationSection({ t, isDark, copyToClipboard }) {
  return (
            <section id="don" className="scroll-mt-28 bg-gradient-to-r from-green-700 to-green-800 py-12 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-200">{t.donLabel}</p>
            <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl md:text-5xl">{t.donTitle}</h3>
            <p className="mt-5 max-w-2xl text-base leading-7 text-green-50 sm:mt-6 sm:text-lg sm:leading-8">{t.donText}</p>
          </div>

          <div className={isDark ? "rounded-[30px] bg-slate-950 p-5 text-slate-100 shadow-2xl shadow-black/30 ring-1 ring-white/10 sm:p-8" : "rounded-[30px] bg-white p-5 text-slate-800 shadow-2xl sm:p-8"}>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-green-100 p-3 text-green-700">
                <BankIcon className="h-6 w-6" />
              </div>
              <div>
                <h4 className={isDark ? "text-2xl font-bold text-white" : "text-2xl font-bold text-slate-900"}>{t.bankTitle}</h4>
                <p className={isDark ? "mt-1 text-slate-300" : "mt-1 text-slate-600"}>{t.bankText}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className={isDark ? "rounded-2xl border border-white/10 bg-white/5 p-4" : "rounded-2xl border border-slate-200 bg-slate-50 p-4"}>
                <p className={isDark ? "text-sm font-semibold text-slate-400" : "text-sm font-semibold text-slate-500"}>{t.rib}</p>
                <div className="mt-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className={isDark ? "w-full break-all font-bold text-white" : "w-full break-all font-bold text-slate-900"}>230610566047522100160028</p>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("230610566047522100160028")}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 sm:w-auto"
                  >
                    <CopyIcon className="h-4 w-4" /> {t.copy}
                  </button>
                </div>
              </div>

              <div className={isDark ? "rounded-2xl border border-white/10 bg-white/5 p-4" : "rounded-2xl border border-slate-200 bg-slate-50 p-4"}>
                <p className={isDark ? "text-sm font-semibold text-slate-400" : "text-sm font-semibold text-slate-500"}>{t.bank}</p>
                <div className="mt-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className={isDark ? "w-full break-words font-bold text-white" : "w-full break-words font-bold text-slate-900"}>Cih Bank</p>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("Cih Bank")}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 sm:w-auto"
                  >
                    <CopyIcon className="h-4 w-4" /> {t.copy}
                  </button>
                </div>
              </div>

              <div className={isDark ? "rounded-2xl border border-white/10 bg-white/5 p-4" : "rounded-2xl border border-slate-200 bg-slate-50 p-4"}>
                <p className={isDark ? "text-sm font-semibold text-slate-400" : "text-sm font-semibold text-slate-500"}>{t.accountOwner}</p>
                <div className="mt-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className={isDark ? "w-full break-words font-bold text-white" : "w-full break-words font-bold text-slate-900"}>Association Ennour pour le Développement et la Charité</p>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("Association Ennour pour le Développement et la Charité")}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 sm:w-auto"
                  >
                    <CopyIcon className="h-4 w-4" /> {t.copy}
                  </button>
                </div>
              </div>
            </div>

            <p className={isDark ? "mt-5 text-sm text-slate-400" : "mt-5 text-sm text-slate-500"}>{t.bankNote}</p>
          </div>
        </div>
      </section>
  );
}
