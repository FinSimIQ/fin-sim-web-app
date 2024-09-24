import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Example from "../screens/Example";
import Home from "../screens/Home";
import Learning from "../screens/Learning";
import Landing from "../screens/Landing";

const AppNavigator = (props) => {
	const routes = createBrowserRouter([
		{
			path: "/",
			element: <Example />,
		},
		{
			path: "/landing",
			element: <Landing />,
		},
		{
			path: "/home",
			element: <Home />,
		},
		{
			path: "/learning",
			element: <Learning />,
		},
	]);

	return <RouterProvider router={routes} />;
};

export default AppNavigator;
