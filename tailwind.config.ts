import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#191b26",
        "ink-mid": "#484c60",
        "ink-soft": "#80849a",
        rule: "#d0d2dc",
        "rule-light": "#e6e7ef",
        paper: "#f7f6f3",
        "paper-alt": "#f0efe9",
        slate: "#161927",
        "slate-2": "#1e2236",
        "slate-3": "#252940",
        "slate-4": "#0d0f1a",
        amber: "#b8721e",
        "amber-light": "#cc8830",
        green: "#2f6545",
        red: "#7c3328"
      },
      maxWidth: {
        shell: "1200px"
      },
      boxShadow: {
        panel: "0 24px 80px rgba(13, 15, 26, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
