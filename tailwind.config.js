const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    variants: {
        extend: {
            backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
        },
    },
    theme: {
        extend: {
            fontFamily: {
                condensed: ['One Dot Cd'],
                sans: ['One Dot'],
                // serif: ['One Dot'],
            },
            colors: {
                'main-content': '#E5E5E5',
                'blue-primary': '#002034',
                'blue-title': '#202123',
                'blue-secondary': '#00587C',
                'blue-accent': '#006491',
                disabled: '#B5B5B5',
            },
        },
    },
    plugins: [],
});
