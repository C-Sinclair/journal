import React from 'react';
import { PageRoute, Router, useRouter } from '../../../routing';
import { AuthView } from '../../auth/Auth';
import { DayView } from '../../day/Day';
import { Header } from './App.components'

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
  const { navigate } = useRouter()
  const onLogoClick = () => navigate('Today')
  return (
    <main>
      <Header>
        <h1 onClick={onLogoClick}>Journal</h1>
      </Header>
      <Router routes={routes} />
    </main>
  )
}
