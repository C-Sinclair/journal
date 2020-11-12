import type { Route } from ".";

export const pathToRoute = (path: string): Route => {
  if (path === 'login') {
    return 'Login' as Route
  }
  if (path === 'register') {
    return 'Register' as Route
  }
  if (path.split('/')[0] === 'day') {
    return 'Specific Day'
  }
  return 'Today'
}