import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import AppNavigator from "./navigation/AppNavigator";
import theme from "./theme";
import { useEffect } from 'react';
import io from 'socket.io-client';

function App() {
	useEffect(() => {
		const socket = io('http://localhost:8081');
  
    socket.on('server connection', (msg) => {
      console.log(msg);
    })

    socket.on('room join', (msg) => {
      console.log(msg);
      socket.emit('ready', {'name': "kirtan"});
    })

    socket.on('joinAnnouncement', (msg) => {
      console.log(msg);
    })

    socket.on('readyAcknowledged', (msg) => {
      console.log(msg);
    })

    socket.on('readyAnnouncement', (msg) => {
      console.log(msg);
    })

    socket.on('allReady', (msg) => {
      console.log(msg);
    })

		return () => {
			socket.disconnect();
		};
	}, []);

	return (
		<ChakraProvider theme={theme}>
			<AppNavigator />
		</ChakraProvider>
	);
}

export default App;