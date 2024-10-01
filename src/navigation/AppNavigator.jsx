import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Example from "../screens/Example";
import Home from "../screens/Home";
import Learn from "../screens/Learn";
import Landing from "../screens/Landing";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const AppNavigator = (props) => {
	const routes = createBrowserRouter([
		{
			path: "/",
			element: <Landing />,
		},
		{
			path: "/example",
			element: <Example />,
		},
		{
			path: "/home",
			element: <Home />,
		},
		{
			path: "/learn",
			element: <Learn />,
		},
		{
			path: "/learn",
			element: <Learn />,
		},
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/signup",
			element: <Signup />,
		},
	]);

	return <RouterProvider router={routes} />;
};

export default AppNavigator;
