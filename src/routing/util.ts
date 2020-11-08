import type { Route } from ".";

export const pathToRoute = (path: string): Route => {
  if (path in ['login', 'register']) {
    return path as Route
  }
  if (path.split('/')[0] === 'day') {
    return 'Specific Day'
  }
  return 'Today'
}