import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useStore from '../store/useStore';

export const usePageTracking = () => {
  const location = useLocation();
  const setLastVisitedPage = useStore(state => state.setLastVisitedPage);

  useEffect(() => {
    // Update last visited page whenever location changes
    setLastVisitedPage(location.pathname);
  }, [location, setLastVisitedPage]);

  return null;
};