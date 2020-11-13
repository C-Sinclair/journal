import React, { FC } from 'react'
import { dateFromRoute, Route, useRouter } from '../../routing'
import { Root } from './Day.components'

const title = (route: Route) => route === 'Today' ? 'Today' : ''

interface DayViewProps {
  pathname?: string
}

export const DayView: FC<DayViewProps> = ({ 
  pathname = window.location.pathname 
}) => {
  const { current } = useRouter()
  const date = dateFromRoute(current, pathname)
  return (
    <Root>
      <h4>{title(current)}</h4>
      <p>{date.toDateString()}</p>
    </Root>
  )
}