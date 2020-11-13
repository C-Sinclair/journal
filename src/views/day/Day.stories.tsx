import React from 'react'
import { User } from "@supabase/gotrue-js/dist/main/lib/types";
import { Story, Meta } from '@storybook/react/types-6-0';
import { DayView } from './Day'
import { DATE } from './Day.test.values'
import { RouteProvider } from '../../routing';
import { AuthProvider } from '../../auth';

interface ViewProps {
  initialPath?: string
  pathname?: string
}

//@ts-ignore
const fakeUser: User = {
  id: "test-id"
}

const View: Story<ViewProps> = (args) => (
  <AuthProvider loggedIn={fakeUser}>
    <RouteProvider {...args}>
      <DayView pathname={args.pathname} />
    </RouteProvider>
  </AuthProvider>
)

export const TodayView = View.bind({})
TodayView.args = {
  initialPath: ''
}

export const PreviousDayView = View.bind({})
PreviousDayView.args = {
  initialPath: `day/${DATE}`,
  pathname: `/day/${DATE}`
}

export default {
  title: 'Day',
  component: DayView
} as Meta