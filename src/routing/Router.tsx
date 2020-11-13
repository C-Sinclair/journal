import React, { FC } from 'react'
import { Route } from '.'
import { useRouter } from './useRouter'

interface RouteProps {
  showing?: boolean
  [key: string]: any
}

export interface PageRoute {
  page: Route
  component: FC<RouteProps>
}

interface RouterProps {
  routes: PageRoute[]
}

const RouteContainer: FC<RouteProps> = ({ children, showing }) => showing ? (
  <div>
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
        <RouteContainer showing={current === page} key={i}>
          <Component />
        </RouteContainer>
      ))}
    </>
  )
}