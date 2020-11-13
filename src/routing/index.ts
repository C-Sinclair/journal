export type Route =
  | 'Login'
  | 'Register'
  | 'Today'
  | 'Specific Day'

export { RouteContext, RouteProvider } from './context'
export { useRouter } from './useRouter'
export { pathToRoute, dateFromRoute } from './util'
export { Router } from './Router'

export type { PageRoute } from './Router'
export type { IRouteContext } from './context'
