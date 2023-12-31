import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export default function ScrollToTop() {
  const { pathname} = useLocation(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}