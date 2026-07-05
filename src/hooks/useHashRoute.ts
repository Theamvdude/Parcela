import { useState, useEffect, useCallback } from 'react';

export type Route =
  | '/'
  | '/services'
  | '/case-studies'
  | '/process'
  | '/blog'
  | '/about'
  | '/contact'
  | '/terms'
  | '/privacy'
  | '/refund';

export function useHashRoute(): [Route, (r: Route) => void] {
  const getRoute = (): Route => {
    const hash = window.location.hash.replace(/^#/, '');
    const routes: Route[] = [
      '/services', '/case-studies', '/process', '/blog',
      '/about', '/contact', '/terms', '/privacy', '/refund', '/',
    ];
    return (routes.find((r) => r === hash) || '/') as Route;
  };

  const [route, setRouteState] = useState<Route>(getRoute());

  useEffect(() => {
    const onHash = () => {
      setRouteState(getRoute());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = useCallback((r: Route) => {
    window.location.hash = r;
  }, []);

  return [route, navigate];
}
