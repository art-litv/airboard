import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function useEffectRedirect(path, redirectFrom) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    location.pathname === redirectFrom && navigate(path);
  }, [location.pathname]);
}
