import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import AppNavigator from "./navigation/AppNavigator";
import theme from "./theme";

function App() {
	return (
		<ChakraProvider theme={theme}>
			<AppNavigator />
		</ChakraProvider>
	);
}

export default App;
