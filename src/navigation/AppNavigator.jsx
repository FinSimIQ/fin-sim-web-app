import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Example from "../screens/Example";
import Home from "../screens/Home";
import Challenges from "../screens/Challenges";

const AppNavigator = (props) => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Example />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/challenges",
      element: <Challenges />,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default AppNavigator;
