import React from "react";
import { activitiesData, content, galleryImages } from "./data/siteContent";
import { supabase } from "./lib/supabase";
import LoginSection from "./components/admin/LoginSection";
import AssistantWidget from "./components/assistant/AssistantWidget";
import Header from "./components/layout/Header";
import FloatingWhatsApp from "./components/layout/FloatingWhatsApp";
import Footer from "./components/layout/Footer";
import AboutSection from "./components/sections/AboutSection";
import ActivitiesSection from "./components/sections/ActivitiesSection";
import ContactSection from "./components/sections/ContactSection";
import DonationSection from "./components/sections/DonationSection";
import GallerySection from "./components/sections/GallerySection";
import HeroSection from "./components/sections/HeroSection";

export default function App() {
  const [isDark, setIsDark] = React.useState(false);
  const [lang, setLang] = React.useState("fr");
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [isAssistantOpen, setIsAssistantOpen] = React.useState(false);
  const [assistantInput, setAssistantInput] = React.useState("");
  const [assistantMessages, setAssistantMessages] = React.useState([]);
  const [isAssistantTyping, setIsAssistantTyping] = React.useState(false);
  const assistantScrollRef = React.useRef(null);
  const assistantAbortRef = React.useRef(null);

  const [showLogin, setShowLogin] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("ennourLoggedIn") === "true";
  });
  const [loginEmail, setLoginEmail] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");
  const [loginError, setLoginError] = React.useState("");
  const [showManager, setShowManager] = React.useState(false);
  const [uploadedImage, setUploadedImage] = React.useState(null);
  const [uploadedGalleryImage, setUploadedGalleryImage] = React.useState(null);
  const [activitiesDataState, setActivitiesDataState] = React.useState(activitiesData);
  const [_isLoadingActivities, setIsLoadingActivities] = React.useState(true);
  const [galleryImagesState, setGalleryImagesState] = React.useState({
    fr: galleryImages,
    ar: galleryImages,
  });
  const [_isLoadingGallery, setIsLoadingGallery] = React.useState(true);

  const aiApiKey = import.meta.env.VITE_AI_API_KEY;
  const aiBaseUrl = import.meta.env.VITE_AI_BASE_URL || "https://api.openai.com/v1";
  const aiModel = import.meta.env.VITE_AI_MODEL || "gpt-4o-mini";
  const aiEndpoint = import.meta.env.VITE_ASSISTANT_ENDPOINT || "/api/assistant";

  const t = content[lang];
  const activities = activitiesDataState[lang];
  const gallery = galleryImagesState[lang] || [];
  const isArabic = lang === "ar";

  React.useEffect(() => {
    setAssistantMessages([{ role: "assistant", text: t.assistantWelcome }]);
  }, [lang, t.assistantWelcome]);

  React.useEffect(() => {
    if (!assistantScrollRef.current) return;
    assistantScrollRef.current.scrollTop = assistantScrollRef.current.scrollHeight;
  }, [assistantMessages, isAssistantTyping, isAssistantOpen]);

  React.useEffect(() => {
    return () => {
      if (assistantAbortRef.current) {
        assistantAbortRef.current.abort();
      }
    };
  }, []);

  React.useEffect(() => {
    const loadActivitiesFromSupabase = async () => {
      if (!supabase) {
        setIsLoadingActivities(false);
        return;
      }

      try {
        setIsLoadingActivities(true);
        const { data, error } = await supabase
          .from("activities")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;

        // Group activities by language
        const grouped = {
          fr: activitiesData.fr,
          ar: activitiesData.ar,
        };

        if (data && data.length > 0) {
          data.forEach((activity) => {
            const lang = activity.lang || "fr";
            if (!grouped[lang]) {
              grouped[lang] = [];
            }
            grouped[lang].push({
              title: activity.title,
              text: activity.text,
              image: activity.image,
              id: activity.id,
            });
          });
        }

        setActivitiesDataState(grouped);
      } catch (err) {
        console.error("Error loading activities:", err);
      } finally {
        setIsLoadingActivities(false);
      }
    };

    loadActivitiesFromSupabase();
  }, []);

  React.useEffect(() => {
    const loadGalleryFromSupabase = async () => {
      if (!supabase) {
        setIsLoadingGallery(false);
        return;
      }

      try {
        setIsLoadingGallery(true);
        const { data, error } = await supabase
          .from("gallery")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;

        const grouped = {
          fr: galleryImages.map((image) => ({ image })),
          ar: galleryImages.map((image) => ({ image })),
        };

        if (data && data.length > 0) {
          data.forEach((item) => {
            const itemLang = item.lang || "fr";
            if (!grouped[itemLang]) {
              grouped[itemLang] = [];
            }
            grouped[itemLang].push({
              image: item.image,
              id: item.id,
            });
          });
        }

        setGalleryImagesState(grouped);
      } catch (err) {
        console.error("Error loading gallery:", err);
      } finally {
        setIsLoadingGallery(false);
      }
    };

    loadGalleryFromSupabase();
  }, []);

  React.useEffect(() => {
    if (showManager && isLoggedIn) {
      const activitiesSection = document.getElementById("activites");
      if (activitiesSection) {
        activitiesSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [showManager, isLoggedIn]);

  const whatsappMessage = encodeURIComponent(
    "السلام عليكم، أود التواصل مع جمعية النور للتنمية والأعمال الخيرية."
  );
  const whatsappLink = `https://wa.me/212XXXXX?text=${whatsappMessage}`;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${t.formTitle} - ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nEmail: ${form.email}`);
    window.location.href = `mailto:contact.association.ennour@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginEmail === "admin@ennour.com" && loginPassword === "123456") {
      setIsLoggedIn(true);
      setShowLogin(false);
      setShowManager(true);
      setLoginError("");
      try {
        window.localStorage.setItem("ennourLoggedIn", "true");
      } catch {
        // ignore
      }
      return;
    }

    setLoginError(t.loginFailed);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setUploadedImage(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleAddActivity = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const text = e.target.text.value;

    if (!uploadedImage) {
      return;
    }

    try {
      const { data, error } = await supabase
        .from("activities")
        .insert([
          {
            title,
            text,
            image: uploadedImage,
            lang,
          },
        ])
        .select();

      if (error) throw error;

      // Add to local state
      if (data && data.length > 0) {
        setActivitiesDataState((prev) => ({
          ...prev,
          [lang]: [...prev[lang], { title, text, image: uploadedImage, id: data[0].id }],
        }));
      }

      e.target.reset();
      setUploadedImage(null);
    } catch (err) {
      console.error("Error adding activity:", err);
    }
  };

  const handleGalleryImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setUploadedGalleryImage(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setUploadedGalleryImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleAddGalleryImage = async (e) => {
    e.preventDefault();

    if (!uploadedGalleryImage) {
      return;
    }

    if (!supabase) {
      setGalleryImagesState((prev) => ({
        ...prev,
        [lang]: [...(prev[lang] || []), { image: uploadedGalleryImage }],
      }));
      e.target.reset();
      setUploadedGalleryImage(null);
      return;
    }

    try {
      const { data, error } = await supabase
        .from("gallery")
        .insert([
          {
            image: uploadedGalleryImage,
            lang,
          },
        ])
        .select();

      if (error) throw error;

      setGalleryImagesState((prev) => ({
        ...prev,
        [lang]: [
          ...(prev[lang] || []),
          { image: uploadedGalleryImage, id: data?.[0]?.id },
        ],
      }));

      e.target.reset();
      setUploadedGalleryImage(null);
    } catch (err) {
      console.error("Error adding gallery image:", err);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setShowManager(false);
    try {
      window.localStorage.removeItem("ennourLoggedIn");
    } catch {
      // ignore
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(`${t.copy} : ${text}`);
    } catch {
      alert(t.copyError);
    }
  };

  const contactEmail = "contact.association.ennour@gmail.com";
  const contactPhone1 = t.footerPhone1;
  const contactPhone2 = t.footerPhone2;
  const quickQuestions = [t.assistantQuick1, t.assistantQuick2, t.assistantQuick3, t.assistantQuick4];

  const normalizeText = (value) => {
    const base = String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    try {
      return base
        .replace(/[^\p{L}\p{N}\s]/gu, " ")
        .replace(/\s+/g, " ")
        .trim();
    } catch {
      // Fallback for browsers that don't support Unicode property escapes.
      return base
        .replace(/[^a-z0-9\u0600-\u06FF\s]/gi, " ")
        .replace(/\s+/g, " ")
        .trim();
    }
  };

  const getAssistantReply = (question) => {
    const q = normalizeText(question);

    const hasAny = (keywords) => keywords.some((k) => q.includes(k));
    const normalizedQuick1 = normalizeText(t.assistantQuick1);
    const normalizedQuick2 = normalizeText(t.assistantQuick2);
    const normalizedQuick3 = normalizeText(t.assistantQuick3);
    const normalizedQuick4 = normalizeText(t.assistantQuick4);
    const isShortGreeting = ["hi", "hey", "hello", "bonjour", "bonsoir", "salut", "salam", "slm", "slt", "مرحبا", "سلام", "اهلا"].includes(q);

    // Ensure recommended quick questions always return language-correct local replies.
    if (q === normalizedQuick1) {
      return `${t.assistantDonateReply} ${t.bankTitle}: ${t.rib} 230610566047522100160028 - ${t.bank} Cih Bank.`;
    }

    if (q === normalizedQuick2) {
      return `${t.assistantContactReply} ${t.footerEmail} | ${t.footerPhone1} | ${t.footerPhone2}`;
    }

    if (q === normalizedQuick3) {
      return `${t.assistantLocationReply} ${t.mapLocation}`;
    }

    if (q === normalizedQuick4) {
      return `${t.assistantActivitiesReply} ${activities.map((a) => a.title).join(" • ")}`;
    }

    if (isShortGreeting || hasAny(["hi ", "hello ", "bonjour ", "salut ", "salam ", "slm ", "مرحبا", "السلام", "اهلا"])) {
      return t.assistantGreetingReply;
    }

    if (hasAny(["merci", "thanks", "thank you", "chokran", "شكرا", "thx"])) {
      return t.assistantThanksReply;
    }

    if (hasAny(["don", "تبرع", "virement", "rib", "bank", "banque", "بنكي", "حساب", "تبرع", "ntbr3", "n9der ntber3", "compte"])) {
      return `${t.assistantDonateReply} ${t.bankTitle}: ${t.rib} 230610566047522100160028 - ${t.bank} Cih Bank.`;
    }

    if (hasAny(["contact", "email", "mail", "phone", "telephone", "whatsapp", "twasol", "تواصل", "اتصال", "num", "numero", "n3yt", "n3ayet", "tlf", "tel"])) {
      return `${t.assistantContactReply} ${t.footerEmail} | ${t.footerPhone1} | ${t.footerPhone2}`;
    }

    if (hasAny(["ou", "adresse", "location", "map", "adresse", "fin", "فين", "اين", "أين", "موقع", "fayn", "fain", "blassa", "address"])) {
      return `${t.assistantLocationReply} ${t.mapLocation}`;
    }

    if (hasAny(["activite", "activites", "actions", "projet", "projets", "نشاط", "انشطة", "أنشطة", "انشطتكم", "نشاطات", "ach katdir", "ach katdiro", "program"])) {
      return `${t.assistantActivitiesReply} ${activities.map((a) => a.title).join(" • ")}`;
    }

    return t.assistantFallback;
  };

  const getAssociationContext = () => {
    const activitiesTitles = activities.map((a) => a.title).join(" | ");
    return [
      `Association: ${t.brandTitle}`,
      `Donation RIB: 230610566047522100160028`,
      `Bank: Cih Bank`,
      `Email: ${t.footerEmail}`,
      `Phone1: ${t.footerPhone1}`,
      `Phone2: ${t.footerPhone2}`,
      `Location: ${t.mapLocation}`,
      `Activities: ${activitiesTitles}`,
    ].join("\n");
  };

  const askAssistantApi = async (question) => {
    const recentHistory = assistantMessages
      .slice(-6)
      .map((m) => ({ role: m.role, content: m.text }));

    if (aiEndpoint) {
      try {
        const response = await fetch(aiEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question,
            lang,
            context: getAssociationContext(),
            history: recentHistory,
          }),
        });

        if (!response.ok) return null;
        const data = await response.json();
        const text = (data?.reply || data?.answer || "").trim();
        return text || null;
      } catch {
        return null;
      }
    }

    if (!aiApiKey) return null;

    if (assistantAbortRef.current) {
      assistantAbortRef.current.abort();
    }

    const controller = new AbortController();
    assistantAbortRef.current = controller;

    const timeoutId = setTimeout(() => controller.abort(), 12000);

    try {
      const response = await fetch(`${aiBaseUrl}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${aiApiKey}`,
        },
        body: JSON.stringify({
          model: aiModel,
          temperature: 0.2,
          messages: [
            {
              role: "system",
              content:
                "You are an assistant for a Moroccan charity website. Reply in the user's language (Darija/French/Arabic). For association questions, prioritize exact facts from provided context only. For general logical questions, give clear short answers.",
            },
            {
              role: "system",
              content: getAssociationContext(),
            },
            ...recentHistory,
            {
              role: "user",
              content: question,
            },
          ],
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        return null;
      }

      const data = await response.json();
      const text = data?.choices?.[0]?.message?.content?.trim();
      return text || null;
    } catch {
      return null;
    } finally {
      clearTimeout(timeoutId);
      assistantAbortRef.current = null;
    }
  };

  const askAssistant = async (raw) => {
    const question = raw.trim().slice(0, 300);
    if (!question || isAssistantTyping) return;

    setAssistantMessages((prev) => [...prev, { role: "user", text: question }]);
    setAssistantInput("");
    setIsAssistantTyping(true);

    // Prefer deterministic local replies for known association intents
    // (donation/contact/location/activities/greetings), then fallback to API.
    const localReply = getAssistantReply(question);
    let reply = localReply;

    if (localReply === t.assistantFallback) {
      const apiReply = await askAssistantApi(question);
      reply = apiReply || localReply;
    }

    setAssistantMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    setIsAssistantTyping(false);
  };

  const pageClass = isDark
    ? "min-h-screen scroll-smooth overflow-x-hidden bg-slate-950 text-slate-100"
    : "min-h-screen scroll-smooth overflow-x-hidden bg-white text-slate-800";

  const headerClass = isDark
    ? "sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur"
    : "sticky top-0 z-50 border-b border-orange-100 bg-white/95 backdrop-blur";

  const navClass = isDark
    ? "hidden gap-6 text-sm font-medium text-slate-200 md:flex md:flex-nowrap md:shrink-0"
    : "hidden gap-6 text-sm font-medium text-slate-700 md:flex md:flex-nowrap md:shrink-0";

  const statCardClass = isDark
    ? "rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm"
    : "rounded-2xl border border-slate-100 bg-white p-5 shadow-sm";

  return (
    <div className={pageClass} dir={isArabic ? "rtl" : "ltr"}>
      <Header
        t={t}
        isDark={isDark}
        setIsDark={setIsDark}
        lang={lang}
        setLang={setLang}
        isLoggedIn={isLoggedIn}
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        showManager={showManager}
        setShowManager={setShowManager}
        logout={logout}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        headerClass={headerClass}
        navClass={navClass}
      />

      <LoginSection
        showLogin={showLogin}
        isLoggedIn={isLoggedIn}
        isDark={isDark}
        t={t}
        handleLoginSubmit={handleLoginSubmit}
        loginEmail={loginEmail}
        setLoginEmail={setLoginEmail}
        loginPassword={loginPassword}
        setLoginPassword={setLoginPassword}
        loginError={loginError}
      />

      <HeroSection t={t} isDark={isDark} statCardClass={statCardClass} />
      <AboutSection t={t} isDark={isDark} />

      <ActivitiesSection
        t={t}
        isDark={isDark}
        activities={activities}
        isLoggedIn={isLoggedIn}
        showManager={showManager}
        lang={lang}
        supabase={supabase}
        setActivitiesDataState={setActivitiesDataState}
        handleAddActivity={handleAddActivity}
        handleImageUpload={handleImageUpload}
      />

      <GallerySection
        t={t}
        isDark={isDark}
        gallery={gallery}
        isLoggedIn={isLoggedIn}
        showManager={showManager}
        lang={lang}
        supabase={supabase}
        setGalleryImagesState={setGalleryImagesState}
        handleAddGalleryImage={handleAddGalleryImage}
        handleGalleryImageUpload={handleGalleryImageUpload}
      />

      <DonationSection t={t} isDark={isDark} copyToClipboard={copyToClipboard} />

      <ContactSection
        t={t}
        isDark={isDark}
        contactEmail={contactEmail}
        contactPhone1={contactPhone1}
        contactPhone2={contactPhone2}
        copyToClipboard={copyToClipboard}
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <FloatingWhatsApp whatsappLink={whatsappLink} />

      <AssistantWidget
        t={t}
        isDark={isDark}
        lang={lang}
        isAssistantOpen={isAssistantOpen}
        setIsAssistantOpen={setIsAssistantOpen}
        assistantScrollRef={assistantScrollRef}
        assistantMessages={assistantMessages}
        isAssistantTyping={isAssistantTyping}
        quickQuestions={quickQuestions}
        askAssistant={askAssistant}
        assistantInput={assistantInput}
        setAssistantInput={setAssistantInput}
      />

      <Footer t={t} />
    </div>
  );
}
