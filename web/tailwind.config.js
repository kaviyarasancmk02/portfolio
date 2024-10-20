/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          from: {width: "0%"},
          to: {width: "100%"},
        },
        fade: {
          "0%, 100%": {opacity: "0"},
          "50%": {opacity: "1"},
        },
        blink: {
          "50%": {"border-color": "transparent"},
        },
      },
      animation: {
        typing: "typing 3s steps(40, end) forwards",
        blink: "blink 0.3s step-end infinite",
        fade: "fade 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
