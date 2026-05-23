import { ImageIconSvg } from "../icons/AppIcons";

export default function GallerySection({ t, isDark, gallery, isLoggedIn, showManager, lang, supabase, setGalleryImagesState, handleAddGalleryImage, handleGalleryImageUpload }) {
  return (
            <section id="galerie" className="scroll-mt-28 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className={isDark ? "text-sm font-bold uppercase tracking-[0.2em] text-orange-300" : "text-sm font-bold uppercase tracking-[0.2em] text-orange-500"}>{t.galleryLabel}</p>
            <h3 className={isDark ? "mt-3 text-3xl font-extrabold text-white md:text-4xl" : "mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl"}>
              {t.galleryTitle}
            </h3>
          </div>
          <p className={isDark ? "max-w-2xl text-lg text-slate-300" : "max-w-2xl text-lg text-slate-600"}>
            {t.galleryText}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => {
            const imageSrc = typeof item === "string" ? item : item.image;
            const imageId = typeof item === "string" ? null : item.id;

            return (
            <div key={imageId || `${imageSrc}-${index}`} className="group relative overflow-hidden rounded-[26px] shadow-lg">
              <img
                src={imageSrc}
                alt={`Galerie ${index + 1}`}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-72"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <ImageIconSvg className="h-5 w-5" />
                <span className="font-medium">{t.galleryCard} {index + 1}</span>
              </div>

              {isLoggedIn && showManager && (
                <button
                  type="button"
                  onClick={async () => {
                    if (!imageId) {
                      setGalleryImagesState((prev) => ({
                        ...prev,
                        [lang]: (prev[lang] || []).filter((_, i) => i !== index),
                      }));
                      return;
                    }

                    if (!supabase) {
                      setGalleryImagesState((prev) => ({
                        ...prev,
                        [lang]: (prev[lang] || []).filter((_, i) => i !== index),
                      }));
                      return;
                    }

                    try {
                      const { error } = await supabase
                        .from("gallery")
                        .delete()
                        .eq("id", imageId);

                      if (error) throw error;

                      setGalleryImagesState((prev) => ({
                        ...prev,
                        [lang]: (prev[lang] || []).filter((img) => {
                          if (typeof img === "string") return true;
                          return img.id !== imageId;
                        }),
                      }));
                    } catch (err) {
                      console.error("Error deleting gallery image:", err);
                    }
                  }}
                  className="absolute right-3 top-3 rounded-lg bg-red-500 px-3 py-1 text-xs font-semibold text-white shadow hover:bg-red-600"
                >
                  {t.deleteImageAction || t.deleteAction}
                </button>
              )}
            </div>
          )})}
        </div>

        {isLoggedIn && showManager && (
          <div className="mt-8 mx-auto max-w-md">
            <h4 className={isDark ? "text-lg font-bold text-white" : "text-lg font-bold text-slate-900"}>
              {t.manageGallerySectionTitle || t.manageSectionTitle}
            </h4>
            <form onSubmit={handleAddGalleryImage} className="mt-4 space-y-4">
              <div>
                <label className={isDark ? "block text-sm font-medium text-slate-200" : "block text-sm font-medium text-slate-700"}>
                  {t.uploadGalleryImageLabel || t.uploadImageLabel}
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleGalleryImageUpload}
                  required
                  className={isDark ? "mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white" : "mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900"}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-green-500 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
              >
                {t.addGalleryImageButton || t.addActivityButton}
              </button>
            </form>
          </div>
        )}
      </section>
  );
}
