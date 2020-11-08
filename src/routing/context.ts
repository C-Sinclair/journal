import { Dispatch, SetStateAction, createContext } from "react";
import type { Route } from '.'

export type IRouteContext = [Route, Dispatch<SetStateAction<Route>>]

export const RouteContext = createContext<IRouteContext>(['Today', () => { }])
