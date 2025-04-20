import {
  createBrowserRouter,
  redirect,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet
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
import StockExplorer from "../screens/StockExplorer";
import { usePageTracking } from "../hooks/usePageTracking";
import ProtectedRoute from "../components/ProtectedRoute";


const RootLayout = () => {
  usePageTracking();
  return <Outlet />;
};

const AppNavigator = (props) => {

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
        <Route path="/stockexplorer" element={<StockExplorer />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default AppNavigator;
