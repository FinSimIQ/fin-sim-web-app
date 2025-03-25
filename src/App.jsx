import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppNavigator from "./navigation/AppNavigator";
import { usePageTracking } from "./hooks/usePageTracking";
import theme from "./theme";

function AppWithTracking() {
	usePageTracking();
	return <AppNavigator />;
  }

function App() {
	return (
		<ChakraProvider theme={theme}>
			<AppNavigator />
		</ChakraProvider>
	);
}

export default App;
