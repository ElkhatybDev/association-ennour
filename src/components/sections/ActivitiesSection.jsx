import { ArrowIcon } from "../icons/AppIcons";

export default function ActivitiesSection({ t, isDark, activities, isLoggedIn, showManager, lang, supabase, setActivitiesDataState, handleAddActivity, handleImageUpload }) {
  return (
            <section id="activites" className={isDark ? "scroll-mt-28 bg-slate-900 py-12 sm:py-20" : "scroll-mt-28 bg-slate-50 py-12 sm:py-20"}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">{t.activitiesLabel}</p>
            <h3 className={isDark ? "mt-3 text-3xl font-extrabold text-white md:text-4xl" : "mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl"}>
              {t.activitiesTitle}
            </h3>
            <p className={isDark ? "mt-4 text-lg text-slate-300" : "mt-4 text-lg text-slate-600"}>
              {t.activitiesText}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className={isDark ? "overflow-hidden rounded-[28px] bg-slate-950 shadow-lg shadow-black/30 ring-1 ring-white/10 transition hover:-translate-y-2" : "overflow-hidden rounded-[28px] bg-white shadow-lg shadow-slate-200 transition hover:-translate-y-2"}
              >
                <img src={activity.image} alt={activity.title} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <h4 className={isDark ? "text-lg font-bold text-white sm:text-xl" : "text-lg font-bold text-slate-900 sm:text-xl"}>{activity.title}</h4>
                  <p className={isDark ? "mt-3 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7" : "mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7"}>{activity.text}</p>
                  <a href="#don" className="mt-5 inline-flex items-center gap-2 font-semibold text-green-700 hover:text-orange-500">
                    {t.supportAction} <ArrowIcon className="h-4 w-4" />
                  </a>

                  {isLoggedIn && showManager && (
                    <button
                      onClick={async () => {
                        if (!activity.id) {
                          // For default activities without Supabase ID, just remove from state
                          setActivitiesDataState((prev) => ({
                            ...prev,
                            [lang]: prev[lang].filter((a) => a !== activity),
                          }));
                          return;
                        }
                        
                        try {
                          const { error } = await supabase
                            .from("activities")
                            .delete()
                            .eq("id", activity.id);

                          if (error) throw error;

                          setActivitiesDataState((prev) => ({
                            ...prev,
                            [lang]: prev[lang].filter((a) => a.id !== activity.id),
                          }));
                        } catch (err) {
                          console.error("Error deleting activity:", err);
                        }
                      }}
                      className="mt-2 ml-2 rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
                    >
                      {t.deleteAction}
                    </button>
                  )}

                </div>
              </div>
            ))}
          </div>

          {isLoggedIn && showManager && (
            <div className="mt-8 mx-auto max-w-md">
              <h4 className={isDark ? "text-lg font-bold text-white" : "text-lg font-bold text-slate-900"}>{t.manageSectionTitle}</h4>
              <form onSubmit={handleAddActivity} className="mt-4 space-y-4">
                <input
                  name="title"
                  placeholder={t.titlePlaceholder || "Title"}
                  required
                  className={isDark ? "w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white" : "w-full rounded-xl border border-slate-200 bg-white p-3"}
                />
                <textarea
                  name="text"
                  placeholder={t.textPlaceholder || "Text"}
                  required
                  rows="3"
                  className={isDark ? "w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white" : "w-full rounded-xl border border-slate-200 bg-white p-3"}
                ></textarea>
                <div>
                  <label className={isDark ? "block text-sm font-medium text-slate-200" : "block text-sm font-medium text-slate-700"}>
                    {t.uploadImageLabel}
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    required
                    className={isDark ? "mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white" : "mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900"}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-green-500 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
                >
                  {t.addActivityButton}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
  );
}
