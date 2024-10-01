import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Example from "../screens/Example";
import Home from "../screens/Home";
import Learn from "../screens/Learn";
import Landing from "../screens/Landing";

const AppNavigator = (props) => {
	const routes = createBrowserRouter([
		{
			path: "/home",
			element: <Landing />,
		},
		{
			path: "/example",
			element: <Example />,
		},
		{
			path: "/learn",
			element: <Learn />,
		},
	]);

	return <RouterProvider router={routes} />;
};

export default AppNavigator;
