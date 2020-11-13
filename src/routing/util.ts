import type { Route } from ".";

export const pathToRoute = (path: string, loggedIn?: boolean): Route => {
  if (path === 'register') {
    return 'Register' as Route
  }
  if (path === 'login' || !loggedIn) {
    return 'Login' as Route
  }
  if (path.split('/')[0] === 'day') {
    return 'Specific Day'
  }
  return 'Today'
}

export const dateFromRoute = (route: Route, pathname: string): Date => {
  if (route === 'Today') {
    return new Date()
  }
  if (route === 'Specific Day') {
    const dateString = pathname.split('/')[2]
    const [day, month, year] = dateString.split('-').map(Number.parseFloat)
    return new Date(2000 + year, month - 1, day)
  }
  throw new Error("No current date is parsable from the route")
}