import Loadable from 'react-loadable';
import RouteLoading from './components/RouteLoading';
import { ROUTE_LOADER_POST_DELAY } from './constants';

export const AsyncHomePage = Loadable({
  loader: () => import('../pages/HomePage'),
  loading: RouteLoading,
  delay: ROUTE_LOADER_POST_DELAY
});

export const AsyncLoginPage = Loadable({
  loader: () => import('../pages/LoginPage'),
  loading: RouteLoading,
  delay: ROUTE_LOADER_POST_DELAY
});

// export const AsyncNotFoundPage = Loadable({
//   loader: () => import('../pages/NotFoundPage'),
//   loading: RouteLoading,
//   delay: ROUTE_LOADER_POST_DELAY,
// });
//
export const AsyncSignupPage = Loadable({
  loader: () => import('../pages/SignUpPage'),
  loading: RouteLoading,
  delay: ROUTE_LOADER_POST_DELAY,
});

export const AsyncInternalErrorPage = Loadable({
  loader: () => import('../pages/ErrorPage'),
  loading: RouteLoading,
  delay: ROUTE_LOADER_POST_DELAY,
});

export const AsyncUserAccountPage = Loadable({
  loader: () => import('../pages/UserAccountPage'),
  loading: RouteLoading,
  delay: ROUTE_LOADER_POST_DELAY,
});

export const AsyncSearchPage = Loadable({
  loader: () => import('../pages/SearchPage'),
  loading: RouteLoading,
  delay: ROUTE_LOADER_POST_DELAY
});
//
export const AsyncRefinedSearchPage = Loadable({
  loader: () => import('../pages/RefinedSearchPage'),
  loading: RouteLoading,
  delay: ROUTE_LOADER_POST_DELAY
});
//
export const AsyncEventDetailsPage = Loadable({
  loader: () => import('../pages/EventDetailsPage'),
  loading: RouteLoading,
  delay: ROUTE_LOADER_POST_DELAY
});

export const AsyncProfileEditPage = Loadable({
  loader: () => import('../pages/ProfileEditPage'),
  loading: RouteLoading,
  delay: ROUTE_LOADER_POST_DELAY,
});

export const AsyncCreateEventPage = Loadable({
  loader: () => import('../pages/CreateEventPage'),
  loading: RouteLoading,
  delay: ROUTE_LOADER_POST_DELAY,
});

//
// export const AsyncUserUpcomingEvents = Loadable({
//   loader: () => import('../pages/UserUpcomingEvents'),
//   loading: RouteLoading,
//   delay: ROUTE_LOADER_POST_DELAY,
// });
