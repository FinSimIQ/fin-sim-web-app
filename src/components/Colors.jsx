import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'


// Refer to this file for the branding colors
const customTheme = extendTheme({
    colors: {
        // Base:
        black: '#262626',
        neonGreen: '#75FB4C',
        lightGreen: '#42D674',
        green: '#51B276',
        darkGreen: '#316D60',
        white: '#FFFFFF',
        // Grays:
        darkGray: '#3B3B3B',
        gray: '#5D5D5D',
        lightGray: "#E3E3E3",
    },
});