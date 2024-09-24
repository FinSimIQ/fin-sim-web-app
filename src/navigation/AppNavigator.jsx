import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Example from "../screens/Example";
import Home from "../screens/Home";
import ForgotPassword from "../screens/ForgotPassword";

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
      path: "/forgot_password",
      element: <ForgotPassword />,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default AppNavigator;
