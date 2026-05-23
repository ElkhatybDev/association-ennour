import { ChatIcon } from "../icons/AppIcons";

export default function AssistantWidget({ t, isDark, lang, isAssistantOpen, setIsAssistantOpen, assistantScrollRef, assistantMessages, isAssistantTyping, quickQuestions, askAssistant, assistantInput, setAssistantInput }) {
  return (
      <>
      {isAssistantOpen ? (
        <div
          className={
            isDark
              ? "fixed inset-x-3 bottom-20 top-24 z-[1000] flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl sm:inset-x-auto sm:bottom-24 sm:right-5 sm:top-auto sm:h-[620px] sm:w-[430px]"
              : "fixed inset-x-3 bottom-20 top-24 z-[1000] flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:inset-x-auto sm:bottom-24 sm:right-5 sm:top-auto sm:h-[620px] sm:w-[430px]"
          }
        >
          <div className={isDark ? "flex items-center justify-between border-b border-white/10 px-4 py-3" : "flex items-center justify-between border-b border-slate-200 px-4 py-3"}>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-lg bg-white shadow-sm">
                <img src="/logo.jpg" alt="Logo Association Ennour" className="h-full w-full object-contain" />
              </span>
              <p className={isDark ? "text-sm font-semibold text-white" : "text-sm font-semibold text-slate-900"}>{t.assistantTitle}</p>
            </div>
            <button
              type="button"
              onClick={() => setIsAssistantOpen(false)}
              aria-label={lang === "ar" ? "إغلاق نافذة المساعد" : "Fermer la fenêtre de l'assistant"}
              title={lang === "ar" ? "إغلاق" : "Fermer"}
              className={
                isDark
                  ? "inline-flex h-11 min-w-[102px] touch-manipulation items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/60 sm:h-10 sm:min-w-0 sm:w-10 sm:px-0"
                  : "inline-flex h-11 min-w-[102px] touch-manipulation items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600/40 sm:h-10 sm:min-w-0 sm:w-10 sm:px-0"
              }
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4 shrink-0" aria-hidden="true">
                <path strokeLinecap="round" d="M6 6L18 18M18 6L6 18" />
              </svg>
              <span className="sm:hidden">{lang === "ar" ? "إغلاق" : "Fermer"}</span>
            </button>
          </div>

          <div ref={assistantScrollRef} className="flex-1 space-y-2 overflow-y-auto px-4 py-3">
            {assistantMessages.map((msg, index) => (
              msg.role === "user" ? (
                <div
                  key={`${msg.role}-${index}`}
                  className="ml-auto w-fit max-w-[88%] rounded-2xl bg-green-700 px-3 py-2 text-sm text-white"
                >
                  {msg.text}
                </div>
              ) : (
                <div key={`${msg.role}-${index}`} className="max-w-[92%]">
                  <div className="mb-1 flex items-center gap-2 px-1">
                    <span className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm">
                      <img src="/logo.jpg" alt="Logo Association Ennour" className="h-full w-full object-contain" />
                    </span>
                    <span className={isDark ? "text-[11px] font-semibold text-slate-300" : "text-[11px] font-semibold text-slate-500"}>
                      {t.assistantTitle}
                    </span>
                  </div>
                  <div
                    className={
                      isDark
                        ? "w-fit max-w-[88%] rounded-2xl bg-white/10 px-3 py-2 text-sm text-slate-100"
                        : "w-fit max-w-[88%] rounded-2xl bg-slate-100 px-3 py-2 text-sm text-slate-800"
                    }
                  >
                    {msg.text}
                  </div>
                </div>
              )
            ))}
            {isAssistantTyping && (
              <div className={isDark ? "w-fit max-w-[88%] rounded-2xl bg-white/10 px-3 py-2 text-xs text-slate-300" : "w-fit max-w-[88%] rounded-2xl bg-slate-100 px-3 py-2 text-xs text-slate-600"}>
                {t.assistantTyping}
              </div>
            )}
          </div>

          <div className="px-4 pb-3">
            <div className="mb-2 flex flex-wrap gap-2">
              {quickQuestions.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => askAssistant(q)}
                  disabled={isAssistantTyping}
                  className={isDark ? "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 transition hover:bg-white/10 disabled:opacity-60" : "rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700 transition hover:bg-slate-100 disabled:opacity-60"}
                >
                  {q}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                askAssistant(assistantInput);
              }}
              className="flex items-center gap-2"
            >
              <input
                value={assistantInput}
                onChange={(e) => setAssistantInput(e.target.value)}
                placeholder={t.assistantPlaceholder}
                maxLength={300}
                disabled={isAssistantTyping}
                className={isDark ? "w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-green-500" : "w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 outline-none focus:border-green-600"}
              />
              <button
                type="submit"
                disabled={isAssistantTyping || !assistantInput.trim()}
                className="rounded-xl bg-green-700 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {t.assistantSend}
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsAssistantOpen(true)}
          aria-label={t.assistantOpen}
          title={t.assistantOpen}
          className={
            isDark
              ? "fixed bottom-20 right-4 z-[1000] inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-white shadow-2xl transition hover:scale-105 hover:bg-slate-800 sm:bottom-24 sm:right-5"
              : "fixed bottom-20 right-4 z-[1000] inline-flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-2xl transition hover:scale-105 hover:bg-slate-50 sm:bottom-24 sm:right-5"
          }
        >
          <span className="relative">
            <ChatIcon className={isDark ? "h-5 w-5 text-green-300" : "h-5 w-5 text-green-700"} />
            <span className={isDark ? "absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-slate-900" : "absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white"} />
          </span>
        </button>
      )}
      </>
  );
}
