import React from 'react'
import { Story } from '@storybook/react/types-6-0';
import { AuthView } from './Auth'
import { IRouteContext, RouteContext } from '../../routing';

interface ViewProps {
  route?: IRouteContext
}

const View: Story<ViewProps> = (args) => (
  <RouteContext.Provider value={args.route as IRouteContext}>
    <AuthView />
  </RouteContext.Provider>
)

export const LoginView = View.bind({})
LoginView.args = {
  route: ['Login', () => { }] as IRouteContext
}

export const RegisterView = View.bind({})
RegisterView.args = {
  route: ['Register', () => { }] as IRouteContext
}