import type { Config } from "tailwindcss";

// Full 0-100 opacity scale so any `/N` opacity modifier (e.g. border-navy-800/8,
// bg-white/12, text-white/70) resolves correctly, regardless of whether N is
// one of Tailwind's default stops (0,5,10,20,25,30,40,50,60,70,75,80,90,95,100).
const fullOpacityScale = Object.fromEntries(
  Array.from({ length: 101 }, (_, i) => [String(i), String(i / 100)])
);

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      opacity: fullOpacityScale,
      colors: {
        navy: {
          DEFAULT: "#0B0F2A",
          50: "#EEEFF5",
          100: "#D6D8E8",
          200: "#ADB1D1",
          300: "#7B81B0",
          400: "#4B5189",
          500: "#252A5C",
          600: "#171A45",
          700: "#101334",
          800: "#0B0F2A",
          900: "#070A1C",
          950: "#04050F",
        },
        violet: {
          DEFAULT: "#6A3DFF",
          light: "#8A5CFF",
        },
        purple: {
          DEFAULT: "#8A5CFF",
        },
        aqua: {
          DEFAULT: "#2EDCC4",
        },
        mist: {
          DEFAULT: "#E6FAF7",
        },
        gray: {
          soft: "#F3F4F6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "qlentra-gradient":
          "linear-gradient(135deg, #171A45 0%, #6A3DFF 55%, #2EDCC4 100%)",
        "qlentra-gradient-soft":
          "linear-gradient(135deg, rgba(106,61,255,0.12) 0%, rgba(46,220,196,0.10) 100%)",
        "qlentra-radial":
          "radial-gradient(60% 60% at 50% 40%, rgba(106,61,255,0.25) 0%, rgba(11,15,42,0) 70%)",
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(106,61,255,0.45)",
        card: "0 10px 40px -12px rgba(11,15,42,0.15)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "orbit-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "orbit-slow": "orbit-spin 40s linear infinite",
        "orbit-slower": "orbit-spin 60s linear infinite reverse",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
