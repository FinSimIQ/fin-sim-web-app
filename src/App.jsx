import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import AppNavigator from "./navigation/AppNavigator";

function App() {
  return (
    <ChakraProvider>
      <AppNavigator />
    </ChakraProvider>
  );
}

export default App;
