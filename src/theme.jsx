import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/metrophobic";
import { transparentize } from "@chakra-ui/theme-tools";

const theme = extendTheme({
	colors: {
		brand: {
			400: "#75FB4C",
			500: "#42D674",
			600: "#316D60",
		},
	},
	fonts: {
		poppins: `'Poppins', sans-serif`,
		metrophobic: `'Metrophobic', sans-serif`,
	},
	fontWeights: {
		regular: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
	},
	letterSpacings: {
		tightest: "-0.25em",
		tighter: "-0.20em",
		tight: "-0.10em",
		tightish: "-0.05em",
		regular: "0",
		wideish: "0.05em",
		wide: "0.10em",
		wider: "0.20em",
		widest: "0.25em",
	},
	components: {
		Button: {
			variants: {
				primary: {
					bg: "brand.500",
					color: "white",
					_hover: {
						bg: transparentize("brand.500", 0.6),
						color: "black",
					},
					_active: {
						bg: "white",
						color: "black",
						outline: "2px solid",
						outlineColor: "brand.500",
						opacity: 1,
					},
					_disabled: {
						bg: "#AAAAAA",
					},
				},
			},
		},
	},
});

export default theme;
