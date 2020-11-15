export type Route =
  | { name: 'Login' }
  | { name: 'Register' }
  | { name: 'Today', date: Date }
  | { name: 'Specific Day', date: Date }
