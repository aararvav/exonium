/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,jsx,ts,tsx,mdx}',
        './src/components/**/*.{js,jsx,ts,tsx,mdx}',
        './src/app/**/*.{js,jsx,ts,tsx,mdx}',
        './public/index.html',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            keyframes: {
                'card-transform': {
                    '0%': { transform: 'perspective(2000px) rotateX(25deg)' },
                    '25%': { transform: 'perspective(2000px) rotateX(25deg) scale(0.9)' },
                    '60%, 100%': { transform: 'none' },
                },
            },
            animation: {
                cardTransform: 'card-transform 1400ms ease forwards',
            },
        },
        container: {
            center: true,
            padding: '1rem',
            screens: {
                '5xl': '1024px',
            },
        },
    },
    plugins: [],
};
