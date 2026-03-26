import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Home, Sparkles } from "lucide-react";

// Ticker words
const TICKER_WORDS = [
  "WARDROBE",
  "✦",
  "STYLE",
  "✦",
  "CURATED",
  "✦",
  "ATELIER",
  "✦",
  "FASHION",
  "✦",
  "IDENTITY",
  "✦",
  "LOOK",
  "✦",
  "ELEGANCE",
  "✦",
  "BESPOKE",
  "✦",
  "WARDROBE",
  "✦",
  "STYLE",
  "✦",
  "CURATED",
  "✦",
  "ATELIER",
  "✦",
  "FASHION",
  "✦",
  "IDENTITY",
  "✦",
];

export default function PageNotFound() {
  const navigate = useNavigate();
  const lottieRef = useRef(null);

  useEffect(() => {
    // Load Lottie player script
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
    script.async = true;
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  return (
    <main className="relative min-h-[calc(100dvh-82px)] flex flex-col items-center justify-center overflow-hidden bg-[#F7F4EF] page-enter">
      <section className="relative z-10 flex flex-col items-center text-center px-6 gap-6">
        <div className="relative flex items-center justify-center select-none">
          <p
            className="playfair italic font-medium pointer-events-none"
            style={{
              fontSize: "clamp(6rem, 18vw, 12rem)",
              color: "#1A1A18",
              opacity: 1,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              userSelect: "none",
            }}
            aria-hidden="true"
          >
            404
          </p>
        </div>

        <h1
          className="playfair italic font-medium text-[#1A1A18]"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2.4rem)" }}
        >
          This page has stepped out.
        </h1>

        <p
          className="work-sans text-[#6B6460] max-w-[420px] leading-relaxed"
          style={{ fontSize: "clamp(0.82rem, 2vw, 0.95rem)" }}
        >
          The look you were searching for doesn't exist — but your perfect style
          moment is just one step away.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <button
            onClick={() => navigate("/dashboard")}
            className="
                            inline-flex items-center justify-center gap-2
                            bg-[#1C1C1A] text-[#FDFAF6]
                            rounded-full px-7 py-3
                            work-sans uppercase text-[0.72rem] tracking-[0.1em] font-medium
                            hover:-translate-y-0.5 hover:shadow-lg
                            transition-all duration-200
                        "
          >
            <Home size={14} aria-hidden="true" />
            Return Home
          </button>
        </div>
      </section>
    </main>
  );
}
