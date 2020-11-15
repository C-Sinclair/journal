import React, { FC } from 'react'
import { useRouter } from './Routing.hooks'

interface RouteProps {
  showing?: boolean
  [key: string]: any
}

export interface PageRoute {
  page: 'Login' | 'Register' | 'Today' | 'Specific Day'
  component: FC<RouteProps>
}

interface RouterProps {
  routes: PageRoute[]
}

const RouteContainer: FC<RouteProps> = ({ children, showing }) => showing ? (
  <div className="route">
    {children}
  </div>
) : null

export const Router: FC<RouterProps> = ({ routes }) => {
  const { current } = useRouter()
  if (!routes.length) {
    throw new Error("Router needs at least 1 child element")
  }
  return (
    <>
      {routes.map(({ page, component: Component }, i) => (
        <RouteContainer showing={current.name === page} key={i}>
          <Component />
        </RouteContainer>
      ))}
    </>
  )
}