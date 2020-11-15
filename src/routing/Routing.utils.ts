import moment from 'moment'
import type { Route } from "./Routing.d";

export const pathToRoute = (
  path: string, 
  loggedIn?: boolean
): Route => {
  console.log(path)
  if (path === 'register') {
    return { name: 'Register' }
  }
  if (path === 'login' || !loggedIn) {
    return { name: 'Login' } 
  }
  if (path.split('/')[0] === 'day') {
    const dateString = path.split('/')[1]
    const [day, month, year] = dateString.split('-').map(Number.parseFloat)
    const date = new Date(year, month - 1, day)
    return { name: 'Specific Day', date }
  }
  return { name: 'Today', date: new Date() }
}

export const routeToUrl = (route: Route): string => {
  switch (route.name) {
    case 'Login':
      return '/login'
    case 'Register':
      return '/register'
    case 'Specific Day':
      return `/day/${moment(route.date).format("DD-MM-YYYY")}`
    case 'Today':
      return '/'
  }
}