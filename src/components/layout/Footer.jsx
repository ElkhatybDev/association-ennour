import { FacebookIcon, MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "../icons/AppIcons";

export default function Footer({ t }) {
  return (
            <footer className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 via-transparent to-orange-900/20" />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="grid gap-8 border-b border-white/10 pb-8 sm:pb-10 md:grid-cols-4">
            <div className="text-center md:col-span-2 md:text-left">
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <div>
                  <h3 className="text-2xl font-bold text-white">{t.brandTitle}</h3>
                  <p className="text-sm text-slate-400">{t.brandSubtitle}</p>
                </div>
              </div>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300 md:mx-0">{t.footerText}</p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="#don" className="inline-flex w-full items-center justify-center rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 sm:w-auto">
                  {t.donateBtn}
                </a>
                <a href="#contact" className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-green-400 hover:text-green-300 sm:w-auto">
                  {t.footerContactBtn}
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center md:rounded-none md:border-0 md:bg-transparent md:p-0 md:text-left">
              <h4 className="text-lg font-semibold text-orange-400">{t.footerNav}</h4>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li><a href="#accueil" className="transition hover:text-green-400">{t.nav[0]}</a></li>
                <li><a href="#apropos" className="transition hover:text-green-400">{t.nav[1]}</a></li>
                <li><a href="#activites" className="transition hover:text-green-400">{t.nav[2]}</a></li>
                <li><a href="#galerie" className="transition hover:text-green-400">{t.nav[3]}</a></li>
                <li><a href="#don" className="transition hover:text-green-400">{t.nav[4]}</a></li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center md:rounded-none md:border-0 md:bg-transparent md:p-0 md:text-left">
              <h4 className="text-lg font-semibold text-orange-400">{t.footerContact}</h4>
              <div className="mt-5 space-y-3 text-sm text-slate-300">
                <a
                  href={`mailto:${t.footerEmail}`}
                  className="flex items-center justify-center gap-2 transition hover:text-white md:justify-start"
                >
                  <MailIcon className="h-4 w-4 shrink-0 text-orange-400" />
                  <span dir="ltr" className="break-all">{t.footerEmail}</span>
                </a>
                <a
                  href={`tel:${t.footerPhone1.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 transition hover:text-white md:justify-start"
                >
                  <PhoneIcon className="h-4 w-4 shrink-0 text-green-400" />
                  <span dir="ltr">{t.footerPhone1}</span>
                </a>
                <a
                  href={`tel:${t.footerPhone2.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 transition hover:text-white md:justify-start"
                >
                  <PhoneIcon className="h-4 w-4 shrink-0 text-green-400" />
                  <span dir="ltr">{t.footerPhone2}</span>
                </a>
                <p className="flex items-center justify-center gap-2 md:justify-start">
                  <MapPinIcon className="h-4 w-4 shrink-0 text-orange-400" />
                  <span>{t.footerCity}</span>
                </p>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                <a
                  href="https://www.facebook.com/Associationennour9/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm text-white transition hover:-translate-y-1 hover:bg-blue-600"
                >
                  <FacebookIcon className="h-5 w-5 text-white" />
                  <span>{t.socialFacebook}</span>
                </a>

                <a
                  href="https://wa.me/212"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm text-white transition hover:-translate-y-1 hover:bg-green-500"
                >
                  <WhatsAppIcon className="h-5 w-5 text-white" />
                  <span>{t.socialWhatsApp}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 pt-6 text-center text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:text-left">
            <p>{t.footerRights}</p>
            <p>{t.footerMotto}</p>
          </div>
          <p className="mt-4 border-t border-white/10 pt-4 text-center text-[11px] sm:text-xs">
            <span className="text-slate-500">{t.footerCreditLabel}</span>
            <span className="mx-1 text-slate-600">•</span>
            <span className="font-semibold tracking-wide text-orange-300">{t.footerCreditName}</span>
          </p>
        </div>
      </footer>
  );
}
