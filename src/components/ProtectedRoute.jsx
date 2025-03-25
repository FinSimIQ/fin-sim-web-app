import { Navigate, useLocation } from 'react-router-dom';
import useStore from '../store/useStore';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useStore(state => state.isAuthenticated);
  const checkTokenExpiration = useStore(state => state.checkTokenExpiration);
  const logout = useStore(state => state.logout);
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated && !checkTokenExpiration()) {
      logout();
    }
  }, [isAuthenticated, checkTokenExpiration, logout]);

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
};

export default ProtectedRoute;