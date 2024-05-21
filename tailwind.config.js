/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        r: "Pretendard-Regular",
        m: "Pretendard-Medium",
        sb: "Pretendard-SemiBold",
        b: "Pretendard-Bold",
      },
      backgroundColor: {
        brand: "var(--brand-color)",
      },
      textColor: {
        brand: "var(--brand-color)",
      },
      borderColor: {
        brand: "var(--brand-color)",
      },
      boxShadow: {
        gray: "0px 2px 6px 0px rgba(0, 0, 0, 0.12)",
        "t-gray": "0px -4px 8px 0px rgba(0, 0, 0, 0.12)",
        "gray-sm": "0px 2px 4px 0px rgba(0, 0, 0, 0.06)",
        modal: "0px 5px 12px 0px rgba(11, 10, 30, 0.18)",
      },
    },
  },
  plugins: [],
};
