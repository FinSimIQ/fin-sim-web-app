import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Example from "../screens/Example";
import Home from "../screens/Home";
import ForgotPassword from "../screens/ForgotPassword";
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
  const requireAuth = () => {
    const isAuthenticated = localStorage.getItem("authToken") !== null; //or some other way to authenticate
    if (!isAuthenticated) {
      throw redirect("/login");
    }
    return null;
  };

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
      loader: requireAuth,
    },
    {
      path: "/challenges",
      element: <Challenges />,
      loader: requireAuth,
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
      loader: requireAuth,
    },
    {
      path: "/add-friend",
      element: <FriendSearch />,
      loader: requireAuth,
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
  ]);

  return <RouterProvider router={routes} />;
};

export default AppNavigator;
