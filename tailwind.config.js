module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brili: {
          yellow: {
            50: '#FFFBEB',
            100: '#FEF3C7',
            200: '#FDE68A',
            300: '#FCD34D',
            400: '#FBBF24',
            500: '#F59E0B',
            600: '#D97706',
          },
          blue: {
            50: '#EFF6FF',
            100: '#DBEAFE',
            200: '#BFDBFE',
            300: '#93C5FD',
            400: '#60A5FA',
            500: '#3B82F6',
          },
          purple: {
            50: '#FAF5FF',
            100: '#F3E8FF',
            200: '#E9D5FF',
            300: '#D8B4FE',
            400: '#C4B5FD',
            500: '#A78BFA',
            600: '#9333EA',
          },
          tosca: {
            300: '#B2E4E8',
            400: '#A5D8DD',
            500: '#7DD3C0',
            600: '#5BBCAA',
          },
          pink: {
            300: '#F9A8D4',
            400: '#F472B6',
          }
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 4s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out 0.5s infinite',
        'star-pulse': 'starPulse 2s ease-in-out infinite',
        'star-rotate': 'starRotate 4s linear infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'sparkle-delayed': 'sparkle 1.5s ease-in-out 0.5s infinite',
        'sparkle-delayed-2': 'sparkle 1.5s ease-in-out 1s infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
        'wiggle-fast': 'wiggle 1.5s ease-in-out infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        starPulse: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', boxShadow: '0 0 0 0 rgba(252, 211, 77, 0.7)' },
          '50%': { transform: 'scale(1.05) rotate(5deg)', boxShadow: '0 0 20px 10px rgba(252, 211, 77, 0)' },
        },
        starRotate: {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0, transform: 'scale(0.5) rotate(0deg)' },
          '50%': { opacity: 1, transform: 'scale(1.2) rotate(180deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg) translateY(0px)' },
          '50%': { transform: 'rotate(5deg) translateY(-5px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}