

export default function LoginSection({ showLogin, isLoggedIn, isDark, t, handleLoginSubmit, loginEmail, setLoginEmail, loginPassword, setLoginPassword, loginError }) {
  return (
      <>
      {showLogin && !isLoggedIn && (
        <section className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
          <div className={isDark ? "rounded-[28px] border border-white/10 bg-slate-950/90 p-6 shadow-2xl shadow-black/20" : "rounded-[28px] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200"}>
            <h2 className={isDark ? "text-2xl font-bold text-white" : "text-2xl font-bold text-slate-900"}>{t.loginTitle}</h2>
            <p className={isDark ? "mt-2 text-sm text-slate-300" : "mt-2 text-sm text-slate-600"}>{t.loginDescription}</p>
            <form onSubmit={handleLoginSubmit} className="mt-6 space-y-4">
              <div>
                <label className={isDark ? "block text-sm font-medium text-slate-200" : "block text-sm font-medium text-slate-700"}>
                  {t.loginEmailLabel}
                </label>
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                  className={isDark ? "mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white" : "mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900"}
                />
              </div>
              <div>
                <label className={isDark ? "block text-sm font-medium text-slate-200" : "block text-sm font-medium text-slate-700"}>
                  {t.loginPasswordLabel}
                </label>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                  className={isDark ? "mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white" : "mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900"}
                />
              </div>
              {loginError && <p className="text-sm text-red-500">{loginError}</p>}
              <button type="submit" className="inline-flex w-full justify-center rounded-2xl bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800">
                {t.loginSubmit}
              </button>
            </form>
          </div>
        </section>
      )}
      </>
  );
}
