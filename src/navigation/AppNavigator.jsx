import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Example from "../screens/Example";
import Home from "../screens/Home";
import ForgotPassword from "../screens/ForgotPassword";
import Learn from "../screens/Learn";
import Landing from "../screens/Landing";
import Challenges from "../screens/Challenges";
import LeaderboardPage from "../screens/LeaderboardPage";

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
  ]);

  return <RouterProvider router={routes} />;
};

export default AppNavigator;
