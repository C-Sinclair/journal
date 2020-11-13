import React from 'react';
import { PageRoute, Router } from '../../../routing';
import { AuthView } from '../../auth/Auth';
import { DayView } from '../../day/Day';

const routes: PageRoute[] = [{
  page: 'Login',
  component: AuthView
}, {
  page: 'Register',
  component: AuthView
}, {
  page: 'Today',
  component: DayView,
}, {
  page: 'Specific Day',
  component: DayView
}]

export const App = () => {
  return (
    <main>
      <header>
        <h1>Journal</h1>
      </header>
      <Router routes={routes} />
    </main>
  )
}
