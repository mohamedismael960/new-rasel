/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/**/*.{html,ts,tsx,jsx}', // Include all app files
    './libs/**/*.{html,ts,tsx,jsx}', // Include any shared libs if needed
  ],
  safelist: [
    {
      pattern: /(bg|text)-(red|gray|green|orange|yellow)-(100|200|300|400|500|600|700|800|900)/, // For dynamic status colors
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        primary_light: "var(--primary-light)",
        primary_dark: "var(--primary-dark)",
        secondary: "var(--secondary)",
        secondary_light: "var(--secondary-light)",
        secondary_dark: "var(--secondary-dark)",
        success: "var(--success)",
        accent: "var(--accent)",
        gray: {
          100: "#F8F8F8",
          150: "#f5f5f5",
          200: "#EAEAEA",
          250: "#FFFFFF",
          300: "#D2D2D2",
          400: "#A6A6A6",
          500: "#7F7F7F",
          600: "#525252",
          650: "#878787",
          700: "#393939",
          800: "#262626",
          900: "#171717"
        }

      },
      fontFamily: {
        stc: ['STC_Forward', 'sans-serif'],
        icon: ['stc-font-icons'],
      },
      transitionProperty: {
        'max-height': 'max-height',
        'rotate': 'rotate',
      },
      direction: {
        ltr: 'ltr',
        rtl: 'rtl',
      },
      margin: {
        '6.5': '6.5rem',
      }
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '15px',
    },
    rotate: {
      '90': '90deg',
      '-90': '-90deg',
      '180deg': '180deg',
      '-180deg': '-180deg',
    },
    dropShadow: {
      'basic': '0 8px 6px rgba(0, 0, 0, 0.04)',
    },
    fontWeight: {
      normal: '400',
      semibold: '500',
      bold: 'bold',
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.dir-ltr': {
          direction: 'ltr',
        },
        '.dir-rtl': {
          direction: 'rtl',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
