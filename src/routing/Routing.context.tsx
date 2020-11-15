import React, { createContext, FC, useState, useMemo, useEffect, useCallback } from "react";
import type { Route } from './Routing.d'
import { useCurrentUser } from "../auth";
import { pathToRoute, routeToUrl } from "./Routing.utils";

export interface IRouteContext {
  page: Route, 
  setPage: (page: Route) => void, 
  path: string
  navigate: (page: Route) => void
}

export const RouteContext = createContext<IRouteContext>({
  page: { name: 'Today', date: new Date() }, 
  setPage: () => { },
  path: '/',
  navigate: () => { }
})

interface RouteProviderProps {
  initialPath?: string
}

export const RouteProvider: FC<RouteProviderProps> = ({ 
  children, 
  initialPath, 
}) => {
  const [user] = useCurrentUser()
  /** The pathname without the first / */
  const [path, setPath] = useState(initialPath || window.location.pathname.slice(1).toLowerCase())
  /** The current route */
  const [page, setPage] = useState(pathToRoute(path, !!user))
  
  useEffect(() => {
    setPath(window.location.pathname.slice(1).toLowerCase())
  }, [page])

  const navigate = useCallback((route: Route) => {
    console.log("Navigating to reoute", route)
    const url = routeToUrl(route)
    window.history.replaceState({}, route.name, url)
    setPage(route)
    setPath(url.slice(1))
  }, [setPage, setPath])

  const route = useMemo<IRouteContext>(() => ({page, setPage, path, navigate }), [page, setPage, path, navigate])

  return (
    <RouteContext.Provider value={route}>
      {children}
    </RouteContext.Provider>
  )
}