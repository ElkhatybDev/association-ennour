import { ThemeToggleIcon } from "../icons/AppIcons";

export default function Header({ t, isDark, setIsDark, lang, setLang, isLoggedIn, showLogin, setShowLogin, showManager, setShowManager, logout, isMobileMenuOpen, setIsMobileMenuOpen, headerClass, navClass }) {
  return (
            <header className={headerClass}>
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:gap-3 sm:px-6 sm:py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm sm:h-12 sm:w-12">
              <img src="/logo.jpg" alt="Logo" className="h-full w-full object-contain" />
            </div>

            <div className="min-w-0">
              <h1
                className={
                  isDark
                    ? "truncate text-xs font-bold text-green-400 sm:text-lg"
                    : "truncate text-xs font-bold text-green-700 sm:text-lg"
                }
              >
                {t.brandTitle}
              </h1>

              <p
                className={
                  isDark
                    ? "mt-0.5 text-[10px] text-orange-300 sm:text-sm"
                    : "mt-0.5 text-[10px] text-orange-600 sm:text-sm"
                }
              >
                {t.brandSubtitle}
              </p>
            </div>
          </div>

          <nav className={navClass}>
            <a href="#accueil" className="whitespace-nowrap transition hover:text-green-500">{t.nav[0]}</a>
            <a href="#apropos" className="whitespace-nowrap transition hover:text-green-500">{t.nav[1]}</a>
            <a href="#activites" className="whitespace-nowrap transition hover:text-green-500">{t.nav[2]}</a>
            <a href="#galerie" className="whitespace-nowrap transition hover:text-green-500">{t.nav[3]}</a>
            <a href="#don" className="whitespace-nowrap transition hover:text-green-500">{t.nav[4]}</a>
            <a href="#contact" className="whitespace-nowrap transition hover:text-green-500">{t.nav[5]}</a>
          </nav>

            <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3 md:flex-nowrap md:shrink-0">
            <button
              type="button"
              onClick={() => setLang((prev) => (prev === "fr" ? "ar" : "fr"))}
              className={
                isDark
                  ? "rounded-xl border border-white/10 bg-white/5 px-2.5 py-2 text-xs font-semibold text-slate-100 transition hover:bg-white/10 sm:px-4 sm:py-3 sm:text-sm"
                  : "rounded-xl border border-slate-200 bg-white px-2.5 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 sm:px-4 sm:py-3 sm:text-sm"
              }
            >
              {lang === "fr" ? "AR" : "FR"}
            </button>

            <button
              type="button"
              onClick={() => setIsDark((v) => !v)}
              aria-label="Toggle dark mode"
              className={
                isDark
                  ? "flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-yellow-300 transition hover:bg-white/10 sm:h-12 sm:w-12"
                  : "flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 sm:h-12 sm:w-12"
              }
            >
              <ThemeToggleIcon isDark={isDark} />
            </button>

            <a
              href="#don"
              className="inline-flex whitespace-nowrap rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-600 sm:px-5 sm:py-3"
            >
              {t.donateBtn}
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((value) => !value)}
              aria-label={lang === "fr" ? (isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu") : "Menu"}
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-700 transition hover:bg-slate-50 md:hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>

            {!isLoggedIn ? (
              <button
                type="button"
                onClick={() => setShowLogin((value) => !value)}
                className="hidden md:inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-lg transition hover:bg-slate-50 sm:px-5 sm:py-3"
              >
                {showLogin ? t.loginClose : t.loginButton}
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => setShowManager((value) => !value)}
                  className="hidden md:inline-flex whitespace-nowrap rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-lg transition hover:bg-slate-50 sm:px-5 sm:py-3"
                >
                  {showManager ? t.manageHideLabel : t.manageLabel}
                </button>
                <button
                  type="button"
                  onClick={logout}
                  className="hidden md:inline-flex whitespace-nowrap rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-lg transition hover:bg-slate-50 sm:px-5 sm:py-3"
                >
                  {t.logoutLabel}
                </button>
              </>
            )}
          </div>
        </div>

        <div className={`mx-auto mt-2 overflow-hidden px-4 pb-3 md:hidden sm:px-6 ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className={isDark ? "rounded-3xl border border-white/10 bg-slate-950/90 p-4 shadow-2xl shadow-black/20" : "rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200"}>
            <div className="grid gap-3">
              <a href="#accueil" onClick={() => setIsMobileMenuOpen(false)} className="block rounded-2xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-100">{t.nav[0]}</a>
              <a href="#apropos" onClick={() => setIsMobileMenuOpen(false)} className="block rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200">{t.nav[1]}</a>
              <a href="#activites" onClick={() => setIsMobileMenuOpen(false)} className="block rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200">{t.nav[2]}</a>
              <a href="#galerie" onClick={() => setIsMobileMenuOpen(false)} className="block rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200">{t.nav[3]}</a>
              <a href="#don" onClick={() => setIsMobileMenuOpen(false)} className="block rounded-2xl bg-orange-100 px-4 py-3 text-sm font-semibold text-orange-700 transition hover:bg-orange-200">{t.donateBtn}</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200">{t.nav[5]}</a>
              {!isLoggedIn ? (
                <button
                  type="button"
                  onClick={() => {
                    setShowLogin(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-lg transition hover:bg-slate-50"
                >
                  {showLogin ? t.loginClose : t.loginButton}
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      setShowManager((value) => !value);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-lg transition hover:bg-slate-50"
                  >
                    {showManager ? t.manageHideLabel : t.manageLabel}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-lg transition hover:bg-slate-50"
                  >
                    {t.logoutLabel}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
  );
}
