/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          // Transparent states
          transparent: 'rgba(0, 0, 0, 0)',
          'transparent-light': 'rgba(0, 0, 0, 0.05)',
          'transparent-medium': 'rgba(0, 0, 0, 0.1)',
          
          // Semi-transparent states
          'semi-light': 'rgba(0, 0, 0, 0.15)',
          'semi-medium': 'rgba(0, 0, 0, 0.25)',
          'semi-dark': 'rgba(0, 0, 0, 0.35)',
          
          // Heated states - monochromatic black tones
          'heated-cool': 'rgba(30, 30, 30, 0.4)',
          'heated-warm': 'rgba(45, 45, 45, 0.5)',
          'heated-medium': 'rgba(60, 60, 60, 0.6)',
          'heated-hot': 'rgba(75, 75, 75, 0.7)',
          'heated-intense': 'rgba(90, 90, 90, 0.8)',
          'heated-extreme': 'rgba(105, 105, 105, 0.9)',
        },
        surface: {
          'glass-base': '#f8f9fa',
          'glass-overlay': 'rgba(255, 255, 255, 0.1)',
          'glass-border': 'rgba(255, 255, 255, 0.2)',
        }
      },
      backdropBlur: {
        'xs': '2px',
        'glass-light': '4px',
        'glass-medium': '8px',
        'glass-heavy': '16px',
        'glass-intense': '24px',
      },
      animation: {
        'glass-heat-up': 'glassHeatUp 2s ease-in-out forwards',
        'glass-cool-down': 'glassCoolDown 3s ease-out forwards',
        'glass-pulse-heat': 'glassPulseHeat 1.5s ease-in-out infinite',
        'glass-shimmer': 'glassShimmer 2s linear infinite',
        'glass-transition': 'glassTransition 1s ease-in-out',
        'glass-opacity-fade': 'glassOpacityFade 0.8s ease-in-out',
      },
      keyframes: {
        glassHeatUp: {
          '0%': {
            opacity: '0.1',
            backdropFilter: 'blur(2px)',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.6',
            backdropFilter: 'blur(8px)',
            transform: 'scale(1.02)',
          },
          '100%': {
            opacity: '0.9',
            backdropFilter: 'blur(16px)',
            transform: 'scale(1.05)',
          }
        },
        glassCoolDown: {
          '0%': {
            opacity: '0.9',
            backdropFilter: 'blur(16px)',
            transform: 'scale(1.05)',
          },
          '50%': {
            opacity: '0.4',
            backdropFilter: 'blur(6px)',
            transform: 'scale(1.01)',
          },
          '100%': {
            opacity: '0.1',
            backdropFilter: 'blur(2px)',
            transform: 'scale(1)',
          }
        },
        glassPulseHeat: {
          '0%, 100%': {
            opacity: '0.5',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.8',
            transform: 'scale(1.03)',
          }
        },
        glassShimmer: {
          '0%': {
            backgroundPosition: '-100% 0',
          },
          '100%': {
            backgroundPosition: '100% 0',
          }
        },
        glassTransition: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px) scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          }
        },
        glassOpacityFade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      transitionProperty: {
        'glass': 'opacity, backdrop-filter, transform, background-color',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
        '2000': '2000ms',
      },
      transitionTimingFunction: {
        'glass-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'glass-smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'glass-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'glass-inset': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'glass-heated': '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
  safelist: [
    // Dynamic classes for glass heating states
    {
      pattern: /glass-(transparent|semi|heated)-(light|medium|dark|cool|warm|hot|intense|extreme)/,
    },
    {
      pattern: /backdrop-blur-(xs|glass-light|glass-medium|glass-heavy|glass-intense)/,
    },
    {
      pattern: /animate-glass-(heat-up|cool-down|pulse-heat|shimmer|transition|opacity-fade)/,
    },
    {
      pattern: /transition-(glass)/,
    },
    {
      pattern: /duration-(400|600|800|1200|2000)/,
    },
    {
      pattern: /ease-(glass-ease|glass-smooth|glass-bounce)/,
    },
  ],
}