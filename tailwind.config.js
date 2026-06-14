export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // ── Light Mode (Aurelia inspired) ──
        primary: "#C03221", // brick red
        "primary-dark": "#9e2619", // deeper red
        "primary-hover": "#D94030",
        bg: "#FAF7F2", // warm cream
        "bg-2": "#F2EDE4", // slightly darker cream
        surface: "#FFFFFF",
        "surface-2": "#F5EFE6", // warm card bg
        warm: "#C4956A", // terracotta/warm brown
        "warm-light": "#E8C99A", // light gold
        ink: "#1C2B3A", // deep navy text
        "ink-light": "#4A5568", // secondary text
        "ink-muted": "#8A9BB0", // muted text
        teal: "#2D6E6E", // deep teal
        "teal-light": "#4A9B8E", // lighter teal
        gold: "#C9943A", // warm gold accent

        // ── Dark Mode (Artisan inspired) ──
        "bg-dark": "#0D1B2A", // very deep navy
        "bg-dark-2": "#112236", // slightly lighter navy
        "surface-dark": "#1A2E42", // card surface
        "surface-dark-2": "#1F3650", // elevated surface
        "text-dark": "#F0E6D3", // warm white text
        "text-dark-2": "#C9B99A", // secondary warm text
        "muted-dark": "#7A8FA6", // muted text
        "primary-dm": "#E05540", // brighter red for dark
        "gold-dm": "#D4A853", // gold accent for dark
        "teal-dm": "#4FD1B5", // bright teal for dark
        "warm-dm": "#D4956A", // warm terracotta for dark
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Outfit'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
