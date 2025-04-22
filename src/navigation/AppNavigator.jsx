import {
  createBrowserRouter,
  redirect,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
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
import DetailedStock from "../screens/DetailedStock";
import StockExplorer from "../screens/StockExplorer";
import { usePageTracking } from "../hooks/usePageTracking";
import ProtectedRoute from "../components/ProtectedRoute";
import Portfolio from "../screens/Portfolio";

const RootLayout = () => {
  usePageTracking();
  return <Outlet />;
};

const AppNavigator = (props) => {
  /**
  const requireAuth = () => {
    const isAuthenticated = localStorage.getItem("authToken") !== null; //or some other way to authenticate
    if (!isAuthenticated) {
      throw redirect("/login");
    }
    return null;
  }; */

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/example" element={<Example />} />
        <Route path="/home" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route
          path="/library"
          element={
            <ProtectedRoute>
              <Library />
            </ProtectedRoute>
          }
        />
        <Route
          path="/challenges"
          element={
            <ProtectedRoute>
              <Challenges />
            </ProtectedRoute>
          }
        />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute>
              <LeaderboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-friend"
          element={
            <ProtectedRoute>
              <FriendSearch />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/course/:id" element={<Course />} />
        <Route
          path="/stock"
          element={
            <ProtectedRoute>
              <DetailedStock />
            </ProtectedRoute>
          }
        />
        <Route
          path="/stockexplorer"
          element={<StockExplorer />}
        />
        <Route
          path="/portfolio"
          element={
            <ProtectedRoute>
              <Portfolio />
            </ProtectedRoute>
          }
        />
      </Route>

    )
  );
  return <RouterProvider router={router} />;
};

export default AppNavigator;
