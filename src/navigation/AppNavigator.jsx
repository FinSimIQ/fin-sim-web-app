import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Example from "../screens/Example";
import Home from "../screens/Home";
import ForgotPassword from "../screens/ForgotPassword";
import ResetPassword from "../screens/ResetPassword";
import Learn from "../screens/Learn";
import Landing from "../screens/Landing";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Challenges from "../screens/Challenges";
import LeaderboardPage from "../screens/LeaderboardPage";
import FriendSearch from "../screens/AddFriend";
import Course from "../screens/Course";
import Library from "../screens/Library";

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
			path: "/library",
			element: <Library />,
		},
		{
			path: "/challenges",
			element: <Challenges />,
		},
		{
			path: "/home",
			element: <Home />,
		},
		{
			path: "/forgot_password",
			element: <ForgotPassword />,
		},
		{
			path: "/leaderboard",
			element: <LeaderboardPage />,
		},
		{
			path: "/add-friend",
			element: <FriendSearch />,
		},
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/signup",
			element: <Signup />,
		},
		{
			path: `/course/:id`,
			element: <Course />,
		},
		{
			path: "/resetPassword",
			element: <ResetPassword />, 
		},
	]);

	return <RouterProvider router={routes} />;
};

export default AppNavigator;
