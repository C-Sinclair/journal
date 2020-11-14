import React, { Dispatch, SetStateAction, createContext, FC, useState, useMemo } from "react";
import type { Route } from '.'
import { useCurrentUser } from "../auth";
import { pathToRoute } from "./util";

export type IRouteContext = [Route, Dispatch<SetStateAction<Route>>, string]

export const RouteContext = createContext<IRouteContext>(['Today', () => { }, '/'])

interface RouteProviderProps {
  initialPath?: string
  /** For mocking */
  pathname?: string
}

export const RouteProvider: FC<RouteProviderProps> = ({ 
  children, 
  initialPath, 
  pathname = window.location.pathname
}) => {
  const path = initialPath || window.location.pathname.slice(1).toLowerCase()
  const [user] = useCurrentUser()
  const [page, setPage] = useState(pathToRoute(path, !!user))
  const route = useMemo<IRouteContext>(() => ([page, setPage, pathname]), [page, setPage, pathname])

  return (
    <RouteContext.Provider value={route}>
      {children}
    </RouteContext.Provider>
  )
}