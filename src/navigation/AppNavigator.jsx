import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Example from "../screens/Example";
import Home from "../screens/Home";

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
  ]);

  return <RouterProvider router={routes} />;
};

export default AppNavigator;
