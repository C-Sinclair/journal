import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';
import { AuthView } from './Auth'
import { RouteProvider } from '../../routing/Routing.context';

interface ViewProps {
  initialPath?: string
}

const View: Story<ViewProps> = (args) => (
  <RouteProvider {...args}>
    <AuthView />
  </RouteProvider>
)

export const LoginView = View.bind({})
LoginView.args = {
  initialPath: 'login'
}

export const RegisterView = View.bind({})
RegisterView.args = {
  initialPath: 'register'
}

export default {
  title: 'Authentication',
  component: AuthView
} as Meta