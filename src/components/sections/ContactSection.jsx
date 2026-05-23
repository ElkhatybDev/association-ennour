import { CopyIcon, MailIcon, MapPinIcon, PhoneIcon } from "../icons/AppIcons";

export default function ContactSection({ t, isDark, contactEmail, contactPhone1, contactPhone2, copyToClipboard, form, handleChange, handleSubmit }) {
  return (
            <section id="contact" className="scroll-mt-28 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">{t.contactLabel}</p>
            <h3 className={isDark ? "mt-3 text-2xl font-extrabold text-white sm:text-3xl md:text-4xl" : "mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl md:text-4xl"}>{t.contactTitle}</h3>
            <p className={isDark ? "mt-4 text-base leading-7 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8" : "mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8"}>{t.contactText}</p>

            <div className="mt-8 space-y-5">
              <div className={isDark ? "flex flex-col items-start gap-3 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 sm:flex-row sm:items-center sm:gap-4" : "flex flex-col items-start gap-3 rounded-2xl bg-slate-50 p-5 sm:flex-row sm:items-center sm:gap-4"}>
                <div className="flex min-w-0 flex-1 items-center gap-4">
                  <MailIcon className="h-6 w-6 shrink-0 text-orange-500" />
                  <a
                    href={`mailto:${contactEmail}`}
                    dir="ltr"
                    className={isDark ? "break-all text-left text-sm text-slate-200 transition hover:text-white sm:text-base" : "break-all text-left text-sm text-slate-700 transition hover:text-slate-900 sm:text-base"}
                  >
                    {contactEmail}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(contactEmail)}
                  className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-orange-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-orange-600 sm:w-auto"
                >
                  <CopyIcon className="h-4 w-4" /> {t.copy}
                </button>
              </div>
              <div className={isDark ? "flex flex-col items-start gap-3 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 sm:flex-row sm:items-center sm:gap-4" : "flex flex-col items-start gap-3 rounded-2xl bg-slate-50 p-5 sm:flex-row sm:items-center sm:gap-4"}>
                <div className="flex min-w-0 flex-1 items-center gap-4">
                  <PhoneIcon className="h-6 w-6 shrink-0 text-green-700" />
                  <a
                    href={`tel:${contactPhone1.replace(/\s/g, "")}`}
                    dir="ltr"
                    className={isDark ? "text-left text-slate-200 transition hover:text-white" : "text-left text-slate-700 transition hover:text-slate-900"}
                  >
                    {contactPhone1}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(contactPhone1)}
                  className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-orange-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-orange-600 sm:w-auto"
                >
                  <CopyIcon className="h-4 w-4" /> {t.copy}
                </button>
              </div>
              <div className={isDark ? "flex flex-col items-start gap-3 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 sm:flex-row sm:items-center sm:gap-4" : "flex flex-col items-start gap-3 rounded-2xl bg-slate-50 p-5 sm:flex-row sm:items-center sm:gap-4"}>
                <div className="flex min-w-0 flex-1 items-center gap-4">
                  <PhoneIcon className="h-6 w-6 shrink-0 text-green-700" />
                  <a
                    href={`tel:${contactPhone2.replace(/\s/g, "")}`}
                    dir="ltr"
                    className={isDark ? "text-left text-slate-200 transition hover:text-white" : "text-left text-slate-700 transition hover:text-slate-900"}
                  >
                    {contactPhone2}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(contactPhone2)}
                  className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-orange-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-orange-600 sm:w-auto"
                >
                  <CopyIcon className="h-4 w-4" /> {t.copy}
                </button>
              </div>
              <div className={isDark ? "flex flex-col items-start gap-3 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 sm:flex-row sm:items-center sm:gap-4" : "flex flex-col items-start gap-3 rounded-2xl bg-slate-50 p-5 sm:flex-row sm:items-center sm:gap-4"}>
                <div className="flex min-w-0 flex-1 items-center gap-4">
                  <MapPinIcon className="h-6 w-6 shrink-0 text-orange-500" />
                  <span className={isDark ? "break-words text-sm text-slate-200 sm:text-base" : "break-words text-sm text-slate-700 sm:text-base"}>{t.mapLocation}</span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(t.mapLocation)}
                  className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-orange-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-orange-600 sm:w-auto"
                >
                  <CopyIcon className="h-4 w-4" /> {t.copy}
                </button>
              </div>
            </div>
          </div>

          <div className={isDark ? "rounded-[30px] border border-white/10 bg-slate-950 p-5 shadow-xl shadow-black/30 sm:p-8" : "rounded-[30px] border border-slate-100 bg-white p-5 shadow-xl shadow-slate-200 sm:p-8"}>
            <h4 className={isDark ? "text-2xl font-bold text-white" : "text-2xl font-bold text-slate-900"}>{t.formTitle}</h4>
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className={isDark ? "rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-green-500" : "rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-green-600"}
                placeholder={t.fullName}
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={isDark ? "rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-green-500" : "rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-green-600"}
                placeholder={t.email}
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className={isDark ? "min-h-[150px] rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-green-500" : "min-h-[150px] rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-green-600"}
                placeholder={t.message}
              />
              <button
                type="submit"
                className="rounded-2xl bg-green-700 px-6 py-4 font-bold text-white transition hover:bg-green-800"
              >
                {t.send}
              </button>
            </form>
          </div>
        </div>
      </section>
  );
}
