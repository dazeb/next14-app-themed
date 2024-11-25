import type { Config } from "tailwindcss";

const config: Config = {
  "content": [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  "theme": {
    "extend": {
      "fontFamily": {
        "sans": [
          "var(--font-sans)",
          "sans-serif"
        ]
      },
      "colors": {
        "background": "#F7F8F7",
        "foreground": "#181B19",
        "neutral": {
          "50": "#f9faf9",
          "100": "#f4f5f4",
          "200": "#e5e6e5",
          "300": "#d3d5d3",
          "400": "#a1a3a1",
          "500": "#717371",
          "600": "#515452",
          "700": "#3e413f",
          "800": "#252826",
          "900": "#161917"
        },
        "brand": {
          "50": "#fcf4fd",
          "100": "#f6e5fa",
          "200": "#eed0f6",
          "300": "#e1acf1",
          "400": "#cd78e9",
          "500": "#b844e1",
          "600": "#a315d4",
          "700": "#8b00b8",
          "800": "#760596",
          "900": "#600778"
        },
        "highlight": {
          "50": "#faf5ff",
          "100": "#f3e8ff",
          "200": "#e9d5ff",
          "300": "#d8b4fe",
          "400": "#c084fc",
          "500": "#a855f7",
          "600": "#9333ea",
          "700": "#7e22ce",
          "800": "#6b21a8",
          "900": "#581c87"
        }
      },
      "borderRadius": {
        "sm": "0.0833rem",
        "default": "0.1667rem",
        "md": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.8125rem",
        "2xl": "1.125rem",
        "3xl": "1.6875rem"
      },
      "keyframes": {
        "accordion-down": {
          "from": {
            "height": "0"
          },
          "to": {
            "height": "var(--radix-accordion-content-height)"
          }
        },
        "accordion-up": {
          "from": {
            "height": "var(--radix-accordion-content-height)"
          },
          "to": {
            "height": "0"
          }
        }
      },
      "animation": {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  "plugins": []
};

export default config;
