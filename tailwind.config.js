module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    variants: {
        extend: {
            backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled']
        }
    },
    theme: {
        extend: {
            fontFamily: {
                condensed: ['One Dot Cd'],
                sans: ['One Dot']
                // serif: ['One Dot'],
            },
            colors: {
                'main-content': '#E5E5E5',
                'blue-primary': '#002034',
                'blue-title': '#202123',
                'blue-secondary': '#00587C',
                'blue-accent': '#006491',
                disabled: '#B5B5B5'
            }
        },
        fluidType: {
            // your fluid type settings
            // works only with unitless numbers
            // This numbers are the defaults settings
            settings: {
                fontSizeMin: 1.125, // 1.125rem === 18px
                fontSizeMax: 1.25, // 1.25rem === 20px
                ratioMin: 1.125, // Multiplicator Min
                ratioMax: 1.2, // Multiplicator Max
                screenMin: 20, // 20rem === 320px
                screenMax: 96, // 96rem === 1536px
                unit: 'rem', // default is rem but it's also possible to use 'px'
                prefix: '' // set a prefix to use it alongside the default font sizes
            },
            // Creates the text-xx classes
            // This are the default settings and analog to the tailwindcss defaults
            // Each `lineHeight` is set unitless and we think that's the way to go especially in context with fluid type.
            values: {
                xs: [-2, 1.2],
                sm: [-1, 1.2],
                base: [0, 1.2],
                lg: [1, 1.2],
                xl: [2, 1.2],
                '2xl': [3, 1.2],
                '3xl': [4, 1.2],
                '4xl': [5, 1.1],
                '5xl': [6, 1.1],
                '6xl': [7, 1.1],
                '7xl': [8, 1],
                '8xl': [9, 1],
                '9xl': [10, 1]
            }
        }
    },
    // You can disable the fontSize core plugin if you don't need the defaults.
    // If you don't disable it, the fluid-type plugin simply overrule the defaults.
    // Or you can use both alongside when you set an prefix in the settings
    corePlugins: {
        fontSize: false
    },
    plugins: [require('tailwindcss-fluid-type')]
};
