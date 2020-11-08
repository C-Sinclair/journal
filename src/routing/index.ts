export type Route =
  | 'Login'
  | 'Register'
  | 'Today'
  | 'Specific Day'

export { RouteContext } from './context'
export { useRouter } from './useRouter'
export { pathToRoute } from './util'

export type { IRouteContext } from './context'